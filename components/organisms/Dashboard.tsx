import Card from "../atoms/Card";
import Switcher from "../organisms/Switcher";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <header className="w-12/12 h-1/6 text-center font-bold text-3xl text-base-content text-shadow-black text-shadow-lg flex flex-col items-center justify-center bg-base-300 border-b-3 border-b-neutral rounded-b-md">
        Dashboard
      </header>
      <main className="w-12/12 h-5/6 flex flex-col items-center justify-start gap-5 mt-5">
        <Switcher />
      </main>
    </div>
  );
}
