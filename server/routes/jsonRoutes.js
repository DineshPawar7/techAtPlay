import express from 'express';
import { formatJson } from '../controllers/jsonController.js';

const router = express.Router();

router.post('/format-json', formatJson);

export default router;
