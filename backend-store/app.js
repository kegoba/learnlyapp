const express = require("express");
const shakeDatabase = require("./connection/database");
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

require("dotenv").config();

const app = express();
const allowedOrigins = ['http://localhost:8081'];

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      // If the origin is in the allowedOrigins list, allow the request
      return callback(null, true);
    } else {
      // If the origin is not in the list, deny the request
      return callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: 'Content-Type, Authorization'
};
app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));





const { PORT } = process.env;

app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use("/api/v1/user", require("./routes/userRoute"));

app.use("/api/v1/product", require("./routes/productRoute"));








// SHAKE DATABASE
shakeDatabase(() => {
  // Start the server after database successful handshake
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
