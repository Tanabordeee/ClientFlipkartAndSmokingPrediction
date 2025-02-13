import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-5 gap-5 m-5">
      <div className="w-[50%] p-6 m-10 border shadow-lg rounded-xl text-center bg-white">
        <p className="text-lg">
          ผมได้เริ่มจากการหาข้อมูลภายในเว็บไซต์ Kaggle แล้วได้ไปเจอข้อมูลของ{" "}
          <b className="hover:underline text-blue-600">
            <a
              href="https://www.kaggle.com/datasets/nitingoyal8/flipkart-sales-data"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flipkart Sales Data
            </a>
          </b>
        </p>

        <div className="mt-4 text-left">
          <p className="font-bold text-xl">📊 เป็นเนื้อหาเกี่ยวกับ</p>
          <p className="mt-2">
            ธุรกรรมการขายของ Flipkart จำนวน 1,000 รายการที่สร้างขึ้นแบบสุ่ม
            โดยมีรายละเอียดเกี่ยวกับสินค้า ราคา ปริมาณที่ขาย วันที่สั่งซื้อ
            วิธีการชำระเงิน และคะแนนรีวิวจากลูกค้า
          </p>
          <p className="font-bold text-xl mt-4">📌 Features มีดังนี้</p>
          <ul className="pl-6 pt-4 list-disc">
            <li>
              <b>Order ID</b> – Unique order identifier
            </li>
            <li>
              <b>Product Name</b> – Name of the Flipkart product
            </li>
            <li>
              <b>Category</b> – Product category (Electronics, Clothing, etc.)
            </li>
            <li>
              <b>Price (INR)</b> – Product price (₹100 - ₹50,000)
            </li>
            <li>
              <b>Quantity Sold</b> – Number of units sold (1-5)
            </li>
            <li>
              <b>Total Sales (INR)</b> – Revenue from the sale (Price *
              Quantity)
            </li>
            <li>
              <b>Order Date</b> – Purchase date (last 1 year)
            </li>
            <li>
              <b>Payment Method</b> – Mode of payment (UPI, COD, Card, etc.)
            </li>
            <li>
              <b>Customer Rating</b> – Product rating (1.0 - 5.0)
            </li>
          </ul>
          <div className="flex justify-center">
            <Image
              src={
                "https://www.channelengine.com/hubfs/Logos/Marketplaces/flipkart-marketplace-logo-600x600%20copy.jpg"
              }
              width={600}
              height={600}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <div className="w-[50%] p-10 border shadow-lg rounded-xl text-center bg-white m-5">
        <p className="text-lg m-10">
          ผมได้เตรียมข้อมูลโดยเริ่มจากการดู head 🧠
        </p>
        <div className="flex justify-center mb-5">
          <Image
            src={
              "https://img5.pic.in.th/file/secure-sv1/Screenshot-2025-02-12-224728.png"
            }
            className="rounded-lg"
            width={600}
            height={400}
            alt="find header"
          />
        </div>
        <p className="text-lg m-10">ต่อมาผมเลยเริ่มดูข้อมูลจากส่วน tail 💪</p>
        <div className="flex justify-center mb-5">
          <Image
            src={
              "https://img5.pic.in.th/file/secure-sv1/Screenshot-2025-02-12-230217.png"
            }
            className="rounded-lg"
            width={600}
            height={400}
            alt="find tail"
          />
        </div>

        <p className="text-lg m-10">
          จากนั้นผมก็ดูในแต่ละ column ว่ามีค่าเป็น null ไหมถ้ามีให้ sum
          ออกมาว่ามีกี่อัน 🤔
        </p>
        <div className="flex justify-center mb-5">
          <Image
            src={"https://img2.pic.in.th/pic/Screenshot-2025-02-12-230549.png"}
            className="rounded-lg"
            width={600}
            height={400}
            alt="find null"
          />
        </div>

        <p className="text-lg m-10">
          ผมเลยลองทำ boxplot ของค่า Total Sale ออกมาพบว่ามีค่า outlier 😱
        </p>
        <div className="flex justify-center mb-5">
          <Image
            src={
              "https://img5.pic.in.th/file/secure-sv1/Screenshot-2025-02-12-231045.png"
            }
            className="rounded-lg"
            width={600}
            height={400}
            alt="plot box-plot"
          />
        </div>

        <p className="text-lg m-10">
          ผมเลยคำนวณหา ควอร์ไทล์ของ Q1 และ Q3 เพื่อนำมาคำนวณหา IQR จากนั้น
          ผมก็หาค่าต่ำสุดที่เป็นไปได้ กับ ค่าสูงสุดที่เป็นไปได้
          แล้วดูว่ามีค่าไหนเกินหรือต่ำกว่าค่าเป็นไปได้ที่คิดมาไหมถ้ามีให้ drop
          row นั้นทิ้ง จากนั้นผมก็ดูจำนวน row ที่เหลือจาก 1000 ซึ่งเหลือ 984
        </p>
        <div className="flex justify-center mb-5">
          <Image
            src={"https://img2.pic.in.th/pic/Screenshot-2025-02-12-231337.png"}
            className="rounded-lg"
            width={600}
            height={400}
            alt="calculate"
          />
        </div>

        <p className="text-lg m-10">
          ผมได้กำหนด Price , Quantity Sold , Customer Rating เป็น ฟีเจอร์
          ใส่ลงใน x และผมได้กำหนด Total Sales เป็น label แทนลงใน y
          หลังจากนั้นก็ทำการ split ข้อมูลแบ่งเป็น train 80% กับ test 20% โดยให้
          random state = 42
        </p>
        <div className="flex justify-center mb-5">
          <Image
            src={"https://img2.pic.in.th/pic/Screenshot-2025-02-12-232341.png"}
            className="rounded-lg"
            width={600}
            height={400}
            alt="split"
          />
        </div>

        <p className="text-lg m-10">
          หลังจากนั้นผมก็เรียกใช้ model Support Vector Regression
          โดยเป็นการใช้แนวคิดของ Support Vector Machine กับ Regression
          แทนที่จะใช้กับ Classification โดย ในการประมาณค่าของข้อมูล
          จะให้ค่าคลาดเคลื่อนอยู่ในช่วงที่กำหนด โดยถ้า จุดข้อมูลที่อยู่ในระยะ ε
          ถือว่าไม่มี error แต่ถ้า จุดที่อยู่ นอกช่วง ε จะถูก penalized ด้วย
          loss function หลังจากนั้นผมก็ประเมิน model ด้วย ค่า mean absolute
          error
        </p>
        <div className="flex justify-center m-10">
          <Image
            src={"https://img2.pic.in.th/pic/Screenshot-2025-02-12-233612.png"}
            className="rounded-lg"
            width={600}
            height={400}
            alt="split"
          />
        </div>

        <p className="text-lg mb-5">
          หลังจากนั้นผมก็เรียกใช้ model RandomForest เป็นอัลกอริธึม Machine
          Learning ที่ใช้ การรวมกันของหลายๆ Decision Trees โดย สร้างหลายๆ
          Decision Trees แต่ละต้นไม้เรียนรู้ข้อมูลที่สุ่มมา
          ทำให้มีความแตกต่างกัน จากนั้น แต่ละต้นไม้เลือกใช้ บางฟีเจอร์เท่านั้น
          ทำให้ต้นไม้แต่ละต้นไม่เหมือนกัน สุดท้าย รวมผลลัพธ์ของทุกต้นไม้ โดยใช้
          ใช้ค่าเฉลี่ยของทุกต้นไม้เป็นค่าทำนายสุดท้าย หลังจากนั้นผมก็ประเมิน
          model ด้วย ค่า mean absolute error
        </p>
        <div className="flex justify-center mb-5">
          <Image
            src={"https://img2.pic.in.th/pic/Screenshot-2025-02-12-234203.png"}
            className="rounded-lg"
            width={600}
            height={400}
            alt="split"
          />
        </div>
      </div>
    </div>
  );
}
