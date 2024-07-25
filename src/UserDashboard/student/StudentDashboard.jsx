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
import ApexCharts from "react-apexcharts";
import axios from "axios";
import { useSelector } from "react-redux";

// Import custom components
import StatRightBadge from "../../Components/marketing/common/stats/StatRightBadge";
import StudentProfileLayout from "../student/StudentProfileLayout";

// Import chart options
import { OrderColumnChartOptions } from "../../data/charts/ChartData";

const StudentDashboard = () => {
  let { ecosystemDomain } = useParams();

  const user = useSelector((state) => state.authentication.user.data);
  const userId = user.UserId;
  const [totalCourses, setTotalCourses] = useState("");
  const [totalNairaSpent, setTotalNairaSpent] = useState({
    totalNaira: 0,
  });
  const [totalUSDSpent, setTotalUSDSpent] = useState({
    totalDollar: 0,
  });
  const [newCourses, setNewCourses] = useState("");
  const [totalServices, setTotalServices] = useState("");
  const [newServices, setNewServices] = useState("");
  const [totalProducts, setTotalProducts] = useState("");
  const [newProducts, setNewProducts] = useState("");
  const [data, setData] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("NGN");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [total4PurchasedCourse, setTotal4PurchasedCourse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch other dashboard statistics
        const dashboardData = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/ecosystem-user-dashboard/${userId}/${ecosystemDomain}`
        );

        const userDashboard = await dashboardData.data;
        console.log(userDashboard);
        setTotalUSDSpent(userDashboard.totalUSDSpent);
        setTotalNairaSpent(userDashboard.totalNairaSpent);
        setTotalCourses(userDashboard.totalCourses);
        setNewCourses(userDashboard.newCourses);
        setTotalServices(userDashboard.totalServices);
        setNewServices(userDashboard.newServices);
        setTotalProducts(userDashboard.totalProducts);
        setNewProducts(userDashboard.newProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const fetch4PurchasedCourseData = async () => {
      try {
        // Fetch other dashboard statistics
        const dashboard4PurchasedCourseData = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/ecosystem-user-last-four-product/${userId}/${ecosystemDomain}`
        );

        const user4TopPurchasedDashboard =
          await dashboard4PurchasedCourseData.data;
        console.log(user4TopPurchasedDashboard);
        setTotal4PurchasedCourse(user4TopPurchasedDashboard);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetch4PurchasedCourseData();
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
        return totalNairaSpent;
      case "USD":
        return totalUSDSpent;
      default:
        return 0;
    }
  };

  const ActionMenu = () => {
    return null;
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

  return (
    <StudentProfileLayout>
      <Row>
        <Col lg={3} md={12} sm={12} className="mb-4 mb-lg-0">
          <StatRightBadge
            title={`Revenue (${selectedCurrency})`}
            subtitle="Month"
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
            title="Purchased Course"
            subtitle="New this month"
            value={totalCourses || 0}
            badgeValue={newCourses || 0}
            colorVariant="info"
          />
        </Col>
        <Col lg={3} md={12} sm={12} className="mb-4 mb-lg-0">
          <StatRightBadge
            title="Purchased Services"
            subtitle="For the month"
            value={totalServices || 0}
            badgeValue={newServices || 0}
            colorVariant="warning"
          />
        </Col>
        <Col lg={3} md={12} sm={12} className="mb-4 mb-lg-0">
          <StatRightBadge
            title="Digital Product"
            subtitle="For the month"
            value={totalProducts || 0}
            badgeValue={newProducts || 0}
            colorVariant="warning"
          />
        </Col>
      </Row>
      <Card className="mt-4">
        <Card.Header>
          <h3 className="h4 mb-0 ">Purchased Product</h3>
        </Card.Header>
        <Card.Body>
          <ApexCharts
            options={OrderColumnChartOptions}
            series={data} // Pass the 'data' variable for the series
            height={287}
            type="bar"
          />
        </Card.Body>
      </Card>

      {/* Last 4 Purchased Courses table */}
      <Card className="mt-4">
        <Card.Header>
          <h3 className="mb-0 h4">Last 4 Purchased Product</h3>
        </Card.Header>
        <Card.Body className="p-0 ">
          <Table hover responsive className="mb-0 text-nowrap table-centered">
            <thead className="table-light">
              <tr>
                <th scope="col" className="border-0">
                  PRODUCTS
                </th>
                <th scope="col" className="border-0">
                  AMOUNT
                </th>
                <th scope="col" className="border-0"></th>
              </tr>
            </thead>
            <tbody>
              {total4PurchasedCourse &&
                total4PurchasedCourse.map((course, index) => (
                  <tr key={index}>
                    <td className="align-middle border-top-0">
                      <Link to="#">
                        <div className="d-lg-flex align-items-center">
                          <Image
                            src={course.itemDetails.image}
                            alt=""
                            className="rounded-circle img-fluid"
                            style={{
                              width: "80px",
                              height: "70px",
                            }}
                          />
                          <h5 className="mb-0 ms-lg-3 mt-lg-0 mt-2 text-primary-hover">
                            {course.itemDetails.title}
                          </h5>
                        </div>
                      </Link>
                    </td>
                    <td className="align-middle border-top-0">
                      {formatPrice(course.currency, course.itemAmount)}
                    </td>
                    {/* <td className="align-middle border-top-0">
                      <ActionMenu />
                    </td> */}
                  </tr>
                ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </StudentProfileLayout>
  );
};

export default StudentDashboard;
