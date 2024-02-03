import React from "react";
import { Operation } from "../types/Type";

const UserDrawer = ({ Operation }: { Operation: Operation }): JSX.Element => {
  const dateObject = new Date(Operation.created_at);
  let date = `${dateObject.getFullYear()}.${
    dateObject.getMonth() + 1
  }.${dateObject.getDate()}`;
  let time = `${dateObject.getHours()}:${
    dateObject.getMinutes() + 1
  }:${dateObject.getSeconds()}`;
  console.log(date);
  console.log(time);

  return (
    <div className="UserDrawerCard">
      <div className="UserDrawerCardType">{Operation.status}</div>
      <div className="UserDrawerCardAmount">{`${Operation.amount} BTKN`}</div>
      <div className="UserDrawerCardTime">
        <div>{date}</div>
        <div>{time}</div>
      </div>
    </div>
  );
};
export default UserDrawer;
