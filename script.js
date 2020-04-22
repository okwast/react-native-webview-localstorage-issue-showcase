const storedData = localStorage.getItem("data");

if(storedData) {
  document.body.innerHTML = "Data already in local storage 😩"
} else {
  document.body.innerHTML = "Local storage was empty 🎉"
  localStorage.setItem("data", new Date().toUTCString)
}