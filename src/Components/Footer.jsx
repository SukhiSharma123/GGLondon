import React from "react";

const Footer = () => {
  return (
    <div>
      <footer style={{ marginTop: "10px", backgroundColor: "springgreen" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div>
                <h3>Logo</h3>
                <p className="mb-30 footer-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  soluta facilis eos quia optio iusto odit atque eum tempore,
                  quisquam officiis vero veniam hic,
                </p>
              </div>
            </div>
            <div className="col-xl-3 offset-xl-3 col-lg-2 col-md-6">
              <div className="">
                <h4>Quick Link</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#home" className="text-decoration-none">
                      Home
                    </a>
                  </li>
                  {/* <li>
                    <a href="#" className="text-decoration-none">
                      About Us
                    </a>
                  </li> */}
                  <li>
                    <a href="#products" className="text-decoration-none">
                      Product
                    </a>
                  </li>
                  {/* <li>
                    <a href="#" className="text-decoration-none">
                      Service
                    </a>
                  </li> */}
                  <li>
                    <a href="#contact" className="text-decoration-none">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-xl-3 col-lg-3 col-md-6">
              <div>
                <h4>Service</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-decoration-none">
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      Branding
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      Web Design
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      Graphics Design
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div>
                <h4>Address</h4>
                <ul className="list-unstyled">
                  <li>
                    <p>+017367234</p>
                  </li>
                  <li>
                    <p>
                      <a href="#">JhoneDoe@gmail.com</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      New York City in New York State New York City comprises 5
                      boroughs sitting where the Hudson River meets th
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="copyright">
              <p>
                Developed and maintained by{" "}
                <a href="https://www.melabazaar.com.np/" target="_blank">
                  Mela Bazaar
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
