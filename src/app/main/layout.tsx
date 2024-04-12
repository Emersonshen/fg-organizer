import Link from "next/link";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            <header className="bg-gray-light text-gray-dark">
                <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8">
                    <div className="hidden lg:flex lg:flex-0 ">
                        <Link
                            href="/main/new-game"
                            className="text-sm font-semibold leading-6 text-gray-900 px-4"
                        >
                            Add New Game
                        </Link>
                    </div>
                </nav>
            </header>
            {children}
        </section>
    );
}
