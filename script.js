function updateDateTime() {
    const months = [
      "January", "February", "Mar", "April",
      "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
  
    const currentDate = new Date();
    const day = currentDate.getDate();
    const monthIndex = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const monthName = months[monthIndex];
    const hours = currentDate.getHours().toString().padStart(2, "0");
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");
    const seconds = currentDate.getSeconds().toString().padStart(2, "0");
  
    const a = `${day}-${monthName}-${year} [ ${hours}:${minutes}:${seconds} ]`;
    
    document.getElementById("curDate").textContent = a;
  }
  
  updateDateTime();
  setInterval(updateDateTime, 1000);

//   document.querySelector('.REGISTER').addEventListener('click', function() {
//     var maincontent_hidden = document.querySelector('#main-content');
//     maincontent_hidden.style.display = 'none';
// });

// document.querySelector('.REGISTER').addEventListener('click', function() {
//   var Part_3_hidden = document.querySelector('#Part_3');
//   Part_3_hidden.style.display = 'none';
// });
// document.querySelector('.REGISTER').addEventListener('click', function() {
//   var part_4_hidden = document.querySelector('#part_4');
//   part_4_hidden.style.display = 'none';
// });
  