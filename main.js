function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

function orderNow() {
  const userLoggedIn = false; 
  if (userLoggedIn) {
    alert('Proceed to booking.');
  } else {
    document.getElementById('signinModal').style.display = 'block';
  }
}

window.onclick = function(event) {
  const modals = document.getElementsByClassName('modal');
  for (let i = 0; i < modals.length; i++) {
    if (event.target === modals[i]) {
      modals[i].style.display = 'none';
    }
  }
};
document.querySelectorAll('.close').forEach(function(closeButton) {
  closeButton.onclick = function() {
    const modal = this.closest('.modal');
    modal.style.display = 'none';
  };
});

function signIn() {
  
  window.location.href = "signin.html";
}

function register() {
  
  window.location.href = "register.html";
}
