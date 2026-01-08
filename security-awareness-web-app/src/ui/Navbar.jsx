import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full bg-[#1B262C] text-white">
      {/* ===== Desktop Navbar ===== */}
      <div className="hidden md:flex h-24 items-center">
        <span className="ml-20 text-4xl">Shilda</span>

        <nav className="ml-28 flex gap-11 h-full">
          <NavLink
            to="/check-pass"
            className={({ isActive }) =>
              isActive
                ? "h-full flex items-center border-b-4 border-white"
                : "h-full flex items-center"
            }
          >
            Check password strength
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "h-full flex items-center border-b-4 border-white"
                : "h-full flex items-center"
            }
          >
            Detect potentially malicious URLs
          </NavLink>
        </nav>
      </div>

      {/* ===== Mobile Navbar ===== */}
      <div className="md:hidden flex flex-col">
        {/* Logo */}
        <div className="h-14 flex items-center justify-center border-b border-white/20">
          <span className="text-2xl font-semibold">Shilda</span>
        </div>

        {/* Tabs */}
        <nav className="flex h-12">
          <NavLink
            to="/check-pass"
            className={({ isActive }) =>
              isActive
                ? "flex-1 flex items-center justify-center text-sm bg-white/10 border-b-2 border-white"
                : "flex-1 flex items-center justify-center text-sm"
            }
          >
            Password
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex-1 flex items-center justify-center text-sm bg-white/10 border-b-2 border-white"
                : "flex-1 flex items-center justify-center text-sm"
            }
          >
            URL Check
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
