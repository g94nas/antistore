// @ts-ignore
import { config, createSchema } from "@keystone-next/keystone/schema";
import { User } from "./schemas/User";
import { Product } from "./schemas/Product";
import { ProductImage } from "./schemas/ProductImage";
import { CartItem } from "./schemas/CartItem";
import { OrderItem } from "./schemas/OrderItem";
import { Order } from "./schemas/Order";
import { createAuth } from "@keystone-next/auth";
import { extendGraphqlSchema } from "./mutations";
import {
  withItemData,
  statelessSessions,
} from "@keystone-next/keystone/session";
import "dotenv/config";
import { sendPasswordResetEmail } from "./lib/email";

const databaseURL = process.env.DATABASE_URL || "mongodb://localhost/antistore";

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
  passwordResetLink: {
    async sendToken(args) {
      await sendPasswordResetEmail(args.token, args.identity);
    },
  },
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: "mongoose",
      url: databaseURL,
    },
    lists: createSchema({
      User,
      Product,
      ProductImage,
      CartItem,
      OrderItem,
      Order,
    }),
    extendGraphqlSchema,
    ui: {
      //TODO: change this for roles
      isAccessAllowed: ({ session }) => {
        console.log(session);
        return !!session?.data;
      },
    },

    session: withItemData(statelessSessions(sessionConfig), {
      User: "id",
    }),
  })
);
