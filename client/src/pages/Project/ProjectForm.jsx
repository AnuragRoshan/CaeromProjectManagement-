import React from "react";
import "../../Assets/css/projectForm.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import AddProjectMember from "../../components/AddProjectMember";
import { color } from "framer-motion";
const bgimg =
  "https://www.govqa.com/wp-content/uploads/2020/10/Vector-Smart-Object-copy-e1604094179537-400x269.png";
const bgimg2 =
  "https://github.com/AnuragRoshan/images/blob/main/eezy_71-01.jpg?raw=true";
// import backgroundImage2 from "./background-image2.jpg";

const ProjectForm = () => {
  return (
    <div className="projectTop">
      {/* <img
        alt=""
        style={{
          position: "absolute",
          width: "20rem",
          bottom: "0px",
          left: "0px",
          opacity: "0.6",
        }}
        src={bgimg}
      ></img>
      <img
        alt=""
        style={{
          position: "absolute",
          width: "20rem",
          right: "0px",
          bottom: "0px",
          opacity: "0.6",
        }}
        src={bgimg2}
      ></img> */}
      <div className="projectForm">
        <div className="projectF-head">New Project</div>
        <div className="projectF-form">
          <div className="projectF-title">Project Data</div>
          <div className="projectF-Horizontal-section">
            <div className="section">
              <div className="projectF-section">
                <div className="display-flex-row label-and-input">
                  <div className="projectF-LabelSection ">Project Name :</div>
                  <input
                    type="text"
                    style={{ width: "80%" }}
                    placeholder="Project Name"
                  />
                </div>
                <div className="display-flex-row label-and-input">
                  <div className="projectF-LabelSection"> Github :</div>
                  <input
                    style={{ width: "80%" }}
                    type="url"
                    placeholder="Github Repositry URL"
                  />
                </div>
              </div>
              <div className="display-flex-row label-and-input">
                <div className="projectF-LabelSection  ">Start Date :</div>
                <input className="date" type="date" style={{ width: "25%" }} />
              </div>
              <div className="display-flex-row label-and-input">
                <div className="projectF-LabelSection">End Date :</div>
                <input className="date" type="date" style={{ width: "25%" }} />
              </div>
              <div className="display-flex-row label-and-input">
                <div className="projectF-LabelSection"> Duration :</div>
                <input
                  className="date"
                  style={{ width: "25%" }}
                  type="text"
                  placeholder="in hour(s)"
                />
              </div>
              <div className="display-flex-row label-and-input">
                <div className="projectF-LabelSection"> Status :</div>
                <div className="progress-status">In Progress</div>
              </div>
            </div>
            <div className="section">
              <div>
                <ReactQuill
                  style={{
                    height: "8rem",
                    marginBlockStart: "0.5rem",
                  }}
                  theme="snow"
                  placeholder="Description"
                />
              </div>
              <div style={{ marginTop: "3rem" }}>
                <AddProjectMember />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
