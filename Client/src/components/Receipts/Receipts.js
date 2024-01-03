import React from "react";
import "./Receipts.css"; // You can create a separate CSS file for styling
import payment from "./images/tutor-payment-image.jpg";
import receipt from "./images/receipt.jpg";
import Layout from "../Layout";

const Receipts = () => {
  return (
    <Layout>
      <div className="receipts-container">
        <div className="receipt-box">
          <h2>Invoice</h2>
          <img src={receipt} alt="Invoice" />
        </div>
        <div className="receipt-box">
          <h2>Tutor Payment</h2>
          <img src={payment} alt="Tutor Payment" />;
        </div>
      </div>
    </Layout>
  );
};

export default Receipts;
