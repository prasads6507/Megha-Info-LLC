import { Metadata } from "next";
import { Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | Megha Info LLC",
  description: "Terms of Service and Conditions of Use for Megha Info LLC.",
};

export default function TermsAndConditions() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-center mb-6">
            <div className="bg-accent/20 p-4 rounded-2xl border border-accent/30">
              <Scale className="w-10 h-10 text-accent" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Terms & <span className="text-accent">Conditions</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            The legal architecture governing the engagement between your enterprise and Megha Info LLC.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100 prose prose-slate prose-lg md:prose-xl max-w-none hover:shadow-2xl transition-shadow duration-300">
            
            <p className="text-slate-500 font-medium italic mb-8">Date of Compilation: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mb-6 border-slate-200">1. Acceptance of Protocols</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              By accessing, browsing, or utilizing the services provided by Megha Info LLC via this digital platform, you acknowledge that you have read, executed, and compiled these Terms and Conditions. If you do not agree with any parameter of these terms, you are directed to sever your connection to our website immediately.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mb-6 border-slate-200">2. Intellectual Property Architecture</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              The entire corpus of content hosted within this domain—including but not limited to source code, algorithms, visual design schemas, proprietary text, and operational methodologies—is the exclusive intellectual property of Megha Info LLC. Unauthorized replication, reverse-engineering, or commercial redistribution of these assets without explicit cryptographic or written authorization is strictly prohibited.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mb-6 border-slate-200">3. Scope of Service Limitations</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              While our operational Velocity is high, all enterprise services, IT staffing topologies, and structural solutions described on this platform are subject to availability and execution capabilities. We reserve the administrative authority to suspend, modify, or deprecate any documented service module at any time without prior broadcast notification.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mb-6 border-slate-200">4. User Behavioral Directives</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Users of this platform must strictly strictly adhere to logical behavioral constraints. You shall not:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2">
              <li>Attempt unauthorized penetration testing or execute malicious payloads against our infrastructure.</li>
              <li>Scrape, mine, or extract proprietary datasets utilizing automated bots.</li>
              <li>Inject, host, or transmit malware, logic bombs, or functionally destructive code.</li>
              <li>Engage in operations that cause artificial latency or Denial of Service (DoS) scenarios against our primary servers.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mb-6 border-slate-200">5. Limitation of Liability</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Megha Info LLC, alongside its corporate directors, engineering teams, and affiliates, shall not be held liable for any direct, indirect, incidental, or consequential state failures, data corruption, or financial losses stemming from the utilization or inability to utilize this web presence. The platform is provided on an "as-is" compile state.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mb-6 border-slate-200">6. Governing Jurisdiction</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              These structural parameters and directives are governed strictly by the laws of the State of New Jersey, United States of America. Any systemic disputes shall be resolved exclusively within its recognized judicial architecture.
            </p>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-12">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Legal Communications</h3>
              <p className="text-slate-600 text-base">
                For administrative compliance inquiries or legal transmissions regarding our Terms & Conditions, execute communication to <strong>hr@meghainfo.com</strong>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
