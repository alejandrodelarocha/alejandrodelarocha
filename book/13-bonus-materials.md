# Bonus Materials

## Bonus 1: The Exact Excel Spreadsheet Template

### Quick Setup Guide

Create a new Google Sheets document (or Excel file) with these 5 tabs:

**Tab 1: Lead Pipeline**
Columns: Lead # | Date Added | Business Name | Contact Name | Phone | Email | Industry | City/State | Has Website? | Current Website | Lead Source | Status | Last Contact | Next Follow-Up | Notes | Deal Value

**Tab 2: Active Projects**
Columns: Project # | Client Name | Business Name | Deal Amount | Deposit Received | Deposit Date | Developer Assigned | Developer Cost | Project Status | Start Date | Expected Delivery | Actual Delivery | Final Payment | Final Payment Date | Profit | Notes

**Tab 3: Monthly Maintenance**
Columns: Client # | Client Name | Business Name | Monthly Fee | Plan Start | Payment Method | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec | Annual Value | Notes

**Tab 4: Revenue Dashboard**
Create a summary table with formulas pulling from the other tabs. Track: New leads, Conversations, Deals closed, Revenue, Recurring revenue, Costs, Net profit — for This Month, Last Month, and Total.

**Tab 5: Developer Roster**
Columns: Developer Name | Fiverr Profile URL | Specialty | Avg Price | Avg Turnaround | Quality Rating | Communication | Projects Completed | Notes

### Conditional Formatting Rules (for Lead Pipeline)

Set these up in Google Sheets under Format → Conditional Formatting:

| Rule | Format |
|------|--------|
| Status = "NEW" | White background |
| Status = "CONTACTED" | Light blue background |
| Status = "FOLLOW-UP" | Yellow background |
| Status = "INTERESTED" | Light green background |
| Status = "PROPOSAL SENT" | Orange background |
| Status = "NEGOTIATING" | Dark orange background |
| Status = "CLOSED-WON" | Bright green background |
| Status = "CLOSED-LOST" | Light red background |
| Status = "NOT QUALIFIED" | Gray background |

### Key Formulas

**Profit calculation (Active Projects tab):**
`=D2-H2` (Deal Amount minus Developer Cost)

**Days since last contact (Lead Pipeline):**
`=IF(M2="","Never",TODAY()-M2)`

**Monthly recurring revenue total (Maintenance tab):**
`=SUMPRODUCT((G2:R100="Paid")*D2:D100)` (counts only paid months)

**Revenue Dashboard automatic totals:**
Use `COUNTIF` and `SUMIF` formulas to pull data from other tabs.

---

## Bonus 2: Scripts & Templates

### Cold Call Script

> **YOU:** "Hi, is this [Name]? Hey [Name], my name is [Your Name] and I help local businesses like [Business Name] get professional websites that bring in more customers. I noticed you don't currently have a website [OR your website could use a refresh] — is that something you've been thinking about?"
>
> **IF YES:** "Awesome! Tell me a bit about your business — what's your main service and who's your typical customer?"
>
> *[Listen and ask follow-up questions for 2-3 minutes]*
>
> "That's great. I've built websites for several [their industry] businesses in the area. Would you like to see some examples? I can send you a few screenshots right now."
>
> *[Send portfolio examples]*
>
> "Based on what you're telling me, I think a [3-5 page] site would be perfect. It would have [list key pages and features]. Want me to put together a quick proposal?"
>
> **IF NOT NOW:** "Totally understand! When would be a better time to chat about it? I can put a reminder on my calendar."
>
> **IF NOT INTERESTED:** "No problem at all. If anything changes or you know someone who needs a website, keep my number. Have a great day, [Name]!"

### Cold Email Templates

**Template 1: The Direct Approach**

> Subject: Website for [Business Name]?
>
> Hi [Name],
>
> I found [Business Name] while looking for [industry] businesses in [city]. I noticed you don't have a website yet — is that something you've been meaning to get done?
>
> I help local businesses get online with professional websites that actually bring in customers. Here's an example of one I recently did for a [similar business]: [screenshot or link]
>
> If you're interested, I'd love to have a quick 5-minute chat. No obligation.
>
> [Your Name]
> [Phone Number]

