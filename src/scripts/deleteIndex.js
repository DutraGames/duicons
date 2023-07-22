const fs = require('fs');
const path = require('path');

const deleteIndex = () => {

    const filePath = path.join(__dirname, '../', 'index.ts');

    fs.unlink(filePath, (err) => {
        if (err) return console.error('Error in deleting index.ts:', err);

        console.log('Success in deleting index.ts!');
    }
    );
}