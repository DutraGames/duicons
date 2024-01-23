import deleteIndex from "./deleteIndex";
import createIndex from "./createIndex";
import createIndexComponents from "./createIndexComponents";

const main = async (): Promise<void> => {
  try {
    await deleteIndex();
    await createIndex();
    await createIndexComponents();
  } catch (err) {
    console.error("Erro durante a execução:", err);
  }
};

main();
