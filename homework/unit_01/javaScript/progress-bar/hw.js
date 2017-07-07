// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    // Your Code Here
    document.getElementById('numeric-display').textContent=timerValue;
    if (timerValue <= 10) {
       document.getElementById('numeric-display').style.color = 'red';
       
    }
    
  },
  drawProgressBars: function(timerValue){
    // Your Code Here
    
    
    document.getElementsByClassName('progress-bar')[0].style.width = (100 - timerValue) + '%';
  },
  drawLitFuses: function(timerValue){
    // Your Code Here
    var unburntPercent = timerValue/100
    document.getElementsByClassName('unburnt')[0].style.width = unburntPercent*98 + '%';
    document.getElementsByClassName('burnt')[0].style.width = (1-unburntPercent)*98 + '%';
   
  },
  drawCrawlers: function(timerValue){
    // Your Code Here
    var timePassed = 100 - timerValue;
    if (timePassed % 2 === 0){
    document.getElementsByClassName('crawler')[0].style.marginTop = '0px';
    } else {
    document.getElementsByClassName('crawler')[0].style.marginTop = '10px';
  }
  document.getElementsByClassName('crawler')[0].style.marginLeft = (timePassed * 10) + 'px';
  } 
};
