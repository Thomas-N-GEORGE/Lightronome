// Utility file.

import React from "react";

// Context metronome settings for whole app.
export const BeatContext = React.createContext(null);

// Main class containing data and calculation methods.
export class Beat {
  constructor(bpm, count, division) {
    this.bpm = Math.round(Number(bpm));
    this.count = Math.round(Number(count));
    this.division = Math.round(Number(division));
    this.checkValues();
  }
  
  checkValues() {
    this.division = (this.division < 1 ? 1 : this.division);
    this.period = Math.round(60000 / (this.bpm * this.division));
  }
}
