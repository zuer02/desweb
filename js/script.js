
window.addEventListener('load', function() {
    var canvas = document.getElementById('canvas-confetti');
    canvas.width = window.innerWidth;   
    canvas.height = window.innerHeight;

    var confettiSettings = { target: 'canvas-confetti' };
    var confetti = new ConfettiGenerator(confettiSettings);
});
function parabains(){
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.confetti();
}

document.getElementById("teste").addEventListener("click", function() {
    confetti({
      particleCount: 100,
      spread: 70,
      colors: ["#FF0000", "#00FF00", "#0000FF"]
    });
  });
  

// colocar assim: esse video vai ajudar: https://www.youtube.com/watch?v=dQw4w9WgXcQ


function enigma1(){
    alert('cu')
    // random = Math.floor(Math.random()*7)

    // switch(random){
    //     case 0:
    //         res = prompt('se eu der Math.floor() no 10° número da sequência de fibonacci dividido por 3, qual o resultado?')
    //         if(res!=1){
    //             alert('resposta errada')
    //             /* aí faz um trem pra sair e retornar tudo ao 0, pq errou */
    //         }
    //         else{
    //             alert('CERTA RESPOSTA!!!!!')
    //             var confetti = new ConfettiGenerator(confettiSettings);
    //             confetti.confetti();
    //         }

    // }
}
function enigma4(){

}

window.addEventListener('load', function() {
    var canvas = document.getElementById('canvas-confetti');
    canvas.width = window.innerWidth;   
    canvas.height = window.innerHeight;

    var confettiSettings = { target: 'canvas-confetti' };
    var confetti = new ConfettiGenerator(confettiSettings);
});