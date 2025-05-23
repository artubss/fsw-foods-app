"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner";

interface AuthFormProps {
  mode: "login" | "register";
}

export function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;

    if (mode === "register") {
      try {
        const response = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });

        if (!response.ok) {
          throw new Error("Erro ao criar conta");
        }

        toast.success("Conta criada com sucesso!");
        router.push("/login");
      } catch (error) {
        toast.error("Erro ao criar conta");
      } finally {
        setIsLoading(false);
      }
    } else {
      try {
        const result = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });

        if (result?.error) {
          toast.error("Email ou senha inválidos");
          return;
        }

        router.push("/");
        router.refresh();
      } catch (error) {
        toast.error("Erro ao fazer login");
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {mode === "register" && (
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            disabled={isLoading}
          />
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          disabled={isLoading}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Senha</Label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          disabled={isLoading}
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? "Carregando..." : mode === "login" ? "Entrar" : "Cadastrar"}
      </Button>
    </form>
  );
} 