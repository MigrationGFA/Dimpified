import React, { useState, useMemo, useEffect } from "react";
import { Card, Row, Col, Dropdown, Button, Modal, Badge, Table, Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Trash, Edit, MoreVertical } from "react-feather";
import InstructorProfileLayout from "../../EcosystemDashboard/InstructorProfileLayout";
import Pagination from "../../Components/elements/advance-table/Pagination";
import axios from "axios"; // Import axios
import ApexCharts from "react-apexcharts"; // Import ApexCharts
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { numberWithCommas } from "../../helper/utils";
import {
  PayoutChartSeries,
  PayoutChartOptions,
} from "../../data/charts/ChartData";

// Function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  const day = date.getDate();
  const suffix = ['st', 'nd', 'rd'][((day + 90) % 100 - 10) % 10 - 1] || 'th';
  return formattedDate.replace(/\b(\d{1,2})\b/g, `$1${suffix}`);
};

const Payouts = () => {
  const [filtering, setFiltering] = useState("");
  const [rowSelection, setRowSelection] = useState({});
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [withdrawnAmount, setWithdrawnAmount] = useState("");
  const [bankData, setBankData] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false); 
  const nairaSign = "\u20A6";

  
useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true); 
      const response = await axios.get('https://remsana-backend-testing.azurewebsites.net/api/v1/transactions/37');
      setTransactions(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); 
    }
  };

  fetchData();
}, []);


  const handleWithdraw = async () => {
    console.log("this is withdraw amount", withdrawnAmount);
  }

  const handleSave = async () => {
    
  };

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

  const ActionMenu = () => {
    return (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle}>
          <MoreVertical size="15px" className="text-secondary" />
        </Dropdown.Toggle>
        <Dropdown.Menu align="end">
          <Dropdown.Header>SETTINGS--</Dropdown.Header>
          <Dropdown.Item eventKey="1">
            {" "}
            <Edit size="15px" className="dropdown-item-icon" /> Edit
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">
            {" "}
            <Trash size="15px" className="dropdown-item-icon" /> Remove
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        cell: ({ getValue }) => {
            return '#' + getValue();
        }
      },
      { accessorKey: 'paymentMethod', header: 'Method' },
      { accessorKey: 'course_title', header: 'Course Title' },
      {
        accessorKey: 'amount',
        header: 'Amount',
        cell: ({ getValue }) => {
          return '₦' + numberWithCommas(getValue());
        }
      },
      {
        accessorKey: 'transactionDate',
        header: 'Date',
        cell: ({ getValue }) => formatDate(getValue())
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ getValue }) => (
          <Badge bg={getValue() === 'success' ? 'success' : 'danger'}>
            {getValue()}
          </Badge>
        )
      },
    ],
    []
  );

  const data = useMemo(() => transactions, [transactions]); 

  const table = useReactTable({
    data,
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

  return (
    <InstructorProfileLayout>
      <Card className="border-0">
        <Card.Header>
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-0">Payout Method</h3>
            <p className="mb-0">Payouts Dashboard is a quick overview of all current and old
              payment requests.</p>
          </div>
        </Card.Header>
        <Card.Body>
          <Alert
            variant="light-warning"
            className="bg-light-warning text-dark-warning border-0"
            onClose={() => setShow(false)}
            dismissible
          >
            <strong>payout@remsana.com</strong>
            <p>
            You will receive your money in your bank account after two business working day of making withdrawal request
            </p>
          </Alert>
          <Row className="mt-6">
            <Col xl={4} lg={4} md={12} sm={12} className="mb-3 mb-lg-0">
              <div className="text-center">
                <ApexCharts
                  options={PayoutChartOptions}
                  series={PayoutChartSeries}
                  height={165}
                  type="bar"
                />
              </div>
              <h4 className="mb-1">Your total earnings</h4>
              <h5 className="mb-0 display-4 fw-bold">$3,210</h5>
              <p className="px-4">You can change your payout account above</p>
              <Button variant="primary" onClick={() => setShowWithdrawModal(true)}>
                Withdraw Earnings
              </Button>
            </Col>
            <Col xl={8} lg={8} md={12} sm={12}>
              <Col xs={12} className="mt-3 text-center">
                <Button variant="outline-primary" onClick={() => setShowModal(true)}>
                  Add Account
                </Button>
              </Col>
            </Col>
          </Row>
        </Card.Body>
      </Card>

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
            <h4>Account Details:</h4>
            {bankData.length > 0 ? (
              <>
                <p>
                  <strong>Account Name:</strong>{" "}
                  {bankData[bankData.length - 1].accountName}
                </p>
                <p>
                  <strong>Account Number:</strong>{" "}
                  {bankData[bankData.length - 1].accountNumber}
                </p>
                <p>
                  <strong>Bank Name:</strong>{" "}
                  {bankData[bankData.length - 1].bankName}
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>Account Name:</strong>
                </p>
                <p>
                  <strong>Account Number:</strong>
                </p>
                <p>
                  <strong>Bank Name:</strong>
                </p>
              </>
            )}
          </div>

          {/* Display withdrawal amount input field */}
          <div className="border p-4 rounded-3 mt-3">
            <h4>Withdrawal Amount</h4>
            <Form.Group controlId="withdrawnAmount">
              <Form.Label>Withdrawn Amount ({nairaSign})</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Enter amount in ${nairaSign}`}
                value={withdrawnAmount}
                onChange={(e) => setWithdrawnAmount(e.target.value)}
              />
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

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Bank Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Account Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter account name"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Account Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter account number"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Bank Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter bank name"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {bankData.length > 0 && (
        <div className="border rounded p-3 mt-3 text-start">
          <h4 className="mb-3">Account Details:</h4>
          <p>
            <strong>Account Name:</strong>{" "}
            {bankData[bankData.length - 1].accountName}
          </p>
          <p>
            <strong>Account Number:</strong>{" "}
            {bankData[bankData.length - 1].accountNumber}
          </p>
          <p>
            <strong>Bank Name:</strong>{" "}
            {bankData[bankData.length - 1].bankName}
          </p>
        </div>
      )}

      <Card className="border-0 mt-4">
        <Card.Header>
          <h3 className="mb-0 h4">Withdraw History</h3>
        </Card.Header>
        <Card.Body className="p-0 pb-4">
          <Table hover responsive className="text-nowrap table-centered">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="mt-4">
            <Pagination table={table} />
          </div>
        </Card.Body>
      </Card>
    </InstructorProfileLayout>
  );
};

export default Payouts;
