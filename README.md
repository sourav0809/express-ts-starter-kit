# Node.js TypeScript Starter Kit

A production-ready Node.js backend starter kit with TypeScript, featuring a well-structured project setup with essential security, validation, and database integration.

## 🚀 Features

- **TypeScript Integration** - Full TypeScript support for enhanced development experience
- **Express.js** - Fast, unopinionated web framework for Node.js
- **MongoDB Integration** - MongoDB database integration with Mongoose ODM
- **Authentication** - JWT-based authentication system with bcrypt for password hashing
- **Input Validation** - Request validation using Joi
- **Security** - Enhanced security with Helmet middleware
- **API Optimization** - Response compression for better performance
- **CORS Support** - Configured Cross-Origin Resource Sharing
- **Logging** - Structured logging with Winston
- **Environment Management** - Environment variable management with dotenv
- **Development Ready** - Hot-reloading with ts-node-dev

## 📋 Prerequisites

- Node.js (v14 or higher)
- Typescript
- npm or yarn

## 🛠️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sourav0809/express-ts-starter-kit.git
   cd express-ts-starter-kit
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   ```bash
   cp example.env .env
   ```

   Update the `.env` file with your configuration.

4. Start the development server:
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
express-ts-starter-kit/
├── src/
│   ├── config/         # Configuration setup
│   ├── constant/       # Constants and enums
│   ├── controllers/    # Request handlers
│   ├── helpers/        # Helper utilities
│   ├── middlewares/    # Custom middleware functions
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   ├── types/          # TypeScript type definitions
│   ├── validations/    # Request validation schemas
│   ├── app.ts          # Express app configuration
│   └── index.ts        # Application entry point
├── example.env         # Example environment variables
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies and scripts
```

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Build the project
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## 🔧 Dependencies

### Main Dependencies

- express - Web framework
- mongoose - MongoDB ODM
- bcrypt - Password hashing
- jsonwebtoken - JWT authentication
- joi - Request validation
- helmet - Security headers
- compression - Response compression
- cors - CORS support
- dotenv - Environment management
- winston - Logging

### Development Dependencies

- typescript - TypeScript support
- ts-node-dev - Development server
- @types/\* - TypeScript type definitions

## 🔐 Environment Variables

Copy `example.env` to `.env` and update the values:

```env
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

## 📝 License

ISC License

## �� Author

- Sourav
