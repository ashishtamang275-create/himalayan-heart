## Plan: Rewrite EBCCostPage.tsx for SEO-Optimized Cost Content

Update `src/pages/EBCCostPage.tsx` to match the exact title, meta description, H1, and 8 H2 section structure requested. Keep existing imports, Navbar, Footer, WhatsAppButton, breadcrumb, FAQ schema, and final CTA — only the Helmet tags, H1, and middle content sections change.

### 1. Helmet meta updates

Replace current `<title>` and `<meta name="description">` with exact strings:
- Title: `Everest Base Camp Trek Cost 2026 — Complete Breakdown ($800–$2,500)`
- Description: `How much does Everest Base Camp trek cost in 2026? Full breakdown: permits $60, Lukla flights $350, guide fees, teahouse costs. Budget $800 vs luxury $2,500. Book direct with licensed local guide and save 30-50% vs agencies.`
- Keep existing FAQ JSON-LD schema.
- Add `<link rel="canonical" href="https://ashish-tamang.com.np/everest-base-camp-cost" />` for SEO consistency with site convention.

### 2. H1 update

Change H1 to exactly: `Everest Base Camp Trek Cost 2026 — Complete Breakdown`

Keep the existing intro paragraph below it (still relevant), or lightly tighten it.

### 3. Restructure body into 8 H2 sections

Replace the current middle content (between intro and "Related Resources") with these 8 H2 sections, each ≥80 words of original, number-rich content. No verbatim copying from competitors (per project memory).

**H2 1 — "How Much Does EBC Trek Cost in 2026?"**
Opening summary + cost-category overview table (Permits, Flights, Guide, Porter, Accommodation, Food, Insurance, Gear, Tips → typical $ range column). Reuse current table data, retitled and tightened.

**H2 2 — "Nepal Trekking Permit Costs"**
Sagarmatha National Park Entry Permit NPR 3,000 (~$25 USD) for foreigners, NPR 1,500 SAARC nationals. Khumbu Pasang Lhamu Rural Municipality permit NPR 2,000 (~$17) replacing TIMS in Khumbu region as of 2018. Where to obtain (Kathmandu Tourism Board / Monjo checkpoint), what ID is required, and that licensed operators handle this end-to-end. Cross-link to `/trekking-permits-nepal`.

**H2 3 — "Kathmandu to Lukla Flight Cost"**
$150–$180 USD one-way per person on Tara Air / Summit Air / Sita Air, ~$300–$360 round trip. Note 2024–2026 seasonal Ramechhap (Manthali) departures during peak Mar–May / Oct–Nov, requiring a 4–5 hr pre-dawn drive from Kathmandu. Helicopter shared charter option ~$500 per seat one-way. Weather delays, baggage limits (10 kg + 5 kg hand). Why bookings should be made early.

**H2 4 — "Guide and Porter Fees"**
Licensed guide $25–$35/day, porter $20–$25/day (carries up to 25 kg, often shared between two trekkers — ~$10–$13 each). Guide-porter combo $30/day. Daily rates typically include guide's food, lodging, insurance, and domestic flight. Why hiring a licensed local guide directly (vs an international agency) keeps money in Nepal, ensures fair wages, and saves 30–50%. Mention government licensing requirement effective April 2023.

**H2 5 — "Teahouse Accommodation and Food Costs"**
Twin-share teahouse rooms $5–$10/night at lower altitudes (Phakding, Namche), rising to $10–$20/night at Lobuche / Gorak Shep. Meals: dal bhat $6–$10, momos $5–$8, breakfast $4–$8. Plan $30–$40/day for food at higher elevations where prices double due to porter-carried supplies. Bottled water $2–$5 (use purification tablets / SteriPEN to save). Total accommodation + food per 12-day trek: $400–$600.

**H2 6 — "Budget EBC Trek Cost vs Luxury"**
Side-by-side comparison table (Budget ~$800–$1,200 / Standard ~$1,500–$2,000 / Luxury ~$2,500–$4,000+). Budget = group teahouse trek booked locally, shared porter, basic gear rental. Standard = private guide/porter, mid-range teahouse, insurance included. Luxury = Yeti Mountain Home / Everest Summit Lodges, helicopter return from Gorak Shep, premium gear. Brief paragraph on what each tier actually feels like on the trail.

**H2 7 — "Hidden Costs Nobody Tells You About"**
Hot showers $3–$8 (gas-heated above Namche), Wi-Fi via Everest Link card $20–$30, device charging $2–$5 per hour, bakery items in Namche $3–$8, Snickers/Pringles $4–$7 at altitude. Tips: $10–$15/day for guide, $7–$10/day for porter (industry standard). Nepal tourist visa $30/15-day or $50/30-day on arrival. Travel insurance with helicopter rescue $80–$150. Realistic extra budget: $200–$400.

**H2 8 — "Why Booking Direct Saves You 30-50%"**
International agencies markup local operator pricing 30–50% to cover overseas marketing, sales commissions, and corporate overhead. Booking directly with a Kathmandu-based licensed guide (like Go Nepal Adventure) means the same itinerary, same guide, same teahouses — at $1,200 instead of $1,800. 100% of payment stays in Nepal's local economy. Direct WhatsApp communication, custom dates, no group surcharges. Closing CTA line into the existing WhatsApp/Trek detail buttons.

### 4. Preserve existing structure

Keep these unchanged:
- Imports, breadcrumb nav
- FAQ JSON-LD schema (still relevant)
- "Related Resources" links section
- "Related Trek Packages" section
- Final "Get a Free EBC Cost Estimate" CTA card
- Navbar, Footer, WhatsAppButton

### Technical notes

- Single file edit: `src/pages/EBCCostPage.tsx`
- All content original (no competitor copying — per project memory rule)
- Prices reflect 2026 reality (Khumbu Pasang Lhamu permit replaced TIMS in Khumbu, current Lukla flight pricing, government guide-mandate post-2023)
- Each section ≥80 words, uses concrete dollar/NPR figures
- Keep existing Tailwind classes (`text-muted-foreground`, `font-display`, `mt-10`, etc.) for visual consistency
- Internal link to `/trekking-permits-nepal` preserved
- Add canonical URL tag

No other files need changes.