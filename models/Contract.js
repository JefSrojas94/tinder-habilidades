const connection = require('../knexfile')['development'];
const database = require('knex')(connection);

const getAllContracts = () =>{
    return database('contract');
};
const getContract  = (contract_number) =>{
    return database('contract')
    .where({contract_number: contract_number});
};

const insertContract = (contract) =>{
    return database('contract')
    .insert(contract);
};

const updateContract = (contract_number,contract) =>{
    return database('contract')
    .where('icontract_numberd','=',contract_number)
    .update(contract)
};

const deleteContract = (contract_number) =>{
    return database('contract')
    .where('contract_number','=',contract_number)
    .del()
};

module.exports ={
    getAllContracts,
    getContract,
    insertContract,
    updateContract,
    deleteContract
}