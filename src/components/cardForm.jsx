import { z } from "zod";
import { useState } from "react";

// Zod doğrulama şeması
const cardFormSchema = z.object({
  cardName: z.string().min(1, "Cardholder name is required"),
  cardNumber: z.string()
    .regex(/^\d{4} \d{4} \d{4} \d{4}$/, "Card number must be in format: 1234 5678 9123 0000"),
  expMonth: z.string()
    .regex(/^(0[1-9]|1[0-2])$/, "Month must be between 01 and 12"),
  expYear: z.string()
    .regex(/^\d{2}$/, "Year must be 2 digits"),
  cvc: z.string()
    .regex(/^\d{3}$/, "CVC must be 3 digits"),
});

export default function CardForm({
  cardName, setCardName,
  cardNumber, setCardNumber,
  expMonth, setExpMonth,
  expYear, setExpYear,
  cvc, setCvc, onSuccess
}) {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = cardFormSchema.safeParse({
      cardName,
      cardNumber,
      expMonth,
      expYear,
      cvc,
    });


    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(fieldErrors);
      console.log("Doğrulama hataları:", fieldErrors);
      return;
    }

    setErrors({});
    console.log("Form başarıyla gönderildi!", result.data);
    onSuccess();
  };

  const handleCardNumberChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "").slice(0, 16);
    const formatted = rawValue.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(formatted);
  };

  return (
    <div>
        <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md w-[350px]"
        >
        <div className="flex flex-col">
          <label className="text-sm mb-1 text-gray-700">Cardholder Name</label>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            className={`border rounded-md text-gray-900 p-2 focus:outline-none focus:ring-2 ${
              errors.cardName ? 'border-red-500 focus:ring-red-500' : 'focus:ring-indigo-500'
            }`}
            required
          />
          {errors.cardName && (
            <span className="text-red-500 text-sm mt-1 ">{errors.cardName[0]}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1 text-gray-700">Card Number</label>
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            value={cardNumber}
            onChange={handleCardNumberChange}
            className={`border rounded-md text-gray-900 p-2 focus:outline-none focus:ring-2 ${
              errors.cardNumber ? 'border-red-500 focus:ring-red-500' : 'focus:ring-indigo-500'
            }`}
            required
          />
          {errors.cardNumber && (
            <span className="text-red-500 text-sm mt-1 ">{errors.cardNumber[0]}</span>
          )}
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col w-1/2">
            <label className="text-sm mb-1 text-gray-700">Exp. Date (MM/YY)</label>
            <div className="flex gap-2">
            <input
              type="text"
              placeholder="MM"
              value={expMonth}
              onChange={(e) => setExpMonth(e.target.value)}
              className={`border text-gray-900 rounded-md p-2 w-1/2 focus:outline-none focus:ring-2 ${
                errors.expMonth ? 'border-red-500 focus:ring-red-500' : 'focus:ring-indigo-500'
              }`}
              required
            />

            <input
              type="text"
              placeholder="YY"
              value={expYear}
              onChange={(e) => setExpYear(e.target.value)}
              className={`border text-gray-900 rounded-md p-2 w-1/2 focus:outline-none focus:ring-2 ${
                errors.expYear ? 'border-red-500 focus:ring-red-500' : 'focus:ring-indigo-500'
              }`}
              required
            />

            </div>
            {(errors.expMonth || errors.expYear) && (
              <span className="text-red-500 text-sm mt-1">
                {errors.expMonth?.[0] || errors.expYear?.[0]}
              </span>
            )}
          </div>

          <div className="flex flex-col w-1/2">
            <label className="text-sm mb-1 text-gray-700">CVC</label>
            <input
              type="text"
              placeholder="e.g. 123"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              className={`border rounded-md text-gray-900 p-2 focus:outline-none focus:ring-2 ${
                errors.cvc ? 'border-red-500 focus:ring-red-500' : 'focus:ring-indigo-500'
              }`}
              required
            />

            {errors.cvc && (
              <span className="text-red-500 text-sm mt-1">{errors.cvc[0]}</span>
            )}
          </div>
        </div>

          <button
          type="submit"
          className="mt-4 bg-gray-900 text-white py-2 rounded-md hover:bg-gray-700 transition"
          >
          Confirm
          </button>
        </form> 
    </div>
  );
}
