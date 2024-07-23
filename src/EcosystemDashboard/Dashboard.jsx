import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Card, Table, Image, DropdownToggle, DropdownMenu, Dropdown, DropdownItem } from "react-bootstrap";
import axios from "axios";


import StatRightBadge from "../Components/marketing/common/stats/StatRightBadge";
import ApexCharts from "../Components/elements/charts/ApexCharts";
import InstructorProfileLayout from "./InstructorProfileLayout";
import BestSellingCoursesData from "../data/marketing/BestSellingCoursesData";
import {
  EarningsChartSeries,
  EarningsChartOptions,
  OrderColumnChartSeries,
  OrderColumnChartOptions,
} from "../data/charts/ChartData";

const Dashboard = () => {
  let {ecosystemDomain} = useParams();
  const [totalServices, setTotalServices] = useState("");
  const [totalAmount, setTotalAmount] = useState({
    totalNaira: 0,
    totalDollar: 0,
  });
  const [totalProducts, setTotalProducts] = useState("");
  const [totalCourses, setTotalCourses] = useState("");
  const [data, setData] = useState([]);
  const [orderChartData, setOrderChartData] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("NGN");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/ecosystem-dashboard/${ecosystemDomain}`
        );
        const data = await response.data;
        setTotalAmount(data.totalEarnings);
        setTotalProducts(data.totalProducts);
        setTotalCourses(data.totalCourses);
        setTotalServices(data.totalServices);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const fetchMonthlyOrders = async () => {
      try {
        const userId = sessionStorage.getItem("UserId");
        const response = await axios.get(
          `https://remsana-backend-testing.azurewebsites.net/api/v1/instructor-monthly-orders/${userId}`
        );
        const result = response.data;
        const chartData = result.map((item) => ({
          x: item.month,
          y: item.data,
        }));
        setOrderChartData(chartData);
      } catch (error) {
        console.error("Error fetching monthly orders data:", error);
      }
    };

    fetchMonthlyOrders();
  }, []);
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  const formatCurrency = (amount, currency) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount || 0);
  };

  const getTotalAmount = (currency) => {
    switch (currency) {
      case "NGN":
        return totalAmount.totalNaira;
      case "USD":
        return totalAmount.totalDollar;
      default:
        return 0;
    }
  };
 

  return (
    <InstructorProfileLayout>
      <Row>
      <Col lg={3} md={12} sm={12} className="mb-4 mb-lg-0">
          <StatRightBadge
            title={`Revenue (${selectedCurrency})`}
            subtitle="Earning this month"
            value={formatCurrency(getTotalAmount(selectedCurrency), selectedCurrency)}
            badgeValue={formatCurrency(getTotalAmount(selectedCurrency), selectedCurrency)}
            colorVariant="success"
          />
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle caret>{selectedCurrency}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => handleCurrencyChange("NGN")}>
                NGN
              </DropdownItem>
              <DropdownItem onClick={() => handleCurrencyChange("USD")}>
                USD
              </DropdownItem>
              <DropdownItem onClick={() => handleCurrencyChange("EUR")}>
                EUR
              </DropdownItem>
              <DropdownItem onClick={() => handleCurrencyChange("GBP")}>
                GBP
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
        <Col lg={3} md={12} sm={12} className="mb-4 mb-lg-0">
          <StatRightBadge
            title="Created Course"
            subtitle="New this month"
            value={totalCourses.total || 0}
            badgeValue={totalCourses.thisMonth || 0}
            colorVariant="info"
          />
        </Col>
        <Col lg={3} md={12} sm={12} className="mb-4 mb-lg-0">
          <StatRightBadge
            title="Created Services"
            subtitle="For the month"
            value={totalServices.total || 0}
            badgeValue={totalServices.thisMonth || 0}
            colorVariant="warning"
          />
        </Col>
        <Col lg={3} md={12} sm={12} className="mb-4 mb-lg-0">
          <StatRightBadge
            title="Digital Product"
            subtitle="For the month"
            value={totalProducts.total || 0}
            badgeValue={totalProducts.thisMonth || 0}
            colorVariant="warning"
          />
        </Col>
      </Row>
      {/* Graph for purchased courses */}
      <Card className="my-4 mt-10">
        <Card.Header>
          <h3 className="h4 mb-0">Product Order</h3>
        </Card.Header>
        <Card.Body>
          <ApexCharts
            options={OrderColumnChartOptions}
            series={[{ data: orderChartData }]} // Update series data
            height={287}
            type="bar"
          />
        </Card.Body>
      </Card>
      {/* Best Selling Courses table */}
      <Card className="mt-4">
        <Card.Header>
          <h3 className="mb-0 h4">Best Selling Products</h3>
        </Card.Header>
        <Card.Body className="p-0">
          <Table hover responsive className="mb-0 text-nowrap table-centered">
            <thead className="table-light">
              <tr>
                <th scope="col" className="border-0">
                  PRODUCTS
                </th>
                <th scope="col" className="border-0">
                  SALES
                </th>
                <th scope="col" className="border-0">
                  AMOUNT
                </th>
              </tr>
            </thead>
            {/* <tbody>
              {top4Courses && top4Courses.length > 0 ? (
                top4Courses.map((course, index) => (
                  <tr key={index}>
                    <td className="align-middle border-top-0">
                      <Link to="#">
                        <div className="d-lg-flex align-items-center">
                          <Image
                            src={course.image}
                            alt=""
                            className="rounded img-4by3-lg"
                          />
                          <h5 className="mb-0 ms-lg-3 mt-lg-0 mt-2 text-primary-hover">
                            {course.name}
                          </h5>
                        </div>
                      </Link>
                    </td>
                    <td className="align-middle border-top-0">
                      {course.totalNumberOfSales}
                    </td>
                    <td className="align-middle border-top-0">
                      {(course.totalAmount / 100)
                        .toLocaleString("en-NG", {
                          style: "currency",
                          currency: "NGN",
                        })
                        .slice(0, -3) +
                        "." +
                        (course.totalAmount % 100).toString().padStart(2, "0")}
                    </td>
                    {/* <td className="align-middle border-top-0">
                    <ActionMenu />
                    </td> */}
                  {/* </tr>
                ))
              ) : (
                <div className="px-4 py-12">No product have been purchased</div>
              )}
            </tbody> */} 
          </Table>
        </Card.Body>
      </Card>
    </InstructorProfileLayout>
  );
};

export default Dashboard;
