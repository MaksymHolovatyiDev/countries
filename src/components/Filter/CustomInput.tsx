'use client';

export default function CustomInput() {
  const findCountry = (evt: any) => {
    console.log(evt.target.value);
  };

  return (
    <label className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 absolute top-2/4 left-4 tr-y stroke-dark-gray"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <input
        type="text"
        placeholder="Search for a country..."
        className="h-12 w-my pl-16 text-dark-gray rounded outline-none"
        onChange={findCountry}
      />
    </label>
  );
}
