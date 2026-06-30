interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--text-primary)]">
      {children}
    </main>
  );
}