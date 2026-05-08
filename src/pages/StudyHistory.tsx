import React from 'react';
import { 
  Plus, 
  PlayCircle, 
  CheckCircle2, 
  RotateCcw, 
  Filter, 
  Search, 
  ChevronDown 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const HistoryCard = ({ title, category, progress, image, completed }: any) => (
  <article className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col border border-outline-variant/10">
    <div className="relative aspect-video overflow-hidden">
      <img 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        src={image} 
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-primary">
        {category}
      </div>
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-snug mb-4">
        {title}
      </h3>
      <div className="mt-auto space-y-4">
        {completed ? (
          <div className="flex items-center space-x-2 text-primary font-semibold text-sm">
            <CheckCircle2 className="w-4 h-4" />
            <span>Completed</span>
          </div>
        ) : (
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium text-on-surface-variant">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        )}
        <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dim active:scale-[0.98] transition-all flex items-center justify-center space-x-2">
          {completed ? <RotateCcw className="w-5 h-5" /> : <PlayCircle className="w-5 h-5 fill-white/20" />}
          <span>{completed ? 'Review Video' : 'View Video'}</span>
        </button>
      </div>
    </div>
  </article>
);

export const StudyHistory = () => {
  return (
    <div className="pt-8 px-10 pb-12 max-w-7xl mx-auto">
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-extrabold text-on-surface tracking-tight mb-3">Study History</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
              A curated library of your generated math solutions and logic derivations. Access your personalized lecture path and review complex formulas.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <select className="appearance-none bg-surface-container-high border-none rounded-lg pl-4 pr-10 py-2.5 text-sm font-semibold text-on-surface outline-none cursor-pointer focus:ring-2 focus:ring-primary/20">
                <option>All Topics</option>
                <option>Calculus</option>
                <option>Geometry</option>
                <option>Trigonometry</option>
                <option>Statistics</option>
                <option>Algebra</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" />
            </div>
            <button className="bg-surface-container-highest p-2.5 rounded-lg hover:bg-primary-container transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* Generate New Lesson Card */}
        <article className="group bg-surface-container-low border-2 border-dashed border-outline-variant/30 rounded-lg flex items-center justify-center min-h-[400px] hover:border-primary/40 transition-colors cursor-pointer">
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-surface-container-highest rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <Plus className="w-8 h-8" />
            </div>
            <h3 className="text-on-surface font-bold text-lg">Generate New Lesson</h3>
            <p className="text-on-surface-variant text-sm mt-2">Enter a formula to start a new inquiry</p>
          </div>
        </article>

        <HistoryCard 
          title="Lagrangian Points Stability Analysis" 
          category="Calculus" 
          progress={85} 
          image="https://picsum.photos/seed/calculus/800/600" 
        />
        <HistoryCard 
          title="Eigenvalues and Matrix Decomposition" 
          category="Algebra" 
          progress={42} 
          image="https://picsum.photos/seed/algebra/800/600" 
        />
        <HistoryCard 
          title="Non-Euclidean Surface Topology" 
          category="Geometry" 
          progress={10} 
          image="https://picsum.photos/seed/geometry/800/600" 
        />
        <HistoryCard 
          title="Fourier Series and Wave Decomposition" 
          category="Trigonometry" 
          completed 
          image="https://picsum.photos/seed/trig/800/600" 
        />
        <HistoryCard 
          title="Bayesian Inference in Social Models" 
          category="Statistics" 
          progress={25} 
          image="https://picsum.photos/seed/stats/800/600" 
        />
      </div>
    </div>
  );
};
