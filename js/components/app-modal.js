Vue.component("app-modal", {

  props: [
    "show",
    "title",
    "message"
  ],

  methods: {

    closeModal() {

      this.$emit("close");

    },

    confirmDelete() {

      this.$emit("confirm");

    }

  },

  template: "#tpl-app-modal"

});