function tampilkanWaktu() {
    var waktu = new Date();

    var jam = waktu.getHours();
    var menit = waktu.getMinutes();
    var detik = waktu.getSeconds();

    if (jam < 10) jam = "0" + jam;
    if (menit < 10) menit = "0" + menit;
    if (detik < 10) detik = "0" + detik;

    var salam;
    if (jam <= 9){
        salam = "Good Morning Traveller!";
    } else if (jam <= 14){
        salam = "Good Afternoon Traveller!";
    } else if (jam <= 18){
        salam = "Good Evening Traveller!";
    } else {
        salam = "Good Night Traveller!";
    }

    var namaHari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
    var namaBulan = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Ags","Sep","Okt","Nov","Des"];

    var hari = namaHari[waktu.getDay()];
    var tanggal = waktu.getDate();
    var bulan = namaBulan[waktu.getMonth()];
    var tahun = waktu.getFullYear();

    var output = hari + ", " + tanggal + " " + bulan + " " + tahun +
        " | " + jam + ":" + menit + ":" + detik +
        " | " + salam;

    document.getElementById("waktuFull").innerText = output;
}

setInterval(tampilkanWaktu, 1000);
tampilkanWaktu();

function toggleMenu() {
    const menu = document.querySelector('.navbar .menu');
    menu.classList.toggle('show');
}

// Optional: alert saat submit form
const form = document.querySelector('.contact-card form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Pesan Anda telah terkirim!');
    form.reset();
});

