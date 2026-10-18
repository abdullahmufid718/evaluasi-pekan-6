// Bagian 6: Perbaiki Kode :

const TARIF_PAJAK = 0.11;
const harga = { kopi: 20000, teh: 7500, roti: 15000 };
let keranjang = ["kopi", "teh", "roti", "teh"];
let jumlahMember = "5";

const pelanggan = {
  nama: "rina",
  saldo: 100000,

  // Bayar belanja. Seharusnya bayar(30000) mengembalikan sisa saldo: 70000
  bayar(jumlah) {
    // FIX 1: Menambahkan 'this.' pada saldo agar merujuk ke properti object pelanggan
    this.saldo -= jumlah;
    return this.saldo;
  },
};

// Subtotal: jumlahkan harga semua isi keranjang. Seharusnya: 50000
let subtotal = 0;
// FIX 2: Mengubah '<=' menjadi '<' agar tidak mengakses indeks di luar batas keranjang (yang menghasilkan undefined & NaN)
for (let i = 0; i < keranjang.length; i++) {
  subtotal += harga[keranjang[i]];
}

// Persen diskon: subtotal minimal 50000 → 10, minimal 25000 → 5, selain itu 0. Seharusnya diskon: 5000
let persen;
// FIX 3: Memperbaiki urutan kondisi if-else (cek subtotal >= 50000 terlebih dahulu sebelum >= 25000)
if (subtotal >= 50000) {
  persen = 10;
} else if (subtotal >= 25000) {
  persen = 5;
} else {
  persen = 0;
}
let diskon = (subtotal * persen) / 100;

// Promo hari. "jumat" 3000, "sabtu" dan "minggu" 5000, lainnya 0. Hari ini "jumat". Seharusnya: 3000
let hari = "jumat";
let promo;
switch (hari) {
  case "jumat":
    promo = 3000;
    // FIX 4: Menambahkan perintah 'break' agar tidak terjadi fall-through ke case berikutnya
    break;
  case "sabtu":
  case "minggu":
    promo = 5000;
    break;
  default:
    promo = 0;
}

// Pajak 11% dari (subtotal - diskon - promo). Seharusnya: 4620
// FIX 5: Menambahkan tanda kurung '(subtotal - diskon - promo)' agar prioritas operasi aritmatika benar
let pajak = (subtotal - diskon - promo) * TARIF_PAJAK;

// Total. Seharusnya: 46620
let total = subtotal - diskon - promo + pajak;

// Uang bayar dari formulir (teks "100.000"). Seharusnya: 100000, kembalian: 53380
let uangBayarTeks = "100.000";
// FIX 6: Menghapus titik pemisah ribuan dengan replace(/\./g, "") sebelum diparse ke integer
let uangBayar = parseInt(uangBayarTeks.replace(/\./g, ""));
let kembalian = uangBayar - total;

// Status. Uang bayar cukup. Seharusnya: "Lunas"
let status;
// FIX 7: Mengganti operator assignment '=' dengan operator perbandingan ketat '==='
if (uangBayar === total) {
  status = "Lunas";
} else {
  status = "Kurang";
}

// Nama rapi. Seharusnya: "Rina"
// FIX 8: Mengubah slice(0) menjadi slice(1) agar mengambil sisa huruf setelah huruf pertama
let namaRapi =
  pelanggan.nama.slice(0, 1).toUpperCase() + pelanggan.nama.slice(1);

// Keranjang: hapus "teh" pertama, lalu tambah "air" di akhir. Seharusnya: [ 'kopi', 'roti', 'teh', 'air' ]
// FIX 9: Mengubah slice(1, 1) yang non-mutating menjadi splice(1, 1) untuk menghapus elemen pertama "teh"
keranjang.splice(1, 1);
// FIX 10: Mengubah unshift("air") yang menambah di depan menjadi push("air") untuk menambah di akhir
keranjang.push("air");

// Member bertambah 1. Seharusnya: 6
// FIX 11: Mengubah string jumlahMember menjadi integer dengan parseInt() sebelum ditambah 1
let jumlahMemberBaru = parseInt(jumlahMember) + 1;

// Rata-rata per item (total dibagi 4) ditambah biaya kemasan 10. Seharusnya: 11665
// FIX 12: Menghapus .toFixed(2) yang mengubah angka menjadi string (menghindari string concatenation pada rataRata + 10)
let rataRata = total / 4;
let rataRataTotal = rataRata + 10;

// Format rupiah. Seharusnya formatRupiah(53380) = "Rp 53380"
function formatRupiah(angka) {
  // FIX 13: Menambahkan keyword 'return' agar fungsi mengembalikan string hasil format
  return "Rp " + angka;
}

console.log(subtotal, diskon, promo, pajak, total);
console.log(uangBayar, kembalian, status);
console.log(namaRapi);
console.log(keranjang);
console.log(jumlahMemberBaru);
console.log(rataRataTotal);
console.log(formatRupiah(kembalian));
console.log(pelanggan.bayar(30000));

