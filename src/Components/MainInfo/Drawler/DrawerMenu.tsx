import "./DrawerMenu.css";
import { useAppDispatch, useAppSelector } from "../../../Redux/store";
import React, { useEffect, useState } from "react";
import { SpendInit } from "../../../Redux/Reducers/SpendSlice";

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
  console.log(userId)

  const [loading, setLoading] = useState(true);
  const { data } = useAppSelector((store) => store.spend);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchUsers = async (): Promise<any> => {
      await dispatch(
        SpendInit({ userId: userId })
      );
      setLoading(false);
    };
    fetchUsers();
  }, []);
  
  console.log(data);
  return (
    <div className="drawer-menu">
      <div>{userId}</div>
      <p>Menu content</p>
      <button onClick={onClose}>+</button>
    </div>
  );
};

export default DrawerMenu;
