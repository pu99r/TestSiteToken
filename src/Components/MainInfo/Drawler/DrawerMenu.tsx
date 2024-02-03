import "./DrawerMenu.css";
import { useAppDispatch, useAppSelector } from "../../../Redux/store";
import React, { useEffect, useState } from "react";
import { SpendInit } from "../../../Redux/Reducers/SpendSlice";
import UserDrawer from "./DraweItem"

interface DrawerMenuProps {
  onClose: () => void;
}
const DrawerMenu = ({
  onClose,
  userId,
  userEmail,
}: {
  onClose: () => void;
  userId: string;
  userEmail: string;
}) => {
  const [loading, setLoading] = useState(true);
  const { data } = useAppSelector((store) => store.spend);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchUsers = async (): Promise<any> => {
      await dispatch(SpendInit({ userId: userId }));
      setLoading(false);
    };
    fetchUsers();
  }, []);
  return (
    <div className="drawer-menu">
      <div className="blockTextBrawer">
        <div>{userEmail}</div>
        <button onClick={onClose}>+</button>
      </div>
      <div>Использование токенов</div>
      <div className="graf">график</div>
      <div className="operation">
        <div>История операций</div>
        <div className="UserDrawer">
          <div className="UserTypeDrawer">Тип</div>
          <div className="UserAmountDrawer">Сумма</div>
          <div className="UserDateDrawer">Дата</div>
        </div>
        <div className="UserDrawerSpisok">
          {data.map((user) => <UserDrawer Operation={user}/>)}
         
        </div>
      </div>
    </div>
  );
};

export default DrawerMenu;
