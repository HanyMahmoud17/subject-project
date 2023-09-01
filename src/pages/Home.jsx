import React, { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import Header from "../components/Header";
import Box from "../components/Box";
import Footer from "../components/footer";
import { FaMoon, FaSun } from "react-icons/fa";
import ScrollStyle from "../assets/css/footer.module.css";
import Loading from "../components/Loading";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer); 
  }, []);

  const handleToggle = () => {
    setDarkModeEnabled(!darkModeEnabled);
    document.body.style.backgroundColor = darkModeEnabled ? "#ffffff" : "#212121";
  };

  const isDarkMode = darkModeEnabled;

  return (
    <div>
      {isLoading ? ( 
        <Loading />
      ) : (
        <Stack className="Home" alignItems={"center"} sx={{ position: "relative" }}>
          <Header />
          <Box />
          <Footer />
          <div
            className={`${ScrollStyle.top_to_btm} ${
              isDarkMode ? ScrollStyle.dark : ""
            }`}
            onClick={handleToggle}
          >
            <div className={`${ScrollStyle.icon_wrapper} icon_container`}>
              <FaSun
                className={`${ScrollStyle.icon_position} ${
                  ScrollStyle.icon_style
                } ${
                  isDarkMode
                    ? ScrollStyle.fade_out
                    : ScrollStyle.fade_in
                } ${
                  isDarkMode
                    ? ScrollStyle.dark_mode
                    : ScrollStyle.light_mode
                }`}
              />
              <FaMoon
                className={`${ScrollStyle.icon_position} ${
                  ScrollStyle.icon_style
                } ${
                  isDarkMode
                    ? ScrollStyle.fade_in
                    : ScrollStyle.fade_out
                } ${
                  isDarkMode
                    ? ScrollStyle.light_mode
                    : ScrollStyle.dark_mode
                }`}
              />
            </div>
          </div>
        </Stack>
      )}
    </div>
  );
};

export default Home;