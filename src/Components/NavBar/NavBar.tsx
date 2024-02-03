import React from "react";
import { IoMdBriefcase, IoIosContact } from "react-icons/io";
import "./NavBar.css";

const NavBar = (): JSX.Element => {
  return (
    <>
      <div className="NavBar">
        <div className="logo">BitTest</div>
        <div className="sometext">
          <IoMdBriefcase size={30} className="iconMycompany" />
          <div>Моя Организация</div>
        </div>

        <div className="admin">
          <IoIosContact size={30} className="iconAdmin" />
          <div className="adminstaus">
            <div className="adminstaus1">Вы авторизированы</div>
            <div className="adminstaus2">Админитратор</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
