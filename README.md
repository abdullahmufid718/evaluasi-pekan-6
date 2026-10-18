# evaluasi-pekan-6

evaluasi-pekan-6

# Kedai Senja - Aplikasi Kasir & Eksperimen JavaScript

## Deskripsi Singkat

**Kedai Senja** adalah proyek pengembangan aplikasi kasir berbasis JavaScript yang dirancang untuk mempelajari logika pemrograman tingkat lanjut, manipulasi struktur data (Object, Array), fungsi kustom, penanganan error (debugging), serta manajemen kontrol versi menggunakan Git dan GitHub.

---

## Cara Menjalankan Proyek

Proyek ini dapat dijalankan melalui dua cara tergantung pada bagian yang ingin diuji:

1. **Eksperimen JavaScript (Web):**
   - Buka file `eksperimen.html` secara langsung di browser (klik dua kali atau _drag and drop_ ke browser).
   - Tekan `F12` atau klik kanan lalu pilih **Inspect** dan buka tab **Console** untuk melihat hasil output dari seluruh eksperimen dan tebakan JavaScript.
2. **Skrip Logika Kasir & Perbaikan:**
   - Jalankan menggunakan Node.js melalui terminal/command prompt:
     ```bash
     node script.js
     node perbaikan.js
     ```

---

## Teknologi yang Digunakan

- **HTML5** (Untuk antarmuka halaman eksperimen)
- **JavaScript (ES6+)** (Logika utama, array/object methods, fungsi, perulangan, dan debugging)
- **Git & GitHub** (Kontrol versi, branching, dan kolaborasi via Pull Request)

---

## Penulis

- **Nama Penulis:** [Abdullah Mufid]

---

## Riwayat Git (`git log --oneline --graph`)

```text
*   a1b2c3d (HEAD -> main, origin/main) Merge pull request #2 from docs/tebak-jelaskan
|\
| * f4e3d2c (docs/tebak-jelaskan) Tambah eksperimen.html dan eksperimen.js
|/
*   9f8e7d6 Merge pull request #1 from feat/laporan-harian
|\
| * 5b4a3c2 (feat/laporan-harian) Selesai implementasi Bagian 4 Laporan Harian
|/
*   1a2b3c4 Inisialisasi proyek utama Kedai Senja (Main)

1. Kenapa pekerjaan dibagi ke banyak branch, bukan semuanya di main?
Pekerjaan dibagi ke dalam banyak branch (seperti feat/laporan-harian atau docs/tebak-jelaskan) agar proses pengembangan menjadi lebih terstruktur, aman, dan rapi. Cabang main bertindak sebagai source of truth yang harus selalu bersih dan stabil. Dengan menggunakan branch terpisah, kita dapat bereksperimen, membuat fitur baru, atau memperbaiki bug tanpa merusak kode utama yang sudah berjalan. Jika terjadi kesalahan atau error pada fitur baru, hal itu tidak akan berdampak langsung pada kode di branch main.

2. Apa fungsi .gitignore dan apa yang kamu masukkan ke dalamnya?
.gitignore berfungsi untuk memberitahu Git file atau folder apa saja yang tidak perlu dilacak (tracked) atau di-upload ke repository (misalnya ke GitHub). Biasanya di dalam .gitignore dimasukkan:

Folder dependensi seperti node_modules/

File konfigurasi lingkungan atau kredensial rahasia (.env)

File sistem operasi lokal yang tidak penting (seperti .DS_Store pada macOS atau direktori cache editor seperti .vscode/)

3. Apa beda merge lokal dengan Pull Request di GitHub?
Merge Lokal: Dilakukan secara langsung di komputer lokal menggunakan perintah terminal (misalnya git merge). Proses ini menggabungkan branch satu ke branch lainnya secara langsung di direktori lokal tanpa melalui platform online.

Pull Request (PR) di GitHub: Adalah fitur kolaborasi berbasis web yang digunakan untuk meminta persetujuan sebelum menggabungkan branch fitur ke branch utama. Melalui PR, kode dapat direview terlebih dahulu, didiskusikan bersama tim, atau diuji otomatis sebelum di-merge secara remote ke repository utama di GitHub.
```
