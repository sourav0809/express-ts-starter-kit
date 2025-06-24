import dotenv from "dotenv";
import logger from "./config/logger";
import { createApp } from "./app";

// Load environment variables
dotenv.config();

const startServer = async () => {
  try {
    const app = createApp();
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      logger.info(`🚀 Server is running on port ${PORT}`);
      logger.info(`Health check available at http://localhost:${PORT}/health`);
    });

    // Handle uncaught exceptions
    process.on("uncaughtException", (error: Error) => {
      logger.error("Uncaught Exception:", error);
      process.exit(1);
    });

    // Handle unhandled promise rejections
    process.on("unhandledRejection", (reason: Error) => {
      logger.error("Unhandled Rejection:", reason);
      process.exit(1);
    });
  } catch (error) {
    logger.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
