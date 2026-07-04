"use client";

import Card from "../atoms/Card";
import { useState } from "react";
import Btn from "../atoms/Btn";
import BarChartComponent from "../molecules/BarChart";
import LineChartComponent from "../molecules/LineChart";
import { motion, AnimatePresence } from "motion/react";

export default function Switcher() {
  const [isBarChart, setIsBarChart] = useState(false);
  const [isLineChart, setIsLineChart] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-start">
        <div className="flex flex-row items-start justify-center gap-5">
          <Btn
            text="Bar Chart"
            type="button"
            onClick={() => {
              setIsBarChart(!isBarChart);
              setIsLineChart(false);
            }}
          />
          <Btn
            text="Line Chart"
            type="button"
            onClick={() => {
              setIsLineChart(!isLineChart);
              setIsBarChart(false);
            }}
          />
          <Btn
            text="Home"
            type="button"
            onClick={() => {
              setIsBarChart(false);
              setIsLineChart(false);
            }}
          />
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isBarChart && (
          <motion.div
            className="w-full h-full flex flex-col items-center justify-start"
            exit={{ opacity: 0, scale: 0, y: -50 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            key="barChart"
          >
            <BarChartComponent key="Chart" />
          </motion.div>
        )}
        {isLineChart && (
          <motion.div
            className="w-full h-full flex flex-col items-center justify-start"
            exit={{ opacity: 0, scale: 0, y: -50 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            key="lineChart"
          >
            <LineChartComponent key="Chart" />
          </motion.div>
        )}
        {!isBarChart && !isLineChart && (
          <motion.div
            className="w-full h-full flex flex-col items-center justify-start"
            exit={{ opacity: 0, scale: 0, y: -50 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            key="home"
          >
            <Card>
              <h1 className="text-2xl font-bold text-shadow-gray text-shadow-lg text-base-content text-center">
                Welcome to the Dashboard!
              </h1>
              <p className="text-lg font-medium text-base-content text-center">
                Please select a chart to view.
              </p>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
