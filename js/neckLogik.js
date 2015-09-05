// All our data

var beyondTabs = {};

beyondTabs.music = ["A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab"];

beyondTabs.position = [ "root", "2nd", "3rd", "4th", "5th", "6th", "7th", "octave"];

beyondTabs.triad_position = ["root", "3rd", "5th"];

beyondTabs.maj_pent_pos = [ "root", "2nd", "3rd", "5th", "6th"];

beyondTabs.min_pent_pos = [ "root", "3rd", "4th", "5th", "7th"];

beyondTabs.maj_chords = ['major', 'minor', 'minor', 'major', 'major', 'minor', 'diminished'];

beyondTabs.min_chords = ['minor', 'diminished', 'major', 'minor', 'minor', 'major', 'major'];

// set up the DOM position indicators above and below notes

(function(){
	for (i=0; i<beyondTabs.music.length; i++) {
		$('.keys').append("<li>" + beyondTabs.music[i] + "</li>");
	}

	for (i=0; i<beyondTabs.position.length; i++) {
		$('.position').append("<li>" + beyondTabs.position[i] + "</li>");
	}

	for (i=0; i<beyondTabs.maj_pent_pos.length; i++) {
		$('.maj-pent-pos').append("<li>" + beyondTabs.maj_pent_pos[i] + "</li>");
	}

	for (i=0; i<beyondTabs.min_pent_pos.length; i++) {
		$('.min-pent-pos').append("<li>" + beyondTabs.min_pent_pos[i] + "</li>");
	}

	for (i=0; i<beyondTabs.triad_position.length; i++) {
		$('.triad-position').append("<li>" + beyondTabs.triad_position[i] + "</li>");
	}

	for (i=0; i<beyondTabs.maj_chords.length; i++) {
		$('.maj-chords').append("<li>" + beyondTabs.maj_chords[i] + "</li>");
	}

	for (i=0; i<beyondTabs.min_chords.length; i++) {
		$('.min-chords').append("<li>" + beyondTabs.min_chords[i] + "</li>");
	}
})();

// functions for setting things
// x is the musical key

beyondTabs.majorScale = function(x)
{
	index = beyondTabs.music.indexOf(x);

	intervals = [0, 2, 4, 5, 7, 9, 11, 12];

	pos = [];

	for (i=0; i<intervals.length; i++ ) {
		pos[i] = beyondTabs.music[(index+intervals[i]) % 12];
	}

	maj_notes = [];

	for ( i=0; i<8; i++) {
		maj_notes.push(pos[i]);
	}

	if ( x == "f") maj_notes[3] = "b#";

	return maj_notes;
}

beyondTabs.majorTriad = function(x)
{
	index = beyondTabs.music.indexOf(x);

	intervals = [0, 4, 7];

	for (i=0; i<intervals.length; i++ ) {
		pos[i] = beyondTabs.music[(index+intervals[i]) % 12];
	}

	maj_triad = [];

	for ( i=0; i<3; i++) {
		maj_triad.push(pos[i]);
	}

	return maj_triad;
}

beyondTabs.majorPentatonic = function(x) {

	index = beyondTabs.music.indexOf(x);

	intervals = [0, 2, 4, 7, 9];

	for (i=0; i<intervals.length; i++ ) {
		pos[i] = beyondTabs.music[(index+intervals[i]) % 12];
	}

	maj_pent = [];

	for ( i=0; i<5; i++) {
		maj_pent.push(pos[i]);
	}

	return maj_pent;
}


beyondTabs.naturalMinorScale = function(x) {
	intervals = [ 0, 2, 3, 5, 7, 8, 10, 12];

	pos = [];

	index = beyondTabs.music.indexOf(x);

	for (i=0; i<intervals.length; i++ ) {
		pos[i] = beyondTabs.music[(index+intervals[i]) % 12];
	}

	nat_min_notes = [];

	for ( i=0; i<8; i++) {
		nat_min_notes.push(pos[i]);
	}

	if ( x == "a#") nat_min_notes[1] = "b#";
	if ( x == "a#") nat_min_notes[4] = "e#";

	return nat_min_notes;
}

