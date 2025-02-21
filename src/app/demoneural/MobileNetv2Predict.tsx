"use client";

import axios from "axios";
import { useState } from "react";

export default function MobileNetV2() {
  const [userImage, setUserImage] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const predict = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Please select an image");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/predictimage`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setResult(res.data.result);
      setUserImage(`data:image/png;base64,${res.data.image}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="m-10 border p-10 rounded-lg shadow-lg w-[80%] flex flex-col items-center">
      <h1 className="text-5xl m-5 font-bold">MobileNetV2 DEMO</h1>

      {userImage && <img src={userImage} alt="Uploaded" className="w-64 h-64 object-contain" />}
      <label className="mt-5 text-xl font-semibold">{result}</label>

      <form onSubmit={predict} className="flex flex-col justify-center items-center">
        <input type="file" accept="image/*" onChange={handleFileChange} className="m-5" />
        <button type="submit" className="w-full p-5 mt-5 bg-green-400 text-white text-xl rounded-lg hover:bg-red-400">
          Predict
        </button>
      </form>
    </div>
  );
}
