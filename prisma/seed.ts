import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  // Limpiar mensajes existentes
  await prisma.message.deleteMany({});

  // Crear mensajes de ejemplo
  const message1 = await prisma.message.create({
    data: { content: "¡Hola! Este es mi primer mensaje anónimo." },
  });

  const message2 = await prisma.message.create({
    data: { content: "La plataforma funciona muy bien." },
  });

  const message3 = await prisma.message.create({
    data: { content: "Me encanta poder compartir de forma anónima." },
  });

  console.log("✅ Seed completada:", { message1, message2, message3 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
