import  express from "express";
import cors from "cors";
import { router } from "./routes";


const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const PORT = 8080;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
