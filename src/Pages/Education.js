import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div class="container-fluid p-0 ">
        <Header />
        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Tender Heart's Academy, Sadar mod, Pratapgarh</h3>
                <div class="subheading mb-3">Nursery to 8th</div>
                <div>Area of my childhood studies and my most memorable moments are in this school.</div>
                <p> </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">Year 2006-07 --- Year 2015-16</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">St. Anthony Inter College , Civil Line , Pratapgarh</h3>
                <div class="subheading mb-3"> 9th to 12th</div>
                <div>Here, I developed my interest in some subjects, like maths,science etc.</div>
                <p> </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">Year 2016-17 -- Year 2019-20</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Rajarshi Rananajay Sinh. Institute of Management & Technology, Munshiganj, Amethi</h3>
                <div class="subheading mb-3"> Pursuing B.Tech in Computer Science & Engineering </div>
                <div> Here, I am trying to develop my skill regarding computer science and trying to know and discover new facts regarding today's emerging technologies. </div>
                <p> </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">Year 2020-21 -- till date</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Education;