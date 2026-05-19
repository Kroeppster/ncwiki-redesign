'use client';

import { useState } from 'react';
import Card from '@/components/Card';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Danke für deine Nachricht! Wir werden dich bald kontaktieren.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Hast du Fragen oder möchtest du uns kontaktieren? Wir freuen uns auf deine
          Nachricht!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <Card>
          <FaEnvelope className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Email</h3>
          <p className="text-gray-600 dark:text-gray-400">info@ncwiki.ch</p>
        </Card>
        <Card>
          <FaPhone className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Telefon</h3>
          <p className="text-gray-600 dark:text-gray-400">+41 44 XXXXXXX</p>
        </Card>
        <Card>
          <FaMapMarkerAlt className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">Standort</h3>
          <p className="text-gray-600 dark:text-gray-400">Zürich, Schweiz</p>
        </Card>
      </div>

      <div className="max-w-2xl">
        <Card>
          <h2 className="text-2xl font-bold mb-6">Nachricht senden</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Betreff</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Nachricht</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
            >
              Nachricht senden
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
}
