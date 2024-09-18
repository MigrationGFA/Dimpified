import { Button } from "react-bootstrap";
import Logo from "../../../../src/assets/DIMP logo colored.png";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { showToast } from "../../../Components/Showtoast";

const RegistrationSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleClose = () => {
    navigate("/dimp/agent-page/auth"); // Redirect to login page or any other page
  };

  const handleResendEmail = async () => {
    try {
      // Make API call to resend the email
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/affiliate/resend-email`,
        { email }
      );
      if (response === 200) {
        showToast(response.data.message);
      }
    } catch (error) {
      showToast(
        error.response?.data?.message ||
          "Failed to resend the verification email."
      );
    }
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <img
        src={Logo}
        alt="Logo"
        style={{ width: "100px", marginBottom: "15px" }}
      />
      <h2>Registration Successful</h2>
      <p>
        Check your email <strong> {email} </strong> to verify your account.
      </p>

      <Button
        variant="link"
        onClick={handleResendEmail}
        className="mt-2"
        style={{ color: "blue" }}
      >
        Resend Verification Email
      </Button>

      {/* <Button variant="primary" onClick={handleClose} className="mt-3">
        Return to sign in
      </Button> */}
    </div>
  );
};

export default RegistrationSuccess;
