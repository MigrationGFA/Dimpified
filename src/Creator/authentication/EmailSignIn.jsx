import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Spinner, Image } from "react-bootstrap";
import Logo from "../../assets/DIMP logo colored.png";
import { emailLogin } from '../../features/login';
import { useNavigate } from 'react-router-dom'; 

const schema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
  });
  
  const EmailSignIn = () => {
    const { isLoading, error, user } = useSelector((state) => state.authentication);
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialize navigate
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });
  
    const onSubmit = async (data, e) => {
      e.preventDefault();
      setErrorMessage("");
  
      try {
        const resultAction = await dispatch(emailLogin(data.email)); // Pass email as a string
  
        if (emailLogin.rejected.match(resultAction)) {
          const errorPayload = resultAction.payload;
          setErrorMessage(errorPayload);
        } else if (emailLogin.fulfilled.match(resultAction)) {
          // Login successful
          console.log("Login successful:", resultAction.payload);
  
          if (resultAction.payload.data.interest === "no") {
            navigate("/creator/onboard");
          } else {
            navigate("/creator/dashboard/overview");
          }
        }
      } catch (error) {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    };
  
    return (
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card p-5 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
          {/* Logo at the top */}
          <div className="mb-4 text-center">
            <Image src={Logo} alt="logo" style={{ height: "60px" }} className=""/>
          </div>
  
          <h2 className="mb-4 text-center">Sign In</h2>
  
          {/* Display error message */}
          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}
  
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group text-left">
              <label htmlFor="email" className="text-left">Email</label>
              <input
                type="email"
                id="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                {...register("email")}
                placeholder="Enter your email"
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>
  
            <button
              type="submit"
              className="btn btn-primary w-100 mt-4"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  <span className="ml-2">Signing in...</span>
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default EmailSignIn;