import React from "react";
import { AiOutlineArrowRight, AiOutlineMoneyCollect } from "react-icons/ai";
import { MdBorderClear } from "react-icons/md";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";

import { productData } from "../../../../Static/data";

const MainDashboard = () => {
  const orderInfo = JSON.parse(localStorage.getItem("latestOrder"));
  const getOrderInfo = orderInfo?.cart;

  const row = getOrderInfo?.map((item) => ({
    id: item?.id || "",
    status: "Processing",
    item_qty: item?.qty || 0,
    total: item?.discount_price || 0,
  })) || [];

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.8 },
    { field: "status", headerName: "Status", minWidth: 120, flex: 0.6 },
    { field: "item_qty", headerName: "Items Qty", type: "number", minWidth: 100, flex: 0.5 },
    { field: "total", headerName: "Total ($)", type: "number", minWidth: 100, flex: 0.5 },
    {
      field: " ",
      headerName: "View",
      flex: 0.4,
      minWidth: 80,
      sortable: false,
      renderCell: (params) => (
        <Link to={`/seller/order/${params.id}`}>
          <Button>
            <AiOutlineArrowRight className="text-[#3957db] hover:scale-125 transition" size={20} />
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <div className="w-full p-4">
      <h1 className="text-[24px] font-semibold mb-4 text-gray-800">Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Balance */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-5 cursor-pointer"
        >
          <div className="flex items-center mb-3">
            <AiOutlineMoneyCollect size={32} className="text-[#3957db] mr-2" />
            <div>
              <h4 className="text-[16px] font-medium text-gray-700">Account Balance</h4>
              <span className="text-[13px] text-gray-500">(incl. 10% service charge)</span>
            </div>
          </div>
          <h3 className="text-[22px] font-bold text-gray-800 pl-1">$500</h3>
          <Link to="/dashboard-withdraw-money">
            <p className="text-[#077f9c] pt-2 text-sm hover:underline">Withdraw money</p>
          </Link>
        </motion.div>

        {/* Orders */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-5 cursor-pointer"
        >
          <div className="flex items-center mb-3">
            <MdBorderClear size={28} className="text-[#3957db] mr-2" />
            <h4 className="text-[16px] font-medium text-gray-700">All Orders</h4>
          </div>
          <h3 className="text-[22px] font-bold text-gray-800 pl-1">
            {getOrderInfo?.length || 0}
          </h3>
          <Link to="/dashboard-orders">
            <p className="text-[#077f9c] pt-2 text-sm hover:underline">View orders</p>
          </Link>
        </motion.div>

        {/* Products */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-5 cursor-pointer"
        >
          <div className="flex items-center mb-3">
            <AiOutlineMoneyCollect size={28} className="text-[#3957db] mr-2" />
            <h4 className="text-[16px] font-medium text-gray-700">All Products</h4>
          </div>
          <h3 className="text-[22px] font-bold text-gray-800 pl-1">
            {productData?.length || 0}
          </h3>
          <Link to="/dashboard-products">
            <p className="text-[#077f9c] pt-2 text-sm hover:underline">View products</p>
          </Link>
        </motion.div>
      </div>

      {/* Latest Order Section */}
      <div className="bg-white rounded-lg shadow-md p-5">
        <h2 className="text-[20px] font-semibold text-gray-800 mb-3">Latest Orders</h2>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DataGrid
            rows={row.slice(0, 3)}
            columns={columns}
            pageSize={5}
            disableSelectionOnClick
            autoHeight
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MainDashboard;
