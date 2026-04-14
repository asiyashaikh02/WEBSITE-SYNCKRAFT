import { Link } from 'react-router-dom';

export default function FeaturedIndustryCard({
  to,
  isPopular,
  imageSrc,
  imageAlt,
  icon,
  title,
  description,
  highlightClass
}) {
  return (
    <Link to={to} className={`group relative w-full block overflow-hidden rounded-3xl ${highlightClass ? highlightClass : 'bg-surface-container border border-outline-variant/10 hover:border-primary/30'} transition-all duration-500 cursor-pointer`}>
      <div className="aspect-[16/9] overflow-hidden">
        <img alt={imageAlt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={imageSrc} />
        <div className={`absolute inset-0 bg-gradient-to-t ${highlightClass ? 'from-surface-container-high via-surface-container-high/20 to-transparent' : 'from-surface-container via-surface-container/20 to-transparent'}`}></div>
      </div>
      <div className="p-8 relative -mt-20">
        {isPopular && (
          <div className="absolute top-4 right-8 bg-primary text-on-primary text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
            Popular
          </div>
        )}
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-3 rounded-2xl ${highlightClass ? 'bg-primary text-on-primary' : 'bg-primary/10 text-primary'}`}>
            <span className="material-symbols-outlined" style={highlightClass ? { fontVariationSettings: "'FILL' 1" } : {}}>{icon}</span>
          </div>
          <h3 className="text-2xl font-bold font-headline">{title}</h3>
        </div>
        <p className="text-on-surface-variant mb-6 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center text-primary font-semibold gap-2 group-hover:gap-4 transition-all">
          Explore {title.split(' ')[0]} <span className="material-symbols-outlined">arrow_forward</span>
        </div>
      </div>
    </Link>
  );
}
