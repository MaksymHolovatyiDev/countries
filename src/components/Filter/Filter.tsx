import CustomInput from './CustomInput';

export default function Filter() {
  return (
    <div className="mb-8 flex justify-between ">
      <CustomInput />
      <select className="">
        <option value={'Africa'}>Africa</option>
        <option value={'America'}>America</option>
        <option value={'Asia'}>Asia</option>
        <option value={'Europe'}>Europe</option>
        <option value={'Oceania'}>Oceania</option>
      </select>
    </div>
  );
}