// FIX 14: Mengubah 'for...of' menjadi 'for...in' karena 'harga' adalah sebuah object (bukan iterable)
for (let kunci in harga) {
  console.log(kunci + ": " + harga[kunci]);
}


/*
====================================================================
CATATAN BUG (15 KESALAHAN)
====================================================================
1. Pelanggan.bayar (Runtime Error):
   - Jenis: Runtime Error (ReferenceError).
   - Penyebab: Mengakses variabel `saldo` secara langsung di dalam method object tanpa `this.saldo`.
2. Perulangan Subtotal (Logical Error):
   - Jenis: Logical Error (menghasilkan NaN).
   - Penyebab: Menggunakan `<=` pada `i <= keranjang.length`, menyebabkan iterasi melampaui batas indeks array dan menghasilkan `undefined`.
3. Urutan Diskon (Logical Error):
   - Jenis: Logical Error.
   - Penyebab: Kondisi `subtotal >= 25000` ditaruh di atas `subtotal >= 50000`, sehingga subtotal 50000 langsung masuk ke syarat pertama (5%).
4. Switch Case Fall-through (Logical Error):
   - Jenis: Logical Error.
   - Penyebab: Tidak ada perintah `break` pada `case "jumat"`, sehingga eksekusi berlanjut ke `case "sabtu"` dan menimpa nilai `promo` menjadi 5000.
5. Perhitungan Pajak (Logical Error):
   - Jenis: Logical Error.
   - Penyebab: Kurang tanda kurung, menyebabkan `promo * TARIF_PAJAK` dihitung duluan sebelum pengurangan subtotal dan diskon.
6. ParseInt Uang Bayar (Logical Error):
   - Jenis: Logical Error.
   - Penyebab: `parseInt("100.000")` berhenti membaca saat menemui titik `.`, menghasilkan nilai 100 bukan 100000.
7. Kondisi Status (Logical Error / Bug Assignment):
   - Jenis: Logical Error / Assignment di dalam if.
   - Penyebab: Menggunakan operator `=` alih-alih `===`, mengubah nilai `uangBayar` menjadi `total`.
8. Nama Rapi Slice (Logical Error):
   - Jenis: Logical Error.
   - Penyebab: Menggunakan `slice(0)` alih-alih `slice(1)`, sehingga seluruh string nama tercetak dua kali.
9. Keranjang Slice Method (Logical Error):
   - Jenis: Logical Error.
   - Penyebab: Menggunakan `slice(1, 1)` yang bersifat non-mutating dan tidak menghapus elemen pada array asli (harus `splice`).
10. Keranjang Unshift (Logical Error):
    - Jenis: Logical Error.
    - Penyebab: Menggunakan `unshift("air")` yang menambahkan elemen di awal array, padahal diminta di akhir (`push`).
11. Jumlah Member (Logical Error):
    - Jenis: Logical Error (string concatenation).
    - Penyebab: `jumlahMember` bertipe string (`"5"`), sehingga ditambah 1 menghasilkan `"51"` bukan 6.
12. Rata-Rata toFixed (Logical Error):
    - Jenis: Logical Error.
    - Penyebab: `.toFixed(2)` menghasilkan string, sehingga `rataRata + 10` menggabungkan string bukannya menjumlahkan angka.
13. Format Rupiah Return (Logical Error):
    - Jenis: Logical Error.
    - Penyebab: Fungsi `formatRupiah` tidak memiliki keyword `return`, sehingga mengembalikan `undefined`.
14. For...of pada Object (Runtime Error):
    - Jenis: Runtime Error (TypeError).
    - Penyebab: Menggunakan `for...of` pada object `harga` (object bukan iterable seperti array).
15. (Akumulasi Logika Variabel uangBayar yang berubah akibat assignment di Error 7)
*/
// Jawaban komentar :

// 1. Kenapa if (uangBayar = total) tidak menimbulkan error? Apa yang terjadi pada nilai uangBayar setelah baris itu dijalankan?
// - Tidak menimbulkan error karena operator `=` adalah operator penugasan (*assignment*) yang valid dalam sintaks JavaScript. Ekspresi `uangBayar = total` menetapkan nilai `total` (46620) ke dalam variabel `uangBayar` 
// dan mengembalikan nilai tersebut. Karena nilainya *truthy*, blok `if` selalu tereksekusi. Setelah baris itu dijalankan, nilai variabel `uangBayar` yang sebelumnya `100000` berubah menjadi `46620`.

// 2. Kenapa parseInt("100.000") menghasilkan 100, bukan 100000?
// - Fungsi `parseInt()` membaca string dari kiri ke karakter numerik dan otomatis berhenti membaca begitu menemukan karakter non-angka pertama (dalam hal ini tanda titik `.` yang digunakan sebagai pemisah ribuan). Oleh karena itu, string `"100.000"` hanya dibaca hingga `"100"`.
