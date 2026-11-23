// Configuration Constants
export const PORT = process.env.PORT || 3000;
export const ASSETS_FULL_DIR = 'assets/full';
export const ASSETS_THUMB_DIR = 'assets/thumb';
export const IMAGE_EXTENSION = '.jpg';

// Error Messages
export const ERROR_MESSAGES = {
  MISSING_FILENAME: 'Error: Missing filename parameter. Filename is required.',
  MISSING_WIDTH: 'Error: Missing width parameter. Width is required.',
  MISSING_HEIGHT: 'Error: Missing height parameter. Height is required.',
  INVALID_WIDTH: 'Error: Width must be a positive number.',
  INVALID_HEIGHT: 'Error: Height must be a positive number.',
  INVALID_FILENAME: 'Error: Invalid filename. Filename contains invalid characters.',
  IMAGE_NOT_FOUND: 'Error: Image file not found. Please ensure the file exists in the assets/full directory.',
  PROCESSING_ERROR: 'Error: Something went wrong while processing the image. Please try again later.',
};

// Validation Constants
export const FILENAME_PATTERN = /^[a-zA-Z0-9_-]+$/;
export const MAX_WIDTH = 3000;
export const MAX_HEIGHT = 3000;
export const MIN_DIMENSION = 1;
