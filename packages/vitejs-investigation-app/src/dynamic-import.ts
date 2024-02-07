export async function dynamicImport() {
  const dependency = await import("picocolors");

  console.log("dynamicImport", { dependency });
}
