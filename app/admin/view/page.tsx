import { Suspense } from "react";
import { FeedbackMessages } from "@/app/components/admin/FeedbackMessages";
import { getMessages } from "./actions";

async function MessagesList() {
  const messages = await getMessages();
  return <FeedbackMessages messages={messages} />;
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Suspense fallback={<div>Cargando...</div>}>
          <MessagesList />
        </Suspense>
      </div>
    </div>
  );
}
