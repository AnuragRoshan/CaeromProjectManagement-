import React from "react";
import "../Assets/css/project.css";

const Projects = () => {
  return (
    <div
      className="project-top"
      style={{ padding: "2rem", fontFamily: "Montserrat" }}
    >
      <div
        className="project-InnerTop"
        style={{
          boxShadow: "0 0 6px rgb(0 0 0 / 30%)",
          backgroundColor: "white",
          borderRadius: "5px",
          height: "100%",
        }}
      >
        <div style={{ padding: "2rem" }}>
          <div
            style={{
              paddingInline: "1rem",
              paddingBlockStart: "1rem",
              fontWeight: "500",
              fontSize: "1.8rem",
            }}
          >
            Projects
          </div>
          <div
            style={{
              paddingInline: "1rem",
              paddingBlockStart: "1rem",
              color: "grey",
            }}
            className="box"
          >
            <div className="sec">Project</div>
            <div className="sec">Project TimeLine</div>
            <div className="sec">Project Option 2</div>
          </div>

          {/* <hr style={{ marginInlineStart: "1rem" }} /> */}
          <div
            style={{
              paddingInline: "1rem",
              paddingBlockStart: "1rem",
              display: "flex",
            }}
          >
            <div
              className="btn"
              style={{
                width: "fit-content",
                height: "fit-content",
                marginRight: "2rem",
                marginTop: "0 ",
                padding: "0.5rem",
                backgroundColor: "black",
                fontSize: "0.8rem",
              }}
            >
              New Project
            </div>
            <div
              className="btn"
              style={{
                width: "fit-content",
                height: "fit-content",
                marginRight: "2rem",
                marginTop: "0 ",
                padding: "0.5rem",
                backgroundColor: "black",
                fontSize: "0.8rem",
              }}
            >
              Bookmark
            </div>
            <div
              className="btn"
              style={{
                width: "fit-content",
                height: "fit-content",
                marginRight: "2rem",
                marginTop: "0 ",
                padding: "0.5rem",
                backgroundColor: "black",
                fontSize: "0.8rem",
              }}
            >
              My Projects
            </div>
            <input
              type="text"
              style={{
                width: "fit-content",
                marginRight: "0px",
                textDecoration: "none",
              }}
              name=""
              id=""
            />
          </div>
          <div
            style={{
              paddingInline: "1rem",
              paddingBlockStart: "1rem",
            }}
          >
            <table>
              <tr>
                <td>a</td>
                <td>a</td>
                <td>a</td>
              </tr>
              <tr>
                <td>a</td>
                <td>a</td>
                <td>a</td>
              </tr>
              <tr>
                <td>a</td>
                <td>a</td>
                <td>a</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
