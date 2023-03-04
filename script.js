console.log("welcome to spotify");

//initkise the varible
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay= document.getElementById('masterPlay'); 
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('gif');
let songitem=Array.from(document.getElementsByClassName("songitem"));   

let songs =[
   // {songname: "salam-e-Ishq",filepath:"songs/0.mp3",coverpath: "covers/1.jpg"},
    {songname: "salam-e-Ishq",filepath:"songs/1.mp3",coverpath: "covers/1.jpg"},
    {songname: "shiddat",filepath:"songs/2.mp3",coverpath: "covers/2.jpg"},
    {songname: "Ek Do Teen",filepath:"songs/3.mp3",coverpath: "covers/3.jpg"},
    {songname: "Likhe Jo Khat Tujhe",filepath:"songs/4.mp3",coverpath: "covers/4.jpg"},
    {songname: "Tumsa Koi Pyara",filepath:"songs/5.mp3",coverpath: "covers/5.jpg"},
    {songname: "Teri Meri Gallan",filepath:"songs/6.mp3",coverpath: "covers/6.jpg"},
    {songname: "Sunno Ganpati Bappa",filepath:"songs/7.mp3",coverpath: "covers/7.jpg"},
    {songname: "Maa ke Barabar Koi",filepath:"songs/8.mp3",coverpath: "covers/8.jpg"},
    {songname: "Hello Kon",filepath:"songs/9.mp3",coverpath: "covers/9.jpg"},
    {songname: "Teri Meri Gallan",filepath:"songs/10.mp3",coverpath: "covers/10.jpg"},
    {songname: "Dil Janiye",filepath:"songs/11.mp3",coverpath: "covers/10.jpg"},
    {songname: "Fitoor",filepath:"songs/12.mp3",coverpath: "covers/10.jpg"},
    {songname: "Ganpati Ringtone",filepath:"songs/13.mp3",coverpath: "covers/10.jpg"},
    {songname: "Hosanna",filepath:"songs/14.mp3",coverpath: "covers/10.jpg"},
    {songname: "Jhuki Jhuki nazar Teri",filepath:"songs/15.mp3",coverpath: "covers/10.jpg"},
    {songname: "Thik Hai",filepath:"songs/16.mp3",coverpath: "covers/10.jpg"},
    {songname: "Kesariya",filepath:"songs/17.mp3",coverpath: "covers/10.jpg"},
    {songname: "Moonlight",filepath:"songs/18.mp3",coverpath: "covers/10.jpg"},
    {songname: "Manike Mage Hithe",filepath:"songs/19.mp3",coverpath: "covers/10.jpg"},
    {songname: "Srivalli",filepath:"songs/20.mp3",coverpath: "covers/10.jpg"},
]
songitem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
})

// audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity= 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity= 0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });    
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        mastersongname.innerText=songs[songIndex].songname;
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity= 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

document.getElementById("previous").addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    mastersongname.innerText=songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity= 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById("next").addEventListener('click', ()=>{
    if(songIndex>=19){
        songIndex=0;
    }
    else{
        songIndex+=1
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    mastersongname.innerText=songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity= 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})