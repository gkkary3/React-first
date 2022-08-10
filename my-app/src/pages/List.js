import React from "react";

const User = ({ userData }) => {
  return (
    <tr>
      <td>{userData.name}</td>
      <td>{userData.email}</td>
    </tr>
  );
};

const UserList = () => {
  const users = [
    { email: "ryu@gmail.com", name: "유재석" },
    { email: "kim@gmail.com", name: "김종국" },
    { email: "ha@gmail.com", name: "하하" },
    { email: "song@gmail.com", name: "송지효" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>이메일</th>
        </tr>
      </thead>
      <tbody>
        {/*  users 배열 함수를 map을 이용해서 하나하나 돌리면서
            User 라는 자식 컴포넌트에 userData라는 property명으로 user에 던진거임*/}
        {users.map((user) => (
          <User userData={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
