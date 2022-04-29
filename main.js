let firstClickedCard = "";
let winCount = 0;
let newArr = [];
for (let i = 0; i < 4; i++) {
  newArr.push(...pokemons);
}

// ?Randoming array

function random(newArr) {
  let arr_length = 60;
for (let i = 0; i < 100; i++) {
  const idx1 = Math.floor(Math.random() * arr_length);
  const idx2 = Math.floor(Math.random() * arr_length);

  const temp = newArr[idx1];
  newArr[idx1] = newArr[idx2];
  newArr[idx2] = temp;
}
}


random(newArr)

// ? Puttung li inside ul
let idImg = 0;
let ul = document.querySelector(".ul");

let x = 1;
let y = 1;

for (let i = 0; i < newArr.length; i++) {
  if (x > 10) {
    x = 1;
    y++;
  }

  idImg++;
  let li = document.createElement("li");
  li.classList.add("li-main");
  li.classList.add(`x-${x}`);
  li.classList.add(`y-${y}`);
  li.id = newArr[i].id;
  li.innerHTML = `
  <button class='btn'>
  <img class='img' id=${newArr[i].id} src=${newArr[i].img} alt='img'>
  </button>
  <span class='line'>
  </span>
  `;
  ul.appendChild(li);
  x++;
}

let LiAll = document.querySelectorAll(".li-main");
LiAll.forEach((item) => {
  item.addEventListener("click", () => {
    LiAll.forEach((element) => {
      element.classList.remove("clicked-card");
    });
    item.classList.add("clicked-card");
  });
});

