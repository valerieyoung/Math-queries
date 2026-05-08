import React from 'react';
import { 
  Lightbulb, 
  Bolt, 
  BookOpen, 
  ChevronDown, 
  ShieldCheck, 
  FileText, 
  Database 
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const Settings = () => {
  return (
    <div className="pt-8 px-12 pb-12 max-w-6xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-on-surface tracking-tight mb-2">Account & Preferences</h1>
        <p className="text-on-surface-variant max-w-2xl leading-relaxed">
          Tailor your digital curation experience. These settings influence how AI generates insights and structures your learning path.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="md:col-span-4 flex flex-col gap-8">
          <section className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20">
            <h2 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-6">Academic Identity</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-3">Primary Role</label>
                <div className="grid grid-cols-2 gap-2">
                  <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold shadow-sm">Student</button>
                  <button className="px-4 py-2 rounded-lg bg-white border border-outline-variant/30 text-on-surface-variant text-sm font-medium hover:bg-surface-container-high transition-colors">Teacher</button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Grade Level</label>
                <div className="relative">
                  <select className="w-full bg-white border border-outline-variant/30 rounded-lg text-sm text-on-surface py-3 px-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none">
                    <option>High School - Senior</option>
                    <option>Undergraduate - Year 1</option>
                    <option>Undergraduate - Year 2</option>
                    <option>Undergraduate - Year 3/4</option>
                    <option>Postgraduate / PhD</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Exam Region</label>
                <div className="relative">
                  <select className="w-full bg-white border border-outline-variant/30 rounded-lg text-sm text-on-surface py-3 px-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none">
                    <option>International (IB/Cambridge)</option>
                    <option>North America (AP/SAT)</option>
                    <option>United Kingdom (A-Level)</option>
                    <option>European standard</option>
                    <option>Other</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" />
                </div>
              </div>
            </div>
          </section>

          <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
            <div className="flex items-center gap-3 mb-3 text-primary">
              <Lightbulb className="w-5 h-5" />
              <span className="font-bold text-sm">Curator Tip</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Defining your region helps us prioritize relevant citation styles and curriculum-aligned terminology.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-8 flex flex-col gap-8">
          <section className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/20">
            <h2 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-6">Learning Mode</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative group cursor-pointer">
                <input defaultChecked className="peer hidden" id="mode_concise" name="learning_mode" type="radio" />
                <label className="block p-6 rounded-xl bg-white border-2 border-outline-variant/10 peer-checked:border-primary peer-checked:shadow-md transition-all hover:bg-surface-container-high" htmlFor="mode_concise">
                  <div className="flex items-center justify-between mb-4">
                    <Bolt className="w-5 h-5 text-primary" />
                    <div className="w-5 h-5 rounded-full border-2 border-outline-variant group-hover:border-primary peer-checked:bg-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white hidden peer-checked:block"></div>
                    </div>
                  </div>
                  <h3 className="font-bold text-on-surface mb-1">Concise</h3>
                  <p className="text-xs text-on-surface-variant">High-density summaries, bulleted insights, and core concept extraction.</p>
                </label>
              </div>
              <div className="relative group cursor-pointer">
                <input className="peer hidden" id="mode_detailed" name="learning_mode" type="radio" />
                <label className="block p-6 rounded-xl bg-white border-2 border-outline-variant/10 peer-checked:border-primary peer-checked:shadow-md transition-all hover:bg-surface-container-high" htmlFor="mode_detailed">
                  <div className="flex items-center justify-between mb-4">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <div className="w-5 h-5 rounded-full border-2 border-outline-variant group-hover:border-primary"></div>
                  </div>
                  <h3 className="font-bold text-on-surface mb-1">Detailed</h3>
                  <p className="text-xs text-on-surface-variant">Deep-dive analysis, historical context, and comprehensive cross-referencing.</p>
                </label>
              </div>
            </div>
          </section>

          <section className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/20">
            <h2 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-8">Intelligence Depth (Difficulty)</h2>
            <div className="px-4">
              <input 
                className="w-full h-2 bg-surface-container-highest rounded-full appearance-none cursor-pointer accent-primary" 
                max="3" 
                min="1" 
                step="1" 
                type="range" 
                defaultValue="2" 
              />
              <div className="flex justify-between mt-6">
                <div className="text-center w-1/3">
                  <span className="block text-sm font-bold text-on-surface">Beginner</span>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Foundational</span>
                </div>
                <div className="text-center w-1/3">
                  <span className="block text-sm font-bold text-primary">Intermediate</span>
                  <span className="text-[10px] text-primary uppercase tracking-tighter">Academic Standard</span>
                </div>
                <div className="text-center w-1/3">
                  <span className="block text-sm font-bold text-on-surface">Advanced</span>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Scholarly / Peer</span>
                </div>
              </div>
            </div>
          </section>

          <div className="flex items-center justify-end gap-4 pt-4">
            <button className="px-6 py-3 rounded-xl text-on-surface-variant font-semibold hover:bg-surface-container-high transition-colors">Discard Changes</button>
            <button className="px-8 py-3 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary-dim active:scale-95 transition-all">
              Apply Preferences
            </button>
          </div>
        </div>
      </div>

      <footer className="mt-24 pt-12 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          <span className="text-xs font-medium text-on-surface-variant">Systems Operational: AI Engine v4.2.0</span>
        </div>
        <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
          <a className="hover:text-primary transition-colors flex items-center gap-1" href="#">
            <ShieldCheck className="w-3 h-3" />
            Privacy Protocol
          </a>
          <a className="hover:text-primary transition-colors flex items-center gap-1" href="#">
            <FileText className="w-3 h-3" />
            Terms of Inquiry
          </a>
          <a className="hover:text-primary transition-colors flex items-center gap-1" href="#">
            <Database className="w-3 h-3" />
            Knowledge API
          </a>
        </div>
      </footer>
    </div>
  );
};