**Template 2: The Problem Solver**

> Subject: Quick thought about [Business Name]
>
> Hi [Name],
>
> When I searched for "[their service] in [city]" on Google, [Business Name] was hard to find. That means potential customers who are actively looking for what you offer might be going to your competitors instead.
>
> A professional website can fix that. I help businesses like yours get found online and turn visitors into customers.
>
> Would you be open to a quick chat about how we could get [Business Name] showing up in search results?
>
> [Your Name]
> [Phone Number]

**Template 3: The Social Proof**

> Subject: How [similar business] got 30+ new customers from their website
>
> Hi [Name],
>
> I recently helped a [their industry] business in [nearby city] launch a new website, and they've gotten over 30 new customer inquiries in the first month.
>
> I'd love to help [Business Name] see similar results. Your business looks great — with a strong online presence, you could reach a lot more people.
>
> Can I show you what we did for them? Just 5 minutes of your time.
>
> [Your Name]
> [Phone Number]

**Template 4: The Compliment**

> Subject: Impressed by [Business Name]
>
> Hi [Name],
>
> I came across [Business Name] and wanted to say — you've clearly built something special. Your [Google reviews / photos / reputation] are impressive.
>
> I couldn't help but notice your online presence doesn't quite match the quality of your actual business. A modern, professional website could bridge that gap and help you reach even more customers.
>
> I specialize in websites for [their industry] businesses. Would you be interested in seeing what a fresh online presence could look like for [Business Name]?
>
> [Your Name]
> [Phone Number]

**Template 5: The Re-Engagement (for past leads)**

> Subject: Still thinking about a website for [Business Name]?
>
> Hi [Name],
>
> We chatted a while back about getting a professional website for [Business Name]. I know the timing wasn't right then, but I wanted to check back in.
>
> I've since done some great work for businesses similar to yours and I'd love to show you what's possible. Plus, I'm currently running a special on new website projects.
>
> Worth a quick 5-minute chat?
>
> [Your Name]
> [Phone Number]

### Follow-Up Email Sequence

**Follow-Up 1 (Day 3 after initial email):**

> Subject: Re: [Original Subject]
>
> Hi [Name],
>
> Just bumping this to the top of your inbox. I know you're busy running [Business Name]!
>
> Quick question — would a professional website that brings in new customers be valuable for your business right now?
>
> If so, I'd love to chat for 5 minutes. If not, no worries at all.
>
> [Your Name]

**Follow-Up 2 (Day 7):**

> Subject: Re: [Original Subject]
>
> Hi [Name],
>
> Last follow-up, I promise! I just finished a website for a [their industry] business in [nearby area] and thought of you.
>
> [Attach screenshot of relevant portfolio piece]
>
> If this is something you'd want for [Business Name], just reply "interested" and I'll set up a quick call.
>
> [Your Name]

**Follow-Up 3 (Day 14 — The Breakup Email):**

> Subject: Should I close your file?
>
> Hi [Name],
>
> I haven't heard back, so I'm guessing the timing isn't right. No problem at all — I'll remove you from my follow-up list.
>
> If you ever want to explore getting a professional website for [Business Name], my door is always open. Just reply to this email or call me at [Phone Number].
>
> Wishing you all the best with [Business Name]!
>
> [Your Name]

