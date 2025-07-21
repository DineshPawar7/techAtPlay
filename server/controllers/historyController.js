import { getJsonHistory } from '../db/database.js';

export const fetchHistory = async (req, res) => {
    try {
        const history = await getJsonHistory();
        res.json(history);
    } catch (error) {
        console.error('Failed to fetch history:', error);
        res.status(500).json({ error: 'Failed to fetch history.' });
    }
};
