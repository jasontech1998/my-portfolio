export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <main className="pt-4 pb-24 pl-4">
            {children}
        </main>
    );
}