'use client';

import { useRouter } from 'next/navigation';

export default function BackBtn() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="mb-12 w-28 h-10 shadow-lg rounded flex justify-center items-center hover:bg-gray-200 focus:bg-gray-20 transition dark:bg-dark-blue dark:hover:bg-black dark:focus:bg-black"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 mr-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
        />
      </svg>
      Back
    </button>
  );
}
