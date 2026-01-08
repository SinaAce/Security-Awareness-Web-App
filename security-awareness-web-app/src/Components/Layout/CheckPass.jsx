import { useState } from "react";

const CheckPass = () => {
  const [password, setPassword] = useState("");
  const [score, setScore] = useState(0);
  const [strength, setStrength] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const analyzePassword = (e) => {
    e.preventDefault();

    let newScore = 0;

    if (password.length >= 8) newScore++;
    if (/[a-z]/.test(password)) newScore++;
    if (/[A-Z]/.test(password)) newScore++;
    if (/[0-9]/.test(password)) newScore++;
    if (/[^A-Za-z0-9]/.test(password)) newScore++;

    setScore(newScore);

    if (newScore <= 2) setStrength("Weak");
    else if (newScore <= 4) setStrength("Medium");
    else setStrength("Strong");
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        className="
          w-11/12 h-[440px]
          [box-shadow:0_12px_20px_2px_rgba(0,0,0,0.3)]
          mx-auto mt-20
          flex flex-col justify-around items-center
          rounded-md p-6
        "
      >
        <span className="text-3xl font-bold text-center">
          Please enter your desired Password
        </span>

        <p className="text-lg text-gray-600 text-center">
          This section is designed to check the strength of your password.
        </p>

        {/* FORM */}
        <form
          onSubmit={analyzePassword}
          className="
            w-3/4
            flex flex-col md:flex-row
            gap-3
          "
        >
          {/* INPUT + SHOW/HIDE */}
          <div className="flex h-14 text-lg rounded-md border border-[#028673] flex-1">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="h-full outline-none w-full rounded-md p-3"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="px-4 text-sm text-gray-600 hover:text-black"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* CHECK BUTTON */}
          <button
            type="submit"
            className="
              h-14 px-6
              rounded-md bg-[#028673]
              text-white
            "
          >
            Check
          </button>
        </form>

        {strength && (
          <div className="w-3/4 mt-4">
            <div className="w-full h-3 bg-gray-200 rounded">
              <div
                className={`h-3 rounded ${
                  strength === "Weak"
                    ? "bg-red-500"
                    : strength === "Medium"
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }`}
                style={{ width: `${(score / 5) * 100}%` }}
              ></div>
            </div>

            <p
              className={`mt-2 font-semibold text-center ${
                strength === "Weak"
                  ? "text-red-600"
                  : strength === "Medium"
                  ? "text-yellow-600"
                  : "text-green-600"
              }`}
            >
              Password Strength: {strength}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckPass;
