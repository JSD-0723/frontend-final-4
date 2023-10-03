import { AppBar, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";
import React from "react";

const Header = () => {
  const StyledToolBar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    color: "#17494D",
    gap: "20px",
  }));
  const StyledUl = styled("ul")(({ theme }) => ({
    display: "flex",
    listStyle: "none",
    fontSize: "14px",
    fontWeight: "500",
    color: "#171520",
    gap: "20px",
    padding: "0",
    margin: "0",
  }));
  
  return (
    <AppBar
      sx={{
        boxShadow: "none !important",
        backgroundColor: "white",
      }}
    >
      <StyledToolBar>
        <Typography variant="h6">CORA'L</Typography>
        <StyledUl>
          <li>Handbags</li>
          <li>Watches</li>
          <li>Skincare</li>
          <li>Jewellery</li>
          <li>Apparels</li>
        </StyledUl>
      </StyledToolBar>
    </AppBar>
  );
};

export default Header;
