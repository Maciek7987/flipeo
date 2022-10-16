const btn = document.querySelector(".btn.light");
const arrowBtns = document.querySelectorAll(".arrowBtn");
const arrowLeft = document.querySelector(".arrowButtons__left");
const arrowRight = document.querySelector(".arrowButtons__right");
const sectionProducts = document.querySelector(".products");
let viewporWidth = document.documentElement.clientWidth;
let viewporHeight = document.documentElement.clientHeight;
//dla głównego viewportu, wysokość wynosiła 937px = 100%, srcoll do wyznaczonego miejsca wynosił 3334px = 356%;
const height = viewporHeight * 3.58;
const arraySectionProducts = [...sectionProducts.children];
const numberOfProducts = arraySectionProducts.length;
let countOfBtnClick = 0;
let arrayCountedTranslate = [0];

btn.addEventListener("click", (e) => {
  e.preventDefault;
  window.scroll({ top: height, behavior: "smooth" });
});

window.addEventListener("resize", () => {
  viewporWidth = document.documentElement.clientWidth;
  viewporHeight = document.documentElement.clientHeight;
  const integerValue = Math.round(((1.3 + 13.8) * viewporWidth) / 100);
  for (let i = 1; i < numberOfProducts - 4 + 1; i++) {
    arrayCountedTranslate[i] = -integerValue * i;
  }
});

const integerValue = Math.round(((1.3 + 13.8) * viewporWidth) / 100);

for (let i = 1; i < numberOfProducts - 4 + 1; i++) {
  arrayCountedTranslate[i] = -integerValue * i;
}

arraySectionProducts[countOfBtnClick + 3].style.opacity = "0.45";

const showNextOrPreviousProduct = (e) => {
  e.preventDefault;

  if (e.target.classList.contains("arrowButtons__right")) {
    //right
    arraySectionProducts[countOfBtnClick + 4].style.opacity = "0.45";
    arraySectionProducts[countOfBtnClick + 3].style.opacity = "1";

    if (countOfBtnClick === arrayCountedTranslate.length - 1) return;
    else {
      arrowLeft.classList.remove("arrowButtons__left--disable");
      countOfBtnClick++;
      sectionProducts.style.transform = `translateX(${arrayCountedTranslate[countOfBtnClick]}px)`;
      console.log(countOfBtnClick);
      if (countOfBtnClick === arrayCountedTranslate.length - 1) {
        e.target.classList.add("arrowButtons__right--disable");
        arraySectionProducts[countOfBtnClick + 3].style.opacity = "1";
      }
    }
  } else {
    //left
    arraySectionProducts[countOfBtnClick + 2].style.opacity = "0.45";
    if (countOfBtnClick === 0) {
      return;
    } else {
      arrowRight.classList.remove("arrowButtons__right--disable");

      countOfBtnClick--;
      console.log(countOfBtnClick);
      sectionProducts.style.transform = `translateX(${arrayCountedTranslate[countOfBtnClick]}px)`;
      if (countOfBtnClick === 0) {
        e.target.classList.add("arrowButtons__left--disable");
      }
    }
  }
};

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", showNextOrPreviousProduct);
});
