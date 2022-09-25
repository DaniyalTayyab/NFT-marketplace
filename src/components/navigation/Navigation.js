import React from "react";
import Button from "../button/Button";
import Logo from "../Logo";
import { Section, NavBar, Menu, MenuItem } from "./Navigation.styles";

const Navigation = () => {
  return (
    <Section>
      <NavBar>
        <Logo />
        <Menu>
          <MenuItem>Market place</MenuItem>
          <MenuItem>Drops</MenuItem>
          <MenuItem>About</MenuItem>
        </Menu>
        <Button text="Connect Wallet" link="https://google.com" />
      </NavBar>
    </Section>
  );
};

export default Navigation;
