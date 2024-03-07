const seatBtn = document.getElementsByClassName("seat-btn");
let count = 0;
let selectedCount = 40;

for (let singleSeat of seatBtn) {
  const index = singleSeat;
  index.addEventListener("click", function (event) {

    event.target.classList.toggle("btnStyle");

    if (index.classList.contains("active")) {
        const seatCount = document.getElementById("total-add");
        seatCount.innerText = count -= 1;
      selectedCount++;
      index.classList.remove("active");
    } else {
        const seatCount = document.getElementById("total-add");
        seatCount.innerText = count += 1
      selectedCount--;
      index.classList.add("active");
    }

    leftCount();
  });
}

function leftCount() {
  document.getElementById("total-left").textContent = selectedCount;
}
