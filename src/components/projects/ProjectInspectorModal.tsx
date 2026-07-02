import { Activity } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Project } from '../../data';

export type SimulationState = 'idle' | 'processing' | 'routing' | 'dispatched';

type ProjectInspectorModalProps = {
  project: Project | null;
  simState: SimulationState;
  simLog: string[];
  onClose: () => void;
  onTriggerSimulation: () => void;
  onResetSimulation: () => void;
};

export default function ProjectInspectorModal({
  project,
  simState,
  simLog,
  onClose,
  onTriggerSimulation,
  onResetSimulation,
}: ProjectInspectorModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            className="max-h-[90vh] w-full max-w-2xl space-y-6 overflow-y-auto rounded-xl border border-stone-300 bg-stone-100 p-6"
          >
            <div className="flex items-start justify-between border-b border-stone-300 pb-3">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-amber-600">
                  {project.category} Case Study
                </span>
                <h4 className="font-display mt-1 text-lg font-bold text-stone-950">{project.title}</h4>
              </div>
              <button
                onClick={onClose}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-stone-300 bg-stone-200 text-xs text-stone-700 transition-all hover:bg-stone-300 hover:text-stone-950"
              >
                x
              </button>
            </div>

            <p className="font-sans text-xs leading-relaxed text-stone-700">{project.longDescription}</p>

            {project.id === 'tabletap' && (
              <TableTapSimulator
                simState={simState}
                simLog={simLog}
                onTriggerSimulation={onTriggerSimulation}
                onResetSimulation={onResetSimulation}
              />
            )}

            {project.architecture && (
              <div className="space-y-4">
                <p className="border-b border-stone-300 pb-1 font-mono text-xs text-stone-800">
                  System Architecture Topology Diagram
                </p>
                <div className="grid grid-cols-1 gap-4 font-mono text-[11px] text-stone-700 md:grid-cols-2">
                  <ArchitectureList title="Structural Components:" items={project.architecture.components} />
                  <ArchitectureList title="Transactional Data-Flow:" items={project.architecture.flow} ordered />
                </div>
              </div>
            )}

            <div className="grid grid-cols-3 gap-2 border-t border-stone-300 pt-4">
              {project.stats.map((stat) => (
                <div key={stat.label} className="rounded bg-stone-50 p-2 text-center">
                  <div className="font-mono text-[10px] uppercase text-stone-600">{stat.label}</div>
                  <div className="font-mono mt-0.5 text-sm font-bold text-stone-950">{stat.value}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={onClose}
                className="rounded border border-stone-300 bg-stone-200 px-4 py-1.5 font-mono text-xs text-stone-950 hover:bg-stone-300"
              >
                Close Inspector
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TableTapSimulator({
  simState,
  simLog,
  onTriggerSimulation,
  onResetSimulation,
}: Pick<ProjectInspectorModalProps, 'simState' | 'simLog' | 'onTriggerSimulation' | 'onResetSimulation'>) {
  return (
    <div className="space-y-3 rounded-lg border border-stone-300 bg-stone-50 p-4 font-mono text-[11px]">
      <div className="flex items-center justify-between border-b border-stone-200 pb-2">
        <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-600">
          <Activity size={12} className="animate-pulse" /> TableTap Order Loop Dispatcher Simulator
        </span>
        <span className="text-[10px] text-stone-600">AWS Cloud_Cluster: East-North_1</span>
      </div>

      <div className="max-h-32 min-h-[90px] space-y-1.5 overflow-y-auto bg-stone-100 p-2 text-[10px] text-stone-700">
        {simLog.length === 0 ? (
          <p className="italic text-stone-600">
            // System standby. Trigger microservice dispatcher to process an incoming QR order.
          </p>
        ) : (
          simLog.map((log) => <p key={log}>{log}</p>)
        )}
      </div>

      <div className="flex gap-2">
        {simState === 'idle' ? (
          <button
            onClick={onTriggerSimulation}
            className="rounded bg-amber-500 px-3 py-1 text-[10px] font-bold text-stone-950 transition-all hover:bg-amber-600"
          >
            Spark Live Order Dispatch Simulation
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <span
              className={`h-2 w-2 rounded-full ${
                simState === 'processing'
                  ? 'animate-ping bg-yellow-500'
                  : simState === 'routing'
                    ? 'animate-ping bg-indigo-500'
                    : 'bg-emerald-600'
              }`}
            />
            <span className="text-[10px] text-stone-700">
              {simState === 'processing'
                ? 'Pre-evaluating loads...'
                : simState === 'routing'
                  ? 'FastAPI Routing event...'
                  : 'Dispatch Loop Complete!'}
            </span>
            {simState === 'dispatched' && (
              <button
                onClick={onResetSimulation}
                className="rounded bg-stone-200 px-2.5 py-0.5 text-[10px] text-stone-800 hover:bg-stone-300"
              >
                Reset Emulator
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ArchitectureList({ title, items, ordered = false }: { title: string; items: string[]; ordered?: boolean }) {
  const List = ordered ? 'ol' : 'ul';
  return (
    <div className="rounded border border-stone-300 bg-stone-50 p-3">
      <p className="mb-2 font-bold uppercase text-amber-600 text-[9px]">{title}</p>
      <List className={`${ordered ? 'list-decimal' : 'list-disc'} list-inside space-y-1`}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </List>
    </div>
  );
}
