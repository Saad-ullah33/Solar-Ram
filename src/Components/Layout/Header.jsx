import React, { useState, useEffect } from "react";
import styles from "../../Styles/Style";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { categoriesData, productData } from "../../Static/data";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import Cart from "../../Components/Cart";
import Wishlist from "../../Components/Wishlist";
import ResponsiveHeader from "./ResponsiveHeader/ResponsiveHeader";
import avatar from "../../Assets/avatar.jpg";
import { useSelector } from "react-redux";

const Header = ({ activeHeading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [click, setClick] = useState(false);

  const photoUrl = JSON.parse(localStorage.getItem("PhotoUrl"));
  const isUser = JSON.parse(localStorage.getItem("email"));
  const isSeller = localStorage.getItem("isSeller");

  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filtered =
      productData?.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      ) || [];

    setSearchData(filtered);
    setClick(term.length > 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 70);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TOP HEADER */}
      <div className={`${styles.section}`}>
        <div className="hidden 800px:flex items-center justify-between h-[80px]">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 p-1.5 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-white"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-800">SolarRam</span>
          </Link>

          {/* SEARCH BAR */}
          <div className="relative w-[50%]">
            <input
              type="text"
              className="w-full py-2 pl-3 pr-10 rounded border border-[#3957db] focus:outline-none"
              placeholder="Search product..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <AiOutlineSearch
              size={24}
              className="absolute right-3 top-2.5 text-gray-600 cursor-pointer"
            />
            {click && searchData?.length > 0 && (
              <div className="absolute top-12 left-0 w-full bg-white shadow-md z-50 max-h-[200px] overflow-y-auto p-3 rounded-md">
                {searchData.map((product, i) => {
                  const name = product.name.replace(/\s+/g, "-");
                  return (
                    <Link
                      key={i}
                      to={`/product/${name}`}
                      className="flex items-center py-2 hover:bg-gray-100"
                    >
                      <img
                        src={product.image_Url[0].url}
                        alt={product.name}
                        className="w-[40px] h-[40px] mr-2 rounded object-cover"
                      />
                      <span>{product.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* BECOME SELLER BUTTON */}
          <div className="rounded-2xl bg-white px-5 py-2 shadow-md border border-blue-400 hover:bg-blue-50 transition duration-300">
            <Link to={isSeller ? "/shop/:id" : "/signup-seller"}>
              <span className="text-blue-500 font-semibold flex items-center gap-2">
                {isSeller ? "Go Dashboard" : "Become Seller"}
                <IoIosArrowForward className="text-blue-500 text-xl" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <div
        className={`${
          active ? "fixed top-0 left-0 shadow-sm z-20" : ""
        } hidden 800px:flex w-full bg-[#3957db] items-center justify-between transition p-4`}
      >
        <div className={`${styles.section} flex justify-between items-center`}>
          {/* CATEGORY DROPDOWN */}
          <div
            className="relative w-[270px] h-[50px] hidden 1000px:flex items-center cursor-pointer"
            onClick={() => setDropDown(!dropDown)}
          >
            <BiMenuAltLeft size={28} className="absolute left-2" />
            <button className="w-full h-full pl-10 pr-4 bg-white text-left font-medium rounded-t-md">
              All Categories
            </button>
            <IoIosArrowDown size={20} className="absolute right-3" />
            {dropDown && (
              <DropDown
                categoriesData={categoriesData}
                setDropDown={setDropDown}
                dropDown={dropDown}
              />
            )}
          </div>

          {/* NAV LINKS */}
          <Navbar active={activeHeading} />

          {/* ACTION BUTTONS */}
          <div className="flex items-center space-x-5">
            <div onClick={() => setOpenWishlist(true)} className="relative cursor-pointer">
              <AiOutlineHeart size={26} className="text-white/90" />
              <span className="absolute -top-1 -right-2 bg-green-500 text-white text-[11px] w-4 h-4 rounded-full flex items-center justify-center">
                {wishlist?.length || 0}
              </span>
            </div>

            <div onClick={() => setOpenCart(true)} className="relative cursor-pointer">
              <AiOutlineShoppingCart size={26} className="text-white/90" />
              <span className="absolute -top-1 -right-2 bg-green-500 text-white text-[11px] w-4 h-4 rounded-full flex items-center justify-center">
                {cart?.length || 0}
              </span>
            </div>

            <div className="cursor-pointer">
              <Link to={isUser ? "/profile" : "/sign-up"}>
                {isUser ? (
                  <img
                    src={photoUrl || avatar}
                    alt="avatar"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <CgProfile size={26} className="text-white/90" />
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* OVERLAYS */}
      {openCart && <Cart setOpenCart={setOpenCart} openCart={openCart} />}
      {openWishlist && <Wishlist setOpenWishlist={setOpenWishlist} />}

      {/* RESPONSIVE HEADER */}
      <ResponsiveHeader
        active={active}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        setOpenCart={setOpenCart}
        setOpenWishlist={setOpenWishlist}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        serachData={searchData}
        activeHeading={activeHeading}
        cart={cart}
        click={click}
      />
    </>
  );
};

export default Header;
