"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formsend);

  async function formsend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);

    console.log(error);
    if (error === 0) {
      let response = await fetch("", { method: "POST", body: formData });
      if (response.ok) {
        form.reset();
      } else {
        alert("Ошибка");
      }
    } else {
      alert("Заполните обязательные поля");
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];

      formRemoveError(input);

      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (input.value === "") {
        formAddError(input);
        error++;
      }
    }
    console.log(error);
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add("error");
    input.classList.add("error");
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove("error");
    input.classList.remove("error");
  }

  function emailTest(input) {
    return !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
      input.value
    );
  }
});
