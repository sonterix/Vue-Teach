new Vue({
    el: '#vue',
    data: {
        message: 'Hellow',
        textInput: 'Type text',
        showText: true,
    },
    methods: {
        changeText(){
            this.message = 'Hellow World';
        }
    }
});
