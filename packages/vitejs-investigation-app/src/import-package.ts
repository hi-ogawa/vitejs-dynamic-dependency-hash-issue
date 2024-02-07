import { dynamicImport } from "@vitejs-investigation/dynamic-import";

dynamicImport().finally(() => console.log("dynamicImport::import-package"));
