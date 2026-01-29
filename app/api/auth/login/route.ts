import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { CreateAuthToken } from "@/lib/utils";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  if (!username || !password) {
    return NextResponse.json(
      {
        success: false,
        error: "Usuario y contraseña son requeridos",
      },
      { status: 400 },
    );
  }

  const validUsername = process.env.ADMIN_USERNAME;
  const validPassword = process.env.ADMIN_PASSWORD;

  if (!validUsername || !validPassword) {
    console.error("Variables ADMIN_USERNAME o ADMIN_PASSWORD no configuradas");
    return NextResponse.json(
      {
        success: false,
        error: "Configuración de autenticación no encontrada",
      },
      { status: 500 },
    );
  }

  if (username === validUsername && password === validPassword) {
    // Crear token de sesión
    const authToken = CreateAuthToken(username, password);

    // Configurar cookie de sesión
    const cookieStore = await cookies();
    cookieStore.set("admin_session", authToken);

    return NextResponse.json({
      success: true,
      message: "Inicio de sesión exitoso",
    });
  } else {
    return NextResponse.json(
      {
        success: false,
        error: "Usuario o contraseña incorrectos",
      },
      { status: 401 },
    );
  }
}
