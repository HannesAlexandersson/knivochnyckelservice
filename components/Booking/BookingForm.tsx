'use client'

import { useMemo, useState, type FormEvent } from "react";
import Button from "@/components/Button/Button";
import { FormField } from "@/components/Form/FormField";
import { BookingSuccess } from "@/components/Booking/BookingSuccess";

export type BookingData = {
    name: string;
    address: string;
    phone: string;
    email: string;
    date: string;
};

type BookingFormProps = {
    onSubmit?: ((data: BookingData) => void | Promise<void>) | undefined;
};

export function BookingForm({ onSubmit }: BookingFormProps) {
    const [sent, setSent] = useState(false);
    // Earliest pickup: tomorrow
    const minDate = useMemo(() => {
        const t = new Date();
        t.setDate(t.getDate() + 1);
        return t.toISOString().slice(0, 10);
    }, []);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
        const data = Object.fromEntries(new FormData(form).entries()) as BookingData;
        await onSubmit?.(data);
        setSent(true);
    }

    return (
        <section
            aria-labelledby="formtitle"
            className="glass-strong mt-2 rounded-4xl border border-line p-[clamp(22px,3vw,38px)] shadow-card min-[900px]:-ml-12 min-[900px]:mt-[clamp(0px,4vw,56px)]"
        >
            {sent ? (
                <BookingSuccess />
            ) : (
                <>
                    <h2 id="formtitle" className="card-title">Boka tid för upphämtning</h2>
                    <p className="mb-6 text-[0.95rem] text-muted-foreground">Fyll i dina uppgifter så hör vi av oss.</p>
                    <form noValidate onSubmit={handleSubmit} className="grid gap-3.5">
                        <FormField id="name" label="Namn" type="text" autoComplete="name" placeholder="Förnamn Efternamn" required />
                        <FormField id="address" label="Adress" type="text" autoComplete="street-address" placeholder="Gatuadress, postnummer, ort" required />
                        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                            <FormField id="phone" label="Telefon" type="tel" autoComplete="tel" placeholder="070-123 45 67" required />
                            <FormField id="email" label="E-post" type="email" autoComplete="email" placeholder="namn@mail.se" required />
                        </div>
                        <FormField id="date" label="Datum för upphämtning" type="date" min={minDate} required />
                        <Button type="submit" variant="accent" size="xl" className="mt-1.5">
                            Boka upphämtning
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                                <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                        </Button>
                        <p className="mt-1 text-center text-[0.8rem] text-muted-foreground">
                            Ingen betalning nu. Vi bekräftar dagen via e-post.
                        </p>
                    </form>
                </>
            )}
        </section>
    );
}
