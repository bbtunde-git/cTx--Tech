import React from "react";
import { Link } from "react-router-dom";

const ServiceList = () => {
  return (
    <>
      <section id="services-list" className="services-list">
        <div className="container" data-aos="fade-up">
          <div className="section-header animate-fade-up delay-1">
            <h2>What we do? </h2>
            <p>
              We are a global leader in  General IT Consultancy, offer Services across Enterprise Software Solutions,
                  Web/Mobile Development, &amp; 3D Generalist.{" "}
            </p>
          </div>
          <div className="row gy-5">
            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="single-service animate-zoom-in">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-cpu" style={{ color: "#c084fc" }}></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/ervices" className="stretched-link">
                      Enterprise Software Solutions{" "}
                    </Link>
                  </h4>
                  <p className="description">
                    Our enterprise software solution are large-scale programs designed to satisfy the needs of our clients organization. They streamline complex operations like finance, human resources, &amp; supply chain. Core types include ERP, CRM, &amp; business intelligence tools...
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-code-slash"
                    style={{ color: "#a78bfa" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      Web/Mobile Development
                    </Link>
                  </h4>
                  <p className="description">
                    Our web/mobile development service encompass building digital experiences; websiteand browser apps versus native or cross-platform smartphone software. Our development core concepts include Frontend, Backend, Native &amp; cress-platform mobile apps...
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-film"
                    style={{ color: "#d8b4fe" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      3D Generalist{" "}
                    </Link>
                  </h4>
                  <p className="description">
                    Our highly versatile graphics team are capable of handling every phase of the 3D asset creation pipeline &amp; seamlessly move between creativity, artistic tasks, &amp; highly complex technical troubleshooting with skills in Modelling &amp; Sculpting, Character Rigging, Animation, Lighting &amp; Rendering, VFX...
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-briefcase"
                    style={{ color: "#7c3aed" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link to="/services" className="stretched-link">
                      IT Consultancy{" "}
                    </Link>
                  </h4>
                  <p className="description">
                    Our professional service helps businesses plan, fix, &amp; grow their IT systems. We focus on company's goal &amp; digital assets, then advice on best practices that would enhance scalability in all aspect. Our core focus are &amp; not limited to: IT Strategy, Cybersecurity, Cloud Migration, Software Setup ...{" "}
                  </p>
                  <Link to="/services" className="btn-get-started">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceList;
