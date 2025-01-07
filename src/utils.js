const fs = require('fs');
const path = require('path');

function saveToFile(fileName, data) {
    const filePath = path.join(__dirname, '..', fileName);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function loadFromFile(fileName) {
    const filePath = path.join(__dirname, '..', fileName);
    if (!fs.existsSync(filePath)) return null;
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

module.exports = { saveToFile, loadFromFile };
