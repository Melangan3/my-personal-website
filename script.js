const h2 = document.createElement("h2");
h2.textContent = "Thanks for stopping by...";
document.querySelector("body").appendChild(h2);
const h1 = document.createElement("h1");
function myFunction() {
    var x = document.getElementById("container");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
       x.style.display = "none";
      }
}
