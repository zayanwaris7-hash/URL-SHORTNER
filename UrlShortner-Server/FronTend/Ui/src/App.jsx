import { useState } from "react";

export default function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShorten = async () => {
    if (!url) return;

    setLoading(true);
    try {

      const response = await fetch(`http://localhost:3000/api/getshorten/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ urls: url })
      });
      const Data = await response.json();
      console.log("Response status:", Data);

      if (!response.ok) {
        const errorText = await response.text(); // Get the HTML error message
        console.error("Server error:", response.status, errorText);
        return alert(`Error ${response.status}: Route not found on server.`);
      }

      setShortUrl(`http://localhost:3000/${Data.shortUrl}`);
    } catch (err) {
      console.error(err);
      alert("Failed to shorten URL");
    }
    setLoading(false);
  };

  const handleRedirection = async (shortUrl) => {
    try {
      const response = await fetch(`http://localhost:3000/api/${shortUrl}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) {
        const errorText = await response.text(); // Get the HTML error message
        console.error("Server error:", response.status, errorText);
        return alert(`Error ${response.status}: Route not found on server.`);
      }
    } catch (error) {
      console.error("Error occurred while fetching redirect URL:", error);
      alert("Failed to redirect to the short URL");
    }
  }


return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 px-4">
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
        URL Shortener
      </h1>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Enter your URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          onClick={handleShorten}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition"
        >
          {loading ? "..." : "Shorten"}
        </button>
      </div>

      {shortUrl && (
        <div className="mt-5 p-3 bg-gray-100 rounded-lg text-center">
          <p className="text-gray-600 text-sm mb-1">Short URL:</p>
          <a
            onClick={handleRedirection}
            href={shortUrl}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 font-semibold break-all"
          >
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  </div>
);
}
