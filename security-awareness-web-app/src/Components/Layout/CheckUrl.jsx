import { useState } from "react";

const suspiciousKeywords = [
  "login",
  "verify",
  "free",
  "bonus",
  "secure",
  "account",
  "update",
];

const CheckUrl = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const analyzeUrl = (e) => {
    e.preventDefault();

    let score = 0;
    let reasons = [];

    if (url.startsWith("http://")) {
      score++;
      reasons.push("URL is not using HTTPS");
    }

    if (/https?:\/\/\d+\.\d+\.\d+\.\d+/.test(url)) {
      score++;
      reasons.push("URL uses an IP address instead of domain");
    }

    suspiciousKeywords.forEach((word) => {
      if (url.toLowerCase().includes(word)) {
        score++;
        reasons.push(`Suspicious keyword detected: "${word}"`);
      }
    });

    if (url.length > 75) {
      score++;
      reasons.push("URL is unusually long");
    }

    if (url.includes("@")) {
      score++;
      reasons.push("URL contains '@' symbol");
    }

    setResult({
      isMalicious: score >= 2,
      reasons,
    });
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        className="
          w-11/12 h-[400px]
          [box-shadow:0_12px_20px_2px_rgba(0,0,0,0.3)]
          mx-auto mt-20
          flex flex-col justify-around items-center
          rounded-md p-6
        "
      >
        <span className="text-3xl font-bold text-center">
          Please enter your desired URL
        </span>

        <p className="text-lg text-gray-600 text-center">
          This section is designed to check the health and integrity of your
          link.
        </p>

        {/* FORM */}
        <form
          onSubmit={analyzeUrl}
          className="
            w-3/4
            flex flex-col md:flex-row
            gap-3
            text-lg
          "
        >
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="
              h-14
              outline-none
              w-full md:w-10/12
              rounded-md p-3
              border border-[#028673]
            "
          />

          <input
            type="submit"
            value="Check"
            className="
              h-14
              w-full md:w-2/12
              rounded-md
              bg-[#028673]
              text-white
              cursor-pointer
            "
          />
        </form>

        {result && (
          <div
            className={`
              mt-4 p-4
              w-3/4
              rounded-md text-center
              ${
                result.isMalicious
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }
            `}
          >
            <p className="font-semibold">
              {result.isMalicious
                ? "Potentially Malicious URL"
                : "This URL looks safe"}
            </p>

            {result.reasons.length > 0 && (
              <ul className="text-sm mt-2 list-disc list-inside text-left">
                {result.reasons.map((reason, index) => (
                  <li key={index}>{reason}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckUrl;