*(Fun fact: the "breakup email" often gets the highest response rate of any follow-up. People respond when they think they're about to lose an opportunity.)*

### Proposal Template

> # Website Proposal
>
> **Prepared for:** [Client Name], [Business Name]
> **Prepared by:** [Your Name/Agency Name]
> **Date:** [Date]
>
> ---
>
> ## Understanding Your Needs
>
> Based on our conversation, [Business Name] needs a professional online presence that:
> - [Need 1 — e.g., "Showcases your menu and atmosphere"]
> - [Need 2 — e.g., "Makes it easy for customers to find your location and hours"]
> - [Need 3 — e.g., "Allows online reservation requests"]
>
> ## What We'll Build
>
> A stunning, mobile-responsive website with:
>
> | Page | Description |
> |------|-------------|
> | Homepage | Eye-catching design with your brand, call-to-action, and key info |
> | About | Your story, team, and what makes you unique |
> | Services/Menu | Detailed showcase of what you offer |
> | Gallery | Professional photos of your [work/location/products] |
> | Contact | Address, map, phone, email, and contact form |
>
> **Key Features:**
> - Mobile-responsive (looks perfect on phones and tablets)
> - Fast loading speed
> - Click-to-call phone button
> - Google Maps integration
> - Contact form
> - Social media links
> - Basic SEO setup
>
> ## Examples of Our Work
>
> [Screenshot 1 — similar industry]
> [Screenshot 2 — similar industry]
> [Screenshot 3 — impressive design]
>
> ## Investment Options
>
> | Package | What's Included | Price |
> |---------|----------------|-------|
> | **Professional** (Recommended) | 5-page website, all features above, 2 rounds of revisions | $2,500 |
> | Premium | 7-page website, all features, blog setup, 3 rounds of revisions | $3,500 |
>
> ## Monthly Maintenance (Optional but Recommended)
>
> | Plan | Price | Includes |
> |------|-------|----------|
> | Standard | $149/mo | Hosting, security, backups, 3 content changes/month |
>
> ## Timeline
>
> 7-10 business days from deposit receipt to launch.
>
> ## Payment
>
> 50% deposit to begin — 50% upon your approval of the finished website.
>
> ## Next Step
>
> Reply "Let's go!" and I'll send the deposit invoice right away.
>
> ---
>
> [Your Name] | [Phone] | [Email]

### Client Contract Template

> # Website Development Agreement
>
> **Date:** _______________
>
> **Client:** _______________
> **Business:** _______________
> **Email:** _______________
> **Phone:** _______________
>
> **Provider:** _______________
> **Email:** _______________
> **Phone:** _______________
>
> ## 1. Scope of Work
>
> Provider will design and develop a website for Client consisting of:
> - Pages: _______________
> - Features: _______________
> - Number of revision rounds included: _______________
>
> ## 2. Timeline
>
> Estimated delivery: _______ business days after deposit received and all client materials provided.
>
> ## 3. Investment
>
> - Total project fee: $_______
> - Deposit (50%): $_______ — due before work begins
> - Final payment (50%): $_______ — due upon client approval
>
> ## 4. Monthly Maintenance (if applicable)
>
> - Monthly fee: $_______/month
> - Includes: _______________
> - Can be cancelled with 30 days written notice
>
> ## 5. Client Responsibilities
>
> Client will provide all necessary content (text, images, logos) within 5 business days of deposit payment. Delays in content delivery may extend the project timeline.
>
> ## 6. Revisions
>
> _______ rounds of revisions are included. Additional revisions will be billed at $75/hour.
>
> ## 7. Ownership
>
> Upon receipt of full payment, Client owns all rights to the completed website design and content. Provider retains the right to showcase the website in their portfolio.
>
> ## 8. Cancellation
>
> If Client cancels after work has begun, the deposit is non-refundable. Any work completed will be delivered to the Client.
>
> ## 9. Agreement
>
> By submitting the deposit payment, Client agrees to the terms outlined in this agreement.
>
> **Client Signature:** _______________ **Date:** _______________
>
> **Provider Signature:** _______________ **Date:** _______________

---

## Bonus 3: Fiverr Seller Directory Guide

### How to Find the Best Lead Sellers

**Search Terms:**
1. "small business leads"
2. "Google Maps scraping"
3. "b2b leads no website"
4. "local business contact list"
5. "business leads [your target industry]"
6. "web design client leads"

**Filters to Apply:**
- Seller Level: Level 2 or Top Rated
- Rating: 4.7 stars or higher
- Reviews: 50+ minimum (200+ preferred)
- Delivery: 1-3 days

**Questions to Ask Before Ordering:**
1. "Can you target businesses without websites or with outdated ones?"
2. "What information is included? (Name, phone, email, business type)"
3. "How fresh is the data?"
4. "What's your accuracy rate?"
5. "Can you target specific cities/states?"
6. "Do you offer ongoing/recurring orders at a discount?"

### How to Find Reliable Website Developers

**Search Terms:**
1. "WordPress website design"
2. "business website development"
3. "Wix website design"
4. "Squarespace website"
5. "responsive website design"
6. "[industry] website" (e.g., "restaurant website")

**Filters to Apply:**
- Seller Level: Level 2 or Top Rated
- Rating: 4.8 stars or higher
- Reviews: 100+ minimum
- Delivery: 3-7 days

**Questions to Ask Before First Order:**
1. "Can you show me 3-5 recent websites you've built for businesses?"
2. "What platform do you build on? (WordPress, Wix, custom)"
3. "What's your price for a 5-page business website?"
4. "How many revisions are included?"
5. "What's your turnaround time?"
6. "Do you offer a discount for regular/bulk orders?"
7. "Will the site be mobile-responsive?"
8. "Do you set up contact forms and Google Maps?"

### Red Flags to Avoid

**For Lead Sellers:**
- Reviews mention "many bounced emails" or "outdated data"
- They can't specify targeting criteria
- Very low prices (under $10 for 500+ leads) — usually recycled junk
- New account with few reviews
- Template responses to your questions (not personalized)

**For Developers:**
- Portfolio shows only one style or template
- Can't provide live URLs of past work
- Unrealistically fast delivery promises (quality websites take 3-7 days minimum)
- Won't answer specific technical questions
- Reviews mention missed deadlines or poor communication
- No revision policy

---

## Bonus 4: 30-Day Quick Start Challenge

### Your Day-by-Day Action Plan

**WEEK 1: SETUP**

**Day 1: Mindset**
- Read Chapters 1-3 of this book
- Write down your monthly income goal
- Tell one person what you're starting (accountability matters)

**Day 2: Spreadsheet**
- Create your Excel/Google Sheets Lead Tracker using the template in Chapter 5
- Set up all 5 tabs
- Add conditional formatting
- Bookmark it in your browser

**Day 3: Developers**
- Go to Fiverr and search for website developers
- Message 10 developers with the questions from Bonus 3
- Compare responses and shortlist your top 3-5

**Day 4: Portfolio**
- Ask your top developer to share their 5-10 best websites
- Take screenshots of the best ones
- Create a simple portfolio (Google Drive folder, PDF, or saved images on your phone)
- Optional: Pay a developer $100-$150 to build a sample site for a fake business

**Day 5: Scripts**
- Customize the cold call script (Bonus 2) with your name and details
- Customize 2-3 email templates
- Practice the sales script out loud 5 times (yes, really)

**Day 6: Lead Source Setup**
- Go to Fiverr and find 3-5 lead sellers
- Message each one with the vetting questions from Bonus 3
- Join 10-15 Facebook Groups for small business owners

**Day 7: Rest & Review**
- Review everything you've set up
- Make sure your spreadsheet, portfolio, and scripts are ready
- Place your first Fiverr lead order (50-100 leads, $25-$75)

---

**WEEK 2: FIRST OUTREACH**

**Day 8: Import Leads**
- When your Fiverr leads arrive, import them into your spreadsheet
- Categorize by industry and whether they have a website

**Day 9: First Emails**
- Send 15 outreach emails using your templates
- Log each one in your spreadsheet
- Status: CONTACTED

**Day 10: More Emails + First Calls**
- Send 15 more emails
- Make 5 phone calls (scariest day — but you'll survive)
- Log everything

**Day 11: Follow-Up Day**
- Follow up on Day 9 emails (3-day follow-up)
- Send 10 new outreach emails
- Make 5 more calls

**Day 12: Facebook Groups**
- Spend 30 minutes engaging in Facebook Groups
- Comment on 10+ posts helpfully
- Respond to any "I need a website" posts

**Day 13: Google Maps**
- Spend 1 hour searching Google Maps for businesses without websites
- Add 20-30 new leads to your spreadsheet
- Send outreach emails to 10 of them

**Day 14: Weekly Review**
- Count: How many leads contacted? How many responded?
- Update your Revenue Dashboard
- Celebrate any conversations you've had — you're in the game!

---

**WEEK 3: CONVERSATIONS & PROPOSALS**

**Day 15: Follow-Up Blitz**
- Send follow-up #2 to anyone who hasn't responded
- Call anyone who opened your email but didn't reply
- Respond to any new conversations

**Day 16-17: Sales Conversations**
- Have real conversations with interested leads
- Ask discovery questions (Phase 2 of the script)
- Send portfolio examples to anyone who's interested

**Day 18: Send Your First Proposal**
- Use the proposal template from Bonus 2
- Customize it for the prospect
- Send it and follow up within 24 hours

**Day 19: More Outreach**
- Send 15 new outreach emails
- Buy another batch of leads if needed
- Keep the pipeline full

**Day 20: Facebook + Google Maps**
- 30 minutes on Facebook Groups
- 30 minutes on Google Maps finding new leads
- Add all new leads to your spreadsheet

**Day 21: Weekly Review**
- Count: How many proposals sent? Any deals close?
- Identify what's working and what's not
- Adjust your approach based on results

---

**WEEK 4: CLOSE & DELIVER**

**Day 22: Close Hard**
- Follow up on every outstanding proposal
- Handle objections using Chapter 7 techniques
- Your goal: close at least 1 deal this week

**Day 23: Handle the First Deal**
- Collect the deposit
- Brief your Fiverr developer
- Send all client materials
- Update your Active Projects tab

**Day 24-25: Keep Selling**
- Don't stop outreach just because you have one deal
- Send 10 emails/day
- Make 5 calls/day
- The pipeline never stops

**Day 26-27: Review & Revise**
- Check in on your developer's progress
- Review the first draft when it comes in
- Send revision requests if needed

**Day 28: Deliver (If Ready)**
- Present the website to your client
- Collect feedback
- Request final revisions if needed

**Day 29: Pitch Maintenance**
- After the client approves the site, pitch monthly maintenance
- Use the script from Chapter 9
- Collect the final payment

**Day 30: Celebrate & Plan**
- Review your first month:
  - How many leads did you contact?
  - How many conversations?
  - How many deals?
  - How much revenue?
- Plan Month 2: what will you do more of? What will you change?
- Pat yourself on the back — you started a real business

---

### 30-Day Challenge Scorecard

Track these numbers daily:

| Metric | Goal | Your Actual |
|--------|------|-------------|
| Leads added (total) | 100+ | ___ |
| Outreach messages sent | 75+ | ___ |
| Conversations started | 15+ | ___ |
| Proposals sent | 3+ | ___ |
| Deals closed | 1+ | ___ |
| Revenue | $1,000+ | ___ |

If you hit even HALF of these numbers, you're on track. The hardest part is starting. You've already done that by reading this book.

---

## Final Words

You now have everything you need:

- **The business model** (Chapter 1-3)
- **The lead system** (Chapter 4-6)
- **The sales process** (Chapter 7)
- **The delivery method** (Chapter 8)
- **The payment structure** (Chapter 9)
- **The scaling playbook** (Chapter 10-12)
- **The templates and scripts** (right here)

The only thing standing between you and your first $3,000 deal is action. Not more reading. Not more "research." Not another YouTube video. Action.

Open your Excel spreadsheet. Buy your first batch of leads. Send your first email. Make your first call.

The money is waiting. Go get it.

---

*© 2026 — All Rights Reserved*

*Make Thousands Selling Websites, Without Knowing How*
