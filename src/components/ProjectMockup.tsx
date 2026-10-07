import React from 'react';
import { ShoppingBag, Search, Bell, Filter, ArrowUpRight, TrendingUp } from 'lucide-react';

interface ProjectMockupProps {
  type: 'dashboard' | 'ecommerce' | 'saas' | 'uikit';
  title?: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type }) => {
  if (type === 'dashboard') {
    return (
      <div className="w-full h-48 bg-zinc-900 text-zinc-100 p-4 rounded-xl flex flex-col justify-between overflow-hidden relative select-none border border-zinc-800 font-mono text-xs">
        {/* Window controls */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2">
          <div className="flex items-center space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
            <span className="text-[10px] text-zinc-400 font-sans ml-2">pulse-analytics.app/dashboard</span>
          </div>
          <div className="flex items-center space-x-2 text-zinc-400">
            <span className="flex items-center gap-1 text-[10px] text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> Live
            </span>
            <Bell size={12} />
          </div>
        </div>

        {/* Dashboard Grid Mockup */}
        <div className="grid grid-cols-3 gap-2 my-auto font-sans">
          <div className="bg-zinc-800/80 border border-zinc-700/50 p-2.5 rounded-lg">
            <span className="text-[10px] text-zinc-400">Total MRR</span>
            <div className="text-sm font-bold text-white mt-0.5">$48,250</div>
            <span className="text-[9px] text-emerald-400 flex items-center gap-0.5 mt-0.5">
              <TrendingUp size={10} /> +14.2%
            </span>
          </div>
          <div className="bg-zinc-800/80 border border-zinc-700/50 p-2.5 rounded-lg">
            <span className="text-[10px] text-zinc-400">Active Users</span>
            <div className="text-sm font-bold text-white mt-0.5">14,820</div>
            <span className="text-[9px] text-emerald-400 flex items-center gap-0.5 mt-0.5">
              <TrendingUp size={10} /> +8.4%
            </span>
          </div>
          <div className="bg-zinc-800/80 border border-zinc-700/50 p-2.5 rounded-lg">
            <span className="text-[10px] text-zinc-400">Conversion</span>
            <div className="text-sm font-bold text-white mt-0.5">4.38%</div>
            <span className="text-[9px] text-zinc-400">Avg. benchmark</span>
          </div>
        </div>

        {/* Mini Chart Mockup */}
        <div className="bg-zinc-800/40 rounded-lg p-2 border border-zinc-800 flex items-end justify-between h-14 gap-1.5 pt-4">
          {[35, 55, 45, 75, 60, 90, 80, 95, 88, 100].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
              <div 
                className="w-full bg-brand-500/80 group-hover:bg-brand-400 rounded-t transition-all duration-300" 
                style={{ height: `${h}%` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'ecommerce') {
    return (
      <div className="w-full h-48 bg-zinc-900 text-zinc-100 p-4 rounded-xl flex flex-col justify-between overflow-hidden relative select-none border border-zinc-800 font-sans text-xs">
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2">
          <div className="flex items-center space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
            <span className="text-[10px] text-zinc-400 ml-2 font-mono">lumina.store/shop</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-zinc-800 px-2 py-0.5 rounded text-[10px] text-zinc-400 gap-1">
              <Search size={10} /> Cari baju...
            </div>
            <div className="relative">
              <ShoppingBag size={13} className="text-zinc-300" />
              <span className="absolute -top-1 -right-1 bg-brand-500 text-[8px] text-white rounded-full w-3 h-3 flex items-center justify-center font-bold">2</span>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-zinc-800/80 rounded-lg p-2 border border-zinc-700/50 flex flex-col justify-between">
            <div className="h-12 bg-zinc-700/50 rounded flex items-center justify-center text-zinc-400 text-[10px]">
              👕 Oversized Tee
            </div>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-[10px] font-bold text-white">Rp 189k</span>
              <span className="text-[8px] bg-brand-500/20 text-brand-400 px-1 py-0.5 rounded">Baru</span>
            </div>
          </div>
          <div className="bg-zinc-800/80 rounded-lg p-2 border border-zinc-700/50 flex flex-col justify-between">
            <div className="h-12 bg-zinc-700/50 rounded flex items-center justify-center text-zinc-400 text-[10px]">
              🧥 Linen Blazer
            </div>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-[10px] font-bold text-white">Rp 450k</span>
              <span className="text-[8px] bg-emerald-500/20 text-emerald-400 px-1 py-0.5 rounded">Sale</span>
            </div>
          </div>
          <div className="bg-zinc-800/80 rounded-lg p-2 border border-zinc-700/50 flex flex-col justify-between">
            <div className="h-12 bg-zinc-700/50 rounded flex items-center justify-center text-zinc-400 text-[10px]">
              🎒 Urban Bag
            </div>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-[10px] font-bold text-white">Rp 299k</span>
              <span className="text-[8px] bg-zinc-700 text-zinc-300 px-1 py-0.5 rounded">4.9 ★</span>
            </div>
          </div>
        </div>

        {/* Bottom checkout banner */}
        <div className="bg-brand-500/10 border border-brand-500/30 text-brand-300 rounded px-2.5 py-1 text-[10px] flex items-center justify-between">
          <span>Gratis Ongkir se-Indonesia untuk pesanan di atas Rp 300k</span>
          <ArrowUpRight size={11} />
        </div>
      </div>
    );
  }

  if (type === 'uikit') {
    return (
      <div className="w-full h-48 bg-zinc-900 text-zinc-100 p-4 rounded-xl flex flex-col justify-between overflow-hidden relative select-none border border-zinc-800 font-sans text-xs">
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2">
          <div className="flex items-center space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
            <span className="text-[10px] text-zinc-400 ml-2 font-mono">devcanvas.design/components</span>
          </div>
          <span className="text-[9px] bg-zinc-800 text-zinc-300 px-1.5 py-0.5 rounded border border-zinc-700">v2.4.0</span>
        </div>

        {/* UI Elements Showcase */}
        <div className="grid grid-cols-2 gap-2 my-auto">
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5">
              <button className="bg-brand-500 text-white px-2.5 py-1 rounded text-[10px] font-medium shadow-sm">
                Primary Button
              </button>
              <button className="bg-zinc-800 text-zinc-300 border border-zinc-700 px-2 py-1 rounded text-[10px]">
                Outline
              </button>
            </div>
            <div className="flex items-center gap-1">
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] border border-emerald-500/30">
                <span className="w-1 h-1 rounded-full bg-emerald-400"></span> Active
              </span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 text-[9px] border border-yellow-500/30">
                Pending
              </span>
            </div>
          </div>

          <div className="bg-zinc-800/80 rounded-lg p-2 border border-zinc-700/50 space-y-1">
            <div className="h-1.5 w-16 bg-zinc-600 rounded"></div>
            <div className="h-1.5 w-24 bg-zinc-700 rounded"></div>
            <div className="w-full bg-zinc-700 rounded-full h-1 mt-1.5">
              <div className="bg-brand-400 h-1 rounded-full w-3/4"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-1 border-t border-zinc-800/60 font-mono">
          <span>&lt;Button variant="solid" /&gt;</span>
          <span className="text-emerald-400">WCAG 2.1 AA Compliant</span>
        </div>
      </div>
    );
  }

  // Fallback: saas / taskflow
  return (
    <div className="w-full h-48 bg-zinc-900 text-zinc-100 p-4 rounded-xl flex flex-col justify-between overflow-hidden relative select-none border border-zinc-800 font-sans text-xs">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2">
        <div className="flex items-center space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
          <span className="text-[10px] text-zinc-400 ml-2 font-mono">taskflow.io/workspace</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-zinc-400">
          <Filter size={10} /> <span>3 Columns</span>
        </div>
      </div>

      {/* Kanban columns */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-zinc-800/50 p-1.5 rounded border border-zinc-800 flex flex-col gap-1">
          <span className="text-[9px] font-bold text-zinc-400">To Do (2)</span>
          <div className="bg-zinc-800 p-1.5 rounded border border-zinc-700/60 text-[9px] text-zinc-200">
            Auth Flow Refactor
          </div>
          <div className="bg-zinc-800 p-1.5 rounded border border-zinc-700/60 text-[9px] text-zinc-200">
            Dark Mode Audit
          </div>
        </div>
        <div className="bg-zinc-800/50 p-1.5 rounded border border-zinc-800 flex flex-col gap-1">
          <span className="text-[9px] font-bold text-brand-400">In Progress (1)</span>
          <div className="bg-zinc-800 p-1.5 rounded border border-brand-500/40 text-[9px] text-zinc-100 shadow-sm">
            Drag-and-Drop Test
          </div>
        </div>
        <div className="bg-zinc-800/50 p-1.5 rounded border border-zinc-800 flex flex-col gap-1">
          <span className="text-[9px] font-bold text-emerald-400">Done (4)</span>
          <div className="bg-zinc-800/60 p-1.5 rounded border border-emerald-500/20 text-[9px] text-zinc-400 line-through">
            API Schema Sync
          </div>
        </div>
      </div>

      <div className="text-[9px] text-zinc-400 flex items-center justify-between border-t border-zinc-800/60 pt-1 font-mono">
        <span>Sprint #14</span>
        <span className="text-zinc-300">Updated 2m ago</span>
      </div>
    </div>
  );
};
