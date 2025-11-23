import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice | ContactPolice",
  description: "Privacy information for the ContactPolice public contact tool.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-4 text-white">
      <h1 className="text-3xl font-semibold mb-6">Privacy Notice</h1>

      <p className="mb-4">
        This page is provided as a <strong>public contact tool</strong> to help members of the public
        provide <strong>non-urgent follow-up information</strong> to an officer they have already
        spoken with. It is <strong>not</strong> an official Police Scotland website.
      </p>

      <p className="mb-4">
        Any details you submit through this form are sent directly to the officer’s Police Scotland
        email account. This website does <strong>not</strong> store or retain any information you
        provide, and it does not use analytics, tracking cookies or profiling tools.
      </p>

      <p className="mb-4">
        Please <strong>do not</strong> use this website to report crimes. For police assistance,
        please use the official channels:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>
          <strong>999</strong> for emergencies
        </li>
        <li>
          <strong>101</strong> for non-emergencies
        </li>
        <li>Or contact the officer directly using their official Police Scotland email address</li>
      </ul>

      <p className="mb-4">
        No sensitive or confidential information should be shared through this form. Do not include
        images, videos, medical details or financial information.
      </p>

      <p className="mb-4">
        This tool is for <strong>follow-up contact only</strong>, relating to matters already known
        to police. If you are unsure about how to report something, please visit the official Police
        Scotland website for guidance:
      </p>

      <p className="mb-8">
        <a
          href="https://www.scotland.police.uk"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          www.scotland.police.uk
        </a>
      </p>

      <p>
        By submitting this form, you acknowledge that any information you provide will be processed
        by Police Scotland for policing purposes.
      </p>
    </main>
  );
}
