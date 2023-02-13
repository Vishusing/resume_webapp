import React from "react";
import Header from "../components/Header";

const Skills = () => {
  return (
    <>
      <div class="container-fluid p-0 ">
        <Header />
        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Programming Languages & Tools</div>
            <ul class="flex-container">
              <li class="flex-item" >
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" alt="html"/>
              </li>
              <li class="flex-item">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt="css"/>
              </li>
              <li class="flex-item">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="Bootstrap"/>
              </li>
              <li class="flex-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" alt="Tailwind CSS"/>
              </li>
              <li class="flex-item">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="Javascript" />
              </li>
              <li class="flex-item">
                <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="Nodejs" />
              </li>
              <li class="flex-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png" alt="C" />
              </li>
              <li class="flex-item">
                <img src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" alt="C++" />
              </li>
              <li class="flex-item">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="Python" />
              </li>
            </ul>
            <div class="subheading mb-3">Workflow</div>
            <ul class="fa-ul mb-0">
            <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Knowledge of C/C++ language and Problem Solving
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Mobile-First, Responsive Design
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Cross Browser Testing & Debugging
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Data Science & Machine Learning
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Web deveopment using React framework
              </li>
            </ul>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Skills;