'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import type { FormEvent } from 'react';
import type { Officer } from '@/lib/officerData';
import PoliceScotlandLogo from '@/components/PoliceScotlandLogo';

interface OfficerProfileLayoutProps {
  officer: Officer;
}

export function OfficerProfileLayout({ officer }: OfficerProfileLayoutProps) {
  const isPrimaryProfile = officer.id.toUpperCase() === 'T329';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: 'Request update on an incident',
    incidentDate: '',
    incidentNumber: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          officerId: officer.id,
          officerName: `${officer.rank} ${officer.name}`,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data?.success) {
        throw new Error(data?.error || 'Unable to submit enquiry.');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        reason: 'Request update on an incident',
        incidentDate: '',
        incidentNumber: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending enquiry', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Top padding to clear any nav / hero spacing */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-20 pt-28 md:pt-32">
        {/* Back link */}
        <div className="flex items-center justify-between gap-4 text-xs font-mono text-white/40">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 hover:border-white/30 hover:bg-white/[0.04]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to officer directory</span>
          </Link>
          <span className="uppercase tracking-[0.18em]">
            PROFILE / {officer.id.toUpperCase()}
          </span>
        </div>

        <div className="flex justify-center mt-8 mb-6">
          <PoliceScotlandLogo />
        </div>

        {/* Hero + ID Card */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)]"
        >
          {/* Text hero */}
          <div className="space-y-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/40">
              Digital officer profile
            </p>
            <h1 className="font-space text-3xl font-semibold tracking-tight sm:text-4xl">
              {officer.rank} {officer.name}{' '}
              <span className="text-white/40">/ {officer.id.toUpperCase()}</span>
            </h1>
            <p className="font-mono text-sm text-white/60">
              {officer.unit}, {officer.division} &middot; {officer.force}
            </p>

            {isPrimaryProfile && (
              <p className="max-w-xl text-sm text-white/60">
                This page provides dedicated contact details for collision updates, road policing
                enquiries and follow-up directly with {officer.rank.toLowerCase()} {officer.name} in
                Edinburgh.
              </p>
            )}
          </div>

          {/* ID card */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md">
            <div className="pointer-events-none absolute -inset-1 bg-gradient-to-br from-white/10 via-transparent to-emerald-500/10 opacity-40" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-6">
              <div className="flex items-start justify-between gap-4">
                <div className="rounded-full border border-white/10 bg-white/5 p-2">
                  <Shield className="h-5 w-5 text-white/60" />
                </div>
                <div className="text-right font-mono text-[11px] text-white/50">
                  <p className="uppercase tracking-[0.18em]">Officer ID</p>
                  <p className="mt-1 text-xs text-white/80">
                    {officer.id.toUpperCase()} / {officer.numericId || 'N/A'}
                  </p>
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs text-white/70">
                <div className="flex justify-between gap-4">
                  <span className="uppercase tracking-wide text-white/40">Name</span>
                  <span>
                    {officer.rank} {officer.name}
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="uppercase tracking-wide text-white/40">Collar number</span>
                  <span>{officer.collar}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="uppercase tracking-wide text-white/40">Unit</span>
                  <span className="text-right">
                    {officer.unit}, {officer.division}
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="uppercase tracking-wide text-white/40">Force</span>
                  <span>{officer.force}</span>
                </div>
              </div>

              {isPrimaryProfile && (
                <p className="mt-2 text-[11px] font-mono text-emerald-300/80">
                  For urgent matters always dial <span className="font-bold">999</span>. For
                  non-emergencies use the contact routes shown below.
                </p>
              )}
            </div>
          </div>
        </motion.section>

        {/* Contact + structured form */}
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)]"
        >
          {/* Contact methods */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md">
              <h2 className="font-space text-lg font-semibold tracking-tight">
                Contact routes
              </h2>
              <p className="mt-2 font-mono text-xs text-white/60">
                These routes are for non-emergency enquiries relating to incidents involving Road
                Policing.
              </p>

              <div className="mt-5 space-y-4 font-mono text-xs text-white/70">
                <div className="flex items-start gap-3">
                  <div className="mt-[2px] rounded-full border border-white/10 bg-white/5 p-2">
                    <Phone className="h-3.5 w-3.5 text-white/70" />
                  </div>
                  <div>
                    <p className="uppercase tracking-wide text-white/40">Telephone (non-emergency)</p>
                    <p className="mt-1">{officer.telHint}</p>
                  </div>
                </div>

                {officer.email && (
                  <div className="flex items-start gap-3">
                    <div className="mt-[2px] rounded-full border border-white/10 bg-white/5 p-2">
                      <Mail className="h-3.5 w-3.5 text-white/70" />
                    </div>
                    <div>
                      <p className="uppercase tracking-wide text-white/40">Email</p>
                      <p className="mt-1">
                        <Link
                          href={`mailto:${officer.email}?subject=Contact%20regarding%20police%20incident`}
                          className="underline decoration-white/30 underline-offset-4 hover:text-white"
                        >
                          {officer.email}
                        </Link>
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {isPrimaryProfile && (
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={`mailto:${officer.email}?subject=Contact%20regarding%20police%20incident`}
                    className="inline-flex items-center justify-center rounded-full bg-emerald-500/90 px-4 py-2 text-xs font-mono font-semibold text-black hover:bg-emerald-400"
                  >
                    Email PC Wishart directly
                  </Link>
                  <a
                    href="#officer-contact-form"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.02] px-4 py-2 text-xs font-mono text-white/80 hover:border-white/40"
                  >
                    Use structured enquiry form
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Structured contact form */}
          <div
            id="officer-contact-form"
            className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-md"
          >
            <h2 className="font-space text-lg font-semibold tracking-tight">
              Enquiry / update form
            </h2>
            <p className="mt-2 font-mono text-xs text-white/60">
              This form helps you provide the key details needed to locate your incident and respond
              effectively. Do not use this for emergencies.
            </p>
            <p className="mt-1 font-mono text-[11px] text-white/40">
              Enquiries are securely routed through Resend and delivered directly to the duty
              officer.
            </p>
            <p className="mt-3 text-[11px] font-mono text-white/50">
              Read our{" "}
              <Link href="/privacy" className="underline decoration-white/30 underline-offset-4 hover:text-white">
                Privacy Notice
              </Link>
              {" "}before submitting.
            </p>

            <form
              className="mt-5 grid gap-4 text-xs font-mono text-white/80 md:grid-cols-2"
              onSubmit={handleSubmit}
            >
              <div className="md:col-span-1">
                <label className="mb-1 block uppercase tracking-wide text-white/40">
                  Your name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(event) => handleChange('name', event.target.value)}
                  required
                  className="w-full rounded-lg border border-white/15 bg-black/50 px-3 py-2 outline-none focus:border-emerald-400"
                />
              </div>
              <div className="md:col-span-1">
                <label className="mb-1 block uppercase tracking-wide text-white/40">
                  Email address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) => handleChange('email', event.target.value)}
                  required
                  className="w-full rounded-lg border border-white/15 bg-black/50 px-3 py-2 outline-none focus:border-emerald-400"
                />
              </div>

              <div className="md:col-span-1">
                <label className="mb-1 block uppercase tracking-wide text-white/40">
                  Phone number (optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(event) => handleChange('phone', event.target.value)}
                  className="w-full rounded-lg border border-white/15 bg-black/50 px-3 py-2 outline-none focus:border-emerald-400"
                />
              </div>

              <div className="md:col-span-1">
                <label className="mb-1 block uppercase tracking-wide text-white/40">
                  Reason for contact
                </label>
                <select
                  className="w-full rounded-lg border border-white/15 bg-black/50 px-3 py-2 outline-none focus:border-emerald-400"
                  value={formData.reason}
                  onChange={(event) => handleChange('reason', event.target.value)}
                >
                  <option>Request update on an incident</option>
                  <option>Provide further information</option>
                  <option>Request incident / reference number</option>
                  <option>General non-emergency enquiry</option>
                </select>
              </div>

              <div className="md:col-span-1">
                <label className="mb-1 block uppercase tracking-wide text-white/40">
                  Incident date (if known)
                </label>
                <input
                  type="date"
                  value={formData.incidentDate}
                  onChange={(event) => handleChange('incidentDate', event.target.value)}
                  className="w-full rounded-lg border border-white/15 bg-black/50 px-3 py-2 outline-none focus:border-emerald-400"
                />
              </div>

              <div className="md:col-span-1">
                <label className="mb-1 block uppercase tracking-wide text-white/40">
                  Incident / reference number (if known)
                </label>
                <input
                  type="text"
                  value={formData.incidentNumber}
                  onChange={(event) => handleChange('incidentNumber', event.target.value)}
                  className="w-full rounded-lg border border-white/15 bg-black/50 px-3 py-2 outline-none focus:border-emerald-400"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-1 block uppercase tracking-wide text-white/40">
                  Your message
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(event) => handleChange('message', event.target.value)}
                  required
                  className="w-full rounded-lg border border-white/15 bg-black/50 px-3 py-2 outline-none focus:border-emerald-400"
                />
              </div>

              <div className="md:col-span-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="text-xs font-mono text-white/70 md:max-w-xl">
                  <p>
                    By submitting this form you confirm that this is non-urgent follow-up
                    information, that you will not use this site to report crime, and that you have
                    read and understood our{' '}
                    <Link
                      href="/privacy"
                      className="underline decoration-white/30 underline-offset-4 hover:text-white"
                    >
                      Privacy Notice
                    </Link>
                    .
                  </p>
                  {status === 'success' && (
                    <span className="text-emerald-300">Enquiry sent successfully.</span>
                  )}
                  {status === 'error' && (
                    <span className="text-red-300">{errorMessage || 'Unable to send enquiry.'}</span>
                  )}
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-emerald-500/90 px-5 py-2.5 text-xs font-mono font-semibold text-black hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-emerald-500/40"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending…' : 'Submit enquiry'}
                </button>
              </div>
            </form>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
