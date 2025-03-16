
import { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
import { useIsMobile } from '@/hooks/use-mobile';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col bg-brand-darkest">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className={`flex-1 p-4 md:p-6 ${isMobile ? 'pb-24' : ''}`}>
          {children}
        </main>
      </div>
      <MobileNav />
    </div>
  );
};

export default AppLayout;
