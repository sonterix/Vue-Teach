<template>
    <div>        
        <p>Serevr Status: {{ status }}</p>
        <hr>
        <button @click="changeStatus">Change Status</button>
    </div>
</template>

<script>
    export default {
        data: function() {
            return{
                status: 'Normal',
            }
        },
        methods: {
            changeStatus() {
                this.status = 'Critical';
            }
        }
    }
</script>