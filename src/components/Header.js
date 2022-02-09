import React from "react";
import Search from "./Search";

function Header({handlesSearch}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handlesSearch={handlesSearch} />
    </header>
  );
}

export default Header;
