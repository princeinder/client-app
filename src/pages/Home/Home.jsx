import React from "react";
import Header from "../../layout/Home/Header";
import Footer from "../../layout/Home/Footer";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Home = () => {
  return (
    <>
      <Header />
      <section className="banner">
        <div className="banner-text">
          <h1>Invest In Alertya Trading</h1>
          <h2>Use modern progressive technologies of Alertya to earn money</h2>
          <a href="/signup" className="white-btn">Get Started</a>
        </div>
      </section>

      <section className="text p50">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <img src="img/welcome-img.png" alt="" />
            </div>
            <div className="col-md-12 col-lg-6">
              <h1 className="title">Welcome to <span>Alertya</span></h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <button href="#" className="site-btn">Read More</button>
            </div>
          </div>
        </div>
      </section>
      {/* welcome text End here */}
      {/* Features section */}
      <section className="features-section p50">
        <div className="container text-white">
          <div className="section-title text-center">
            <h2>Our Features</h2>
          </div>
          <div className="row">
            {/* feature */}
            <div className="col-md-6 col-lg-4 feature">
              <i className="fa fa-desktop" />
              <div className="feature-content">
                <h4>Visual Monitor Pro</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
                <a href className="readmore">Readmore</a>
              </div>
            </div>
            {/* feature */}
            <div className="col-md-6 col-lg-4 feature">
              <i className="fa fa-star-o" />
              <div className="feature-content">
                <h4>HTML Tracker Pro</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
                <a href className="readmore">Readmore</a>
              </div>
            </div>
            {/* feature */}
            <div className="col-md-6 col-lg-4 feature">
              <i className="fa fa-star-o" />
              <div className="feature-content">
                <h4>Password Protected Monitor Pro</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
                <a href className="readmore">Readmore</a>
              </div>
            </div>
            {/* feature */}
            <div className="col-md-6 col-lg-4 feature">
              <i className="fa fa-star-o" />
              <div className="feature-content">
                <h4>Keyword Monitor Pro</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
                <a href className="readmore">Readmore</a>
              </div>
            </div>
            {/* feature */}
            <div className="col-md-6 col-lg-4 feature">
              <i className="fa fa-star-o" />
              <div className="feature-content">
                <h4>Notifications</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
                <a href className="readmore">Readmore</a>
              </div>
            </div>
            {/* feature */}
            <div className="col-md-6 col-lg-4 feature">
              <i className=" fa fa-shield" />
              <div className="feature-content">
                <h4>Encrypted Password Protection</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
                <a href className="readmore">Readmore</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features section end */}
      {/*video text Start here */}
      <section className="text p50 video">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <h1 className="title">Transform Your <span>Payments</span></h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <button href="#" className="site-btn">Read More</button>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/SzAuB2FG79A"
                  allowFullScreen
                  title="youtube"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* video text End here */}
      {/* Price section start */}
      <section className="price p50">
        <div className="container text-center">
          <h1 className="title ">Pricing</h1>
        </div>
        <div className="container">
          <div className="row text-center">
            {/* Pricing Table*/}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="icon">
                <img src="img/1.png" alt="" />
              </div>
              <div className="bg-white rounded-lg shadow p50 ">
                <h1 className="h6 text-uppercase font-weight-bold mb-4">
                  Basic
                </h1>
                <h2 className="h1 font-weight-bold">
                  $199<span className="text-small font-weight-normal ml-2">
                    / month
                  </span>
                </h2>
                <ul className="list-unstyled my-5 text-small text-left">
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary" />
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary" />
                    Sed ut perspiciatis
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary" />
                    At vero eos et accusamus
                  </li>
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2" />
                    <del>Nam libero tempore</del>
                  </li>
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2" />
                    <del>Sed ut perspiciatis</del>
                  </li>
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2" />
                    <del>Sed ut perspiciatis</del>
                  </li>
                </ul>
                <button href="#" className="text-center site-btn">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="icon">
                <img src="img/2.png" alt="" />
              </div>
              <div className="bg-white rounded-lg shadow p50">
                <h1 className="h6 text-uppercase font-weight-bold mb-4">Pro</h1>
                <h2 className="h1 font-weight-bold">
                  $399<span className="text-small font-weight-normal ml-2">
                    / month
                  </span>
                </h2>
                <ul
                  className="list-unstyled my-5 text-small text-left font-weight-normal"
                >
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary" />
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary" />
                    Sed ut perspiciatis
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary" />
                    At vero eos et accusamus
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary" />
                    Nam libero tempore
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary" />
                    Sed ut perspiciatis
                  </li>
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2" />
                    <del>Sed ut perspiciatis</del>
                  </li>
                </ul>
                <button href="#" className="text-center site-btn">
                  Subscribe
                </button>
              </div>
            </div>
            {/* END */}
            {/* Pricing Table*/}
            <div className="col-lg-4">
              <div className="icon">
                <img src="img/3.png" alt="" />
              </div>
              <div className="bg-white rounded-lg shadow p50">
                <h1 className="h6 text-uppercase font-weight-bold mb-4">
                  Enterprise
                </h1>
                <h2 className="h1 font-weight-bold">
                  $899<span className="text-small font-weight-normal ml-2">
                    / month
                  </span>
                </h2>
                <ul
                  className="list-unstyled my-5 text-small text-left font-weight-normal"
                >
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary" />
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary" />
                    Sed ut perspiciatis
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary" />
                    At vero eos et accusamus
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary" />
                    Nam libero tempore
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary" />
                    Sed ut perspiciatis
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary" />
                    Sed ut perspiciatis
                  </li>
                </ul>
                <button href="#" className="text-center site-btn">
                  Subscribe
                </button>
              </div>
            </div>
            {/* END */}
          </div>
        </div>
      </section>
      {/* price section */}
      {/*need help Start here */}
      <section className="help p50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="pull-left">
                Want to invest in Alertya? I’m here to help!
              </h1>
              <button href="#" className="white-btn pull-right">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial text-center p50">
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-theme"
              loop
              margin={10}
              items={1}
            >
              <div className="test1">
                <div className="img-box">
                  <img src="img/team.png" alt="" />
                </div>
                <p>
                  Vestibulum quis quam ut magna consequat faucibus. Pellentesque
                  eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus.
                  Pellentesque viverra sagittis quam at mattis. Suspendisse
                  potenti. Aliquam sit amet gravida nibh, facilisis gravida
                  odio.
                </p>
                <p><b>Linda Porter</b></p>
              </div>
              <div className="test1">
                <div className="img-box">
                  <img src="img/team.png" alt="" />
                </div>
                <p>
                  Vestibulum quis quam ut magna consequat faucibus. Pellentesque
                  eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus.
                  Pellentesque viverra sagittis quam at mattis. Suspendisse
                  potenti. Aliquam sit amet gravida nibh, facilisis gravida
                  odio.
                </p>
                <p><b>Linda Porter</b></p>
              </div>
              <div className="test1">
                <div className="img-box">
                  <img src="img/team.png" alt="" />
                </div>
                <p>
                  Vestibulum quis quam ut magna consequat faucibus. Pellentesque
                  eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus.
                  Pellentesque viverra sagittis quam at mattis. Suspendisse
                  potenti. Aliquam sit amet gravida nibh, facilisis gravida
                  odio.
                </p>
                <p><b>Linda Porter</b></p>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
