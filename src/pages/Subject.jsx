import React, { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import SubTable from "../components/Table";
import Header from "../components/Header";
import Loading from "../components/Loading";

const Subject = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // After 5 seconds, set isLoading to false to render the main component
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div>
      {isLoading ? ( // Render the loading screen component if isLoading is true
        <Loading />
      ) : (
        <Stack className="Subject" alignItems={"center"}>
          <Header />
          <SubTable />
        </Stack>
      )}
    </div>
  );
};

export default Subject;