'use client';

import Card from '@/components/Card';
import { FaCalendarAlt } from 'react-icons/fa';

const news = [
  {
    id: 1,
    title: 'Neue Übungsserien für Chemie verfügbar',
    date: '15. Mai 2026',
    category: 'Neue Inhalte',
    excerpt:
      'Wir haben eine umfangreiche neue Übungsserie zu organischer Chemie erstellt. Mit 120 neuen Fragen kannst du dich optimal vorbereiten.',
  },
  {
    id: 2,
    title: 'EMS Prüfung 2026 - Termine bekannt gegeben',
    date: '10. Mai 2026',
    category: 'Ankündigung',
    excerpt:
      'Die offizielle EMS Prüfung findet am 13. September 2026 statt. Melde dich jetzt für unsere Vorbereitungskurse an!',
  },
  {
    id: 3,
    title: 'Tutoren gesucht!',
    date: '5. Mai 2026',
    category: 'Community',
    excerpt:
      'Wir suchen motivierte Medizinstudenten, die andere bei der EMS Vorbereitung unterstützen möchten. Informationen findest du hier.',
  },
  {
    id: 4,
    title: 'Testsimulation am 1. Juni - Kostenlos teilnehmen',
    date: '1. Mai 2026',
    category: 'Events',
    excerpt:
      'Nimm an unserer kostenlosen vollständigen Testsimulation teil und bekomme direktes Feedback zu deinen Stärken und Schwächen.',
  },
];

export default function Neuigkeiten() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Neuigkeiten</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Aktuelle Updates und Ankündigungen von NCWiki
        </p>
      </div>

      <div className="space-y-6 max-w-2xl">
        {news.map((item) => (
          <Card key={item.id}>
            <div className="flex items-start justify-between mb-3">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                {item.category}
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <FaCalendarAlt className="w-4 h-4" />
                {item.date}
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{item.excerpt}</p>
            <button className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
              Mehr lesen →
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
