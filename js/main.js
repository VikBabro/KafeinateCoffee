
  var bindAll = function() {
    var menuElements = document.querySelectorAll('.b-nav-tab');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  }

  var clear = function() {
    var menuElements = document.querySelectorAll('.b-nav-tab');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].classList.remove('active');
      var id = menuElements[i].getAttribute('id');
      document.querySelector(`[data-tab = ${id}]`).classList.remove('active');
    }
  }

  var change = function(e) {
    clear();
    e.target.classList.add('active');
    var id = e.currentTarget.getAttribute('id');
    document.querySelector(`[data-tab = ${id}]`).classList.add('active');
  }

  bindAll();



