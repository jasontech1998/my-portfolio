import ThemeToggle from "./theme/theme-toggle";

export default function Footer() {
  return (
    <footer className="mb-8 ml-4">
      <div className="flex justify-between items-center">
        <p className="text-neutral-600 dark:text-neutral-300">
          © {new Date().getFullYear()}
        </p>
        <ThemeToggle />
      </div>
    </footer>
  );
}
