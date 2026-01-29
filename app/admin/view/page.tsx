import prisma from "@/lib/prisma";

export default async function Page() {
  const messages = await prisma.message.findMany();
  return (
    <>
      {messages.map((message) => (
        <li key={message.id}>{message.content}</li>
      ))}
    </>
  );
}
