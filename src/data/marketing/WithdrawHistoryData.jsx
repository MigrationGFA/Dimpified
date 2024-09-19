import { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/AuthContext";
import axios from "axios";

export const WithdrawHistoryData = () => {
	const { userId } = useGlobalContext();
	const [historyData, setHistoryData] = useState([]);
  
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 	  try {
	// 		const response = await axios.get(
	// 		  `https://unleashified-backend.azurewebsites.net/api/v1/get-my-withdrawHistory/${userId}`
	// 		);
	  
	// 		// console.log(response.data); // Log response data
	  
	// 		if (response.data.history && response.data.history.length > 0) {
	// 		  const transformedData = response.data.history.map(item => ({
	// 			id: formatId(item.id),
	// 			status: item.status,
	// 			amount: item.amount,
	// 			invoice: item.invoice,
	// 			date: formatDate(item.requestDate),
	// 			method: "Bank",
	// 			jobTitle: item.jobTitle,
	// 		  }));
	  
	// 		  setHistoryData(transformedData);
	// 		} else {
	// 		  console.log('No history found');
	// 		}
	// 	  } catch (error) {
	// 		console.error('Error fetching data:', error);
	// 	  }
	// 	};
	  
	// 	fetchData();
	//   }, [userId]);
	  
  
	// Function to format the date
	const formatDate = dateString => {
	  const date = new Date(dateString);
	  const options = { month: 'long', day: 'numeric', year: 'numeric' };
	  return date.toLocaleDateString('en-US', options);
	};
  
	// Function to format the id with leading zeros
	const formatId = id => {
	  return id.toString().padStart(4, '0');
	};
  
	// Return the fetched data directly
	return historyData;
  };



//

export default WithdrawHistoryData;
