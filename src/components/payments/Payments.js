import React from "react";
import { useParams } from "react-router-dom";
import "./Payments.scss";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/slices/cartSlice";

function Payments() {
  const params = useParams();
  const status = params.status;
  const dispatch = useDispatch();

  const infoData = {
    success: {
      message: "Your order has been placed successfully!",
      cta: "Shop More",
      icon: <BsFillCartCheckFill />,
    },
    failed: {
      message: "Payment failed",
      cta: "Try Again",
      icon: <BiErrorCircle />,
    },
  };

  if (status === "success") {
    dispatch(resetCart());
  }
  return (
    <div className="Payments">
      <div className="icon">{infoData[status].icon}</div>
      <h2 className="message">{infoData[status].message}</h2>
      <button className="btn-primary">{infoData[status].cta}</button>
    </div>
  );
}

export default Payments;
