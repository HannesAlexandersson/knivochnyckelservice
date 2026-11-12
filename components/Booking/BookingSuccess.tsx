export function BookingSuccess() {
    return (
        <div role="status" aria-live="polite" className="animate-pop py-8 text-center">
            <div aria-hidden="true" className="mx-auto mb-4 grid size-16 place-items-center rounded-full bg-accent text-[1.8rem] text-accent-foreground">
                ✓
            </div>
            <h2 className="card-title">Tack!</h2>
            <p className="text-[0.95rem] text-muted-foreground">Din förfrågan är skickad. Vi hör av oss snart.</p>
        </div>
    );
}
