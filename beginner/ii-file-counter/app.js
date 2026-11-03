const fs = require("fs");
const path = require("path");

if (!process.argv[2]) {
  console.error("error: please provide a file path");
  process.exit(0);
}

const source = path.join(process.cwd(), process.argv[2]);

try {
  const content = fs.readFileSync(source, { encoding: "utf-8" });

  console.log("File:", path.basename(source));
  console.log("Lines:", content.split("\n").length);
  console.log("Words:", content.replace("\n", " ").split(" ").length);
  console.log("Characters:", content.length);
} catch (error) {
  console.error(`error: could not read file: ${path.basename(source)}`);
}
