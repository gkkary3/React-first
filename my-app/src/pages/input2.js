import React, { useState } from "react";

const Input2 = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const { name, email, tel } = inputs; // inputs 객체에 있는 것들을 뺴내야 밑에서 value로 쓸 수 있음.

  const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    setInputs({
      ...inputs, //기존에 있던 걸 새로 복사했다. -> 깊은복사
      [id]: value,
    });
  };
  return (
    <div>
      <div>
        <label>이름</label>
        <input type="text" id="name" value={name} onChange={onChange} />
      </div>
      <div>
        <label>이메일</label>
        <input type="email" id="email" value={email} onChange={onChange} />
      </div>
      <div>
        <label>전화번호</label>
        <input type="tel" id="tel" value={tel} onChange={onChange} />
      </div>
      <p>이름: {name}</p>
      <p>이메일: {email}</p>
      <p>전화: {tel}</p>
    </div>
  );
};

export default Input2;
