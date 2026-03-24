import ThemeToggle from "./theme/theme-toggle";

export default function Footer() {
  return (
    <footer className="fixed bottom-3 right-3 sm:right-4 z-50">
      <div className="flex items-center gap-2 sm:gap-3 backdrop-blur-xl bg-white dark:bg-black rounded-md px-3 sm:px-4 py-2 shadow-sm border-2 border-black dark:border-white">
        <p className="text-xs text-black dark:text-white">
          Jason Yu
        </p>
        <ThemeToggle />
      </div>
    </footer>
  );
}
