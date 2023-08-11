'use client';

import BackSvg from '@assets/icons/BackSvg';
import { useRouter } from 'next/navigation';

export default function BackBtn() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="mb-12 w-28 h-10 shadow-lg rounded flex justify-center items-center hover:bg-gray-200 focus:bg-gray-20 transition dark:bg-dark-blue dark:hover:bg-black dark:focus:bg-black"
    >
      <BackSvg />
      Back
    </button>
  );
}
