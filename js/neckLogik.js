// All our data

music = ["a", "a#", "b", "c", "c#", "d", "d#", "e", "f", "f#", "g", "g#"];

musicFlat = ["a", "bb", "b", "c", "db", "d", "eb", "e", "f", "gb", "g", "ab"];

position = [ "root", "2nd", "3rd", "4th", "5th", "6th", "7th", "octave"];

triad_position = ["root", "3rd", "5th"];

maj_pent_pos = [ "root", "2nd", "3rd", "5th", "6th"];

min_pent_pos = [ "root", "3rd", "4th", "5th", "7th"];

maj_chords = ['major', 'minor', 'minor', 'major', 'major', 'minor', 'diminished'];

min_chords = ['minor', 'diminished', 'major', 'minor', 'minor', 'major', 'major'];


// &#x266f;
// &#x266d;


// initial settings

for (i=0; i<music.length; i++)
{
	$('.keys').append("<li>" + music[i] + "</li>");
}

for (i=0; i<position.length; i++)
{
	$('.position').append("<li>" + position[i] + "</li>");
}

for (i=0; i<maj_pent_pos.length; i++)
{
	$('.maj-pent-pos').append("<li>" + maj_pent_pos[i] + "</li>");
}

for (i=0; i<min_pent_pos.length; i++)
{
	$('.min-pent-pos').append("<li>" + min_pent_pos[i] + "</li>");
}

for (i=0; i<triad_position.length; i++)
{
	$('.triad-position').append("<li>" + triad_position[i] + "</li>");
}

for (i=0; i<maj_chords.length; i++)
{
	$('.maj-chords').append("<li>" + maj_chords[i] + "</li>");
}

for (i=0; i<min_chords.length; i++)
{
	$('.min-chords').append("<li>" + min_chords[i] + "</li>");
}

// functions for setting things
// x is the musical key

function majorScale(x)
{ 	
	index = music.indexOf(x);
	
	intervals = [0, 2, 4, 5, 7, 9, 11, 12];
	
	pos = [];
	
	for (i=0; i<intervals.length; i++ ) 
	{
		pos[i] = music[(index+intervals[i]) % 12];
	}
	
	maj_notes = [];
	
	for ( i=0; i<8; i++) 
	{
		maj_notes.push(pos[i]);
	}
	
	if ( x == "f") maj_notes[3] = "b#";
	
	return maj_notes;
}

function majorTriad(x)
{
	index = music.indexOf(x);
	
	intervals = [0, 4, 7];
	
	for (i=0; i<intervals.length; i++ ) 
	{
		pos[i] = music[(index+intervals[i]) % 12];
	}
	
	maj_triad = [];
	
	for ( i=0; i<3; i++) 
	{
		maj_triad.push(pos[i]);
	}

	return maj_triad;
}

function majorPentatonic(x)
{
	index = music.indexOf(x);
	
	intervals = [0, 2, 4, 7, 9];
	
	for (i=0; i<intervals.length; i++ ) 
	{
		pos[i] = music[(index+intervals[i]) % 12];
	}
	
	maj_pent = [];
	
	for ( i=0; i<5; i++) 
	{
		maj_pent.push(pos[i]);
	}
	
	return maj_pent;
}


