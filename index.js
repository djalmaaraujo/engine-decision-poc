/* jshint node: true */

"use strict";

let Engine = require('./engine');

const Products = {
    'bookvolume': 'BookVolume',
    'online_buy_back': 'On-line buy back',
    'valore_liquidate': 'Valore Liquidate'
};

const engine = new Engine();

engine.add('bookvolume', 1);
engine.add('bookvolume', 1);
engine.add('bookvolume', 1);
engine.add('online_buy_back', 1);
engine.add('online_buy_back', 4);

console.log('The winner is: ' + Products[engine.result()]);
