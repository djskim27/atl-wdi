// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
$(function(){

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
 
    //Increases the number of milliseconds by ten.
    this.millisecs += 10;
    //If number of milliseconds reaches 1000
    if (this.millisecs === 1000) {
      // resets number of milliseconds to zero
      this.millisecs = 0;
      //increments the number of seconds
      this.secs += 1
    }
    // If the number of seconds reaches 60
    if (this.secs === 60) {
      //it resets the number of seconds to zero.
      this.secs = 0;
      //it increments the number of minutes
      this.mins += 1;
    }   
  },
  reset: function(){
    // resets the counts of minutes, seconds, and milliseconds to zero.
    this.mins = 0;
    this.secs = 0;
    this.millisecs = 0;
    
    //it resets the list of laps to be empty
    this.laps = [];
    
  },
  start: function(){
  // if the stopwatch is not running
    if (this.isRunning === false) {
      //it sets the state of the stopwatch to 'running'
      this.isRunning = true;
      //it calls tickClock in order to start the ticking of the clock
      this.tickClock();
    }
  // if the stopwatch is running
    //it does nothing
  
  },
  stop: function(){
    // if the stopwatch is running
    if (this.isRunning === true) {
      // it sets the state of the stopwatch to not running
      this.isRunning = false;
    }
    // if the stopwatch is not running
      //it does nothing
  },
  lap: function(){
    // if the stopwatch is running
    if (this.isRunning === true) {
      //it adds a record of the current values of minutes ('min'), seconds, milliseconds
      this.laps.push({
        mins: this.mins,
        secs: this.secs,
        millisecs: this.millisecs

      })
    }
    //if the stopwatch is not running
      //it does nothing
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    //displays the values of minutes, seconds, and (tens of) milliseconds elapsed in the DOM element with id 'time-display'
    $('#mins').html(ViewHelpers.zeroFill(mins, 2));
    $('#secs').html(ViewHelpers.zeroFill(secs, 2));
    $('#millisecs').html(ViewHelpers.zeroFill(millisecs/10, 2));
    
  },
  updateLapListDisplay: function(laps){
    // Your Code Here
    var laps = Stopwatch.laps;
    
    var $lapList = $('#lap-list');

    $lapList.html('');

    for (var i = 0; i<laps.length; i++){
      $lapList.append('<li>'+ ViewHelpers.zeroFill(laps[i].mins, 2) + ':'+
        ViewHelpers.zeroFill(laps[i].secs, 2) + ":" +
        ViewHelpers.zeroFill(laps[i].millisecs/10, 2) + '</li>');
    }
  },
};
const ViewHelpers = {
  zeroFill: function(number, length){
    //if 'number' has fewer digits than 'length'
      
      // it should return a number as a string, padded on the left with zero until its length is equal to length
    //USED SOLUTION FOR THIS PART
    var str = number.toString();
    let numZeroes = Math.max(length - str.length, 0);
    for( var i = 0; i < (length - str.length); i++){
      str = '0' + str;
    }

  
    
    // if numbers dont have fewer digits than length
      //return number as a string, unaltered.
        return str;
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    //it retrieves the current time values (mins, secs, millisecs) from 'Stopwatch'
    ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs,Stopwatch.millisecs)
  },
  handleClickStart: function() {
    // stop is not running
    if (Stopwatch.isRunning === false) {
      //starts the stopwatch
      Stopwatch.start();
    // if the stop is already running
      //it does nothing
    }
  },
  handleClickStopReset: function(){
    //if the stopwatch is running
    if (Stopwatch.isRunning === true) {
      //it stops the stopwatch
      Stopwatch.stop();
    
    //if the stop watch is not running,
    } else if (Stopwatch.isRunning === false) {
      //it resets the stopwatch
      Stopwatch.reset();
      
      //it updates the time display so that it shows '00:00:00'
      ViewEngine.updateTimeDisplay(0, 0, 0);
      //it updates the lap list display so that it is empty.

    

    }
  },
  handleClickLap: function(){
    // Your Code Here
      if (Stopwatch.isRunning) {
      Stopwatch.lap();
      ViewEngine.updateLapListDisplay(Stopwatch.laps);
      
    }
  }
};


  //Add clickable events
function addEventHandlers() {
//start timer
$('#start').on('click',
  AppController.handleClickStart);
//stop time 'first click'; reset time 'second click'
$('#stop').on('click', AppController.handleClickStopReset);
//lap
$('#lap').on('click', AppController.handleClickLap);
};
//call function for events
addEventHandlers();
});


