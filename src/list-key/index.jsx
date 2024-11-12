import { useState } from "react";

export default function ListKey() {
  const [listUser, setListUser] = useState([
    { id: 1, name: "Nguyen", age: 18 },
    { id: 2, name: "Phuc", age: 20 },
    { id: 3, name: "Binh", age: 25 },
  ]);

  const [cars, setCars] = useState([
    { id: 1, url: "./images/red-car.jpg", name: "Civic Red" },
    { id: 2, url: "./images/silver-car.jpg", name: "Civic Silver" },
    { id: 3, url: "./images/black-car.jpg", name: "Civic black" },
  ]);

  const renderListUser = () => {
    const listUserNew = listUser.map((user) => {
      return (
        <li key={user.id}>
          Ho ten: {user.name} - Tuoi: {user.age}
        </li>
      );
    });

    return listUserNew;
  };

  const renderListCar = () => {
    const carsNew = cars.map((car) => {
      return (
        <div
          key={car.id}
          className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {car.name}
            </h5>
          </a>
          <img
            className="object-cover w-full h-48 mt-2 rounded-lg"
            src={car.url}
            alt=""
          />
        </div>
      );
    });
    return carsNew;
  };

  return (
    <div>
      <h1>* ListKey</h1>
      <ul>
        {renderListUser()}
        {/* {listUser.map((user) => {
          return (
            <li key={user.id}>
              Ho ten: {user.name} - Tuoi: {user.age}
            </li>
          );
        })} */}
      </ul>

      <div className="grid grid-cols-3">{renderListCar()}</div>
    </div>
  );
}
