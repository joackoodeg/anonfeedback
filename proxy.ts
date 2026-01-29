import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { CreateAuthToken } from "./lib/utils";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const authToken = request.cookies.get("admin_session")?.value;

  const validToken = CreateAuthToken(
    process.env.ADMIN_USERNAME || "",
    process.env.ADMIN_PASSWORD || "",
  );

  if (!authToken) {
    // Redirigir al login si no está autenticado
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (authToken !== validToken) {
    // Token inválido, redirigir al login
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Usuario autenticado, permitir acceso
  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
