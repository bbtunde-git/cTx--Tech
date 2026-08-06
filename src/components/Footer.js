import React, { useEffect, useState } from "react";
import footerLogo from '../img/ctx_icon.png'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const Footer = () => {
  const [showTopArrow, setShowTopArrow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTopArrow(window.scrollY > 250);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-12 footer-info">
                <Link to="/" className="logo d-flex align-items-center">
                  <img src={footerLogo} alt="" title="" />
                </Link>
                <p>
                  We are a global leader in  General IT Consultancy, offer Services across Enterprise Software Solutions,
                  Web/Mobile Development, Motion Graphics, 3D Generalist.
                </p>
                <div className="social-links d-flex  mt-3">
                  <Link to="https://www.x.com/tee__babs/" className="twitter" target="_blank">
                    <i className="bi bi-twitter"></i>
                  </Link>

                  <Link to="/" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </Link>
                  
                  <Link to ="https://www.linkedin.com/babatunde-olaleye/" className="linkedin" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to ="/">Home</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to ="/services">Services</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to ="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to ="/services/#Educational-content">
                      Enterprise Software Solution
                    </HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to ="/services/#Entertainment-content">
                      Web/Mobile Development
                    </HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to="/services/#Games">Visual Effect &amp; Animation</HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to ="/services/#Sports">IT Consultancy</HashLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <address>
                 
                  #1, Olaleye Street <br /> Park View Estate, <br /> Ikoyi, Lagos State <br></br> Nigeria. <br />
                  <br />
                  <strong>Phone:</strong> +234 802 088 5566, +234 803 111 6260 <br />
                  <strong>Email: </strong>
                  <a href="mailto:info@ctx-technologies.com">                  
                     info@ctx-technologies.com
                  </a> 
                  <br />
                </address>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-legal">
          <div className="container">
            <div className="copyright">
              <span id="copyright">
                <script>
                  document.getElementById('copyright').appendChild(document.createTextNode(new
                  Date().getFullYear()) )
                </script>
              </span>
              &copy;  Copyright
              <span> cTx Technologies &amp; Solutions Limited </span>. All Rights Reserved
            </div>
          </div>
        </div>
        <button
          className={`footer-top-arrow${showTopArrow ? " active" : ""}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          type="button"
        >
          <i className="bi bi-arrow-up-short"></i>
        </button>
      </footer>
      
    </>
  )
  
};

export default Footer;
