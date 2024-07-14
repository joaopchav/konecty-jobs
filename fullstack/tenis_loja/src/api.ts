// src/api.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { sneakers } from './data';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(sneakers);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}