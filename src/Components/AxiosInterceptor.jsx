// authInterceptors.jsx
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateAccessToken } from "../features/login";

const AxiosInterceptor = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.authentication.user);
  const authFetch = axios.create({
    withCredentials: true,
  });

  authFetch.interceptors.request.use(
    (config) => {
      const accessToken = selector.accessToken;
      const refreshToken = selector.refreshToken;

      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }

      if (refreshToken) {
        config.headers["Refresh-Token"] = `Bearer ${refreshToken}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  authFetch.interceptors.response.use(
    (response) => {
      const newAccessToken =
        response.headers["authorization"]?.split("Bearer ")[1];
      if (newAccessToken) {
        console.log(newAccessToken);
        dispatch(updateAccessToken(newAccessToken));
      }
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        navigate("/creator/signin");
      }

      return Promise.reject(error);
    }
  );

  return authFetch;
};

export default AxiosInterceptor;
