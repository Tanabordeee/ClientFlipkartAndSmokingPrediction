import Image from "next/image";
import MobileNetV2 from "./MobileNetv2Predict";
export default function demoneural() {
  return (
    <div className="flex flex-col  items-center w-full min-h-screen">
      <div className="m-10 border p-10 rounded-lg shadow-lg w-[50%] flex flex-col items-center">
        <h1 className="text-5xl m-5 font-bold">MobileNetV2</h1>
        <Image
          src={"https://img5.pic.in.th/file/secure-sv1/accuracy_loss_plot-4.png"}
          className="rounded-lg w-[100%] "
          width={1200}
          height={500}
          alt="MobileNetV2"
        />
      </div>
      <MobileNetV2 />
    </div>
  );
}
