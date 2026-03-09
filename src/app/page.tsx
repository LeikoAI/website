import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import {
  FeatureSection,
  VisCard,
  VisBubble,
  VisChips,
} from '@/components/FeatureSection'
import { HowItWorks } from '@/components/HowItWorks'
import { Integrations } from '@/components/Integrations'
import { Changelog } from '@/components/Changelog'
import { Security } from '@/components/Security'
import { FAQ } from '@/components/FAQ'
import { Vision } from '@/components/Vision'
import { FooterCta } from '@/components/FooterCta'
import { Footer } from '@/components/Footer'
import { RevealScript } from '@/components/RevealScript'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      {/* Invoicing */}
      <div id="features">
        <FeatureSection
          label="Invoicing"
          title="Create, send, and track invoices through&nbsp;conversation"
          description="No invoice templates to hunt down. No form fields to fill. Just tell Leiko who to invoice and for what — it fills in the client details from memory, calculates the amount, and sends it."
          items={[
            { text: 'Natural language invoice creation with automatic client lookup' },
            { text: 'Track paid, pending, and overdue — all in one dashboard' },
            { text: 'Automatic follow-up reminders for unpaid invoices' },
            { text: 'Generate invoices directly from tracked time entries' },
          ]}
          gradClass="grad-a"
          visual={
            <>
              <VisCard
                head="Invoice · INV-2026-0005"
                rows={[
                  { key: 'Client', value: 'Design Studio Oy' },
                  { key: 'Amount', value: '€2,400.00' },
                  { key: 'Status', value: '● Paid', color: 'var(--green)' },
                  { key: 'Paid on', value: 'Feb 28, 2026' },
                ]}
              />
              <VisCard
                head="Invoice · INV-2026-0006"
                rows={[
                  { key: 'Client', value: 'Mika Virtanen' },
                  { key: 'Amount', value: '€1,800.00' },
                  { key: 'Status', value: '● Pending', color: 'var(--orange)' },
                  { key: 'Due', value: 'Mar 15, 2026' },
                ]}
              />
            </>
          }
        />
      </div>

      {/* Receipt capture */}
      <FeatureSection
        label="Receipt capture"
        title="Snap a photo. Done."
        description="No more shoeboxes of receipts. No manual data entry. Leiko's OCR reads the vendor, amount, date, and line items — then categorizes the expense automatically. You just confirm."
        items={[
          { text: 'Camera-based capture with Google Cloud Vision OCR' },
          { text: 'Human-in-the-loop — always confirm before saving' },
          { text: 'Automatic category assignment and expense tracking' },
        ]}
        gradClass="grad-b"
        reversed
        visual={
          <>
            <VisCard
              head="Receipt recognized"
              rows={[
                { key: 'Vendor', value: 'Starbucks' },
                { key: 'Amount', value: '€12.40' },
                { key: 'Date', value: 'Feb 22, 2026' },
                { key: 'Category', value: 'Meals & Entertainment' },
              ]}
            />
            <VisChips chips={['Confirm', 'Edit category', 'Discard']} />
          </>
        }
      />

      {/* Tasks & Projects */}
      <FeatureSection
        label="Tasks & Projects"
        title="Tasks that emerge from context — not forms"
        description="Mention something in a conversation and it becomes a tracked task. Link tasks to projects, set deadlines, assign priorities. Leiko understands when you're creating work, not just chatting."
        items={[
          { text: 'Natural language task creation with smart deadline parsing' },
          { text: 'Project hierarchy with subtasks, priorities, and time estimates' },
          { text: 'Daily Today view organizes tasks by morning and afternoon' },
        ]}
        gradClass="grad-c"
        visual={
          <>
            <VisBubble variant="user">
              Remind me to call the accountant about VAT before Friday
            </VisBubble>
            <div style={{ height: 8 }} />
            <VisCard
              head="Task created"
              rows={[
                { key: 'Task', value: 'Call accountant about VAT' },
                { key: 'Due', value: 'Friday, Feb 28' },
                { key: 'Priority', value: '● Medium', color: 'var(--orange)' },
                { key: 'Project', value: 'Accounting' },
              ]}
            />
            <VisChips chips={['Change priority', 'Add subtask']} />
          </>
        }
      />

      {/* Email intelligence */}
      <FeatureSection
        label="Email intelligence"
        title="Your inbox, summarized and actionable"
        description="Connect Gmail and Leiko surfaces what matters — deadlines, action items, meetings, invoices — from the noise. Get AI summaries of long threads without opening your email app."
        items={[
          { text: 'Gmail OAuth integration — read, search, summarize' },
          { text: 'Focus modes: all, deadlines, actions, meetings' },
          { text: 'Email summaries in your daily Today briefing' },
        ]}
        gradClass="grad-d"
        reversed
        visual={
          <>
            <VisBubble variant="user">
              What&apos;s important in my inbox today?
            </VisBubble>
            <div style={{ height: 8 }} />
            <VisBubble variant="ai">
              <>
                You have <b style={{ color: 'var(--text)' }}>2 important</b> emails:
                <br />
                1. Mika asked for a revised quote
                <br />
                2. Accountant needs Feb receipts by Friday
                <br />
                <br />
                Plus 3 order confirmations and 14 newsletters.
              </>
            </VisBubble>
            <VisChips chips={["Read Mika's email", 'Reply to accountant']} />
          </>
        }
      />

      {/* Calendar */}
      <FeatureSection
        label="Calendar"
        title="Your schedule, connected to everything&nbsp;else"
        description="Two-way Google Calendar sync. Create events, check availability, get join links — all through chat. Calendar events link to tasks and projects for a complete picture of your day."
        items={[
          { text: 'Two-way Google Calendar sync with OAuth' },
          { text: 'Create, edit, and delete events via natural language' },
          { text: 'Meeting links and one-tap join from the Today view' },
        ]}
        gradClass="grad-e"
        visual={
          <>
            <VisCard
              head="Today's schedule"
              rows={[
                { key: '11:00–12:00', value: 'Design weekly' },
                { key: '15:00–15:30', value: 'Call: Mika / quote' },
              ]}
            />
            <VisBubble variant="user" style={{ marginTop: 8 }}>
              Move the Mika call to Thursday at 14
            </VisBubble>
            <div style={{ height: 6 }} />
            <VisBubble variant="ai">
              <>
                Done. Moved &ldquo;Call: Mika / quote&rdquo; to{' '}
                <b style={{ color: 'var(--text)' }}>Thu Feb 27, 14:00–14:30</b>.
                Calendar updated.
              </>
            </VisBubble>
          </>
        }
      />

      {/* Time tracking */}
      <FeatureSection
        label="Time tracking"
        title="Log hours. Bill clients. Get&nbsp;paid."
        description="Track time by project with a quick message. Leiko knows which hours are billable and which aren't. When you're ready, generate an invoice directly from unbilled time entries."
        items={[
          { text: 'Voice or text-based time logging to projects' },
          { text: 'Billable vs non-billable separation with hourly rates' },
          { text: 'One-tap invoice generation from unbilled hours' },
        ]}
        gradClass="grad-f"
        reversed
        visual={
          <>
            <VisCard
              head="Unbilled hours · This month"
              rows={[
                { key: 'Design Studio', value: '18h · €2,160' },
                { key: 'Mika Virtanen', value: '6h · €720' },
                {
                  key: 'Internal',
                  value: '4h · non-billable',
                  color: 'var(--text3)',
                },
              ]}
            />
            <VisChips chips={['Invoice Design Studio', 'Invoice Mika']} />
          </>
        }
      />

      <HowItWorks />
      <Integrations />
      <Changelog />
      <Security />
      <FAQ />
      <Vision />
      <FooterCta />
      <Footer />
      <RevealScript />
    </>
  )
}
