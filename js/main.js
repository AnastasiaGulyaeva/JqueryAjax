$("#button").on("click", nuevoChiste);

function nuevoChiste() {
  $.getJSON("http://api.icndb.com/jokes/random", function(data) {
    var joke;
    $.each(data, function(key, val) {
      joke = val.joke;
    });
    $("#chiste").text(joke);
  });
}
