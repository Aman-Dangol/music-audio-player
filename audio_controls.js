let audio ="";
let file = "";
let fromFile="";
let url="";
function playMusic(){
    audio = document.getElementById('audio');
    file = document.getElementById('file');
    fromFile=file.files[0];
    url= URL.createObjectURL(fromFile)
    audio.src=url;
}
