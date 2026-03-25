import ThemeToggle from "./theme/theme-toggle";

export default function Footer() {
  return (
    <>
      {/* Mobile: floating theme toggle top-right */}
      <div className="sm:hidden fixed top-3 right-3 z-50">
        <ThemeToggle />
      </div>

      {/* Desktop: footer pill bottom-right */}
      <footer className="hidden sm:block fixed bottom-3 right-4 z-50">
        <div className="flex items-center gap-3 backdrop-blur-xl bg-white dark:bg-black rounded-md px-4 py-2 shadow-sm border-2 border-black dark:border-white">
          <p className="text-xs text-black dark:text-white">Jason Yu</p>
          <ThemeToggle />
        </div>
      </footer>
    </>
  );
}
