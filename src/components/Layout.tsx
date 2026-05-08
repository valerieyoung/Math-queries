import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  PlusCircle, 
  LayoutGrid, 
  History, 
  Settings, 
  Search, 
  Bell, 
  UserCircle,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

const SidebarItem = ({ to, icon: Icon, label, active }: SidebarItemProps) => (
  <Link
    to={to}
    className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-semibold tracking-tight",
      active 
        ? "bg-primary text-on-primary shadow-lg shadow-primary/20" 
        : "text-on-surface-variant hover:bg-surface-container-low"
    )}
  >
    <Icon className={cn("w-5 h-5", active ? "text-on-primary" : "text-on-surface-variant")} />
    <span>{label}</span>
  </Link>
);

export const Sidebar = () => {
  const location = useLocation();
  
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 overflow-y-auto bg-surface-container-low border-r border-outline-variant/30 z-50">
      <div className="flex flex-col gap-6 p-6 h-full">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <Sparkles className="text-on-primary w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-black tracking-tighter text-on-surface leading-none">Radiant Intellect</h1>
            <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mt-1">Digital Curator</p>
          </div>
        </div>
        
        <nav className="flex flex-col gap-2 mt-4">
          <SidebarItem 
            to="/dashboard" 
            icon={PlusCircle} 
            label="New Inquiry" 
            active={location.pathname === '/dashboard'} 
          />
          <SidebarItem 
            to="/collections" 
            icon={LayoutGrid} 
            label="Collections" 
            active={location.pathname === '/collections'} 
          />
          <SidebarItem 
            to="/history" 
            icon={History} 
            label="Study History" 
            active={location.pathname === '/history'} 
          />
          <SidebarItem 
            to="/settings" 
            icon={Settings} 
            label="Settings" 
            active={location.pathname === '/settings'} 
          />
        </nav>
        
        <div className="mt-auto p-4 bg-white rounded-2xl flex items-center gap-3 border border-outline-variant/20 shadow-sm">
          <img 
            alt="User profile" 
            className="w-10 h-10 rounded-full bg-surface-container-lowest object-cover border border-outline-variant/20"
            src="https://picsum.photos/seed/scholar/100/100" 
            referrerPolicy="no-referrer"
          />
          <div className="overflow-hidden">
            <p className="text-sm font-bold truncate">Academic User</p>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Premium Researcher</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export const TopNav = () => {
  return (
    <header className="fixed top-0 right-0 left-64 h-20 z-40 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10">
      <div className="flex items-center justify-between px-8 w-full h-full">
        <div className="flex items-center gap-8">
          <span className="text-xl font-black text-on-surface tracking-tight">Scholarly Intelligence</span>
          <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2.5 rounded-xl shadow-sm w-96 group focus-within:ring-2 focus-within:ring-primary/20 transition-all border border-outline-variant/30">
            <Search className="w-4 h-4 text-on-surface-variant mr-2 group-focus-within:text-primary" />
            <input 
              className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-on-surface-variant/60 outline-none font-medium" 
              placeholder="Explore concepts, problems, or collections..." 
              type="text"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-surface-container-high transition-colors relative">
            <Bell className="w-5 h-5 text-on-surface-variant" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-surface"></span>
          </button>
          <div className="h-8 w-[1px] bg-outline-variant/20 mx-1"></div>
          <button className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-surface-container-high transition-colors">
            <UserCircle className="w-6 h-6 text-on-surface-variant" />
          </button>
        </div>
      </div>
    </header>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-surface">
      <Sidebar />
      <TopNav />
      <main className="ml-64 pt-20 min-h-screen">
        {children}
      </main>
    </div>
  );
};
