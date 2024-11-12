import Phone from "./phone";
import Modal from "./modal";
import data from "./data.json";
import { useState } from "react";

export default function ShoppingPhone() {
  const [state, setState] = useState({
    phones: data,
    phoneDetail: data[0],
    carts: [],
  });

  const renderListPhones = () => {
    // desctructuring
    const { phones } = state;
    const newPhones = phones.map((item) => {
      return (
        <Phone
          key={item.maSP}
          data={item}
          getPhoneDetail={handleGetDetail}
          getPhoneAddToCart={handleGetPhoneAddToCart}
        />
      );
    });
    return newPhones;
  };

  // nhận data từ component con (Phone)
  const handleGetDetail = (data) => {
    // cap nhat lai state => phoneDetail
    setState({
      // bảo toàn tất cả các state cũ
      ...state,
      phoneDetail: data,
    });
  };

  const _findexIndex = (maSP) => {
    const index = state.carts.findIndex((item) => item.maSP === maSP);
    return index;
  };

  // nhận data từ component con (Phone)
  const handleGetPhoneAddToCart = (data) => {
    // clone lại mảng carts
    const newCarts = [...state.carts]; // spread operator
    // tạo object mới từ data
    const phoneAddToCart = {
      ...data,
      soLuong: 1,
    };

    // kiểm tra xem phoneAddToCart đã tồn tại trong newCarts chưa
    const index = _findexIndex(phoneAddToCart.maSP);
    if (index !== -1) {
      // phoneAddToCart tồn tại trong newCarts
      // phoneAddToCart => tăng số lượng lên 1
      newCarts[index].soLuong += 1;
    } else {
      // phoneAddToCart không tồn tại trong newCarts
      // thêm phoneAddToCart vào newCarts
      newCarts.push(phoneAddToCart);
    }

    // cập nhật lại state
    setState({
      ...state,
      carts: newCarts,
    });
  };

  // nhận data từ component con (Modal)
  const handleUpdateQty = (maSP, type) => {
    console.log(maSP, type);
    // tìm vị trí của maSP trong carts
    const newCarts = [...state.carts];
    const index = _findexIndex(maSP);
    if (index !== -1) {
      if (type) {
        // tăng số lượng
        newCarts[index].soLuong += 1;
      } else {
        // giảm số lượng
        if (newCarts[index].soLuong > 1) {
          newCarts[index].soLuong -= 1;
        } else {
          // xóa sản phẩm khỏi giỏ hàng
          newCarts.splice(index, 1);
        }
      }

      // cập nhật lại state
      setState({
        ...state,
        carts: newCarts,
      });
    }
  };

  return (
    <div className="container mx-auto">
      <h1>*ShoppingPhone</h1>
      <Modal carts={state.carts} getPhoneUpdateQty={handleUpdateQty} />
      <div className="grid grid-cols-3 gap-5">{renderListPhones()}</div>

      <div className="grid grid-cols-2 mt-5">
        <div>
          <h1>{state.phoneDetail.tenSP}</h1>
          <img className="rounded-t-lg" src={state.phoneDetail.hinhAnh} />
        </div>
        <div>
          <h1>* Thong so ky thuat</h1>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td>Màn hình</td>
                <td>{state.phoneDetail.manHinh}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td>HDH</td>
                <td>{state.phoneDetail.heDieuHanh}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td>Camera truoc</td>
                <td>{state.phoneDetail.cameraTruoc}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td>Camera Sau</td>
                <td>{state.phoneDetail.cameraSau}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td>Ram</td>
                <td>{state.phoneDetail.ram}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td>Rom</td>
                <td>{state.phoneDetail.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
