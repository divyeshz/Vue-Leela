const app = Vue.createApp({
  data() {
    return {
      isLoggedIn: true,
      name: 'Divyesh',
      email: 'd@gmail.com',
      posts: [
        {
          id: 1,
          title: "test"
        },
        {
          id: 2,
          title: "test 2"
        },
      ]
    };
  },
  methods: {
    onIncrementCounter() {
      this.count += 1;
    },
    fullName() {
      console.log("executing");
      return "Welcome " + this.name;
    },
    toggleLogin() {
      console.log("execute");
      this.isLoggedIn = !this.isLoggedIn;
    }
  },
});

app.mount("#app");
