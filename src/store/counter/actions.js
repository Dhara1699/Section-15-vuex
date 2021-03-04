export default {
    increase(context , playLoad){
      setTimeout(() => {
        context.commit('increase', playLoad);
      }, 2000);
    },
    login() {
      
    }
  };