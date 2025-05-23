"use client";

import { AuthForm } from "../_components/auth-form";
import { Button } from "../_components/ui/button";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold">Bem-vindo de volta!</h1>
          <p className="text-sm text-muted-foreground">
            Entre com suas credenciais para acessar sua conta
          </p>
        </div>

        <AuthForm mode="login" />

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Ou continue com
            </span>
          </div>
        </div>

        <Button
          variant="outline"
          type="button"
          className="w-full"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          Google
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Não tem uma conta?{" "}
          <a href="/register" className="text-primary hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
} 