import { CountryListItemType } from '@Types';
import Link from 'next/link';

export default function CountryListItem({ data }: CountryListItemType) {
  return (
    <li key={data.name.official}>
      <Link href={`/${data.name.official}`}>
        <img
          width={400}
          height={200}
          src={data.flags.png}
          alt={data.flags.alt}
        />
        <p>{data.name.common}</p>
        <p>{data.population}</p>
        <p>{data.region}</p>
        <p>{data.capital}</p>
      </Link>
    </li>
  );
}
