import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Building, ChevronDown, LogOut } from "lucide-react";


export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex select-none items-center gap-2">
            Pizza Shop
            <ChevronDown className="h-4 w-4" />
        </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">

            <DropdownMenuLabel className="flex flex-col">
                <span className="text-sm font-medium">Nome do usuário</span>
                <span className="text-xs text-muted-foreground">
                    ronycandeli@gmail.com
                </span>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
                <Building className="mr-2 h-4 w-4" />
                <span>Perfil da loja</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sair</span>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}