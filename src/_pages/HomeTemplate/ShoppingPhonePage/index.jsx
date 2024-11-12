import Phone from "./phone";
import Modal from "./modal";
import { useSelector } from "react-redux";

export default function ShoppingPhone() {
  const props = useSelector((state) => {
    return state.shoppingPhoneReducer;
  });

  const renderListPhones = () => {
    // desctructuring
    const { phones } = props;
    const newPhones = phones.map((item) => {
      return <Phone key={item.maSP} data={item} />;
    });
    return newPhones;
  };

  return (
    <div className="container mx-auto">
      <h1>*ShoppingPhone</h1>
      <Modal />
      <div className="grid grid-cols-3 gap-5">{renderListPhones()}</div>

      <div className="grid grid-cols-2 mt-5">
        <div>
          <h1>{props.phoneDetail.tenSP}</h1>
          <img className="rounded-t-lg" src={props.phoneDetail.hinhAnh} />
        </div>
        <div>
          <h1>* Thong so ky thuat</h1>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td>Màn hình</td>
                <td>{props.phoneDetail.manHinh}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td>HDH</td>
                <td>{props.phoneDetail.heDieuHanh}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td>Camera truoc</td>
                <td>{props.phoneDetail.cameraTruoc}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td>Camera Sau</td>
                <td>{props.phoneDetail.cameraSau}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td>Ram</td>
                <td>{props.phoneDetail.ram}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td>Rom</td>
                <td>{props.phoneDetail.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
