// Bagian 7: Tebak, Eksperimen, dan Jelaskan

// 7.1 TEBAK OUTPUT

console.log("=== POTONGAN A ===");

// 1. console.log("  Hai Kawan  ".trim().length);
// Tebakan: 9
// Hasil Asli: 9
console.log("  Hai Kawan  ".trim().length);

// 2. console.log("Kopi Susu".toUpperCase().slice(0, 4));
// Tebakan: KOPI
// Hasil Asli: KOPI
console.log("Kopi Susu".toUpperCase().slice(0, 4));

// 3. console.log("a,b,c".split(",").length);
// Tebakan: 3
// Hasil Asli: 3
console.log("a,b,c".split(",").length);

// 4. console.log("banana".replace("a", "o"));
// Tebakan: bonana
// Hasil Asli: bonana
console.log("banana".replace("a", "o"));

// 5. console.log("banana".replaceAll("a", "o"));
// Tebakan: bonono
// Hasil Asli: bonono
console.log("banana".replaceAll("a", "o"));

// 6. console.log(parseInt("42px"));
// Tebakan: 42
// Hasil Asli: 42
console.log(parseInt("42px"));

// 7. console.log(Number("42px"));
// Tebakan: NaN
// Hasil Asli: NaN
console.log(Number("42px"));

// 8. console.log(parseInt("3.99"));
// Tebakan: 3
// Hasil Asli: 3
console.log(parseInt("3.99"));

// 9. console.log(typeof (3.14159).toFixed(2));
// Tebakan: string
// Hasil Asli: string
console.log(typeof (3.14159).toFixed(2));

// 10. console.log((0.1 + 0.2).toFixed(2));
// Tebakan: 0.30
// Hasil Asli: 0.30
console.log((0.1 + 0.2).toFixed(2));

// 11. console.log("10" + 5 * 2);
// Tebakan: 1010
// Hasil Asli: 1010
console.log("10" + 5 * 2);

// 12. console.log(!0 && !"");
// Tebakan: true
// Hasil Asli: true
console.log(!0 && !"");


console.log("\n=== POTONGAN B ===");
let angka = [10, 20, 30, 40];
let potongan = angka.slice(1, 3);
let hapus = angka.splice(1, 2);

// 1. console.log(potongan);
// Tebakan: [20, 30]
// Hasil Asli: [20, 30]
console.log(potongan);

// 2. console.log(hapus);
// Tebakan: [20, 30]
// Hasil Asli: [20, 30]
console.log(hapus);

// 3. console.log(angka);
// Tebakan: [10, 40]
// Hasil Asli: [10, 40]
console.log(angka);

function ganda(n) { return n * 2; }
function cetak(n) { console.log(n * 2); }

// 4. console.log(ganda(4) + ganda(1));
// Tebakan: 10
// Hasil Asli: 10
console.log(ganda(4) + ganda(1));

// 5. console.log(cetak(4));
// Tebakan: 8 lalu undefined
// Hasil Asli: 8 lalu undefined
console.log(cetak(4));

const toko = {
  nama: "Senja",
  stok: 5,
  jual(n) {
    this.stok -= n;
    return this.stok;
  },
};
toko.jual(2);

// 6. console.log(toko.jual(1));
// Tebakan: 2
// Hasil Asli: 2
console.log(toko.jual(1));

// 7. console.log("stok" in toko);
// Tebakan: true
// Hasil Asli: true
console.log("stok" in toko);

// 8. for (let k in toko) { console.log(k); }
// Tebakan: nama, stok, jual
// Hasil Asli: nama, stok, jual
for (let k in toko) {
  console.log(k);
}


console.log("\n=== POTONGAN C ===");
let hasil = "";
for (let i = 1; i <= 6; i++) {
  if (i === 2) { continue; }
  if (i === 5) { break; }
  hasil += i;
}
// 1. console.log(hasil);
// Tebakan: 134
// Hasil Asli: 134
console.log(hasil);

let n = 3;
let kali = 1;
while (n > 0) {
  kali *= n;
  n--;
}
// 2. console.log(kali);
// Tebakan: 6
// Hasil Asli: 6
console.log(kali);

let x = 0;
do {
  x += 5;
} while (x < 3);
// 3. console.log(x);
// Tebakan: 5
// Hasil Asli: 5
console.log(x);

// 4. for (let huruf of "ABC") { console.log(huruf + huruf.toLowerCase()); }
// Tebakan: Aa, Bb, Cc (berbaris-baris)
// Hasil Asli: Aa, Bb, Cc
for (let huruf of "ABC") {
  console.log(huruf + huruf.toLowerCase());
}


// ==========================================
// 7.2 EKSPERIMEN PEMBUKTIAN
// ==========================================

console.log("\n=== 7.2 EKSPERIMEN ===");

// 1. Function declaration vs Function expression hoisting
console.log("1. Test Hoisting:");
console.log("Hasil deklarasi:", tesDeklarasi()); // Berhasil (hoisted)
function tesDeklarasi() { return "Berhasil dipanggil sebelum dideklarasikan"; }

/* 
// Jika diaktifkan, baris di bawah akan memunculkan error:
// TypeError: tesEkspresi is not a function (atau ReferenceError tergantung inisialisasi)
console.log(tesEkspresi()); 
const tesEkspresi = function() { return "Gagal"; };
*/


