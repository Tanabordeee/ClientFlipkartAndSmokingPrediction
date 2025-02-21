"use client";

import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { Line } from "react-chartjs-2";
import { HashLoader } from "react-spinners";
export default function MobileNetV2() {
  const [userImage, setUserImage] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const predict = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file)
      return Swal.fire({
        icon: "error",
        title: "Select Image",
      });

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/predictimage`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setResult(res.data.result);
      setUserImage(`data:image/png;base64,${res.data.image}`);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Send Error",
      });
      console.error("Error:", error);
    }
  };

  return (
    <div className="m-10 border p-10 rounded-lg shadow-lg w-[50%] flex flex-col items-center">
      <h1 className="text-5xl m-5 font-bold">MobileNetV2 DEMO</h1>

      {userImage && (
        <img
          src={userImage}
          alt="Uploaded"
          className="w-64 h-64 object-contain"
        />
      )}
      <label className="mt-5 text-xl font-semibold">{result}</label>
      {loading ? (
        <div className="flex justify-center items-center">
          <HashLoader color="#252020" size={80} />
        </div>
      ) : (
        <form
          onSubmit={predict}
          className="flex flex-col justify-center text-center w-[50%] items-center"
        >
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  PNG, JPG (BEST CHOICE. 32x32px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>

          <button
            type="submit"
            className="w-full p-5 mt-5 flex justify-center items-center bg-green-400 text-white text-xl rounded-lg hover:bg-red-400"
          >
            Predict
          </button>
        </form>
      )}
    </div>
  );
}
