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

## Locked Decisions (as of build kickoff)

- **Public contact email:** `hello@varionmedia.com` (owner email `admin@varionhq.com` remains for internal/admin only)
- **Site scope (v1):** Home page only. No dedicated About page — Story + Team live inside Home V5. No service sub-pages for now.
- **Animation stack:** Framer Motion + Lenis — go premium, benchmark against `roilabs.link`
- **Contact form backend:** Deferred. Keep mailto / simple endpoint for now, migrate to Supabase later.

## Assets & Info Still Needed

### Awaiting from client (uploading)
- [ ] **Logo file** (PNG/SVG)
- [ ] **Team photos** (Umang, Mann)
- [ ] **Client logos** (6–10 for the strip)
- [ ] **YouTube URL** for Dr. Harel testimonial
- [ ] **Case study visuals** (Dr. Harel, CA Amol Jain, Megha Kapoor, VSI Jaipur)

### Pending creation by client
- [ ] **"Book a Call" link** (Calendly / Cal.com / WhatsApp) — will be wired into every CTA
- [ ] **Social media handles** (Instagram, LinkedIn, X, etc.) — accounts being created

### Optional / nice-to-have
- [ ] Office location / phone (if wanted on Contact section)

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

---

## Current Build State (last updated: Sun 2026-06-14)

### Working branch
`claude/tender-johnson-Df2N9` — all work this session. Has NOT been merged to `main`. Vercel preview rebuilds on every push.

### Stack actually installed
- Next.js **16.2.6** (App Router, Turbopack default) — see `node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md` for breaking changes. Key gotchas: `images.qualities` defaults to `[75]` only (we set `[75, 90, 100]` in `next.config.ts`); async request APIs; React 19.2; `middleware` renamed to `proxy`.
- React 19.2
- Tailwind v4 (`@tailwindcss/postcss`)
- `motion@12.40.0` (the Framer Motion successor — imports from `motion/react`)
- `lenis@1.3.23` (smooth scroll, via `lenis/react` → `ReactLenis`)

### File layout
```
app/
  layout.tsx          fonts (Raleway/Inter/Caveat via next/font), SmoothScroll wrapper, brand metadata
  page.tsx            home composition: Hero → ClientsStrip → VideoTestimonial → Services → CaseStudies → StoryTeam → ContactCTA
  globals.css         brand tokens (@theme), grain overlay, marquee, v-lines, text-stroke utilities
components/
  SiteHeader.tsx      sticky, anchor nav, "Book a Call" pill CTA (still text wordmark "Varion.Media")
  SiteFooter.tsx      4 social icons (IG, LinkedIn, YouTube, Facebook), hello@varionmedia.com, pillars
  Hero.tsx            constellation BG, rotating headline (fade+slide, NOT roll), stats counters, magnetic CTA
  ClientsStrip.tsx    white section, 7 real client SVGs, marquee, logos sized to ~112px
  VideoTestimonial.tsx  dark, two pull quotes, video placeholder card, Dr. Harel attribution
  Services.tsx        cream section, editorial 4-row index (01→04), hover state, tag chips
  CaseStudies.tsx     dark, 5 sticky-stacking cards with scroll-linked scale collapse; each card has phone-frame IG screenshot, copy+metrics+proof-gallery placeholders, alternating L/R
  StoryTeam.tsx       cream, story narrative + team layout (two level portrait placeholders with bio cards in the centre gap, each card hugs ITS OWN person's photo)
  ContactCTA.tsx      dark, vlines + spotlight + radial gradient, magnetic submit, mailto fallback
  providers/SmoothScroll.tsx   ReactLenis root, lerp 0.1 duration 1.2
  ui/Constellation.tsx canvas particle network (~190 nodes), cursor repels, IntersectionObserver pause, reduced-motion = static frame
  ui/Spotlight.tsx     cursor-following cyan halo, attaches to parent
  ui/Magnetic.tsx      spring-based magnetic wrapper for CTAs
  ui/Reveal.tsx        FadeUp + WordReveal (word-by-word stagger, EASE = [0.22,1,0.36,1])
  ui/Counter.tsx       useInView + useSpring animated number counter
public/images/
  clients/             7 SVGs: vsmart-academy, vsi-jaipur, auditguru, my-prepzone, grras, quibus-technosys, manglam-pinkwest
  instagram/           5 phone screenshots (1080×~2120, portrait): dr-harel.jpg, amol-jain.jpg, ravi-taori.jpg, megha-kapoor.jpg, vsi-jaipur.jpg
  case-photos/         dr-harel.jpg (1431×1410 real portrait, NOT IG screenshot — uploaded for testimonial section)
  logo/                EMPTY — Varion icon + wordmark SVGs not yet on disk (see "Transfer blocker" below)
next.config.ts        images: { qualities: [75,90,100], formats: ['image/avif','image/webp'] }
```

