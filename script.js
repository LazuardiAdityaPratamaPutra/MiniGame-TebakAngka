alert('Selamat datang di Game Tebak Angka!');

var ulang = true;

while (ulang) {
  var chance = 3;
  var angka = Math.floor(Math.random() * 10) + 1;
  var hasil = "";

  while (chance >= 1) {
    var player = Number(prompt('Tebak angka antara 1 sampai 10.\nKamu punya ' + chance + ' kesempatan dalam menebak.'));
    if (player === angka){
      hasil = 'Benar!';
      alert('Selamat kamu berhasil menebak angka ' + angka + ' dan hasilnya adalah ' + hasil);
      break;
    }else if (chance === 1) {
      chance = 0; 
      alert('Kesempatanmu sudah habis! Angka yang benar adalah ' + angka + '.');
    }else if (player < angka ){
      hasil = 'Terlalu rendah!';
      chance -= 1;
      alert('Tebakanmu ' + hasil + '\nKamu masih punya ' + chance + ' kesempatan lagi.');
    }else if (player > angka ){
      hasil = 'Terlalu tinggi!';
      chance -= 1;
      alert('Tebakanmu ' + hasil + '\nKamu masih punya ' + chance + ' kesempatan lagi.');
    }else {
      alert('Input tidak valid! Silakan masukkan angka antara 1 sampai 10.');
    }
  }
  ulang = confirm('Apakah kamu ingin bermain lagi?');
}
alert('Terima kasih telah bermain!');