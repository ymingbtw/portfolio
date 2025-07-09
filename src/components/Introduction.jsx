import { useRefContext } from "../contexts/RefProvider";

export default function ({ children }) {
  return <div className="m-[5rem] flex flex-col gap-[1rem]">{children}</div>;
}
