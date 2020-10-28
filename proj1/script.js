var counter = document.querySelector(".counter")
var clients = document.querySelector(".clients")

// counter.innerHTML = 1001;

let count=1;
setInterval(() => {
  if (count < 2000) {
    count++;
    counter.innerText = count;

  }
},0.1);

setTimeout( () => {
  clients.innerText = "Clients in The Industry."
}, 8000)
