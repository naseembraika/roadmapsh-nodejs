const fs = require("fs");
const path = require("path");

const printError = (message) => {
  console.error(`error: ${message}`);
  process.exit(1);
};

const readJsonFile = async (file) => {
  if (!file) {
    return printError("please provide a JSON file path");
  }

  const filePath = path.join(process.cwd(), file);
  let data;
  try {
    data = fs.readFileSync(filePath, { encoding: "utf-8" });
  } catch (error) {
    return printError(`could not read file: ${path.basename(filePath)}`);
  }

  let jsonData;
  try {
    jsonData = JSON.parse(data);
  } catch (error) {
    return printError(`invalid JSON in file: ${path.basename(filePath)}`);
  }

  const jsonFormate = JSON.stringify(jsonData, null, 2);
  console.log(jsonFormate);
};

readJsonFile(process.argv[2]);
