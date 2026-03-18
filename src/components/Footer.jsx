import { Link } from 'react-router-dom';
import { congress } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="mt-20 bg-[var(--navy)] text-white">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="space-y-5">
          <img
            src={congress.logos}
            alt="ATREO and EOS logos"
            className="h-20 w-auto rounded-2xl bg-white/5 p-2"
          />
          <div>
            <h3 className="text-2xl font-bold">{congress.title}</h3>
            <p className="mt-2 max-w-2xl text-sm text-white/75">
              Facebook: {congress.socials[0].value} · Instagram: {congress.socials[1].value}
            </p>
          </div>
        </div>

        <div className="space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">For information</p>
          <a
            href={`mailto:${congress.contactEmail}`}
            className="block text-lg font-semibold text-white hover:text-[var(--gold)]"
          >
            {congress.contactEmail}
          </a>
          <Link to="/register" className="btn-primary">
            Register now
          </Link>
        </div>
      </div>
    </footer>
  );
}
