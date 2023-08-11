import ThemeBtn from '@components/ThemeBtn/ThemeBtn';

export default function Header() {
  return (
    <header className="bg-white lg:px-10 px-20 py-4 shadow flex justify-between items-center dark:bg-dark-blue">
      <h1 className="lg:text-base text-xl font-extrabold">
        Where in the world?
      </h1>
      <ThemeBtn />
    </header>
  );
}
