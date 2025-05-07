export default function getCardType(number){
    const typeOfCard = number.replace(/\s/g, "");
    if(/^4/.test(typeOfCard)) return "visa";
    if(/^(5[1-5]|2[2-7])/.test(typeOfCard)) return "mastercard";

    return "unknown";
}