// 2. slice vs splice
console.log("2. slice vs splice:");
let arrAsli = [1, 2, 3];
let arrSlice = arrAsli.slice(0, 2);
console.log("slice (non-mutating) - Hasil:", arrSlice, "| Asli:", arrAsli);

let arrSplice = arrAsli.splice(0, 1);
console.log("splice (mutating) - Dihapus:", arrSplice, "| Asli berubah jadi:", arrAsli);


// 3. for...in vs for...of pada array
console.log("3. for...in vs for...of:");
let contohArr = ["a", "b"];
console.log("for...in (menghasilkan indeks teks):");
for (let idx in contohArr) {
  console.log(idx, typeof idx); // "0" (string), "1" (string)
}
console.log("for...of (menghasilkan nilai):");
for (let val of contohArr) {
  console.log(val); // "a", "b"
}


// 4. toFixed menghasilkan teks
console.log("4. toFixed tipe data:");
let hasilFix = (5).toFixed(1) + 1;
console.log('(5).toFixed(1) + 1 menghasilkan:', hasilFix, '(karena string "5.0" digabung "1")');


// 5. Enam nilai Falsy vs Truthy khusus ("0", [], {})
console.log("5. Nilai Falsy dan Truthy khusus:");
let falsyValues = [false, 0, "", null, undefined, NaN];
falsyValues.forEach(val => {
  if (val) {
    console.log("Masuk if:", val);
  } else {
    console.log("Tidak masuk if (Falsy):", val);
  }
});

let truthyKhusus = ["0", [], {}];
truthyKhusus.forEach(val => {
  if (val) {
    console.log("Masuk if (Truthy khusus):", val);
  }
});

// 7.3 JELASKAN

/*
JAWABAN PERTANYAAN PENJELASAN

1. Pada Potongan A, kenapa "10" + 5 * 2 hasilnya "1010"? Urutan apa yang dikerjakan JavaScript?
   - JavaScript mengikuti aturan prioritas operator (operator precedence). Perkalian (*) memiliki tingkat prioritas yang jauh lebih tinggi daripada penjumlahan (+). 
   - Oleh karena itu, operasi `5 * 2` dikerjakan terlebih dahulu menghasilkan `10`. 
   - Setelah itu, ekspresi berubah menjadi `"10" + 10`. Karena salah satu operand adalah string, operator `+` melakukan penggabungan string (string concatenation) alih-alih penjumlahan matematika, sehingga menghasilkan string `"1010"`.

2. Pada Potongan B, kenapa potongan dan hapus isinya sama, tetapi efeknya pada angka berbeda?
   - Method `.slice(1, 3)` adalah method *non-mutating* yang mengambil sebagian elemen dari array tanpa merusak atau mengubah array aslinya, melainkan mengembalikan array baru (`potongan`).
   - Sebaliknya, method `.splice(1, 2)` adalah method *mutating* yang secara permanen memotong/menghapus elemen dari array aslinya (`angka`), lalu mengembalikan elemen yang dihapus tersebut ke variabel `hapus`. Itulah sebabnya isi kedua variabel sama, namun array `angka` asli mengalami perubahan isi menjadi tersisa `[10, 40]`.

3. Pada Potongan B, kenapa console.log(cetak(4)) mencetak dua baris? Dari mana undefined berasal?
   - Baris pertama tercetak (`8`) karena fungsi `cetak(n)` berisi perintah `console.log(n * 2)` yang dijalankan saat fungsi dipanggil di dalam parameter `console.log(cetak(4))`.
   - Baris kedua tercetak `undefined` karena fungsi `cetak` tidak memiliki keyword `return`, sehingga secara otomatis fungsi tersebut mengembalikan nilai `undefined`, yang kemudian dicetak oleh `console.log` bagian luar.

4. Pada Potongan C, kenapa hasil bernilai "134"? Jelaskan apa yang terjadi di tiap putaran dari i = 1 sampai perulangan berhenti.
   - i = 1: Tidak memenuhi `i === 2` atau `i === 5`. Variabel `hasil` ("") ditambah "1" menjadi `"1"`.
   - i = 2: Memenuhi `if (i === 2)`, perintah `continue` dijalankan sehingga iterasi diskip (tidak menambahkan apa pun ke `hasil`).
   - i = 3: Tidak memenuhi syarat kondisi khusus. Variabel `hasil` ("1") ditambah "3" menjadi `"13"`.
   - i = 4: Tidak memenuhi syarat kondisi khusus. Variabel `hasil` ("13") ditambah "4" menjadi `"134"`.
   - i = 5: Memenuhi `if (i === 5)`, perintah `break` dijalankan sehingga perulangan langsung dihentikan secara total. Hasil akhir string adalah `"134"`.

5. Pada Potongan C, kenapa do...while tetap menjalankan blok satu kali padahal kondisi x < 3 bernilai false sejak awal?
   - Karakteristik utama dari struktur perulangan `do...while` adalah mengeksekusi blok kode di dalam `do` terlebih dahulu **sebelum** mengevaluasi kondisi yang ada pada `while` di bagian akhir. 
   - Dalam kasus tersebut, `x` bernilai `0` lalu ditambah `5` menjadi `5`. Setelah blok dijalankan sekali, baru kondisi `x < 3` diperiksa (yaitu `5 < 3` yang bernilai `false`), sehingga perulangan berhenti setelah putaran pertama dengan nilai akhir `x = 5`.
*/