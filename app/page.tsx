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
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
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
              <span className="text-xs text-slate-400">2024-2025 Bahar</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        {/* Category Selection */}
        <div className="mb-6">
          <h2 className="text-sm font-medium text-slate-600 mb-3">Konu Seçimi</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategoryId === category.id
                    ? 'bg-slate-800 text-white'
                    : 'bg-white text-slate-600 border border-slate-300 hover:border-slate-400'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-2">
            {selectedCategory.description}
          </p>
        </div>

        {/* Question Navigation Pills */}
        <div className="mb-6">
          <h2 className="text-sm font-medium text-slate-600 mb-3">Soru Varyasyonları</h2>
          <div className="flex flex-wrap gap-2">
            {selectedCategory.questions.map((q, index) => (
              <button
                key={q.id}
                onClick={() => setCurrentQuestionIndex(index)}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                  currentQuestionIndex === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-slate-600 border border-slate-300 hover:border-blue-400'
                }`}
              >
                {index + 1}
              </button>
            ))}
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
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Toplam Kategori</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">{categories.length}</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Bu Kategoride</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">{selectedCategory.questions.length} Soru</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Mevcut Soru</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">{currentQuestionIndex + 1} / {selectedCategory.questions.length}</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-4 text-center">
          <p className="text-sm text-slate-500">
            Ekonometrik Analiz II • Ders Materyalleri
          </p>
        </div>
      </footer>
    </div>
  );
}
