const buttonElement = document.getElementById('btn');
buttonElement.addEventListener('click', function (event) {
  alert('Okeey');
});
buttonElement.addEventListener('click', {
  handleEvent: function (event) {
    alert('Let`s go!');
  }
});
