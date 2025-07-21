import app from './app.js';
import { setupDatabase } from './db/database.js';

const PORT = 5001;

app.listen(PORT, async () => {
    await setupDatabase();
    console.log(`Backend server is running on http://localhost:${PORT}`);
});
