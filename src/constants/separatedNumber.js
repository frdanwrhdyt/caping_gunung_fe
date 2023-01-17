export default function SeparatedNumber(number) {
  if (typeof number === "number") {
    var parts = number.toString().split(".");
    const numberPart = parts[0];
    const decimalPart = parts[1];
    const thousands = /\B(?=(\d{3})+(?!\d))/g;
    const result =
      numberPart.replace(thousands, ".") +
      (decimalPart ? "," + decimalPart : "");
    return (
      <div>
        Rp
        {result}
      </div>
    );
  } else {
    return number;
  }
}
