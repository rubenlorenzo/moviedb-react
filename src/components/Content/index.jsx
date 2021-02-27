import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import Movies from "../Movies";
import "./Content.scss";

function Content(props) {
  const [numPages, setNumPages] = useState(0);
  let pages = [];
  let type = props.match.params.type;
  let page = parseInt(props.match.params.page);

  for (let i = 1; i <= numPages; i++) {
    pages.push(
      <Pagination.Item key={i} active={i === page} href={"/" + type + "/" + i}>
        {i}
      </Pagination.Item>
    );
  }

  return (
    <>
      <div id="content">
        <Movies calculatePages={calculatePages} type={type} page={page} />
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
