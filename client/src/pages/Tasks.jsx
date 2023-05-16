import React from "react";
import TaskPanel1 from "./TaskPanel1";
const Tasks = () => {
  return (
    <>
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
              Tasks
            </div>
            <div
              style={{
                paddingInline: "1rem",
                paddingBlockStart: "1rem",
                color: "grey",
              }}
              className="box"
            >
              <div className="sec">
                {/* <span onClick={() => setProjectPage(0)} value="Project"> */}
                Task
                {/* </span> */}
              </div>
              <div className="sec">
                <span
                  // onClick={() => setProjectPage(1)}
                  value="Project TimeLine"
                >
                  Project TimeLine
                </span>
              </div>
              <div className="sec">
                <span
                  // onClick={() => setProjectPage(2)}
                  value="Project Option 2"
                >
                  Project Option 2
                </span>
              </div>
            </div>

            {/* <hr style={{ marginInlineStart: "1rem" }} /> */}
            <div
              style={{
                paddingInline: "1rem",
                paddingBlockStart: "1rem",
                display: "flex",
              }}
            ></div>
            <hr style={{ marginInlineStart: "1rem" }} />
            {/* {projectPage === 0 && <ProjectPanel1 />}
            {projectPage === 1 && <ProjectPanel2 />}
            {projectPage === 2 && <ProjectPanel3 />} */}
            <TaskPanel1 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
