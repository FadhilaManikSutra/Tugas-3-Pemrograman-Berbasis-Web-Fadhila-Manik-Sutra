const ApiService = {

  async getData() {

    return {

      upbjjList: [

        "UPBJJ Jakarta",

        "UPBJJ Bandung",

        "UPBJJ Surabaya",

        "UPBJJ Medan",

        "UPBJJ Makassar"

      ],

      kategoriList: [

        "Buku Materi Pokok",

        "Modul Praktikum",

        "Panduan Tugas",

        "Referensi"

      ],

      pengirimanList: [

        {
          kode: "JNE",
          nama: "JNE"
        },

        {
          kode: "JNT",
          nama: "J&T Express"
        },

        {
          kode: "SICEPAT",
          nama: "SiCepat"
        },

        {
          kode: "POS",
          nama: "POS Indonesia"
        }

      ],

      paket: [

        {
          kode: "PKT001",

          nama:
            "Paket Sistem Informasi",

          isi: [

            "EKMA4434",

            "MSIM4206",

            "EKSI4416"

          ],

          harga: 275000

        },

        {
          kode: "PKT002",

          nama:
            "Paket Manajemen",

          isi: [

            "EKMA4111",

            "EKMA4115",

            "EKMA4215"

          ],

          harga: 325000

        },

        {
          kode: "PKT003",

          nama:
            "Paket Akuntansi",

          isi: [

            "EKSI4308",

            "EKSI4311",

            "EKSI4417"

          ],

          harga: 350000

        }

      ],

      stok: [

        {

          kode: "EKMA4434",

          judul:
            "Sistem Informasi Manajemen",

          kategori:
            "Buku Materi Pokok",

          upbjj:
            "UPBJJ Jakarta",

          lokasiRak:
            "A-01",

          harga: 95000,

          qty: 50,

          safety: 20,

          catatanHTML:
            "Stok aman"

        },

        {

          kode: "MSIM4206",

          judul:
            "Basis Data",

          kategori:
            "Buku Materi Pokok",

          upbjj:
            "UPBJJ Bandung",

          lokasiRak:
            "B-03",

          harga: 85000,

          qty: 12,

          safety: 20,

          catatanHTML:
            "Perlu reorder"

        },

        {

          kode: "EKSI4416",

          judul:
            "Pemrograman Web",

          kategori:
            "Modul Praktikum",

          upbjj:
            "UPBJJ Surabaya",

          lokasiRak:
            "C-02",

          harga: 120000,

          qty: 0,

          safety: 15,

          catatanHTML:
            "Stok kosong"

        }

      ],

      tracking: {

        "DO2025-001": {

          nim:
            "030012345",

          nama:
            "Andi Saputra",

          status:
            "Dalam Pengiriman",

          ekspedisi:
            "JNE",

          tanggalKirim:
            "2025-12-10",

          paket:
            "PKT001",

          total:
            275000,

          perjalanan: [

            {

              waktu:
                "10/12/2025, 09.00",

              keterangan:
                "Paket diterima kurir"

            },

            {

              waktu:
                "11/12/2025, 13.30",

              keterangan:
                "Paket dalam perjalanan"

            }

          ]

        }

      }

    };

  }

};