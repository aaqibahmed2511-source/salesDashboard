"use client";
import { motion } from "motion/react";
import { useState } from "react";
import Btn from "../atoms/Btn";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import Card from "../atoms/Card";
import { saleYears } from "../../data/sales";

export default function LineChartComponent() {
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
            Total Sales Line Chart
          </h1>
          <LineChart
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
            <Line dataKey="sales" stroke="#219438" strokeWidth={2} />
          </LineChart>
        </Card>
      )}
      {isSalesByType && (
        <Card>
          <h1 className="text-2xl font-bold text-shadow-gray text-shadow-lg text-base-content text-center">
            Sales By Type Line Chart
          </h1>
          <LineChart
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
            <Line dataKey="Furniture Sales" stroke="#219438" strokeWidth={2} />
            <Line dataKey="Office Sales" stroke="red" strokeWidth={2} />
            <Line dataKey="Tech Sales" stroke="blue" strokeWidth={2} />
          </LineChart>
        </Card>
      )}
    </>
  );
}
