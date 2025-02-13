'use client'

import { useState } from "react"
import Swal from "sweetalert2"
import axios from "axios";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
export default function RfPredictionForm(){
    const [price , setprice] = useState<number | string>("");
    const [quantity , setquantity] = useState<number | string>("");
    const [customer_rating , setcustomer_rating] = useState<number | string>("");
    const [result , setresult] = useState<number | string>("No SVM Prediction Result Now")
    const [graphData, setGraphData] = useState({
        labels: ['Price', 'Quantity', 'Customer Rating' , "Total Price"], 
        datasets: [
          {
            label: 'Prediction Result',
            data: [0, 0, 0,0], 
            borderColor: 'rgb(75, 192, 134)',
            backgroundColor: 'rgba(75, 192, 134, 0.2)',
            tension: 0.4,
          },
        ],
      });
      const RFPredict = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/predictRF`, {
                price,
                quantity,
                customer_rating,
            });
            const prediction = res.data.prediction; 
    
            setresult(prediction); 
            const updatedData = {
                ...graphData,
                datasets: [
                    {
                        ...graphData.datasets[0],
                        data: [Number(price), Number(quantity), Number(customer_rating), Number(prediction)], 
                    },
                ],
            };
            setGraphData(updatedData); 
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Send Error",
            });
            console.log("Error", error);
        }
    };
    const showAlert = (message: string) => {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: message,
        });
    };
    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!isNaN(Number(value))) {
            setprice(Number(value));
        } else {
            setprice("");
            showAlert("Please enter a valid number for price.");
        }
    }
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!isNaN(Number(value))) {
            setquantity(Number(value));
        } else {
            setquantity("");
            showAlert("Please enter a valid number for quantity.");
        }
    }
    const handleCustomerRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!isNaN(Number(value))) {
            setcustomer_rating(Number(value));
        } else {
            setcustomer_rating("");
            showAlert("Please enter a valid number for customer rate.");
        }
    }
    return (
        <div className="m-10 border p-10 rounded-lg shadow-lg w-[80%] flex flex-col items-center">
        <h1 className="text-5xl m-5 font-bold">RandomForest Regressor</h1>
        <div className="flex w-[100%] justify-center items-center">
        <form onSubmit={RFPredict} className="flex flex-col gap-5 border w-[50%] p-5 mt-5 rounded-lg">
            <label>PRICE</label>
            <input type="text" 
            className="p-5 border rounded-lg"
            value={price}
            onChange={(e)=> handlePriceChange(e)}
            placeholder="Enter price"
            />
            <label>Quantity</label>
            <input type="text" 
            className="p-5 border rounded-lg"
            value={quantity}
            onChange={(e)=> handleQuantityChange(e)}
            placeholder="Enter Quantity"
            />
            <label>Customer Rate</label>
            <input type="text" 
            className="p-5 border rounded-lg"
            value={customer_rating}
            onChange={(e)=> handleCustomerRateChange(e)}
            placeholder="Enter Customer Rate"
            />
            <button type="submit" className="p-3 bg-green-400 text-white text-xl rounded-lg hover:bg-red-400">Predict</button>
        </form>
        <div className="w-[50%] text-xl text-center m-5">
        <Line 
        data={graphData} 
        options={{ responsive: true ,}}
        />
        <h3 className="mt-5">Prediction Result: {result}</h3>
        </div>
        </div>
        </div>
    )
}