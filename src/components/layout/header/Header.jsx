import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Collapse from "./navbar/Collapse";
import Search from "./navbar/Search";

import AppContext from "context/AppContext";

const Header = () => {
  const { isHomePage } = useContext(AppContext);
  const [active, setActive] = useState("");

  console.log("test context", isHomePage);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      if( window.innerWidth >1024){
         windowHeight > 900 ? setActive("active") : setActive("");
      }
      else  if( window.innerWidth < 1024){
        windowHeight > 690 ?  setActive("active") : setActive("");

      }
      else   if( window.innerWidth < 425){
       windowHeight > 400 ?  setActive("active") : setActive("");
      }       
       else  if( window.innerWidth < 400){
           windowHeight > 260 ?  setActive("active") : setActive("");
       }
  };
}
  return (
    <header className={`header ${active}`}>
      <div className="container__fluid">
        <nav className="navbar">
          <Search></Search>
          <Collapse></Collapse>
        </nav>
      </div>
    </header>
  );
};

export default Header;
