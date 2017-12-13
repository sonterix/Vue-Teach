Vue.component('hello', {
    template: '<p>Hello Nick!</p>'
});

var vm = new Vue({
    el: '#vue',
    data: {
        message: 'Hellow',
        textInput: 'Type text',
        showText: false,
        htmlText: 'Link: <a href="http://google.com.ua/">Google</a>',
        counter: 0,
        x: 0,
        y: 0,
        vmodelText: 'Some Text',
        width: 100,
        backgroundColor: 'white',
        ingridients: ['meat', 'fruit', 'cookies'],
    },
    computed: {
        addStyle: function(){
            return {
                width: this.width + 'px',
                backgroundColor: this.backgroundColor,
            }
        }
    },
    methods: {
        changeText: function(){
            this.message = 'Hellow World';
        },
        changeInput: function(event){
            this.textInput = event.target.value;
        },
        updateCoordinates: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function(event){
            alert(event.target.value);
        }
    },

});

console.log('myP: ' + vm.$refs.myP.innerText)