beyondTabs.harmonicMinorScale = function(x) {

	index = beyondTabs.music.indexOf(x);

	intervals = [ 0, 2, 3, 5, 7, 8, 11, 12];

	pos = [];

	for (i=0; i<intervals.length; i++ ) {
		pos[i] = beyondTabs.music[(index+intervals[i]) % 12];
	}

	har_min_notes = [];

	for ( i=0; i<8; i++) {
		har_min_notes.push(pos[i]);
	}

	if ( x == "a") har_min_notes[6] = "g#";
	if ( x == "b") har_min_notes[1] = "c#";
	if ( x == "b") har_min_notes[4] = "f#";
	if ( x == "b") har_min_notes[6] = "a#";

	return har_min_notes;
}

beyondTabs.minorTriad = function(x) {

	index = beyondTabs.music.indexOf(x);

	intervals = [ 0, 3, 7];

	pos = [];

	for (i=0; i<intervals.length; i++ ) {
		pos[i] = beyondTabs.music[(index+intervals[i]) % 12];
	}

	min_triad = [];

	for ( i=0; i<3; i++) {
		min_triad.push(pos[i]);
	}

	return min_triad;
}

beyondTabs.minorPentatonic = function(x) {
	intervals = [ 0, 3, 5, 7, 10];

	pos = [];

	index = beyondTabs.music.indexOf(x);

	for (i=0; i<intervals.length; i++ ) {
		pos[i] = beyondTabs.music[(index+intervals[i]) % 12];
	}

	min_pentatonic = [];

	for ( i=0; i<5; i++) {
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

	major_results = beyondTabs.majorScale(key);
	for (i=0; i<maj_notes.length; i++) {
		$('.major-notes').hide().append("<li>" + major_results[i] + "</li>").fadeIn();
	}

	maj_chord_results = beyondTabs.majorScale(key);
	for (i=0; i<major_results.length - 1; i++) {
		$('.major-chords').hide().append("<li>" + maj_chord_results[i] + "</li>").fadeIn();
	}

	maj_pent_results = beyondTabs.majorPentatonic(key);
	for (i=0; i<maj_pent_results.length; i++) {
		$('.major-pent-notes').hide().append("<li>" + maj_pent_results[i] + "</li>").fadeIn();
	}

	natural_minor_results = beyondTabs.naturalMinorScale(key);
	for (i=0; i<natural_minor_results.length; i++) {
		$('.nat-minor-notes').hide().append("<li>" + natural_minor_results[i] + "</li>").fadeIn();
	}

	min_chord_results = beyondTabs.naturalMinorScale(key);
	for (i=0; i<natural_minor_results.length - 1; i++) {
		$('.minor-chords').hide().append("<li>" + min_chord_results[i] + "</li>").fadeIn();
	}

	min_pent_results = beyondTabs.minorPentatonic(key);
	for (i=0; i<min_pent_results.length; i++) {
		$('.minor-pent-notes').hide().append("<li>" + min_pent_results[i] + "</li>").fadeIn();
	}

	harmonic_minor_results = beyondTabs.harmonicMinorScale(key);
	for (i=0; i<harmonic_minor_results.length; i++) {
		$('.har-minor-notes').hide().append("<li>" + harmonic_minor_results[i] + "</li>").fadeIn();
	}

	maj_triad_results = beyondTabs.majorTriad(key);
	for (i=0; i<maj_triad_results.length; i++) {
		$('.major-triad').hide().append("<li>" + maj_triad_results[i] + "</li>").fadeIn();
	}

	min_triad_results = beyondTabs.minorTriad(key);
	for (i=0; i<min_triad_results.length; i++) {
		$('.minor-triad').hide().append("<li>" + min_triad_results[i] + "</li>").fadeIn();
	}

})



// Menu Animation

// $(window).scroll( function(){
// 	if ( $(this).scrollTop() > 290 ){
//
// 		if ( $('.choose-key').hasClass('fixed')){
// 			return;
// 		}
// 		else {
// 			$('.choose-key').hide().addClass('fixed').fadeIn();
// 			$('.space-holder').show();
// 		}
// 	} else {
// 		$('.choose-key').removeClass('fixed');
// 		$('.space-holder').hide();
// 	}
// })
