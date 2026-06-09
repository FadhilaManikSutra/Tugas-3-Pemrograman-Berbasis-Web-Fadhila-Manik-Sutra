Vue.component("stock-table", {

  props: [

    "stok",

    "upbjjlist",

    "kategorilist"

  ],

  data() {

    return {

      filterUpbjj: "",

      filterKategori: "",

      filterWarning: false,

      sortBy: "",

      editIndex: null,

      form: {

        kode: "",

        judul: "",

        kategori: "",

        upbjj: "",

        lokasiRak: "",

        harga: "",

        qty: "",

        safety: "",

        catatanHTML: ""

      }

    };

  },

  computed: {

    filteredData() {

      let data = [...this.stok];

      if (this.filterUpbjj) {

        data = data.filter(
          item =>
            item.upbjj ===
            this.filterUpbjj
        );

      }

      if (this.filterKategori) {

        data = data.filter(
          item =>
            item.kategori ===
            this.filterKategori
        );

      }

      if (this.filterWarning) {

        data = data.filter(
          item =>
            item.qty < item.safety
        );

      }

      if (this.sortBy === "judul") {

        data.sort((a, b) =>
          a.judul.localeCompare(
            b.judul
          )
        );

      }

      if (this.sortBy === "stok") {

        data.sort(
          (a, b) =>
            a.qty - b.qty
        );

      }

      if (this.sortBy === "harga") {

        data.sort(
          (a, b) =>
            a.harga - b.harga
        );

      }

      return data;

    },

    kategoriFiltered() {

      if (!this.filterUpbjj) {

        return [];

      }

      return this.kategorilist;

    }

  },

  watch: {

    filterUpbjj() {

      this.filterKategori = "";

    }

  },

  methods: {

    resetFilter() {

      this.filterUpbjj = "";

      this.filterKategori = "";

      this.filterWarning = false;

      this.sortBy = "";

    },

    clearForm() {

      this.form = {

        kode: "",

        judul: "",

        kategori: "",

        upbjj: "",

        lokasiRak: "",

        harga: "",

        qty: "",

        safety: "",

        catatanHTML: ""

      };

      this.editIndex = null;

    },

    simpanData() {

      if (

        !this.form.kode ||

        !this.form.judul ||

        !this.form.kategori ||

        !this.form.upbjj

      ) {

        alert(
          "Lengkapi data terlebih dahulu"
        );

        return;

      }

      const payload = {

        kode:
          this.form.kode,

        judul:
          this.form.judul,

        kategori:
          this.form.kategori,

        upbjj:
          this.form.upbjj,

        lokasiRak:
          this.form.lokasiRak,

        harga:
          Number(
            this.form.harga
          ),

        qty:
          Number(
            this.form.qty
          ),

        safety:
          Number(
            this.form.safety
          ),

        catatanHTML:
          this.form.catatanHTML

      };

      if (
        this.editIndex !== null
      ) {

        this.$set(
          this.stok,
          this.editIndex,
          payload
        );

      } else {

        this.stok.push(
          payload
        );

      }

      this.clearForm();

    },

    editData(index) {

      const item =
        this.stok[index];
     
      this.form = {

        ...item

      };

      this.editIndex = index;

    },

    hapusData(index) {
      
      this.$emit(
        "confirm-delete",
        index
      );

    }

  },

  template:
    "#tpl-stock-table"

});