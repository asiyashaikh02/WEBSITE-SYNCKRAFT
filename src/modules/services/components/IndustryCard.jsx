import { Link } from 'react-router-dom';

export default function IndustryCard({ to, icon, title, description, colorClass, highlightClass }) {
  // If highlightClass is passed, it is the special styled one (like AI/Obsidian)
  if (highlightClass) {
    return (
      <Link to={to} className={`block group p-6 rounded-2xl border transition-all cursor-pointer ${highlightClass}`}>
        <span className={`material-symbols-outlined mb-4 block text-3xl ${colorClass}`} style={title === 'AI / Obsidian' ? { fontVariationSettings: "'FILL' 1" } : {}}>{icon}</span>
        <h4 className="font-bold mb-2">{title}</h4>
        <p className="text-xs text-on-surface-variant">{description}</p>
      </Link>
    );
  }

  return (
    <Link to={to} className="block group p-6 rounded-2xl bg-surface-container border border-outline-variant/5 hover:bg-surface-container-high hover:border-primary/20 transition-all cursor-pointer">
      <span className={`material-symbols-outlined mb-4 block text-3xl ${colorClass}`}>{icon}</span>
      <h4 className="font-bold mb-2">{title}</h4>
      <p className="text-xs text-on-surface-variant">{description}</p>
    </Link>
  );
}
