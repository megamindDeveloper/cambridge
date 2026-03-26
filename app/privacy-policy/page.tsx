import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

const Footer = dynamic(() => import("@/components/sections/Footer"));
const WhatsappChatWidget = dynamic(() => import("@/components/ui/WhatsappChatWidget"));

export const metadata: Metadata = {
  title: "Privacy Policy | Cambridge School Mangalore",
  description: "Learn how The Cambridge International School collects, uses, and safeguards your personal information. Read our full privacy policy.",
  alternates: {
    canonical: "https://apply.tcismangalore.org/privacy-policy",
  },
  robots: { index: true, follow: true },
};

const sections = [
  {
    id: "information-we-collect",
    number: "1",
    title: "Information We Collect",
    content: (
      <>
        <p className="text-primary/80 text-base md:text-lg leading-relaxed mb-4">
          We may collect personal information that you voluntarily provide to us when you:
        </p>
        <ul className="list-none space-y-3">
          {["Fill out an enquiry form.", "Book a campus visit.", "Contact us via email or telephone.", "Subscribe to our newsletter or updates."].map(
            (item) => (
              <li key={item} className="flex items-start gap-3 text-primary/80 text-base md:text-lg leading-relaxed">
                <span className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-[#E31C22]" />
                {item}
              </li>
            ),
          )}
        </ul>
        <p className="text-primary/80 text-base md:text-lg leading-relaxed mt-4">
          The types of information collected may include your name, email address, phone number, your child&apos;s name/age, and any specific messages
          you send regarding admissions.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    number: "2",
    title: "How We Use Your Information",
    content: (
      <>
        <p className="text-primary/80 text-base md:text-lg leading-relaxed mb-4">We use the information we collect to:</p>
        <ul className="list-none space-y-3">
          {[
            "Respond to your enquiries regarding admissions and school programs.",
            "Schedule and manage campus visits.",
            "Provide information about school events, transport routes, and academic updates.",
            "Improve our website functionality and user experience.",
            "Comply with legal and regulatory requirements related to educational institutions in India.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-primary/80 text-base md:text-lg leading-relaxed">
              <span className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-[#E31C22]" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "data-storage",
    number: "3",
    title: "Data Storage and Security",
    content: (
      <p className="text-primary/80 text-base md:text-lg leading-relaxed">
        We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or alteration.
        While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet is 100%
        secure.
      </p>
    ),
  },
  {
    id: "sharing",
    number: "4",
    title: "Sharing of Information",
    content: (
      <>
        <p className="text-primary/80 text-base md:text-lg leading-relaxed mb-4">
          We do not sell or rent your personal information to third parties. We may share your information only in the following circumstances:
        </p>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-[#E31C22]" />
            <p className="text-primary/80 text-base md:text-lg leading-relaxed">
              <span className="font-semibold text-primary">Service Providers:</span> With trusted vendors who assist us in operating our website or
              conducting our business (e.g., hosting services, email platforms), provided they agree to keep this information confidential.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-[#E31C22]" />
            <p className="text-primary/80 text-base md:text-lg leading-relaxed">
              <span className="font-semibold text-primary">Legal Requirements:</span> If required by law, such as to comply with a subpoena or similar
              legal process.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "cookies",
    number: "5",
    title: "Cookies and Tracking",
    content: (
      <p className="text-primary/80 text-base md:text-lg leading-relaxed">
        Our website may use &quot;cookies&quot; to enhance the user experience. You can choose to set your web browser to refuse cookies or to alert
        you when cookies are being sent. If you do so, note that some parts of the site may not function properly.
      </p>
    ),
  },
  {
    id: "third-party",
    number: "6",
    title: "Third-Party Links",
    content: (
      <p className="text-primary/80 text-base md:text-lg leading-relaxed">
        Our website contains links to other sites, such as social media platforms and Google Maps for campus location and transport routes. We are not
        responsible for the privacy practices or the content of these third-party websites.
      </p>
    ),
  },
  {
    id: "childrens-privacy",
    number: "7",
    title: "Children's Privacy",
    content: (
      <p className="text-primary/80 text-base md:text-lg leading-relaxed">
        As an educational institution, we handle information regarding minors with the utmost care. Information about children is only collected
        through parents or legal guardians for the purpose of admission enquiries and school administration.
      </p>
    ),
  },
  {
    id: "your-rights",
    number: "8",
    title: "Your Rights",
    content: (
      <>
        <p className="text-primary/80 text-base md:text-lg leading-relaxed mb-4">Depending on your location, you may have the right to:</p>
        <ul className="list-none space-y-3">
          {[
            "Request access to the personal data we hold about you.",
            "Request the correction of inaccurate data.",
            "Request the deletion of your data once the purpose for collection is fulfilled.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-primary/80 text-base md:text-lg leading-relaxed">
              <span className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-[#E31C22]" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "changes",
    number: "9",
    title: "Changes to This Policy",
    content: (
      <p className="text-primary/80 text-base md:text-lg leading-relaxed">
        The Cambridge International School reserves the right to update this Privacy Policy at any time. We encourage users to frequently check this
        page for any changes.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="font-sans antialiased">
      {/* ── Header Nav ─────────────────────────────────────────────── */}
      <nav className="w-full relative z-50 bg-white border-b border-[#DBDBDB]">
        <div className="container mx-auto px-4 pt-6 pb-3 md:py-10 flex flex-row md:flex-row md:gap-0 gap-7 justify-between items-start md:items-center">
          <Link href="/" aria-label="Go to homepage">
            <Image src="/svgs/navLogo.svg" width={220} height={220} alt="Logo" className="w-[170px] md:w-[220px] cursor-pointer h-auto" priority />
          </Link>
          <div>
            <div className="flex flex-col md:gap-4 gap-2">
              <h2 className="text-xl md:text-xl font-bold text-primary leading-tight">
                CBSE Affiliated <br />
                Code: 830736
              </h2>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* ── Hero Banner ────────────────────────────────────────────── */}
        <section className="w-full bg-[#F8F8F8] border-b border-[#DBDBDB] py-12 md:py-20">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="mb-5 flex items-center gap-2 text-sm text-primary/50 font-medium">
              <Link href="/" className="hover:text-[#E31C22] transition-colors duration-200">
                Home
              </Link>
              <span>/</span>
              <span className="text-primary/80">Privacy Policy</span>
            </nav>

            <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-4 tracking-tight">Privacy Policy</h1>
            <p className="text-primary/60 text-base md:text-lg font-medium">
              Last Updated:{" "}
              <time dateTime="2026-03-26" className="text-primary/80">
                March 26, 2026
              </time>
            </p>
            <p className="mt-5 max-w-3xl text-primary/70 text-base md:text-lg leading-relaxed">
              The Cambridge International School (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy of our
              students, parents, and visitors. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our
              website{" "}
              <a
                href="https://apply.tcismangalore.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E31C22] underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                https://apply.tcismangalore.org
              </a>
              .
            </p>
          </div>
        </section>

        {/* ── Table of Contents ──────────────────────────────────────── */}
        <section className="w-full bg-white border-b border-[#DBDBDB] py-8 md:py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-lg font-bold text-primary mb-5 tracking-tight">Table of Contents</h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="flex items-center gap-2 text-sm md:text-base text-primary/70 hover:text-[#E31C22] transition-colors duration-200 group"
                  >
                    <span className="font-semibold text-[#E31C22] group-hover:underline">{s.number}.</span>
                    <span className="group-hover:underline underline-offset-2">{s.title}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-sm md:text-base text-primary/70 hover:text-[#E31C22] transition-colors duration-200 group"
                >
                  <span className="font-semibold text-[#E31C22] group-hover:underline">10.</span>
                  <span className="group-hover:underline underline-offset-2">Contact Us</span>
                </a>
              </li>
            </ol>
          </div>
        </section>

        {/* ── Policy Sections ────────────────────────────────────────── */}
        <section className="w-full bg-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-14 md:space-y-20">
              {sections.map((s, idx) => (
                <div key={s.id} id={s.id} className="scroll-mt-28 flex flex-col gap-5">
                  {/* Section divider — hidden for the very first section */}
                  {idx > 0 && <div className="h-[1px] w-full bg-[#DBDBDB]" />}

                  {/* Section heading */}
                  <div className="flex items-start gap-4 pt-2">
                    <span
                      className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full text-white text-sm font-bold"
                      style={{ background: "linear-gradient(135deg, #E31C22 0%, #FB7824 100%)" }}
                      aria-hidden="true"
                    >
                      {s.number}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-primary leading-snug pt-1">{s.title}</h2>
                  </div>

                  {/* Section body */}
                  <div className="pl-0 md:pl-[52px]">{s.content}</div>
                </div>
              ))}

              {/* Section 10 — Contact */}
              <div id="contact" className="scroll-mt-28 flex flex-col gap-5">
                <div className="h-[1px] w-full bg-[#DBDBDB]" />
                <div className="flex items-start gap-4 pt-2">
                  <span
                    className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full text-white text-sm font-bold"
                    style={{ background: "linear-gradient(135deg, #E31C22 0%, #FB7824 100%)" }}
                    aria-hidden="true"
                  >
                    10
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-primary leading-snug pt-1">Contact Us</h2>
                </div>
                <div className="pl-0 md:pl-[52px] space-y-5">
                  <p className="text-primary/80 text-base md:text-lg leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>

                  {/* Contact card */}
                  <div className="rounded-2xl border border-[#DBDBDB] bg-[#F8F8F8] p-6 md:p-8 space-y-4">
                    <p className="font-bold text-primary text-base md:text-lg">The Cambridge International School</p>
                    <div className="flex items-start gap-3 text-primary/70 text-base md:text-lg">
                      <svg className="mt-0.5 flex-shrink-0" width="18" height="18" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M14.0026 34.2288C14.0026 34.2288 27.0052 22.671 27.0052 14.0026C27.0052 6.82145 21.1837 1 14.0026 1C6.82145 1 1 6.82145 1 14.0026C1 22.671 14.0026 34.2288 14.0026 34.2288Z"
                          stroke="#E31C22"
                          strokeWidth="2"
                        />
                        <path
                          d="M18.1567 13.4611C18.1567 15.755 16.2971 17.6147 14.0031 17.6147C11.7091 17.6147 9.84951 15.755 9.84951 13.4611C9.84951 11.1671 11.7091 9.30747 14.0031 9.30747C16.2971 9.30747 18.1567 11.1671 18.1567 13.4611Z"
                          stroke="#E31C22"
                          strokeWidth="2"
                        />
                      </svg>
                      <span>Adyar, Mangalore, Karnataka 575007</span>
                    </div>
                    <div className="flex items-center gap-3 text-primary/70 text-base md:text-lg">
                      <svg className="flex-shrink-0" width="18" height="18" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M3.80758 3.91157L14.9084 11.8814C15.5493 12.3415 16.3982 12.3415 17.0392 11.8814L28.14 3.91157M4.74344 24.2925H27.2041C29.2715 24.2925 30.9475 22.5545 30.9475 20.4104V4.88209C30.9475 2.73807 29.2715 1 27.2041 1H4.74344C2.676 1 1 2.73807 1 4.88209V20.4104C1 22.5545 2.676 24.2925 4.74344 24.2925Z"
                          stroke="#E31C22"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <a
                        href="mailto:tcisadyarmangalore@gmail.com"
                        className="hover:text-[#E31C22] transition-colors duration-200 underline underline-offset-2"
                      >
                        tcisadyarmangalore@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-primary/70 text-base md:text-lg">
                      <svg className="flex-shrink-0" width="18" height="18" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.844 14.0744C15.098 12.8204 15.098 10.7873 13.844 9.53342L9.303 4.99235C8.04903 3.73837 6.0159 3.73837 4.76193 4.99235C-0.253976 10.0082 -0.253976 18.1406 4.76193 23.1565L13.844 32.2386C18.8599 37.2545 26.9922 37.2545 32.0081 32.2386C33.2622 30.9846 33.2622 28.9515 32.0081 27.6976L27.4671 23.1565C26.2132 21.9025 24.18 21.9025 22.9261 23.1565L20.6556 25.427C19.4016 26.681 17.3685 26.681 16.1145 25.427L11.5735 20.886C10.3195 19.632 10.3195 17.5989 11.5735 16.3449L13.844 14.0744Z"
                          stroke="#E31C22"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <a href="tel:+919686357711" className="hover:text-[#E31C22] transition-colors duration-200">
                        +91 9686357711
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Back to top / CTA strip ────────────────────────────────── */}
      </main>

      <Footer />
      {/* <WhatsappChatWidget /> */}
    </div>
  );
}
