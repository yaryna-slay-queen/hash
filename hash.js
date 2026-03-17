import { hashSync, compareSync } from "bcrypt";
import { existsSync, readFileSync, writeFileSync } from "fs";
const saltRounds = 10;
const textFile = "password.txt";
const password = process.argv[2];

let data = "";

if (existsSync(textFile)) {
  data = readFileSync(textFile, "utf8").trim();
}

if (!data) {
  console.log("No data");
  const hash = hashSync(password, saltRounds);
  writeFileSync(textFile, hash);
  console.log("password added");
} else {
  console.log("comparing data...");

  const isMatch = compareSync(password, data.trim());
  if (isMatch) {
    console.log("correct data");
  } else {
    console.log("incorrect data");
  }
}
