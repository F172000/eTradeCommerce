import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import "../css/style.css";
import icon1 from "../img/logo.png";
import main from "../img/sideimg.png";
import { toast } from 'react-toastify';
import DotLoader from "react-spinners/DotLoader";
import axios from 'axios';
axios.defaults.baseURL=process.env.REACT_APP_SERVER_DOMAIN;
export default function Home() {
    const [spinning,setspinning]=useState(false);
    const [email, setEmail] = useState('');

      const data={
        email:email
      }

      const handleSubscribe = async () => {
        try {
            setspinning(!spinning);
            const response = await axios.post('http://localhost:3001/api/subscribe',data);
            if (response.status === 201) {
                setspinning(false);
                toast(response.data.message,{
                    icon: <svg color='green' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  ,
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    style: { // Replace #ff0000 with your desired background color
                      color: "#03045E",
                      fontSize:'15px' // Replace #ffffff with your desired text color
                    }
                    });
              setEmail('');
            }
          } catch (error) {
            setspinning(false);
            toast(error.response.data.error,{
                icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path color='red' strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              ,
                position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          style: { // Replace #ff0000 with your desired background color
          color: "#03045E",
          fontSize:'17px' // Replace #ffffff with your desired text color
          }
                });
            setEmail('');
          }
  };

  return (
    <div >
    {
        spinning &&  <DotLoader color="#36d7b7" />
    }
   
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
        <Link to="index.html" class="navbar-brand d-flex align-items-center">
            <h2 class="m-0 text-blue"><img class="img-fluid logo-fluid me-0" src={icon1} alt=""
                   />eTradeCommerce</h2>
        </Link>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-4 py-lg-0">
                <Link to="index.html" class="nav-item nav-link active">Home</Link>
                <Link to="about.html" class="nav-item nav-link">About</Link>
                <div class="nav-item dropdown">
                    <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</Link>
                    <div class="dropdown-menu shadow-sm m-0">
                        <Link to="feature.html" class="dropdown-item">Amazon</Link>
                        <Link to="token.html" class="dropdown-item">Walmart</Link>
                        <Link to="faq.html" class="dropdown-item">eBay</Link>
                        <Link to="404.html" class="dropdown-item">Etsy</Link>
                    </div>
                </div>
                <Link to="contact.html" class="nav-item nav-link">Contact</Link>
            </div>
            <div class="h-100 d-lg-inline-flex align-items-center d-none">
                <Link class="btn btn-square rounded-circle bg-light text-blue me-2" to=""><i
                        class="fab fa-facebook-f"></i></Link>
                <Link class="btn btn-square rounded-circle bg-light text-blue me-2" to=""><i
                        class="fab fa-twitter"></i></Link>
                <Link class="btn btn-square rounded-circle bg-light text-blue me-0" to=""><i
                        class="fab fa-linkedin-in"></i></Link>
            </div>
        </div>
    </nav>
    {/* <!-- Navbar End --> */}


    {/* <!-- Header Start --> */}
    <div class="container-fluid hero-header bg-blue py-5 mb-5">
        <div class="container py-5">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6">
                    <h1 class="display-4 mb-3 animated slideInDown text-light">Make Better Life With Trusted E-Trade Platform</h1>
                    <p class="animated slideInDown text-light">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                        diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
                        magna dolore erat amet</p>
                    <Link to="" class="btn btn-primary py-3 px-4 animated slideInDown">Explore More</Link>
                </div>
                <div class="col-lg-6 animated fadeIn">
                    <img class="img-fluid animated pulse infinite" style={{animationDuration:" 3s"}} src={main}
                        alt=""/>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Header End --> */}


    {/* <!-- About Start --> */}
    <div class="container-xxl py-2">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <img class="img-fluid" src={icon1} alt=""/>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="h-100">
                        <h1 class="display-6">About Us</h1>
                        <p class="secondary-text fs-5 mb-4">We Are
The Fastest
Growing Agency</p>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                        </p>
                        <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                            diam et eos. Clita erat ipsum et lorem et sit.</p>
                        <div class="d-flex align-items-center mb-2">
                            <i class="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                            <span>Tempor erat elitr rebum at clita</span>
                        </div>
                        <div class="d-flex align-items-center mb-2">
                            <i class="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                            <span>Tempor erat elitr rebum at clita</span>
                        </div>
                        <div class="d-flex align-items-center mb-4">
                            <i class="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                            <span>Tempor erat elitr rebum at clita</span>
                        </div>
                        <Link class="btn btn-secondary py-3 px-4" to="">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}


