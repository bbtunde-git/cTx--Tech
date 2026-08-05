import React from 'react'
import AOS from "aos";
import '../../node_modules/aos/dist/aos.css'
import about_img from '../img/about-image.jpg'
import manag_photo1 from '../img/team/Babatunde.jpg';
import manag_photo2 from '../img/team/Babatunde-3.jpg';
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import abtHeader from '../img/about-header.jpg'
import { useEffect } from 'react';

const About = () => {
   useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  
  return (
    <>
   <InnerHeader />
   <InnerHeaderBanner name={"About Us"} img = {abtHeader}/>

     <main id="main">   
      <section id="about" className="about">
         <div className="container" data-aos="fade-up">
            <div className="section-header">
               <h2>Helping Clients ACHIEVE their Vision</h2>
            </div>
            <div className="row gy-4 align-items-center" data-aos="fade-up">
               <div className="col-lg-6">
                  <img src={about_img} className="img-fluid" alt="Helping Clients achieve their Vision" title="Helping Clients achieve their Vision" />
               </div>
               <div className="col-lg-6">
                  <p> cTx Technologies &amp; Solutions Limited, founded in December 2017 and duly registered with the Corporate Affairs Commission (CAC) under registration number RC:1456693, cTx Technologies & Solutions Limited is a forward-thinking IT firm dedicated to delivering robust, scalable, and future-ready technology solutions. With a multidisciplinary team of engineers, designers, and strategists, we bridge the gap between complex business challenges and cutting-edge digital innovation.</p>
                  {/* <p> We came up with the name Symbiotic because the definition of a symbiotic relationship is one in which organisms, people, or things exist together in a way that benefits them all. As our stated mission suggest, we exist to benefit our mobile carrier clients by increasing their top line revenue.</p> */}
                  <p> Since inception, cTx Technologies has seen unprecedented growth and is one of the largest and fastest growing TECH companies in Nigeria. We have generated multi-million naira in revenue for our clients and currently service over 20 million customers and growing.</p>
                  <p> Our determination to help our clients succeed is only one facet of cTx Technologies. When we started cTx Technologies, we wanted to create a company that not only succeeded financially, we strive to take care of our employees, and to give back to our community. That is why cTx Technologies donates a portion of every naira we earn to make a difference in this world.</p>
               </div>
            </div>
         </div>
      </section>
    
      <div id="vision" className="vision aos-init" data-aos="fade-up" data-aos-delay="300">
         <div className="container">
            <div className="row gy-4">
               <div className="col-lg-4 aos-init">
                  <div className="card-item">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="card-body">
                              <h4 className="card-title"> Vision</h4>
                              <p>To become world's leading tech company for value added services and create an outstanding value for customers and stake holders.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
              
               <div className="col-lg-4 aos-init">
                  <div className="card-item">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="card-body">
                              <h4 className="card-title"> Mission</h4>
                              <p>To anticipate the need of tech consumers and deliver outstanding products those are value for money.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
              
               <div className="col-lg-4 aos-init" data-aos="fade-up" data-aos-delay="300">
                  <div className="card-item">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="card-body">
                              <h4 className="card-title">Our Values</h4>
                              <p> Our business is driven by our consumer focus, creativity, resourcefulness, and entrepreneurial spirit. We are an inspired diverse team, we respect and value everyone's contribution.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
              
            </div>
         </div>
      </div>
  
      <section id="management" className="management light-bg aos-init" data-aos="fade-up" data-aos-delay="300">
         <div className="container">
            <div className="section-header">
               <h2>Our Team</h2>
               <p>Leveraging their vast experience within the Tech industry, cTx Technologies leadership team is dedicated to meet and exceed customer expectations with innovative and cost-effective solutions, industry know-how and unmatched services.</p>
            </div>
            <div className="row member d-flex align-items-center ">
               <div className="col-md-2">
                  <div className="pic"><img src={manag_photo1} className="img-fluid" alt=""/></div>
               </div>
               <div className="col-md-10">
                  <div className="member-info">
                     <h4>Babatunde Olaleye</h4>
                     <span>Founder & Director</span>
                     <p>Babatunde is a visionary Technocrat with 16 Years of experience and has worked with consulting majors & service industries in the field of IT technologies &amp; Telecoms. His specialization includes Networking, Cloud DevOps, System/Cloud Architecture, Data Engineering and Enterprise solutions .</p>
                     <div className="social">
                     <Link to ="/"><i className="bi bi-twitter"></i></Link>                
                     <Link to ="https://www.linkedin.com/in/babatunde-olaleye/" target='_blank'> <i className="bi bi-linkedin"></i> </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row member d-flex align-items-center mt-4">
               <div className="col-md-2">
                  <div className="pic"><img src={manag_photo2} className="img-fluid" alt="" /></div>
               </div>
               <div className="col-md-10">
                  <div className="member-info">
                     <h4>Oluwaseun Olaleye </h4>
                     <span>Co-Founder & Director</span>
                     <p>Oluwaseun is a visionary and entrepreneur in his own right. He has over 10 years of management experience with IT & Engineering majors and has significant global experience in corporate alliance. </p>
                     <p> Oluwaseun has extensive multi-functional management experience in marketing, sales, business and corporate development and holds a Bachelors degree in Computer Science.</p>
                     <div className="social">
                        <Link to ="/"><i className="bi bi-twitter"></i></Link>                
                        <Link to ="https://www.linkedin.com/in/sundaramoorthy-velayutham-92697aa/" target='_blank'> <i className="bi bi-linkedin"></i> </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row member d-flex align-items-center ">
               <div className="col-md-2">
                  <div className="pic"><img src={manag_photo1} className="img-fluid" alt=""/></div>
               </div>
               <div className="col-md-10">
                  <div className="member-info">
                     <h4>Tomilola Olaleye</h4>
                     <span>Media Director</span>
                     <p>Babatunde is a visionary Technocrat with 16 Years of experience and has worked with consulting majors & service industries in the field of IT technologies &amp; Telecoms. His specialization includes Networking, Cloud DevOps, System/Cloud Architecture, Data Engineering and Enterprise solutions .</p>
                     <div className="social">
                     <Link to ="/" target='_blank'><i className="bi bi-twitter"></i></Link>                
                     <Link to ="/"> <i className="bi bi-linkedin"></i> </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   
   </main>
   <Footer/>
    
    </>
  )
}

export default About