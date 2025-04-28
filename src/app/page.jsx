"use client"
import { useState } from "react";
import Card from "../components/card";
import CardForm from "../components/cardForm";

export default function Home() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");

  return (
    <main className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 bg-gray-100 p-6">
      <Card 
        cardName={cardName} 
        cardNumber={cardNumber} 
        expMonth={expMonth} 
        expYear={expYear} 
        cvc={cvc} 
      />
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
      />
    </main>
  );
}
