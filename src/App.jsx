import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store.js";
import ErrorBoundary from "./Components/Common/ErrorBoundary";
import VerifyEmail from "./Components/Common/VerifyEmail.jsx";
import {
  HomePage,
  ProductPage,
  BestSellingPage,
  EventsPage,
  FaqPage,
  LoginPage,
  SignUpPage,
  ProductDetailsPage,
  ProfilePage,
  MessagePage,
  SellerSignUpPage,
  SellerLoginPage,
  SellerProfilePage,
  DashboardPage,
  AllCouponCodesPage,
  AllEventsPage,
  AllProductPage,
  AllOrderPage,
  SellerProfileSettings,
  SellerMessagePage,
  CreateProductPage,
  CreateEventPage,
  WithdrawMoneyPage,
  CheckoutPage,
  PaymentPage,
  OrderSuccessPage,
  OrderDetailsPage,
  SellerOrderDetailsPage,
  TrackOrderPage,
  ForgetPasswordPage,
  SellerForgetPasswordPage,
} from "./Routes";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/best-selling" element={<BestSellingPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/inbox" element={<MessagePage />} />
            <Route path="/signup-seller" element={<SellerSignUpPage />} />
            <Route path="/login-seller" element={<SellerLoginPage />} />
            <Route path="/shop/:id" element={<SellerProfilePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard-cupons" element={<AllCouponCodesPage />} />
            <Route path="/dashboard-events" element={<AllEventsPage />} />
            <Route path="/dashboard-products" element={<AllProductPage />} />
            <Route path="/dashboard-orders" element={<AllOrderPage />} />
            <Route path="/dashboard-settings" element={<SellerProfileSettings />} />
            <Route path="/dashboard-messages" element={<SellerMessagePage />} />
            <Route path="/dashboard-create-product" element={<CreateProductPage />} />
            <Route path="/dashboard-create-event" element={<CreateEventPage />} />
            <Route path="/dashboard-withdraw-money" element={<WithdrawMoneyPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/order/success" element={<OrderSuccessPage />} />
            <Route path="/order/:id" element={<OrderDetailsPage />} />
            <Route path="/seller/order/:id" element={<SellerOrderDetailsPage />} />
            <Route path="/order/track/:id" element={<TrackOrderPage />} />
             <Route path="/verify-email/:token" element={<VerifyEmail />} />
            <Route path="/forget-password" element={<ForgetPasswordPage />} />
            <Route path="/seller/forget-password" element={<SellerForgetPasswordPage />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
};

export default App;