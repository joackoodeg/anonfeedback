"use server";
import prisma from "@/lib/prisma";

export type MessageWithProyect = {
  id: number;
  content: string;
  proyectId: number;
  proyect: {
    id: number;
    name: string;
  };
};

export async function getMessages(): Promise<MessageWithProyect[]> {
  const messages = await prisma.message.findMany({
    select: {
      id: true,
      content: true,
      proyectId: true,
      proyect: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      id: "desc",
    },
  });

  return messages;
}
