import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 py-16 px-4">
      <h1 className="text-3xl font-bold mb-2">Documentation</h1>
      <p className="text-fd-muted-foreground mb-8">
        Choose a section to get started.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
        <Link
          href="/cli"
          className="flex flex-col gap-2 rounded-lg border bg-fd-card p-6 transition-colors hover:bg-fd-accent"
        >
          <h2 className="text-lg font-semibold">CLI Reference</h2>
          <p className="text-sm text-fd-muted-foreground">
            Command-line interface documentation.
          </p>
        </Link>
        <Link
          href="/templates"
          className="flex flex-col gap-2 rounded-lg border bg-fd-card p-6 transition-colors hover:bg-fd-accent"
        >
          <h2 className="text-lg font-semibold">Templates</h2>
          <p className="text-sm text-fd-muted-foreground">
            Templates reference documentation.
          </p>
        </Link>
      </div>
    </div>
  );
}
