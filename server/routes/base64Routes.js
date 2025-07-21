import express from 'express';
import { encodeBase64, decodeBase64 } from '../controllers/base64Controller.js';

const router = express.Router();

router.post('/encode', encodeBase64);
router.post('/decode', decodeBase64);

export default router;
