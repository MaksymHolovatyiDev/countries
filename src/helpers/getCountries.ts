export async function getAllCountries() {
  const res = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,capital,population,region,capital,flags',
    { cache: 'force-cache' }
  );

  if (!res.ok) throw new Error('Failed to fetch data');

  const data = await res.json();

  return data;
}

export async function getCountry(id: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${id}?fullText=true`,
    { cache: 'force-cache' }
  );

  if (!res.ok) throw new Error('Failed to fetch data');

  const data = await res.json();

  return data;
}
