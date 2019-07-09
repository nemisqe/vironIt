'use strict';

// var eventEmitter = function () {
// 	this.events = {};
// };

// eventEmitter.on('breakfast', (onBreakfast) => {
// 	console.log('breakfast is served');
// }

// eventEmitter.emit('breakfast', 'randomDish');

// const emitter = {
// 	subscriptions: {

// 	}
// }


/////////

function onBreakfast () {
	console.log('breakfast is served');
};

const eventEmitter = {
  on('breakfast', onBreakfast) {
    this._subscriptions['breakfast'] = this._subscriptions['breakfast'] || [];
    this._subscriptions['breakfast'].push(onBreakfast)
  },
  off('breakfast', onBreakfast) {
     this._subscriptions['breakfast'] = this._subscriptions['breakfast'].filter(f => f !== onBreakfast)
  },
  _subscriptions:{},
  emit('breakfast', onBreakfast) {
    if(!this._subscriptions['breakfast']){return; }
    this._subscriptions['breakfast'].forEach(f => f(onBreakfast))
}



// var officers = [
//   { id: 20, name: 'Captain Piett' },
//   { id: 24, name: 'General Veers' },
//   { id: 56, name: 'Admiral Ozzel' },
//   { id: 88, name: 'Commander Jerjerrod' }
// ];

// const officersIds = officers.map(officer => officer.id);
// console.log(officersIds);

// function Animal (name) {
// 	this.name = name;
// };

// Animal.prototype.run = function () {
// 	console.log('ruuuuuuuning');
// };

// Animal.prototype.stop = function () {
// 	console.log('stoppppppp');
// };

// var fAnimal = new Animal('roflan');

// fAnimal.run();
// fAnimal.stop();