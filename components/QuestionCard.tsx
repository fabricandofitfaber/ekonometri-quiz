'use client';

import { useState } from 'react';
import { Question } from '@/data/questions';
import MathDisplay, { renderMathInText } from './MathDisplay';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
}

export default function QuestionCard({ question, questionNumber }: QuestionCardProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showSolutions, setShowSolutions] = useState<Record<string, boolean>>({});

  const handleAnswerChange = (partId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [partId]: value }));
  };

  const toggleSolution = (partId: string) => {
    setShowSolutions(prev => ({ ...prev, [partId]: !prev[partId] }));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Kolay':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'Orta':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Zor':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          Soru {questionNumber}: {question.title}
        </h2>
        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(question.difficulty)}`}>
          {question.difficulty}
        </span>
      </div>

      {/* Context */}
      <div className="mb-4 text-gray-700 leading-relaxed">
        {renderMathInText(question.context)}
      </div>

      {/* Model */}
      <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-200">
        <MathDisplay math={question.model} block />
      </div>

      {/* Parts */}
      {question.parts.map((part, index) => (
        <div key={part.id} className="mb-6 last:mb-0">
          <div className="flex items-start gap-2 mb-3">
            <span className="font-bold text-blue-600">{part.id})</span>
            <div className="flex-1 text-gray-800">
              {renderMathInText(part.question)}
            </div>
          </div>

          {/* Answer Input */}
          <div className="ml-6">
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-gray-700"
              rows={3}
              placeholder="Cevabınızı buraya yazınız..."
              value={answers[part.id] || ''}
              onChange={(e) => handleAnswerChange(part.id, e.target.value)}
            />

            {/* Solution Toggle Button */}
            <button
              onClick={() => toggleSolution(part.id)}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              {showSolutions[part.id] ? 'Çözümü Gizle' : 'Çözümü Göster'}
            </button>

            {/* Solution */}
            {showSolutions[part.id] && (
              <div className="mt-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">Çözüm:</h4>
                <div className="text-green-900">
                  {renderMathInText(part.solution)}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
