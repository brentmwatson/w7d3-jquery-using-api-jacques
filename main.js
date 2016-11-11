// variables to use Handlebars
var source   = $("#notes-template").html();
var note_template = Handlebars.compile(source);

// To display home page
$.getJSON('https://shielded-beach-33937.herokuapp.com/api/notes').then(
  function(recall_notes){
    recall_notes.notes.forEach(
      function(note){
        var note_display = note_template (note)
        $('#displaynotes').prepend(note_display)
      }
    )
  }
)

// handlebars used to display notes with 'tag' and change url
$('#displaynotes').on('click', '.tag', function(n){
    n.preventdefault()
    $('#displaynotes').html('') //changes url to match
    $.getJSON('https://shielded-beach-33937.herokuapp.com/api/notes') + $(this).html()
      .then(function(responce){
        //changes header
        $('#notemeister').html('')
        $('#notemeister').html('.tag')(
          function(recall_notes){
            recall_notes.notes.forEach(
              function(note){
                var note_display = note_template (note)
                $('#displaynotes').prepend(note_display)
              }
            )
          }
        )
      }
    )
})
