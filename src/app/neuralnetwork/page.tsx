import Image from "next/image";

export default function NeuralBlog() {
  return (
    <div className="flex flex-col justify-center items-center mt-5 gap-5 m-5">
      {/* First Section */}
      <div className="w-[50%] p-6 m-10 border shadow-lg rounded-xl text-center bg-white">
        <p className="text-lg">
          ผมได้เริ่มจากการหาข้อมูลภายในเว็บไซต์ Kaggle แล้วได้ไปเจอข้อมูลของ{" "}
          <b className="hover:underline text-blue-600">
            <a
              href="https://www.kaggle.com/datasets/sujaykapadnis/smoking"
              target="_blank"
              rel="noopener noreferrer"
            >
              Smoker Detection [Image] classification Dataset
            </a>
          </b>
        </p>

        <div className="mt-4 text-left">
          <p className="font-bold text-xl">📊 เป็นเนื้อหาเกี่ยวกับ</p>
          <p className="mt-2">
            ชุดข้อมูลประกอบด้วยภาพจำนวน 1120 ภาพ แบ่งออกเป็นสองคลาสเท่ากัน โดยจะเป็นรูปคนสูบบุรี่กับคนที่ไม่ได้สูบบุรี่
          </p>
          <p className="font-bold text-xl mt-4">📌 Features มีดังนี้</p>
          <ul className="pl-6 pt-4 list-disc">
            <li>
              <b>คนสูบบุรี่</b> – จำนวนทั้งหมด 560 ภาพ
            </li>
            <li>
              <b>คนไม่สูบบุรี่</b> – จำนวนทั้งหมด 560 ภาพ
            </li>
          </ul>
          <div className="flex justify-center m-10">
            <Image
              src={
                "https://storage.googleapis.com/kaggle-datasets-images/4012063/6981583/d3f15c3b07b270770fba6918c6ebee94/dataset-cover.jpeg?t=2023-11-16-13-15-47"
              }
              width={600}
              height={600}
              alt="Picture of the author"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="w-[50%] p-10 border shadow-lg rounded-xl text-center bg-white m-5">
        <p className="text-lg m-10">
          ผมเริ่มจากการกำหนด Path ของไฟล์ที่อยู่ใน Kaggle 🗂️
        </p>
        <div className="flex justify-center mb-5">
          <Image
            src={
              "https://img5.pic.in.th/file/secure-sv1/Screenshot-2025-02-20-123631.png"
            }
            className="rounded-lg"
            width={600}
            height={400}
            alt="find path"
          />
        </div>
        <p className="text-lg m-10">
          ต่อมาผมเลยโหลดข้อมูลจาก folder แล้ว loop หา file ท้ายด้วย .jpg หรือ .png กับ กำหนด label แยกหา smoking กับ notsmoking แล้วค่อยส่ง dataframe ออกไป 🔄
        </p>
        <div className="flex justify-center mb-5">
          <Image
            src={
              "https://img5.pic.in.th/file/secure-sv1/Screenshot-2025-02-20-124641.png"
            }
            className="rounded-lg"
            width={600}
            height={400}
            alt="add to folder"
          />
        </div>

        <p className="text-lg m-10">
          ผมทำการเช็คหัวหางของ Train Data 📋
        </p>
        <div className="flex justify-center mb-5">
          <Image
            src={"https://img2.pic.in.th/pic/Screenshot-2025-02-20-141536.png"}
            className="rounded-lg"
            width={600}
            height={400}
            alt="find head and tail"
          />
        </div>

        <p className="text-lg m-10">
          ดู row และ column ของ train data, val data และ test data แล้วนำมารวมกันเป็นอันเดียว 📊
        </p>
        <div className="flex justify-center mb-5">
          <Image
            src={
              "https://img2.pic.in.th/pic/Screenshot-2025-02-20-142004.png"
            }
            className="rounded-lg"
            width={600}
            height={400}
            alt="plot box-plot"
          />
        </div>

        <p className="text-lg m-10">
          หลังจากนั้นผมก็ลองเริ่ม ดู head ของข้อมูลหลังรวมกันพร้อมดู row column และ ดู info พบว่า data type มันเป็น object 📄
        </p>
        <div className="flex justify-center mb-5">
          <Image
            src={"https://img5.pic.in.th/file/secure-sv1/Screenshot-2025-02-20-142230.png"}
            className="rounded-lg"
            width={600}
            height={400}
            alt="calculate"
          />
        </div>

        <p className="text-lg m-10">
          แล้วผมจึงแปลง data type ให้มันจาก object to string 🔄
        </p>
        <div className="flex justify-center mb-5">
          <Image
            src={"https://img2.pic.in.th/pic/Screenshot-2025-02-20-144840.png"}
            className="rounded-lg"
            width={600}
            height={400}
            alt="split"
          />
        </div>

        <p className="text-lg m-10">
          หลังจากนั้นผมก็หาค่าที่เป็น null 🔍
        </p>
        <div className="flex justify-center m-10">
          <Image
            src={"https://img2.pic.in.th/pic/Screenshot-2025-02-20-145207.png"}
            className="rounded-lg"
            width={600}
            height={400}
            alt="split"
          />
        </div>

        <p className="text-lg mb-5">
          หลังจากนั้นผมก็ทำการสร้างตาราง encoding ข้อมูล not smoking กับ smoking ให้อยู่ในรูปแบบ 1 กับ 0 เพื่อให้นำมาใช้ได้ง่าย 🔢
        </p>
        <div className="flex justify-center mb-5">
          <Image
            src={"https://img5.pic.in.th/file/secure-sv1/Screenshot-2025-02-20-145722.png"}
            className="rounded-lg"
            width={600}
            height={400}
            alt="split"
          />
        </div>

        <p className="text-lg mb-5">
          หลังจากนั้นผมก็แบ่งข้อมูลออกมาเป็น train data กับ temp data จาก combined_data โดยอิงตาม column label_encoded และอีกอัน แบ่งข้อมูลจาก tempdata ออกมาไว้เป็น validation กับ test 📂
        </p>
        <div className="flex justify-center mb-5">
          <Image
            src={"https://img2.pic.in.th/pic/Screenshot-2025-02-20-150023.png"}
            className="rounded-lg"
            width={600}
            height={400}
            alt="split"
          />
        </div>

        <p className="text-lg mb-5">
          หลังจากนั้นตัว Train Set ผมก็ทำการ rescale และทำ data augmentation เช่น หมุน, เลื่อน, ซูม, shear, flip เพื่อเพิ่มความหลากหลายของข้อมูลในการฝึก แต่สำหรับ Validation Set และ Test Set จะไม่มี augmentation 🖼️
        </p>
        <div className="flex flex-col items-center justify-center mb-5">
          <Image
            src={"https://img5.pic.in.th/file/secure-sv1/Screenshot-2025-02-21-173527.png"}
            className="rounded-t-lg"
            width={600}
            height={400}
            alt="Optimize Image"
          />
          <Image
            src={"https://img5.pic.in.th/file/secure-sv1/Screenshot-2025-02-21-173323.png"}
            className="rounded-b-lg"
            width={600}
            height={400}
            alt="split"
          />
        </div>

        <p className="text-lg mb-5">
          หลังจากนั้นผมก็โหลด Model MobileNetV2 โดยไม่มี pre-trained weights และตัดชั้น Fully Connected ออก กำหนดขนาด input เป็นภาพ 32 x 32 pixels และ 3 คือ RGB ทั้งนี้ที่ใช้ model นี้และใช้รูปในขนาด 32 x 32 เพราะทรัพยากรณ์ฝั่ง server นั้นมีจำกัดและไม่รองรับ model ขนาดใหญ่ โดยจะมีการ Freeze Layers ของ MobileNetV2 จะทำให้แค่ดึง Feature จากภาพ แต่จะไม่ถูกปรับค่า Weight ในการ Train จากนั้นสร้างโมเดลโดยเพิ่ม Layer ใหม่ ใช้ Global Average Pooling เพื่อแปลง Feature Map ของ MobileNetV2 ให้เป็นเวกเตอร์เดียว และใช้ Dense Layer 1 นิวรอน พร้อมกับ Sigmoid Activation เพื่อจำแนกข้อมูลออกเป็น 2 คลาส หลังจากนั้นก็คอมไพล์โมเดล โดยใช้ Adam Optimizer เป็นตัวปรับค่าถ่วงน้ำหนักของโมเดล และใช้ Binary Crossentropy Loss เนื่องจากเป็นปัญหาจำแนกสองคลาส และผมก็ได้สร้าง EarlyStopping เพื่อลด Overfitting โดยหยุดการฝึกเมื่อค่า val_loss ไม่ลดลงติดต่อกัน 5 รอบ และใช้ restore_best_weights=True เพื่อย้อนคืนค่า Weight ที่ดีที่สุดก่อน Overfitting จากนั้นก็ฝึกโมเดล 🧠
        </p>
        <div className="flex justify-center mb-5">
          <Image
            src={"https://img2.pic.in.th/pic/Screenshot-2025-02-21-173626.png"}
            className="rounded-lg"
            width={600}
            height={400}
            alt="VGG16"
          />
        </div>

        <p className="text-lg mb-5">
          หลังจากฝึกโมเดลเสร็จผมก็ unfreeze บางเลเยอร์ของ MobileNetV2 และคอมไพล์โมเดลใหม่ด้วยการลด learning_rate หลังจากนั้นฝึกโมเดลอีกรอบเราเรียกวิธีนี้ว่า fine-tuning 🔧
        </p>
        <div className="flex justify-center mb-5">
          <Image
            src={"https://img5.pic.in.th/file/secure-sv1/Screenshot-2025-02-21-174540.png"}
            className="rounded-lg"
            width={600}
            height={400}
            alt="fine tuning"
          />
        </div>
      </div>
    </div>
  );
}