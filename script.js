

let songIndex=0;

let audioElement = new Audio('1.mp3');

let masterPlay=document.getElementById('masterPlay');

let myProgressBar=document.getElementById('myProgressBar');

let gif=document.getElementById('gif')

let masterSongName=document.getElementById('masterSongName')

let songItems=Array.from(document.getElementsByClassName('songItem'))


let songs = [
    
{songName: "295-Sidhu Moosewala", filePath: "1.mp3", coverPath: "295.JPG"},
{songName: "Jatt Da Muqabla-Sidhu Moosewala", filePath: "2.mp3", coverPath: "jatt_da.JPG"},
{songName: "So High-Sidhu Moosewala", filePath: "3.mp3", coverPath: "so high.JPG"},
{songName: "Old Skool-Sidhu Moosewala", filePath: "4.mp3", coverPath: "old_skool.JPG"},
{songName: "Same Beef-Sidhu Moosewala", filePath: "5.mp3", coverPath: "same_beef.JPG"},
{songName: "Every Breath You Take", filePath: "6.mp3", coverPath: "st_1.JPG"},
{songName: "Mehram-Jersey Movie", filePath: "7.mp3", coverPath: "mehram.JPG"},
{songName: "Can't Fight This Feeling Anymore", filePath: "8.mp3", coverPath: "Reo_speedwagon.JPG"},
{songName: "I Want it That Way", filePath: "9.mp3", coverPath: "b_boys.JPG"},
{songName: "Renegades-X Ambassadors", filePath: "10.mp3", coverPath: "renegades.JPG"},
]

songItems.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

//audioElement.play();

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }

    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
    }
})


audioElement.addEventListener('timeupdate',()=>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play');
        element.classList.remove('fa-pause');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex+=1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')

})