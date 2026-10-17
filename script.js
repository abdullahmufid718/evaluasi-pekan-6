// Bagian 2: Data dan Pembersihan Data : 

// 2.1 Data : 

const kedai = {
  nama: "Kedai Makanan Sederhana",
  pemilik: "Raditya Kiko",
  kota: "Madiun",
  tahunBerdiri: 2022,
  sedangBuka: true,
  nomorWhatsApp: "0895329949427",
  website: null,
  jamOperasional: {buka: "09:00", tutup: "21:00"}
};

const menu = [
{ nama: "Ayam Bakar",
    harga:  25000,
    kategori: "Makanan",
    stok: 200,
},
{ nama: "Es Teh",
    harga: 5000,
    kategori: "Minuman",
    stok: 250,
},
{ nama: "Ikan Goreng",
    harga: 25000,
    kategori: "Makanan",
    stok: 200,
},
{ nama: "Ayam Goreng",
    harga: 20000,
    kategori: "Makanan",
    stok: 200,
},
{ nama: "Ikan Bakar",
    harga: 27000,
    kategori: "Makanan",
    stok: 200,
},
{ nama: "Es Jeruk",
    harga: 5000,
    kategori: "Minuman",
    stok: 250,
},
{ nama: "Kentang Goreng",
    harga: 7000,
    kategori: "snack",
    stok: 150,
},
{ nama: "Cilok Goang",
    harga: 5000,
    kategori: "snack",
    stok: 0,
},
]

const transaksiMentah = [
//  3 TRANSAKSI YANG BERSTATUS LUNAS, 1 VOUCHER KOSONG DAN 2 VOUCHER BERISI :

// TRANSAKSI 1 LUNAS, 1 VOUCHER BERISI :
{ kode: "trs-001", 
  pelanggan: "rey SAGARA",
  hari: "Selasa",
  uangBayar: "50.000",
  voucher: "diskon10",
  pesanan: [ 
    {menu: "Ayam Bakar", jumlah: "2" }
]
},
// TRANSAKSI 2 LUNAS, 1 VOUCHER BERISI :
{ kode: "trs-002", 
  pelanggan: "maul KECE",
  hari: "Rabu",
  uangBayar: "80.000",
  voucher: "diskon10",
  pesanan: [ 
    {menu: "Ayam Goreng", jumlah: "4" }
]
},
// TRANSAKSI 3 LUNAS, 1 VOUCHER TIDAK TERISI :
{ kode: "trs-003", 
  pelanggan: "Yasmin",
  hari: "Kamis",
  uangBayar: "42.000",
  voucher: "",
  pesanan: [ 
    {menu: "Kentang Goreng", jumlah: "6" }
]
},
// 1 TRANSAKSI TIDAK LUNAS :
{ kode: "trs-004", 
  pelanggan: "Dani",
  hari: "Jum'at",
  uangBayar: "10.000",
  voucher: "diskon10",
  pesanan: [ 
    {menu: "Es Jeruk", jumlah: "4" }
]
},
// 2 TRANSAKSI YANG TERTOLAK :

// TRANSAKSI 1 YANG TERTOLAK :
{ kode: "trs-005", 
  pelanggan: "Rio",
  hari: "Sabtu",
  uangBayar: "30.000",
  voucher: "diskon10",
  pesanan: []
},
// TRANSAKSI 2 YANG TERTOLAK :
{ kode: "trs-006", 
  pelanggan: "Kasep",
  hari: "Ahad",
  uangBayar: "20.000",
  voucher: "diskon10",
  pesanan: []
},
// TRANSAKSI YANG TETAP DIPROSES TETAPI PUNYA ITEM TIDAK VALID 
{ kode: "trs-007", 
  pelanggan: "Asep",
  hari: "Senin",
  uangBayar: "0",
  voucher: "diskon10",
  pesanan: [ 
    {menu: "Mie Ayam", jumlah: "4" }
]
},
]

// 2.2 Function Pembersih Data

// 2.3 Data Bersih :

const transaksiBersih = [];

for (let transaksi of transaksiMentah) {
  // Membersihkan array pesanan di dalam transaksi
  const pesananBersih = [];
  
  for (let item of transaksi.pesanan) {
    pesananBersih.push({
      menu: bersihkanNama(item.menu),
      jumlah: ubahKeAngka(item.jumlah)
    });
  }

  // Memasukkan data yang sudah dibersihkan ke array transaksiBersih
  transaksiBersih.push({
    kode: transaksi.kode.toUpperCase(),
    pelanggan: bersihkanNama(transaksi.pelanggan),
    hari: transaksi.hari.trim().toLowerCase().replace(/\s+/g, " "),
    uangBayar: ubahKeAngka(transaksi.uangBayar),
    persenVoucher: ambilPersenVoucher(transaksi.voucher),
    pesanan: pesananBersih
  });
}

// Mencetak hasil transaksiBersih ke console
console.log(transaksiBersih);

// Jawab dalam komentar:

// 1.Perbedaan parseInt, parseFloat, dan Number :
// a.Number(): Mengubah seluruh teks menjadi angka secara utuh. Jika ada satu karakter saja yang bukan angka (selain titik desimal valid), hasilnya NaN.
// b.parseInt(): Mengambil angka dari depan teks dan hanya menghasilkan bilangan bulat (titik desimal dan angka di belakangnya dibuang).
// c.parseFloat(): Mengambil angka dari depan teks dan membolehkan pecahan/desimal.
//  Kenapa ubahKeAngka harus menghapus titik terlebih dahulu? = Karena di JavaScript (dan standar internasional), titik (.) dibaca sebagai pemisah desimal, bukan pemisah ribuan. 
// Jika teksnya "150.000", JavaScript akan mengira itu adalah angka pecahan 150 koma 000, bukan seratus lima puluh ribu.
// Apa hasil parseInt("150.000")?, hasil nya adalah 150 karena parseInt akan berhenti membaca begitu menemukan tanda titik pertama.
// 2.toFixed mengembalikan teks atau angka? = teks
// Buktikan dengan typeof 
// = let angka = (10).toFixed(2);
// console.log(typeof angka);
// tunjukkan akibatnya jika hasil toFixed langsung dijumlahkan dengan angka. 
// = let hasil = (10).toFixed(2) + 5; 
// console.log(hasil); // Output: "10.005" (bukan 15), Terjadi penggabungan teks (string concatenation), bukan penjumlahan matematika.
// 3.replace(): Hanya mengubah kecocokan pertama yang ditemukan pada teks.
// replaceAll(): Mengubah seluruh kecocokan yang ditemukan dari awal sampai akhir teks.
// 4.Karena tipe data string di JavaScript bersifat tidak bisa diubah langsung (immutable). Method seperti toUpperCase() tidak merusak string aslinya, melainkan membuat dan mengembalikan string baru di memori.
// 5. 

