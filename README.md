#cn-csv-upload NodeJS backend project

# Node.js Project Setup
This is a Node.js project with EJS template engine for uploading and displaying CSV files.

## Installation

Clone the repository:

   ```
   git clone https://github.com/sanjeev-dhakjariwala/cn-csv-upload.git
   ```
 Navigate to the project directory:
 ```
 cd nodejs-ejs-csv-project
 ```
 Install the dependencies:
 ```
 Install the dependencies:
 ```
 ## Usage
 1. Start the server
 ```
 npm start
 ```
 2. Open your web browser and go to http://localhost:4000.
 3. You should see the "Upload CSV File" page.
 4. Choose a CSV file using the file input field and click the "Upload" button.
 5. The uploaded CSV file will be displayed on the page.
 6. Click on the name of the CSV file to view the details of the CSV file.
 7. In the CSV details page, you can use the search feature to search for specific keywords in the table.
 
 ## Project Structure
   - `app.js`: Main application file that sets up the server and routes.
   - `controllers/homeController.js`: Contains the route handler for the home page.
   - `controllers/csvController.js`: Contains the route handler for uploading and displaying CSV files.
   - `views/`: Contains the EJS templates for rendering HTML pages.
   - `public/`: Contains static files like CSS stylesheets and client-side JavaScript files.
   - `uploads/`: Folder where the uploaded CSV files are stored.
    
## Dependencies
   - Express: Web framework for Node.js.
   - EJS: Embedded JavaScript templates for rendering HTML pages.
   - Multer: Middleware for handling file uploads.
   - Body-parser: Middleware for parsing request bodies.
   - Express-async-handler: Middleware for handling asynchronous route handlers.
   - fs: File system module for reading and writing files.
 
## Contributing

Contributions are welcome! If you find any issues or want to enhance the project, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
