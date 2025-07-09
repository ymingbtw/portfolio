import { useRef } from "react";
import { useRefContext } from "../contexts/RefProvider";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  return (
    <div className="text-3xl font-semibold flex gap-[1rem] justify-evenly">
      <a
        onClick={() => navigate("/")}
        className="hover:cursor-pointer hover:scale-110 transition duration-300 relative after:content-['] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-blue-600 after:transition-all hover:after:w-full after:duration-300"
      >
        About Me
      </a>
      <a
        onClick={() => navigate("/skills")}
        className="hover:cursor-pointer hover:scale-110 transition duration-300 relative after:content-['] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-blue-600 after:transition-all hover:after:w-full after:duration-300"
      >
        Skills
      </a>
      <a
        onClick={() => navigate("/projects")}
        className="hover:cursor-pointer hover:scale-110 transition duration-300 relative after:content-['] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-blue-600 after:transition-all hover:after:w-full after:duration-300"
      >
        Projects
      </a>
      <a
        onClick={() => navigate("/contact")}
        className="hover:cursor-pointer hover:scale-110 transition duration-300 relative after:content-['] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-blue-600 after:transition-all hover:after:w-full after:duration-300"
      >
        Contact
      </a>
    </div>
  );
}
