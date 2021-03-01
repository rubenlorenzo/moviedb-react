import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import queryString from "query-string";
import Movies from "./Movies";
import "./Search.scss";

function Content(props) {
  const [numPages, setNumPages] = useState(0);
  let pages = [];
  let search = queryString.parse(props.location.search);
  let page = parseInt(props.match.params.page);

  for (let i = 1; i <= numPages; i++) {
    pages.push(
      <Pagination.Item key={i} active={i === page} href={"/movies/search/" + i+"?query="+search.query}>
        {i}
      </Pagination.Item>
    );
  }

  return (
    <>
      <Movies calculatePages={calculatePages} query={search.query} page={page} />
      <Pagination>{pages}</Pagination>
    </>
  );

  function calculatePages(items) {
    let pagesFloat = items.length / 12;
    let pagesFloatDeleteDecimals = Math.trunc(items.length / 12);

    if (pagesFloat > pagesFloatDeleteDecimals) {
      setNumPages(pagesFloatDeleteDecimals + 1);
    } else {
      setNumPages(pagesFloat);
    }
  }
}

export default Content;
