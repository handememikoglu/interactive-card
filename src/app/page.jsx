"use client"
import { useState } from "react";
import Card from "../components/card";
import CardForm from "../components/cardForm";
import Image from "next/image";

export default function Home() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [submit, setSubmit] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center  px-4 py-10">
        <Card
          cardName={cardName}
          cardNumber={cardNumber}
          expMonth={expMonth}
          expYear={expYear}
          cvc={cvc}
        />
      </div>
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center py-10">
        {!submit ? (
          <CardForm
          cardName={cardName}
          setCardName={setCardName}
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          expMonth={expMonth}
          setExpMonth={setExpMonth}
          expYear={expYear}
          setExpYear={setExpYear}
          cvc={cvc}
          setCvc={setCvc}
          onSuccess={() => setSubmit(true)}
        />
        ) : (
          <div className="text-center">
            <Image src="/correct-icon.png" alt="correct-icon" width={60} height={30} className="m-auto "/>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 m-2">Thank You!</h2>
            <p className="text-gray-600">We've added your card details</p>
            <button
              onClick={() => setSubmit(false)}
              className="mt-6 px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition"
            >
              Add Another Card
            </button>
          </div>

        )}
      
      </div>
    </div>
  );
}
