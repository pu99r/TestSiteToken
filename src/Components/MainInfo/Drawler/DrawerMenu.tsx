import "./DrawerMenu.css";
import { useAppDispatch, useAppSelector } from "../../../Redux/store";
import React, { useEffect, useState } from "react";
import { SpendInit } from "../../../Redux/Reducers/SpendSlice";
import UserDrawer from "./DraweItem";
import Graf from "../Graf/Graf";
import { IoCloseSharp } from "react-icons/io5";


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
  if (loading) {
    return <div className="loader"></div>;
  }
  return (
    <div className="drawer-menu">
      <div className="blockTextBrawer">
        <div>{userEmail}</div>
        <button className="drawerexit" onClick={onClose}><IoCloseSharp/></button>
      </div>
      <div className="tokstats">Использование токенов</div>
      <div className="graf">
        <Graf operations={data} />
      </div>
      <div className="operation">
        <div className="operationtext">История операций</div>
        <div className="UserDrawer">
          <div className="UserTypeDrawer">Тип</div>
          <div className="UserAmountDrawer">Сумма</div>
          <div className="UserDateDrawer">Дата</div>
        </div>
        <div className="UserDrawerSpisok">
          {data.slice(0, 5).map((user) => (
            <UserDrawer Operation={user} key={user.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrawerMenu;
