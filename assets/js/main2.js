const email = localStorage.getItem('subEmail');
const display = document.getElementById('email');
display.textContent = email
document.addEventListener("DOMContentLoaded", function(){
    const dismissBtn = document.getElementById('dismissBtn');
    dismissBtn.addEventListener('click', () => {
    window.location.href = "index.html";
});
});
