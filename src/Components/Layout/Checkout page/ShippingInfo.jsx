import styles from "../../../Styles/Style";
import { Country, State } from "country-state-city";
import { motion } from "framer-motion";

const ShippingInfo = ({
  country,
  setCountry,
  city,
  setCity,
  userInfo,
  setUserInfo,
  address1,
  setAddress1,
  address2,
  setAddress2,
  zipCode,
  setZipCode,
  userAdresses,
  number,
  setNumber,
}) => {
  const userName = JSON.parse(localStorage.getItem("userName"));
  const email = JSON.parse(localStorage.getItem("email"));

  return (
    <motion.div
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -500 }}
      transition={{ duration: 0.6 }}
      className="w-full 800px:w-[95%] bg-white rounded-md p-6 shadow-md"
    >
      <h2 className="text-xl font-semibold text-[#333] mb-5">Shipping Address</h2>

      <form className="space-y-5">
        <div className="flex flex-col 800px:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 pb-1">Full Name</label>
            <input
              type="text"
              value={userName}
              disabled
              className={`${styles.input} bg-gray-100`}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 pb-1">Email Address</label>
            <input
              type="email"
              value={email}
              disabled
              className={`${styles.input} bg-gray-100`}
            />
          </div>
        </div>

        <div className="flex flex-col 800px:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 pb-1">Phone Number</label>
            <input
              type="number"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 pb-1">Zip Code</label>
            <input
              type="number"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
              className={styles.input}
            />
          </div>
        </div>

        <div className="flex flex-col 800px:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 pb-1">Country</label>
            <select
              className="w-full border h-[40px] rounded-[5px] px-2"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Choose your country</option>
              {Country.getAllCountries().map((item) => (
                <option key={item.isoCode} value={item.isoCode}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 pb-1">City</label>
            <select
              className="w-full border h-[40px] rounded-[5px] px-2"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">Choose your city</option>
              {State.getStatesOfCountry(country).map((item) => (
                <option key={item.isoCode} value={item.isoCode}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col 800px:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 pb-1">Address 1</label>
            <input
              type="text"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600 pb-1">Address 2</label>
            <input
              type="text"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
              className={styles.input}
              required
            />
          </div>
        </div>
      </form>

      {/* Toggle saved addresses */}
      <div className="mt-6">
        <h5
          className="text-[#f63b60] font-semibold cursor-pointer inline-block hover:underline"
          onClick={() => setUserInfo(!userInfo)}
        >
          {userInfo ? "Hide saved addresses" : "Choose from saved addresses"}
        </h5>

        {userInfo && userAdresses?.length > 0 && (
          <div className="mt-4 space-y-3">
            {userAdresses.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 border rounded-md bg-gray-50">
                <input
                  type="radio"
                  name="savedAddress"
                  onClick={() => {
                    setAddress1(item.address1);
                    setAddress2(item.address2);
                    setZipCode(item.zipCode);
                    setCountry(item.country);
                    setCity(item.city);
                    setNumber(item.phoneNumber);
                  }}
                />
                <div className="text-sm">
                  <p className="font-medium">{item.addressType}</p>
                  <p>{item.address1}, {item.address2}</p>
                  <p>{item.city}, {item.country} - {item.zipCode}</p>
                  <p>Phone: {item.phoneNumber}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ShippingInfo;
