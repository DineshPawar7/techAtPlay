import React, { useState } from "react";
import axios from "axios";

const Base64Tool = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [mode, setMode] = useState("encode");

  const handleConvert = async () => {
    setError("");
    setOutput("");
    if (!input.trim()) {
      setError("Input cannot be empty.");
      return;
    }
    const endpoint = mode === "encode" ? "/api/encode" : "/api/decode";
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}${endpoint}`,
        { text: input }
      );
      setOutput(response.data.result);
    } catch (err) {
      setError(err.response?.data?.error || "An unexpected error occurred.");
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">
        Base64 Encoder/Decoder
      </h2>
      <div className="flex items-center space-x-4 mb-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="mode"
            value="encode"
            checked={mode === "encode"}
            onChange={() => setMode("encode")}
            className="form-radio h-4 w-4 text-dark"
          />
          <span className="ml-2 text-white">Encode</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="mode"
            value="decode"
            checked={mode === "decode"}
            onChange={() => setMode("decode")}
            className="form-radio h-4 w-4 text-dark"
          />
          <span className="ml-2 text-white">Decode</span>
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="b64-input"
            className="block text-sm font-medium text-white mb-1"
          >
            Input
          </label>
          <textarea
            id="b64-input"
            className="w-full h-60 p-2 border border-border rounded-md shadow-sm font-mono"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode === "encode" ? "Hello World" : "SGVsbG8gV29ybGQ="}
          />
        </div>
        <div>
          <label
            htmlFor="b64-output"
            className="block text-sm font-medium text-black mb-1"
          >
            Output
          </label>
          <textarea
            id="b64-output"
            readOnly
            className="w-full h-60 p-2 border border-border rounded-md shadow-sm bg-border font-mono"
            value={error || output}
            placeholder="Result will appear here"
          />
        </div>
      </div>
      <button
        onClick={handleConvert}
        className="px-6 py-2 bg-dark text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors"
      >
        {mode === "encode" ? "Encode" : "Decode"}
      </button>
    </div>
  );
};

export default Base64Tool;
