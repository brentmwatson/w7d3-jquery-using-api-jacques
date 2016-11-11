$.getJSON('https://shielded-beach-33937.herokuapp.com/api/notes').then(function(recall_notes) {
      recall_notes.notes.forEach(function(notes){
        $('#displaynotes').prepend('<div>' + notes.title + '</div><div>' + notes.body+ '</div>')
        console.log(recall_notes)
      })
})

// then(function(response){
//      response.photos.forEach(function(photo){
//        $('#photos').prepend('<img src="https://desolate-sands-90495.herokuapp.com/' + photo.photo + '" width=200 /><p>' + photo.caption + '</p>')
