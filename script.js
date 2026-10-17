// Bagian 2: Data dan Pembersihan Data : 

// 2.1 Data : 

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

// Bagian 3: Mesin Kasir :

// --- KODE HELPER SEBELUMNYA ---
function bersihkanNama(teks) {
  if (!teks || typeof teks !== "string") return "";
  return teks.trim().replace(/\s+/g, " ").split(" ").map(kata => kata.charAt(0).toUpperCase() + kata.slice(1).toLowerCase()).join(" ");
}

const ubahKeAngka = function(teks) {
  if (!teks) return 0;
  let bersih = String(teks).replace(/\./g, "").replace(/\s+/g, "");
  let hasil = Number(bersih);
  return isNaN(hasil) ? 0 : hasil;
};

const ambilPersenVoucher = (kode) => {
  if (!kode || typeof kode !== "string") return 0;
  let bersih = kode.trim().toLowerCase();
  if (bersih.startsWith("diskon")) {
    let angkaStr = bersih.replace("diskon", "");
    let angka = Number(angkaStr);
    return isNaN(angka) ? 0 : angka;
  }
  return 0;
};

const formatRupiah = function(angka) {
  if (isNaN(angka)) return "Rp 0";
  let numStr = Math.abs(Number(angka)).toString();
  let sisa = numStr.length % 3;
  let rupiah = numStr.substr(0, sisa);
  let ribuan = numStr.substr(sisa).match(/\d{3}/g);
  if (ribuan) {
    let pemisah = sisa ? "." : "";
    rupiah += pemisah + ribuan.join(".");
  }
  return "Rp " + rupiah;
};

// --- DATA KEDAI & MENU ---
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
  { nama: "Ayam Bakar", harga: 25000, kategori: "Makanan", stok: 200 },
  { nama: "Es Teh", harga: 5000, kategori: "Minuman", stok: 250 },
  { nama: "Ikan Goreng", harga: 25000, kategori: "Makanan", stok: 200 },
  { nama: "Ayam Goreng", harga: 20000, kategori: "Makanan", stok: 200 },
  { nama: "Ikan Bakar", harga: 27000, kategori: "Makanan", stok: 200 },
  { nama: "Es Jeruk", harga: 5000, kategori: "Minuman", stok: 250 },
  { nama: "Kentang Goreng", harga: 7000, kategori: "snack", stok: 150 },
  { nama: "Cilok Goang", harga: 5000, kategori: "snack", stok: 0 }
];

