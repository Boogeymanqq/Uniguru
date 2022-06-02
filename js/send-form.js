"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const firstForm = document.getElementById("first-form");
  const secondForm = document.getElementById("second-form");
  const formReq = document.querySelectorAll(".js-req");
  const formSecondReq = document.querySelectorAll(".js-second-req");
  const body = document.querySelector("body");
  const notification = document.querySelector(".notification");
  const secondNotification = document.querySelector(".second__notification");

  firstForm.addEventListener("submit", formsend);
  secondForm.addEventListener("submit", formSecondSend);

  async function formsend(e) {
    e.preventDefault();

    const error = formValidate(firstForm);

    const formData = new FormData(firstForm);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    if (error === 0) {
      body.classList.add("loading");
      const response = await fetch("/sendmail.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        notification.style.color = "#008000";
        notification.textContent = result.message;
        setTimeout(() => (notification.textContent = ""), 3000);
        firstForm.reset();
        body.classList.remove("loading");
      } else {
        alert("Error");
        notification.style.color = "#ff0000";
        notification.textContent = "Error";
        setTimeout(() => (notification.textContent = ""), 3000);
        body.classList.remove("loading");
      }
    } else {
      alert("Fill in required fields!");
      notification.style.color = "#ff0000";
      notification.textContent = "Fill in required fields!";
    }
  }

  function formValidate(firstForm) {
    let error = 0;

    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      if (input.classList.contains("js-email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (
        input.getAttribute("type") === "radio" &&
        input.checked === false
      ) {
        formAddError(input);
        error++;
      } else {
        if (input.value.trim() === "") {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  async function formSecondSend(e) {
    e.preventDefault();

    const error = formSecondValidate(secondForm);

    const formSecondData = new FormData(secondForm);
    if (error === 0) {
      body.classList.add("loading");
      const response = await fetch("/sendmail.php", {
        method: "POST",
        body: formSecondData,
      });
      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        secondNotification.style.color = "#008000";
        secondNotification.textContent = result.message;
        setTimeout(() => (secondNotification.textContent = ""), 3000);
        secondForm.reset();
        body.classList.remove("loading");
      } else {
        alert("Error");
        secondNotification.style.color = "#ff0000";
        secondNotification.textContent = "Error";
        setTimeout(() => (secondNotification.textContent = ""), 3000);
        body.classList.remove("loading");
      }
    } else {
      alert("Fill in required fields!");
      secondNotification.style.color = "#ff0000";
      secondNotification.textContent = "Fill in required fields!";
    }
  }

  function formSecondValidate(secondForm) {
    let error = 0;

    for (let i = 0; i < formSecondReq.length; i++) {
      const input = formSecondReq[i];
      formRemoveError(input);

      if (input.classList.contains("js-second-email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (
        input.getAttribute("type") === "radio" &&
        input.checked === false
      ) {
        formAddError(input);
        error++;
      } else {
        if (input.value.trim() === "") {
          formAddError(input);
          error++;
        }
      }
    }
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
