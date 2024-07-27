import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import UserRoutes from "./Users/routes.js";

const app = express();
const CONNECTION_STRING =
  process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";
mongoose.connect(CONNECTION_STRING);

app.use(cors());
app.use(express.json()); // do all work after this line

UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);
Hello(app);
Lab5(app);

app.listen(process.env.PORT || 4000);
