import Link from "next/link";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <nav>
        <Link href="/new-game">Add New Game</Link>
        <Link href="/game-list">View Game List</Link>
      </nav>
      {children}
    </section>
  );
}
