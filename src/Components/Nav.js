import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    // window.addEventListener("scroll", () => {
    //   if (window.scrollY > 100) {
    //     handleShow(true);
    //   } else handleShow(false);
    // });
    return () => window.removeEventListener("scroll", transitionNavBar);
    
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12c6f684-d447-4457-84fa-12033cfd581e/d9z3o32-2c299a83-49a9-44c2-bc23-b0b5070a546b.png/v1/fill/w_1024,h_512,strp/netflix_logo_background__2_by_sixmonthslate_d9z3o32-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC8xMmM2ZjY4NC1kNDQ3LTQ0NTctODRmYS0xMjAzM2NmZDU4MWVcL2Q5ejNvMzItMmMyOTlhODMtNDlhOS00NGMyLWJjMjMtYjBiNTA3MGE1NDZiLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WKy-rj_8y7ziLuhhtAES7jddy-eUpz6PQQ331bp7rRI"
        // src="https://www.movingbrands.com/cache/public/project-images-1575892209-1a82f4ff69336e2a7eec7df8f5f950bc-CROP-1200x630.png"
        //  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/800px-Netflix_logo.svg.png?20220504140802"
        // src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12c6f684"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        // src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e68 "
        alt="Avatar Logo"
      />
    </div>
  );
}

export default Nav;
