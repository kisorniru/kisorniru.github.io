import { AnimatePresence, motion } from 'motion/react';
import { Project } from '../../data';

type ProjectInspectorModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectInspectorModal({
  project,
  onClose,
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
