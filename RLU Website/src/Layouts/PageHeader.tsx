import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "../components/Button";
import logo from "../assets/RLUimgno3br.jpg";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

export function PageHeader() {

  return (
    <div className="shadow-sm flex justify-between flex-shrink-0">
      {/* menu + logo */}
      <div className="flex items-center justify-start flex-shrink-0 pl-6">
        <a href="/">
          <img src={logo} alt="logo" className="h-9" />
        </a>
      </div>
      {/* nav bar */}
      <div className={` py-3 px-10 hidden lg:flex flex-shrink-0`}>
        <Button variant="default" size="button">
          Home
        </Button>
        <Button variant="default" size="button">
          About
        </Button>
        <Button variant="default" size="button">
          Registration
        </Button>
        <Button variant="default" size="button">
          Schedule
        </Button>
        <Button variant="default" size="button">
          Tournaments
        </Button>
        <Button variant="default" size="button">
          Contact
        </Button>
        <Button variant="default" size="button">
          Media
        </Button>
      </div>
      {/* insta - faceb */}
      <div className="flex justify-around flex-shrink-0 pr-10 ">
        <Button variant="blueNoBg" size="icon">
          <Instagram></Instagram>
        </Button>
        <Button variant="blueNoBg" size="icon">
          <Facebook></Facebook>
        </Button>
        <Button variant="blueNoBg" size="icon">
          <Twitter></Twitter>
        </Button>
      </div>
    </div>
  );
}
