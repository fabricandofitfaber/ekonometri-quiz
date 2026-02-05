'use client';

import { useState } from 'react';
import { questions } from '@/data/questions';
import QuestionCard from '@/components/QuestionCard';
import DifficultyFilter from '@/components/DifficultyFilter';

export default function Home() {
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>(['Kolay', 'Orta', 'Zor']);

  const filteredQuestions = questions.filter(q =>
    selectedDifficulties.includes(q.difficulty)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Ekonometrik Analiz II
          </h1>
          <p className="text-gray-600">
            Hipotez Testi Soru Bankası
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Filter Section */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <DifficultyFilter
            selected={selectedDifficulties}
            onChange={setSelectedDifficulties}
          />
          <div className="mt-3 text-sm text-gray-500">
            Toplam {filteredQuestions.length} soru gösteriliyor
          </div>
        </div>

        {/* Questions */}
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((question, index) => (
            <QuestionCard
              key={question.id}
              question={question}
              questionNumber={index + 1}
            />
          ))
        ) : (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <p className="text-gray-500 text-lg">
              Seçilen filtrelere uygun soru bulunamadı.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-gray-600">
          <p>Ekonometrik Analiz II - Ders Materyalleri</p>
        </div>
      </footer>
    </div>
  );
}
