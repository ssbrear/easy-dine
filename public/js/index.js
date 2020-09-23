if ("geolocation" in navigator) {
  console.log("geolocation available");
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
  });
} else {
  console.log("geolocation not available");
}
