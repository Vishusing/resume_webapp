import React from "react";
import Header from "../components/Header";
import Typical from "react-typical";
import './Typical.css';

const Home = () => {
  return (
    <>
      <class class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="about">
          <div class="resume-section-content">
          <div className="container">
          <div className="dp">
            <img src="/IMG/PROFILE_pic2.jpg" alt="mydp" />
          </div>
          </div>
            <h1 class="container mb-0">
              Vishal
              <span class="text-primary">Singh</span>
            </h1>

            <Typical wrapper="span" steps={[
              'Hello..',1000,
              'I am Web Developer',3000,
              'Data Analyst',3000,
              'and Python Enthusiast',3000,
              'Learning MERN',3000
            ]} loop={Infinity} className="caca" />

            <div class="container subheading mb-5" style={{textAlign:"center"}}>
              Sadar Mod, Padav Ward, Pratapgarh, U.P. 9919938441 
            </div>
            <p class="lead mb-5" style={{textAlign:"center"}}>
              I am experienced in leveraging agile frameworks to provide a
              robust synopsis for high level overviews. Iterative approaches to
              corporate strategy foster collaborative thinking to further the
              overall value proposition.
            </p>
            <div class="container social-icons">
              <a class="social-icon" href="https://www.linkedin.com/in/vishal-singh-425978224/">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/Vishusing">
                <i class="fab fa-github"></i>
              </a>
              <a class="social-icon" href="https://www.facebook.com/vishu299901">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a  class="social-icon" href="mailto:vs299901@gmail.com">
                <i class="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </section>
        <hr class="m-0" />
      </class>
    </>
  );
};

export default Home;
       