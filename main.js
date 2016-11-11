// variabbles to use Handlebars
var source   = $("#notes-template").html();
var note_template = Handlebars.compile(source);

// handlebars used in function
$.getJSON('https://shielded-beach-33937.herokuapp.com/api/notes').then(function(recall_notes) {
      recall_notes.notes.forEach(function(note){
      var note_display = note_template (note)
      $('#displaynotes').prepend(note_display)
      })
})
