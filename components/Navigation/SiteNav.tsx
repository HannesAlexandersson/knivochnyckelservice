export function SiteNav() {
    return (
        <nav className="mb-[clamp(40px,8vw,96px)] flex items-center justify-between">
            <div className="font-serif text-[1.4rem] font-semibold tracking-tight">
                Skärpa<span className="text-accent">.</span>
            </div>
            <a
                href="tel:+46000000000"
                className="glass rounded-full border border-line px-4 py-2 text-[0.95rem] text-foreground transition duration-200 hover:-translate-y-0.5 hover:border-accent"
            >
                Ring oss
            </a>
        </nav>
    );
}
