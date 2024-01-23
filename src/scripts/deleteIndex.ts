import { unlink } from "fs";
import { resolve, join } from "path";

const deleteIndex = async (): Promise<void> => {
  const filePath = join(resolve(), "src", "index.ts");

  unlink(filePath, (err) => {
    if (err) {
      return console.error("Erro ao excluir index.ts:", err);
    }

    console.log("Sucesso ao excluir index.ts!");
  });
};

export default deleteIndex;
