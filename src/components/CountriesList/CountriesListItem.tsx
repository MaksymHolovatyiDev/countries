import { CountryListItemType } from '@Types';
import Link from 'next/link';

export default function CountryListItem({ data }: CountryListItemType) {
  return (
    <Link href={`/${data.name.official}`} className="flex-col interact-shadow">
      <img
        width="100%"
        className="rounded-t"
        src={data.flags.png}
        alt={data.flags.alt}
      />
      <div className="flex-col space-y-2 bg-white rounded-b px-7 pt-7 pb-12 shadow container-wrap">
        <p className="mb-4 text-lg font-extrabold">{data.name.common}</p>
        <p>
          <span className="font-semibold">Population:</span> {data.population}
        </p>
        <p>
          <span className="font-semibold">Region:</span> {data.region}
        </p>
        <p>
          <span className="font-semibold">Capital:</span> {data.capital}
        </p>
      </div>
    </Link>
  );
}
