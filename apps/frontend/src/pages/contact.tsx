import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Send
          </button>
        </div>
      </form>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Social Links</h2>
        <ul className="space-y-2">
          <li>
            <a href="https://twitter.com/yourusername" className="text-primary hover:underline">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/yourusername" className="text-primary hover:underline">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/yourusername" className="text-primary hover:underline">
              GitHub
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Map</h2>
        <div className="w-full h-64 bg-gray-200">
          {/* Map integration placeholder */}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
