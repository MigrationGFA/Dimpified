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
  Spinner,
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
import { useSelector } from "react-redux";

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
import AxiosInterceptor from "../../Components/AxiosInterceptor";

const Payouts = () => {
  const { ecosystemDomain } = useParams();
  const userPlan = useSelector(
    (state) => state.authentication.user?.data?.plan || "Lite"
  );
  const authFetch = AxiosInterceptor();
  const userId = useSelector(
    (state) => state.authentication.user?.data?.CreatorId || "Unknown User"
  );
  console.log(userId);
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
  const [loadingSave, setLoadingSave] = useState(false);
  const [loadingWithdraw, setLoadingWithdraw] = useState(false);
  const [percentage, setPercentage] = useState(null);
  const [banks, setBanks] = useState([]);
  const [bankLoading, setBankLoading] = useState(false);
  const [bankCode, setBankCode] = useState("");
  const [loadingVerify, setLoadingVerify] = useState(false);



  // const handleBanks = async () => {
  //   setBankLoading(true);
  //   try {
  //     const response = await axios.get(
  //       `${import.meta.env.VITE_API_URL}/get-all-banks`
  //     );
  //     setBankLoading(false);
  //     setBanks(response.allBanks.data);
  //   } catch (error) {
  //     setBankLoading(false);
  //     showToast("Can't get bank list");
  //   }
  // };

  useEffect(() => {
    if (userPlan === "Lite") {
      setPercentage(7.5);
    } else if (userPlan === "Plus") {
      setPercentage(4);
    } else if (userPlan === "Pro") {
      setPercentage(3);
    } else {
      setPercentage(2);
    }
  }, [userPlan]);

  const [earnings, setEarnings] = useState({
    Naira: 0,
    Dollar: 0,
    EUR: 0,
    GBP: 0,
  });
  const [availableBalance, setAvailableBalance] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("Naira");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (event) => {
    setSelectedBankId(event.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await authFetch.get(
        `${import.meta.env.VITE_API_URL}/ecosystem-earnings/${ecosystemDomain}`
      );

      if (response.data) {
        if (
          response.data.totalEarnings !== undefined &&
          response.data.availableBalance !== undefined
        ) {
          setEarnings(response.data.totalEarnings);
          setAvailableBalance(response.data.availableBalance);
        } else {
          setEarnings(0);
          setAvailableBalance(0);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Fetch earnings data when component mounts
    fetchData();
  }, [ecosystemDomain]);

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

  const fetchBankData = async () => {
    try {
      const response = await authFetch.get(
        `${import.meta.env.VITE_API_URL}/bank-details/${ecosystemDomain}`
      );

      if (
        response.data.accountDetails &&
        response.data.accountDetails.length > 0
      ) {
        const fetchedBankData = response.data.accountDetails;
        setBankData(fetchedBankData);
      } else {
        setBankData([]);
      }
    } catch (error) {
      console.error("Error fetching bank data:", error);
    }
  };

  useEffect(() => {
    fetchBankData();
  }, [userId]);

  // Fetch list of banks from the API
  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await authFetch.get(
          `${import.meta.env.VITE_API_URL}/get-all-banks`
        );
        setBanks(response.data.allBanks.data);
      } catch (error) {
        console.error("Error fetching banks:", error);
        showToast("Failed to load banks.");
      }
    };
    fetchBanks();
  }, []);

  // Automatically verify account number when 10 digits are entered
  useEffect(() => {
    const verifyAccount = async () => {
      if (accountNumber.length === 10 && bankCode) {
        setLoadingVerify(true);
        try {
          const response = await authFetch.post(
            `${import.meta.env.VITE_API_URL}/verify-bank-details`,
            {
              account: accountNumber,
              bankCode: bankCode,
            }
          );

          if (response.data.verifyDetails && response.data.verifyDetails.status === true) {
            setAccountName(response.data.verifyDetails.data.account_name); 
            showToast("Account verified successfully.");
          } else {
            showToast("Bank verification failed. Please check the details.");
            setAccountName("");
          }
        } catch (error) {
          console.error("Error verifying bank details:", error);
          showToast("Error verifying bank details. Please try again.");
          setAccountName("");
        } finally {
          setLoadingVerify(false);
        }
      }
    };

    if (accountNumber.length === 10) {
      verifyAccount();
    }
  }, [accountNumber, bankCode]); 

  const handleSave = async () => {
    if (!bankCode || !accountNumber || !accountName) {
      showToast(
        "Please complete all fields and ensure the account is verified."
      );
      return;
    }

    setLoadingSave(true);
    try {
      const saveBankData = await authFetch.post(
        `${import.meta.env.VITE_API_URL}/save-bank-details`,
        {
          creatorId: userId,
          accountName,
          accountNumber,
          bankName,
          currency,
          ecosystemDomain,
        }
      );

      setBankData((prevData) => [...prevData, saveBankData.data.newAccount]);
      showToast(saveBankData.data.message);
    } catch (error) {
      console.error("Error saving bank details:", error);
      showToast(error.response?.data?.message || "An error occurred");
    } finally {
      setLoadingSave(false);
      setShowModal(false);
    }
  };

  const handleAddAccount = () => {
    setShowModal(true);
    // handleBanks();
  };

  const handleEdit = (id) => {
    const editedAccount = currentAccounts.find((account) => account.id === id);
    if (editedAccount) {
      setEditedAccount({ ...editedAccount, accountId: id });
      setShowEditModal(true);
    } else {
      console.error("Account not found");
    }
  };

  const handleEditSave = async (accountId) => {
    setLoadingWithdraw(true);
    try {
      await authFetch.put(`${import.meta.env.VITE_API_URL}/edit-account`, {
        creatorId: userId,
        accountId: accountId,
        accountName: editedAccount.accountName,
        bankName: editedAccount.bankName,
        accountNumber: editedAccount.accountNumber,
        currency: editedAccount.currency,
        ecosystemDomain,
      });
      fetchBankData();

      setShowEditModal(false);
      showToast("Account update Successfully");
    } catch (error) {
      console.error("Error editing account:", error);
      showToast("Error updating bank details");
    } finally {
      setLoadingWithdraw(false);
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
        const response = await authFetch.post(
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
        fetchData();
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
    { value: "", label: "Select currency" },
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

  const AlertPaymentPlan = () => {
    const [show, setShow] = useState(true);
    if (show) {
      return (
        <Alert
          variant="light-warning"
          className="bg-light-warning text-dark-warning border-0"
          onClose={() => setShow(false)}
          dismissible
        >
          <strong>Current Plan</strong>
          <p>
            You are curently on {userPlan ? userPlan : "Lite"} plan which
            involve deducting {percentage ? percentage : "0"}% of your total
            earning.
            {/* to move up to higher plan so as to have lesser percentage,
            <button className="btn btn-primary btn-sm   ">UPGRADE PLAN</button> */}
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
            Payouts Dashboard is a quick overview of all current and old payment
            requests.
          </p>
        </div>
      </Card.Header>
      <Card.Body>
        <AlertDismissible />
        <AlertPaymentPlan />
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
                {formatPrice(selectedCurrency)}{" "}
                {earnings[selectedCurrency] || 0.0}
              </h5>
              <p className="px-4">You can change your payout account above</p>

              <Button
                variant="primary"
                onClick={() => {
                  setTotalAmount(availableBalance);
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
                  <div className="border p-4 rounded-3 mt-3">
                    <h4>Select Banks:</h4>
                    {bankData.length > 0 ? (
                      <select
                        className="form-select"
                        defaultValue=""
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select an account
                        </option>
                        {bankData.map((account) => (
                          <option key={account.id} value={account.id}>
                            {account.accountName} - {account.bankName} (
                            {account.currency})
                          </option>
                        ))}
                      </select>
                    ) : (
                      <p>No accounts found.</p>
                    )}
                    {errorAcc && (
                      <div className="alert alert-danger mt-3">{errorAcc}</div>
                    )}
                  </div>

                  <div className="border p-4 rounded-3 mt-3">
                    <h4>
                      Ledger Balance: {formatPrice(selectedCurrency)}{" "}
                      {earnings.Naira || 0.0}
                    </h4>
                    <h4>
                      Available Balance: {formatPrice(selectedCurrency)}{" "}
                      {availableBalance || 0.0}
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
                    <Form.Group className="mb-3" controlId="bankSelect">
                      <Form.Label>Bank Name</Form.Label>
                      <Form.Select
                        value={bankCode}
                        onChange={(e) => {
                          const selectedBank = banks.find(
                            (bank) => bank.code === e.target.value
                          );
                          setBankCode(selectedBank.code);
                          setBankName(selectedBank.name);
                        }}
                      >
                        <option value="">Select Bank</option>
                        {banks.map((bank) => (
                          <option key={bank.code} value={bank.code}>
                            {bank.name}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="accountNumber">
                      <Form.Label>Account Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Account Number"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        maxLength={10}
                      />
                      {loadingVerify && <div>Verifying account number...</div>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="accountName">
                      <Form.Label>Account Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Account Name will appear here after verification"
                        value={accountName}
                        onChange={(e) => setAccountName(e.target.value)}
                        readOnly // Account name is populated automatically
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Currency</Form.Label>
                      <Form.Select
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
                  {loadingSave ? (
                    <Button variant="primary" disabled>
                      <Spinner animation="border" size="sm" /> Saving
                    </Button>
                  ) : (
                    <Button variant="primary" onClick={handleSave}>
                      Save
                    </Button>
                  )}
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
                        <strong>Account Number:</strong> {account.accountNumber}
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
                  containerClassName={"pagination justify-content-center mb-0"}
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
                  {loadingWithdraw ? (
                    <Button
                      variant="primary"
                      disabled
                      style={{ opacity: ".7" }}
                    >
                      <Spinner animation="border" size="sm" /> Saving
                    </Button>
                  ) : (
                    <Button variant="primary" onClick={handleEditSave}>
                      Save
                    </Button>
                  )}
                </Modal.Footer>
              </Modal>
            </Col>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Payouts;
