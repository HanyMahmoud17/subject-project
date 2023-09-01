import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import logo from "../assets/images/subjectLogo.png";

import footerStyles from '../assets/css/footer.module.css';

const Loading = () => {
  return (
    <>
    <div className={footerStyles.loadingContainer}>
      <img
        src={logo}
        alt="Logo"
        className={footerStyles.logo}
      />
    </div>
    </>
      );
    };
    
    export default Loading;