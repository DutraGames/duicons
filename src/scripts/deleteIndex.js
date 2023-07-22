const fs = require('fs');
const path = require('path');

const deleteIndex = async() => {

    const filePath = path.join(path.resolve(), 'src', 'index.ts');

    fs.unlink(filePath, (err) => {
        if (err) return console.error('Error in deleting index.ts:', err);

        console.log('Success in deleting index.ts!');
    }
    );
}

module.exports = deleteIndex;