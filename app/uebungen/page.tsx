'use client';

import Card from '@/components/Card';
import { FaBook } from 'react-icons/fa';

const exercises = [
  {
    id: 1,
    title: 'Biologie Grundlagen',
    description: 'Übungen zu den fundamentalen biologischen Konzepten für die EMS',
    difficulty: 'Anfänger',
    questions: 45,
  },
  {
    id: 2,
    title: 'Chemie - Organische Chemie',
    description: 'Strukturen, Reaktionen und organische Synthesen',
    difficulty: 'Mittel',
    questions: 62,
  },
  {
    id: 3,
    title: 'Physik - Mechanik',
    description: 'Kraft, Energie, Bewegung und verwandte Konzepte',
    difficulty: 'Mittel',
    questions: 38,
  },
  {
    id: 4,
    title: 'Medizinische Grundlagen',
    description: 'Anatomie, Physiologie und medizinische Begriffe',
    difficulty: 'Fortgeschritten',
    questions: 55,
  },
];

export default function Uebungen() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Übungsserien</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Kostenlose, von Studierenden erstellte Übungsaufgaben für alle EMS Untertests
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((exercise) => (
          <Card key={exercise.id}>
            <div className="flex items-start justify-between mb-4">
              <FaBook className="text-3xl text-blue-600 dark:text-blue-400" />
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                {exercise.difficulty}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">{exercise.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{exercise.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>{exercise.questions} Fragen</span>
              <button className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                Jetzt üben →
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
