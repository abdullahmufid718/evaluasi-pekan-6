// Bagian 5, latihan logika :
 // ==========================================
// KUMPULAN FUNCTION & DEMO PENGUJIAN
// ==========================================

// 1. hitungFaktorial(n)
function hitungFaktorial(n) {
  if (n < 0) return null;
  let hasil = 1;
  for (let i = 1; i <= n; i++) {
    hasil *= i;
  }
  return hasil;
}

// 2. cekPalindrom(teks)
function cekPalindrom(teks) {
  if (!teks || teks.trim() === "") return false;
  let bersih = teks.trim().toLowerCase();
  let depan = 0;
  let belakang = bersih.length - 1;
  while (depan < belakang) {
    if (bersih[depan] !== bersih[belakang]) {
      return false;
    }
    depan++;
    belakang--;
  }
  return true;
}

// 3. hitungVokal(teks)
function hitungVokal(teks) {
  let count = 0;
  let vokal = "aiueo";
  let lower = teks.toLowerCase();
  for (let char of lower) {
    if (vokal.includes(char)) {
      count++;
    }
  }
  return count;
}

// 4. cariTerbesar(daftar)
function cariTerbesar(daftar) {
  if (!daftar || daftar.length === 0) return null;
  let maxVal = daftar[0];
  let maxIdx = 0;
  for (let i = 1; i < daftar.length; i++) {
    if (daftar[i] > maxVal) {
      maxVal = daftar[i];
      maxIdx = i;
    }
  }
  return { nilai: maxVal, indeks: maxIdx };
}

// 5. hapusDuplikat(daftar)
function hapusDuplikat(daftar) {
  let hasil = [];
  for (let item of daftar) {
    if (!hasil.includes(item)) {
      hasil.push(item);
    }
  }
  return hasil;
}

