// Utility file.

import React from "react";

// Context metronome settings for whole app.
export const BeatContext = React.createContext(null);

// Main class containing data and calculation methods.
export class Beat {
  constructor(bpm = null, meterNum = null, meterDenom = null, division = null) {
    this.bpm = bpm;
    this.meterNum = meterNum;
    this.meterDenom = meterDenom;
    this.division = division;
  }
}
