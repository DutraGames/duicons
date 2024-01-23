import { readdirSync, writeFile } from "fs";
import { resolve, join } from "path";

const pathRoot = resolve();
const pathFiles = join(pathRoot, "src", "components");

const createIndexComponents = async (): Promise<void> => {
  const files = readdirSync(pathFiles);
  let content = "";

  files.forEach((file) => {
    const fileName = file.replace(/\.(js|jsx|ts|tsx)$/, ""); // Remove a extensão do arquivo
    const componentName = toPascalCase(fileName); // Converte o nome do arquivo para PascalCase
    content += `export { default as ${componentName} } from "./${fileName}";\n`;
  });

  writeFile(join(pathFiles, "index.ts"), content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Arquivo index.ts foi escrito com sucesso!");
    }
  });
};

// Função para converter texto para PascalCase (PrimeiraLetraMaiúscula)
const toPascalCase = (str: string): string => {
  return str.replace(
    /(\w)(\w*)/g,
    (_, first, rest) => first.toUpperCase() + rest.toLowerCase()
  );
};

export default createIndexComponents;
