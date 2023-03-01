import React, { useState } from "react";
import "../App.css";
import "react-select-search/style.css";
import { FaSearch } from "react-icons/fa";
import Pager from "react-pager";

import { render } from "react-dom";
const Searched = (props) => {
  return (
    <>
      <div
        className="display-flex-row"
        style={{
          width: "100%",
          bottom: "0px",
          padding: "0.2rem",
          position: "relative",
        }}
      >
        <div
          style={{
            fontWeight: "500",
            // paddingInline: "5px",
          }}
        >
          {props.searchedUser[0].name}
        </div>
        <div
          style={{
            fontSize: "0.8rem",
            paddingInline: "5px",
            color: "grey",
            paddingTop: "4px",
          }}
        >
          {props.searchedUser[0].userName}
        </div>
        <div
          style={{
            fontSize: "0.7rem",
            paddingInline: "5px",
            color: "grey",
            paddingTop: "6px",
          }}
        >
          {props.searchedUser[0].college}
        </div>
        <button
          style={{
            position: "absolute",
            right: "0px",
            width: "1.5rem",
            height: "1.5rem",
          }}
        >
          {" "}
          +{" "}
        </button>
      </div>
      <hr />
    </>
  );
};
const ProjectMember = (props) => {
  const addedUser = props.addedUser;
  return (
    <div>
      <div
        style={{
          paddingBlock: "5px",
          fontWeight: "700",
          marginBlockStart: "0.5rem",
        }}
      >
        Added User List
      </div>
      <div className="display-flex-row">
        <div className="addedUser">john anurag</div>
        <div className="addedUser">aman john</div>
        <div className="addedUser">john anurag</div>
        <div className="addedUser">john raj</div>
      </div>
    </div>
  );
};
const AddProjectMember = () => {
  let searchedUser = [
    {
      name: "Anurag Roshan",
      userName: "anurag15",
      college: "Chandigarh University",
    },
  ];
  const name = "anurag";
  // console.log(searchedUser.name);
  let AddedUser = [
    { name: "anurag", userName: "12" },
    { name: "anubhav", userName: "12" },
    { name: "ahav", userName: "26" },
    { name: "bhav", userName: "32" },
    { name: "anuav", userName: "62" },
    { name: "av", userName: "82" },
  ];
  return (
    <div className="addMember-Top" style={{ height: "15rem" }}>
      <div className="display-flex-row">
        <div
          className="projectF-LabelSection"
          style={{
            width: "40%",
            margin: "auto 0 auto 0",
            padding: "0",
            flex: 5,
          }}
        >
          Add Project Member
        </div>
        <div className="display-flex-row" style={{ flex: "5" }}>
          <input
            style={{ width: "100%", borderRadius: "5px" }}
            type="text"
            name=""
            id=""
            placeholder="Search Username"
          />
          <div
            className="searchIco"
            style={{
              margin: "auto 10px auto 10px",
            }}
          >
            <FaSearch />
          </div>
        </div>
      </div>
      <hr />
      {searchedUser.length ? (
        <>
          <Searched searchedUser={searchedUser} />
          <ProjectMember addedUser={AddedUser} />
        </>
      ) : (
        <>
          <ProjectMember addedUser={AddedUser} />
        </>
      )}
    </div>
  );
};

export default AddProjectMember;
