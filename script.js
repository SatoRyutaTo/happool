document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("account").addEventListener("click", function() {
        this.classList.toggle("active");
        document.getElementById("nav").classList.toggle("active");
    })
});