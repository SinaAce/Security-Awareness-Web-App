const CheckUrl = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        className="w-11/12 h-[400px] [box-shadow:0_12px_20px_2px_rgba(0,0,0,0.3)]
 mx-auto mt-20 flex flex-col justify-around items-center rounded-md"
      >
        <span className="text-3xl font-bold">
          Please enter your desired URL
        </span>
        <p className="text-lg">
          This section is designed to check the health and integrity of your
          link.
        </p>
        <form className="w-3/4 h-14 text-lg rounded-md border border-[#028673]">
          <input type="text" className="h-full outline-none w-10/12 rounded-md p-3" />
          <input
            type="submit"
            className="h-full w-2/12 rounded-md bg-[#028673] text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default CheckUrl;
