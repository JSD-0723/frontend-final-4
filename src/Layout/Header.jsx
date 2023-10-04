import { AppBar, Toolbar, Typography, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import React from "react";

const Header = () => {
  const StyledToolBar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    color: theme.palette.primary.main || "black",
    fontSize: "14px",
    fontWeight: "500",
    gap: "20px",
  }));
  const StyledUl = styled("ul")(({ theme }) => ({
    display: "flex",
    listStyle: "none",
    color: theme.palette.primary.typeHighEmphasis || "black",
    gap: "20px",
    padding: "0",
    margin: "0",
  }));
  const InputWithIcon = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.grey,
    width: "20%",
    padding: "0 8px",
    borderRadius: "4px",
    color: theme.palette.primary.typeLowEmphasis || "black",
  }));

  return (
    <AppBar
      position="sticky"
      sx={{
        boxShadow: "none !important",
        backgroundColor: "lightblue",
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
        <InputWithIcon>
          <InputBase
            startAdornment={<SearchIcon fontSize="medium" fontWeight="100" />}
            placeholder="Search for products or brands....."
            sx={{
              width: "100%",
            }}
          />
        </InputWithIcon>
      </StyledToolBar>
    </AppBar>
  );
};

export default Header;
