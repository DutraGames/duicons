const path = require('path');
const fs = require('fs');

const pathRoot = path.resolve();
const pathFiles = path.join(pathRoot, 'src', 'components');

const createIndexComponents = () => {
  const files = fs.readdirSync(pathFiles);
  let content = '';

  files.forEach((file) => {
    const fileName = file.replace(/\.(js|jsx|ts|tsx)$/, ''); // Remove a extensão do arquivo
    const componentName = toPascalCase(fileName); // Converte o nome do arquivo para PascalCase
    content += `export { default as ${componentName} } from "./${fileName}";\n`;
  });

  fs.writeFile(pathFiles + '/index.ts', content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Arquivo index.ts foi escrito com sucesso!');
    }
  });
};

// Função para converter texto para PascalCase (PrimeiraLetraMaiúscula)
const toPascalCase = (str) => {
  return str.replace(/(\w)(\w*)/g, (_, first, rest) => first.toUpperCase() + rest.toLowerCase());
};

module.exports = createIndexComponents;
