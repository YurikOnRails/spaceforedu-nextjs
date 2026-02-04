"use client";

import React, { useEffect, useState } from 'react';
import { X, Calculator, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { createPortal } from 'react-dom';
import LeadForm from './LeadForm';

interface ChancesCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChancesCalculatorModal = ({ isOpen, onClose }: ChancesCalculatorModalProps) => {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(1);
  const [calculating, setCalculating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showLeadForm, setShowLeadForm] = useState(false);

  const [formData, setFormData] = useState({
    gpa: 4.0,
    language: 'B1',
    budget: '3-10k'
  });

  const [result, setResult] = useState<{ score: number; level: string; color: string; text: string } | null>(null);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset state on open
      setStep(1);
      setCalculating(false);
      setProgress(0);
      setShowLeadForm(false);
      setResult(null);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const calculateChance = () => {
    setStep(2);
    setCalculating(true);

    // Simulate calculation with progress bar
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 5;
      if (currentProgress > 100) {
        clearInterval(interval);
        finishCalculation();
      } else {
        setProgress(currentProgress);
      }
    }, 50);
  };

  const finishCalculation = () => {
    // Logic
    let score = 0;
    
    // GPA (Max 40)
    if (formData.gpa >= 4.5) score += 40;
    else if (formData.gpa >= 4.0) score += 30;
    else score += 15;

    // Language (Max 40)
    const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const langIndex = levels.indexOf(formData.language);
    if (langIndex >= 4) score += 40; // C1, C2
    else if (langIndex >= 2) score += 25; // B1, B2
    else score += 10; // A1, A2

    // Budget (Max 20)
    if (formData.budget === '>10k') score += 20;
    else if (formData.budget === '3-10k') score += 15;
    else score += 10;

    let level = 'Low';
    let color = 'text-red-400';
    let text = 'Потребуется серьезная подготовка';

    if (score >= 80) {
      level = 'High';
      color = 'text-green-400';
      text = 'Отличные шансы на поступление!';
    } else if (score >= 50) {
      level = 'Medium';
      color = 'text-yellow-400';
      text = 'Хорошие шансы, но нужно подтянуть документы';
    }

    setResult({ score, level, color, text });
    setCalculating(false);
    setStep(3);
  };

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-[#0f172a] border border-white/10 rounded-[30px] shadow-2xl overflow-hidden animate-fadeIn my-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-2">
            <Calculator className="text-cyan-400" size={20} />
            <h3 className="text-xl font-bold text-white">Калькулятор шансов</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          
          {/* Step 1: Inputs */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-2">
                <label className="text-gray-400 text-sm ml-1">Средний балл (GPA)</label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" 
                    min="3.0" 
                    max="5.0" 
                    step="0.1"
                    value={formData.gpa}
                    onChange={(e) => setFormData({...formData, gpa: parseFloat(e.target.value)})}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                  <span className="text-2xl font-bold text-white min-w-[3ch]">{formData.gpa.toFixed(1)}</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-gray-400 text-sm ml-1">Уровень языка</label>
                <div className="grid grid-cols-3 gap-2">
                  {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setFormData({...formData, language: lvl})}
                      className={`p-3 rounded-xl border transition-all ${
                        formData.language === lvl 
                          ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' 
                          : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-gray-400 text-sm ml-1">Бюджет в год</label>
                <div className="grid grid-cols-3 gap-2">
                  {['<3k', '3-10k', '>10k'].map((budget) => (
                    <button
                      key={budget}
                      onClick={() => setFormData({...formData, budget})}
                      className={`p-3 rounded-xl border transition-all text-sm ${
                        formData.budget === budget 
                          ? 'bg-purple-500/20 border-purple-500 text-purple-400' 
                          : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      {budget === '<3k' ? 'до 3.000€' : budget === '3-10k' ? '3-10.000€' : 'от 10.000€'}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={calculateChance}
                className="w-full bg-cyan-500 py-4 rounded-xl text-white font-bold hover:bg-cyan-600 transition-all shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2 mt-4"
              >
                Рассчитать шансы
                <ArrowRight size={20} />
              </button>
            </div>
          )}

          {/* Step 2: Calculation */}
          {step === 2 && (
            <div className="py-10 text-center animate-fadeIn">
              <h3 className="text-xl font-bold text-white mb-6">Анализируем данные...</h3>
              <div className="w-full bg-white/10 rounded-full h-4 mb-4 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 h-full transition-all duration-75 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-gray-400 text-sm">Проверяем требования университетов</p>
            </div>
          )}

          {/* Step 3: Result */}
          {step === 3 && !showLeadForm && result && (
            <div className="text-center animate-fadeIn">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 border-4 border-white/10 mb-6 relative">
                 <span className={`text-3xl font-black ${result.color}`}>{result.score}%</span>
                 <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                   <circle 
                     className="text-white/10 stroke-current" 
                     strokeWidth="4" 
                     cx="50" 
                     cy="50" 
                     r="46" 
                     fill="transparent" 
                   />
                   <circle 
                     className={`${result.color} stroke-current transition-all duration-1000 ease-out`} 
                     strokeWidth="4" 
                     strokeDasharray={290}
                     strokeDashoffset={290 - (290 * result.score) / 100}
                     strokeLinecap="round"
                     cx="50" 
                     cy="50" 
                     r="46" 
                     fill="transparent" 
                   />
                 </svg>
              </div>

              <h3 className={`text-2xl font-bold mb-2 ${result.color}`}>
                {result.level === 'High' ? 'Высокие шансы!' : result.level === 'Medium' ? 'Средние шансы' : 'Низкие шансы'}
              </h3>
              <p className="text-gray-300 mb-8 max-w-xs mx-auto">
                {result.text}
              </p>

              <div className="bg-white/5 border border-white/10 p-4 rounded-xl mb-6 text-left">
                <h4 className="text-white font-bold mb-2 text-sm">Что делать дальше?</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>Получить пошаговый план поступления</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>Узнать список подходящих вузов</span>
                  </li>
                </ul>
              </div>

              <button 
                onClick={() => setShowLeadForm(true)}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 py-4 rounded-xl text-white font-bold hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Получить стратегию
                <ArrowRight size={20} />
              </button>
            </div>
          )}

          {/* Step 3: Lead Form */}
          {step === 3 && showLeadForm && (
            <div className="animate-fadeIn">
              <h3 className="text-xl font-bold text-white mb-2">Получить отчет</h3>
              <p className="text-gray-400 text-sm mb-6">
                Мы отправим вам подробный разбор ваших шансов и стратегию поступления.
              </p>
              <LeadForm onSuccess={onClose} />
            </div>
          )}

        </div>
      </div>
    </div>,
    document.body
  );
};

export default ChancesCalculatorModal;
