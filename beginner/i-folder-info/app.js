const fs = require("fs");
const path = require("path");

const sourcePath = path.join(
  process.cwd(),
  process.argv[2] ? process.argv[2] : "",
);

try {
  const content = fs.readdirSync(sourcePath);

  let files = 0;
  let directories = 0;

  content.forEach((name) => {
    fs.statSync(path.join(sourcePath, name)).isFile() ? files++ : undefined;
    fs.statSync(path.join(sourcePath, name)).isDirectory()
      ? directories++
      : undefined;
  });

  console.log("Folder:", path.basename(sourcePath));
  console.log("Path:", sourcePath);
  console.log("Files:", files);
  console.log("Folders:", directories);
} catch (err) {
  console.error(`error: could not read folder: ${path.basename(sourcePath)}`);
}
