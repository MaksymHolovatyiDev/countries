export async function getAllCountries() {
  const res = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags',
    { cache: 'force-cache' }
  );

  if (!res.ok) throw new Error('Failed to fetch data');

  const data = await res.json();

  return data;
}

export async function getCountry(id: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${id}?fullText=true&fields=name,nativeName,population,region,subregion,capital,flags,tld,currencies,languages,borders`,
    { cache: 'force-cache' }
  );

  if (!res.ok) throw new Error('Failed to fetch data');

  const data = await res.json();

  return data;
}

export async function getCountriesByCodes(id: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${id}&fields=name`
  );

  if (!res.ok) return [];

  const data = await res.json();

  return data;
}

export async function SearchRegionCountries(region: string) {
  if (!region) return getAllCountries();

  const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);

  if (!res.ok) throw new Error('Failed to fetch data');

  const data = await res.json();

  return data;
}
