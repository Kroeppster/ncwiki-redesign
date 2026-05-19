'use client';

import Card from '@/components/Card';
import { FaFlask, FaCalculus, FaBook, FaBrain } from 'react-icons/fa';

const subtests = [
  {
    id: 1,
    title: 'Chemie',
    icon: FaFlask,
    description: 'Organische und anorganische Chemie, Reaktionen und Struktur',
    topics: ['Periodensystem', 'Bindungen', 'Reaktionen', 'Säuren & Basen'],
  },
  {
    id: 2,
    title: 'Physik',
    icon: FaCalculus,
    description: 'Mechanik, Wellen, Elektrizität und verwandte Konzepte',
    topics: ['Mechanik', 'Energie', 'Wellen', 'Elektromagnetismus'],
  },
  {
    id: 3,
    title: 'Biologie',
    icon: FaBook,
    description: 'Zellbiologie, Genetik, Ökologie und Anatomie',
    topics: ['Zellbiologie', 'Genetik', 'Evolution', 'Ökologie'],
  },
  {
    id: 4,
    title: 'Verbales Denken',
    icon: FaBrain,
    description: 'Textverständnis, Analogien und logisches Denken',
    topics: ['Textverständnis', 'Synonyme', 'Analogien', 'Logik'],
  },
];

export default function Untertests() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">EMS Untertests</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Detaillierte Informationen zu jedem Untertest der EMS Prüfung
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subtests.map((subtest) => {
          const IconComponent = subtest.icon;
          return (
            <Card key={subtest.id}>
              <div className="flex items-center gap-4 mb-4">
                <IconComponent className="text-4xl text-blue-600 dark:text-blue-400" />
                <h3 className="text-2xl font-bold">{subtest.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{subtest.description}</p>
              <div>
                <h4 className="font-semibold mb-2">Themen:</h4>
                <div className="flex flex-wrap gap-2">
                  {subtest.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
