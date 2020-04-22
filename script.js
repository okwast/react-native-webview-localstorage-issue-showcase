const storedData = localStorage.getItem("data");

if(storedData) {
  document.body.innerHTML = "<h1>Data already in local storage 😩</h1>"
} else {
  document.body.innerHTML = "<h1>Local storage was empty 🎉</h1>"
  localStorage.setItem("data", new Date().toUTCString)
}
