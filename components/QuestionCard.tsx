'use client';

import { useState } from 'react';
import { Question } from '@/data/questions';
import MathDisplay, { renderMathInText } from './MathDisplay';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onNext: () => void;
  onPrevious: () => void;
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onNext,
  onPrevious
}: QuestionCardProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showSolutions, setShowSolutions] = useState<Record<string, boolean>>({});
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [checkedAnswers, setCheckedAnswers] = useState<Record<string, boolean>>({});

  const handleAnswerChange = (partId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [partId]: value }));
  };

  const handleOptionSelect = (partId: string, option: string) => {
    setSelectedOptions(prev => ({ ...prev, [partId]: option }));
    setCheckedAnswers(prev => ({ ...prev, [partId]: false }));
  };

  const checkAnswer = (partId: string, correctAnswer: string) => {
    setCheckedAnswers(prev => ({ ...prev, [partId]: true }));
  };

  const toggleSolution = (partId: string) => {
    setShowSolutions(prev => ({ ...prev, [partId]: !prev[partId] }));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Kolay':
        return 'bg-emerald-100 text-emerald-700 border-emerald-300';
      case 'Orta':
        return 'bg-amber-100 text-amber-700 border-amber-300';
      case 'Zor':
        return 'bg-rose-100 text-rose-700 border-rose-300';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-300';
    }
  };

  const isCorrect = (partId: string, correctAnswer: string) => {
    return selectedOptions[partId] === correctAnswer;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-800">
              {question.title}
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Varyasyon {questionNumber} / {totalQuestions}
            </p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(question.difficulty)}`}>
            {question.difficulty}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Context */}
        <div className="mb-5 text-slate-700 leading-relaxed text-sm">
          {renderMathInText(question.context)}
        </div>

        {/* Model */}
        <div className="bg-slate-50 rounded-lg p-4 mb-4 border border-slate-200">
          <MathDisplay math={question.model} block />
        </div>

        {/* Additional Info (standart hatalar, n, R²) */}
        {question.additionalInfo && (
          <div className="bg-slate-50 rounded-lg p-3 mb-6 border border-slate-200 text-center">
            <MathDisplay math={question.additionalInfo} block />
          </div>
        )}

        {/* Parts */}
        {question.parts.map((part) => (
          <div key={part.id} className="mb-6 last:mb-0 p-4 bg-slate-50 rounded-lg border border-slate-200">
            <div className="flex items-start gap-2 mb-3">
              <span className="font-semibold text-slate-600">{part.id})</span>
              <div className="flex-1 text-slate-800 text-sm">
                {renderMathInText(part.question)}
              </div>
            </div>

            {/* Answer Input based on type */}
            <div className="ml-5">
              {part.type === 'open-ended' ? (
                // Açık uçlu soru
                <textarea
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-slate-700 text-sm"
                  rows={3}
                  placeholder="Cevabınızı buraya yazınız..."
                  value={answers[part.id] || ''}
                  onChange={(e) => handleAnswerChange(part.id, e.target.value)}
                />
              ) : (
                // Çoktan seçmeli soru
                <div className="space-y-2">
                  {part.options?.map((option, index) => {
                    const isSelected = selectedOptions[part.id] === option;
                    const isChecked = checkedAnswers[part.id];
                    const correct = isChecked && option === part.correctAnswer;
                    const incorrect = isChecked && isSelected && option !== part.correctAnswer;

                    return (
                      <button
                        key={index}
                        onClick={() => handleOptionSelect(part.id, option)}
                        className={`w-full text-left p-3 rounded-lg border transition-all text-sm ${
                          correct
                            ? 'bg-emerald-50 border-emerald-400 text-emerald-800'
                            : incorrect
                            ? 'bg-rose-50 border-rose-400 text-rose-800'
                            : isSelected
                            ? 'bg-blue-50 border-blue-400 text-blue-800'
                            : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
                        }`}
                      >
                        <span className="font-medium mr-2">{String.fromCharCode(65 + index)}.</span>
                        {renderMathInText(option)}
                        {correct && <span className="float-right text-emerald-600">✓</span>}
                        {incorrect && <span className="float-right text-rose-600">✗</span>}
                      </button>
                    );
                  })}

                  {/* Kontrol Et butonu */}
                  {selectedOptions[part.id] && !checkedAnswers[part.id] && (
                    <button
                      onClick={() => checkAnswer(part.id, part.correctAnswer as string)}
                      className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      Kontrol Et
                    </button>
                  )}

                  {/* Sonuç mesajı */}
                  {checkedAnswers[part.id] && (
                    <div className={`mt-2 p-2 rounded-lg text-sm ${
                      isCorrect(part.id, part.correctAnswer as string)
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-rose-50 text-rose-700'
                    }`}>
                      {isCorrect(part.id, part.correctAnswer as string)
                        ? '✓ Doğru!'
                        : `✗ Yanlış. Doğru cevap: ${part.correctAnswer}`
                      }
                    </div>
                  )}
                </div>
              )}

              {/* Solution Toggle Button */}
              <button
                onClick={() => toggleSolution(part.id)}
                className="mt-3 px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium"
              >
                {showSolutions[part.id] ? 'Çözümü Gizle' : 'Çözümü Göster'}
              </button>

              {/* Solution */}
              {showSolutions[part.id] && (
                <div className="mt-3 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <h4 className="font-semibold text-emerald-800 mb-2 text-sm">Çözüm:</h4>
                  <div className="text-emerald-900 text-sm">
                    {renderMathInText(part.solution)}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-between">
        <button
          onClick={onPrevious}
          disabled={questionNumber === 1}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            questionNumber === 1
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
              : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
          }`}
        >
          ← Önceki
        </button>
        <button
          onClick={onNext}
          disabled={questionNumber === totalQuestions}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            questionNumber === totalQuestions
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Sonraki →
        </button>
      </div>
    </div>
  );
}
