export default {
    increment(context){
        setTimeout(function(){
            context.commit('increment');
        },2000);
    },
    increase(context,payload){
        context.commit('increase',payload)
    },
}