const nextButton = document.querySelector('.next-btn'); // Seleciona o botão que vai trocar o vídeo

const video = document.querySelector('.hero-video'); // Seleciona o elemento de vídeo na página

const movieList = ['videos/hero-1.mp4', 'videos/hero-2.mp4', 'videos/hero-3.mp4', 'videos/hero-4.mp4']; // Lista dos caminhos dos vídeos

let index = 0; // Começa do primeiro vídeo (posição 0 da lista)

function nextVideo(){
    index += 1;  // vai para o proximo video

    if (index >= movieList.length){
        index = 0; // Volta para o primeiro video se passar do ultimo 
    }

    video.src = movieList[index]; // Atualiza o caminho do video
    video.play(); // Garante que o novo video comece a tocar automaticamnete
}

//Troca o video ao clicar no botão
nextButton.addEventListener('click',nextVideo);

//Troca o video automaticamente quando o atual terminar 
video.addEventListener('ended',nextVideo);


// fLógica para mudar somente quando apertar next (apagar a function se for usar)
// adicionar o loop no html <video loop autoplay muted plays-inline class="hero-video">
// nextButton.addEventListener('click', function() {
//     index += 1; // Avança para o próximo vídeo da lista

//     if (index >= movieList.length) {
//         index = 0; // Se passar do último, volta para o primeiro
//     }

//     video.src = movieList[index]; // Atualiza o vídeo exibido com base no índice atual
// });
