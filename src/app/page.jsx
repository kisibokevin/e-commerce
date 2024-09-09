import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
        <h1 className="text-light-accentPrimary dark:text-dark-accentPrimary">
          Welcome to My E-Commerce Site
        </h1>
        <button className="bg-light-accentSecondary dark:bg-dark-accentSecondary text-white p-2 rounded">
          Shop Now
        </button>
      </div>
    </div>
  );
}
