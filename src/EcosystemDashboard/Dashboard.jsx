import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Table,
  Image,
  DropdownToggle,
  DropdownMenu,
  Dropdown,
  DropdownItem,
} from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";

import StatRightBadge from "../Components/marketing/common/stats/StatRightBadge";
import ApexCharts from "../Components/elements/charts/ApexCharts";
import InstructorProfileLayout from "./InstructorProfileLayout";
import { OrderColumnChartOptions } from "../data/charts/ChartData";

const Dashboard = () => {
  let { ecosystemDomain } = useParams();
  const userId =
    useSelector((state) => state.authentication.user.data.CreatorId) || {};

  const [totalServices, setTotalServices] = useState("");
  const [totalAmount, setTotalAmount] = useState({
    Naira: 0,
    Dollar: 0,
  });
  const [totalProducts, setTotalProducts] = useState("");
  const [totalCourses, setTotalCourses] = useState("");
  const [data, setData] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("NGN");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [total4BestSelling, setTotal4BestSelling] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/ecosystem-dashboard/${ecosystemDomain}`
        );
        const data = await response.data;
        setTotalProducts(data.totalProducts);
        setTotalCourses(data.totalCourses);
        setTotalServices(data.totalServices);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const fetchBestSellingData = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/ecosystem-best-selling-products/${ecosystemDomain}`
        );
        const data = await response.data;
        setTotal4BestSelling(data.top4Items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBestSellingData();


    const fetchAmountData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/ecosystem-earnings/${ecosystemDomain}`
        );

        if (response.data) {
          setTotalAmount(response.data.totalEarnings);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAmountData();
  }, []);

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  const formatCurrency = (amount, currency) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount || 0);
  };

  const getTotalAmount = (currency) => {
    switch (currency) {
      case "NGN":
        return totalAmount.Naira;
      case "USD":
        return totalAmount.Dollar;
      default:
        return 0;
    }
  };

  // product order
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/ecosystem-user-monthly-product-purchase/${userId}/${ecosystemDomain}`
        );
        const result = response.data;
        const monthlyData = result.map((item) => item.totalPurchasedItems);

        // Create the final structure with the 'data' property
        const formattedData = [{ data: monthlyData }];
        console.log("this is monthly data", monthlyData);
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchProductData();
  }, []);
  const formatPrice = (currencyName, priceValue) => {
    switch (currencyName) {
      case "naira":
      case "NGN":
        return `₦${priceValue}`;
      case "dollar":
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

  return (
    <InstructorProfileLayout>
      <Row>
        <Col lg={3} md={12} sm={12} className="mb-4 mb-lg-0">
          <StatRightBadge
            title={`Life Time Sales (${selectedCurrency})`}
            subtitle="month"
            value={formatCurrency(
              getTotalAmount(selectedCurrency),
              selectedCurrency
            )}
            badgeValue={formatCurrency(
              getTotalAmount(selectedCurrency),
              selectedCurrency
            )}
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
            </DropdownMenu>
          </Dropdown>
        </Col>
        <Col lg={3} md={12} sm={12} className="mb-4 mb-lg-0">
          <StatRightBadge
            title="Created Course"
            subtitle="month"
            value={totalCourses.total || 0}
            badgeValue={totalCourses.thisMonth || 0}
            colorVariant="info"
          />
        </Col>
        <Col lg={3} md={12} sm={12} className="mb-4 mb-lg-0">
          <StatRightBadge
            title="Created Services"
            subtitle="month"
            value={totalServices.total || 0}
            badgeValue={totalServices.thisMonth || 0}
            colorVariant="warning"
          />
        </Col>
        <Col lg={3} md={12} sm={12} className="mb-4 mb-lg-0">
          <StatRightBadge
            title="Digital Product"
            subtitle="month"
            value={totalProducts.total || 0}
            badgeValue={totalProducts.thisMonth || 0}
            colorVariant="warning"
          />
        </Col>
      </Row>
      {/* Graph for purchased courses */}
      <Card className="my-4 mt-4">
        <Card.Header>
          <h3 className="h4 mb-0">Product Order</h3>
        </Card.Header>
        <Card.Body>
          <ApexCharts
            options={OrderColumnChartOptions}
            series={data} // Update series data
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
            <tbody>
              {total4BestSelling && total4BestSelling.length > 0 ? (
                total4BestSelling.map((course, index) => (
                  <tr key={index}>
                    <td className="align-middle border-top-0">
                      <Link to="#">
                        <div className="d-lg-flex align-items-center">
                          <Image
                            src={course.image}
                            alt=""
                            className="rounded-circle img-fluid"
                            style={{
                              width: "80px",
                              height: "70px",
                            }}
                          />
                          <div>
                            <h5 className="mb-0 ms-lg-3 mt-lg-0 mt-2 text-primary-hover">
                              {course.title}
                            </h5>
                            <h5 className="mb-0 ms-lg-3 mt-lg-0 mt-2 text-primary-hover">
                              {course.category}
                            </h5>
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td className="align-middle border-top-0">
                      {course.purchaseCount}
                    </td>
                    <td className="align-middle border-top-0">
                      {formatPrice(course.currency, course.price)}
                    </td>
                    {/* <td className="align-middle border-top-0">
                    <ActionMenu />
                    </td> */}
                  </tr>
                ))
              ) : (
                <div className="px-4 py-12">No product have been purchased</div>
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </InstructorProfileLayout>
  );
};

export default Dashboard;
