@AGENTS.md

# Varion Media — Agency Portfolio (Project Memory)

This is the single source of truth for project context. Always read this before suggesting any changes.

---

## Project Overview

- **Company:** Varion Media — Digital Marketing Agency
- **Live domain:** https://www.varionmedia.com (HTTPS, deployed via Vercel)
- **Owner email:** admin@varionhq.com
- **ICP:** Service professionals & coaches
- **Co-founders:**
  - **Umang Rawat** — strategy + SEO lead
  - **Mann Desai** — social + content lead

---

## Tech Stack (locked)

- **Framework:** Next.js 16 (App Router) + TypeScript — ⚠️ has breaking changes vs older Next.js (see AGENTS.md, read `node_modules/next/dist/docs/` before coding)
- **Styling:** Tailwind CSS v4
- **Hosting:** Vercel (Hobby plan, auto-deploys from `main`)
- **Database:** Supabase (planned for contact form, not yet set up)
- **Animation library (planned):** Framer Motion
- **Smooth scroll (planned):** Lenis
- **Domain registrar:** GoDaddy
- **Email:** Titan (mx1/mx2.titan.email — DO NOT TOUCH email DNS records)

---

## Brand Guidelines (locked)

### Colors
| Token | Hex | Role |
|-------|-----|------|
| Deep Navy | `#020516` | Base / background |
| White | `#FFFFFF` | Primary text |
| Electric Cyan | `#00C8E8` | Accent / CTA / links |
| Deep Blue | `#0154A0` | Secondary accent |

**Default color ratio:** 70% navy · 20% white · 10% cyan. **Dark mode is the default.**

### Fonts
- **Raleway** — headlines, brand voice. Weights: SemiBold (600), Bold (700), ExtraBold (800). Letter spacing for uppercase: 0.15–0.25em.
- **Inter** — body, UI, captions. Weights: Regular (400), Medium (500). Min size 14px digital, line-height 1.6.
- **Caveat** — sparing accent only. Max 1 instance per layout. Never below 18px. Never for body. Never in formal documents.

### Brand Identity
- **Three pillars:** Momentum · Variation · Reliable
- **Promise:** *"We don't just run campaigns. We build upward trajectories."*
- **Logo:** V-form integrated with three rising bars (different paths converging upward into growth)

### Voice
- Direct, confident, data-led
- Short sentences, active voice always
- Lead with the outcome, not the process
- Never use jargon, marketing-speak, or overpromise
- Examples:
  - ✅ "We scaled their leads by 3x in 60 days."
  - ❌ "Our innovative, synergistic approach leverages cutting-edge solutions..."

---

## Design Direction

### Client's reference websites (liked)
- **sahelichatterjee.com** — dark theme, type-forward, personal-brand-meets-premium feel
- **sahelichatterjee.com/freelance-101-academy** — black background with purple accent (we use cyan in the same role)
- **roilabs.link** — ⭐ very important reference, "amazing build". Study the structure, animations, type hierarchy, motion polish, section transitions, and overall craft. Use as the gold-standard benchmark for execution quality.

### Vibe
Dark, editorial, classy, type-forward. Cyan used like purple was on the reference — sparingly but boldly. Confident but human, not cold/corporate.

### Required UI elements / animations
- **Rotating headline** in the hero ("Digital Marketing Agency That [Drives Leads / Builds Your Personal Brand / Keeps the Pipeline Full]")
- **Animated number counters** on stats (2.1M views, 103% traffic growth, etc.)
- **Scroll-triggered text reveals** — word-by-word or line-by-line
- **Stacked-scroll case study cards** — stack as you scroll
- **Marquee ticker** for services or client names
- **Magnetic CTA buttons** — subtly follow cursor on hover
- **FAQ accordions** per service sub-page
- **Service cards** with hover state revealing details
- **Subtle noise/grain overlay** on dark sections
- **Page transitions** (smooth fade/slide)
- **Animated process steps** (numbered, connecting line)
- **Custom cursor** on desktop (small cyan dot, grows on interactive elements)
- **Lazy-loaded images** with blur-up placeholders
- **Lighthouse target:** 95+

---

