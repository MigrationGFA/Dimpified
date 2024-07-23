import React, { Fragment, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import DotBadge from "../Components/elements/bootstrap/DotBadge";
import TanstackTable from "../Components/elements/advance-table/TanstackTable";
import { showToast } from "../Components/Showtoast";
import axios from "axios";
import { toast } from "react-toastify";

const JobTable = ({ data, header, currencyName }) => {
  const [loading, setLoading] = useState(false);
  const [loadingC, setLoadingC] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [Rloading, setRLoading] = useState(false);

  
  const formatPrice = (currencyName, priceValue) => {
    switch (currencyName) {
      case "naira":
      case "NGN":
        return `₦${priceValue}`;
      case "dollars":
      case "USD":
        return `$${priceValue}`;
      case "euros":
      case "EUR":
        return `€${priceValue}`;
      case "pounds":
      case "GBP":
        return `£${priceValue}`;
      default:
        return `₦${priceValue}`;
    }
  };

  const columns = useMemo(() => {
    return header.map(({ accessorKey, header }) => ({
      header: header,
      accessorKey: accessorKey,
      cell: ({ row }) => {
        if (accessorKey === "title") {
          return (
            <Link
              to=""
              // {`/jobs/listing/dashboard-job-list/?id=${row.original._id}`}
              className="text-inherit"
            >
              <h4 className="mb-1 text-primary-hover">{row.original.course.title}</h4>
              <h4 className="mb-1 text-primary-hover">{row.original.header}</h4>
              <h4 className="mb-1 text-primary-hover">{row.original.productName}</h4>
              
            </Link>
          );
        }  else if (accessorKey === "category") {
          return (
            <Fragment>
              <p className="mb-1 text-primary-hover">{row.original.course.category} {row.original.productType}</p>
            </Fragment>
          );
        } else if (accessorKey === "amount") {
          return (
            <Fragment>
              <p className="mb-1 text-primary-hover">{formatPrice(currencyName, row.original.itemAmount || row.original.service.price)}</p>
            </Fragment>
          );
        } else if (accessorKey === "deliveryDate") {
          const purchaseDate = new Date(row.original.purchaseDate);
          const formattedDate = purchaseDate.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });
          return (
            <Fragment>
              <p>{formattedDate}</p>
            </Fragment>
          );
        } else if (accessorKey === "paymentStatus") {
          return (
            <Fragment>
              {row.original.paymentStatus === "paid" ? (
                <Button variant="success" disabled>
                  Paid
                </Button>
              ) : (
                <button
                  className="btn btn-primary"
                  disabled={loading}
                  style={{ opacity: loading ? 0.7 : 1 }}
                  onClick={() => {
                    handlePaymentClick(row);
                  }}
                >
                  {loading ? "Processing" : "Make Payment"}
                </button>
              )}
            </Fragment>
          );
        } else if (accessorKey === "action") {
          return (
            <Fragment>
              {row.original.paymentStatus === "paid" ? (
                <Button
                  href="#"
                  variant="success"
                  className="btn-sm"
                  disabled={loadingC}
                  style={{ opacity: loadingC ? 0.7 : 1 }}
                  onClick={() => markCompleted(row.original._id)}
                >
                  {loadingC ? "Processing" : "Completed"}
                </Button>
              ) : (
                <Button
                  href="#"
                  variant="success"
                  className="btn-sm"
                  style={{ opacity: ".7" }}
                  disabled
                >
                  View Details
                </Button>
              )}
            </Fragment>
          );
        } else if (accessorKey === "price") {
          return (
            <span>
              {formatPrice(row.original.currency, row.original.price || row.original.service.price)}
            </span>
          );
        } else {
          return <span>{row.original[accessorKey]}</span>;
        } 
      },
    }));
  }, [header]);

  return data ? (
    <Fragment>
      <TanstackTable
        data={data}
        columns={columns}
        filter={true}
        filterPlaceholder="Search Orders"
        pagination={true}
      />
    </Fragment>
  ) : (
    <div>Loading...</div>
  );
};

export default JobTable;
