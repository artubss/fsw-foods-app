"use client";

import { AuthForm } from "../_components/auth-form";

export default function RegisterPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold">Criar conta</h1>
          <p className="text-sm text-muted-foreground">
            Preencha os dados abaixo para criar sua conta
          </p>
        </div>

        <AuthForm mode="register" />

        <p className="text-center text-sm text-muted-foreground">
          Já tem uma conta?{" "}
          <a href="/login" className="text-primary hover:underline">
            Entre
          </a>
        </p>
      </div>
    </div>
  );
} 