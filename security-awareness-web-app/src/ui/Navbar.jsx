import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-24 border bg-[#1B262C] text-white flex justify-start items-center">
      <span className="ml-20 text-4xl">Shilda</span>
      <div className="ml-28 flex gap-11">
        <NavLink
          to="/check-pass"
          className={({ isActive }) =>
            isActive
              ? "h-24 flex items-center border-b-4 border-[#028673]"
              : "h-24 flex items-center"
          }
        >
          Check password strength
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "h-24 flex items-center border-b-4 border-[#028673]"
              : "h-24 flex items-center"
          }
        >
          Detect potentially malicious URLs
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
