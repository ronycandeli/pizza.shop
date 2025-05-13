import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function OrderDetails() {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Pedido: 1328sjdfk</DialogTitle>
                <DialogDescription>
                    Detalhes do pedido
                </DialogDescription>
            </DialogHeader>


        <div className="space-y-6">
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell className="text-muted-foreground">Status</TableCell>
                        <TableCell className="flex justify-end">
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-slate-400" />
                                <span className="font-medium text-muted-foreground">Pendente</span>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="text-muted-foreground">Cliente</TableCell>
                        <TableCell className="flex justify-end">
                            <div className="flex items-center gap-2">
                                <span className="font-medium text-muted-foreground">Rony Candeli</span>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="text-muted-foreground">Telefone</TableCell>
                        <TableCell className="flex justify-end">
                            <div className="flex items-center gap-2">
                                <span className="font-medium text-muted-foreground">(23) 35434-3490</span>
                            </div>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="text-muted-foreground">Email</TableCell>
                        <TableCell className="flex justify-end">
                            <div className="flex items-center gap-2">
                                <span className="font-medium text-muted-foreground">roncandeli@gmail.com</span>
                            </div>
                        </TableCell>
                    </TableRow>

                    
                    <TableRow>
                        <TableCell className="text-muted-foreground">Realizado há</TableCell>
                        <TableCell className="flex justify-end">
                            <div className="flex items-center gap-2">
                                <span className="font-medium text-muted-foreground">há 3 minutos</span>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-muted-foreground">Produto</TableHead>
                        <TableHead className="text-right text-muted-foreground">Qtd.</TableHead>
                        <TableHead className="text-right text-muted-foreground">Preço</TableHead>
                        <TableHead className="text-right text-muted-foreground">Subtotal</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">Pizza Pepperoni Família</TableCell>
                        <TableCell className="text-right">1</TableCell>
                        <TableCell className="text-right">R$ 149,90</TableCell>
                        <TableCell className="text-right">R$ 149,90</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="font-medium">Pizza Mussarela Família</TableCell>
                        <TableCell className="text-right">2</TableCell>
                        <TableCell className="text-right">R$ 49,90</TableCell>
                        <TableCell className="text-right">R$ 99,80</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className="font-medium">Pizza Mussarela Família</TableCell>
                        <TableCell className="text-right">1</TableCell>
                        <TableCell className="text-right">R$ 29,90</TableCell>
                        <TableCell className="text-right">R$ 29,90</TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total do pedido</TableCell>
                        <TableCell className="text-right font-medium">278,70</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
        </DialogContent>
    )
}