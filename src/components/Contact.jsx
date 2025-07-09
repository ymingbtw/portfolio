import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <div className="m-[5rem] flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <div className="flex gap-3">
        <span className="font-semibold">Email:</span>
        <span>eming.chhoem05@gmail.com</span>
      </div>
      <div className="flex gap-3">
        <span className="font-semibold">Phone:</span>
        <span>088 5317 854</span>
      </div>
    </div>
  );
}
