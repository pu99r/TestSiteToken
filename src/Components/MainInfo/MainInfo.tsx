import React, { useEffect, useState } from "react";
import "./MainInfo.css";
import Useritem from "./User";
import DrawerMenu from "./Drawler/DrawerMenu";
import Overlay from "../Overlay/Overlay";
import { HiOutlineMagnifyingGlassCircle } from "react-icons/hi2";
import { IoArrowDownOutline, IoArrowUpOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { UsersInit } from "../../Redux/Reducers/UserSlice";

const Main = (): JSX.Element => {
  const [page, setPage] = useState(1);
  const [Findstring, setFindstring] = useState("");
  const [sort, setSort] = useState("desc");
  const [loading, setLoading] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [userIdOpen, setUserIdOpen] = useState("");
  const [userEmailOpen, setUserEmailOpen] = useState("");

  const { data, pages } = useAppSelector((store) => store.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchUsers = async (): Promise<any> => {
      await dispatch(
        UsersInit({ value: page, sort: sort, half: true, string: Findstring })
      );
      setLoading(false);
    };
    fetchUsers();
  }, []);

  const DowloadNew = async (index: number) => {
    if (!isDrawerOpen) {
      let numreal = index & 1 ? (index + 1) / 2 : index / 2;
      let half = index % 2 !== 0;
      setPage(index);
      await dispatch(
        UsersInit({
          value: numreal,
          sort: sort,
          half: half,
          string: Findstring,
        })
      );
      setLoading(false);
    }
  };

  const handleInputChange = async (event: any) => {
    if (!isDrawerOpen) {
      setFindstring(event.target.value);
      await dispatch(
        UsersInit({
          value: page,
          sort: sort,
          half: true,
          string: event.target.value,
        })
      );
      setLoading(false);
    }
  };

  const Sorting = async () => {
    if (!isDrawerOpen) {
      let k = page & 1 ? (page + 1) / 2 : page / 2;
      let half = page % 2 !== 0;
      const sortOrder = sort === "desc" ? "asc" : "desc";

      await dispatch(
        UsersInit({
          value: k,
          sort: sortOrder,
          half: half,
          string: Findstring,
        })
      );

      setLoading(false);
      setSort(sortOrder);
    }
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const handleUserClick = (userId: string, userEmail: string) => {
    isDrawerOpen ? console.log("none") : setUserIdOpen(userId);
    isDrawerOpen ? console.log("none") : setUserEmailOpen(userEmail);
  };
  if (loading) {
    return <div className="loader"></div>;
  }
  return (
    <div className="MainWindow">
      <div className="titleofMainWindow">Моя организация</div>
      <div className="titleofMainWindow2">Пользователи</div>
      <div className="inputcard">
        <HiOutlineMagnifyingGlassCircle className="inputcardIcon" />
        <input
          placeholder="Поиск"
          value={Findstring}
          onChange={handleInputChange}
        />
      </div>

      <div className="cardTop">
        <div className="UserEmailTop">Email</div>
        <div className="UserNameTop">Имя</div>
        <div className="UserRoleTop">Роль</div>
        <div className="UserTypeTop">Подписка</div>
        <div className="UserTokensTop">
          <div>Токены</div>
          {sort === "asc" ? (
            <IoArrowUpOutline
              className="UpDownIcon"
              onClick={() => Sorting()}
            />
          ) : (
            <IoArrowDownOutline
              className="UpDownIcon"
              onClick={() => Sorting()}
            />
          )}
        </div>

        <div className="DoItTop">Действия</div>
      </div>
      <div className="Spisok">
        {data.map((user) => (
          <div key={user.id} onClick={() => openDrawer()}>
            <Useritem
              user={user}
              onUserClick={(userId, userEmail) =>
                handleUserClick(userId, userEmail)
              }
            />
          </div>
        ))}
      </div>
      <div className="strelki">
        <div className="pageNumbers">
          {Array.from({ length: pages * 2 }, (_, index) => (
            <button
              key={index}
              onClick={() => DowloadNew(index + 1)}
              className={page === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      {isDrawerOpen && <Overlay onClick={closeDrawer} />}
      {isDrawerOpen && (
        <DrawerMenu
          onClose={closeDrawer}
          userId={userIdOpen}
          userEmail={userEmailOpen}
        />
      )}
    </div>
  );
};

export default Main;
