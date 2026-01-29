import prisma from "@/lib/prisma"

export default function Page() {
  async function createMessage(formData: FormData) {
    'use server'
 
    const rawFormData = {
        message: formData.get('message'),
    }

    const message = rawFormData.message? rawFormData.message.toString() : "";

    await prisma.message.create({
        data: {
            content: message
        }
    }) 
  }

 
return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="w-full max-w-md">
            <form action={createMessage} className="space-y-4">
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Mensaje
                    </label>
                    <input
                        id="message"
                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition"
                        type="text"
                        name="message"
                        placeholder="Ingresa tu mensaje aquí..."
                        required
                    />
                </div>
                <button
                    className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
                    type="submit"
                >
                    Enviar
                </button>
            </form>
        </div>
    </div>
    
  )
}