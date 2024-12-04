let sendBtn = document.getElementById("send");
let toggleBtn = document.getElementById("toggle");
let ol = document.querySelector("ol");

sendBtn.addEventListener("click", () => {
  let inp = document.querySelector("input").value;
  if (inp === "") {
    alert("Siz hali text yozmadingiz");
  } else {
    let li = document.createElement("li");
    li.textContent = inp;

    let closeBtn = document.createElement("button");
    closeBtn.textContent = "x";
    closeBtn.className = "close";

    closeBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(closeBtn);
    ol.appendChild(li);

    document.querySelector("input").value = ""; // Inputni tozalash
  }
});

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("night");
});