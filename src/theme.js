import React, { useState } from "react";
import App from "./App";

import "./App.css";

export default function Toggle({toggled, onClick}) {
    return(
        <div onClick={onClick} className={`toggle${toggled ? " night" : ""}`}>
          <div className="notch"/>
          <div>
              <div className="shake"/>
          </div>
        </div>
    )
}