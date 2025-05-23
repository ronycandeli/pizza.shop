import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { ResponsiveContainer, LineChart, XAxis, YAxis, Line, CartesianGrid } from 'recharts'
import colors from "tailwindcss/colors";

const data = [
    {date: '10/12', revenue: 1200},
    {date: '11/12', revenue: 600},
    {date: '12/12', revenue: 900},
    {date: '13/12', revenue: 400},
    {date: '14/12', revenue: 2300},
    {date: '15/12', revenue: 800},
    {date: '16/12', revenue: 640}
]

export function RevenueChart() {
  return (
    <Card className="col-span-4">
        <CardHeader className="flex items-center justify-between space-y-0 pb-2">
            <div className="space-y-1">
                <CardTitle className="text-base font-medium">Receita no período</CardTitle>
                <CardDescription>Receita diária no período</CardDescription>
            </div>
        </CardHeader>
        <CardContent>
            <ResponsiveContainer width="100%" height={240}>
                <LineChart style={{fontSize: 12}} data={data}>
                    <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
                    <YAxis stroke="#888" axisLine={false} tickLine={false} width={80} 
                            tickFormatter={(value:number) => 
                                value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                            }
                    />
                    <CartesianGrid vertical={false} className="stroke-muted" /> 
                    <Line type="linear" strokeWidth={2} stroke={colors.violet['400']} dataKey='revenue' />
                </LineChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>
  );
}