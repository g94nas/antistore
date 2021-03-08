import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Head from "next/head";
import Link from "next/link";
import { productsPerPage } from "../config";
import styled from "styled-components";

const PaginationStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  span {
    display: flex;
    color: var(--primaryColor);
    font-size: 2rem;
    font-weight: 600;
    margin: auto;
  }

  a {
    display: flex;
    color: var(--primaryColor);
    font-size: 2rem;
    font-weight: 600;
    margin: auto;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      transform: translateY(-10px);
      transition: 0.3s;
    }
  }

  a[aria-disabled="true"] {
    color: white;
    pointer-events: none;
  }

  div[aria-disabled="true"] {
    border: none;
    pointer-events: none;
  }

  .div-first {
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border: 3px solid var(--primaryColor);
    font-weight: 600;
    margin-left: 11rem;
    height: 100px;
    border-radius: 3px;
    flex: 0.33;
    margin-bottom: 3rem;
    align-items: center;
  }

  .div-second {
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: 3px solid var(--primaryColor);
    font-weight: 600;
    margin: 0 10rem;
    margin-top: 3rem;
    height: 100px;
    border-radius: 3px;
    flex: 0.33;
    margin-bottom: 3rem;
    align-items: center;
  }

  .div-third {
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    border: 3px solid var(--primaryColor);
    font-weight: 600;
    height: 100px;
    border-radius: 3px;
    flex: 0.33;
    margin-right: 10rem;

    margin-bottom: 3rem;
  }
`;

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
