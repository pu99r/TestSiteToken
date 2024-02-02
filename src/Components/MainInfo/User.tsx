import React from "react";
import { User } from "./types/Type";

import { IoTrashOutline } from "react-icons/io5";
import { HiPencilSquare } from "react-icons/hi2";





const useritem = ({ user}: { user: User}): JSX.Element => {
  return (
    <div className="card">
      <div className="UserEmail">{user.email}</div>
      <div className="UserName">{user.name}</div>
      <div className="UserRole">{user.role}</div>
      <div className="UserType">{user.subscription.plan.type}</div>
      <div className="UserTokens">{user.subscription.tokens}</div>
      <div className="DoIt"><IoTrashOutline className="iconDoIt"/><HiPencilSquare className="iconDoIt"/></div>
    </div>
  );
};
export default useritem;
