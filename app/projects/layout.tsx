export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <main className="pt-8 pb-24 px-1 sm:pl-4 sm:pr-0">
            {children}
        </main>
    );
}