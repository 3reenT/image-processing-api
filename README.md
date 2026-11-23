# Image Processing API

A RESTful API developed as part of the Udacity Full Stack JavaScript Developer program. The project uses Node.js, Express, TypeScript, and Sharp to resize images based on user-provided dimensions.

## Features

- Resize images using URL query parameters.
- Cache resized images to avoid unnecessary processing.
- Handle missing parameters, invalid dimensions, and unavailable images.
- Unit and API testing using Jasmine and SuperTest.

## Technologies Used

- Node.js
- Express.js
- TypeScript
- Sharp
- Jasmine & SuperTest
- ESLint & Prettier

## Installation

1. Clone the repository.
2. Install dependencies:
```
npm install
```

3. Build and start the application:
```
npm run build
npm start
```

The server runs at `http://localhost:3000`.

## API Endpoint

**GET** `/api/images`

Query parameters:

- `filename`: Image name without the `.jpg` extension.
- `width`: Desired image width in pixels.
- `height`: Desired image height in pixels.

Example:
```
http://localhost:3000/api/images?filename=fjord&width=200&height=200
```

The API returns the resized image and stores a cached version in `assets/thumb` for future requests.

## Testing

Run the tests using:
```
npm test
```

## Project Structure

- `src/routes/` – API routes and request handling.
- `src/utilities/` – Image processing and validation utilities.
- `assets/full/` – Original images.
- `assets/thumb/` – Cached resized images.
- `tests/` – Unit and API tests.

## Project Background

This project was completed as part of the Udacity Full Stack JavaScript Developer program, using provided starter code and implementing the required API functionality.
