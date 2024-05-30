
# URL Shortener

This is a simple URL shortener project built with Node.js, Express, and MongoDB. It allows users to shorten long URLs into shorter, more manageable links.

## Features

- Shorten long URLs into easy-to-share links
- Redirect users from shortened links to the original URLs
- Track visit history for each shortened URL

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

1. Clone the repository:


   git clone https://github.com/thisisbariii/Url-shortner.git
   ```

2. Install dependencies:

   
   cd url-shortener
   npm install

3. Set up MongoDB:
   
   - Make sure MongoDB is installed on your system.
   - Create a new MongoDB database.
   - Update the MongoDB connection URL in `connect.js` with your database URL.

4. Start the server:

   
   npm start

5. Open your web browser and navigate to `http://localhost:8001` to access the application.

## Usage

1. Enter a long URL into the input field on the homepage.
2. Click the "Shorten" button to generate a shortened URL.
3. Copy the shortened URL and share it with others.
4. When users visit the shortened URL, they will be redirected to the original long URL.


## License

This project is licensed under the [MIT License](LICENSE).
```
