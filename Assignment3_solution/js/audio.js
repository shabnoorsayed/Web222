// Data for the "HTML Audio" Page

const audio = {
  controls: true,
  source: [
    {
      src: 'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.mp3',
      type: 'audio/mpeg'
    },
    {
      src: 'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.ogg',
      type: 'audio/ogg'
    }
  ]
};

var data = "";
  for ( var i = 0 ; i < audio.source.length ; i ++){
    if (audio.controls)
    data += "<audio controls> <source src = '" + audio.source[i].src + "' type = '" + audio.source[i].type + "'></audio><br>";
}
document.getElementById("audio").innerHTML +=  data;
