import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">NCWiki</h1>
        <p className="text-xl md:text-2xl mb-4 text-blue-100">
          Kostenlose Ressourcen für die EMS Prüfungsvorbereitung
        </p>
        <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
          Von Studierenden für Studierende. Hochwertige Übungsaufgaben, Testsimulationen
          und Tipps für deine Vorbereitung auf die Eignungsprüfung für das Medizinstudium.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/uebungen"
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-200"
          >
            Jetzt Üben →
          </Link>
          <Link
            href="/ueber-uns"
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition duration-200 border-2 border-white"
          >
            Mehr Erfahren
          </Link>
        </div>
      </div>
    </section>
  );
}
