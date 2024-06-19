export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <main className="py-32 pl-4">
            {children}
        </main>
    );
}