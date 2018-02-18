// now make this handle multiple inputs
//var str = $('pre#input').text()
//var lines = str.split("\n");

var notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']

var result = []

function convertToNotes() {
  var str = $('textarea').val()
  var lines = str.split("\n");
  console.log(lines)
  
  $.each(lines, function(i, value) {
  	if (i == 0) {
  		var line = handleLine(value, 7)
  		result.push(line)	
  	} else if (i == 1) {
  		var line = handleLine(value, 2)
  		result.push(line)	
  	} else if (i == 2) {
  		var line = handleLine(value, 10)
  		result.push(line)	
  	} else if (i == 3) {
  		var line = handleLine(value, 5)
  		result.push(line)	
  	} else if (i == 4) {
  		var line = handleLine(value, 0)
  		result.push(line)	
  	} else if (i == 5) {
  		var line = handleLine(value, 7)
  		result.push(line)	
  	} 
  });
  
  //console.log(result)
  function handleLine(line, offset) {
  	var newLine = '';
    var line = $.trim(line);
	
  	for (var i=0; i<line.length; i++) {
  		if ( $.isNumeric(line[i]) ) {
  		  //console.log(value[i]);
  			newLine += fretToNote(line[i], offset);
  		} else {
  			//console.log(value[i]);
  			newLine += line[i];
  		}
  	}
  	return newLine
  }

  function fretToNote(num, offset) {
  	return notes[((parseInt(num) + parseInt(offset)) % 12)]
  }

  var fullResult = result.join('\n')
  console.log(fullResult);

  $('#result').text(fullResult)
}

