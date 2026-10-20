// 1. Pilih elemen tombol dari HTML berdasarkan ID-nya ('sapaButton')
const tombolSapa = document.getElementById('sapaButton');

// 2. Tambahkan 'event listener' untuk mendengarkan aksi klik pada tombol
tombolSapa.addEventListener('click', function() {
    // 3. Jalankan pesan peringatan (alert) ketika tombol diklik
    alert('Halo! Terima kasih sudah berkunjung!');
});
