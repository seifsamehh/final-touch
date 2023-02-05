// pwa
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((registration) => {
      console.log("SW Registered!");
      console.log(registration);
    })
    .catch((error) => {
      console.log("SW Registration Failed!");
      console.log(error);
    });
}
// cookies
document.cookie = "seif=Dips; SameSite=None; Secure";
// start loader
const loader = document.querySelector(".loader");

setTimeout(() => {
  loader.style.display = "none";
}, 1500);
// end loader
