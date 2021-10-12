window.onload = () => {

    let playlist = document.querySelector('#playlist');

    let player = document.querySelector('#player');

    let namePlayer = document.querySelector('#song-name');
    let authorPlayer = document.querySelector('#artist-name');
    let coverPlayer = document.querySelector('#img');
let fillBar = document.querySelector('.fillBar');
    let playBtn = document.querySelector('#playBtn');
    let i = playBtn.firstChild;


    let song = new Audio();
    let CurrentSong = 0;


    audioData = [
        {
            name: 'Believer',
            artist: 'Imagine Dragons',
            src: 'music/Imagine Dragons - Believer.mp3',
            cover: 'img/first.jpg'
        },
        {
            name: 'Natural',
            artist: 'Imagine Dragons',
            src: 'music/Imagine Dragons - Natural.mp3',
            cover: 'img/second.jpg'
        },
        {
            name: 'Thunder',
            artist: 'Imagine Dragons',
            src: 'music/Imagine Dragons - Thunder.mp3',
            cover: 'img/first.jpg'
        },
        {
            name: 'Lovers in Japan',
            artist: 'Coldplay',
            src: 'music/Coldplay - Lovers in Japan .mp3',
            cover: 'img/coldplay1.jpg'
        },
        {
            name: 'The Scientist',
            artist: 'Coldplay',
            src: 'music/Coldplay - The Scientist.mp3',
            cover: 'img/coldplay2.jpg'

        }
    ];


    namePlayer.innerhtml = audioData[CurrentSong].name;
    authorPlayer.innerhtml = audioData[CurrentSong].artist;
    song.src = audioData[CurrentSong].src;
    coverPlayer.src = audioData[CurrentSong].cover;


    function playSong() {
        let curSong = audioData[CurrentSong];
        authorPlayer.innerhtml = curSong.artist;
        namePlayer.innerHTML = curSong.name;
        song.src = curSong.src;
        coverPlayer.src = curSong.cover;
        song.play();
        i.classList.remove('fa-play');
        i.classList.add('fa-pause-circle');
        
    };

    song.addEventListener('timeupdate',()=>{
        let position = (100 / song.duration) * song.currentTime;
        fillBar.style.width=position + "%";

    })

    audioData.forEach(mp3 => {
        let artist = mp3.artist;
        let name = mp3.name;
        let src = mp3.src;
        let cover = mp3.cover;

        let li = document.createElement('li');
        li.classList.add('d-flex', 'align-items-start', 'list-group-item')
        playlist.appendChild(li);

        let circleImg = document.createElement('img');
        circleImg.setAttribute('src', cover);
        circleImg.style.width = '20%';
        li.appendChild(circleImg);

        let title = document.createElement('div');
        title.classList.add('ml-2');
        li.appendChild(title);

        let p = document.createElement('p');
        p.innerHTML = name;
        title.appendChild(p);

        let author = document.createElement('p');
        author.classList.add('author')
        author.innerHTML = artist;
        title.appendChild(author);

        li.addEventListener('click', () => {
            namePlayer.innerHTML = name;
            authorPlayer.innerHTML = artist;

            i.classList.remove('fa-play');
            i.classList.add('fa-pause-circle');
            coverPlayer.setAttribute('src', cover);
            coverPlayer.classList.add('foo');
            song.setAttribute('src', src);
            song.play();
        })
    });


    playBtn.addEventListener('click', playPause);


    function playPause() {

        if (song.paused) {
            song.play();
            coverPlayer.classList.add('foo')
            i.classList.remove('fa-play');
            i.classList.add('fa-pause-circle');

        }
        else {
            song.pause();
            coverPlayer.classList.remove('foo')
            i.classList.remove('fa-pause-circle');
            i.classList.add('fa-play');
        }
    }


    let nextBtn = document.querySelector('#forwardBtn');
    nextBtn.addEventListener('click', () => {
        CurrentSong++;
        if (CurrentSong > 4) {
            CurrentSong = 0
        }
        playSong();
        console.log('next')
    });

    let prevBtn = document.querySelector('#backwardBtn');
    prevBtn.addEventListener('click', () => {
        CurrentSong--;
        if (CurrentSong < 0) {
            CurrentSong = 4
        }
        playSong();
        console.log('prev')
    });

}



