new Vue({
    el: '#vue',

    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],
        specialAttackCounter: 0
    },

    methods: {
        startGame: function(){
            this.gameIsRunning = true;
        },
        clearLastGame: function(){
            this.gameIsRunning = false;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns= [];
            this.specialAttackCounter = 0;
        },
        attack: function(){
            var damage = this.calculateDamage(3, 10);           
            this.monsterHealth -= damage;
            this.turns.unshift({
                type: 'attack',
                text: 'You hits Monster for ' + damage
            });
            this.monsterAttacks();
        },
        specialAttack: function(){
            if(this.specialAttackCounter >= 3){
                alert("You can use 'Special Attack' only 3 times!");
                return;
            }
            var damage = this.calculateDamage(10, 20)
            this.monsterHealth -= damage;
            this.turns.unshift({
                type: 'specialAttack',
                text: 'You hits Monster hard for ' + damage
            });
            this.specialAttackCounter++;            
            this.monsterAttacks();            
        },
        heal: function(){
            var heals = this.calculateDamage(1, 8);
            this.playerHealth += heals;
            this.turns.unshift({
                type: 'heal',
                text: 'You heals for ' + heals
            });
            if(this.playerHealth >= 100){
                this.playerHealth = 100;
            }
            this.monsterAttacks();            
        },
        giveUp: function(){
            if(confirm('Are You Sure?')){
                this.clearLastGame();
            }
        },
        monsterAttacks: function(){
            var damage = this.calculateDamage(3, 10);    
            this.playerHealth -= damage;
            this.turns.unshift({
                type: 'monsterAttack',
                text: 'Monster hits You for ' + damage
            });
            this.checkWin();
        },
        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random() * max ) + 1, min);
        },
        checkWin: function(){
            if(this.monsterHealth <= 0){
                if(confirm('You Won! Start new game?')){
                    this.clearLastGame();
                    this.startGame();
                }else {
                    this.clearLastGame();
                }    

            }else if(this.playerHealth <= 0){
                if(confirm('You Lost! Start new game?')){
                    this.clearLastGame();
                    this.startGame();
                }else {
                    this.clearLastGame();
                }

            }
        }
    }

});