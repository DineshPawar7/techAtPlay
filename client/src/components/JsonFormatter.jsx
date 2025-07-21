




import React, { useState } from 'react';
import axios from 'axios';

const JsonFormatter = () => {
    const [inputJson, setInputJson] = useState('');
    const [outputJson, setOutputJson] = useState('');
    const [error, setError] = useState('');

    const handleFormat = async () => {
        setError('');
        setOutputJson('');
        if (!inputJson.trim()) {
            setError('Input cannot be empty.');
            return;
        }
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/format-json`, {
                jsonString: inputJson,
            });
            setOutputJson(response.data.formattedJson);
        } catch (err) {
            setError(err.response?.data?.error || 'An unexpected error occurred.');
        }
    };

   

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">JSON Formatter</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="json-input" className="block text-sm font-medium text-white mb-1">
                        Raw JSON
                    </label>
                    <textarea
                        id="json-input"
                        className="w-full h-80 p-2 border border-black rounded-md shadow-sm font-mono"
                        value={inputJson}
                        onChange={(e) => setInputJson(e.target.value)}
                        placeholder='{ "key": "paste your json here" }'
                    />
                </div>
                <div>
                    <label htmlFor="json-output" className="block text-sm font-medium text-white mb-1">
                        Formatted JSON
                    </label>
                    {error && <div className="h-80 p-4 border border-red-400 bg-red-50 rounded-md text-red-600">{error}</div>}
                    {outputJson && (
                        <pre className="h-80">
                            <code>{outputJson}</code>
                        </pre>
                    )}
                    {!error && !outputJson && (
                         <div className="h-80 p-4 border border-border bg-gray-50 rounded-md text-border flex items-center justify-center">Output will appear here</div>
                    )}
                </div>
            </div>
            <button
                onClick={handleFormat}
                className="px-6 py-2 bg-dark text-white font-semibold rounded-md focus:outline-none focus:ring-2 transition-colors"
            >
                Format JSON
            </button>
        </div>
    );
};

export default JsonFormatter;