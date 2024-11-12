import { useState } from "react";

export default function State() {
  console.log("State");
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin(true);
  };

  const hanleLogout = () => {
    setIsLogin(false);
  };

  const renderInfo = () => {
    if (isLogin) {
      return (
        <div>
          <button className="bg-red-700 text-white px-5" onClick={hanleLogout}>
            Logout
          </button>
          <h1>Hello Username!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button
            className="bg-green-700 text-white px-5"
            onClick={handleLogin}
          >
            Login
          </button>
          <h1>Vui long login</h1>
        </div>
      );
    }
  };

  return (
    <div>
      <h1>* State</h1>
      {renderInfo()}
    </div>
  );
}
