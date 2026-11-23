import express from 'express';
import path from 'path';
import fs from 'fs';
import { resizeImage } from '../../utilities/imageProcessing';

const router = express.Router();

router.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      const filename = req.query.filename as string;
      const widthQuery = req.query.width as string;
      const heightQuery = req.query.height as string;

      if (!filename) {
        res.status(400).send('Missing filename parameter');
        return;
      }

      if (!widthQuery || !heightQuery) {
        res.status(400).send('Missing width or height parameter');
        return;
      }

      // Validate that width and height are valid positive integers
      if (!/^\d+$/.test(widthQuery) || !/^\d+$/.test(heightQuery)) {
        res.status(400).send('Width and height must be positive numbers');
        return;
      }

      const width = parseInt(widthQuery, 10);
      const height = parseInt(heightQuery, 10);

      if (width <= 0 || height <= 0) {
        res.status(400).send('Width and height must be positive numbers');
        return;
      }

      const fullPath = path.resolve('assets/full', `${filename}.jpg`);
      const thumbDir = path.resolve('assets/thumb');
      const thumbPath = path.resolve(
        'assets/thumb',
        `${filename}_${width}_${height}.jpg`
      );

      if (!fs.existsSync(fullPath)) {
        res.status(404).send('Image file not found');
        return;
      }

      if (!fs.existsSync(thumbDir)) {
        fs.mkdirSync(thumbDir, { recursive: true });
      }

      if (!fs.existsSync(thumbPath)) {
        await resizeImage(fullPath, thumbPath, width, height);
      }

      res.sendFile(thumbPath);
    } catch (error) {
      console.log(error);
      res.status(500).send('Something went wrong while processing the image');
    }
  }
);

export default router;
