import prisma from "@/lib/prisma";

export default async function Page() {
  const proyects = await prisma.proyects.findMany({});

  async function createMessage(formData: FormData) {
    "use server";

    const rawFormData = {
      message: formData.get("message"),
      proyect: formData.get("proyect"),
    };

    console.log(rawFormData);

    await prisma.message.create({
      data: {
        content: rawFormData.message ? rawFormData.message.toString() : "",
        proyectId: parseInt(rawFormData.proyect as string, 10),
      },
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="w-full max-w-md">
        <form action={createMessage} className="space-y-4">
          <div>
            <label
              htmlFor="proyect"
              className="block text-sm font-medium text-white mb-2"
            >
              {" "}
              Selecciona un proyecto
            </label>
            <select name="proyect" id="proyect" className="mb-2">
              {proyects &&
                proyects.map((proyect) => (
                  <option key={proyect.id} value={proyect.id}>
                    {proyect.name}
                  </option>
                ))}
            </select>
            <textarea
              id="message"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition resize-none"
              name="message"
              placeholder="Ingresa tu mensaje aquí..."
              rows={4}
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
  );
}
