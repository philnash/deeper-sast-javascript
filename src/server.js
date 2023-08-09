import Express from "express";
import { getImage } from "./image-fs.js";
import { getImage as getImageExtra } from "./image-fs-extra.js";

export const app = Express();

app.get("/image", getImage);
app.get("/image-extra", getImageExtra);
