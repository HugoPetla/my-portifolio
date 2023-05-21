"use client";

import { useState } from "react";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <header>
      <div className="justify-between md:items-center md:flex">
        <div>
          <h2>Hugo Petla</h2>
        </div>
        <div>
          {NAV_ITEMS.map((item, key) => {
            return <a key={key}>{item.label}</a>;
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
