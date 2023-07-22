const fs = require('fs');
const path = require('path');


const createIndex = () => {

    const content = 'export * as default from "./components";';
    const filePath = path.join(path.resolve(), 'src', 'index.ts');
    fs.writeFile(filePath, content, (err) => {
        if (err) return console.error('Error in creating index.ts: ', err);

        console.log('Success in creating index.ts!');
    }
    );
}

module.exports = createIndex;