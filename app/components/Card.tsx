function Card({ text = "Nothing to do" }) {
  return (
    <div className="border rounded-md border-white-200 bg-red p-2 d-flex mt-4">
      {text}
    </div>
  );
}
export default Card;
