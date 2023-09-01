import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import logo from "../assets/images/subjectLogo.png";
// import logo from "../assets/images/headerLogo.png";
import footerStyles from '../assets/css/footer.module.css';

const Header = () => {
  return (
    <>
      {/* <div className={footerStyles.headertest}>
      <p className={`${footerStyles.headerparg} ${footerStyles.shiningBackground}`}>
        إصدارتجريبي
      </p>
    </div> */}
    <div className="body-container">
      <Stack
        className="header"
        alignItems="center"
        pt={{ xs: 15, md: 30 }}
        pb={{ xs: 10, md: 15 }}
        data-aos="fade-down"
        data-aos-delay="500"
      >
            <Stack className={footerStyles.HLogo}  mb={7} >
              <img src={logo} alt="logo" style={{ borderRadius: "10px" }} />
            </Stack>
        <Typography
        className={footerStyles.textHOne}
          fontSize={{ xs: "28px", md: "28px", lg: "28px" }}
          color="#7d57f3"
          fontWeight="600"
        >
          منصة سبجكت الرقمية
        </Typography>
        <Typography className={footerStyles.textHTwo} fontSize={{ xs: "20px", md: "25px", lg:"25" }} color="#8d8d8d" fontWeight="500">
          منصة بحث ذكية للملفات الجامعية
        </Typography>
        
      </Stack>
    </div>
    </>
  );
};

export default Header;