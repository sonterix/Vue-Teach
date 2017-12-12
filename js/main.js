new Vue({
    el: '#vue',
    data: {
        message: 'Hellow',
        textInput: 'Type text',
        showText: false,
        htmlText: 'Link: <a href="http://google.com.ua/">Google</a>',
        counter: 0,
        x: 0,
        y: 0,
    },
    methods: {
        changeText: function(){
            this.message = 'Hellow World';
        },
        changeInput: function(event){
            this.textInput = event.target.value;
        },
        increase: function(){
            this.counter++;
        },
        updateCoordinates: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
});
