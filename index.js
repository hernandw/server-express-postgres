import express from "express";
import routes from "./routes/userRouter.js";
const app = express();

const PORT = process.env.PORT || 3000;

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});