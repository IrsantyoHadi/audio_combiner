var audioCombiner = require("./audio-combiner.js");
var child_process = require("child_process");
const fs = require("fs");
const basePath = process.cwd();

module.exports = async (path, index) => {
  for (let j = 0; j < path.length - 1; j++) {
    if (!fs.existsSync("./temp")) {
      child_process.execSync("mkdir temp");
    }
    let baseFile;
    let secondFile;
    let outputFile;
    let isFirst = j === 0;
    let isLast = j === path.length - 2;
    if (isFirst) {
      baseFile = path[j];
      secondFile = path[j + 1];
      outputFile = `${basePath}/temp/newSound${j}.wav`;
    } else if (isLast) {
      baseFile = `${basePath}/temp/newSound${j - 1}.wav`;
      secondFile = path[j + 1];
      outputFile = `${basePath}/build/sound/${index}.wav`;
    } else {
      baseFile = `${basePath}/temp/newSound${j - 1}.wav`;
      secondFile = path[j + 1];
      outputFile = `${basePath}/temp/newSound${j}.wav`;
    }
    await audioCombiner.combineSamples(
      baseFile,
      secondFile,
      outputFile,
      (err) => {
        console.log(err, "SOMETHING ERROR");
        if (!err) {
          console.log("AUDIO COMBINED");
        }
      }
    );
  }
  child_process.execSync("rm -rf temp");
};
