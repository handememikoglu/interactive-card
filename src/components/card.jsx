import Image from "next/image";
import getCardType from "./cardType";

export default function Card({ cardName, cardNumber, expMonth, expYear, cvc }) {

  const cardType = getCardType(cardNumber);
  return (
    <div className="relative w-[400px] h-[250px]">
      <div className="absolute top-0 right-0 z-0">
        <Image
          src="/bg-card-back.png"
          alt="Card Back"
          width={350}
          height={200}
          className="rounded-xl shadow-lg"
        />
        <p className="absolute top-[85px] right-10 text-white text-sm tracking-widest">
          {cvc || "000"}
        </p>
      </div>

      <div className="absolute top-30 left-0 z-10">
        <Image
          src="/bg-card-front.png"
          alt="Card Front"
          width={350}
          height={200}
          className="rounded-xl shadow-lg"
        />
        <div className="absolute top-6 left-6 text-white w-[300px]">
          <div className="flex justify-between items-center mb-6">
          {cardType === "visa" && (
            <Image src="/visa.svg" alt="visa" width={40} height={20} className="filter grayscale invert" />
          )}
          {cardType === "mastercard" && (
            <Image src="/mastercard.svg" alt="mastercard" width={40} height={20} className="filter grayscale invert" />
          )}
          </div>
          <p className="text-lg tracking-widest mb-6">
            {cardNumber ? formatCardNumber(cardNumber) :  "0000 0000 0000 0000"}
          </p>
          <div className="flex justify-between text-sm uppercase">
            <p>{cardName || "Jane Appleseed"}</p>
            <p>{(expMonth || "00") + "/" + (expYear || "00")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function formatCardNumber(number){
  return number.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
}