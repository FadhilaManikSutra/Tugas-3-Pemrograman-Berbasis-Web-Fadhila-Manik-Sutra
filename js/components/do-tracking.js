Vue.component("do-tracking", {

  props: [

    "tracking",

    "paket",

    "pengirimanlist"

  ],

  data() {

    return {

      searchKeyword: "",

      progressDO: "",

      progressText: "",

      form: {

        nomorDO: "",

        nim: "",

        nama: "",

        ekspedisi: "",

        paket: "",

        tanggalKirim: ""

      }

    };

  },

  computed: {

    selectedPaket() {

      return this.paket.find(
        item =>
          item.kode ===
          this.form.paket
      );

    },

    totalHarga() {

      if (
        !this.selectedPaket
      ) {

        return 0;

      }

      return this.selectedPaket.harga;

    },

    filteredTracking() {

      const keyword =
        this.searchKeyword
          .toLowerCase()
          .trim();

      if (!keyword) {

        return this.tracking;

      }

      const hasil = {};

      Object.keys(
        this.tracking
      ).forEach(key => {

        const item =
          this.tracking[key];

        if (

          key
            .toLowerCase()
            .includes(keyword)

          ||

          item.nim
            .toLowerCase()
            .includes(keyword)

        ) {

          hasil[key] = item;

        }

      });

      return hasil;

    }

  },

  methods: {

    generateNomorDO() {

      const year =
        new Date()
          .getFullYear();

      const total =
        Object.keys(
          this.tracking
        ).length + 1;

      const urut =
        String(total)
          .padStart(3, "0");

      return `DO${year}-${urut}`;

    },

    clearForm() {

      this.form = {

        nomorDO:
          this.generateNomorDO(),

        nim: "",

        nama: "",

        ekspedisi: "",

        paket: "",

        tanggalKirim:
          new Date()
            .toISOString()
            .split("T")[0]

      };

    },

    resetSearch() {

      this.searchKeyword = "";

    },

    tambahTracking() {

      if (

        !this.form.nim ||

        !this.form.nama ||

        !this.form.ekspedisi ||

        !this.form.paket

      ) {

        alert(
          "Lengkapi data terlebih dahulu"
        );

        return;

      }

      const nomorDO =
        this.form.nomorDO;

      this.$set(

        this.tracking,

        nomorDO,

        {

          nim:
            this.form.nim,

          nama:
            this.form.nama,

          status:
            "Diproses",

          ekspedisi:
            this.form.ekspedisi,

          tanggalKirim:
            this.form.tanggalKirim,

          paket:
            this.form.paket,

          total:
            this.totalHarga,

          perjalanan: []

        }

      );

      this.clearForm();

    },

    tambahProgress() {

      if (

        !this.progressDO ||

        !this.progressText

      ) {

        alert(
          "Lengkapi data progress"
        );

        return;

      }

      const item =
        this.tracking[
          this.progressDO
        ];

      if (!item) {

        return;

      }

      item.perjalanan.push({

        waktu:
          new Date()
            .toLocaleString(
              "id-ID"
            ),

        keterangan:
          this.progressText

      });

      item.status =
        "Dalam Pengiriman";

      this.progressText = "";

    }

  },

  mounted() {

    this.clearForm();

  },

  template:
    "#tpl-do-tracking"

});