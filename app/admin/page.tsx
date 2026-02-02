"use client";
import { useRouter } from "next/navigation";
import Button from "../components/Button";

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
    <div className="space-y-4">
      <Button onClick={() => router.push("/admin/view")}>Ver Mensajes</Button>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}
