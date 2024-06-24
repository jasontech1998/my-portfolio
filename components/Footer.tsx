import ThemeToggle from "./theme/theme-toggle";

export default function Footer() {
  return (
    <footer className="mb-8 ml-4">
      <div className="flex justify-between items-center">
        <p className="text-xs text-neutral-400 dark:text-neutral-300">
          © Jason Yu {new Date().getFullYear()} | All Rights Reserved
        </p>
        <ThemeToggle />
      </div>
    </footer>
  );
}
