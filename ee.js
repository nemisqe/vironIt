'use strict';

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