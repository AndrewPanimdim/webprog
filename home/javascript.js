const hello = document.getElementById("hello");
const body = document.getElementById("body");

hello.addEventListener("click", () => {
  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }
});