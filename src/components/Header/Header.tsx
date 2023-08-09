import ThemeBtn from '@components/ThemeBtn/ThemeBtn';

export default function Header() {
  return (
    <header className="bg-white px-20 py-4 shadow flex justify-between items-center">
      <h1 className="text-xl font-extrabold">Where in the world?</h1>
      <ThemeBtn />
    </header>
  );
}
