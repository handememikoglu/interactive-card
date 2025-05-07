import Image from "next/image";

export default function Card({ cardName, cardNumber, expMonth, expYear, cvc }) {
  return (
    <div className="relative w-[350px] h-[200px]">
      <Image
        src="/bg-card-front.png"
        alt="Card Front"
        width={350}
        height={200}
        className="rounded-xl shadow-lg"
      />
      <div className="absolute top-6 left-6 text-white w-[300px]">
        <p className="text-lg tracking-widest mb-6">
          {cardNumber || "0000 0000 0000 0000"}
        </p>
        <div className="flex justify-between text-sm uppercase">
          <p>{cardName || "Jane Appleseed"}</p>
          <p>{(expMonth || "00") + "/" + (expYear || "00")}</p>
        </div>
      </div>

    </div>
  );
}
