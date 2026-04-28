const cinema = document.getElementById("cinema");
  const count = document.getElementById("count");
  const confirmBtn = document.getElementById("confirmBtn");

  const rows = 10;
  const seatsPerRow = 12;

  let selectedSeats = [];

  function createCinema() {
    let index = 0;

    for (let r = 0; r < rows; r++) {
      const row = document.createElement("div");
      row.classList.add("row");
      let rowLabel = document.createElement("strong");
      rowLabel.classList.add("row-label");
      rowLabel.textContent = `${r + 1}. Sor`;
      row.appendChild(rowLabel);
      for (let s = 0; s < seatsPerRow; s++) {
        const seat = document.createElement("div");
        seat.classList.add("seat");
        seat.textContent = s + 1;

        seat.dataset.index = index;

        seat.addEventListener("click", () => {
          if (seat.classList.contains("occupied")) return;

          seat.classList.toggle("selected");

          const seatIndex = parseInt(seat.dataset.index);

          if (selectedSeats.includes(seatIndex)) {
            selectedSeats = selectedSeats.filter(i => i !== seatIndex);
          } else {
            selectedSeats.push(seatIndex);
          }

          updateUI();
        });

        row.appendChild(seat);
        index++;
      }

      cinema.appendChild(row);
    }
  }

  function updateUI() {
    count.textContent = selectedSeats.length;
    confirmBtn.disabled = selectedSeats.length === 0;
  }

  confirmBtn.addEventListener("click", () => {
    alert("Lefoglalt helyek: " + selectedSeats.join(", "));
  });

  createCinema();