import { Helmet } from "react-helmet-async";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { z } from 'zod'
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const SignUpForm = z.object({
  restaurantName: z.string().min(3, { message: "Nome do restaurante deve ter pelo menos 3 caracteres" }),
  managerName: z.string().min(3, { message: "Nome do gerente deve ter pelo menos 3 caracteres" }),
  phone: z.string().min(10, { message: "Telefone deve ter pelo menos 10 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
})

type SignUpForm = z.infer<typeof SignUpForm>

export function SignUp() {
  
  const navigate = useNavigate()

  const { register, handleSubmit, formState: {isSubmitting} } = useForm<SignUpForm>()
  
  async function handleSignUp(data: SignUpForm ) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      
      console.log(data)  
      
      toast.success("Restaurante cadastrado com sucesso!", {
      action: {
        label: "Login",
        onClick: () => navigate("/sign-in")
      },
    })
  } catch {
    toast.error("Credenciais inválidas.")
  }
}

  return (
    <>
        <Helmet title="Cadastro" />
        <div className="p-8">
            <Button asChild variant="ghost" className="absolute top-8 right-8">
              <Link to="/sign-in">Fazer login</Link>
            </Button>

          <div className="flex w-[350px] flex-col gap-2 text-center">
            <h1 className="text-2xl font-bold tracking-tight">
              Seja um parceiro e comece suas vendas!
            </h1>
            <p className="text-sm text-muted-foreground">
              
            </p>

            <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4" >
            <div className="space-y-2">
                <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
                <Input id="restaurantName" type="restaurantName" {...register("restaurantName")} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="managerName">Seu nome</Label>
                <Input id="managerName" type="managerName" {...register("managerName")} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Seu e-mail</Label>
                <Input id="email" type="email" {...register("email")} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Seu celular</Label>
                <Input id="phone" type="tel" {...register("phone")} />
              </div>

                <Button disabled={isSubmitting} type="submit" className="w-full">
                  Finalizar  cadastro
                </Button>

                <p className="px6 text-center text-sm leading-relaxed text-muted-foreground">
                  Ao clicar em "Finalizar cadastro", você concorda com os 
                  <a href="#" className="hover:underline">Termos de Serviço</a> e a 
                  <a href="#" className="hover:underline">Política de Privacidade</a>.
                </p>
            </form>

          </div>
        </div>
    </>
  )
}