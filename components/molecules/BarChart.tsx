"use client";
import {
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import Card from "../atoms/Card";
import Btn from "../atoms/Btn";
import { saleYears } from "../../data/sales";
import { useState } from "react";

export default function BarChartComponent() {
  const [isTotalSales, setIsTotalSales] = useState(true);
  const [isSalesByType, setIsSalesByType] = useState(false);

  return (
    <>
      <div className="flex flex-row items-start justify-center gap-5">
        <Btn
          text="Total Sales"
          type="button"
          onClick={() => {
            setIsTotalSales(true);
            setIsSalesByType(false);
          }}
        />
        <Btn
          text="Sales By Type"
          type="button"
          onClick={() => {
            setIsTotalSales(false);
            setIsSalesByType(true);
          }}
        />
      </div>
      {isTotalSales && (
        <Card>
          <h1 className="text-2xl font-bold text-shadow-gray text-shadow-lg text-base-content text-center">
            Total Sales Bar Chart
          </h1>
          <BarChart
            width={500}
            height={300}
            data={saleYears}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid
              stroke="gray"
              strokeWidth={1}
              strokeDasharray="3 3"
            />
            <Tooltip />
            <XAxis dataKey="year" />
            <YAxis dataKey="sales" />
            <Bar dataKey="sales" fill="#219438" radius={[10, 10, 0, 0]} />
          </BarChart>
        </Card>
      )}
      {isSalesByType && (
        <Card>
          <h1 className="text-2xl font-bold text-shadow-gray text-shadow-lg text-base-content text-center">
            Sales By Type Bar Chart
          </h1>
          <BarChart
            width={500}
            height={300}
            data={saleYears}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid
              stroke="gray"
              strokeWidth={1}
              strokeDasharray="3 3"
            />
            <Tooltip />
            <XAxis dataKey="year" />
            <YAxis dataKey="sales" />
            <Bar
              dataKey="Furniture Sales"
              fill="#219438"
              radius={[10, 10, 0, 0]}
            />
            <Bar dataKey="Office Sales" fill="red" radius={[10, 10, 0, 0]} />
            <Bar dataKey="Tech Sales" fill="blue" radius={[10, 10, 0, 0]} />
          </BarChart>
        </Card>
      )}
    </>
  );
}
