import React from "react";
import { useNavigate } from "react-router-dom";

// Icons
import { RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag, HiOutlineReceiptRefund } from "react-icons/hi";
import { AiOutlineLogout, AiOutlineMessage } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineTrackChanges } from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { toast, ToastContainer } from "react-toastify";

const ProfileSideBar = ({ active, setActive }) => {
  const navigate = useNavigate();

  const menuItems = [
    { id: 1, label: "Profile", icon: <RxPerson size={20} /> },
    { id: 2, label: "Orders", icon: <HiOutlineShoppingBag size={20} /> },
    { id: 3, label: "Refunds", icon: <HiOutlineReceiptRefund size={20} /> },
    {
      id: 4,
      label: "Inbox",
      icon: <AiOutlineMessage size={20} />,
      action: () => navigate("/inbox"),
    },
    { id: 5, label: "Track Orders", icon: <MdOutlineTrackChanges size={20} /> },
    {
      id: 6,
      label: "Change Password",
      icon: <RiLockPasswordLine size={20} />,
    },
    { id: 7, label: "Address", icon: <TbAddressBook size={20} /> },
    {
      id: 8,
      label: "Logout",
      icon: <AiOutlineLogout size={20} />,
      action: () => {
        toast.success("Logout successful");
        navigate("/login");
      },
    },
  ];

  return (
    <div className="p-4 z-30 pt-8 bg-white shadow-md rounded-xl w-full">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className={`flex items-center gap-3 mb-6 p-2 rounded-lg cursor-pointer transition-all duration-200 ${
            active === item.id
              ? "bg-blue-100 text-blue-600 font-medium"
              : "hover:bg-gray-100 text-gray-800"
          }`}
          onClick={() => {
            setActive(item.id);
            if (item.action) item.action();
          }}
        >
          <span className={`${active === item.id ? "text-blue-600" : ""}`}>
            {item.icon}
          </span>
          <span className="hidden 800px:block">{item.label}</span>
        </div>
      ))}

      {/* Toast Message */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover={false}
        draggable
        theme="light"
      />
    </div>
  );
};

export default ProfileSideBar;