## Site Structure

| Page | Status | Notes |
|------|--------|-------|
| Home | Content complete (7 viewports) | Build first |
| About | TBD | Decide: dedicated page or fold Story/Team from Home |
| Services (main) | Content TBD | |
| Services / SEO | Content TBD | |
| Services / Social Media Marketing | Content TBD | |
| Services / Meta Ads | Content TBD | |
| Services / AI Automation | Content TBD | Added to scope |
| Contact | Form fields defined | Need email/phone/office location |

---

## Home Page Content (locked, from client)

### Viewport 1 — Hero
- **Anchor + Rotating headline:** "Digital Marketing Agency" + rotating: "That Drives Leads for Your Business" / "That Builds Your Personal Brand" / "That Keeps the Sales Pipeline Full"
- **Sub-headline:** "Your next 10 clients are online right now. We make sure they find you through SEO, Social Media, and Paid Ads that actually deliver results."
- **CTA:** "Book a Free Strategy Call"

### Viewport 2 — Video Testimonial
- **Label:** "What Our Clients Say"
- **Video:** YouTube embed (Dr. Harel Papikian, Licensed Clinical Psychologist & Couples Therapist, LA, CA) — URL needed
- **Pull quote 1:** "The pattern I noticed with other agencies was overpromising and underdelivering. With Umang, I was always impressed by how professional and dedicated he was."
- **Pull quote 2:** "My Instagram account had only 2,000 followers and we got 700,000 views on a single video — I was mind blown."
- **Summary line:** Dr. Harel highly recommends Varion Media to any business looking to build a strong social media presence and attract active, engaged potential clients.

### Viewport 3 — Services (one-paragraph teasers)
- **SEO** — Show up when your ideal clients are actively searching for you on Google. We build your organic presence to generate consistent, high-intent leads.
- **Social Media Marketing** — Turn your social media profile into a trust-building machine. We create content that builds your personal brand, grows your audience, and keeps potential clients engaged until they're ready to buy.
- **Meta Ads** — Stop wasting ad spend on the wrong audience. We run targeted campaigns that bring you qualified leads at the right cost and maximize your return on every dollar spent.
- **AI Automation** — Work smarter, not harder. We build custom AI tools — from CRM dashboards to writing agents — that save your team's time, cut operational costs, and improve output without hiring more people.