// ==========================================
// OBJEK KASIR
// ==========================================
const kasir = {
  menu: menu,
  saldoKas: 0,
  riwayat: [],
  pecahan: [50000, 20000, 10000, 5000, 2000, 1000],

  cariMenu(nama) {
    for (let m of this.menu) {
      if (m.nama.toLowerCase() === nama.toLowerCase()) {
        return m;
      }
    }
    return null;
  },

  hitungSubtotal(pesanan) {
    let subtotal = 0;
    let itemValid = [];
    let itemTidakValid = [];

    for (let item of pesanan) {
      let menuDitemukan = this.cariMenu(item.menu);
      
      // Validasi item
      if (!menuDitemukan) {
        itemTidakValid.push({ menu: item.menu, alasan: "Menu tidak ditemukan" });
        continue;
      }
      if (item.jumlah <= 0) {
        itemTidakValid.push({ menu: item.menu, alasan: "Jumlah tidak valid" });
        continue;
      }
      if (menuDitemukan.stok < item.jumlah) {
        itemTidakValid.push({ menu: item.menu, alasan: "Stok tidak cukup" });
        continue;
      }

      let hargaSatuan = menuDitemukan.harga;
      subtotal += hargaSatuan * item.jumlah;
      itemValid.push({ menu: menuDitemukan.nama, jumlah: item.jumlah, harga: hargaSatuan });
    }

    return { subtotal, itemValid, itemTidakValid };
  },

  hitungPromoHari(hari) {
    let hariBersih = hari.trim().toLowerCase();
    switch (hariBersih) {
      case "jumat":
      case "jum'at":
        return 3000;
      case "sabtu":
      case "minggu":
      case "ahad":
        return 5000;
      default:
        return 0;
    }
  },

  hitungDiskon(subtotal, persenVoucher) {
    let persenSubtotal = 0;
    if (subtotal >= 100000) {
      persenSubtotal = 15;
    } else if (subtotal >= 50000) {
      persenSubtotal = 10;
    } else if (subtotal >= 25000) {
      persenSubtotal = 5;
    } else {
      persenSubtotal = 0;
    }

    let persenFinal = Math.max(persenSubtotal, persenVoucher);
    let diskon = (subtotal * persenFinal) / 100;
    return Math.round(diskon);
  },

  hitungPajak(nilai, tarif = 0.11) {
    return Math.round(nilai * tarif);
  },

  hitungKembalianPecahan(kembalian) {
    if (kembalian < 0) return null;
    
    let hasilPecahan = { sisa: 0 };
    let sisaKembalian = kembalian;

    for (let pecahanNominal of this.pecahan) {
      if (sisaKembalian >= pecahanNominal) {
        let lembar = Math.floor(sisaKembalian / pecahanNominal);
        hasilPecahan[pecahanNominal] = lembar;
        sisaKembalian %= pecahanNominal;
      }
    }
    hasilPecahan.sisa = sisaKembalian;
    return hasilPecahan;
  },

  prosesTransaksi(trx) {
    // 1. Validasi Truthy/Falsy
    if (!trx.pelanggan) {
      let hasilDitolak = { kode: trx.kode, pelanggan: trx.pelanggan || "Tanpa Nama", status: "DITOLAK", alasan: "Nama pelanggan kosong" };
      this.riwayat.push(hasilDitolak);
      return hasilDitolak;
    }
    if (!trx.pesanan || trx.pesanan.length === 0) {
      let hasilDitolak = { kode: trx.kode, pelanggan: trx.pelanggan, status: "DITOLAK", alasan: "Pesanan kosong" };
      this.riwayat.push(hasilDitolak);
      return hasilDitolak;
    }

    let hasilSub = this.hitungSubtotal(trx.pesanan);
    if (hasilSub.itemValid.length === 0) {
      let hasilDitolak = { 
        kode: trx.kode, 
        pelanggan: trx.pelanggan, 
        status: "DITOLAK", 
        alasan: "Tidak ada item valid",
        itemTidakValid: hasilSub.itemTidakValid
      };
      this.riwayat.push(hasilDitolak);
      return hasilDitolak;
    }

    // 3. Perhitungan Keuangan
    let subtotal = hasilSub.subtotal;
    let promoHari = this.hitungPromoHari(trx.hari);
    let diskon = this.hitungDiskon(subtotal, trx.persenVoucher);
    
    let nilaiSetelahDiskon = subtotal - diskon - promoHari;
    if (nilaiSetelahDiskon < 0) nilaiSetelahDiskon = 0;

    let pajak = this.hitungPajak(nilaiSetelahDiskon);
    let total = nilaiSetelahDiskon + pajak;

    // 4. Status Pembayaran
    let uangBayar = trx.uangBayar;
    let kembalian = uangBayar - total;
    let status = uangBayar >= total ? "LUNAS" : "KURANG";
    let pecahanKembalian = null;

    // 5. Jika LUNAS
    if (status === "LUNAS") {
      // Kurangi stok menu
      for (let itemV of hasilSub.itemValid) {
        let m = this.cariMenu(itemV.menu);
        if (m) {
          m.stok -= itemV.jumlah;
        }
      }
      // Tambah saldo kas
      this.saldoKas += total;
      // Hitung pecahan kembalian
      pecahanKembalian = this.hitungKembalianPecahan(kembalian);
    }

    let hasilFinal = {
      kode: trx.kode,
      pelanggan: trx.pelanggan,
      status,
      subtotal,
      promoHari,
      diskon,
      pajak,
      total,
      uangBayar,
      kembalian,
      pecahanKembalian,
      itemValid: hasilSub.itemValid,
      itemTidakValid: hasilSub.itemTidakValid
    };

    this.riwayat.push(hasilFinal);
    return hasilFinal;
  },

  cetakStruk(hasil) {
    console.log("========================================");
    console.log(`STRUK TRANSAKSI: ${hasil.kode}`);
    console.log(`Pelanggan: ${hasil.pelanggan}`);
    console.log(`Status: ${hasil.status}`);
    console.log("----------------------------------------");

    if (hasil.status === "DITOLAK") {
      console.log(`ALASAN PENOLAKAN: ${hasil.alasan}`);
      if (hasil.itemTidakValid && hasil.itemTidakValid.length > 0) {
        console.log("Item Tidak Valid:");
        hasil.itemTidakValid.forEach((itv, idx) => {
          console.log(`  ${idx + 1}. ${itv.menu} - Alasan: ${itv.alasan}`);
        });
      }
      console.log("========================================\n");
      return;
    }

    console.log("Daftar Item Valid:");
    hasil.itemValid.forEach((item, index) => {
      console.log(`  ${index + 1}. ${item.menu} (${item.jumlah}x) @ ${formatRupiah(item.harga)}`);
    });

    if (hasil.itemTidakValid && hasil.itemTidakValid.length > 0) {
      console.log("\nCatatan Item Tidak Valid:");
      hasil.itemTidakValid.forEach((itv) => {
        console.log(`  - ${itv.menu}: ${itv.alasan}`);
      });
    }

    console.log("----------------------------------------");
    console.log(`Subtotal   : ${formatRupiah(hasil.subtotal)}`);
    console.log(`Promo Hari : -${formatRupiah(hasil.promoHari)}`);
    console.log(`Diskon     : -${formatRupiah(hasil.diskon)}`);
    console.log(`Pajak (11%): +${formatRupiah(hasil.pajak)}`);
    console.log(`TOTAL      : ${formatRupiah(hasil.total)}`);
    console.log(`Uang Bayar : ${formatRupiah(hasil.uangBayar)}`);
    console.log(`Kembalian  : ${formatRupiah(hasil.kembalian)}`);

    if (hasil.pecahanKembalian && Object.keys(hasil.pecahanKembalian).length > 1) {
      console.log("Rincian Pecahan Kembalian:");
      for (let [pecahan, lembar] of Object.entries(hasil.pecahanKembalian)) {
        if (pecahan !== "sisa" && lembar > 0) {
          console.log(`  - Rp ${Number(pecahan).toLocaleString('id-ID')}: ${lembar} lembar`);
        }
      }
      if (hasil.pecahanKembalian.sisa > 0) {
        console.log(`  - Sisa koin/lainnya: ${formatRupiah(hasil.pecahanKembalian.sisa)}`);
      }
    }
    console.log("========================================\n");
  }
};


