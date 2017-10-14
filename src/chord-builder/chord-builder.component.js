/* global angular */
angular.module('RcpgApp')
  .component('chordBuilder', {
    templateUrl: 'chord-builder/chord-builder.template.html',
    controller: function GreetUserController() {
      let pitchClasses = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];
      function Pitch(midiNumber) {
        this.midiNumber = midiNumber;
        this.class = pitchClasses[midiNumber % 12];
        this.octave = Math.floor(midiNumber / 12) - 1;
        this.name = this.class + ' ' + this.octave;
      }
      this.pitches = [];
      for (let midiNumber = 0; midiNumber < 128; midiNumber++) {
        this.pitches.push(new Pitch(midiNumber));
      }
    }
  });