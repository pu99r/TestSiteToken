import React from "react";
import "./DrawerMenu.css";

interface DrawerMenuProps {
  onClose: () => void;
}
const DrawerMenu = ({
  onClose,
  userId,
}: {
  onClose: () => void;
  userId: string;
}) => {
  console.log(userId);
  return (
    <div className="drawer-menu">
        <div>{userId}</div>
      <p>Menu content</p><button onClick={onClose}>+</button>
    </div>
  );
};

export default DrawerMenu;
