import { addJsonHistory } from '../db/database.js';

export const formatJson = async (req, res) => {
    const { jsonString } = req.body;

    if (!jsonString) {
        return res.status(400).json({ error: 'JSON string is required.' });
    }

    try {
        const parsedJson = JSON.parse(jsonString);
        const formattedJson = JSON.stringify(parsedJson, null, 2);

        addJsonHistory(jsonString, formattedJson).catch(console.error);

        res.json({ formattedJson });
    } catch (error) {
        res.status(400).json({ error: 'Invalid JSON format.' });
    }
};