let count = 0;
LiAll.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.currentTarget.classList.add("targetted");
    let lisAfterTurgetted = document.querySelectorAll(".targetted");
    let linesTargetted = document.querySelectorAll(".line");

    count++;
    // console.log(count);

    let x = Number(e.currentTarget.classList[1].slice(-1));
    let y = Number(e.currentTarget.classList[2].slice(-1));
    console.log(x);
    // console.log(y);

    if (lisAfterTurgetted.length == 2) {
      let sortedLi1 = lisAfterTurgetted[0];
      let sortedLi2 = lisAfterTurgetted[1];

      // ! Neighbord removes
      // ?Rightside from target remove
      if (
        sortedLi1.id == sortedLi2.id &&
        sortedLi1.classList.contains(`x-${x}`) &&
        sortedLi1.classList.contains(`y-${y}`) &&
        sortedLi2.classList.contains(`x-${x + 1}`) &&
        sortedLi2.classList.contains(`y-${y}`)
      ) {
        setTimeout(() => {
          sortedLi1.classList.add("remove-card");
          sortedLi2.classList.add("remove-card");
          lisAfterTurgetted.forEach((cls) => cls.classList.remove("targetted"));
        }, 500);

        console.log("one");
        sortedLi1.style.setProperty("--none", "block");
        sortedLi2.style.setProperty("--noneLeft", "block");
      }

      // ?Leftside from target remove
      if (
        sortedLi1.id == sortedLi2.id &&
        sortedLi1.classList.contains(`x-${x - 1}`) &&
        sortedLi1.classList.contains(`y-${y}`) &&
        sortedLi2.classList.contains(`x-${x}`) &&
        sortedLi2.classList.contains(`y-${y}`)
      ) {
        setTimeout(() => {
          sortedLi1.classList.add("remove-card");
          sortedLi2.classList.add("remove-card");
          lisAfterTurgetted.forEach((cls) => cls.classList.remove("targetted"));
        }, 500);
        sortedLi1.style.setProperty("--none", "block");
        sortedLi2.style.setProperty("--noneLeft", "block");
        console.log("two");
      }

      // ?Top from target remove
      if (
        sortedLi1.id == sortedLi2.id &&
        sortedLi1.classList.contains(`x-${x}`) &&
        sortedLi1.classList.contains(`y-${y}`) &&
        sortedLi2.classList.contains(`x-${x}`) &&
        sortedLi2.classList.contains(`y-${y + 1}`)
      ) {
        setTimeout(() => {
          sortedLi1.classList.add("remove-card");
          sortedLi2.classList.add("remove-card");
          lisAfterTurgetted.forEach((cls) => cls.classList.remove("targetted"));
        }, 500);
        sortedLi1.style.setProperty("--btnNone", "block");
        sortedLi2.style.setProperty("--btnNone2", "block");
        console.log("three");
      }

      // ?Bottom from target remove
      if (
        sortedLi1.id == sortedLi2.id &&
        sortedLi1.classList.contains(`x-${x}`) &&
        sortedLi1.classList.contains(`y-${y - 1}`) &&
        sortedLi2.classList.contains(`x-${x}`) &&
        sortedLi2.classList.contains(`y-${y}`)
      ) {
        console.log("four");
        setTimeout(() => {
          sortedLi1.classList.add("remove-card");
          sortedLi2.classList.add("remove-card");
          lisAfterTurgetted.forEach((cls) => cls.classList.remove("targetted"));
        }, 500);
        sortedLi1.style.setProperty("--btnNone", "block");
        sortedLi2.style.setProperty("--btnNone2", "block");
      } else {
        lisAfterTurgetted.forEach((cls) => cls.classList.remove("targetted"));
      }

      // !Corners Remove
      // ? Top line remove
      if (
        sortedLi1.id == sortedLi2.id &&
        sortedLi1.classList.contains(`y-${1}`) &&
        sortedLi2.classList.contains(`y-${1}`) &&
        x > 0 &&
        x <= 10
      ) {
        sortedLi1.classList.add("remove-card");
        sortedLi2.classList.add("remove-card");
        lisAfterTurgetted.forEach((cls) => cls.classList.remove("targetted"));
        console.log("top line remove");
      }

      // ? Bottom Line remove
      if (
        sortedLi1.id == sortedLi2.id &&
        sortedLi1.classList.contains(`y-${6}`) &&
        sortedLi2.classList.contains(`y-${6}`) &&
        x > 0 &&
        x <= 10
      ) {
        sortedLi1.classList.add("remove-card");
        sortedLi2.classList.add("remove-card");
        lisAfterTurgetted.forEach((cls) => cls.classList.remove("targetted"));
        console.log("bottom line remove");
      }

      // ?Left line remove
      if (
        sortedLi1.id == sortedLi2.id &&
        sortedLi1.classList.contains(`x-${1}`) &&
        sortedLi2.classList.contains(`x-${1}`) &&
        y > 0 &&
        y < 6
      ) {
        sortedLi1.classList.add("remove-card");
        sortedLi2.classList.add("remove-card");
        lisAfterTurgetted.forEach((cls) => cls.classList.remove("targetted"));
        console.log("left line remove");
      }

      // ?Right line remove
      if (
        sortedLi1.id == sortedLi2.id &&
        sortedLi1.classList.contains(`x-${0}`) &&
        sortedLi2.classList.contains(`x-${0}`) &&
        y > 0 &&
        y < 6
      ) {
        sortedLi1.classList.add("remove-card");
        sortedLi2.classList.add("remove-card");
        lisAfterTurgetted.forEach((cls) => cls.classList.remove("targetted"));
        console.log("right line remove");
      }

      // !Remove card when their betweens are open

      let removedCards = document.querySelectorAll(".remove-card");
      let one = lisAfterTurgetted.classList
      // console.log(one);

      removedCards.forEach((element) => {
        if (
          sortedLi1.id == sortedLi2.id &&
          sortedLi1.classList.contains(`y-${y}`) &&
          sortedLi2.classList.contains(`y-${y}`) &&
          // sortedLi1.classList.contains(`x-${x}`) &&
          sortedLi2.classList.contains(`x-${x}`) &&
          element.classList.contains("remove-card")
        ) {
          console.log('qwerty');
          sortedLi1.classList.add("remove-card");
          sortedLi2.classList.add("remove-card");
        }
      });
    }
  });
});

// ?Reset Btn
function reset() {
  location.reload();
  // random(newArr)
}

// ?Game over
// let timer = document.querySelector("#app");
// let hour = timer.querySelector('.base-timer__label')
// console.log(hour);
