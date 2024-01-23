import { writeFile } from "fs";
import { resolve, join } from "path";

const createIndex = async (): Promise<void> => {
  const content = 'export * as default from "./components";';
  const filePath = join(resolve(), "src", "index.ts");

  writeFile(filePath, content, (err) => {
    if (err) {
      return console.error("Erro ao criar index.ts: ", err);
    }

    console.log("Sucesso ao criar index.ts!");
  });
};

export default createIndex;
