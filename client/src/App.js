import React, { useState } from 'react';
import JsonFormatter from './components/JsonFormatter';
import Base64Tool from './components/Base64Tool';
import History from './components/History';

function App() {
  const [activeTab, setActiveTab] = useState('json');

  const renderTool = () => {
    switch (activeTab) {
      case 'json':
        return <JsonFormatter />;
      case 'base64':
        return <Base64Tool />;
      case 'history':
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
        className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
          isActive
            ? 'bg-dark border-b-0 border-border text-black'
            : 'bg-border text-black'
        }`}
      >
        {label}
      </button>
    );
  };


  return (
    <div className="min-h-screen bg-primary p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6">
          <h1 className="text-4xl font-bold text-gray-800">Dev Toolbox</h1>
        </header>

        <main>
          <div className="border-b border-border">
              <TabButton tabName="json" label="JSON Formatter" />
              <TabButton tabName="base64" label="Base64 Encoder/Decoder" />
              <TabButton tabName="history" label="JSON History" />
          </div>
          <div className="bg-secondary p-6 rounded-b-lg rounded-r-lg shadow-md">
            {renderTool()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;