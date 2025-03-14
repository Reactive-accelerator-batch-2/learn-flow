import { Button } from "@/components/ui/button";
import Image from "next/image";

function CourseCard() {

  const courses = [
    {
      id: 1,
      title: "Graphic Design Masterclass - Learn GREAT Design",
      instructor: "Courtney Henry",
      price: 13.0,
      image: "/placeholder.svg?height=80&width=120",
    },
    {
      id: 2,
      title: "Learn Python Programming Masterclass",
      instructor: "Marvin McKinney",
      price: 89.0,
      image: "/placeholder.svg?height=80&width=120",
    },
    {
      id: 3,
      title: "Instagram Marketing 2021: Complete Guide To Instagram",
      instructor: "Jacob Jones",
      price: 32.0,
      originalPrice: 62.0,
      image: "/placeholder.svg?height=80&width=120",
    },
  ];
  
  // Calculate Subtotal
  const subtotal = courses.reduce((sum, course) => sum + course.price, 0);
  
  // Discount Percentage
  const discountPercentage = 8;
  
  // Calculate Discount Amount
  const discountAmount = (subtotal * discountPercentage) / 100;
  
  // Calculate Total Price After Discount
  const total = subtotal - discountAmount;
  
  // console.log("Subtotal:", subtotal.toFixed(2));
  // console.log("Discount (" + discountPercentage + "%):", discountAmount.toFixed(2));
  // console.log("Total:", total.toFixed(2));


  return (
    <div className="border-[1px] border-gray-100 p-4 gap-6 w-[536px]  ">
      <div className="text-base  text-gray-900">Course</div>
      <div className="w-full  flex gap-3 py-4 border-b-[1px] ">
        <Image
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt=""
          width="100"
          height="75"
        />
        <div className="flex flex-col w-full h-20 g-3 ">
          <h4 className="text-sm">
            <span className="text-gray-400 text-sm pr-2">Course by :</span>
            Courtney Henry
          </h4>
          <h5 className="text-sm text-gray-900">
            Graphic Desing Masterclass - Learn GREAT Design
          </h5>
          <p className="text-primary-500 font-medium mt-5">$13.00</p>
        </div>
      </div>

      <div className="mt-2 border-b-[1px] py-2">
        <h2 className="text-gray-900 text-xl font-normal">Order Summery</h2>
        <div className="flex justify-between">
          <p className="text-gray-600">subtotal</p>
          <p className="text-gray-900 font-semibold mb-2">$61.97 USD</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Coupon Discount</p>
          <p className="text-gray-900 font-semibold mb-2">8%</p>
        </div>
      </div>
      <div className="flex justify-between my-4">
        <p className="text-[#202029] font-normal  text-xl" >
          Total
        </p>
        <h1 className="text-[#202029] font-semibold text-2xl">97.56 USD</h1>
      </div>
      <Button className="mt-6 w-full bg-primary-500 text-white px-6 py-5 hover:bg-primary-600">
        Complete Payment
      </Button>
    </div>
  );
}

export default CourseCard;
