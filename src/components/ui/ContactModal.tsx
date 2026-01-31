'use client';

import { useState, type FormEvent } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('[ContactModal] Form submitted:', formData);
    // TODO: Integrate with email service (e.g., FormSpree, SendGrid, etc.)
    alert('Message sent! (This is a placeholder — email integration pending)');
    setFormData({ name: '', email: '', message: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="bg-card border-3 border-ink rounded-lg shadow-brutal-lg max-w-md w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-ink text-2xl font-bold"
          aria-label="Close"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-ink mb-6">Get in Touch</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-ink mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 border-3 border-ink rounded-md shadow-brutal-sm focus:shadow-brutal focus:-translate-x-0.5 focus:-translate-y-0.5 transition-all outline-none bg-card text-ink"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-ink mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 border-3 border-ink rounded-md shadow-brutal-sm focus:shadow-brutal focus:-translate-x-0.5 focus:-translate-y-0.5 transition-all outline-none bg-card text-ink"
              placeholder="you@example.com"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-ink mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 border-3 border-ink rounded-md shadow-brutal-sm focus:shadow-brutal focus:-translate-x-0.5 focus:-translate-y-0.5 transition-all outline-none bg-card text-ink resize-none"
              placeholder="Tell us what's on your mind..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-primary text-ink font-bold text-lg py-3 border-3 border-ink rounded-md shadow-brutal hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-brutal-active active:translate-x-0.5 active:translate-y-0.5 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
