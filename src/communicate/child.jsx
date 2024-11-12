export default function Child(props) {
  console.log(props);

  const handleResetUsername = () => {
    const usernameReset = "Cybersoft";
    // truyền data ra ngoài component cha
    props.getUsername(usernameReset);
  };

  return (
    <div className="border-4 w-[30%] mt-5">
      <h1>Child</h1>
      <p>Username: {props.propsUsername}</p>
      <p>Age: {props.propsAge}</p>
      <button
        onClick={handleResetUsername}
        type="button"
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Reset Username
      </button>
    </div>
  );
}
