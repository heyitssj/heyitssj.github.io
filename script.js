window.onload = function() {

  document.getElementById("theImage").onclick = function() {
    changeImage();
  }

  var i = 0;

  function changeImage() {
      var list = ["piano.jpg", "sheetmusic.jpg", "anotherpiano.jpg", "littlekidonpiano.jpg"];
      i++;
      if (i > 3) {
        i = 0;
      }
      var newImg = list[i];
      document.getElementById("theImage").src = newImg;
    }
}
