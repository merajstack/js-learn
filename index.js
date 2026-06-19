#!/usr/bin/env node

import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("\n🚀 Welcome to Meraj JS CLI\n");

const answers = await inquirer.prompt([
    {
        type: "input",
        name: "folder",
        message: "Enter project folder name:",
        default: "JS"
    }
]);

const targetFolder = path.join(process.cwd(), answers.folder);

if (fs.existsSync(targetFolder)) {
    console.log("⚠️ Folder already exists!");
    process.exit(0);
}

// The template files live alongside this script when installed via npm,
// inside the "JS" folder that ships with the package.
const templateFolder = path.join(__dirname, "JS");

if (!fs.existsSync(templateFolder)) {
    console.error("❌ Template folder not found at:", templateFolder);
    console.error("This usually means the package was published without it.");
    process.exit(1);
}

// Recursively copy the template folder into the new target folder.
fs.cpSync(templateFolder, targetFolder, { recursive: true });

console.log("\n✅ Project created successfully!");
console.log("📁 Folder:", answers.folder);
console.log("🚀 Happy Coding!\n");