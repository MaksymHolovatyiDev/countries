import CustomInput from './CustomInput';

export default function Filter() {
  return (
    <div className="mb-8 flex lg:flex-col justify-between ">
      <CustomInput />
      <select className="lg:w-2/4">
        <option value={'Africa'}>Africa</option>
        <option value={'America'}>America</option>
        <option value={'Asia'}>Asia</option>
        <option value={'Europe'}>Europe</option>
        <option value={'Oceania'}>Oceania</option>
      </select>
    </div>
  );
}
