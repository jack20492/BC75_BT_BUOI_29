export default function Modal(props) {
  const { carts, getPhoneUpdateQty } = props;

  const renderCarts = () => {
    const newCarts = carts.map((phone) => {
      return (
        <tr
          key={phone.maSP}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {phone.maSP}
          </th>
          <td className="px-6 py-4">{phone.tenSP}</td>
          <td className="px-6 py-4">
            <img src={phone.hinhAnh} width={50} />
          </td>
          <td className="px-6 py-4">
            <button
              onClick={() => {
                getPhoneUpdateQty(phone.maSP, false);
              }}
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              -
            </button>

            {phone.soLuong}
            <button
              onClick={() => {
                getPhoneUpdateQty(phone.maSP, true);
              }}
              type="button"
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              +
            </button>
          </td>
          <td className="px-6 py-4">${phone.giaBan}</td>
          <td className="px-6 py-4">${phone.soLuong * phone.giaBan}</td>
        </tr>
      );
    });
    return newCarts;
  };

  const totalQty = () => {
    /**
     * Tính tổng số lượng trong giỏ hàng
     * 0. Khởi tạo biến tổng số lượng
     * 1. Duyệt mảng carts
     *    1.1. Cộng dồn số lượng vào biến tổng số lượng
     * 2. Trả về biến tổng số lượng
     */
    // let totalQty = 0;
    // carts.forEach((phone) => {
    //   totalQty += phone.soLuong;
    // });
    // return totalQty;

    return carts.reduce((totalQty, phone) => (totalQty += phone.soLuong), 0);
  };

  return (
    <div className="my-5">
      {/* Modal toggle */}
      <button
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Cart ({totalQty()})
      </button>
      {/* Main modal */}
      <div
        id="default-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Cart
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-4 md:p-5 space-y-4">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        id
                      </th>
                      <th scope="col" className="px-6 py-3">
                        name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        image
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Qty
                      </th>
                      <th scope="col" className="px-6 py-3">
                        price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        total
                      </th>
                    </tr>
                  </thead>
                  <tbody>{renderCarts()}</tbody>
                </table>
              </div>
            </div>
            {/* Modal footer */}
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
