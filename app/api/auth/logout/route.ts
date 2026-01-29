import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    // Eliminar cookie de sesión
    const cookieStore = await cookies();
    cookieStore.delete("admin_session");

    return NextResponse.json({
      success: true,
      message: "Sesión cerrada exitosamente",
    });
  } catch (error) {
    console.error("Error en logout:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Error al cerrar sesión",
      },
      { status: 500 },
    );
  }
}
