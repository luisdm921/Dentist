const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");

// Configuración
const IMAGES_DIR = path.join(__dirname, "../public/images");
const BACKUP_DIR = path.join(IMAGES_DIR, "backup_originales");
const MAX_WIDTH = 1920;
const QUALITY = 85;

// Formatos a procesar
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png"];

async function ensureDir(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!IMAGE_EXTENSIONS.includes(ext)) return;

  try {
    const fileName = path.basename(filePath);
    const backupPath = path.join(BACKUP_DIR, fileName);

    // Hacer backup si no existe
    try {
      await fs.access(backupPath);
    } catch {
      await fs.copyFile(filePath, backupPath);
      console.log(`✓ Backup creado: ${fileName}`);
    }

    // Optimizar imagen
    const image = sharp(filePath);
    const metadata = await image.metadata();

    if (metadata.width > MAX_WIDTH) {
      await image
        .resize(MAX_WIDTH, null, {
          withoutEnlargement: true,
          fit: "inside",
        })
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toFile(filePath + ".tmp");

      await fs.rename(filePath + ".tmp", filePath);
      console.log(
        `✓ Optimizada: ${fileName} (${metadata.width}px → ${MAX_WIDTH}px)`,
      );
    } else {
      await image
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toFile(filePath + ".tmp");

      await fs.rename(filePath + ".tmp", filePath);
      console.log(`✓ Optimizada: ${fileName}`);
    }

    // Crear versión WebP
    const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");
    await sharp(filePath).webp({ quality: QUALITY }).toFile(webpPath);
    console.log(`✓ WebP creado: ${path.basename(webpPath)}`);
  } catch (error) {
    console.error(`✗ Error procesando ${filePath}:`, error.message);
  }
}

async function processDirectory(dir) {
  const files = await fs.readdir(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = await fs.stat(filePath);

    if (stats.isDirectory() && !filePath.includes("backup_originales")) {
      await processDirectory(filePath);
    } else if (stats.isFile()) {
      await optimizeImage(filePath);
    }
  }
}

async function main() {
  console.log("🖼️  Iniciando optimización de imágenes...\n");

  try {
    await ensureDir(BACKUP_DIR);
    await processDirectory(IMAGES_DIR);
    console.log("\n✅ Optimización completada!");
    console.log(`📁 Backups guardados en: ${BACKUP_DIR}`);
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

main();
