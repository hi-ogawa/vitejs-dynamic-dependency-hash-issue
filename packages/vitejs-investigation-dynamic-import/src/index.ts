export async function dynamicImport() {
  const dependency = await import("picocolors");

  console.log("dynamicImport", { dependency });
}

export async function getDep() {
  return import("picocolors");
}
