import React, { useState, useEffect } from "react";
import JsonFormatter from "./components/JsonFormatter";
import Base64Tool from "./components/Base64Tool";
import History from "./components/History";

function App() {
  const [activeTab, setActiveTab] = useState("json");
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const renderTool = () => {
    switch (activeTab) {
      case "json":
        return <JsonFormatter />;
      case "base64":
        return <Base64Tool />;
      case "history":
        return <History />;
      default:
        return <JsonFormatter />;
    }
  };

  const TabButton = ({ tabName, label }) => {
    const isActive = activeTab === tabName;
    return (
      <button
        onClick={() => setActiveTab(tabName)}
        className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors duration-200 border 
          ${isActive ? "bg-dark dark:bg-dark border-b-0 text-black dark:text-white" : "bg-gray-100 dark:bg-darkTheame text-black dark:text-white"}`}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-primary dark:bg-darkTheameSecondary dark:text-white text-gray-800 duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
        {/* Header */}
        <header className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Dev Toolbox
          </h1>
          <button
            onClick={() => setIsDarkMode(prev => !prev)}
            className="px-4 py-2 text-sm bg-gray-800 text-white rounded hover:bg-gray-700 dark:bg-white dark:text-gray-900 transition"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>

        {/* Tab Navigation */}
        <div className="flex space-x-2 p-2 rounded-t-lg">
          <TabButton tabName="json" label="JSON Formatter" />
          <TabButton tabName="base64" label="Base64 Encoder/Decoder" />
          <TabButton tabName="history" label="JSON History" />
        </div>

        {/* Tool Rendering */}
        <div className="bg-secondary dark:bg-darkTheame p-6 rounded-b-lg shadow-md border dark:border-border">
          {renderTool()}
        </div>
      </div>
    </div>
  );
}

export default App;