### Custom cursor: REMOVED
We had a custom cyan cursor (`components/ui/Cursor.tsx`); user disliked it. Component deleted, `has-custom-cursor` class removed from `<body>`, `cursor: none` CSS gone. Native pointer everywhere. **Do not re-add without asking.**

### Services ticker: REMOVED
The big outline-type ticker (`SEO ✦ SOCIAL MEDIA ✦ META ADS ✦ AI AUTOMATION`) was deleted entirely. User found it too tall and the ✦ icons too small. **Do not re-add.** Component `components/TickerMarquee.tsx` no longer exists.

### Current page order (top → bottom)
1. **Hero** — constellation + rotating headline + stats band + "Book a Free Strategy Call" magnetic CTA
2. **Client logos** (white section, right under hero)
3. **Video testimonial** (dark)
4. **Services** (cream, editorial index)
5. **Case studies** (dark, sticky-stack)
6. **Story + Team** (cream)
7. **Contact** (dark, spotlight + form)
8. **Footer**

### Section design memory
- **Constellation hero BG** is the signature move (chosen over aurora gradients which user called "every-SaaS-site cliché"). Cyan particles connect when near, scatter from cursor. Reads as "digital network".
- **Two-tone navy** alternation: `--color-navy` (#020516) + `--color-navy-warm` (#0a0a24) so consecutive dark sections don't blur into one wall.
- **Cream sections** (`#F2F0EA`) used for Services + Story/Team to break the navy monotony. Client logo strip is pure white.
- **Architectural vertical grid** (`.v-lines`) on dark sections instead of dot grid.
- **Cursor spotlight** on dark sections (`<Spotlight />`).
- **Grain overlay** (`.grain`) on every dark-themed section.

### Case-study cards — important details
- 5 cards: Dr. Harel, CA Amol Jain, **CA Ravi Taori** (Ravi was added after the original 4), Megha Kapoor, VSI Jaipur.
- Sticky-stacking pattern: each `<div className="sticky" style={top:`${4.5 + i*1.1}rem`}>` wraps a `<motion.article>` with scroll-linked `scale` (1 → 0.88, except last card stays 1). **Sticky lives on a transform-free wrapper, scale lives on the inner card** — putting transform on the sticky element breaks the pin (especially under Lenis).
- Layout: alternating L/R — phone frame on one side (`lg:col-span-5`), content on the other (`lg:col-span-7`), `items-start` so content sits up top.
- Phone frame is **240px wide** desktop (240px tightened so the whole card fits in viewport when pinned).
- Each card has a 3-tile "proof gallery" with labels per client:
  - Dr. Harel → Reel · Insights · DMs
  - Amol Jain → Growth · Reach · Reels
  - Ravi Taori → Reels · YouTube · Reviews
  - Megha Kapoor → Meta Ads · Leads · ROAS
  - VSI Jaipur → Search Console · Keywords · Traffic
- **Ravi Taori's metrics are placeholders** (`100K+ / 4x / 100% organic`) — client must confirm real numbers before launch.

### Hero rotating headline — implementation note
The original masked-roll (`overflow-hidden` + translateY) clipped "Drives Leads for Your Business" because that phrase wraps to 2 lines and a 1-line mask can't show it. **Current implementation:** fade+slide via `AnimatePresence` with reserved height (2 lines below `lg`, 1 line at `lg+`). Desktop size capped at `lg:text-[4rem]` so the longest phrase fits cleanly on one line.

### Team section — final layout pattern (user-approved sketch)
- Story narrative on top (left-aligned, max-w-3xl).
- Below: two photo placeholders sized at `w-[32%]` each, **on the same horizontal line** (`items-start`, no vertical stagger between photos).
- Two absolutely-positioned bio cards in the centre gap:
  - **Mann's card** — `top-[5%] right-[31%] w-[28%]` (touches Mann's right photo's left edge)
  - **Umang's card** — `top-[52%] left-[31%] w-[28%]` (touches Umang's left photo's right edge)
- **Each card binds to its own person's photo.** Earlier mistake was Mann's card near Umang's photo — confusing once real photos land.
- Mobile/tablet: stacked layout (photo, then card per person).
- Photos currently styled placeholder boxes ("Umang Rawat / Photo coming soon" + image icon).

### Sections deferred / not implemented
- ❌ AuroraBackground component (deleted; was "too SaaS")
- ❌ TickerMarquee (deleted; user didn't like)
- ❌ Custom Cursor (deleted; user wanted native)
- ❌ Process section (numbered steps + connecting line) — still on the roadmap, not started
- ❌ Service sub-pages, dedicated About page, sitemap.xml, robots.txt, OG image generation

### Recent design decisions (session timeline)
1. Scaffold: brand foundation + 7 viewports from locked client copy
2. Animation pass: added Motion/Lenis, magnetic CTAs, word-reveals, counters, sticky stacking
3. Aurora gradient BG → user rejected as too SaaS → replaced with **constellation canvas** (signature)
4. Cursor spotlight + v-lines + two-tone navy added to all dark sections
5. Client logos + IG screenshots wired in from Drive (7 logos, 5 IG portrait phone shots at 1080×2120)
6. Case-study layout iterations: landscape proofs → big portrait phones → tall portraits + 3-up metrics → stacking restored → scale-collapse added → card height reduced + top-aligned + proof gallery added → bottom clearance tuned
7. Services ticker removed; client logos enlarged + moved to right under hero on white BG
8. Custom cursor removed; native pointer restored
9. Hero rotating headline fix (fade+slide, no clipping)
10. Team layout rebuilt twice to match user sketch — final: level photos, bio card hugging each person's own photo

---

## ⚠️ Asset transfer blocker

The container's outbound network policy **blocks `drive.google.com`** for `curl` / `wget`. Three asset categories couldn't be pulled directly:
1. **Varion icon SVG** (Drive ID `1FDkSiSSHhTV-RusdQ-JsXivvFdq2IiSg`)
2. **Varion wordmark SVG** (Drive ID `12Z0Awaw75nBD96pKPM5_vlzU2GfJNA_Z`)
3. **Glokal Advertising logo SVG** (Drive ID `1-XvqtCNXXTI3D-lmIfH6In_fCiUTYROL`)

The Drive MCP server (id starts `5b5fbbea-0187-...`) returns base64 inline for small SVGs and persists oversized results to `/root/.claude/projects/.../tool-results/*.txt`. The reliable decode path is:
```python
import json, base64; from pathlib import Path
data = json.loads(Path('<persisted file>').read_text())
Path('<dest>').write_bytes(base64.b64decode(data['content']))
```

**For SVGs that come back inline (small), the cleanest workaround is to drop the file directly into chat as an attachment, OR transfer via Dropbox/WeTransfer** (non-Drive hosts that aren't blocked).

### Drive folder structure (for next session)
- Root: `https://drive.google.com/drive/folders/1DQqPMM4BKq_85XPEd8_fViAwhOsxrQ3I`
- `Varion Logos/` (id `1mJ5A7SYJf-74vip-rVywl8Q7A6myyjp0`) — icon + wordmark SVGs
- `Client Logos/` (id `1MF4IJGSv1TMo3V8g_-4SxBJGMhlvp6gB`) — 8 client SVGs (7 saved, Glokal missing)
- `Client Insta Profile/` (id `1_5J1aP7VP8X9T-BCgrA7x3iGqe_pnyYP`) — 5 portrait phone screenshots (all 5 saved)
- `Client Photos/` (id `1tPP2W6-rUC86rNI2dhfmqDEOBgOz7H2T`) — real client portrait photos (only Dr. Harel uploaded so far → saved to `public/images/case-photos/dr-harel.jpg`)

---

## Open work items (resume here)

### Blocking
- [ ] **Varion wordmark SVG** → save to `public/images/logo/wordmark.svg` and wire into `SiteHeader.tsx` (currently text "Varion.Media") and `SiteFooter.tsx`. User asked for this twice; container can't fetch from Drive; needs alternative transfer.
- [ ] **Dr. Harel real portrait** (`public/images/case-photos/dr-harel.jpg`, already on disk) — wire into `VideoTestimonial.tsx` to replace the "Video coming soon" placeholder card. Square crop (1431×1410), so it doesn't fit the case-study phone frame; the testimonial section is the right home for it.

### High-priority awaiting client
- [ ] **"Book a Call" link** (Calendly / Cal.com / WhatsApp URL). Every CTA currently anchors to `#contact`. Hardcoded in `Hero.tsx`, `SiteHeader.tsx`, `ContactCTA.tsx`.
- [ ] **CA Ravi Taori's real metrics** + headline + summary. Currently placeholder `100K+ / 4x / 100% organic`. Don't ship as-is.
- [ ] **Mann Desai + Umang Rawat portrait photos** — drop into `StoryTeam.tsx`'s placeholder boxes. Portrait orientation works best for the 4:5 frames.
- [ ] **Proof screenshots** for each case study's gallery (Reel/Insights/DMs/etc.). 15 total slots (3 per case × 5 cases). Tiles are 16:10, ready to receive images.
- [ ] **Glokal Advertising logo SVG** — last missing client logo (other 7 saved).

### Nice-to-haves
- [ ] **YouTube URL** for Dr. Harel testimonial — if/when his video lands, replace the testimonial card with `<iframe>`.
- [ ] **Office location / phone** on Contact section (still unconfirmed).

### Production readiness (not started)
- [ ] Sitemap.xml + robots.txt
- [ ] OG image (1200×630) for social shares
- [ ] Structured data (JSON-LD)
- [ ] Migrate contact form to Supabase or Resend (currently `mailto:hello@varionmedia.com`)
- [ ] Favicon (use Varion icon SVG once on disk)
- [ ] Lighthouse audit
- [ ] Pull request → review → merge to `main`

---

## Locked confirmations (do not re-ask)

- **Public contact email:** `hello@varionmedia.com` ✓
- **Owner email (internal):** `admin@varionhq.com` ✓
- **Social links** (wired in footer): IG `@varionmedia`, LinkedIn `linkedin.com/in/varion-media/` (personal URL — company page TBD), YouTube `@VarionMedia`, Facebook profile.php?id=61590373334425
- **Site scope v1:** Home page only. No About page, no service sub-pages.
- **Animation stack:** Motion + Lenis (installed, in use).
- **Contact form backend:** mailto fallback for now; Supabase later.
- **Custom cursor:** REMOVED, do not re-add.
- **Services ticker:** REMOVED, do not re-add.
- **Aurora gradient background:** REJECTED as cliché; replaced with constellation. Do not re-add.

---

## Build / test commands

```bash
cd /home/user/agency-portfolio
npm install            # if node_modules missing
npm run lint           # eslint
npx next build         # full build + type-check + static gen
npx next dev           # dev server on :3000 (Turbopack)
npx next start -p 3030 # serve production build
git push -u origin claude/tender-johnson-Df2N9   # Vercel preview rebuilds
```

## Key file references for next session

- Hero rotating phrases — `components/Hero.tsx:9-14`
- Sticky-stack scroll-collapse pattern — `components/CaseStudies.tsx` `CaseCard` component
- Phone frame component — `components/CaseStudies.tsx` `PhoneFrame`
- Team layout (final) — `components/StoryTeam.tsx` desktop block
- Constellation canvas — `components/ui/Constellation.tsx`
- Brand tokens — `app/globals.css` `@theme { ... }`
