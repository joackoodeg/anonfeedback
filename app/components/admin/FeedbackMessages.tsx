import type { MessageWithProyect } from "@/app/admin/view/actions";

interface FeedbackMessagesProps {
  messages: MessageWithProyect[];
}

export const FeedbackMessages = ({ messages }: FeedbackMessagesProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Anonymous Messages
        </h1>
        <p className="text-gray-600">Total messages: {messages.length}</p>
      </div>

      {messages.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <p className="text-gray-500 text-lg">No messages yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6 border border-gray-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-gray-800 text-lg leading-relaxed">
                    {message.content}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {message.proyect.name}
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                <span>ID: {message.id}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