{/* 
    <!-- Features Start --> */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
                <h1 class="display-6">Why Us!</h1>
                <p class="secondary-text fs-5 mb-5">The Best In The E-Trade Platform</p>
            </div>
            <div class="row g-5">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="d-flex align-items-start">
                        <img class="img-fluid flex-shrink-0" src="img/icon-7.png" alt=""/>
                        <div class="ps-4">
                            <h5 class="mb-3">Easy To Start</h5>
                            <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                clita duo justo</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="d-flex align-items-start">
                        <img class="img-fluid flex-shrink-0" src="img/icon-6.png" alt=""/>
                        <div class="ps-4">
                            <h5 class="mb-3">Safe & Secure</h5>
                            <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                clita duo justo</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="d-flex align-items-start">
                        <img class="img-fluid flex-shrink-0" src="img/icon-5.png" alt=""/>
                        <div class="ps-4">
                            <h5 class="mb-3">Affordable Plans</h5>
                            <span>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                clita duo justo</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Features End --> */}


    {/* <!-- Service Start --> */}
    <div class="container-xxl bg-blue shadow-sm rounded py-5 my-5">
        <div class="container py-5">
            <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" >
                <h1 class="display-6 custom-secondary-text">Services</h1>
                <p class="text-light fs-5 mb-5">We have a solution to all of your eCommerce pain points. Keep faith, reachout and watch your business grow.</p>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 shadow col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item bg-yellow rounded p-5">
                        <img class="img-fluid mb-4" src="img/icon-7.png" alt=""/>
                        <h5 class="mb-3 text-blue">Digital Marketing Services</h5>
                        <p className='text-blue'>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                            justo</p>
                        <Link to="">Read More <i class="fa fa-arrow-right ms-2"></i></Link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item bg-yellow rounded p-5">
                        <img class="img-fluid mb-4" src="img/icon-3.png" alt=""/>
                        <h5 class="mb-3 text-blue">SEO for Amazon</h5>
                        <p className='text-blue'>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                            justo</p>
                        <Link to="">Read More <i class="fa fa-arrow-right ms-2"></i></Link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item bg-yellow rounded p-5">
                        <img class="img-fluid mb-4" src="img/icon-9.png" alt=""/>
                        <h5 class="mb-3 text-blue">Listing Optimization for Amazon</h5>
                        <p className='text-blue'>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                            justo</p>
                        <Link to="">Read More <i class="fa fa-arrow-right ms-2"></i></Link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item bg-yellow rounded p-5">
                        <img class="img-fluid mb-4" src="img/icon-5.png" alt=""/>
                        <h5 class="mb-3 text-blue">Amazon Advertising</h5>
                        <p className='text-blue'>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                            justo</p>
                        <Link to="">Read More <i class="fa fa-arrow-right ms-2"></i></Link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item bg-yellow rounded p-5">
                        <img class="img-fluid mb-4" src="img/icon-2.png" alt=""/>
                        <h5 class="mb-3 text-blue">Logistics & Fulfilment for Amazon</h5>
                        <p className='text-blue'>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                            justo</p>
                        <Link to="">Read More <i class="fa fa-arrow-right ms-2"></i></Link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item bg-yellow rounded p-5">
                        <img class="img-fluid mb-4" src="img/icon-8.png" alt=""/>
                        <h5 class="mb-3 text-blue">Spectrum ReconcileD</h5>
                        <p className='text-blue'>Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
                            justo</p>
                        <Link to="">Read More <i class="fa fa-arrow-right ms-2"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Service End --> */}
    {/* <!-- FAQs Start --> */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
                <h1 class="display-6 text-blue">Process</h1>
                <p class=" fs-5 mb-5">An execution done in haste leaves nothing but waste.</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item wow fadeInUp" data-wow-delay="0.1s">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    We are listening
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna
                                    diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                   Business Plan
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna
                                    diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item wow fadeInUp" data-wow-delay="0.3s">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Audit all the Way In
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna
                                    diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                   Yield Benefits
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna
                                    diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- FAQs Start --> */}


    {/* <!-- Footer Start --> */}
    <div class="container-fluid custombg footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-md-6">
                    <h1 class="custom-secondary-text mb-4"><img class="img-fluid logo-fluid me-2" src={icon1} alt=""
                            />eTradeCommerce</h1>
                    <span class="text-light">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed
                        stet lorem sit clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum
                        et lorem et sit.</span>
                </div>
                <div class="col-md-6">
                    <h5 class=" mb-4 custom-secondary-text">Newsletter</h5>
                    <p className='text-light'>Clita erat ipsum et lorem et sit, sed stet lorem sit clita.</p>
                    <div class="position-relative">
                        <input class="form-control w-100 py-3 ps-4 pe-5" type="email"
                            placeholder="Your email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        <button type="button" onClick={handleSubscribe}
                            class="btn btn-secondary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">Subscribe</button>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="mb-4 custom-secondary-text">Get In Touch</h5>
                    <p className='text-light'><i class="fa fa-map-marker-alt me-3 custom-secondary-text"></i>123 Street, New York, USA</p>
                    <p className='text-light'><i class="fa fa-phone-alt me-3 custom-secondary-text"></i>+012 345 67890</p>
                    <p className='text-light'><i class="fa fa-envelope me-3 custom-secondary-text"></i>info@example.com</p>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="mb-4 custom-secondary-text">Our Services</h5>
                    <Link class="btn btn-link" to="">Amazon</Link>
                    <Link class="btn btn-link" to="">Walmart</Link>
                    <Link class="btn btn-link" to="">eBay</Link>
                    <Link class="btn btn-link" to="">Etsy</Link>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="mb-4 custom-secondary-text">Quick Links</h5>
                    <Link class="btn btn-link" to="">About Us</Link>
                    <Link class="btn btn-link" to="">Contact Us</Link>
                    <Link class="btn btn-link" to="">Our Services</Link>
                    <Link class="btn btn-link" to="">Terms & Condition</Link>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="custom-secondary-text mb-4">Follow Us</h5>
                    <div class="d-flex">
                        <Link class="btn btn-square rounded-circle me-1" to=""><i class="fab fa-twitter"></i></Link>
                        <Link class="btn btn-square rounded-circle me-1" to=""><i class="fab fa-facebook-f"></i></Link>
                        <Link class="btn btn-square rounded-circle me-1" to=""><i class="fab fa-youtube"></i></Link>
                        <Link class="btn btn-square rounded-circle me-1" to=""><i class="fab fa-linkedin-in"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0 text-light">
                        &copy; <Link to="/" className='text-light'>eTradeCommerce</Link>, All Right Reserved.
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}


    {/* <!-- Back to Top --> */}
    <Link to="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i
            class="bi bi-arrow-up"></i></Link>


    {/* <!-- JavaScript Libraries --> */}
    </div>
  )
}
