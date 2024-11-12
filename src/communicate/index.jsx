import Child from "./child";
import Child2 from "./child2";
import { useState } from "react";

export default function Communicate(props) {
  const [username, setUsername] = useState("Cybersoft");

  const handleChangeUsername = () => {
    setUsername("Nguyen Van A");
  };

  // hàm này sẽ nhận data từ component con
  const handleGetUsername = (usernameReset) => {
    console.log(usernameReset);
    // cập nhật lại state
    setUsername(usernameReset);
  };

  return (
    <div>
      <h1>* Communicate</h1>
      <p>Username: {username}</p>
      <button
        onClick={handleChangeUsername}
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Change Username
      </button>

      <Child
        propsUsername={username}
        propsAge={18}
        getUsername={handleGetUsername}
      />

      <Child2 />
    </div>
  );
}
