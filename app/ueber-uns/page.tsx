'use client';

import Card from '@/components/Card';
import { FaUsers, FaHeart, FaGlobeAmericas, FaLightbulb } from 'react-icons/fa';

const values = [
  {
    icon: FaHeart,
    title: 'Leidenschaft',
    description: 'Wir brennen dafür, Medizinstudierenden zu helfen und sie zu unterstützen.',
  },
  {
    icon: FaUsers,
    title: 'Gemeinschaft',
    description: 'Gemeinsam erreichen wir mehr. NCWiki lebt von der Zusammenarbeit.',
  },
  {
    icon: FaGlobeAmericas,
    title: 'Zugänglichkeit',
    description: 'Hochwertiges Lernmaterial sollte für alle kostenlos verfügbar sein.',
  },
  {
    icon: FaLightbulb,
    title: 'Innovation',
    description: 'Wir verbessern ständig unsere Materialien und Lehrmethoden.',
  },
];

export default function UeberUns() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Über NCWiki</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
          NCWiki ist ein studentisches Projekt, das kostenlose, hochwertige Ressourcen
          für die EMS Prüfungsvorbereitung bereitstellt.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Unsere Werte</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, idx) => {
            const IconComponent = value.icon;
            return (
              <Card key={idx}>
                <IconComponent className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Mission</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Wir streben danach, gleiche Chancen für alle Studierenden zu schaffen, die
          sich für ein Medizinstudium vorbereiten. Durch kostenlose, von Studierenden
          erstellte Materialien wollen wir zeigen, dass hochwertige Lernressourcen nicht
          teuer sein müssen.
        </p>
      </div>
    </div>
  );
}
