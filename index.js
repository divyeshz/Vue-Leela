const app = Vue.createApp({
  data() {
    return {
      isLoggedIn: true,
      posts: [
        {
          id:1,
          title : "test"
        },
        {
          id:2,
          title : "test 2"
        },
      ]
    };
  },
  methods: {
    onIncrementCounter() {
      this.count += 1;
    },
    toggleLogin() {
      this.isLoggedIn = !this.isLoggedIn;
    }
  },
});

app.mount("#app");
