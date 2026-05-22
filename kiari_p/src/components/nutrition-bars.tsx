"use client";

import React from "react";
import { motion } from "framer-motion";

export interface NutritionBarItem {
  minititulo: string; // Nombre del dato, ej. PROT, CARB, FAT, CAL
  subtitulo: string;  // Valor del dato, ej. 21.7g, 0g, 17.7g, 252
  fill: number;       // Nivel de llenado del 0 al 5
}

export interface NutritionBarsProps {
  title: string; // Título centrado arriba
  items: NutritionBarItem[]; // Lista de datos adaptable
  impactHighlights?: {
    value: string;
    label: string;
  }[]; // Indicador de impacto técnico
}

export default function NutritionBars({
  title,
  items,
  impactHighlights = [
    { value: "85%", label: "Selenio" },
    { value: "67%", label: "Niacina" },
  ],
}: NutritionBarsProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto py-12 px-6 bg-default-50/30 dark:bg-default-100/5 backdrop-blur-md rounded-3xl border border-default-200/50 shadow-xl my-8">
      {/* Título de la sección */}
      <h3 className="text-center font-julius tracking-widest text-2xl md:text-3xl text-foreground font-semibold mb-10 relative">
        {title}
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-orange-500 rounded-full"></span>
      </h3>

      {/* Grid de las barras nutricionales */}
      <div className="flex flex-wrap items-end justify-center gap-8 md:gap-12 w-full mb-12">
        {items.map((item, idx) => {
          // Asegurar que el fill esté entre 0 y 5
          const safeFill = Math.min(Math.max(item.fill, 0), 5);
          // Calcular el porcentaje para la altura
          const fillPercentage = (safeFill / 5) * 100;

          return (
            <div key={idx} className="flex flex-col items-center group">
              {/* Contenedor tipo cápsula vertical */}
              <div className="w-14 h-48 sm:w-16 sm:h-56 rounded-full bg-default-100 dark:bg-default-900 border border-default-200/60 dark:border-default-800 shadow-inner flex flex-col justify-end overflow-hidden relative group-hover:shadow-md transition-all duration-300">
                
                {/* Punto naranja característico en la parte superior */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-orange-500 z-10 shadow-[0_0_8px_rgba(249,115,22,0.6)] animate-pulse" />

                {/* Capa de relleno (animada con framer-motion al montar) */}
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${fillPercentage}%` }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: idx * 0.1 }}
                  className="w-full bg-gradient-to-t from-amber-600 via-orange-500 to-orange-400 rounded-b-full relative"
                  style={{ originY: 1 }}
                >
                  {/* Destello de luz en el relleno */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full h-full" />
                </motion.div>
              </div>

              {/* Subtítulo (el dato principal, ej. 21.7g) */}
              <span className="mt-4 font-mono font-bold text-xl sm:text-2xl text-foreground tracking-tight group-hover:scale-105 transition-transform duration-200">
                {item.subtitulo}
              </span>

              {/* Minitítulo (el nombre del dato, ej. PROT) */}
              <span className="text-[10px] sm:text-xs font-saira uppercase font-bold tracking-widest text-default-400 mt-1">
                {item.minititulo}
              </span>
            </div>
          );
        })}
      </div>

      {/* Indicador de impacto técnico (Selenio y Niacina) */}
      {impactHighlights && impactHighlights.length > 0 && (
        <div className="w-full max-w-lg border-t border-default-200/50 pt-8 flex flex-col sm:flex-row items-center justify-around gap-6 text-center">
          {impactHighlights.map((highlight, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-4 bg-default-100/50 dark:bg-default-900/30 px-5 py-3 rounded-2xl border border-default-200/30 backdrop-blur-sm hover:border-orange-500/30 transition-colors duration-300"
            >
              {/* Círculo con el porcentaje */}
              <div className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center bg-orange-500/5">
                <span className="font-mono font-bold text-sm text-orange-500">{highlight.value}</span>
              </div>
              
              {/* Etiqueta */}
              <div className="flex flex-col text-left">
                <span className="text-xs text-default-400 uppercase tracking-widest font-semibold">Impacto Nutricional</span>
                <span className="text-base text-foreground font-semibold font-saira">{highlight.label}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
