import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getLocalStorageUser, logoutUser } from "../context/auth-2";

import PlaySound from "./Sound";
import {
  StyledNav,
  StyledMenuBarContainer,
  StyledMenuBarUl,
  StyledLink,
} from "./styles/StyledMenuBar";

const MenuBar = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [userEmail, setUserEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const logout = () => {
    logoutUser();
  };

  useEffect(() => {
    window.addEventListener("storage",(e) => {
      setIsLoggedIn(false);
   });
  }, []);
  
  console.log(isLoggedIn)

  const handleItemClick = (e) => setActiveItem(e.target.name);
  const menuBar = isLoggedIn ? (
    <StyledNav>
      <StyledMenuBarContainer>
        <h1>
          <StyledLink
            name="home"
            className={activeItem === "home" ? "active" : ""}
            onClick={handleItemClick}
            as={Link}
            to="/"
          >
            {userEmail}
          </StyledLink>
        </h1>
        <StyledMenuBarUl>
          <PlaySound />
          <li>
            <StyledLink
              name="leaderboard"
              className={activeItem === "leaderboard" ? "active" : ""}
              onClick={handleItemClick}
              as={Link}
              to="/leaderboard"
            >
              Leaderboard
            </StyledLink>
          </li>
          <li>
            <StyledLink
              name="myscores"
              className={activeItem === "myscores" ? "active" : ""}
              onClick={handleItemClick}
              as={Link}
              to="/myscores"
            >
              My scores
            </StyledLink>
          </li>
          <li>
            <StyledLink name="logout" onClick={logout}>
              Log Out
            </StyledLink>
          </li>
        </StyledMenuBarUl>
      </StyledMenuBarContainer>
    </StyledNav>
  ) : (
    <StyledNav>
      <StyledMenuBarContainer>
        <h1>
          <StyledLink
            name="home"
            className={activeItem === "home" ? "active" : ""}
            onClick={handleItemClick}
            as={Link}
            to="/"
          >
            Home
          </StyledLink>
        </h1>
        <StyledMenuBarUl>
          <PlaySound />
          <li>
            <StyledLink
              name="leaderboard"
              className={activeItem === "leaderboard" ? "active" : ""}
              onClick={handleItemClick}
              as={Link}
              to="/leaderboard"
            >
              Leaderboard
            </StyledLink>
          </li>
          <li>
            <StyledLink
              name="login"
              className={activeItem === "login" ? "active" : ""}
              onClick={handleItemClick}
              as={Link}
              to="/login"
            >
              Log In
            </StyledLink>
          </li>
          <li>
            <StyledLink
              name="register"
              className={activeItem === "register" ? "active" : ""}
              onClick={handleItemClick}
              as={Link}
              to="/register"
            >
              Register
            </StyledLink>
          </li>
        </StyledMenuBarUl>
      </StyledMenuBarContainer>
    </StyledNav>
  );

  return menuBar;
};

export default MenuBar;
