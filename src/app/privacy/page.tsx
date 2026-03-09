import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { RevealScript } from '@/components/RevealScript'

export const metadata: Metadata = {
  title: 'Privacy Policy — Leiko',
  description: 'How Leiko AI Oy collects, uses, stores, and protects your personal data.',
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="legal">
        <div className="ctn">
          <div className="legal-header rv">
            <div className="lbl">Privacy Policy</div>
            <h1>Privacy Policy</h1>
            <p className="legal-meta">
              Effective date: March 9, 2026 · Last updated: March 9, 2026
            </p>
          </div>

          <div className="legal-body rv d1">
            <p>
              This Privacy Policy describes how Leiko AI Oy (&ldquo;Leiko&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, stores, shares, and protects your personal data when you use the Leiko mobile application and related services (collectively, the &ldquo;Service&rdquo;). This policy applies to all users of the Service regardless of location, with additional rights for users in the European Economic Area (&ldquo;EEA&rdquo;), the United Kingdom, and other jurisdictions with applicable data protection laws.
            </p>
            <p>
              By accessing or using the Service, you acknowledge that you have read, understood, and agree to the practices described in this Privacy Policy. If you do not agree, you must not use the Service.
            </p>

            <h2>1. Data Controller</h2>
            <p>The data controller responsible for your personal data is:</p>
            <ul>
              <li><strong>Entity:</strong> Leiko AI Oy</li>
              <li><strong>Registered in:</strong> Finland (Business ID pending)</li>
              <li><strong>Contact:</strong> privacy@leiko.ai</li>
              <li><strong>Data Protection Officer:</strong> dpo@leiko.ai</li>
            </ul>

            <h2>2. Data We Collect</h2>
            <p>We collect and process the following categories of personal data. The scope of data collected depends on the features you choose to activate and the integrations you enable.</p>

            <h3>2.1 Data You Provide Directly</h3>
            <ul>
              <li><strong>Account registration data:</strong> name, email address, and authentication credentials</li>
              <li><strong>Business entity information:</strong> company name, business ID (Y-tunnus), VAT identification number, registered address, bank account details (IBAN, BIC), and related corporate information</li>
              <li><strong>Invoice and financial data:</strong> invoice line items, amounts, currencies, customer details, payment terms, and payment status</li>
              <li><strong>Task and project data:</strong> task descriptions, deadlines, priorities, project names, time entries, and associated notes</li>
              <li><strong>Customer/contact data:</strong> names, email addresses, phone numbers, postal addresses, and communication history of your clients and business contacts</li>
              <li><strong>Receipt and expense data:</strong> photographed receipts, vendor names, amounts, dates, expense categories, and extracted text from optical character recognition (OCR) processing</li>
              <li><strong>Voice input data:</strong> audio recordings when using voice features, and the resulting transcriptions</li>
              <li><strong>Chat and conversation data:</strong> all messages, prompts, instructions, and interactions you have with the Leiko AI assistant</li>
              <li><strong>User preferences and settings:</strong> language preferences, notification settings, onboarding choices, and feature configuration</li>
              <li><strong>Feedback and support communications:</strong> any correspondence you send to us</li>
            </ul>

            <h3>2.2 Data Collected Through Integrations</h3>
            <p>When you connect third-party services, we access and process data from those services as described below. You may revoke access at any time through the Service settings.</p>
            <ul>
              <li><strong>Google Calendar:</strong> calendar event titles, descriptions, times, locations, attendee information, meeting links, and event metadata. Access is two-way: we read events and may create, modify, or delete events on your behalf when you instruct us to do so.</li>
              <li><strong>Gmail:</strong> email headers (sender, recipient, subject, date), email body content, attachments metadata, labels, and thread information. We access emails to provide AI-powered summaries, search, and action extraction. We do not modify or send emails without your explicit instruction.</li>
              <li><strong>Camera and photo library:</strong> images you capture or select for receipt processing, including EXIF metadata (location, timestamp, device information) embedded in those images.</li>
            </ul>

            <h3>2.3 Data Collected Automatically</h3>
            <ul>
              <li><strong>Device information:</strong> device model, operating system version, unique device identifiers, screen resolution, and language settings</li>
              <li><strong>Usage analytics:</strong> features used, interaction patterns, session duration, navigation paths, error logs, and performance metrics</li>
              <li><strong>Network data:</strong> IP address, approximate geolocation derived from IP address, internet service provider, and connection type</li>
              <li><strong>AI interaction metadata:</strong> timestamps, response latencies, tool calls invoked, token consumption, model versions used, and conversation thread identifiers</li>
            </ul>

            <h3>2.4 AI-Learned Data</h3>
            <p>The Service includes AI features that learn from your interactions to improve personalization. This includes:</p>
            <ul>
              <li><strong>Behavioral patterns:</strong> inferred working hours, preferred meeting durations, lunch times, communication tone preferences, and routine task patterns</li>
              <li><strong>Business context:</strong> learned client relationships, recurring invoicing patterns, typical hourly rates, preferred expense categories, and project associations</li>
              <li><strong>Preference models:</strong> accumulated understanding of your communication style, formatting preferences, and decision-making patterns</li>
            </ul>
            <p>You may view, modify, and delete AI-learned data at any time through the Service settings.</p>

            <h2>3. How We Use Your Data</h2>

            <h3>3.1 Primary Purposes</h3>
            <p>We process your personal data for the following purposes:</p>
            <ul>
              <li>To provide and operate the Service, including AI-assisted invoicing, receipt processing, task management, email summarization, calendar management, time tracking, and conversational assistance</li>
              <li>To personalize and improve the AI assistant&apos;s responses, accuracy, and contextual understanding based on your usage patterns and explicit preferences</li>
              <li>To process and execute actions you request, including creating and sending invoices, scheduling events, logging expenses, and managing tasks</li>
              <li>To facilitate integrations with third-party services you authorize</li>
              <li>To communicate with you regarding service updates, security notices, and administrative messages</li>
            </ul>

            <h3>3.2 Legitimate Interest Purposes</h3>
            <p>We process certain data based on our legitimate interests, balanced against your rights:</p>
            <ul>
              <li>To analyze aggregated and anonymized usage patterns for product development, feature prioritization, and Service improvement</li>
              <li>To detect, investigate, and prevent fraud, abuse, security incidents, and technical issues</li>
              <li>To generate aggregated, anonymized insights about market trends and user behavior for internal analytics and potential publication (no individual identification possible)</li>
              <li>To maintain and improve the performance, reliability, and security of the Service infrastructure</li>
              <li>To develop new features, products, and services based on observed usage patterns</li>
              <li>To train, evaluate, and improve our AI models using anonymized and aggregated interaction data, subject to Section 5</li>
            </ul>

            <h3>3.3 Legal Compliance</h3>
            <ul>
              <li>To comply with applicable laws, regulations, legal processes, or governmental requests</li>
              <li>To enforce our Terms of Service and protect our legal rights</li>
              <li>To meet accounting, tax reporting, and financial regulatory obligations</li>
            </ul>

            <h2>4. Legal Bases for Processing (GDPR)</h2>
            <p>For users in the EEA and UK, we rely on the following legal bases under Articles 6 and 9 of the General Data Protection Regulation:</p>
            <ul>
              <li><strong>Contract performance (Art. 6(1)(b)):</strong> Processing necessary to provide the Service you have requested, including account management, core features, and integration functionality.</li>
              <li><strong>Consent (Art. 6(1)(a)):</strong> Where required, we obtain your explicit consent before processing, including for optional integrations (Google Calendar, Gmail), voice recording and transcription, and marketing communications. You may withdraw consent at any time without affecting the lawfulness of prior processing.</li>
              <li><strong>Legitimate interests (Art. 6(1)(f)):</strong> Processing necessary for our legitimate interests, including Service improvement, analytics, fraud prevention, security, and AI model development, provided these interests are not overridden by your fundamental rights. We conduct balancing tests for each legitimate interest processing activity.</li>
              <li><strong>Legal obligation (Art. 6(1)(c)):</strong> Processing necessary to comply with legal obligations to which we are subject, including financial reporting, tax compliance, and data retention requirements under applicable law.</li>
            </ul>

            <h2>5. AI Processing and Automated Decision-Making</h2>

            <h3>5.1 How AI Processing Works</h3>
            <p>The Service uses artificial intelligence models provided by Anthropic (Claude) and Google (Gemini) to process your instructions and generate responses. When you interact with the Service:</p>
            <ul>
              <li>Your messages, relevant context, and applicable business data are sent to AI model providers for processing</li>
              <li>AI providers process this data to generate responses, execute tool calls, and perform requested actions</li>
              <li>We maintain conversation context within sessions to enable coherent multi-turn interactions</li>
              <li>AI-learned patterns are stored locally in your account to improve future interactions</li>
            </ul>

            <h3>5.2 AI Model Training</h3>
            <p>We may use anonymized, aggregated, and de-identified interaction data to evaluate and improve our AI system prompts, tool configurations, and overall Service quality. This processing involves removing all personally identifiable information before any analysis.</p>
            <p>We do not provide your identifiable personal data to third-party AI providers for the purpose of training their foundation models. Our contractual agreements with AI providers (Anthropic, Google) include data processing terms that restrict their use of customer data for model training.</p>
            <p>However, AI providers may process and temporarily cache conversation data as part of providing inference services, subject to their respective data processing agreements and retention policies.</p>

            <h3>5.3 Automated Decision-Making</h3>
            <p>The Service involves AI-assisted recommendations and automated processing, including:</p>
            <ul>
              <li>Automatic categorization of expenses and receipts</li>
              <li>Suggested invoice amounts based on time entries and historical patterns</li>
              <li>Task priority suggestions and deadline recommendations</li>
              <li>Email importance scoring and action item extraction</li>
              <li>Smart scheduling suggestions based on calendar patterns</li>
            </ul>
            <p>These features provide suggestions and drafts for your review. A human-in-the-loop principle applies to all significant actions: the Service will not send invoices, create calendar events, modify contacts, or execute financial actions without your explicit confirmation. You have the right to contest automated decisions and request human review under Article 22 of the GDPR.</p>

            <h2>6. Data Sharing and Third Parties</h2>

            <h3>6.1 Service Providers (Data Processors)</h3>
            <p>We share personal data with the following categories of service providers who process data on our behalf under data processing agreements:</p>
            <ul>
              <li><strong>Cloud infrastructure:</strong> Supabase (database and authentication hosting, EU region)</li>
              <li><strong>AI model providers:</strong> Anthropic (Claude API for conversational AI), Google Cloud (Gemini API for AI processing, Cloud Vision API for OCR)</li>
              <li><strong>Analytics:</strong> anonymized usage data with analytics providers for product improvement</li>
              <li><strong>Communication:</strong> email delivery services for sending invoices and notifications</li>
            </ul>

            <h3>6.2 Third-Party Integrations</h3>
            <p>When you connect integrations (Google Calendar, Gmail), data flows between Leiko and Google according to Google&apos;s terms and our integration requirements. You can review and revoke access at any time. Our use of Google user data complies with Google API Services User Data Policy, including the Limited Use requirements.</p>

            <h3>6.3 Other Disclosures</h3>
            <p>We may disclose personal data in the following circumstances:</p>
            <ul>
              <li><strong>Legal compliance:</strong> when required by law, regulation, legal process, or governmental authority</li>
              <li><strong>Safety and rights protection:</strong> to protect the safety, rights, or property of Leiko, our users, or the public</li>
              <li><strong>Business transfers:</strong> in connection with a merger, acquisition, reorganization, bankruptcy, or sale of all or part of our assets, where personal data may be transferred as a business asset</li>
              <li><strong>With your consent:</strong> when you explicitly authorize disclosure to a specific third party</li>
            </ul>
            <p>We do not sell your personal data. We do not share personal data with advertisers or for advertising purposes.</p>

            <h2>7. International Data Transfers</h2>
            <p>Our primary data storage is within the European Union (Supabase, EU region). However, certain processing activities involve transfers to countries outside the EEA:</p>
            <ul>
              <li><strong>AI processing:</strong> Conversation data is transmitted to Anthropic (United States) and Google (United States) for AI inference. These transfers are protected by Standard Contractual Clauses (SCCs) and/or the EU-US Data Privacy Framework, where applicable.</li>
              <li><strong>Ancillary services:</strong> certain operational tools and services may involve data processing in jurisdictions outside the EEA.</li>
            </ul>
            <p>We implement appropriate safeguards for all international transfers, including Standard Contractual Clauses approved by the European Commission, supplementary measures as necessary following transfer impact assessments, and contractual data protection provisions with all recipients.</p>

            <h2>8. Data Retention</h2>
            <p>We retain your personal data for as long as necessary to provide the Service and fulfill the purposes described in this policy. Specific retention periods are as follows:</p>
            <ul>
              <li><strong>Account data:</strong> retained for the duration of your account and up to 30 days after account deletion to allow for recovery</li>
              <li><strong>Conversation and chat data:</strong> retained for the duration of your account. You may delete individual conversations at any time.</li>
              <li><strong>Invoice and financial data:</strong> retained for a minimum of 6 years after the relevant fiscal year, as required by Finnish accounting legislation (Kirjanpitolaki)</li>
              <li><strong>Receipt and expense data:</strong> retained for a minimum of 6 years after the relevant fiscal year for tax compliance</li>
              <li><strong>AI-learned patterns:</strong> retained until you delete them or delete your account</li>
              <li><strong>Voice recordings:</strong> processed for transcription and deleted within 24 hours. Transcriptions are retained as chat data.</li>
              <li><strong>Usage analytics:</strong> retained in anonymized, aggregated form indefinitely</li>
              <li><strong>Server logs:</strong> retained for up to 90 days for security and debugging purposes</li>
            </ul>
            <p>After the applicable retention period, data is either securely deleted or irreversibly anonymized.</p>

            <h2>9. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal data, including:</p>
            <ul>
              <li>Encryption in transit (TLS 1.2+) and at rest (AES-256)</li>
              <li>Row-level security in our database ensuring users can only access their own data</li>
              <li>OAuth 2.0 for third-party integrations with minimal necessary scopes</li>
              <li>Regular security assessments and vulnerability monitoring</li>
              <li>Access controls limiting employee access to personal data on a need-to-know basis</li>
              <li>Incident response procedures for data breach detection, assessment, and notification</li>
            </ul>
            <p>No method of electronic storage or transmission is perfectly secure. While we strive to protect your data, we cannot guarantee absolute security.</p>

            <h2>10. Your Rights</h2>

            <h3>10.1 Rights Under GDPR (EEA/UK Users)</h3>
            <p>If you are located in the EEA or UK, you have the following rights under the GDPR:</p>
            <ul>
              <li><strong>Right of access (Art. 15):</strong> obtain confirmation of processing and a copy of your personal data</li>
              <li><strong>Right to rectification (Art. 16):</strong> correct inaccurate or incomplete personal data</li>
              <li><strong>Right to erasure (Art. 17):</strong> request deletion of your personal data, subject to legal retention obligations</li>
              <li><strong>Right to restriction (Art. 18):</strong> restrict processing in certain circumstances</li>
              <li><strong>Right to data portability (Art. 20):</strong> receive your data in a structured, machine-readable format</li>
              <li><strong>Right to object (Art. 21):</strong> object to processing based on legitimate interests, including profiling</li>
              <li><strong>Right to withdraw consent (Art. 7):</strong> withdraw consent at any time for consent-based processing</li>
              <li><strong>Right regarding automated decisions (Art. 22):</strong> not be subject to solely automated decisions with legal or significant effects, and to request human review</li>
              <li><strong>Right to lodge a complaint:</strong> file a complaint with your local supervisory authority. In Finland, the supervisory authority is the Office of the Data Protection Ombudsman (Tietosuojavaltuutetun toimisto).</li>
            </ul>

            <h3>10.2 Exercising Your Rights</h3>
            <p>You can exercise many of these rights directly within the Service (e.g., viewing, editing, and deleting your data in Settings). For requests that cannot be handled through the Service, or for formal data subject access requests, contact us at privacy@leiko.ai. We will respond to verified requests within 30 days, or notify you of any extension (up to 60 additional days for complex requests) as permitted under GDPR.</p>
            <p>We may need to verify your identity before processing your request. If your request is manifestly unfounded or excessive (particularly if repetitive), we may charge a reasonable fee or refuse to act on the request, as permitted under GDPR Article 12(5).</p>

            <h2>11. Children&apos;s Privacy</h2>
            <p>The Service is not intended for individuals under the age of 16. We do not knowingly collect personal data from children under 16. If we become aware that we have collected data from a child under 16, we will take steps to delete it promptly. If you believe a child has provided us with personal data, please contact us at privacy@leiko.ai.</p>

            <h2>12. Cookies and Similar Technologies</h2>
            <p>The Service is primarily a mobile application and does not use browser cookies. We may use local storage and device identifiers for authentication and session management. If we introduce a web version of the Service, we will update this policy to address cookie usage and provide appropriate consent mechanisms.</p>

            <h2>13. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of material changes through the Service, by email, or by other appropriate means at least 14 days before the changes take effect. Your continued use of the Service after the effective date of any updated policy constitutes your acceptance of the revised terms. If you do not agree to the revised policy, you must stop using the Service and delete your account.</p>
            <p>We encourage you to review this policy periodically for the latest information on our privacy practices.</p>

            <h2>14. Contact Information</h2>
            <ul>
              <li><strong>Data Controller:</strong> Leiko AI Oy</li>
              <li><strong>Email:</strong> privacy@leiko.ai</li>
              <li><strong>Data Protection Officer:</strong> dpo@leiko.ai</li>
              <li><strong>Supervisory Authority:</strong> Office of the Data Protection Ombudsman (Tietosuojavaltuutetun toimisto), Helsinki, Finland</li>
            </ul>
            <p>This Privacy Policy is governed by the laws of Finland and the European Union, without regard to conflict of law provisions.</p>
          </div>
        </div>
      </main>
      <Footer />
      <RevealScript />
    </>
  )
}
