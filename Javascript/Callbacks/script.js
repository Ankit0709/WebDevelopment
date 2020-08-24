function download(downloadPath, downloaded) {
  console.log("Starting Download Section");
  setTimeout(function () {
    let path = downloadPath.split("/").pop();
    downloaded(path);
  }, 4000);
}
function upload(downloadFile, uploaded) {
  console.log("Uploading Started");
  setTimeout(function () {
    let uploadedFile = downloadFile + ".zip";
    uploaded(uploadedFile);
  }, 4000);
}
let path = "https://localhost:4444/song.mp3";
download(path, function (downloadPath) {
  console.log(`File Downloaded from ${downloadPath}`);
  upload(downloadPath, function (uploaded) {
    console.log(`File uploaded at ${uploaded}`);
  });
});
