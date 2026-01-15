import GlossaryTermPage from '@/components/GlossaryTermPage';

const NAPConsistencyGlossary = () => {
  return (
    <GlossaryTermPage
      slug="nap-consistency"
      term="NAP Consistency"
      category="local-seo"
      definition="NAP Consistency refers to ensuring that your business's Name, Address, and Phone number are exactly identical across every online platform, directory, social profile, and website where your business is listed. This uniformity is a critical ranking factor for local search and helps search engines verify your business information."
      content={{
        introduction: `NAP Consistency is one of the foundational pillars of local SEO that many businesses overlook, yet it directly impacts search engine rankings and customer trust. When your business information varies across different platforms—even slightly—it creates confusion for both search engines and potential customers. Search engines like Google use NAP information to verify that your business is legitimate and to determine which information to display in search results.

Consider this scenario: Your Google Business Profile shows "123 Main Street," your Facebook page lists "123 Main St.," and Yelp has "123 Main Street, Suite 100." While these might seem like minor variations to humans, search engines may interpret them as three different businesses or become uncertain about which information is correct. This uncertainty can significantly harm your local search rankings.

Research indicates that NAP inconsistency is one of the top negative ranking factors in local SEO. Businesses with consistent NAP information across at least 40 major directories rank an average of 16 positions higher than those with inconsistent information. In the competitive landscape of local search, this difference can mean appearing in the coveted Local Pack versus being buried on page two or beyond.`,
        sections: [
          {
            id: 'why-it-matters',
            title: 'Why NAP Consistency Matters',
            content: `NAP Consistency impacts your business in several critical ways:

**Search Engine Trust**: Google and other search engines crawl thousands of directories and websites to verify business information. When they find consistent NAP data across multiple sources, it builds confidence that your business information is accurate and trustworthy. This trust translates into higher rankings.

**Local Pack Rankings**: The Local Pack (map results) is highly sensitive to NAP consistency. Businesses with inconsistent information are less likely to appear in these prime positions, regardless of other optimization efforts.

**Customer Experience**: When customers find different phone numbers or addresses on different platforms, it creates confusion and erodes trust. They may call a disconnected number or drive to an old address, resulting in lost business and negative reviews.

**Citation Value**: Citations (mentions of your business online) are valuable ranking signals, but only when they contain accurate information. Inconsistent citations can actually harm rather than help your rankings.

**Google Knowledge Panel**: Google compiles information from multiple sources to create your knowledge panel. Inconsistent NAP can result in wrong information being displayed, or Google may not show a knowledge panel at all.

**Voice Search Optimization**: As voice search grows, NAP consistency becomes even more critical. Voice assistants rely on accurate, verified business information to provide answers to local queries.`
          },
          {
            id: 'common-variations',
            title: 'Common NAP Variations to Avoid',
            content: `Understanding what constitutes an inconsistency helps you identify and fix problems:

**Name Variations**:
- "Joe's Pizza" vs. "Joe's Pizza Inc." vs. "Joes Pizza"
- "ABC Company" vs. "A.B.C. Company" vs. "ABC Co."
- Including or excluding "LLC," "Inc.," or other business designations inconsistently

**Address Variations**:
- "Street" vs. "St." vs. "St"
- "Suite 100" vs. "#100" vs. "Ste 100"
- "Road" vs. "Rd." vs. "Rd"
- Including or excluding building/unit numbers
- Different zip code formats (12345 vs. 12345-6789)

**Phone Number Variations**:
- (555) 123-4567 vs. 555-123-4567 vs. 5551234567
- Using different phone numbers for different platforms
- Mixing local numbers with toll-free numbers
- Including or excluding country codes

**The Solution**: Choose one exact format for each element and use it everywhere without exception. Document your official NAP format and share it with anyone who might list your business online.`
          },
          {
            id: 'audit-process',
            title: 'How to Audit Your NAP Consistency',
            content: `Conducting a thorough NAP audit is the first step toward consistency:

**Step 1: Establish Your Official NAP**
Decide on the exact format for your business name, address, and phone number. This should match your Google Business Profile exactly, as this is typically the most authoritative source.

**Step 2: Identify All Citations**
Find everywhere your business is listed online:
- Major directories (Yelp, Yellow Pages, BBB, etc.)
- Industry-specific directories
- Social media profiles
- Chamber of commerce listings
- Local business associations
- Review sites
- Your own website (including footer, contact page, and about page)

**Step 3: Use Citation Tracking Tools**
Tools like Moz Local, BrightLocal, Whitespark, or Yext can scan the web and identify inconsistencies automatically. These tools check hundreds of directories simultaneously.

**Step 4: Document Inconsistencies**
Create a spreadsheet tracking each citation with:
- Platform/directory name
- Current NAP listed
- Whether it matches your official NAP
- Login credentials or update method
- Status (corrected, pending, needs attention)

**Step 5: Prioritize Corrections**
Start with the most authoritative sites (Google, Facebook, Yelp, Apple Maps) and work down to smaller directories. Major data aggregators (Acxiom, Infogroup, Localeze, Factual) should also be prioritized as they feed information to many smaller directories.`
          },
          {
            id: 'maintaining-consistency',
            title: 'Maintaining Long-Term Consistency',
            content: `NAP consistency isn't a one-time task—it requires ongoing maintenance:

**Create a NAP Style Guide**: Document your exact NAP format and share it with your team. Anyone creating listings or updating information should reference this guide.

**Claim and Verify Listings**: Claim your business on all major platforms. This gives you control over the information and prevents others from making changes.

**Set Up Monitoring**: Use tools to monitor for new citations and check existing ones periodically. New directories appear regularly, and existing information can change without your knowledge.

**Update Systematically**: When you change locations, phone numbers, or business names, create a comprehensive list of everywhere you need to update. Tackle changes methodically to ensure nothing is missed.

**Avoid Auto-Generated Listings**: Some platforms create listings automatically from data aggregators. If you see incorrect listings you didn't create, claim them and correct the information.

**Address Duplicates**: Duplicate listings on the same platform confuse search engines. Merge or delete duplicates, keeping the most established listing with reviews and history.

**Regular Audits**: Conduct comprehensive NAP audits quarterly. Even with monitoring, issues can slip through that require manual review.

**Document Changes**: Maintain a log of when and where you've made changes. This helps track progress and troubleshoot issues.`
          }
        ]
      }}
      tableOfContents={[
        { id: 'introduction', title: 'Introduction' },
        { id: 'why-it-matters', title: 'Why It Matters' },
        { id: 'common-variations', title: 'Common Variations' },
        { id: 'audit-process', title: 'Audit Process' },
        { id: 'maintaining-consistency', title: 'Maintaining Consistency' },
        { id: 'data-insights', title: 'Data Insights' },
        { id: 'related-terms', title: 'Related Terms' }
      ]}
      chartData={{
        type: 'bar',
        title: 'Impact of NAP Consistency on Local Rankings',
        data: [
          { name: 'Consistent NAP', value: 78 },
          { name: 'Minor Issues', value: 52 },
          { name: 'Major Issues', value: 31 },
          { name: 'No Management', value: 18 }
        ]
      }}
      imageUrl="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop"
      imageAlt="NAP consistency showing Name Address Phone number uniformity across business directories for local SEO"
    />
  );
};

export default NAPConsistencyGlossary;
