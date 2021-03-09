import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Head from "next/head";
import Link from "next/link";
import { productsPerPage } from "../config";
import { PaginationStyles } from "./styles/PaginationStyles";

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allProductsMeta {
      count
    }
  }
`;

export default function Pagination({ page }) {
  const { error, loading, data } = useQuery(PAGINATION_QUERY);
  if (loading) return "Loading ...";
  if (error) return <p>{error.message}</p>;

  const { count } = data._allProductsMeta;
  const pageCount = Math.ceil(count / productsPerPage);

  return (
    <PaginationStyles>
      <Head>
        <title>Antistore - Page {page}</title>
      </Head>
      <div className="div-first" aria-disabled={page <= 1}>
        <Link href={`/products/${page - 1}`}>
          <a aria-disabled={page <= 1}>← Prev</a>
        </Link>
      </div>
      <div className="div-second">
        <span>
          Page {page} of {pageCount}
        </span>
      </div>
      <div className="div-third" aria-disabled={page >= pageCount}>
        <Link href={`/products/${page + 1}`}>
          <a aria-disabled={page >= pageCount}>Next →</a>
        </Link>
      </div>
    </PaginationStyles>
  );
}
