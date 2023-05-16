import React from "react";
import "../../Assets/css/projectDetail.css";
const ProjectDetail = () => {
  return (
    <div className="ProjectTop">
      <div
        className="projectForm"
        style={{
          paddingInline: "3rem",
          height: "100%",
          background: "#f8f8f8",
          fontFamily: "Poppins",
        }}
      >
        <div
          style={{
            padding: "1rem",
            fontWeight: "600",
          }}
        >
          Project / PName
        </div>
        <div className="ProjectDetailInfo">
          <div
            className="ProjectDetailInfoInner"
            style={{ padding: "1rem", background: "#f0f3fa" }}
          >
            <div
              style={{
                fontWeight: "700",
                fontSize: "1.2rem",
                paddingBlockStart: "1rem",
              }}
            >
              Titlelkwe ewijrew{" "}
            </div>
            <div
              style={{
                background: "white",
                marginBlockStart: "1rem",
                borderRadius: "1rem",
              }}
            >
              <div
                style={{
                  fontSize: "1rem",
                  padding: "1rem",
                }}
              >
                Project Description
              </div>
              <div
                style={{
                  fontSize: "1rem",
                  padding: "0 1rem 1rem 1rem",
                  color: "grey",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur cumque provident nostrum voluptatum perferendis unde
                in ipsam beatae eligendi distinctio ratione alias nihil eius
                optio quia culpa inventore, odit saepe. Voluptate, pariatur ab
                neque quam unde vero debitis ipsam omnis cumque magni nam
                delectus quaerat dignissimos assumenda, rem nemo! Nulla quasi
                fugiat, at voluptates minus quaerat sit repellendus pariatur
                facere. Saepe quas, aut voluptate culpa voluptas sed sunt
                pariatur ex ipsum sequi repellat iste debitis eveniet sit
                dolorum labore qui quisquam, tenetur amet dicta recusandae
                eligendi doloribus. Dicta, minima eligendi! Magnam a esse ab
                expedita at, earum, alias nihil, delectus illo enim quo
                distinctio modi! Eveniet do
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                padding: "1rem",
                fontSize: "small",
                color: "grey",
              }}
            >
              <div style={{ flex: "1" }}>
                <div>Start Date</div>
                <div style={{ fontWeight: "600" }}>10-june-2023</div>
              </div>
              <div style={{ flex: "8" }}>
                <div>Due Date</div>
                <div style={{ fontWeight: "600" }}>13-july-2023</div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "green",
                maxWidth: "9%",
                marginBlock: "1rem",
                borderRadius: "4px",
                color: "white",
                padding: "0.3rem",
                textAlign: "center",
              }}
            >
              In Progress
            </div>
          </div>
        </div>
        <div
          className="ProjectDetailMemberInfo"
          style={{
            marginBlockStart: "1rem",
            padding: "1rem",
            background: "#f0f3fa",
          }}
        >
          {" "}
          <div
            style={{
              fontWeight: "700",
              fontSize: "1.2rem",
              paddingBlockStart: "1rem",
            }}
          >
            Project Member
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            <div
              style={{
                width: "100px",
                paddingBlockStart: "1rem",
                paddingInlineStart: "0.8rem",
              }}
            >
              <img
                style={{
                  borderRadius: "10px",
                  boxShadow: " 0 0 6px rgb(0 0 0 / 30%)",
                }}
                src="https://eu.ui-avatars.com/api/?name=John+Doe&size=250"
              ></img>
              <div style={{ textAlign: "center" }}>John Doe</div>
            </div>
            <div
              style={{
                width: "100px",
                paddingBlockStart: "1rem",
                paddingInlineStart: "0.8rem",
              }}
            >
              <img
                style={{
                  borderRadius: "10px",
                  boxShadow: " 0 0 6px rgb(0 0 0 / 30%)",
                }}
                src="https://eu.ui-avatars.com/api/?name=Anurag+Roshan&size=250"
              ></img>
              <div style={{ textAlign: "center" }}>Anurag Roshan</div>
            </div>
            <div
              style={{
                width: "100px",
                paddingBlockStart: "1rem",
                paddingInlineStart: "0.8rem",
              }}
            >
              <img
                style={{
                  borderRadius: "10px",
                  boxShadow: " 0 0 6px rgb(0 0 0 / 30%)",
                }}
                src="https://eu.ui-avatars.com/api/?name=Mukul+Kumar&size=250"
              ></img>
              <div style={{ textAlign: "center" }}>Mukul Kumar</div>
            </div>
            <div
              style={{
                width: "100px",
                paddingBlockStart: "1rem",
                paddingInlineStart: "0.8rem",
              }}
            >
              <img
                style={{
                  borderRadius: "10px",
                  boxShadow: " 0 0 6px rgb(0 0 0 / 30%)",
                }}
                src="https://eu.ui-avatars.com/api/?name=Priyanshu+Vaishnav&size=250"
              ></img>
              <div style={{ textAlign: "center" }}>Priyanshu Vaishnav</div>
            </div>
            <div
              style={{
                width: "100px",
                paddingBlockStart: "1rem",
                paddingInlineStart: "0.8rem",
              }}
            >
              <img
                style={{
                  borderRadius: "10px",
                  boxShadow: " 0 0 6px rgb(0 0 0 / 30%)",
                }}
                src="https://eu.ui-avatars.com/api/?name=Lionel+Messi&size=250"
              ></img>
              <div style={{ textAlign: "center" }}>Lionel Messi</div>
            </div>
            <div
              style={{
                width: "100px",
                paddingBlockStart: "1rem",
                paddingInlineStart: "0.8rem",
              }}
            >
              <img
                style={{
                  borderRadius: "10px",
                  boxShadow: " 0 0 6px rgb(0 0 0 / 30%)",
                }}
                src="https://eu.ui-avatars.com/api/?name=Cristiano+Ronaldo&size=250"
              ></img>
              <div style={{ textAlign: "center" }}>Cristiano Ronaldo</div>
            </div>
          </div>
        </div>
        <div
          className="ProjectDetailMemberInfo"
          style={{
            marginBlockStart: "1rem",
            padding: "1rem",
            background: "#f0f3fa",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                paddingBlockStart: "1rem",
                fontWeight: "700",
                fontSize: "1.2rem",
                paddingBlockStart: "1rem",
              }}
            >
              Tasks
            </div>
            <div
              style={{
                textAlign: "right",
                paddingInlineEnd: "1rem",
                width: "130px",
                paddingBlockStart: "1rem",
                // fontWeight: "600",
                cursor: "pointer",
                borderRadius: "1rem",
                fontSize: "1.1rem",
                paddingBlockStart: "0.5rem",
                backgroundColor: "#eae5e5",
              }}
            >
              Add Tasks
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            <div
              style={{
                height: "17rem",
                width: "17rem",
                background: "white",
                borderRadius: "10px",
                marginBlockStart: "1rem",
                marginInlineStart: "1rem",
                boxShadow: " 0 0 6px rgb(0 0 0 / 30%)",
              }}
            >
              <div
                style={{
                  paddingBlockStart: "1rem",
                  paddingInlineStart: "1rem",
                  textAlign: "left",
                  fontWeight: "600",
                  fontSize: "larger",
                }}
              >
                Task Title
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingBlockStart: "0.5rem",
                }}
              >
                <div
                  style={{
                    paddingInlineStart: "1rem",
                    textAlign: "left",
                    fontSize: "1rem",
                    flex: "1",
                  }}
                >
                  Start Date
                </div>
                <div
                  style={{
                    flex: "2",
                    textAlign: "left",
                    fontWeight: "600",
                  }}
                >
                  10-june-2023
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingBlockStart: "0.5rem",
                }}
              >
                <div
                  style={{
                    paddingInlineStart: "1rem",
                    textAlign: "left",
                    fontSize: "1rem",
                    flex: "1",
                  }}
                >
                  End Date
                </div>
                <div
                  style={{
                    flex: "2",
                    textAlign: "left",
                    fontWeight: "600",
                  }}
                >
                  18-July-2023
                </div>
              </div>
              <div
                style={{
                  textAlign: "left",
                  paddingBlockStart: "0.5rem",
                  paddingInlineStart: "1rem",
                }}
              >
                <div
                  className="tooltip"
                  style={{
                    maxWidth: "40px",
                    textAlign: "center",
                    borderRadius: "1rem",
                    background: "orange",
                  }}
                >
                  M<span class="tooltiptext">Medium</span>
                </div>
              </div>
              <div
                style={{
                  textAlign: "left",
                  paddingBlockStart: "0.5rem",
                  paddingInlineStart: "1rem",
                }}
              >
                <div> Assigned To :</div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    style={{
                      width: "60px",
                      paddingBlockStart: "0.5rem",
                      paddingInline: "0.4rem",
                    }}
                  >
                    <img
                      style={{
                        borderRadius: "60px",
                      }}
                      src="https://eu.ui-avatars.com/api/?name=Lionel+Messi&size=250"
                    ></img>
                  </div>
                  <div
                    style={{
                      width: "60px",
                      paddingBlockStart: "0.5rem",
                      paddingInline: "0.4rem",
                    }}
                  >
                    <img
                      style={{
                        borderRadius: "60px",
                      }}
                      src="https://eu.ui-avatars.com/api/?name=Cionel+Ressi&size=250"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                height: "17rem",
                width: "17rem",
                background: "white",
                borderRadius: "10px",
                marginBlockStart: "1rem",
                marginInlineStart: "1rem",
                boxShadow: " 0 0 6px rgb(0 0 0 / 30%)",
              }}
            >
              <div
                style={{
                  paddingBlockStart: "1rem",
                  paddingInlineStart: "1rem",
                  textAlign: "left",
                  fontWeight: "600",
                  fontSize: "larger",
                }}
              >
                Task Title
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingBlockStart: "0.5rem",
                }}
              >
                <div
                  style={{
                    paddingInlineStart: "1rem",
                    textAlign: "left",
                    fontSize: "1rem",
                    flex: "1",
                  }}
                >
                  Start Date
                </div>
                <div
                  style={{
                    flex: "2",
                    textAlign: "left",
                    fontWeight: "600",
                  }}
                >
                  10-june-2023
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingBlockStart: "0.5rem",
                }}
              >
                <div
                  style={{
                    paddingInlineStart: "1rem",
                    textAlign: "left",
                    fontSize: "1rem",
                    flex: "1",
                  }}
                >
                  End Date
                </div>
                <div
                  style={{
                    flex: "2",
                    textAlign: "left",
                    fontWeight: "600",
                  }}
                >
                  18-July-2023
                </div>
              </div>
              <div
                style={{
                  textAlign: "left",
                  paddingBlockStart: "0.5rem",
                  paddingInlineStart: "1rem",
                }}
              >
                <div
                  className="tooltip"
                  style={{
                    maxWidth: "40px",
                    textAlign: "center",
                    borderRadius: "1rem",
                    background: "orange",
                  }}
                >
                  M<span class="tooltiptext">Medium</span>
                </div>
              </div>
              <div
                style={{
                  textAlign: "left",
                  paddingBlockStart: "0.5rem",
                  paddingInlineStart: "1rem",
                }}
              >
                <div> Assigned To :</div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    style={{
                      width: "60px",
                      paddingBlockStart: "0.5rem",
                      paddingInline: "0.4rem",
                    }}
                  >
                    <img
                      style={{
                        borderRadius: "60px",
                      }}
                      src="https://eu.ui-avatars.com/api/?name=Lionel+Messi&size=250"
                    ></img>
                  </div>
                  <div
                    style={{
                      width: "60px",
                      paddingBlockStart: "0.5rem",
                      paddingInline: "0.4rem",
                    }}
                  >
                    <img
                      style={{
                        borderRadius: "60px",
                      }}
                      src="https://eu.ui-avatars.com/api/?name=Cionel+Ressi&size=250"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                height: "17rem",
                width: "17rem",
                background: "white",
                borderRadius: "10px",
                marginBlockStart: "1rem",
                marginInlineStart: "1rem",
                boxShadow: " 0 0 6px rgb(0 0 0 / 30%)",
              }}
            >
              <div
                style={{
                  paddingBlockStart: "1rem",
                  paddingInlineStart: "1rem",
                  textAlign: "left",
                  fontWeight: "600",
                  fontSize: "larger",
                }}
              >
                Task Title
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingBlockStart: "0.5rem",
                }}
              >
                <div
                  style={{
                    paddingInlineStart: "1rem",
                    textAlign: "left",
                    fontSize: "1rem",
                    flex: "1",
                  }}
                >
                  Start Date
                </div>
                <div
                  style={{
                    flex: "2",
                    textAlign: "left",
                    fontWeight: "600",
                  }}
                >
                  10-june-2023
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingBlockStart: "0.5rem",
                }}
              >
                <div
                  style={{
                    paddingInlineStart: "1rem",
                    textAlign: "left",
                    fontSize: "1rem",
                    flex: "1",
                  }}
                >
                  End Date
                </div>
                <div
                  style={{
                    flex: "2",
                    textAlign: "left",
                    fontWeight: "600",
                  }}
                >
                  18-July-2023
                </div>
              </div>
              <div
                style={{
                  textAlign: "left",
                  paddingBlockStart: "0.5rem",
                  paddingInlineStart: "1rem",
                }}
              >
                <div
                  className="tooltip"
                  style={{
                    maxWidth: "40px",
                    textAlign: "center",
                    borderRadius: "1rem",
                    background: "orange",
                  }}
                >
                  M<span class="tooltiptext">Medium</span>
                </div>
              </div>
              <div
                style={{
                  textAlign: "left",
                  paddingBlockStart: "0.5rem",
                  paddingInlineStart: "1rem",
                }}
              >
                <div> Assigned To :</div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    style={{
                      width: "60px",
                      paddingBlockStart: "0.5rem",
                      paddingInline: "0.4rem",
                    }}
                  >
                    <img
                      style={{
                        borderRadius: "60px",
                      }}
                      src="https://eu.ui-avatars.com/api/?name=Lionel+Messi&size=250"
                    ></img>
                  </div>
                  <div
                    style={{
                      width: "60px",
                      paddingBlockStart: "0.5rem",
                      paddingInline: "0.4rem",
                    }}
                  >
                    <img
                      style={{
                        borderRadius: "60px",
                      }}
                      src="https://eu.ui-avatars.com/api/?name=Cionel+Ressi&size=250"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                height: "17rem",
                width: "17rem",
                background: "white",
                borderRadius: "10px",
                marginBlockStart: "1rem",
                marginInlineStart: "1rem",
                boxShadow: " 0 0 6px rgb(0 0 0 / 30%)",
              }}
            >
              <div
                style={{
                  paddingBlockStart: "1rem",
                  paddingInlineStart: "1rem",
                  textAlign: "left",
                  fontWeight: "600",
                  fontSize: "larger",
                }}
              >
                Task Title
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingBlockStart: "0.5rem",
                }}
              >
                <div
                  style={{
                    paddingInlineStart: "1rem",
                    textAlign: "left",
                    fontSize: "1rem",
                    flex: "1",
                  }}
                >
                  Start Date
                </div>
                <div
                  style={{
                    flex: "2",
                    textAlign: "left",
                    fontWeight: "600",
                  }}
                >
                  10-june-2023
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingBlockStart: "0.5rem",
                }}
              >
                <div
                  style={{
                    paddingInlineStart: "1rem",
                    textAlign: "left",
                    fontSize: "1rem",
                    flex: "1",
                  }}
                >
                  End Date
                </div>
                <div
                  style={{
                    flex: "2",
                    textAlign: "left",
                    fontWeight: "600",
                  }}
                >
                  18-July-2023
                </div>
              </div>
              <div
                style={{
                  textAlign: "left",
                  paddingBlockStart: "0.5rem",
                  paddingInlineStart: "1rem",
                }}
              >
                <div
                  className="tooltip"
                  style={{
                    maxWidth: "40px",
                    textAlign: "center",
                    borderRadius: "1rem",
                    background: "orange",
                  }}
                >
                  M<span class="tooltiptext">Medium</span>
                </div>
              </div>
              <div
                style={{
                  textAlign: "left",
                  paddingBlockStart: "0.5rem",
                  paddingInlineStart: "1rem",
                }}
              >
                <div> Assigned To :</div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    style={{
                      width: "60px",
                      paddingBlockStart: "0.5rem",
                      paddingInline: "0.4rem",
                    }}
                  >
                    <img
                      style={{
                        borderRadius: "60px",
                      }}
                      src="https://eu.ui-avatars.com/api/?name=Lionel+Messi&size=250"
                    ></img>
                  </div>
                  <div
                    style={{
                      width: "60px",
                      paddingBlockStart: "0.5rem",
                      paddingInline: "0.4rem",
                    }}
                  >
                    <img
                      style={{
                        borderRadius: "60px",
                      }}
                      src="https://eu.ui-avatars.com/api/?name=Cionel+Ressi&size=250"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                height: "17rem",
                width: "17rem",
                background: "white",
                borderRadius: "10px",
                marginBlockStart: "1rem",
                marginInlineStart: "1rem",
                boxShadow: " 0 0 6px rgb(0 0 0 / 30%)",
              }}
            >
              <div
                style={{
                  paddingBlockStart: "1rem",
                  paddingInlineStart: "1rem",
                  textAlign: "left",
                  fontWeight: "600",
                  fontSize: "larger",
                }}
              >
                Task Title
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingBlockStart: "0.5rem",
                }}
              >
                <div
                  style={{
                    paddingInlineStart: "1rem",
                    textAlign: "left",
                    fontSize: "1rem",
                    flex: "1",
                  }}
                >
                  Start Date
                </div>
                <div
                  style={{
                    flex: "2",
                    textAlign: "left",
                    fontWeight: "600",
                  }}
                >
                  10-june-2023
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingBlockStart: "0.5rem",
                }}
              >
                <div
                  style={{
                    paddingInlineStart: "1rem",
                    textAlign: "left",
                    fontSize: "1rem",
                    flex: "1",
                  }}
                >
                  End Date
                </div>
                <div
                  style={{
                    flex: "2",
                    textAlign: "left",
                    fontWeight: "600",
                  }}
                >
                  18-July-2023
                </div>
              </div>
              <div
                style={{
                  textAlign: "left",
                  paddingBlockStart: "0.5rem",
                  paddingInlineStart: "1rem",
                }}
              >
                <div
                  className="tooltip"
                  style={{
                    maxWidth: "40px",
                    textAlign: "center",
                    borderRadius: "1rem",
                    background: "orange",
                  }}
                >
                  M<span class="tooltiptext">Medium</span>
                </div>
              </div>
              <div
                style={{
                  textAlign: "left",
                  paddingBlockStart: "0.5rem",
                  paddingInlineStart: "1rem",
                }}
              >
                <div> Assigned To :</div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    style={{
                      width: "60px",
                      paddingBlockStart: "0.5rem",
                      paddingInline: "0.4rem",
                    }}
                  >
                    <img
                      style={{
                        borderRadius: "60px",
                      }}
                      src="https://eu.ui-avatars.com/api/?name=Lionel+Messi&size=250"
                    ></img>
                  </div>
                  <div
                    style={{
                      width: "60px",
                      paddingBlockStart: "0.5rem",
                      paddingInline: "0.4rem",
                    }}
                  >
                    <img
                      style={{
                        borderRadius: "60px",
                      }}
                      src="https://eu.ui-avatars.com/api/?name=Cionel+Ressi&size=250"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                height: "17rem",
                width: "17rem",
                background: "white",
                borderRadius: "10px",
                marginBlockStart: "1rem",
                marginInlineStart: "1rem",
                boxShadow: " 0 0 6px rgb(0 0 0 / 30%)",
              }}
            >
              <div
                style={{
                  paddingBlockStart: "1rem",
                  paddingInlineStart: "1rem",
                  textAlign: "left",
                  fontWeight: "600",
                  fontSize: "larger",
                }}
              >
                Task Title
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingBlockStart: "0.5rem",
                }}
              >
                <div
                  style={{
                    paddingInlineStart: "1rem",
                    textAlign: "left",
                    fontSize: "1rem",
                    flex: "1",
                  }}
                >
                  Start Date
                </div>
                <div
                  style={{
                    flex: "2",
                    textAlign: "left",
                    fontWeight: "600",
                  }}
                >
                  10-june-2023
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingBlockStart: "0.5rem",
                }}
              >
                <div
                  style={{
                    paddingInlineStart: "1rem",
                    textAlign: "left",
                    fontSize: "1rem",
                    flex: "1",
                  }}
                >
                  End Date
                </div>
                <div
                  style={{
                    flex: "2",
                    textAlign: "left",
                    fontWeight: "600",
                  }}
                >
                  18-July-2023
                </div>
              </div>
              <div
                style={{
                  textAlign: "left",
                  paddingBlockStart: "0.5rem",
                  paddingInlineStart: "1rem",
                }}
              >
                <div
                  className="tooltip"
                  style={{
                    maxWidth: "40px",
                    textAlign: "center",
                    borderRadius: "1rem",
                    background: "orange",
                  }}
                >
                  M<span class="tooltiptext">Medium</span>
                </div>
              </div>
              <div
                style={{
                  textAlign: "left",
                  paddingBlockStart: "0.5rem",
                  paddingInlineStart: "1rem",
                }}
              >
                <div> Assigned To :</div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    style={{
                      width: "60px",
                      paddingBlockStart: "0.5rem",
                      paddingInline: "0.4rem",
                    }}
                  >
                    <img
                      style={{
                        borderRadius: "60px",
                      }}
                      src="https://eu.ui-avatars.com/api/?name=Lionel+Messi&size=250"
                    ></img>
                  </div>
                  <div
                    style={{
                      width: "60px",
                      paddingBlockStart: "0.5rem",
                      paddingInline: "0.4rem",
                    }}
                  >
                    <img
                      style={{
                        borderRadius: "60px",
                      }}
                      src="https://eu.ui-avatars.com/api/?name=Cionel+Ressi&size=250"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="flip-card-back">
                  <div style={{ padding: "1rem" }}>okback</div>
                </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
