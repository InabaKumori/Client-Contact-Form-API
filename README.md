# Project Name: FormDataToPostgres

## Description

`FormDataToPostgres` is a Node.js API designed to simplify the process of receiving client contact form submissions and persisting them in a PostgreSQL database. This backend service validates the received data from the client-side and stores it securely in a database for further processing or analysis. It's a robust and efficient way to manage user-generated data coming from web forms.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Installation

1. Clone the repository to your local machine
   ```bash
   git clone https://github.com/your-username/FormDataToPostgres.git
   ```

2. Navigate to the project folder
   ```bash
   cd FormDataToPostgres
   ```

3. Install required packages
   ```bash
   npm install
   ```

4. Run the application
   ```bash
   node app.js
   ```

## Usage

To test the API, make a `POST` request to `http://localhost:6000/post/contact` with the appropriate form data.

Here is a sample cURL request:
```bash
curl --location --request POST 'http://localhost:6000/post/contact' \
--form 'name="John Doe"' \
--form 'email="john.doe@email.com"' \
--form 'message="Hello, World!"'
```

## API Endpoints

- **POST /post/contact**: Endpoint for receiving form data.

## Configuration

Create a `.env` file in the root directory of your project and add the following:

```
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
```

Replace the placeholders with your actual PostgreSQL database information.

## Database Setup

Here's an example SQL command to create the table:

```sql
CREATE TABLE contact_forms (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  message TEXT
);
```

## Error Handling

Error responses come in the following JSON structure:

```json
{
  "error": "Error message goes here"
}
```

## Contributing

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the GNU License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all contributors and their valuable input.
- This project was inspired by the need for a simple, reliable way to manage client form submissions.
