import express from 'express';
import {
  ERROR_MESSAGES,
  FILENAME_PATTERN,
  MIN_DIMENSION,
  MAX_WIDTH,
  MAX_HEIGHT,
} from '../constants';

export interface ValidationResult {
  isValid: boolean;
  error?: string;
  filename?: string;
  width?: number;
  height?: number;
}

export const validateImageParams = (
  req: express.Request
): ValidationResult => {
  const filename = req.query.filename as string;
  const widthQuery = req.query.width as string;
  const heightQuery = req.query.height as string;

  // Validate filename
  if (!filename) {
    return { isValid: false, error: ERROR_MESSAGES.MISSING_FILENAME };
  }

  if (!FILENAME_PATTERN.test(filename)) {
    return { isValid: false, error: ERROR_MESSAGES.INVALID_FILENAME };
  }

  // Validate width
  if (!widthQuery) {
    return { isValid: false, error: ERROR_MESSAGES.MISSING_WIDTH };
  }

  if (!/^\d+$/.test(widthQuery)) {
    return { isValid: false, error: ERROR_MESSAGES.INVALID_WIDTH };
  }

  const width = parseInt(widthQuery, 10);
  if (width < MIN_DIMENSION || width > MAX_WIDTH) {
    return {
      isValid: false,
      error: `Error: Width must be between ${MIN_DIMENSION} and ${MAX_WIDTH} pixels.`,
    };
  }

  // Validate height
  if (!heightQuery) {
    return { isValid: false, error: ERROR_MESSAGES.MISSING_HEIGHT };
  }

  if (!/^\d+$/.test(heightQuery)) {
    return { isValid: false, error: ERROR_MESSAGES.INVALID_HEIGHT };
  }

  const height = parseInt(heightQuery, 10);
  if (height < MIN_DIMENSION || height > MAX_HEIGHT) {
    return {
      isValid: false,
      error: `Error: Height must be between ${MIN_DIMENSION} and ${MAX_HEIGHT} pixels.`,
    };
  }

  return { isValid: true, filename, width, height };
};
