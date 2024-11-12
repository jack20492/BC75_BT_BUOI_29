import React, { useState } from "react";

export default function FormDemo() {
  // tạo state để lưu giá trị của input
  const [userLogin, setUserLogin] = useState({
    email: "bc75@gmail.com",
    password: "123456",
  });
  let handleSubmit = (e) => {
    // event object
    // chặn reload trang khi user submit form
    e.preventDefault();
    console.log("e:", e.target);
  };
  let handleChangeInput = (e) => {
    console.log("e:", e.target.name);
    let { value, name } = e.target;

    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };
  //   console.log("userLogin:", userLogin);
  let { email, password } = userLogin;
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-2/3 justify-start items-start"
      >
        <label>Email</label>
        <input
          type="text"
          name="email"
          className="rounded p-2"
          value={email}
          onChange={handleChangeInput}
        />
        <label>Password</label>
        <input
          type="text"
          name="password"
          className="rounded p-2"
          value={password}
          onChange={handleChangeInput}
        />
        <button className="px-5 py-2 rounded border-2">Login</button>
      </form>
    </div>
  );
}

let user = {
  name: "tom",
  age: 18,
};

// user.name = "jerry";
user["name"] = "jerry";
