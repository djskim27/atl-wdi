// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

"use strict";
//COULD NOT DO THIS ASSIGNMENT WITHOUT USING THE HW-SOLUTION
// Data Management and Business Logic //
const CounterCollection = {
  lastCountId: 0,
  counters: [], // e.g. {countId: 3, count: 20}
  createCounter: function(){
    this.lastCountId++;
    this.counters.push({
      countId: this.lastCountId,
      count: 0
    });
    return this.lastCountId;
  },
  getCounterValue: function(countId){
    console.log(`read counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { return counter.count; }
  },
  incrementCounter: function(countId){
    console.log(`increment counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) {
      counter.count += 1;
      return counter.count;
    }
   },
  decreaseCounter: function(countId){
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) {
      counter.count -= 1;
      return counter.count;
    }
  },
  destroyCounter: function(countId){
    console.log(`destroy counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { counter.destroy(); }
    this.counters = this.counters.filter(function(counter){ //
      return counter.countId !== countId
    });
  }
};

// UI //
const Presenter = {
  insertCounterComponent: function(newCountId){
   console.log(`insert counter component #${newCountId}`);
    // Your Code Here
    var newCounter = document.createElement('div');
    newCounter.innerHTML =
    `<h3>Count: <span>0</span></h3> <button class='increment'> +1 </button> <button class='decrease'> -1 </button> <button class='delete'> Delete </button>`;
    newCounter.className += ' counter';
    newCounter.dataset.countId = newCountId;
    newCounter.getElementsByClassName('increment')[0].onclick = AppController.onClickIncrement;
    newCounter.getElementsByClassName('decrease')[0].onclick = AppController.onClickDecrease;
    newCounter.getElementsByClassName('delete')[0].onclick = AppController.onClickDelete;
    document.getElementById('counter-list').appendChild(newCounter);
  },
  refreshCounterComponent: function(countId){
    console.log(`refresh counter component #${countId}`);
    // Your Code Here
    var counterValue = CounterCollection.getCounterValue(countId);
    document.querySelector(`[data-count-id="${countId}"] span`).innerHTML = counterValue;

  },
  removeCounterComponent: function(countId){             // REACH
    var counter = document.querySelector(`[data-count-id="${countId}"]`);
    counter.parentNode.removeChild(counter);


  }
};

// Top-Level Application Control //
const AppController = {
  onClickNewCounter: function(event){
    // Your Code Here
  CounterCollection.createCounter();
  Presenter.insertCounterComponent(CounterCollection.lastCountId);
  
  },
  onClickIncrement: function(event){
    // Your Code Here
  var countId = Number(event.target.parentNode.dataset.countId);
  CounterCollection.incrementCounter(countId);
  Presenter.refreshCounterComponent(countId);
  
  },
  onClickDecrease: function(event){
  var countId = Number(event.target.parentNode.dataset.countId);
  CounterCollection.decreaseCounter(countId);
  Presenter.refreshCounterComponent(countId);
  },
  onClickDelete: function(event){                           // REACH
    // Your Code Here
  var countId = Number(event.target.parentNode.dataset.countId);
  Presenter.removeCounterComponent(countId);
    
  }
};

window.onload = function(){
  document.getElementById('new-counter').onclick = AppController.onClickNewCounter;
};
