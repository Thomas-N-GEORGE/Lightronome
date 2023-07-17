// Utility file.

import React from "react";

// Context metronome settings for whole app.
export const BeatContext = React.createContext(null);

// Main class containing data and calculation methods.
export class Beat {
  constructor(bpm, meterNum, meterDenom, division) {
    this.bpm = Number(bpm);
    this.meterNum = Number(meterNum);
    this.meterDenom = Number(meterDenom);
    this.division = Number(division);
    this.checkValues();
  }
  
  checkValues() {
    this.division = (this.division === 0 ? 1 : this.division);
    this.period = Math.round(60000 / (this.bpm * this.division));
  }
}
