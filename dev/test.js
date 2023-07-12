const Blockchain = require('./blockchain');

const newBlockchain = new Blockchain();
newBlockchain.createNewTransaction(10, 'bank', 'bank2');
newBlockchain.createNewTransaction(10, 'bank', 'bank2');
newBlockchain.createNewTransaction(10, 'bank', 'bank2');
const bdata = newBlockchain.getCurrentBlockData;