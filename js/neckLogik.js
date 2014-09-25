// All our data

music = ["e", "f", "f#", "g", "g#", "a", "a#", "b", "c", "c#", "d", "d#"];

musicFlat = ["e", "f", "gb", "g", "ab", "a", "bb", "b", "c", "db", "d", "eb"];

position = [ "root", "2nd", "3rd", "4th", "5th", "6th", "7th", "octave"];

triad_position = ["root", "3rd", "5th"];

maj_pent_pos = [ "root", "2nd", "3rd", "5th", "6th"];

min_pent_pos = [ "root", "3rd", "4th", "5th", "7th"];

maj_chords = ['major', 'minor', 'minor', 'major', 'major', 'minor', 'diminished'];

min_chords = ['minor', 'diminished', 'major', 'minor', 'minor', 'major', 'major'];



// initial settings

for(i=0; i<music.length; i++) {
	$('.keys').append("<li>" + music[i] + "</li>");
}

for(i=0; i<position.length; i++) {
	$('.position').append("<li>" + position[i] + "</li>");
}

for(i=0; i<maj_pent_pos.length; i++) {
	$('.maj-pent-pos').append("<li>" + maj_pent_pos[i] + "</li>");
}

for(i=0; i<min_pent_pos.length; i++) {
	$('.min-pent-pos').append("<li>" + min_pent_pos[i] + "</li>");
}

for(i=0; i<triad_position.length; i++) {
	$('.triad-position').append("<li>" + triad_position[i] + "</li>");
}



// functions for setting things

function majorScale(x)
{ 
	index = music.indexOf(x);
	a = music[index];
	b = music[(index+2) % 12];
	c = music[(index+4) % 12];
	d = music[(index+5) % 12];
	e = music[(index+7) % 12];
	f = music[(index+9) % 12];
	g = music[(index+11) % 12];
	h = music[(index+12) % 12];
	maj_notes = [ a, b, c, d, e, f, g, h];
	if ( x == "f") maj_notes[3] = "bb";
	return maj_notes;
}

function majorTriad(x)
{
	index = music.indexOf(x);
	a = music[index];
	b = music[(index+4) % 12];
	c = music[(index+7) % 12];
	maj_triad = [ a, b, c];
	return maj_triad;
}

function majorPentatonic(x)
{
	index = music.indexOf(x);
	a = music[index];
	b = music[(index+2) % 12];
	c = music[(index+4) % 12];
	d = music[(index+7) % 12];
	e = music[(index+9) % 12];
	maj_pent = [ a, b, c, d, e];
	return maj_pent;
}


function naturalMinorScale(x)
{ 
	index = musicFlat.indexOf(x);
	a = musicFlat[index];
	b = musicFlat[(index+2) % 12];
	c = musicFlat[(index+3) % 12];
	d = musicFlat[(index+5) % 12];
	e = musicFlat[(index+7) % 12];
	f = musicFlat[(index+8) % 12];
	g = musicFlat[(index+10) % 12];
	h = musicFlat[(index+12) % 12];
	nat_min_notes = [ a, b, c, d, e, f, g, h];
	return nat_min_notes; 
}

function harmonicMinorScale(x)
{ 
	index = musicFlat.indexOf(x);
	a = musicFlat[index];
	b = musicFlat[(index+2) % 12];
	c = musicFlat[(index+3) % 12];
	d = musicFlat[(index+5) % 12];
	e = musicFlat[(index+7) % 12];
	f = musicFlat[(index+8) % 12];
	g = musicFlat[(index+11) % 12];
	h = musicFlat[(index+12) % 12];
	har_min_notes = [ a, b, c, d, e, f, g, h];
	if ( x == "a") har_min_notes[6] = "g#";
	if ( x == "b") har_min_notes[1] = "c#";
	if ( x == "b") har_min_notes[4] = "f#";
	if ( x == "b") har_min_notes[6] = "a#";
	
	return har_min_notes; 
}

function minorTriad(x)
{
	index = musicFlat.indexOf(x);
	a = musicFlat[index];
	b = musicFlat[(index+3) % 12];
	c = musicFlat[(index+7) % 12];
	min_triad = [ a, b, c];
	return min_triad;
}

function minorPentatonic(x)
{
	index = musicFlat.indexOf(x);
	a = musicFlat[index];
	b = musicFlat[(index+3) % 12];
	c = musicFlat[(index+5) % 12];
	d = musicFlat[(index+7) % 12];
	e = musicFlat[(index+10) % 12];
	min_pentatonic = [ a, b, c, d, e];
	return min_pentatonic;
}



// chaning everything when choosing a key

$('.choose-key ul li').click( function(){
	
	$('.major-notes li').remove();
	$('.nat-minor-notes li').remove();
	$('.har-minor-notes li').remove();
	$('.major-pent-notes li').remove();
	$('.minor-pent-notes li').remove();
	$('.major-triad li').remove();
	$('.minor-triad li').remove();
	
	$('.choose-key ul li').filter('.active').removeClass('active');
	$(this).addClass('active');
	
	key = $(this).text().toLowerCase();
	
	major_results = majorScale(key);
	for (i=0; i<major_results.length; i++) {
		$('.major-notes').append("<li>" + major_results[i] + "</li>");
	}
	
	maj_pent_results = majorPentatonic(key)
	for (i=0; i<maj_pent_results.length; i++) {
		$('.major-pent-notes').append("<li>" + maj_pent_results[i] + "</li>");
	}
	
	natural_minor_results = naturalMinorScale(key);
	for (i=0; i<natural_minor_results.length; i++) {
		$('.nat-minor-notes').append("<li>" + natural_minor_results[i] + "</li>");
	}
	
	min_pent_results = minorPentatonic(key)
	for (i=0; i<min_pent_results.length; i++) {
		$('.minor-pent-notes').append("<li>" + min_pent_results[i] + "</li>")
	}
	
	harmonic_minor_results = harmonicMinorScale(key);
	for (i=0; i<harmonic_minor_results.length; i++) {
		$('.har-minor-notes').append("<li>" + harmonic_minor_results[i] + "</li>");
	}
	
	maj_triad_results = majorTriad(key);
	for (i=0; i<maj_triad_results.length; i++) {
		$('.major-triad').append("<li>" + maj_triad_results[i] + "</li>");
	}
	
	min_triad_results = minorTriad(key);
	for (i=0; i<min_triad_results.length; i++) {
		$('.minor-triad').append("<li>" + min_triad_results[i] + "</li>");
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

