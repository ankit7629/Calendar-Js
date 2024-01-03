const currentMonth = document.querySelector('.current-date');
const tbody = document.querySelector('.tbody');
const prev = document.getElementById('left');
const next = document.getElementById('right');

var monthNameList = ["","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function createCalendar() {

  let date = new Date();
  
  
  month = date.getMonth() + 1;
  year = date.getFullYear();

  let firstDay = new Date(year, month, 1)
  let numberOfDays = new Date(year, month, 0)
  
  
  for (let i = 0; i < firstDay.getDay(); i++) {
    let tabledate = document.createElement('td');
    tbody.appendChild(tabledate)
  }

  for (let i = firstDay.getDate(); i <= numberOfDays.getDate(); i++) {
    let tabledate = document.createElement('td');
    tabledate.textContent = i;
    tbody.appendChild(tabledate);
    let currentDay = new Date(year, month, i).getDay();
    if (currentDay === 6) {
      let tabledate2 = document.createElement('tr');
      tbody.appendChild(tabledate2)
    }
  }

  

}

createCalendar()

let value = month;

prev.addEventListener('click', () =>{
   if(value < 2){
    value = 12
   }else if(value > 12){
     value = 1
   }
   else{
    value = value - 1
   }
   currentMonth.innerHTML = `${monthNameList[value]} 2023`;
   
   return value
})

// let nextValue = month;
next.addEventListener('click', () =>{ 
  if(value > 11){
   value = 1
  }else if(value < 0){
   value = 12
  }else{
    value = value + 1
  }
  currentMonth.innerHTML = `${monthNameList[value]} 2023`;
  return value
})

