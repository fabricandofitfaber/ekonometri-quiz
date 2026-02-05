'use client';

interface DifficultyFilterProps {
  selected: string[];
  onChange: (difficulties: string[]) => void;
}

export default function DifficultyFilter({ selected, onChange }: DifficultyFilterProps) {
  const difficulties = ['Kolay', 'Orta', 'Zor'];

  const toggleDifficulty = (difficulty: string) => {
    if (selected.includes(difficulty)) {
      onChange(selected.filter(d => d !== difficulty));
    } else {
      onChange([...selected, difficulty]);
    }
  };

  const getButtonStyle = (difficulty: string) => {
    const isSelected = selected.includes(difficulty);
    const baseStyle = "px-4 py-2 rounded-lg font-medium transition-all border-2";

    if (!isSelected) {
      return `${baseStyle} bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200`;
    }

    switch (difficulty) {
      case 'Kolay':
        return `${baseStyle} bg-green-500 text-white border-green-500`;
      case 'Orta':
        return `${baseStyle} bg-yellow-500 text-white border-yellow-500`;
      case 'Zor':
        return `${baseStyle} bg-red-500 text-white border-red-500`;
      default:
        return `${baseStyle} bg-blue-500 text-white border-blue-500`;
    }
  };

  return (
    <div className="flex flex-wrap gap-3 items-center">
      <span className="text-gray-700 font-medium">Zorluk:</span>
      {difficulties.map(difficulty => (
        <button
          key={difficulty}
          onClick={() => toggleDifficulty(difficulty)}
          className={getButtonStyle(difficulty)}
        >
          {difficulty}
        </button>
      ))}
      <button
        onClick={() => onChange(['Kolay', 'Orta', 'Zor'])}
        className="px-4 py-2 rounded-lg font-medium bg-blue-100 text-blue-700 hover:bg-blue-200 transition-all ml-2"
      >
        Tümü
      </button>
    </div>
  );
}
