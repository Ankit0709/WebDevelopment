//Basics of Promises

// let x = new Promise(function (resolve, reject) {
//   console.log("Downloading started");
//   //   throw new Error("Error has occured");
//   setTimeout(function () {
//     console.log("Downloading completed");
//     resolve();
//   }, 4000);
// });

// setTimeout(() => {
//   x.then(function () {
//     console.log("uploading started");
//   });
//   x.catch(function (error) {
//     console.error(error.message);
//   });
// }, 5000);

//nesting in Promises
function downloadFile(url) {
  return new Promise((resolve, reject) => {
    console.log(`Downloading Started from ${url}`);
    setTimeout(() => {
      let path = url.split("/").pop();
      console.log("Downloading completed!");
      resolve(path);
    }, 4000);
  });
}
function upload(downloadFile) {
  return new Promise((resolve, reject) => {
    console.log("Uploading Started!");
    setTimeout(function () {
      let uploadedFile = downloadFile + ".zip";
      console.log("Uploading completed!");
      resolve(uploadedFile);
    }, 4000);
  });
}
function compressing(compressFile) {
  return new Promise((resolve, reject) => {
    console.log(`Compression Started  of file ${compressFile}`);
    setTimeout(function () {
      console.log("Compression completed!");
      throw new Error("Error has occured!");
      resolve(compressFile);
    }, 4000);
  });
}

downloadFile("http://abc.com/song.mp3")
  .then(compressing)
  .then(upload)
  .then(() => {
    console.log("Everything Done!");
  })
  .catch((err) => {
    console.log(err.message);
  });
