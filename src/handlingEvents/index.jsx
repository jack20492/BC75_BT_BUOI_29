export default function HandlingEvents() {
  const handleClick = () => {
    console.log("handleClick");
  };

  const handleClickParams = (username, age) => {
    console.log(`Hello ${username}, you are ${age} years old`);
  };

  return (
    <div>
      <h1>* HandlingEvents</h1>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={handleClick}
      >
        Default
      </button>

      <button
        type="button"
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={() => handleClickParams("Nguyen", 18)}
      >
        Red
      </button>
    </div>
  );
}
