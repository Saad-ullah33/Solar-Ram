import styles from "../../../Styles/Style";
import { motion } from "framer-motion";

const CartData = ({
  handleSubmit,
  couponCode,
  setCouponCode,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 500 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white rounded-lg p-6 shadow-md border border-[#e0f0ff]"
    >
      {/* Subtotal */}
      <div className="flex justify-between mb-3">
        <h3 className="text-[16px] font-medium text-gray-700">Subtotal:</h3>
        <h5 className="text-[18px] font-semibold text-[#0284c7]">PKR 2000</h5>
      </div>

      {/* Shipping */}
      <div className="flex justify-between mb-3">
        <h3 className="text-[16px] font-medium text-gray-700">Shipping:</h3>
        <h5 className="text-[18px] font-semibold text-[#0284c7]">PKR 10</h5>
      </div>

      {/* Discount */}
      <div className="flex justify-between border-b border-gray-300 pb-3 mb-3">
        <h3 className="text-[16px] font-medium text-gray-700">Discount:</h3>
        <h5 className="text-[18px] font-semibold text-gray-500">-</h5>
      </div>

      {/* Total */}
      <div className="text-end mb-4">
        <h5 className="text-[20px] font-bold text-[#0f172a]">Total: PKR 2010</h5>
      </div>

      {/* Coupon Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={`${styles.input} h-[45px] pl-3 border border-[#94d2ff] focus:outline-none focus:ring-2 focus:ring-[#60a5fa] rounded-md mb-3`}
          placeholder="Enter coupon code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          required
        />
        <input
          type="submit"
          value="Apply Code"
          className="w-full h-[45px] text-white font-medium bg-[#38bdf8] hover:bg-[#0ea5e9] transition-colors duration-200 rounded-md cursor-pointer"
        />
      </form>
    </motion.div>
  );
};

export default CartData;
