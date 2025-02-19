function showHome() {
    let ucapan = document.getElementById("ucapan")
    let home = document.getElementById("home")
    let form = document.getElementById("form")
    
    home.style.display = "block"
    form.style.display = "none"
    ucapan.style.display = "none"
}

function showUcapan() {
    let ucapan = document.getElementById("ucapan")
    let home = document.getElementById("home")
    let form = document.getElementById("form")
    
    home.style.display = "none"
    form.style.display = "none"
    ucapan.style.display = "block"
}

function showForm() {
    let ucapan = document.getElementById("ucapan")
    let home = document.getElementById("home")
    let form = document.getElementById("form")
    
    home.style.display = "none"
    form.style.display = "block"
    ucapan.style.display = "none"
}

function sendMessage() {
    let phone = "6281383231431"; // Nomor tujuan
    let message = document.getElementById("text").value;
    let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); // Membuka WhatsApp di tab baru
}