import React from 'react';

export default function Abbout() {
  return (
    <div className="isolate bg-white dark:bg-gray-900 dark:text-gray-200 px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"><span className="text-pink-500">About Us</span></h2>
        <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Welcome to our bookstore! We are passionate about bringing you a curated selection of books from various genres and authors.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-xl sm:mt-20">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl"><span className="text-green-500">Our</span> Story</h3>
        <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Founded in 2024, our bookstore has grown from a small local shop to an online presence that reaches book lovers worldwide. Our mission is to foster a love of reading and provide a space for book enthusiasts to discover and explore new titles.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-xl sm:mt-20">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl"><span className="text-green-500">Our</span> Team</h3>
        <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Our team is made up of dedicated individuals who are passionate about books and committed to providing the best service to our customers. From our knowledgeable staff to our experienced curators, we strive to make your book buying experience exceptional.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-xl sm:mt-20">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl"><span className="text-green-500">Contact</span> Us</h3>
        <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Have questions or want to get in touch? Visit our <a href="/contact" className="font-semibold text-indigo-600 dark:text-indigo-400">Contact Us</a> page for more information.
        </p>
      </div>
    </div>
  );
}