// 6. cekBilanganPrima(n)
function cekBilanganPrima(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// ==========================================
// DEMO PENGUJIAN DAN PENCETAKAN HASIL
// ==========================================

console.log("=== 1. hitungFaktorial ===");
console.log("5 ->", hitungFaktorial(5));     // 120
console.log("0 ->", hitungFaktorial(0));     // 1
console.log("1 ->", hitungFaktorial(1));     // 1
console.log("-3 ->", hitungFaktorial(-3));   // null

console.log("\n=== 2. cekPalindrom ===");
console.log('"Katak" ->', cekPalindrom("Katak"));     // true
console.log('" Malam " ->', cekPalindrom(" Malam ")); // true
console.log('"Kopi" ->', cekPalindrom("Kopi"));       // false
console.log('"" ->', cekPalindrom(""));             // false

console.log("\n=== 3. hitungVokal ===");
console.log('"Kedai Senja" ->', hitungVokal("Kedai Senja")); // 5
console.log('"RHYTHM" ->', hitungVokal("RHYTHM"));           // 0
console.log('"Aiueo" ->', hitungVokal("Aiueo"));             // 5

console.log("\n=== 4. cariTerbesar ===");
console.log("[12, 45, 7, 45, 30] ->", cariTerbesar([12, 45, 7, 45, 30])); // { nilai: 45, indeks: 1 }
console.log("[3] ->", cariTerbesar([3]));                               // { nilai: 3, indeks: 0 }
console.log("[] ->", cariTerbesar([]));                                 // null

console.log("\n=== 5. hapusDuplikat ===");
let orig1 = [1, 2, 2, 3, 1];
console.log("[1, 2, 2, 3, 1] ->", hapusDuplikat(orig1));
console.log("Array asli setelah dipanggil:", orig1);

let orig2 = ["a", "b", "a"];
console.log('["a", "b", "a"] ->', hapusDuplikat(orig2));
console.log("Array asli setelah dipanggil:", orig2);

let orig3 = [];
console.log("[] ->", hapusDuplikat(orig3));
console.log("Array asli setelah dipanggil:", orig3);

console.log("\n=== 6. cekBilanganPrima ===");
console.log("2 ->", cekBilanganPrima(2));     // true
console.log("17 ->", cekBilanganPrima(17));   // true
console.log("15 ->", cekBilanganPrima(15));   // false
console.log("1 ->", cekBilanganPrima(1));     // false
console.log("0 ->", cekBilanganPrima(0));     // false

// Jawaban komentar :

// 1. Pilih satu function. Jelaskan langkah demi langkah apa yang tersaji saat dipanggil dengan salah satu contoh (nilai variabel di tiap putaran perulangan).
//    - Contoh: hitungFaktorial(3)
//    - Langkah-langkah:
//      * Cek `n < 3` -> false (karena 3 tidak kurang dari 0).
//      * Inisialisasi `hasil = 1`.
//      * Putaran 1 (`i = 1`): Cek `1 <= 3` (true). `hasil = hasil * i` -> `1 * 1 = 1`. `i` bertambah jadi 2.
//      * Putaran 2 (`i = 2`): Cek `2 <= 3` (true). `hasil = hasil * i` -> `1 * 2 = 2`. `i` bertambah jadi 3.
//      * Putaran 3 (`i = 3`): Cek `3 <= 3` (true). `hasil = hasil * i` -> `2 * 3 = 6`. `i` bertambah jadi 4.
//      * Putaran 4 (`i = 4`): Cek `4 <= 3` (false). Perulangan berhenti.
//      * Mengembalikan nilai `hasil`, yaitu 6.

// 2. Pada hapusDuplikat, kenapa array asli tidak berubah? Kenapa kamu memakai method yang kamu pilih untuk memeriksa elemen ganda?
//    - Array asli tidak berubah karena kita membuat variabel array penampung baru bernama `hasil` di dalam fungsi, lalu melakukan iterasi pada array masukan (`daftar`) dan memasukkan elemen unik ke dalam `hasil` menggunakan `.push()`. Kita tidak pernah memodifikasi atau menimpa array `daftar` asli.
//    - Method `.includes()` dipilih karena sangat bersih, intuitif, dan mudah dibaca untuk memeriksa apakah suatu nilai sudah ada di dalam array `hasil` sebelum dimasukkan.

// 3. Pada cekBilanganPrima, apakah kamu memakai break? Apa yang terjadi jika baris itu dihapus: hasilnya salah atau hanya lebih lambat? Jelaskan.
//    - Dalam kode di atas saya menggunakan `return false;` di dalam blok `if (n % i === 0)`. Perintah `return` berfungsi langsung menghentikan fungsi dan keluar seketika, yang fungsinya bahkan lebih kuat daripada `break`. 
//    - Jika perintah penghentian tersebut dihapus, fungsi tidak akan langsung berhenti saat menemukan faktor pembagi, melainkan terus melalukan perulangan hingga habis, lalu mengembalikan nilai salah (bisa tertimpa jika tidak dirancang dengan benar, atau menghasilkan proses yang tidak efisien). Jika diubah menjadi sistem flag dengan `break`, menghapus `break` akan membuat pengecekan terus berjalan meski sudah terbukti bukan prima, sehingga program menjadi **lebih lambat** (inefisiensi waktu dari $O(\sqrt{n})$ menjadi tidak optimal).

// 4. Kenapa cariTerbesar([]) mengembalikan null, bukan 0?
//    - Karena angka `0` adalah sebuah nilai numerik valid yang mungkin saja ada sebagai elemen di dalam array (misalnya array suhu `[-2, 0, -5]`). Jika array kosong mengembalikan `0`, hal itu dapat menimbulkan ambiguitas apakah `0` tersebut adalah nilai elemen terbesar atau tanda bahwa array kosong. Menggunakan `null` jauh lebih tepat secara semantik untuk merepresentasikan ketiadaan data atau data kosong.

// 5. Tunjuk dua function yang memakai jenis perulangan berbeda (for, for...of, atau while). Kenapa kamu memilih jenis itu untuk masing-masing?
//    - `hitungFaktorial` menggunakan **`for` loop standar** (`for (let i = 1; i <= n; i++)`) karena kita memerlukan penghitung angka numerik (`i`) secara berurutan untuk dikalikan ke akumulator faktorial.
//    - `hitungVokal` menggunakan **`for...of` loop** (`for (let char of lower)`) karena sangat praktis dan elegan untuk mengiterasi setiap karakter (string) satu per satu tanpa perlu repot mengakses indeks array/string secara manual menggunakan `[i]`.

