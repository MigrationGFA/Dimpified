// import node module libraries
import React, { useState, useMemo, useEffect } from "react";
import {
  Card,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  Image,
  Alert,
  Form,
  Table,
  Button,
  Modal,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "react-feather";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { showToast } from "../../Components/Showtoast";
import { Trash, Edit, MoreVertical } from "react-feather";

// import media files
import PayPal from "../../assets/images/brand/paypal-small.svg";
import Payoneer from "../../assets/images/brand/payoneer.svg";

// import custom components
import Pagination from "../../Components/elements/advance-table/Pagination";
import ApexCharts from "../../Components/elements/charts/ApexCharts";
import StatTopIcon from "../../Components/marketing/common/stats/StatTopIcon";
import { FormSelect } from "../../Components/elements/form-select/FormSelect";

// import utility file
import { numberWithCommas } from "../../helper/utils";



// import data files
import { WithdrawHistoryData } from "../../data/marketing/WithdrawHistoryData";
import {
  PayoutChartSeries,
  PayoutChartOptions,
} from "../../data/charts/ChartData";

import {useSelector}  from "react-redux"


const Payouts = () => {
  const {ecosystemDomain} = useParams();
  const userId = useSelector(
    (state) => state.authentication.user?.data?.CreatorId || "Unknown User"
  );
  console.log(userId)
  const [filtering, setFiltering] = useState("");
  const [rowSelection, setRowSelection] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [withdrawnAmount, setWithdrawnAmount] = useState("");
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [bankData, setBankData] = useState([]);
  const nairaSign = "\u20A6";
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [currency, setCurrency] = useState("");
  const [bankName, setBankName] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedBankId, setSelectedBankId] = useState("");
  const [error, setError] = useState("");
  const [errorAcc, setErrorAcc] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedAccount, setEditedAccount] = useState(null);

  const [earnings, setEarnings] = useState({
    Naira: 0,
    Dollar: 0,
    EUR: 0,
    GBP: 0,
  });

  const [selectedCurrency, setSelectedCurrency] = useState("Naira");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (event) => {
    setSelectedBankId(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/ecosystem-earnings/${ecosystemDomain}`
        );

        if (response.data) {
          setEarnings(response.data.totalEarnings);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  const formatPrice = (currencyName) => {
    switch (currencyName) {
      case "naira":
      case "Naira":
        return `₦`;
      case "dollars":
      case "Dollar":
        return `$`;
      case "euros":
     
      default:
        return `₦`;
    }
  };

  const [currentPage, setCurrentPage] = useState(0);
  const accountsPerPage = 3;

  // Calculate the total number of pages
  const pageCount = Math.ceil(bankData.length / accountsPerPage);

  // Function to handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Get current accounts
  const indexOfLastAccount = (currentPage + 1) * accountsPerPage;
  const indexOfFirstAccount = indexOfLastAccount - accountsPerPage;
  const currentAccounts = bankData.slice(
    indexOfFirstAccount,
    indexOfLastAccount
  );

  // Function to retrieve bank data from the server
  const fetchBankData = async () => {
    try {
      const response = await axios.get(
       `${import.meta.env.VITE_API_URL}/bank-details/${ecosystemDomain}`
      );
      const fetchedBankData = response.data.accountDetails; // Access accountDetails array from response data
      setBankData(fetchedBankData);
    } catch (error) {
      console.error("Error fetching bank data:", error);
    }
  };
  useEffect(() => {
    

    // Fetch bank data from server
    fetchBankData();
  }, [userId]);

  const handleSave = async () => {
    if (userId && accountName && accountNumber && bankName && currency) {
      // Check if userId is present
      try {
        const saveBankData = await axios.post(
         `${import.meta.env.VITE_API_URL}/save-bank-details`,
          {
            creatorId: userId,
            accountName,
            accountNumber,
            bankName,
            currency,
            ecosystemDomain
          }
        );

        console.log("Response :", saveBankData.data);
        setBankData([...bankData, saveBankData.data.newAccount]);

        showToast(saveBankData.data.message);
      } catch (error) {
        console.error("Error:", error);
        showToast(error.response.data.message);
      }

      setShowModal(false);
    } else {
      console.error("Error: userId is required");
      showToast("User ID is required");
    }
  };

  const handleAddAccount = () => {
    setShowModal(true);
  };

  const handleEdit = (id) => {
    const editedAccount = currentAccounts.find(account => account.id === id);
    if (editedAccount) {
      setEditedAccount({ ...editedAccount, accountId: id });
      setShowEditModal(true);
    } else {
      console.error("Account not found");
    }
  };
  
  
  const handleEditSave = async (accountId) => { 
    console.log(accountId);
    try {
      await axios.put(
       `${import.meta.env.VITE_API_URL}/edit-account`,
        {
          creatorId: userId,
          accountId: accountId, 
          accountName: editedAccount.accountName,
          bankName: editedAccount.bankName,
          accountNumber: editedAccount.accountNumber,
          currency: editedAccount.currency,
          ecosystemDomain,
        }
      );
      fetchBankData();

      setShowEditModal(false);
      showToast("Account update Successfully");
    } catch (error) {
      console.error("Error editing account:", error);
      showToast("Error updating bank details");
    }
  };

  // const handleBankChange = async (amount, currency) => {
  //   setTotalAmount(amount);
  //   setCurrency(currency);
  // };

  const handleWithdraw = async () => {
    if (!selectedBankId) {
      setErrorAcc("Please select a bank account.");
      return;
    }
    setLoading(true);

    try {
      const withdrawAmountNumeric = parseFloat(withdrawnAmount);
      const totalAmountNumeric = parseFloat(totalAmount);
      if (withdrawAmountNumeric < totalAmountNumeric) {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/withdrawal-request`,
          {
            creatorId: parseFloat(userId),
            accountId: selectedBankId,
            amount: parseFloat(withdrawnAmount),
            currency: selectedCurrency,
             ecosystemDomain,
          }
        );
        showToast(response.data.message);
        setLoading(false);
        setErrorAcc("");
        setError("");
        setShowWithdrawModal(false);
      } else {
        // Show an error message indicating that the withdrawal amount exceeds total earnings
        setLoading(false);
        setError("Insufficent Amount.");
        setShowWithdrawModal(true);
      }
    } catch (error) {
      setLoading(false);
      setErrorAcc("");
      setError("");
      showToast(error.response.data.message);
    }
  };

  // The forwardRef is important!!
  // Dropdown needs access to the DOM node in order to position the Menu
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      to=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="btn-icon btn btn-ghost btn-sm rounded-circle"
    >
      {children}
    </Link>
  ));

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        cell: ({ getValue }) => {
          return "#" + getValue();
        },
      },
      { accessorKey: "method", header: "Method" },
      { accessorKey: "date", header: "Date" },
      {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ getValue }) => {
          return nairaSign + numberWithCommas(getValue());
        },
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ getValue }) => {
          return (
            <Badge
              bg={`${
                getValue() === "Pending"
                  ? "warning"
                  : getValue() === "completed"
                  ? "success"
                  : "danger"
              } `}
            >
              {getValue()}
            </Badge>
          );
        },
      },

      // { accessorKey: "jobTitle", header: "Job Title" },
    ],
    []
  );

  // const data = useMemo(() => <WithdrawHistoryData />, []);
  const historyData = WithdrawHistoryData();

  const table = useReactTable({
    data: historyData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setFiltering,
    debugTable: false,
  });

  const bankCurrency = [
    { value: "NGN", label: "Naira" },
    { value: "USD", label: "Dollars" },

  ];

  const AlertDismissible = () => {
    const [show, setShow] = useState(true);
    if (show) {
      return (
        <Alert
          variant="light-warning"
          className="bg-light-warning text-dark-warning border-0"
          onClose={() => setShow(false)}
          dismissible
        >
          <strong>payout@dimpified.com</strong>
          <p>
            You will receive your money in your bank account after two business
            working day of making withdrawal request
          </p>
        </Alert>
      );
    }
    return "";
  };

  return (
      <Card className="border-0">
        <Card.Header>
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-0">Payout Method</h3>
            <p className="mb-0">
              Payouts Dashboard is a quick overview of all current and old
              payment requests.
            </p>
          </div>
        </Card.Header>
        <Card.Body>
          <AlertDismissible />
          <Row className="mt-6">
            <Col xl={4} lg={4} md={12} sm={12} className="mb-3 mb-lg-0">
              <div className="text-center">
                {/* Payout chart */}
                <ApexCharts
                  options={PayoutChartOptions}
                  series={PayoutChartSeries}
                  height={165}
                  type="bar"
                />
                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                  <DropdownToggle caret>{selectedCurrency}</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={() => handleCurrencyChange("Naira")}>
                      NGN
                    </DropdownItem>
                    <DropdownItem onClick={() => handleCurrencyChange("Dollar")}>
                      USD
                    </DropdownItem>
                   
                  </DropdownMenu>
                </Dropdown>
                <h4 className="mb-1">Your total earnings</h4>
                <h5 className="mb-0 display-4 fw-bold">
                  {formatPrice(selectedCurrency)}
                  {earnings[selectedCurrency] || 0.0}
                  {/* Display earnings with Naira sign */}
                </h5>
                <p className="px-4">You can change your payout account above</p>

                <Button
                  variant="primary"
                  onClick={() => {
                    setTotalAmount(earnings[selectedCurrency]);
                    console.log("this is earning", earnings[selectedCurrency]);
                    setShowWithdrawModal(true);
                  }}
                >
                  Withdraw Earnings
                </Button>

                {/* Withdraw Modal */}
                <Modal
                  show={showWithdrawModal}
                  onHide={() => setShowWithdrawModal(false)}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Withdraw Earnings</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {/* Display account details */}

                    <div className="border p-4 rounded-3 mt-3">
                      <h4>Select Banks:</h4>
                      {/* <p>
                        If the bank currency you select is difference from the
                        currency you withdraw from, the amount will be converted
                        according to your country head bank currency value
                      </p> */}
                      {bankData.length > 0 ? (
                        <select
                          className="form-select"
                          defaultValue=""
                          onChange={handleChange}
                        >
                          <option value="" disabled>
                            Select an account
                          </option>
                          {bankData.map((account, index) => (
                            <option key={index} value={account.id}>
                              {account.accountName} - {account.bankName} (
                              {account.currency})
                            </option>
                          ))}
                        </select>
                      ) : (
                        <p>No accounts found.</p>
                      )}
                      {errorAcc && (
                        <div className="alert alert-danger mt-3">
                          {errorAcc}
                        </div>
                      )}
                    </div>

                    {/* Display withdrawal amount input field */}
                    <div className="border p-4 rounded-3 mt-3">
                      <h4>
                        Available Balance: {formatPrice(selectedCurrency)}
                        {earnings[selectedCurrency] || 0.0}
                      </h4>
                      <Form.Group controlId="withdrawnAmount">
                        <Form.Label>
                          Withdrawn Amount {formatPrice(selectedCurrency)}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder={`Enter amount in ${formatPrice(
                            selectedCurrency
                          )}`}
                          value={withdrawnAmount}
                          onChange={(e) => setWithdrawnAmount(e.target.value)}
                        />
                        {error && (
                          <div className="alert alert-danger mt-3">{error}</div>
                        )}
                      </Form.Group>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    {loading ? (
                      <Button
                        variant="primary"
                        style={{ opacity: ".7" }}
                        disabled
                      >
                        Processing
                      </Button>
                    ) : (
                      <Button variant="primary" onClick={handleWithdraw}>
                        Withdraw
                      </Button>
                    )}
                  </Modal.Footer>
                </Modal>
              </div>
            </Col>
            <Col xl={8} lg={8} md={12} sm={12}>
              <Col xs={12} className="mt-3 text-center">
                <Button variant="outline-primary" onClick={handleAddAccount}>
                  Add Account
                </Button>
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Enter Account Details</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="accountName">
                        <Form.Label>Account Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Account Name"
                          value={accountName}
                          onChange={(e) => setAccountName(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="accountNumber">
                        <Form.Label>Account Number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Account Number"
                          value={accountNumber}
                          onChange={(e) => setAccountNumber(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="bankName">
                        <Form.Label>Bank Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Bank Name"
                          value={bankName}
                          onChange={(e) => setBankName(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Currency</Form.Label>
                        <Form.Select
                          placeholder="select currency"
                          id="course_currency"
                          name="currency"
                          value={currency}
                          onChange={(e) => setCurrency(e.target.value)}
                        >
                          {bankCurrency.map((currency) => (
                            <option key={currency.value} value={currency.value}>
                              {currency.label}
                            </option>
                          ))}
                          </Form.Select>
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                      Save
                    </Button>
                  </Modal.Footer>
                </Modal>
                {bankData.length > 0 && (
                  <div className="mt-3 mb-3">
                    {currentAccounts.map((account, index) => (
                      <div
                        key={index}
                        className="border rounded px-2 mt-2 text-start position-relative"
                      >
                        {/* Edit button */}
                        <button
                          className="btn btn-primary btn-sm position-absolute top-0 end-0 m-3"
                          onClick={() => handleEdit(account.id)}
                        >
                          Edit
                        </button>
                        <p>
                          <strong>Account Name:</strong> {account.accountName}
                        </p>
                        <p>
                          <strong>Account Number:</strong>{" "}
                          {account.accountNumber}
                        </p>
                        <p>
                          <strong>Bank Name:</strong> {account.bankName}
                        </p>
                        <p>
                          <strong>Currency:</strong> {account.currency}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {bankData.length > accountsPerPage && (
                  <ReactPaginate
                    previousLabel={<ChevronLeft size="14px" />}
                    nextLabel={<ChevronRight size="14px" />}
                    pageCount={pageCount}
                    onPageChange={handlePageChange}
                    containerClassName={
                      "pagination justify-content-center mb-0"
                    }
                    previousLinkClassName={"page-link mx-1 rounded"}
                    nextLinkClassName={"page-link mx-1 rounded"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link mx-1 rounded"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"active"}
                  />
                )}

                {/* Edit Modal */}
                <Modal
                  show={showEditModal}
                  onHide={() => setShowEditModal(false)}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Edit Account Details</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="accountName">
                        <Form.Label>Account Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Account Name"
                          value={editedAccount?.accountName || ""}
                          onChange={(e) =>
                            setEditedAccount({
                              ...editedAccount,
                              accountName: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="accountNumber">
                        <Form.Label>Account Number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Account Number"
                          value={editedAccount?.accountNumber || ""}
                          onChange={(e) =>
                            setEditedAccount({
                              ...editedAccount,
                              accountNumber: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="bankName">
                        <Form.Label>Bank Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Bank Name"
                          value={editedAccount?.bankName || ""}
                          onChange={(e) =>
                            setEditedAccount({
                              ...editedAccount,
                              bankName: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Currency</Form.Label>
                        <Form.Control
                          as="select"
                          value={editedAccount?.currency || ""}
                          onChange={(e) =>
                            setEditedAccount({
                              ...editedAccount,
                              currency: e.target.value,
                            })
                          }
                        >
                          {bankCurrency.map((currency) => (
                            <option key={currency.value} value={currency.value}>
                              {currency.label}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => setShowEditModal(false)}
                    >
                      Close
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => handleEditSave(editedAccount.accountId)}
                    >
                      Save
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Col>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      
      // <Row className="mt-4">
      //   <Col lg={4} md={12} sm={12} className="mb-4 mb-lg-0">
      //     <StatTopIcon
      //       title="Earning this month"
      //       value={
      //         (totalAmount / 100)
      //           .toLocaleString("en-NG", { style: "currency", currency: "NGN" })
      //           .slice(0, -3) +
      //         "." +
      //         (totalAmount % 100).toString().padStart(2, "0")
      //       }
      //       iconName="folder"
      //       colorVariant="primary"
      //       progress={65}
      //     />
      //   </Col>
      //   <Col lg={4} md={12} sm={12} className="mb-4 mb-lg-0">
      //     <StatTopIcon
      //       title="Account Balance"
      //       value={
      //         (totalAmount / 100)
      //           .toLocaleString("en-NG", { style: "currency", currency: "NGN" })
      //           .slice(0, -3) +
      //         "." +
      //         (totalAmount % 100).toString().padStart(2, "0")
      //       }
      //       iconName="shopping-bag"
      //       colorVariant="danger"
      //       progress={65}
      //     />
      //   </Col>
      //   <Col lg={4} md={12} sm={12}>
      //     <StatTopIcon
      //       title="Life Time Sales"
      //       value={
      //         (totalAmount / 100)
      //           .toLocaleString("en-NG", { style: "currency", currency: "NGN" })
      //           .slice(0, -3) +
      //         "." +
      //         (totalAmount % 100).toString().padStart(2, "0")
      //       }
      //       iconName="send"
      //       colorVariant="warning"
      //       progress={65}
      //     />
      //   </Col>
      // </Row> 

      // <Card className="border-0 mt-4">
      //   <Card.Header>
      //     <h3 className="mb-0 h4">Withdraw History</h3>
      //   </Card.Header>
      //   <Card.Body className="p-0 pb-4">
      //     <Table hover responsive className="text-nowrap table-centered">
      //       <thead>
      //         {table.getHeaderGroups().map((headerGroup) => (
      //           <tr key={headerGroup.id}>
      //             {headerGroup.headers.map((header) => (
      //               <th key={header.id}>
      //                 {header.isPlaceholder
      //                   ? null
      //                   : flexRender(
      //                       header.column.columnDef.header,
      //                       header.getContext()
      //                     )}
      //               </th>
      //             ))}
      //           </tr>
      //         ))}
      //       </thead>
      //       <tbody>
      //         {table.getRowModel().rows.map((row) => (
      //           <tr key={row.id}>
      //             {row.getVisibleCells().map((cell) => (
      //               <td key={cell.id}>
      //                 {flexRender(
      //                   cell.column.columnDef.cell,
      //                   cell.getContext()
      //                 )}
      //               </td>
      //             ))}
      //           </tr>
      //         ))}
      //       </tbody>
      //     </Table>

      //     {/* Pagination @ Footer */}
      //     <div className="mt-4">
      //       <Pagination table={table} />
      //     </div>
      //   </Card.Body>
      // </Card>
   
  );
};

export default Payouts;
