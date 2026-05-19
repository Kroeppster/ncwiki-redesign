export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition p-6 border border-gray-200 dark:border-gray-700">
      {children}
    </div>
  );
}
