const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Get data from localstorage and populate UI
function populateUI () {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if(selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {      
      // indexOf 찾아서 없으면 음수를 반환함 그래서 > -1
      if(selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex
  }
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  // arr 복사(스프레드 op)
  // map은 하나씩 리턴해줌
  // 찾으려는 시트가 몇번째 칸(index) 인지..
  // Copy selected seats into arr
  // Map through array
  // return a new array indexes  
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  // seatsIndex가 arr라서 JSON.stringify를 써줘야함
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
  // f12 -> application -> local Stroage 가면 확인가능

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value; // 한 장당 가격 바꿔주고
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount(); // 계산하는 함수 다시 불러와서 계산
})

// Seat click event
container.addEventListener('click', (e) => {
  if(
    e.target.classList.contains('seat') && !e.target.classList.contains('occupied')
  ) {
    // toggle로 클래스에 selected를 추가했다가 뻇다가 해버림 good
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
})

// initial count and total set
updateSelectedCount();