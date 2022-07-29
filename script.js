document.querySelector('.botao-pause').style.display = 'none'

let musicas = [
    {titulo: 'Guitar solo', artista: 'Rodrigo Soares', src:'music/Sunset n Beachz - Ofshane.mp3', img: 'image/gordon-cowie-qQzw8jPvip8-unsplash.jpg'},
    {
    titulo: 'Lofi song', artista: 'Herold Martorano', src:'music/Smokey Eye - Cheel.mp3', img: 'image/kaysha-Kj4o6jCPulI-unsplash.jpg'
    },
    {
    titulo: 'Trance', artista:'Pedro Mendes', src:'music/Escapism - Yung Logos.mp3', img: 'image/c-d-x-PDX_a_82obo-unsplash.jpg'
    }

]

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim')
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);


//Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra)

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if(indexMusica < 0){
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if(indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});


//Funções

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play()
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos
    }

    return campoMinutos+':'+campoSegundos;
}



