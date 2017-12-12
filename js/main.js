new Vue({
    el: '#vue',
    data: {
        message: 'Hellow',
        textInput: 'Type text',
        showText: false,
    },
    methods: {
        changeText(){
            this.message = 'Hellow World';
        },
        changeInput(event){
            this.textInput = event.target.value;
        }
    }
});
