module.exports.getImageType = (name) => {
  if (name.endsWith(".jpg") || name.endsWith(".jpeg")) {
    return "image/jpeg";
  }

  if (name.endsWith(".png")) {
    return "image/png";
  }
  
  if (name.endsWith(".webp")) {
    return "image/webp";
  }
}