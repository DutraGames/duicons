const { exec } = require('child_process');
const createIndexComponents = require('./createIndexComponents');
const deleteIndex = require('./deleteIndex');
const createIndex = require('./createIndex');

const main = async () => {
    try {
        await deleteIndex();

        await createIndex();


        await createIndexComponents();

        //console.log('Todos os comandos foram concluídos com sucesso!');
    } catch (err) {
        console.error('Erro durante a execução:', err);
    }
};

main();
