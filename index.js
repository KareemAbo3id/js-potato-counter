const COUNTER_CONTAINER = document.getElementById("COUNTER_CONTAINER");
const PLUS_BUTTON = document.getElementById("PLUS_BUTTON");
const MINUS_BUTTON = document.getElementById("MINUS_BUTTON");
const RESET_BUTTON = document.getElementById("RESET_BUTTON");
const PRINT_BUTTON = document.getElementById("PRINT_BUTTON");
const DEAL_BY = document.getElementById("DEAL_BY");

let count = 0;
let dealBy = Number(DEAL_BY.value);

COUNTER_CONTAINER.innerHTML = count;

PLUS_BUTTON.addEventListener("click", () => {
  dealBy = Number(DEAL_BY.value);
  count = count + dealBy;
  COUNTER_CONTAINER.innerHTML = count;
  console.log(dealBy);
});

MINUS_BUTTON.addEventListener("click", () => {
  dealBy = Number(DEAL_BY.value);
  count = count - dealBy;
  COUNTER_CONTAINER.innerHTML = count;
  console.log(dealBy);
});

RESET_BUTTON.addEventListener("click", () => {
  dealBy = 1;
  count = 0;
  COUNTER_CONTAINER.innerHTML = count;
  console.log("Counter Reset");
  console.clear();
});

PRINT_BUTTON.addEventListener("click", () => {
  console.log("PRINT:");
  console.log("count: ", count);
  console.log("count Typeof: ", typeof count);
  console.log("dealBy: ", dealBy);
  console.log("dealBy Typeof: ", typeof dealBy);
  console.log("===========================");
});
