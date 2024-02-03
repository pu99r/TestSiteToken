import { UserState } from "./types/State";

export const fetchUserList = async (page: number, sort: string, string:string) => {
  // console.log(page, sort, string )
  const url = `https://test.gefara.xyz/api/v1/user/list?page=${page}&&search=${string}&orderBy=tokens%3A${sort}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const data = await response.json();
    // console.log(`API ${page} ${sort} ${string}`)
    // console.log(data)
    return data;
  } catch (error) {
    console.error("Error fetching user list:", error);
    throw error;
  }
};

export const fetcMoneySpend = async (userId: string) => {
  const url = `https://test.gefara.xyz/api/v1/user/${userId}/transactions`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const data = await response.json();
    // console.log(`API ${page} ${sort} ${string}`)
    // console.log(data)
    return data;
  } catch (error) {
    console.error("Error fetching user list:", error);
    throw error;
  }
};