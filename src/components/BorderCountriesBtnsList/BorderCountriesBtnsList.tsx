import Link from 'next/link';

export default function BorderCountriesBtnsList({ data }: any) {
  return (
    <ul className="grid gtc gap-8 items-center content">
      {data.map((el: any) => (
        <li key={el.name.official}>
          <Link
            href={`/${el.name.official}`}
            className="h-12 shadow-lg rounded flex flex-wrap justify-center items-center hover:bg-gray-200 focus:bg-gray-20 transition dark:bg-dark-blue dark:hover:bg-black dark:focus:bg-black"
          >
            <span className="text-center">{el.name.common}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
