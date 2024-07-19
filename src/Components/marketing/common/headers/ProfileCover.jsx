// import node module libraries
import { Row, Col, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// import custom components
import LevelIconWithTooltip from "../../../../Components/elements/miscellaneous/LevelIconWithTooltip";

// import media files
import CheckedMark from "../../../../assets/images/svg/checked-mark.svg";
import ProfileBackground from "../../../../assets/images/background/profile-bg.jpg";
import { useSelector } from "react-redux";

const ProfileCover = ({ dashboardData, ServiceButton, ProductButton }) => {
  const user = useSelector((state) => state.authentication.user.data);
  
  return (
    <Row className="align-items-center">
      <Col xl={12} lg={12} md={12} sm={12}>
        <div
          className="pt-16 rounded-top-md"
          style={{
            background: `url(${ProfileBackground})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {" "}
        </div>
        <Card className="px-4 pt-2 pb-4 rounded-0 rounded-bottom shadow-sm">
          <div className="d-flex align-items-end justify-content-between  ">
            <div className="d-flex align-items-center">
              <div className="me-2 position-relative d-flex justify-content-end align-items-end mt-n5">
                <Image
                  src={user.image || dashboardData.avatar}
                  className="avatar-xl rounded-circle border border-4 border-white position-relative"
                  alt=""
                />

                {dashboardData.verified ? (
                  <Link
                    to="#"
                    className="position-absolute top-0 end-0"
                    data-bs-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Verified"
                  >
                    <Image src={CheckedMark} alt="" height="30" width="30" />
                  </Link>
                ) : (
                  ""
                )}
              </div>
              <div className="lh-1">
                <h2 className="mb-0">
                  {user.username}{" "}
                  <LevelIconWithTooltip level={dashboardData.level} />{" "}
                </h2>
                <p className="mb-0 d-block">@{user.email}</p>
              </div>
            </div>
            <div className="d-flex gap-2">
              <Link
                to={dashboardData.link}
                className={`btn btn${
                  dashboardData.outlinebutton ? "-outline" : ""
                }-primary btn-sm d-none d-md-block`}
              >
                {dashboardData.linkname}
              </Link>
              <Link
                to={ServiceButton.link}
                className={`btn btn${
                  ServiceButton.outlinebutton ? "-outline" : ""
                }-primary btn-sm d-none d-md-block`}
              >
                {ServiceButton.linkname}
              </Link>
              {/* <Link
                to={ProductButton.link}
                className={`btn btn${
                  ProductButton.outlinebutton ? "-outline" : ""
                }-primary btn-sm d-none d-md-block`}
              >
                {ProductButton.linkname}
              </Link> */}
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default ProfileCover;
