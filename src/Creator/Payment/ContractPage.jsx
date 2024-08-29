import React, { useEffect, useState } from "react";
import { Card, Col, Row, Tab, Nav } from "react-bootstrap";
import Icon from "@mdi/react";
import { mdiHelpCircle, mdiCurrencyNgn } from "@mdi/js";
import { Link } from "react-router-dom";

import axios from "axios";
import Payouts from "./Payouts";
import WithdrawPayment from "./WithdrawRequest";

const formatDate = (timestamp) => {
  const date = new Date(timestamp);

  // Get the day, month, and year
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-indexed, so we add 1
  const year = date.getFullYear();

  // Get the hours, minutes, and seconds
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Format the date as a string
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

const ContractPage = () => {
  const [workProgress, setWorkProgress] = useState([]);
  const [amountProgress, setAmountProgress] = useState(null);
  const [amountPending, setAmountPending] = useState(null);
  const [pendings, setPending] = useState([]);
  const [availableAmount, setAvailableAmount] = useState(null);
  useEffect(() => {
    const userId = sessionStorage.getItem("UserId");

    const contract = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/get-my-contract/${userId}`
        );
        setAmountProgress(response.data.workInProgress.totalAmount);
        setWorkProgress(response.data.workInProgress.jobsWork);
        setAmountPending(response.data.pendingContract.totalAmountPending);
        setPending(response.data.pendingContract.jobsPending);
        setAvailableAmount(response.data.availableAmount);
      } catch (error) {
        console.log(error);
      }
    };
    contract();
  }, []);
  return (
    <>
      <Payouts />
    </>
  );
};

export default ContractPage;
