import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();

connectDB();

// Config Cors
const whitelist = ["http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      // Puede consultar API
      callback(null, true);
    } else {
      // No tiene permitido REQUESTS
      callback(new Error("Error de Cors"));
    }
  },
};

app.use(cors(corsOptions));

// Routing
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor Corriendo en el puerto ${PORT}`);
});
