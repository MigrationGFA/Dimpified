import React, { useMemo, useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import axios from 'axios';
import InstructorProfileLayout from './InstructorProfileLayout';
import TanstackTable from '../Components/elements/advance-table/TanstackTable';
import { useGlobalContext } from '../context/AuthContext';

const Orders = () => {
  const { userId } = useGlobalContext();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`https://remsana-backend-testing.azurewebsites.net/api/v1/get-transactions/${userId}`);
        const formattedOrders = response.data.map(order => ({
          ...order,
          course_title: capitalizeWords(order.course_title)
        }));
        setOrders(formattedOrders);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  const columns = useMemo(() => [
    { accessorKey: 'course_title', header: 'Courses' },
    {
      accessorKey: 'amount',
      header: 'Amount',
      cell: ({ getValue }) => ` ₦${(parseFloat(getValue()) / 100).toFixed(2)}`,
    },
    {
      accessorKey: 'id',
      header: 'Invoice',
      cell: ({ getValue }) => `000${getValue()}`,
    },
    {
      accessorKey: 'transactionDate',
      header: 'Date',
      cell: ({ getValue }) => formatDate(getValue()),
    },
    { accessorKey: 'paymentMethod', header: 'Method' },
  ], []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const capitalizeWords = (str) => {
    return str.toLowerCase().replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());
  };

  return (
    <InstructorProfileLayout>
      <Card className="border-0">
        <Card.Header>
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-0">Orders</h3>
            <p className="mb-0">
              Order Dashboard is a quick overview of all current orders.
            </p>
          </div>
        </Card.Header>
        <Card.Body className="p-0 pb-5">
          {loading ? (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <TanstackTable
              data={orders}
              columns={columns}
              filter={true}
              filterPlaceholder="Search Orders"
              pagination={true}
            />
          )}
        </Card.Body>
      </Card>
    </InstructorProfileLayout>
  );
};

export default Orders;
