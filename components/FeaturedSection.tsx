import Link from 'next/link';
import Card from './Card';
import { FaAward, FaUsers, FaGraduationCap } from 'react-icons/fa';

const features = [
  {
    icon: FaAward,
    title: 'Hochwertig',
    description: 'Von Medizinstudenten erstellt und überprüft',
  },
  {
    icon: FaUsers,
    title: 'Kostenlos',
    description: 'Ohne versteckte Gebühren oder Abos',
  },
  {
    icon: FaGraduationCap,
    title: 'Umfassend',
    description: 'Alles was du für die EMS brauchst',
  },
];

export default function FeaturedSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg my-12">
      <h2 className="text-3xl font-bold mb-12 text-center">Warum NCWiki?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {features.map((feature, idx) => {
          const IconComponent = feature.icon;
          return (
            <Card key={idx}>
              <IconComponent className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </Card>
          );
        })}
      </div>
      <div className="text-center">
        <Link
          href="/uebungen"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
        >
          Starten →
        </Link>
      </div>
    </section>
  );
}
