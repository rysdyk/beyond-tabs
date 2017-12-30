// copy of neckLogik-oo-v2, but without the closure

var beyondTabs = {
    notes: ["A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab"],

    init: function(){
      this.cacheDom();
      this.renderNotes(3);
      this.$key.eq(3).addClass('active');
      this.showNotes();
      this.events();
    },

    cacheDom: function(){
      this.$key = $('.keys li');
      this.$notes = $('.notes');
      this.$majNote = $('.major-notes');
      this.$majChords = $('.major-chords');
      this.$natMin = $('.nat-minor-notes');
      this.$harMin = $('.har-minor-notes');
      this.$minChords = $('.minor-chords');
      this.$majPentNotes = $('.major-pent-notes');
      this.$minPentNotes = $('.minor-pent-notes');
      this.$majTri = $('.major-triad');
      this.$minTri = $('.minor-triad');
    },

    events: function(){
      this.$key.click( function(){
        beyondTabs.changeKey($(this));
      });
    },

    renderNotes: function(x){
      if ( x !== undefined) {
        for ( i=0; i <= beyondTabs.notes.length; i++ ) {
          this.$notes.append("<li>" + beyondTabs.notes[(x + i) % 12] + "</li>");
          this.$notes.children().hide();
        }
      } else {
        for ( i=0; i <= beyondTabs.notes.length; i++ ) {
          this.$notes.append("<li>" + beyondTabs.notes[i % 12] + "</li>");
          this.$notes.children().hide();
        }
      }
    },

    showNotes: function(){
      var intervals = [
        [this.$majNote,       [0, 2, 4, 5, 7, 9, 11, 12]],
        [this.$majChords,     [0, 2, 4, 5, 7, 9, 11]],
        [this.$majTri,        [0, 4, 7]],
        [this.$majPentNotes,  [0, 2, 4, 7, 9]],
        [this.$natMin,        [0, 2, 3, 5, 7, 8, 10, 12]],
        [this.$minChords,     [0, 2, 3, 5, 7, 8, 10]],
        [this.$natMin,        [0, 2, 3, 5, 7, 8, 10, 12]],
        [this.$harMin,        [0, 2, 3, 5, 7, 8, 11, 12]],
        [this.$minTri,        [0, 3, 7]],
        [this.$minPentNotes,  [0, 3, 5, 7, 10]]
      ];

      for (i = 0; i < intervals.length; i++) {
        for ( j = 0; j < intervals[i][1].length; j++ ) {
          intervals[i][0].children('li').eq(intervals[i][1][j % 12]).show();
        }
      }
    },

    changeKey: function(x){
      this.$key.filter('.active').removeClass('active');
      x.addClass('active');
      this.$notes.children().remove();
      var num = this.$key.index(x);
      beyondTabs.renderNotes(num);
      beyondTabs.showNotes();
    }
  };
