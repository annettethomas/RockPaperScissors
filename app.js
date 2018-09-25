new Vue({
  el: '#app',
  data: {
    playerPoint: 0,
    computerPoint: 0,

    show: false,

    compChoice: ['rock', 'paper', 'scissors'],
    turns: []
  },
  methods: {

    startGame(){
      this.show = true
      this.playerPoint = 0
      this.computerPoint = 0
      this.turns = []
    },

    restartGame(){
      this.show = false
      this.playerPoint = 0
      this.computerPoint = 0
    },
      rockChoice: function(){

          let comp = this.computerChoice();
          if(comp === 'paper'){
              this.computerPoint += 1;
              this.turns.unshift({
                  isPlayer: false,
                  text: 'Computer Chose Paper | Paper Beats Rock | Computer Wins'
              })
          }else if(comp === 'scissors'){
              this.playerPoint += 1;
              this.turns.unshift({
                  isPlayer: true,
                  text: 'Computer Chose Scissors | Rock Beats Scissors | Player Wins'
              })
          }else {
              this.turns.unshift({
                  tie: true,
                  text: 'Computer Chose Rock | You Have Tied!'
              })

          }

          this.checkWinner();


      },

      paperChoice: function(){

          let comp = this.computerChoice();
          if(comp === 'scissors'){
              this.computerPoint += 1;
              this.turns.unshift({
                  isPlayer: false,
                  text: 'Computer Chose Scissors | Scissors Beats Paper | Computer Wins'
              })
          }else if(comp === 'rock'){
              this.playerPoint += 1;
              this.turns.unshift({
                  isPlayer: true,
                  text: 'Computer Chose Rock | Paper Beats Rock | Player Wins'
              })
          }else {
              this.turns.unshift({
                  tie: true,
                  text: 'Computer Chose Paper | You Have Tied!'
              })
          }
          this.checkWinner();
      },

      scissorsChoice: function() {

          let comp = this.computerChoice();
          if(comp === 'rock'){
              this.computerPoint += 1;
              this.turns.unshift({
                  isPlayer: false,
                  text: 'Computer Chose Rock | Rock Beats Scissors | Computer Wins'
              })
          }else if(comp === 'paper'){
              this.playerPoint += 1;
              this.turns.unshift({
                  isPlayer: true,
                  text: 'Computer Chose Paper | Scissors Beats Paper | Player Wins'
              })
          }else {
              this.turns.unshift({
                  tie: true,
                  text: 'Computer Chose Scissors | You Have Tied!'
              })
          }

          this.checkWinner();
      },

    computerChoice: function(){
      let vm = this;
      let computer = vm.compChoice[Math.floor(Math.random() * vm.compChoice.length)]
      return computer

    },

    checkWinner: function(){

      if(this.playerPoint === 10){
        if(confirm('You won! Restart?')){
            this.startGame();
        } else {
            this.show = false;
        }
      }else if(this.computerPoint === 10){
        if(confirm('You lost! Rematch?')){
            this.startGame();
        } else {
            this.show = false;
        }
      }

    }

  }
});