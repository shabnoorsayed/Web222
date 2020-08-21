// Data for the "HTML Video" Page

const video = {
  controls: true,
  width: 320,
  height: 240,
  source: [
    {
      src: 'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.mp4',
      type: 'video/mp4'
    },
    {
      src: 'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.ogg',
      type: 'video/ogg'
    }
  ]
};
   
var data = "<video width= '" + video.width + "' height = '" + video.height + "' ";
data += (video.controls == true) ? " controls>" : ">";
for(var i = 0; i < video.source.length; i++){
  data += "<source src = '" + video.source[i].src + "' type = '" + video.source[i].type + "'></video>"
}
document.getElementById("video").innerHTML += data;
