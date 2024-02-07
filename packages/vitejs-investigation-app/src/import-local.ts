import { dynamicImport } from "./dynamic-import";

dynamicImport().finally(() => console.log("dynamicImport::import-local"));
