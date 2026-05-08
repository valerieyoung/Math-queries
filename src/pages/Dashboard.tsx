import React from 'react';
import { 
  Upload, 
  Camera, 
  CloudUpload, 
  Search, 
  ChevronRight, 
  Compass, 
  Video, 
  Sparkles, 
  Eye, 
  BookOpen, 
  CheckCircle2, 
  Heart, 
  Timer, 
  Lightbulb,
  BarChart3
} from 'lucide-react';
import { cn } from '@/lib/utils';

const TaskCard = ({ title, status, progress, icon: Icon, statusColor, bgColor }: any) => (
  <div className="min-w-[280px] bg-white p-5 rounded-2xl snap-start border border-outline-variant/20 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div className={cn("p-2 rounded-lg", bgColor)}>
        <Icon className={cn("w-5 h-5", statusColor)} />
      </div>
      <span className={cn("text-[10px] font-bold px-2 py-1 rounded-full", statusColor, bgColor)}>
        {status}
      </span>
    </div>
    <p className="font-bold text-sm mb-1 truncate">{title}</p>
    <p className="text-xs text-on-surface-variant/60 mb-4">Rendering Visual Explanation...</p>
    <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
      <div 
        className={cn("h-full rounded-full transition-all duration-500", statusColor.replace('text-', 'bg-'))} 
        style={{ width: `${progress}%` }} 
      />
    </div>
  </div>
);

const RecommendedCard = ({ title, description, category, image, categoryColor }: any) => (
  <div className="break-inside-avoid bg-white rounded-2xl overflow-hidden border border-outline-variant/20 group shadow-sm hover:shadow-md transition-shadow mb-6">
    <div className="aspect-video bg-surface-container-low overflow-hidden relative">
      <img 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        src={image} 
        referrerPolicy="no-referrer"
      />
      <div className={cn("absolute top-2 right-2 text-on-primary text-[10px] px-2 py-1 rounded-lg font-bold", categoryColor)}>
        {category}
      </div>
    </div>
    <div className="p-5">
      <h4 className="font-bold text-base mb-2">{title}</h4>
      <p className="text-xs text-on-surface-variant leading-relaxed mb-4 line-clamp-2">{description}</p>
      <div className="flex flex-col gap-2">
        <button className="w-full py-2 bg-primary text-on-primary rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary-dim transition-colors">
          <Sparkles className="w-4 h-4" />
          Generate Solution
        </button>
        <button className="w-full py-2 bg-white text-primary border border-primary/20 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary-container transition-colors">
          <Eye className="w-4 h-4" />
          View Details
        </button>
      </div>
    </div>
  </div>
);