// ==========================================
// MENJALANKAN SEMUA TRANSAKSI
// ==========================================

console.log("=== PERCOBAAN 1: TARGET KAS SANGAT BESAR (Semua Diproses) ===");
const TARGET_KAS_BESAR = 10000000;
for (let trx of transaksiBersih) {
  let hasil = kasir.prosesTransaksi(trx);
  kasir.cetakStruk(hasil);
  if (kasir.saldoKas >= TARGET_KAS_BESAR) {
    console.log("Target kas tercapai");
    break;
  }
}

// Reset saldo kas dan riwayat untuk percobaan kedua
kasir.saldoKas = 0;
kasir.riwayat = [];

console.log("\n=== PERCOBAAN 2: TARGET KAS KECIL (Berhenti di Tengah) ===");
const TARGET_KAS_KECIL = 50000;
for (let trx of transaksiBersih) {
  let hasil = kasir.prosesTransaksi(trx);
  kasir.cetakStruk(hasil);
  // Transaksi terakhir yang diproses pada percobaan kedua adalah trs-001 (atau trs-002 tergantung akumulasi kas)
  if (kasir.saldoKas >= TARGET_KAS_KECIL) {
    console.log(`Target kas tercapai pada transaksi ${hasil.kode}`);
    break;
  }
}

// Kembalikan TARGET_KAS ke nilai besar (jika diperlukan untuk proses berikutnya)
const TARGET_KAS = 10000000;

// Jawab dalam komentar:

// 1.Karena this merujuk pada objek kasir itu sendiri tempat method tersebut berada. 
// Menulis this.menu memastikan method mengakses properti internal milik objek kasir tersebut, bukan variabel global luar.
// 2.Karena switch sangat ideal untuk mencocokkan satu nilai ke banyak kondisi spesifik. 
// Kita sengaja menggabungkan kasus "jumat" dan "jum'at" serta "sabtu", "minggu", dan "ahad" tanpa break agar kondisi-kondisi berbeda tersebut meneruskan aliran kode ke blok pengeksekusi diskon yang sama secara efisien.
// 3.Karena properti .length bernilai 0 untuk array kosong. Di JavaScript, angka 0 bersifat falsy, sehingga diberi tanda seru (!) akan menghasilkan true (dianggap kosong).
// Tiga contoh nilai Falsy: 0, "" (string kosong), dan null. 
// 4.break: Digunakan untuk menghentikan seluruh perulangan (misalnya saat target kas tercapai)
// continue: Digunakan untuk melewatkan iterasi saat ini dan langsung lanjut ke item berikutnya (misalnya saat melewati item pesanan yang tidak valid).
// 5.Karena sistem kasir membutuhkan data audit yang transparan: tidak hanya tahu total harga uangnya, 
// tetapi juga mencatat daftar item mana yang valid dan item mana yang ditolak beserta alasannya.
// 6. Karena Perulangan while dipakai untuk mengurangi sisa uang secara berulang selama nominal pecahan masih mencukupi lembar uang tersebut.
// Bisa diganti, bahkan pada kode di atas kita sudah memadukannya dengan operator / (Math.floor) dan % (sisaKembalian %= pecahanNominal) agar perhitungan lembar uang jauh lebih cepat dan efisien tanpa looping berulang.
