export default function Movies() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <img src="/movie.PNG" className="w-[20rem]" alt="" />
        <h1 className="font-bold text-2xl">Movies streaming</h1>
        <p>Web application for streaming movies.</p>
        <div className="flex gap-1">
          <h2 className="font-bold">Tech stacks:</h2>
          <p>React, Laravel, Mysql</p>
        </div>
        <div className="flex gap-2">
          <a
            className="text-blue-500 underline"
            target="new"
            href="https://github.com/ymingbtw/Streamix-Client.git"
          >
            Front End
          </a>
          <a
            className="text-blue-500 underline"
            target="new"
            href="https://github.com/ymingbtw/Streamix.git"
          >
            Back End
          </a>
        </div>
      </div>
    </div>
  );
}
