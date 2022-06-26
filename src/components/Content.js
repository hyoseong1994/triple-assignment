import React from "react";

const Content = ({ name, firstContent, secondContent }) => (
  <div className={name}>
    <p>
      {firstContent}
      <br />
      {secondContent}
    </p>
  </div>
);

export default Content;
