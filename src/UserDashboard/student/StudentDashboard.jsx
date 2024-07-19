import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Table, Image } from "react-bootstrap";
import ApexCharts from "react-apexcharts";
import axios from "axios"; // Added axios import

// Import custom components
import StatRightBadge from "../../Components/marketing/common/stats/StatRightBadge";
import StudentProfileLayout from "../student/StudentProfileLayout";

// Import chart options
import { OrderColumnChartOptions } from "../../data/charts/ChartData";

const StudentDashboard = () => {
  const [top4Courses, setTop4Courses] = useState([]);
  const [totalAmount, setTotalAmount] = useState(null);
  const [totalStudents, setTotalStudents] = useState(null);
  const [numberOfCourse, setNumberOfCourse] = useState(null);
  const [orderChartData, setOrderChartData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = sessionStorage.getItem("UserId");

        // Fetch data for top 4 purchased courses
        const lastFourResponse = await fetch(
          `https://remsana-backend-testing.azurewebsites.net/api/v1/student-last-four-purchase/${userId}`
        );
        const lastFourData = await lastFourResponse.json();
        setTop4Courses(lastFourData);

        // Fetch monthly orders data
        const response = await axios.get(
          `https://remsana-backend-testing.azurewebsites.net/api/v1/student-monthly-orders/${userId}`
        );
        const result = response.data;
        const monthlyData = result.map((item) => item.data);

        // Set data for the chart
        setData([{ data: monthlyData }]);

        // Extracting necessary data for the chart
        const chartData = result.map((item) => ({
          x: item.month,
          y: item.data,
        }));
        setOrderChartData(chartData);

        // Fetch other dashboard statistics
        const dashboardResponse = await fetch(
          `https://remsana-backend-testing.azurewebsites.net/api/v1/instructorDashboard/${userId}`
        );
        const dashboardData = await dashboardResponse.json();
        setTotalAmount(dashboardData.totalAmount);
        setTotalStudents(dashboardData.totalStudents);
        setNumberOfCourse(dashboardData.numberOfCourse);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const ActionMenu = () => {
    return null;
  };

  return (
    <StudentProfileLayout>
      <Row>
        <Col lg={3} md={12} sm={12} className="mb-4 mb-lg-0">
          <StatRightBadge
            title="Revenue"
            subtitle="Earning this month"
            value="0"
            // {
            //   (totalAmount / 100)
            //     .toLocaleString("en-NG", { style: "currency", currency: "NGN" })
            //     .slice(0, -3) +
            //   "." +
            //   (totalAmount % 100).toString().padStart(2, "0")
            // }
            badgeValue="0"
            // {
            //   (totalAmount / 100)
            //     .toLocaleString("en-NG", { style: "currency", currency: "NGN" })
            //     .slice(0, -3) +
            //   "." +
            //   (totalAmount % 100).toString().padStart(2, "0")
            // }
            colorVariant="success"
          />
        </Col>
        <Col lg={3} md={12} sm={12} className="mb-4 mb-lg-0">
          <StatRightBadge
            title="Purchased Course"
            subtitle="New this month"
            value="0"
            //{totalStudents}
            badgeValue="0"
            //{totalStudents}
            colorVariant="info"
          />
        </Col>
        <Col lg={3} md={12} sm={12} className="mb-4 mb-lg-0">
          <StatRightBadge
            title="Purchased Services"
            subtitle="For the month"
            value="0"
            //{NumberOfCourse}
            badgeValue='0'
            //{NumberOfCourse}
            colorVariant="warning"
          />
        </Col>
        <Col lg={3} md={12} sm={12} className="mb-4 mb-lg-0">
          <StatRightBadge
            title="Purchased Digital Product"
            subtitle="For the month"
            value='0'
            //{NumberOfCourse}
            badgeValue='0'
            //{NumberOfCourse}
            colorVariant="warning"
          />
        </Col>
      </Row>

      {/* Graph for purchased courses */}
      <Card className="my-4">
        <Card.Header>
          <h3 className="h4 mb-0">Purchased Product</h3>
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
              {top4Courses &&
                top4Courses.map((course, index) => (
                  <tr key={index}>
                    <td className="align-middle border-top-0">
                      <Link to="#">
                        <div className="d-lg-flex align-items-center">
                          <Image
                            src={course.Course.image}
                            alt=""
                            className="rounded img-4by3-lg"
                          />
                          <h5 className="mb-0 ms-lg-3 mt-lg-0 mt-2 text-primary-hover">
                            {course.Course.title}
                          </h5>
                        </div>
                      </Link>
                    </td>
                    <td className="align-middle border-top-0">
                      {"₦" + course.Course.price}
                    </td>
                    <td className="align-middle border-top-0">
                      <ActionMenu />
                    </td>
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