function naturalMinorScale(x)
{ 	
	intervals = [ 0, 2, 3, 5, 7, 8, 10, 12];
	
	pos = [];
	
	if(/#$/.test(x))
	{
		index = music.indexOf(x);
		
		for (i=0; i<intervals.length; i++ ) 
		{
			pos[i] = music[(index+intervals[i]) % 12];
		}
	} 
	else 
	{
		index = musicFlat.indexOf(x);
		
		for (i=0; i<intervals.length; i++ ) 
		{
			pos[i] = musicFlat[(index+intervals[i]) % 12];
		}
	}
	
	nat_min_notes = [];
	
	for ( i=0; i<8; i++) 
	{
		nat_min_notes.push(pos[i]);
	}
	
	if ( x == "a#") nat_min_notes[1] = "b#";
	if ( x == "a#") nat_min_notes[4] = "e#";
	
	return nat_min_notes; 
}

function harmonicMinorScale(x)
{ 
	index = musicFlat.indexOf(x);
	
	intervals = [ 0, 2, 3, 5, 7, 8, 11, 12];
	
	pos = [];
	
	for (i=0; i<intervals.length; i++ ) 
	{
		pos[i] = musicFlat[(index+intervals[i]) % 12];
	}
	
	har_min_notes = [];
	
	for ( i=0; i<8; i++) 
	{
		har_min_notes.push(pos[i]);
	}
	
	if ( x == "a") har_min_notes[6] = "g#";
	if ( x == "a#") har_min_notes[0] = "a#";
	if ( x == "b") har_min_notes[1] = "c#";
	if ( x == "b") har_min_notes[4] = "f#";
	if ( x == "b") har_min_notes[6] = "a#";
	if ( x == "c#" ) har_min_notes[0] = "c#";
	if ( x == "d#" ) har_min_notes[0] = "d#";
	if ( x == "f#" ) har_min_notes[0] = "f#";
	if ( x == "g#" ) har_min_notes[0] = "g#";
	
	return har_min_notes; 
}

function minorTriad(x)
{
	index = musicFlat.indexOf(x);
	
	intervals = [ 0, 3, 7];
	
	pos = [];
	
	for (i=0; i<intervals.length; i++ ) 
	{
		pos[i] = musicFlat[(index+intervals[i]) % 12];
	}
	
	min_triad = [];
	
	for ( i=0; i<3; i++) 
	{
		min_triad.push(pos[i]);
	}
	
	if ( x == "a#" ) min_triad[0] = "a#";
	if ( x == "c#" ) min_triad[0] = "c#";
	if ( x == "d#" ) min_triad[0] = "d#";
	if ( x == "f#" ) min_triad[0] = "f#";
	if ( x == "g#" ) min_triad[0] = "g#";
	
	return min_triad;
}

function minorPentatonic(x)
{
	intervals = [ 0, 3, 5, 7, 10];
	
	pos = [];
	
	if(/#$/.test(x))
	{
		index = music.indexOf(x);
		
		for (i=0; i<intervals.length; i++ ) 
		{
			pos[i] = music[(index+intervals[i]) % 12];
		}
	} 
	else 
	{
		index = musicFlat.indexOf(x);
		
		for (i=0; i<intervals.length; i++ ) 
		{
			pos[i] = musicFlat[(index+intervals[i]) % 12];
		}
	}
		
	min_pentatonic = [];
	
	for ( i=0; i<5; i++) 
	{
		min_pentatonic.push(pos[i]);
	}

	return min_pentatonic;
}



// chaning everything when choosing a key

$('.choose-key ul li').click( function(){
	
	$('.major-notes li').remove();
	$('.major-chords li').remove();
	$('.nat-minor-notes li').remove();
	$('.har-minor-notes li').remove();
	$('.minor-chords li').remove();
	$('.major-pent-notes li').remove();
	$('.minor-pent-notes li').remove();
	$('.major-triad li').remove();
	$('.minor-triad li').remove();
	
	$('.choose-key ul li').filter('.active').removeClass('active');
	$(this).addClass('active');
	
	key = $(this).html();
	
	major_results = majorScale(key);
	for (i=0; i<maj_notes.length; i++) {
		$('.major-notes').hide().append("<li>" + major_results[i] + "</li>").fadeIn();
	}
	
	maj_chord_results = majorScale(key);
	for (i=0; i<major_results.length - 1; i++) {
		$('.major-chords').hide().append("<li>" + maj_chord_results[i] + "</li>").fadeIn();
	}
	
	maj_pent_results = majorPentatonic(key);
	for (i=0; i<maj_pent_results.length; i++) {
		$('.major-pent-notes').hide().append("<li>" + maj_pent_results[i] + "</li>").fadeIn();
	}
	
	natural_minor_results = naturalMinorScale(key);
	for (i=0; i<natural_minor_results.length; i++) {
		$('.nat-minor-notes').hide().append("<li>" + natural_minor_results[i] + "</li>").fadeIn();
	}
	
	min_chord_results = naturalMinorScale(key);
	for (i=0; i<natural_minor_results.length - 1; i++) {
		$('.minor-chords').hide().append("<li>" + min_chord_results[i] + "</li>").fadeIn();
	}
	
	min_pent_results = minorPentatonic(key);
	for (i=0; i<min_pent_results.length; i++) {
		$('.minor-pent-notes').hide().append("<li>" + min_pent_results[i] + "</li>").fadeIn();
	}
	
	harmonic_minor_results = harmonicMinorScale(key);
	for (i=0; i<harmonic_minor_results.length; i++) {
		$('.har-minor-notes').hide().append("<li>" + harmonic_minor_results[i] + "</li>").fadeIn();
	}
	
	maj_triad_results = majorTriad(key);
	for (i=0; i<maj_triad_results.length; i++) {
		$('.major-triad').hide().append("<li>" + maj_triad_results[i] + "</li>").fadeIn();
	}
	
	min_triad_results = minorTriad(key);
	for (i=0; i<min_triad_results.length; i++) {
		$('.minor-triad').hide().append("<li>" + min_triad_results[i] + "</li>").fadeIn();
	}

})



// Menu Animation

$(window).scroll( function(){
	if ( $(this).scrollTop() > 320 ){
		
		if ( $('.choose-key').hasClass('fixed')){
			return;
		}
		else {
			$('.choose-key').hide().addClass('fixed').fadeIn();
			$('.space-holder').show();
		}
	} else {
		$('.choose-key').removeClass('fixed');
		$('.space-holder').hide();
	}
})
