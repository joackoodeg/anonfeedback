"use client";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  const logout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });

      const data = await response.json();

      if (response.ok && data.success) {
        router.push("/new");
        router.refresh();
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <>
      <h1>hola</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
}
