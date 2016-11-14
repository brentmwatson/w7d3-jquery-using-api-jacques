

$(document).ready(function(){
  if(window.location.hash.match(/#\d+/).length > 0){
    id = window.location.hash.substring(1)
    $.getJSON('https://shielded-beach-33937.herokuapp.com/api/notes' + id)
    .then(
      function(response){
        console.log(response.note)
        var display = modal_template(response.note)
        $('#modal').append(display)
        $('#note_modal').modal('show')
      }
    )
  }
})


var source = $("#modal_template").html();
var modal_template = Handlebars.compile(source);


function clear_form(selector){
  $(selector)[0].reset()
}

// variables to use Handlebars
var source   = $("#notes-template").html();
var note_template = Handlebars.compile(source);

// ******** Display all notes ********* //
$.getJSON('https://shielded-beach-33937.herokuapp.com/api/notes')
.then(
  function(recall_notes){
    recall_notes.notes.forEach(
      function(note){
        var note_display = note_template (note)
        $('#notes').prepend(note_display)
      }
    )
  }
)

// ****** Click function showing notes with specific tags *******//

// when clicked change display notes
  // (prevent the default)
  // (clear data from displaynotes)
  // get data from api + validate/handle exeption/for enumeration
  // (wait for data to load before)
  //Function for the click responce:
    // (clear text to notemeister)
    // add text to notemeister
    // filter by clicked tag notes
    // for each note
      //apply template to variable
      //pass variable onto class

$('#notes').on('click', '.tag', function(ev){
// .on( events [, selector ] [, data ], handler )
  ev.preventDefault()
  $('#notes').html('') //clears text in webpage
  $.getJSON('https://shielded-beach-33937.herokuapp.com/api/notes/tag/' + encodeURIComponent($(this).html())) //handles url request for api data + escapes incorrect keys
  .then(
    function(response){
    $('#notemeister').html('') //clears text
    $('#notemeister').append(response.tag.name) //adds text to
      response.tag.notes.forEach( //smaller scope then before
        function(note){
          var note_display = note_template (note)
          $('#notes').prepend(note_display)
        }
      )
    }
  )
})

//********* form button click**********//
//when clicked
  //(prevent the default)
  // add note to db/website
  // convert data to be used
  //clear out form
  // add new note to the top prepend

$('#form').on('submit',
  function(ev){
    ev.preventDefault()
    $.post('https://shielded-beach-33937.herokuapp.com/api/notes', $(this).serialize()
    ).done(
      function(recall_notes){
      clear_form('#form')
        recall_notes.notes.forEach(
          function(note){
            var note_display = note_template (note)
            $('#notes').prepend(note_display)
          }
        )
      }
    )
})

var modal_source = $('#modal-template').html()
var modal_template = Handlebars.compile(modal_source)

function modal(){
  if(window.location.hash) {
    if(window.location.hash.match(/#\d+/).length > 0) {
      id = window.location.hash.substring(1);
      $.getJSON('https://shielded-beach-33937.herokuapp.com/api/notes' + id)
        .then(function(response){
          var  display_modal = modal_template(response.note)
          $('#modal').append(display_modal)
          $('#modal_toggle').modal('show')
        });
    }
  }
}
