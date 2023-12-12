//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach((target) => {
  const btn = target.querySelector(".question-btn");

  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== target) {
        item.classList.remove("show-text");
      }
    });

    target.classList.toggle("show-text");
  });
});

// traversing the dom
/*
const btns = document.querySelectorAll(".question-btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let article = e.currentTarget.parentElement.parentElement;
    article.classList.toggle("show-text");
  });
});
*/
