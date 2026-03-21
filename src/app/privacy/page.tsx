import { Metadata } from "next";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Megha Info LLC",
  description: "Privacy Policy and Data Protection at Megha Info LLC.",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-center mb-6">
            <div className="bg-accent/20 p-4 rounded-2xl border border-accent/30">
              <Shield className="w-10 h-10 text-accent" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Privacy <span className="text-accent">Policy</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            How we collect, use, and protect your enterprise data with uncompromising security.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100 prose prose-slate prose-lg md:prose-xl max-w-none hover:shadow-2xl transition-shadow duration-300">
            
            <p className="text-slate-500 font-medium italic mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mb-6 border-slate-200">1. Introduction</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              At Megha Info LLC ("we," "us," or "our"), the security and privacy of your data are fundamental to our architecture. This Privacy Policy details our protocols for the collection, utilization, and safeguarding of information when you interact with our digital presence and enterprise IT services. By utilizing our infrastructure, you consent to the practices delineated herein.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mb-6 border-slate-200">2. Data Collection</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              We process information with the same precision we apply to our system implementations:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2">
              <li><strong>Directly Provided Data:</strong> Information explicitly transmitted to us through contact forms, career applications, or service inquiries (e.g., identity markers, email protocols, institutional affiliations).</li>
              <li><strong>Automated Telemetry:</strong> Anonymized usage data automatically compiled when you navigate our site, including IP addresses, operational system environments, and interaction timing logs, utilized strictly for performance optimization.</li>
              <li><strong>Authentication Tokens:</strong> We may utilize cookies and similar tracking beacons to securely manage sessions and enhance routing efficiency across our digital platform.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mb-6 border-slate-200">3. Data Utilization</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Information ingested into our systems is utilized strictly for executing enterprise services, optimizing our digital platforms, maintaining high-velocity communications, and fulfilling our commitments to our corporate partners. We do not synthesize your data for external commercial profiling.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mb-6 border-slate-200">4. Third-Party Transmission</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Megha Info LLC maintains strict data sovereignty. We do not sell, encrypt, or route your personally identifiable information to unauthorized third-party grids. Data is only shared with verified infrastructure partners who operate under rigorous confidentiality agreements essential to service delivery.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mb-6 border-slate-200">5. Security Infrastructure</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We deploy industry-standard encrypted protocols and secure firewall configurations to defend your data against unauthorized extraction or mutation. While we architect resilient networks, no digital transmission topology is unconditionally secure, and edge-case vulnerabilities cannot be entirely eliminated.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mb-6 border-slate-200">6. Policy Iterations</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              As part of our Constancy of Learning philosophy, this Privacy Policy is subject to agile updates. Iterations will be compiled and deployed to this page immediately upon finalization. Continued utilization of our services constitutes acceptance of the modified protocols.
            </p>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-12">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Initialize Contact</h3>
              <p className="text-slate-600 text-base">
                For inquiries regarding data routing, deletion requests, or privacy protocols, invoke a transmission to our compliance team at <strong>hr@meghainfo.com</strong>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
