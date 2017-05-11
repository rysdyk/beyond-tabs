(function(){
  var beyondTabs = {
    notes: ["A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab"],

    init: function(){
      this.cacheDom();
      this.renderNotes(3);
      this.$keys[3].classList.add('active');
      this.showNotes();
      this.events();
    },

    cacheDom: function(){
      this.$keys = document.querySelectorAll('.keys li');
      this.$notes = document.querySelectorAll('.notes');
      this.$majNote = document.querySelectorAll('.major-notes');
      this.$majChords = document.querySelectorAll('.major-chords');
      this.$natMin = document.querySelectorAll('.nat-minor-notes');
      this.$harMin = document.querySelectorAll('.har-minor-notes');
      this.$minChords = document.querySelectorAll('.minor-chords');
      this.$majPentNotes = document.querySelectorAll('.major-pent-notes');
      this.$minPentNotes = document.querySelectorAll('.minor-pent-notes');
      this.$majTri = document.querySelectorAll('.major-triad');
      this.$minTri = document.querySelectorAll('.minor-triad');
    },

    events: function(){
      this.$keys.forEach( function(key){
        key.addEventListener('click', function(){
          beyondTabs.changeKey(this);
        });
      })
    },

    renderNotes: function(x){
      if ( x !== undefined) {
        this.$notes.forEach( function(ul){
          for ( i=0; i <= beyondTabs.notes.length; i++ ) {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(beyondTabs.notes[(x + i) % 12]));
            ul.appendChild(li);
            li.style.display = 'none';
          }
        });
      } else {
        this.$notes.forEach( function(ul){
          for ( i=0; i <= beyondTabs.notes.length; i++ ) {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(beyondTabs.notes[i % 12]));
            ul.appendChild(li);
            li.style.display = 'none';
          }
        });
      }
    },

    // render notes loads up all notes for each area, then hides them all, and show notes only relevant notes

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
          intervals[i][0][0].children[intervals[i][1][j % 12]].style.display = 'inline-block';
        }
      }
    },

    changeKey: function(x){
      this.$keys.forEach(function(key){
        key.classList.remove('active');
      });

      x.classList.add('active');

      this.$notes.forEach( function(ul){
        while (ul.firstChild) {
          ul.removeChild(ul.firstChild);
        }
      });

      var keys = Array.from(this.$keys);
      var num = keys.indexOf(x);
      beyondTabs.renderNotes(num);
      beyondTabs.showNotes();
    }
  };

  beyondTabs.init();
})();
