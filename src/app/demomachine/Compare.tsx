"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import { Suspense } from "react";
export default function CompareModel() {
  const [mae_svm, setmae_svm] = useState(0);
  const [mae_rf, setmae_rf] = useState(0);
  const [plot_svm, setPlotSvm] = useState("");
  const [plot_rf, setPlotRf] = useState("");
  const getCompare = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/showmodels`
      );
      const svm_model = {
        photo: res.data.plot_svm_base64,
        mae: res.data.mae_svm,
      };
      const rf_model = {
        photo: res.data.plot_rf_base64,
        mae: res.data.mae_rf,
      };
      setmae_rf(rf_model.mae);
      setmae_svm(svm_model.mae);
      setPlotSvm(svm_model.photo);
      setPlotRf(rf_model.photo);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Can't Get Plot",
      });
      console.log(error);
    }
  };
  useEffect(() => {
    getCompare();
  }, []);
  return (
    <div className="text-center w-[80%] m-10 border p-10 rounded-lg shadow-lg">
      <h1 className="text-5xl m-5 font-bold mb-6">COMPARE TWO MODELS</h1>
      <div className="flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-xl ">Support Vector Regression</h1>
          <Suspense fallback={<>Loading...</>}>
          {plot_svm && (
            <Image
              src={`data:image/png;base64,${plot_svm}`}
              alt="SVM Model Plot"
              width={600} // Set your preferred width
              height={800} // Set your preferred height
            />
          )}
          <p className="mt-5">MAE: {mae_svm}</p>
          </Suspense>
        </div>
        <div className="text-center">
          <h1 className="text-xl ">RandomForest Regressor</h1>
          <Suspense fallback={<>Loading...</>}>
          {plot_rf && (
            <Image
              src={`data:image/png;base64,${plot_rf}`}
              alt="RandomForest Model Plot"
              width={600}
              height={800}
            />
          )}
          <p className="mt-5">MAE: {mae_rf}</p>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
