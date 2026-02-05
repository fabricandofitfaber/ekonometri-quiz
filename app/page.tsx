'use client';

import { useState } from 'react';
import { categories } from '@/data/questions';
import QuestionCard from '@/components/QuestionCard';

export default function Home() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(categories[0].id);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const selectedCategory = categories.find(c => c.id === selectedCategoryId)!;
  const currentQuestion = selectedCategory.questions[currentQuestionIndex];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < selectedCategory.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative">
      {/* Ekonometri temalı arka plan deseni */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="absolute top-10 left-10 text-8xl font-mono text-slate-900">β₀</div>
        <div className="absolute top-32 right-20 text-6xl font-mono text-slate-900">Σ</div>
        <div className="absolute top-1/4 left-1/4 text-7xl font-mono text-slate-900">R²</div>
        <div className="absolute top-1/3 right-1/3 text-5xl font-mono text-slate-900">μ</div>
        <div className="absolute bottom-1/4 left-16 text-6xl font-mono text-slate-900">σ²</div>
        <div className="absolute bottom-32 right-1/4 text-8xl font-mono text-slate-900">β₁</div>
        <div className="absolute top-1/2 left-1/2 text-9xl font-mono text-slate-900">ε</div>
        <div className="absolute bottom-48 left-1/3 text-5xl font-mono text-slate-900">t</div>
        <div className="absolute top-48 left-1/2 text-6xl font-mono text-slate-900">H₀</div>
        <div className="absolute bottom-20 right-10 text-7xl font-mono text-slate-900">n</div>
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-slate-800">
                Ekonometrik Analiz II
              </h1>
              <p className="text-sm text-slate-500">
                İnteraktif Soru Bankası
              </p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                Bahar Dönemi
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6 relative z-[1]">
        {/* Category Selection */}
        <div className="mb-6">
          <h2 className="text-sm font-medium text-slate-600 mb-3">Konu Seçimi</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategoryId === category.id
                    ? 'bg-slate-800 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400 hover:shadow-sm'
                }`}
              >
                <span className="mr-2 opacity-50">{index + 1}.</span>
                {category.name}
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            {selectedCategory.description}
          </p>
        </div>

        {/* Question Navigation Pills */}
        <div className="mb-6">
          <h2 className="text-sm font-medium text-slate-600 mb-3">Soru Varyasyonları</h2>
          <div className="flex flex-wrap gap-2">
            {selectedCategory.questions.map((q, index) => {
              const difficultyColor =
                q.difficulty === 'Kolay' ? 'bg-emerald-500' :
                q.difficulty === 'Orta' ? 'bg-amber-500' : 'bg-rose-500';

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={`relative w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                    currentQuestionIndex === index
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400 hover:shadow-sm'
                  }`}
                >
                  {index + 1}
                  <span className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full ${difficultyColor}`}></span>
                </button>
              );
            })}
          </div>
          <div className="flex gap-4 mt-3 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Kolay
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span> Orta
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span> Zor
            </span>
          </div>
        </div>

        {/* Current Question */}
        <QuestionCard
          key={currentQuestion.id}
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={selectedCategory.questions.length}
          onNext={handleNextQuestion}
          onPrevious={handlePreviousQuestion}
        />

        {/* Quick Stats */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-slate-200">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Toplam Kategori</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">{categories.length}</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-slate-200">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Bu Kategoride</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">{selectedCategory.questions.length} Soru</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-slate-200">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Mevcut Soru</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">{currentQuestionIndex + 1} / {selectedCategory.questions.length}</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 text-center">
          <p className="text-sm text-slate-500">
            Ekonometrik Analiz II • Ders Materyalleri
          </p>
        </div>
      </footer>
    </div>
  );
}
