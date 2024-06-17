export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section className="py-32 pl-4">
            {children}
        </section>
    );
}