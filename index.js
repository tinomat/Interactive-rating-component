const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const btnSubmit = document.getElementById("btn-submit");
const inputBtn = document.querySelectorAll(".rating-container input");
const spanInfo = document.getElementById("selectedInfo");
inputBtn.forEach((input) => {
  input.addEventListener("click", () => {
    inputBtn.forEach((input) => {
      if (input.classList.contains("active")) {
        input.classList.remove("active");
      }
    });
    input.classList.add("active");
    btnSubmit.removeAttribute("disabled");
    btnSubmit.classList.add("btn-submit");
  });
});

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  form1.style.transform = "translateX(-400px)";
  form2.style.transform = "translateX(0)";
  if (document.querySelector(".active")) {
    let valorIngresado = document.querySelector(".active").value;
    spanInfo.textContent = `You selected ${valorIngresado} out of 5`;
  }
});
