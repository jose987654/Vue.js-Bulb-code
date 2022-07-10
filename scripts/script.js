const conditionalRendering = {
  data() {
    return {
      //    programs: {
      // vacist:true,
      // catalyst:true,
      // bootcamp:true}
      program: "bootcamp",
      // catalyst: true,
      bulbon:true,
      
    };
  },

  methods: {
    switchon(){
      this.bulbon =!this.bulbon;      
    }
  },
};

Vue.createApp(conditionalRendering).mount("#app");
// programs: {
//   vacist:true,
//   catalyst:true,
//   bootcamp:true
// }
