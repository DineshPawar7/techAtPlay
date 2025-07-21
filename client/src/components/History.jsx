import React, { useState, useEffect } from 'react';
import axios from 'axios';

const History = () => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
    const fetchHistory = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/history`);
            setHistory(response.data);
        } catch (err) {
            setError('Failed to fetch history. Is the backend running?');
        } finally {
            setLoading(false);
        }
    };

    fetchHistory();
}, []);


    if (loading) return <p className="text-center text-black">Loading history...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">JSON Formatting History</h2>
            {history.length === 0 ? (
                <p className="text-center text-black">No history yet. Format some JSON to see it here!</p>
            ) : (
                <div className="space-y-4">
                    {history.map((item) => (
                        <div key={item.id} className="bg-white p-4 rounded-lg shadow border border-border">
                            <p className="text-sm text-black mb-2">
                                Processed on: {new Date(item.timestamp).toLocaleString()}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-semibold mb-1">Original</h4>
                                    <pre className="h-40"><code>{item.original_json}</code></pre>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Formatted</h4>
                                    <pre className="h-40"><code>{item.formatted_json}</code></pre>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default History;