import React, { lazy, Suspense } from "react";
import Modal from "react-modal";
import LayoutPayment from "layout/LayoutPayment";
import LayoutDashboard from "layout/LayoutDashboard";
import CampaignView from "modules/campaign/CampaignView";
import { Routes, Route } from "react-router-dom";
const StartCampaignPage = lazy(() => import("./pages/StartCampaignPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const ShippingPage = lazy(() => import("./pages/ShippingPage"));
const DashBoardPage = lazy(() => import("./pages/DashBoardPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));

const customStyles = {
  content: {},
};

Modal.setAppElement("#root");
Modal.defaultStyles = {};

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}
          ></Route>
          <Route
            path="/start-campaign"
            element={<StartCampaignPage></StartCampaignPage>}
          ></Route>
          <Route path="/" element={<DashBoardPage></DashBoardPage>}></Route>
          <Route
            path="/campaign/:slug"
            element={<CampaignView></CampaignView>}
          ></Route>
        </Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        <Route element={<LayoutPayment></LayoutPayment>}>
          <Route
            path="/checkout"
            element={<CheckoutPage></CheckoutPage>}
          ></Route>
          <Route
            path="/shipping-address"
            element={<ShippingPage></ShippingPage>}
          ></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