### Viewport 4 — Case Studies (4 total)
1. **Dr. Harel Papikian** (Clinical Psychologist & Couples Therapist, LA) — 2 reels: 2.1M and 1.2M views on 2K-follower account; transformed brand-new IG into client-attracting platform
2. **CA Amol Jain** (CA Educator, V'smart Academy) — 8,028 → 17,600 followers in 4 months; 947K+ views/month
3. **Megha Kapoor** (Online Fitness Coach) — 314 leads month 1, ₹48 CPL, ₹64K revenue on ₹15,182 ad spend, 4.2x ROI
4. **VSI Jaipur** (CA/CMA Coaching Institute, Jaipur) — Organic traffic 496K → 1.01M in 12 months (103% growth), 73K+ keywords ranking, 47% in top 5

### Viewport 5 — Story / Mission + Team
- **Story:** Varion Media was built on one observation — most service professionals are exceptional at what they do, but invisible online. We started with a simple belief: great expertise deserves to be found. Today we work with service professionals and coaches to build their online presence, generate consistent leads, and grow their business through strategies that are built around real results — not vanity metrics.
- **Team:**
  - **Umang Rawat** — Co-Founder. Strategy and SEO brain. Leads client strategy, search growth, ensures every campaign is built around measurable outcomes.
  - **Mann Desai** — Co-Founder. Social media and content execution. Leads content strategy, video production, social growth across all accounts.

### Viewport 6 — Clients
- **Headline:** "Brands We've Worked With"
- **Logo strip:** 6-10 client logos in horizontal scrolling row, transparent bg

### Viewport 7 — Contact CTA
- **Heading:** "Let's talk about your business & build a strategy that actually works"
- **Form fields:** Name, Email, Business Type, Message
- **Submit button:** "Book My Free Strategy Call"

---

## Assets & Info Still Needed

### Blockers (cannot build without these)
- [ ] **Logo file** (PNG/SVG)
- [ ] **"Book a call" link** (Calendly / Cal.com / WhatsApp URL)
- [ ] **Contact email** (likely admin@varionhq.com or hello@varionmedia.com — confirm)
- [ ] **Social media links** (Instagram, LinkedIn, X, etc.)

### Nice-to-haves (build with placeholders, swap in later)
- [ ] Team photos (Umang, Mann)
- [ ] 6-10 client logos for the strip
- [ ] YouTube video URL for Dr. Harel testimonial
- [ ] Case study client photos / visuals

### Content still to write
- [ ] About page (dedicated or fold into Home)
- [ ] Services main page
- [ ] SEO sub-page
- [ ] Social Media sub-page
- [ ] Meta Ads sub-page
- [ ] AI Automation sub-page
- [ ] Contact page email / phone / location

---

## Workflow

- Develop on a feature branch (convention: `claude/{descriptor}`)
- Merge to `main` → Vercel auto-deploys to varionmedia.com
- Every push to a feature branch generates a Vercel preview URL
- `varionmedia.com` → 307 redirects to `www.varionmedia.com`
- **Never push to `main` directly without explicit permission**

---

## DNS (GoDaddy) — current records

**Vercel-related (managed by us):**
- A `@` → `216.198.79.1`
- CNAME `www` → `6807c12233aec83a.vercel-dns-017.com`

**DO NOT TOUCH these existing records:**
- NS `@` → `ns69.domaincontrol.com` / `ns70.domaincontrol.com`
- MX → `mx1.titan.email` (priority 10), `mx2.titan.email` (priority 20) — Titan email
- CNAME `secureserver1._domainkey` and `secureserver2._domainkey` — DKIM
- CNAME `_domainconnect` — GoDaddy domain connect
- CNAME `69876574` → `google.com` — Google domain verification
- TXT records (Google verification, SPF for Titan)

---

## GitHub / Vercel

- **GitHub repo:** `varionmedia/agency-portfolio`
- **Default branch:** `main`
- **Claude GitHub App:** installed with read/write access to this repo
- **Vercel project:** `agency-portfolio`
- **Vercel plan:** Hobby (free)
- **Live URL:** https://www.varionmedia.com
- **Vercel preview URL:** `agency-portfolio-alpha-ten.vercel.app`

---

## Future Plans (post-launch)

### 1. Brand Guidelines Microsite
- Pages: `/brandguidelines/varionmedia`, `/brandguidelines/{client-name}` (e.g., `/brandguidelines/netflix`)
- Each is a single HTML file converted to a Next.js page
- Lets us share brand guideline links with anyone
- HTML for Varion Media's brand guidelines is already drafted (uses Raleway + Inter + Caveat, navy + cyan, includes pillars, logo rules, color swatches, type scale, voice rules, designer brief checklist)

### 2. Dashboard Integration
- Being built in a separate Claude Code session
- Same stack: Next.js + Vercel + Supabase
- Will be merged in later — options:
  - **A:** Mounted at `/dashboard` route on this site
  - **B:** Separate subdomain `dashboard.varionmedia.com`
  - **C:** Full repo merge
- Decision pending based on dashboard purpose and audience

### 3. Live Social Proof on Client Cards
- Fetch Instagram data (profile picture, username, bio, follower count) for client cards
- Use Supabase + scheduled refresh (NOT live on page load — too fragile)
- Each client needs to authorize Instagram API access once
- More authentic than static testimonial images

### 4. Supabase Setup
- For contact form submissions
- Also potential home for live social proof data refresh

---

## Recommendations Already Made

- **Build Home first** (it has the most complete content) → deploy → iterate → then build the rest
- **Use placeholders** for team photos / client logos / YouTube video / case study visuals — swap in later
- **Animation stack:** Framer Motion + Lenis (smooth scroll)
- **SEO-ready from day one:** proper meta tags, OG images, sitemap, structured data
- **Accessibility baseline:** WCAG AA (important for an agency that does this work)
- **Contact form:** multi-step, animated, replies to confirm (not just a basic form)
