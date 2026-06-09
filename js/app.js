Vue.filter(

  "rupiah",

  value =>

    "Rp " +

    Number(
      value || 0
    ).toLocaleString(
      "id-ID"
    )

);

Vue.filter(

  "satuan",

  value =>

    value + " buah"

);

Vue.filter(

  "tanggalIndonesia",

  value =>

    new Date(value)
      .toLocaleDateString(
        "id-ID",
        {
          day: "numeric",
          month: "long",
          year: "numeric"
        }
      )

);

new Vue({

  el: "#app",

  data: {

    /* ======================
       NAVIGASI
    ====================== */

    page: "home",

    /* ======================
       DATA MASTER
    ====================== */

    stok: [],

    tracking: {},

    paket: [],

    upbjjList: [],

    kategoriList: [],

    pengirimanList: [],

    /* ======================
       MODAL DELETE
    ====================== */

    modalShow: false,

    deleteData: null

  },

  methods: {

    /* ======================
       NAVIGASI
    ====================== */

    goHome() {

      this.page = "home";

    },

    goStok() {

      this.page = "stok";

    },

    openTracking() {

      this.page = "tracking";

    },

    /* ======================
       MODAL
    ====================== */

    openDeleteModal(index) {

      this.deleteData =
        index;

      this.modalShow =
        true;

    },

    closeModal() {

      this.modalShow =
        false;

      this.deleteData =
        null;

    },

    confirmDelete() {

      if (

        this.deleteData !==
          null &&

        this.deleteData > -1

      ) {

        this.stok.splice(

          this.deleteData,

          1

        );

      }

      this.closeModal();

    }

  },

  async mounted() {

    const data =
      await ApiService
        .getData();

    if (!data) {

      return;

    }

    this.upbjjList =
      data.upbjjList;

    this.kategoriList =
      data.kategoriList;

    this.pengirimanList =
      data.pengirimanList;

    this.paket =
      data.paket;

    this.stok =
      data.stok;

    this.tracking =
      data.tracking;

  }

});