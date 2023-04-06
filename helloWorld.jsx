import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer,Label} from 'recharts';

const data = [
  { name: 'Group A', value: 36},
  { name: 'Group B', value: 64 },
];
const COLORS = ['#0088FE', '#00C49F'];

export default function HelloWorld() {
  return (
    <PieChart width={800} height={400}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          startAngle={90}
          endAngle={-270}
        > 
        <Label position="center">Hi </Label>
       
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          </Pie>

      
      </PieChart>

  )
}
