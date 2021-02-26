import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import Movies from "../Movies";
import "./Content.scss";

function Content() {
  const [numPages, setNumPages] = useState(0);
  let pages = [];

  for (let i = 1; i <= numPages; i++) {
    pages.push(
      <Pagination.Item key={i} active={i === 1}>
        {i}
      </Pagination.Item>
    );
  }

  return (
    <>
      <div id="content">
        <Movies calculatePages={calculatePages} />
      </div>
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
