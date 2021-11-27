import Link from "next/link";
import { useEffect, useState } from "react";
import { scroll } from "../utils/utils";

const Header = ({
  navLight,
  whiteLogo,
  getStartText,
  btnCustomHover,
  navHoverColor,
  singlePage,
}) => {
  useEffect(() => {
    window.addEventListener("scroll", scroll);
  }, []);

  const [toggle, setToggle] = useState(false);
  const [mobileMenuToggle, setMobileMenuToggle] = useState("");

  const toggleFun = () => {
    setToggle(!toggle);
    document.querySelector("body").classList.toggle("wsactive");
  };
  const toggleMenu = (value) => {
    setMobileMenuToggle(mobileMenuToggle !== value ? value : "");
  };

  return (
    <header
      id="header"
      className={`header tra-menu ${navLight ? "navbar-light" : "navbar-dark"}`}
    >
      <div className="header-wrapper">
        {/* MOBILE HEADER */}
        <div className="wsmobileheader clearfix">
          <span className="smllogo">
            <img src="/images/logo-01.png" alt="mobile-logo" />
          </span>
          <a
            id="wsnavtoggle"
            onClick={() => toggleFun()}
            className="wsanimated-arrow"
          >
            <span />
          </a>
        </div>
        {/* NAVIGATION MENU */}
        <div className="wsmainfull menu clearfix">
          <div className="wsmainwp clearfix">
            {/* HEADER LOGO */}
            <div className="desktoplogo">
              <Link href="/">
                <a className="logo-black">
                  <img src="/images/logo-01.png" alt="header-logo" />
                </a>
              </Link>
            </div>
            <div className="desktoplogo">
              <Link href="/demo-6">
                <a className="logo-white">
                  <img
                    src={`${
                      whiteLogo
                        ? "/images/logo-01.png" 
                        : "/images/logo-01.png"
                    }`}
                    alt="header-logo"
                  /> {/* add white logo 👆 */}
                </a>
              </Link>
            </div>
            {/* MAIN MENU */}
            <nav className="wsmenu clearfix">
              <div className="overlapblackbg" onClick={() => toggleFun()} />

              <ul
                className={`wsmenu-list ${
                  navHoverColor ? navHoverColor : "nav-skyblue-hover"
                }`}
              >
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <Link href={`${"/features"}`}>
                    Features
                  </Link>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <Link href={`${"/about"}`}>About us</Link>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  <Link href={`${"/pricing"}`}>Pricing</Link>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                {/* <li className="nl-simple">
                  <Link href={`${"/faqs"}`}>FAQs</Link>
                </li> */}
                {/* HEADER BUTTON */}
                <li className="nl-simple">
                  <Link href={`${"#content-4"}`}>
                    <a
                      className={`btn ${
                        btnCustomHover
                          ? btnCustomHover
                          : "btn-tra-white orange-red-hover"
                      } last-link`}
                    >
                      {getStartText ? "Get Started" : "Let's Started"}
                    </a>
                  </Link>
                </li>
                {/* HEADER SOCIAL LINKS 													
									<li class="nl-simple white-color header-socials ico-20 clearfix" >
										<span><Link href="#" class="ico-facebook"><span class="flaticon-facebook"></span></Link></span>
										<span><Link href="#" class="ico-twitter"><span class="flaticon-twitter"></span></Link></span>
										<span><Link href="#" class="ico-instagram"><span class="flaticon-instagram"></span></Link></span>
										<span><Link href="#" class="ico-dribbble"><span class="flaticon-dribbble"></span></Link></span>	
									</li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
