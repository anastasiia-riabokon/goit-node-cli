import * as fs from "node:fs/promises";
import * as path from "node:path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contactsPath = path.join(__dirname, "db", "contacts.json");
