"use client";
import { useRouter } from "next/navigation";
import Button from "../components/Button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto mb-8">
        <Button onClick={() => router.back()}>Volver</Button>
      </div>
      <div>{children}</div>
    </div>
  );
}
