export const encodeBase64 = (req, res) => {
    const { text } = req.body;

    if (typeof text !== 'string') {
        return res.status(400).json({ error: 'Input must be a string.' });
    }

    const result = Buffer.from(text, 'utf-8').toString('base64');
    res.json({ result });
};

export const decodeBase64 = (req, res) => {
    const { text } = req.body;

    if (typeof text !== 'string') {
        return res.status(400).json({ error: 'Input must be a string.' });
    }

    try {
        const result = Buffer.from(text, 'base64').toString('utf-8');
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: 'Invalid Base64 string.' });
    }
};
