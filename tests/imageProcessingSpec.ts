import fs from 'fs';
import path from 'path';
import { resizeImage } from '../src/utilities/imageProcessing';

describe('Image processing function', (): void => {
  const inputPath = path.resolve('assets/full/fjord.jpg');
  const outputPath = path.resolve('assets/thumb/fjord_test_100_100.jpg');

  afterAll((): void => {
    if (fs.existsSync(outputPath)) {
      fs.unlinkSync(outputPath);
    }
  });

  it('resizes image successfully', async (): Promise<void> => {
    const result = await resizeImage(inputPath, outputPath, 100, 100);
    expect(result).toBe(outputPath);
    expect(fs.existsSync(outputPath)).toBeTrue();
  });

  it('throws an error for invalid input path', async (): Promise<void> => {
    const invalidPath = path.resolve('assets/full/notfound.jpg');
    let hasError = false;

    try {
      await resizeImage(invalidPath, outputPath, 100, 100);
    } catch {
      hasError = true;
    }

    expect(hasError).toBeTrue();
  });
});