export const Dashboard = () => {
  return (
    <div className="px-8 py-10 flex gap-8">
      <div className="flex-1 flex flex-col gap-10">
        {/* Hero Upload Section */}
        <section className="relative bg-primary-container/30 rounded-3xl p-10 overflow-hidden border border-primary/10">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-4xl font-extrabold text-on-primary-fixed tracking-tight mb-3">Solve Instantaneously.</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                Upload your handwritten notes or complex problem sets to generate deep scholarly solutions.
              </p>
              <div className="flex gap-4 mt-8">
                <button className="px-6 py-3 bg-primary text-on-primary font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary-dim hover:scale-[1.02] transition-all">
                  <Upload className="w-5 h-5" />
                  Upload Problem
                </button>
                <button className="px-6 py-3 bg-white text-on-surface border border-outline-variant/30 font-semibold rounded-xl flex items-center gap-2 hover:bg-surface-container-low transition-colors shadow-sm">
                  <Camera className="w-5 h-5 text-primary" />
                  Take Photo
                </button>
              </div>
            </div>
            <div className="w-full md:w-72 aspect-square bg-white rounded-2xl border-4 border-dashed border-primary/20 flex flex-col items-center justify-center p-6 text-center group cursor-pointer hover:border-primary/50 transition-all">
              <CloudUpload className="w-12 h-12 text-primary/30 group-hover:text-primary transition-colors mb-4" />
              <p className="text-sm font-bold text-on-surface">Drag & Drop</p>
              <p className="text-xs text-on-surface-variant/60 mt-1 italic">PDF, PNG, HEIC</p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section>
          <div className="flex items-end justify-between mb-6">
            <div>
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Repository Access</span>
              <h3 className="text-2xl font-bold tracking-tight">Historical Exam Search</h3>
            </div>
            <a className="text-sm font-bold text-primary flex items-center gap-1 hover:underline" href="#">
              Advanced Filters
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="flex flex-col gap-6 bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase ml-2">Educational Level</label>
                <select className="w-full bg-white border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 font-medium outline-none">
                  <option>High School Grade 12</option>
                  <option>Undergraduate Year 1</option>
                  <option>Postgraduate Research</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase ml-2">Question Type</label>
                <select className="w-full bg-white border border-outline-variant/30 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 font-medium outline-none">
                  <option>Calculus & Proofs</option>
                  <option>Discrete Mathematics</option>
                  <option>Theoretical Physics</option>
                  <option>Linguistic Analysis</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3 items-center">
              <div className="relative flex-1 flex items-center bg-white border border-outline-variant/30 rounded-xl shadow-sm group focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                <Search className="absolute left-4 w-4 h-4 text-on-surface-variant group-focus-within:text-primary" />
                <input 
                  className="w-full pl-12 pr-4 py-3 bg-transparent border-none focus:ring-0 text-sm font-medium placeholder:text-on-surface-variant/50 outline-none" 
                  placeholder="Search historical exam papers by name, year, or topic..." 
                  type="text"
                />
              </div>
              <button className="w-full md:w-auto px-8 bg-primary text-on-primary font-bold py-3 rounded-xl hover:bg-primary-dim transition-colors flex items-center justify-center gap-2 shadow-sm whitespace-nowrap">
                <Compass className="w-5 h-5" />
                Query Database
              </button>
            </div>
          </div>
        </section>

        {/* Active Tasks */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-xl font-bold tracking-tight">Active Generation Tasks</h3>
            <span className="bg-primary-container text-primary text-[10px] px-2 py-0.5 rounded font-black uppercase">Live</span>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar snap-x">
            <TaskCard 
              title="Maxwell's Equations Derivation" 
              status="Progressing" 
              progress={84} 
              icon={Video} 
              statusColor="text-primary" 
              bgColor="bg-primary-container" 
            />
            <TaskCard 
              title="Polymerase Chain Reaction Steps" 
              status="In Progress" 
              progress={32} 
              icon={Video} 
              statusColor="text-secondary" 
              bgColor="bg-secondary-container" 
            />
            <TaskCard 
              title="Economic Game Theory Intro" 
              status="Preparing" 
              progress={5} 
              icon={Video} 
              statusColor="text-on-surface-variant" 
              bgColor="bg-surface-container-low" 
            />
          </div>
        </section>

        {/* Recommended Feed */}
        <section>
          <h3 className="text-2xl font-bold tracking-tight mb-8">Recommended for You</h3>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            <RecommendedCard 
              title="Partial Derivative Challenge" 
              description="Determine the rate of change for the multi-variable function relative to its vector path." 
              category="CALCULUS" 
              image="https://picsum.photos/seed/math/800/600" 
              categoryColor="bg-primary/90" 
            />
            <RecommendedCard 
              title="Inflation Equilibrium Theory" 
              description="Analyze the relationship between money supply and GDP growth in developing nations." 
              category="MACROECON" 
              image="https://picsum.photos/seed/economy/800/600" 
              categoryColor="bg-secondary" 
            />
            <RecommendedCard 
              title="Benzene Ring Hybridization" 
              description="Explain the orbital overlap and resonance stability in aromatic compounds." 
              category="ORGANIC CHEM" 
              image="https://picsum.photos/seed/chemistry/800/600" 
              categoryColor="bg-primary/90" 
            />
          </div>
        </section>
      </div>

      {/* Right Sidebar */}
      <aside className="w-80 flex flex-col gap-6">
        <div className="bg-white rounded-3xl p-6 border border-outline-variant/20 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-lg">Curator Progress</h3>
            <BarChart3 className="w-5 h-5 text-primary" />
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-container rounded-2xl flex items-center justify-center text-primary shadow-sm">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Questions Studied</p>
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-black">1,248</span>
                  <span className="text-[10px] text-primary font-bold">+12% this week</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-container rounded-2xl flex items-center justify-center text-primary shadow-sm">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Solved Problems</p>
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-black">892</span>
                  <span className="text-[10px] text-primary font-bold">71% accuracy</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-container rounded-2xl flex items-center justify-center text-primary shadow-sm">
                <Heart className="w-6 h-6 fill-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Saved Insights</p>
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-black">56</span>
                  <span className="text-[10px] text-on-surface-variant/60">Across 4 collections</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-container rounded-2xl flex items-center justify-center text-primary shadow-sm">
                <Timer className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Study Time</p>
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-black">3,420 <span className="text-sm font-normal text-on-surface-variant/60">min</span></span>
                  <span className="text-[10px] text-error font-bold">-4% today</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-outline-variant/20">
            <div className="bg-primary p-4 rounded-2xl relative overflow-hidden group">
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full group-hover:scale-150 transition-transform"></div>
              <p className="text-[10px] font-black text-on-primary uppercase mb-1">Scholarship Goal</p>
              <p className="text-sm text-on-primary font-medium mb-4">Complete 10 Physics inquiries to unlock Deep Lab.</p>
              <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                <div className="h-full bg-white w-[70%] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/20 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-primary" />
            <h4 className="font-bold text-sm">Curator Tip</h4>
          </div>
          <p className="text-xs leading-relaxed text-on-surface-variant">
            "Organizing problems into 'Collections' increases long-term retention by 24% according to our latest study."
          </p>
        </div>
      </aside>
    </div>
  );
};
