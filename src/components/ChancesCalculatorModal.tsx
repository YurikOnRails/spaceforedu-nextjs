"use client";

import React, { useEffect, useState } from 'react';
import { X, Calculator, CheckCircle, ArrowRight, AlertTriangle, GraduationCap, School, BookOpen, AlertCircle } from 'lucide-react';
import { createPortal } from 'react-dom';
import LeadForm from './LeadForm';

interface ChancesCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ProgramType = 'bachelor' | 'master';
type LanguageLevel = 'A1-A2' | 'B1' | 'B2' | 'C1+';
type BudgetType = 'low' | 'medium' | 'high';

interface CalculatorData {
  program: ProgramType;
  gpa: number;
  language: LanguageLevel;
  budget: BudgetType;
}

interface StrategyResult {
  title: string;
  description: string;
  color: string; // text-color class
  badge: string;
  warnings: string[];
}

const ChancesCalculatorModal = ({ isOpen, onClose }: ChancesCalculatorModalProps) => {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(1);
  const [showLeadForm, setShowLeadForm] = useState(false);

  const [formData, setFormData] = useState<CalculatorData>({
    program: 'bachelor',
    gpa: 4.0,
    language: 'A1-A2',
    budget: 'medium'
  });

  const [result, setResult] = useState<StrategyResult | null>(null);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStep(1);
      setShowLeadForm(false);
      setResult(null);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const calculateStrategy = () => {
    let strategy: StrategyResult = {
      title: "Базовая стратегия",
      description: "Требуется детальный анализ.",
      color: "text-white",
      badge: "Стандарт",
      warnings: []
    };

    const isLowBudget = formData.budget === 'low'; // < 3000
    const isHighBudget = formData.budget === 'high'; // > 10000
    const isLowLang = formData.language === 'A1-A2' || formData.language === 'B1';
    
    // Logic Tree
    if (formData.language === 'C1+') {
      strategy = {
        title: "Прямое поступление (Directo)",
        description: "Ваш уровень языка позволяет поступать сразу на первый курс без потери времени.",
        color: "text-emerald-400",
        badge: "Оптимально",
        warnings: []
      };
      if (isLowBudget) strategy.warnings.push("Для гос. вузов важен высокий средний балл аттестата.");
    } 
    else if (formData.program === 'bachelor' && isLowLang) {
      strategy = {
        title: "Pathway: Языковой год + EBAU",
        description: "Идеальный маршрут для гос. вузов. Год изучения языка и подготовки к экзаменам в Испании.",
        color: "text-amber-400",
        badge: "Популярно",
        warnings: ["Прямое поступление невозможно с текущим языком."]
      };
    }
    else if (formData.program === 'master' && isLowLang) {
       strategy = {
        title: "Магистратура на английском / Курсы",
        description: "Рекомендуем программы на английском языке или интенсивные курсы перед стартом.",
        color: "text-blue-400",
        badge: "Варианты есть",
        warnings: ["Выбор программ на английском ограничен в гос. вузах."]
      };
    }
    else if (isHighBudget) {
      strategy = {
        title: "Частные университеты (Private)",
        description: "Гибкое поступление без сложных экзаменов. Возможно обучение на английском.",
        color: "text-purple-400",
        badge: "Комфорт",
        warnings: []
      };
    }
    else {
       strategy = {
        title: "Классическая омологация",
        description: "Подача документов через UNEDasiss с подтверждением аттестата.",
        color: "text-cyan-400",
        badge: "Стандарт",
        warnings: []
      };
    }

    if (formData.gpa < 3.5) {
        strategy.warnings.push("Низкий средний балл усложняет поступление в топовые гос. вузы.");
    }

    setResult(strategy);
    setStep(2);
  };

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="absolute inset-0 bg-[#020617]/90 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-[#0f172a] border border-white/10 rounded-[30px] shadow-2xl overflow-hidden animate-fadeIn my-auto">
        <div className="flex justify-between items-center p-6 border-b border-white/5">
          <h3 className="text-lg font-bold text-white opacity-80">
            {step === 1 ? 'Диагностика шансов' : showLeadForm ? 'Заявка' : 'Ваша стратегия'}
          </h3>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {showLeadForm ? (
            // Step 3: Lead Form
            <div className="animate-fadeIn">
              <div className="flex items-center gap-3 mb-6">
                <button onClick={() => setShowLeadForm(false)} className="text-gray-500 hover:text-white transition-colors">
                  <ArrowRight className="rotate-180" size={20} />
                </button>
                <h3 className="text-xl font-bold text-white">Получить план поступления</h3>
              </div>
              <LeadForm onSuccess={onClose} />
            </div>
          ) : step === 1 ? (
            // Step 1: Inputs
            <div className="space-y-8 animate-fadeIn">
              {/* Program Type */}
              <div className="space-y-3">
                <label className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">Куда поступаем?</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setFormData({...formData, program: 'bachelor'})}
                    className={`p-4 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all ${
                      formData.program === 'bachelor' 
                        ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.15)]' 
                        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    <School size={24} />
                    <span className="font-bold text-sm">Бакалавриат</span>
                  </button>
                  <button
                    onClick={() => setFormData({...formData, program: 'master'})}
                    className={`p-4 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all ${
                      formData.program === 'master' 
                        ? 'bg-purple-500/10 border-purple-500 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.15)]' 
                        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    <GraduationCap size={24} />
                    <span className="font-bold text-sm">Магистратура</span>
                  </button>
                </div>
              </div>

              {/* GPA Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">Средний балл (Аттестат/Диплом)</label>
                  <span className={`text-xl font-bold ${formData.gpa >= 4.5 ? 'text-green-400' : formData.gpa >= 3.5 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {formData.gpa.toFixed(1)}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="3.0" 
                  max="5.0" 
                  step="0.1"
                  value={formData.gpa}
                  onChange={(e) => setFormData({...formData, gpa: parseFloat(e.target.value)})}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-medium uppercase tracking-wide">
                  <span>Тройки</span>
                  <span>Хорошист</span>
                  <span>Отличник</span>
                </div>
              </div>

              {/* Language */}
              <div className="space-y-3">
                <label className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">Уровень испанского</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'A1-A2', label: 'Новичок', desc: 'A1-A2' },
                    { id: 'B1', label: 'База', desc: 'B1' },
                    { id: 'B2', label: 'Уверенный', desc: 'B2' },
                    { id: 'C1+', label: 'Свободный', desc: 'C1+' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setFormData({...formData, language: item.id as LanguageLevel})}
                      className={`p-3 rounded-xl border transition-all text-left ${
                        formData.language === item.id 
                          ? 'bg-white/10 border-white/40 text-white' 
                          : 'bg-white/5 border-white/5 text-gray-500 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-xs font-bold mb-0.5">{item.desc}</div>
                      <div className="text-[10px] opacity-70 truncate">{item.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div className="space-y-3">
                <label className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">Бюджет в год (Обучение)</label>
                <div className="space-y-2">
                  {[
                    { id: 'low', label: 'до 3.000€', sub: 'Государственные вузы' },
                    { id: 'medium', label: '3.000 - 10.000€', sub: 'Бизнес-школы / Смешанные' },
                    { id: 'high', label: 'от 10.000€', sub: 'Частные университеты' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setFormData({...formData, budget: item.id as BudgetType})}
                      className={`w-full p-4 rounded-xl border flex items-center justify-between transition-all group ${
                        formData.budget === item.id 
                          ? 'bg-indigo-500/10 border-indigo-500/50' 
                          : 'bg-white/5 border-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-left">
                        <div className={`font-bold text-sm ${formData.budget === item.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>{item.label}</div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-wide font-medium">{item.sub}</div>
                      </div>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${formData.budget === item.id ? 'border-indigo-500 bg-indigo-500 text-white' : 'border-gray-600'}`}>
                        {formData.budget === item.id && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={calculateStrategy}
                className="w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-gray-200 transition-all shadow-lg flex items-center justify-center gap-2 mt-4"
              >
                <BookOpen size={20} />
                Показать мою стратегию
              </button>
            </div>
          ) : (
            // Step 2: Result
            <div className="animate-fadeIn">
              {result && (
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-wider text-gray-300 mb-6">
                    <AlertCircle size={14} />
                    Результат диагностики
                  </div>

                  <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${result.color}`}>
                    {result.title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {result.description}
                  </p>

                  {result.warnings.length > 0 && (
                    <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl text-left mb-8">
                      <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-2">
                        <AlertTriangle size={16} />
                        Важно учесть:
                      </div>
                      <ul className="space-y-1">
                        {result.warnings.map((w, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                            <span className="mt-1.5 w-1 h-1 bg-amber-500 rounded-full shrink-0"></span>
                            {w}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="space-y-3">
                    <button 
                      onClick={() => setShowLeadForm(true)}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-4 rounded-xl text-white font-bold hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                    >
                      Получить смету и план
                      <ArrowRight size={20} />
                    </button>
                    <button 
                      onClick={() => setStep(1)}
                      className="text-gray-500 hover:text-white text-sm transition-colors py-2"
                    >
                      Изменить параметры
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ChancesCalculatorModal;
