import { useState } from "react";

export default function CarColor() {
  const [urlImg, setUrlImg] = useState("./images/red-car.jpg");

  //   const handleRedCar = () => {
  //     setUrlImg("./images/red-car.jpg");
  //   };

  //   const handleSilverCar = () => {
  //     setUrlImg("./images/silver-car.jpg");
  //   };

  //   const handleBlackCar = () => {
  //     setUrlImg("./images/black-car.jpg");
  //   };

  const changePathUrl = (url) => {
    setUrlImg(url);
  };

  return (
    <div>
      <h1>* Car Color</h1>
      <div className="grid grid-cols-2">
        <div>
          <img src={urlImg} alt="" />
        </div>
        <div>
          <button
            onClick={() => changePathUrl("./images/red-car.jpg")}
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Red
          </button>

          <button
            onClick={() => changePathUrl("./images/silver-car.jpg")}
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Silver
          </button>

          <button
            onClick={() => changePathUrl("./images/black-car.jpg")}
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}
