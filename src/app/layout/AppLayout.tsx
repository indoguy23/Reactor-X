import type { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <main className="h-screen w-screen overflow-hidden">
      {children}
    </main>
  );
};