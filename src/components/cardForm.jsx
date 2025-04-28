export default function CardForm({
    cardName, setCardName,
    cardNumber, setCardNumber,
    expMonth, setExpMonth,
    expYear, setExpYear,
    cvc, setCvc,
  }) {
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form gönderildi!");
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md w-[350px]">
        {/* Cardholder Name */}
        <div className="flex flex-col">
          <label className="text-sm mb-1 text-gray-700">Cardholder Name</label>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            className="border rounded-md text-gray-900 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
  
        {/* Card Number */}
        <div className="flex flex-col">
          <label className="text-sm mb-1 text-gray-700">Card Number</label>
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="border rounded-md text-gray-900 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
  
        {/* Expiry and CVC */}
        <div className="flex gap-4">
          <div className="flex flex-col w-1/2">
            <label className="text-sm mb-1 text-gray-700">Exp. Date (MM/YY)</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="MM"
                value={expMonth}
                onChange={(e) => setExpMonth(e.target.value)}
                className="border text-gray-900 rounded-md p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                type="text"
                placeholder="YY"
                value={expYear}
                onChange={(e) => setExpYear(e.target.value)}
                className="border text-gray-900 rounded-md p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>
  
          <div className="flex flex-col w-1/2">
            <label className="text-sm mb-1 text-gray-700">CVC</label>
            <input
              type="text"
              placeholder="e.g. 123"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              className="border rounded-md text-gray-900 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
        </div>
  
        <button type="submit" className="mt-4 bg-gray-900 text-white py-2 rounded-md hover:bg-gray-700 transition">
          Confirm
        </button>
      </form>
    );
  }
  