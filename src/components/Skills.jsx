import { useRefContext } from "../contexts/RefProvider";

export default function Skills() {
  return (
    <div className="m-[5rem] grid grid-cols-3 gap-[2rem]">
      <div className="flex flex-col">
        <h1 className="text-blue-600 text-2xl font-bold mb-[1rem]">Language</h1>
        <ul className="list-disc list-inside text-gray-700 text-lg">
          <li>Javascript</li>
          <li>PHP</li>
          <li>SQL</li>
        </ul>
      </div>
      <div className="flex flex-col">
        <h1 className="text-blue-600 text-2xl font-bold mb-[1rem]">
          Front End
        </h1>
        <ul className="list-disc list-inside text-gray-700 text-lg">
          <li>React</li>
          <li>Tailwind</li>
        </ul>
      </div>
      <div className="flex flex-col">
        <h1 className="text-blue-600 text-2xl font-bold mb-[1rem]">Back End</h1>
        <ul className="list-disc list-inside text-gray-700 text-lg">
          <li>Laravel</li>
          <li>NodeJS</li>
        </ul>
      </div>
      <div className="flex flex-col">
        <h1 className="text-blue-600 text-2xl font-bold mb-[1rem]">Database</h1>
        <ul className="list-disc list-inside text-gray-700 text-lg">
          <li>Mysql</li>
        </ul>
      </div>
      <div className="flex flex-col">
        <h1 className="text-blue-600 text-2xl font-bold mb-[1rem]">Other</h1>
        <ul className="list-disc list-inside text-gray-700 text-lg">
          <li>Restful API</li>
        </ul>
      </div>
    </div>
  );
}
