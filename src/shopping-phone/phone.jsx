export default function Phone(props) {
  const { data, getPhoneDetail, getPhoneAddToCart } = props;

  const handleDetail = () => {
    getPhoneDetail(data);
  };

  const handleAddToCart = () => {
    getPhoneAddToCart(data);
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={data.hinhAnh} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.tenSP}
          </h5>
        </a>
        <button
          onClick={handleDetail}
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Xem chi tiết
        </button>
        <button
          onClick={handleAddToCart}
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Thêm giỏ hàng
        </button>
      </div>
    </div>
  );
}
