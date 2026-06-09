Vue.component("status-badge", {

  props: [
    "qty",
    "safety"
  ],

  computed: {

    status() {

      if (this.qty === 0) {
        return "Kosong";
      }

      if (this.qty < this.safety) {
        return "Menipis";
      }

      return "Aman";

    },

    badgeClass() {

      if (this.qty === 0) {
        return "status-kosong";
      }

      if (this.qty < this.safety) {
        return "status-menipis";
      }

      return "status-aman";

    },

    icon() {

      if (this.qty === 0) {
        return "✖";
      }

      if (this.qty < this.safety) {
        return "⚠";
      }

      return "✔";

    }

  },

  template: "#tpl-status-badge"

});