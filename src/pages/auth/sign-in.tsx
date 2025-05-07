import { Helmet } from "react-helmet-async";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { z } from 'zod'
import { toast } from "sonner";

const SignInForm = z.object({
  email: z.string().email({ message: "Email inválido" }),
})

type SignInForm = z.infer<typeof SignInForm>

export function SignIn() {
  
  const { register, handleSubmit, formState: {isSubmitting} } = useForm<SignInForm>()
  
  async function handleSignIn(data: SignInForm ) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success("Enviamos um link de autenticação para seu e-mail!", {
      action: {
        label: "Reenviar",
        onClick: () =>  handleSignIn(data)
      },
    })
  } catch {
    toast.error("Credenciais inválidas.")
  }
}

  return (
    <>
        <Helmet title="Login" />
        <div className="p-8">
          <div className="flex w-[350px] flex-col gap-2 text-center">
            <h1 className="text-2xl font-bold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>

            <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4" >
              <div className="space-y-2">
                <Label htmlFor="email">Seu e-mail</Label>
                <Input id="email" type="email" {...register("email")} />
              </div>

                <Button disabled={isSubmitting} type="submit" className="w-full">Acessar painel</Button>
            </form>

          </div>
        </div>
    </>
  )
}