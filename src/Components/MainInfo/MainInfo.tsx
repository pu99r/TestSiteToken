import React, { useEffect, useState } from "react";
import "./MainInfo.css";
import Useritem from "./User";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { UsersInit } from "../../Redux/Reducers/UserSlice";
import { HiOutlineMagnifyingGlassCircle } from "react-icons/hi2";
import { IoArrowDownOutline, IoArrowUpOutline } from "react-icons/io5";

const Main = (): JSX.Element => {
  const [page, setPage] = useState(1);
  const [Findstring, setFindstring] = useState("");
  const [sort, setSort] = useState("desc");
  const { data, pages } = useAppSelector((store) => store.users);
  const [loading, setLoading] = useState(true);
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
  };

  const handleInputChange = async (event: any) => {
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
  };

  const Sorting = async () => {
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
            <IoArrowUpOutline className="UpDownIcon" onClick={() => Sorting()} />
          ) : (
            <IoArrowDownOutline className="UpDownIcon" onClick={() => Sorting()} />
          )}
        </div>

        <div className="DoItTop">Действия</div>
      </div>
      <div className="Spisok">
        {data.map((user) => (
          <Useritem key={user.id} user={user} />
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
    </div>
  );
};

export default Main;
