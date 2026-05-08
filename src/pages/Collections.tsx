import React from 'react';
import { 
  Plus, 
  Search, 
  Bookmark, 
  Bolt, 
  Sparkles, 
  ChevronDown, 
  Star 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const ProblemCard = ({ title, category, progress, difficulty, views, image }: any) => (
  <div className="group bg-white border border-zinc-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col">
    <div className="relative h-48 overflow-hidden">
      <img 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        src={image} 
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 left-4 flex gap-2">
        <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-black text-primary uppercase tracking-wider shadow-sm">
          {category}
        </span>
      </div>
      <div className="absolute top-4 right-4">
        <button className="w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-primary transition-colors shadow-sm">
          <Bookmark className="w-4 h-4 fill-primary" />
        </button>
      </div>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold leading-tight text-zinc-900 flex items-center flex-wrap">
          {title}
        </h3>
        <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold border border-primary/20">
          {progress}%
        </span>
      </div>
      <p className="text-sm text-zinc-500 line-clamp-2 mb-6 font-medium">
        Calculation of L1 and L2 stability for a binary star system using the circular restricted three-body problem model.
      </p>
      <div className="mt-auto pt-6 flex items-center justify-between border-t border-zinc-50">
        <div className="flex items-center gap-3">
          <span className={cn(
            "text-xs font-bold px-2 py-0.5 rounded",
            difficulty === 'Hard' ? "text-error bg-error/10" : 
            difficulty === 'Medium' ? "text-amber-700 bg-amber-50" : 
            "text-primary bg-primary/10"
          )}>
            {difficulty}
          </span>
          <span className="text-xs font-medium text-zinc-400">{views} Views</span>
        </div>
        <button className="text-primary font-bold text-sm hover:underline">View</button>
      </div>
    </div>
  </div>
);

const RecommendedItem = ({ title, category, description }: any) => (
  <div className="group bg-zinc-50 border border-transparent rounded-2xl p-6 hover:bg-white hover:border-zinc-100 hover:shadow-xl transition-all duration-300">
    <div className="flex items-center justify-between mb-4">
      <span className="px-2 py-1 rounded bg-zinc-200 text-zinc-600 text-[10px] font-bold uppercase tracking-wider">{category}</span>
      <Sparkles className="w-5 h-5 text-zinc-300" />
    </div>
    <h3 className="text-base font-bold text-zinc-900 mb-2 leading-tight">{title}</h3>
    <p className="text-xs text-zinc-500 mb-6 font-medium line-clamp-2">{description}</p>
    <button className="w-full py-2.5 bg-primary text-on-primary rounded-xl text-xs font-bold shadow-md shadow-primary/10 hover:bg-primary-dim transition-colors flex items-center justify-center gap-2">
      <Bolt className="w-4 h-4" />
      Quick Generate Solution
    </button>
    <button className="w-full mt-3 text-primary text-xs font-bold hover:underline py-1">View Details</button>
  </div>
);

export const Collections = () => {
  return (
    <div className="pt-8 px-10 pb-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-black text-zinc-900 tracking-tighter mb-2">My Question Bank</h1>
          <p className="text-zinc-500 font-medium">Curated repository of academic challenges and solutions.</p>
        </div>
        <button className="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary-dim active:scale-95 transition-all">
          <Plus className="w-5 h-5" />
          Query New Problems
        </button>
      </div>

      <div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-6 mb-8 flex flex-wrap items-center gap-6">
        {[
          { label: 'Grade Level', options: ['All Grades', 'Graduate', 'Undergraduate', 'High School'] },
          { label: 'Difficulty', options: ['All Levels', 'Easy', 'Medium', 'Hard'] },
          { label: 'Math Type', options: ['All Math', 'Geometry', 'Calculus', 'Probability', 'Algebra', 'Topology'] }
        ].map((filter) => (
          <div key={filter.label} className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">{filter.label}</label>
            <div className="relative">
              <select className="appearance-none bg-white border-none rounded-lg text-sm font-semibold text-zinc-700 focus:ring-2 focus:ring-primary/20 py-2 pl-3 pr-10 min-w-[140px] shadow-sm cursor-pointer outline-none">
                {filter.options.map(opt => <option key={opt}>{opt}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-10">
        <span className="text-sm font-bold text-zinc-400 mr-2">Quick Filters:</span>
        <button className="px-5 py-1.5 rounded-full bg-primary text-on-primary text-xs font-bold transition-all shadow-md">All Problems</button>
        <button className="px-5 py-1.5 rounded-full bg-zinc-100 text-zinc-700 text-xs font-bold hover:bg-zinc-200 transition-all">Solved</button>
        <button className="px-5 py-1.5 rounded-full bg-zinc-100 text-zinc-700 text-xs font-bold hover:bg-zinc-200 transition-all">Unsolved</button>
        <button className="px-5 py-1.5 rounded-full bg-zinc-100 text-zinc-700 text-xs font-bold hover:bg-zinc-200 transition-all flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-error"></span>
          Hard Problem
        </button>
        <button className="px-5 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container text-xs font-bold hover:brightness-95 transition-all flex items-center gap-1.5">
          <Star className="w-4 h-4 fill-on-tertiary-container" />
          Key Focus
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <ProblemCard 
          title="Orbital Mechanics: Lagrangian Points Analysis" 
          category="Calculus" 
          progress={85} 
          difficulty="Hard" 
          views="2.4k" 
          image="https://picsum.photos/seed/orbital/800/600" 
        />
        <ProblemCard 
          title="Non-Euclidean Symmetry in Fractal Descents" 
          category="Geometry" 
          progress={42} 
          difficulty="Medium" 
          views="1.2k" 
          image="https://picsum.photos/seed/fractal/800/600" 
        />
        <ProblemCard 
          title="Algebraic Topology: Knot Theory Invariants" 
          category="Topology" 
          progress={0} 
          difficulty="Easy" 
          views="3.8k" 
          image="https://picsum.photos/seed/knot/800/600" 
        />
      </div>

      <div className="mt-20">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-black text-zinc-900 tracking-tight">Recommended for You</h2>
          <div className="h-px bg-zinc-100 flex-1"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <RecommendedItem 
            title="Stochastic Processes in Financial Modeling" 
            category="Probability" 
            description="Understanding Brownian motion and its application in Black-Scholes pricing models." 
          />
          <RecommendedItem 
            title="Galois Theory and Quintic Equations" 
            category="Algebra" 
            description="Proof of insolvability of general quintics by radicals using field extension groups." 
          />
          <RecommendedItem 
            title="Quantum Entanglement Operators" 
            category="Physics-Math" 
            description="Linear transformation analysis of Bell states in multi-dimensional Hilbert spaces." 
          />
        </div>
      </div>
    </div>
  );
};
