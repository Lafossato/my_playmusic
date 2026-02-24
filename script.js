const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const song = document.getElementById('audio');
const cover = document.getElementById('cover');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');

const thatsWhatILike = {
    songName: 'Thats What I Like',
    artist: 'Bruno Mars',
    file: 'Bruno_Mars_-_That_s_What_I_Like'
};

const saveYourTears = {
    songName: 'Save Your Tears',
    artist: 'The Weeknd',
    file: 'save_Your_Tears_by_The_Weeknd'
};

const iWantItThatWay = {
    songName: 'I Want It That Way',
    artist: 'Backstreet Boys',
    file: 'backsreet_boys_-_I_want_it_that_way'
};

let isPlaying = false;
const playlist = [thatsWhatILike, saveYourTears, iWantItThatWay];
let index = 0;

function playSong() {
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}

function pauseSong() {
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isPlaying = false;
}

function playPauseDecider(){
    if(isPlaying){
        pauseSong();
    } else {
        playSong();
    }
}

function initializeSong(){
    cover.src = `imagens/${playlist[index].file}.webp`;
    song.src = `songs/${playlist[index].file}.mp3`;
    songName.innerText = playlist[index].songName;
    bandName.innerText = playlist[index].artist;
}

function previousSong(){
    if(index === 0) {
        index = playlist.length - 1;
    } else {
        index -= 1;
    }
    initializeSong();
}

function nextSong(){
    if(index === playlist.length - 1){
        index = 0;
    } else {
        index += 1;
    }
    initializeSong();
}

initializeSong();

play.addEventListener('click', playPauseDecider);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);