import { createContext, useContext, useRef } from "react";

const refContext = createContext();
export default function RefProvider({ children }) {
  const aboutMeRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const contactsRef = useRef();
  const resumeRef = useRef();
  return (
    <refContext.Provider
      value={{ aboutMeRef, skillsRef, projectsRef, contactsRef, resumeRef }}
    >
      {children}
    </refContext.Provider>
  );
}
export function useRefContext() {
  return useContext(refContext);
}
