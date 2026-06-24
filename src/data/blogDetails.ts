export type BlogDetail = {
  excerpt: string;
  readTime: string;
  intro: string;
  keyPoints: string[];
  sections: {
    heading: string;
    body: string;
    bullets?: string[];
  }[];
  takeaway: string;
};

export const blogDetails: Record<string, BlogDetail> = {
  "building-a-multi-pipeline-trading-bot": {
    excerpt:
      "A practical engineering breakdown of how I think about multi-source signal systems, data quality, scoring, and safe automation boundaries.",
    readTime: "5 min read",
    intro:
      "Signal systems are less about one magic model and more about clean data flow. The real work is building small reliable pipelines, validating every input, and making the output easy to reason about.",
    keyPoints: [
      "Separate ingestion, enrichment, scoring, and alerting into clean stages.",
      "Keep human review in the loop before acting on high-impact decisions.",
      "Use logs, fallbacks, and confidence scores so the system is explainable.",
    ],
    sections: [
      {
        heading: "1. Start with pipeline boundaries",
        body:
          "A good automation system should not be one large script. I split it into ingestion, normalization, feature generation, scoring, and notification. This keeps failures isolated and makes debugging faster.",
        bullets: [
          "Ingestion pulls data from APIs, scrapers, or scheduled jobs.",
          "Normalization removes duplicate formats and noisy fields.",
          "Scoring combines signals into a simple confidence layer.",
        ],
      },
      {
        heading: "2. Treat data quality as a product feature",
        body:
          "Bad data makes impressive dashboards useless. Before any scoring layer, I prefer timestamp checks, missing-value guards, source health checks, and consistent schema validation.",
      },
      {
        heading: "3. Make the output boring and useful",
        body:
          "The final output should be easy to scan: what changed, why it matters, confidence level, and what action is suggested. This lowers cognitive load and helps users trust the system.",
      },
    ],
    takeaway:
      "The best signal bot is not the most complex one. It is the one that stays explainable, fails safely, and gives users enough context to make better decisions.",
  },
  "shipping-fast-as-a-two-person-studio": {
    excerpt:
      "The operating system I use for shipping client work quickly without losing quality, communication, or technical direction.",
    readTime: "4 min read",
    intro:
      "Small teams can move faster than large teams when the process is clear. The goal is not to do everything at once; it is to reduce decision friction and keep every task moving toward a visible outcome.",
    keyPoints: [
      "Define the smallest useful deliverable before writing code.",
      "Use async updates to reduce meeting overhead.",
      "Keep design, engineering, and deployment connected from day one.",
    ],
    sections: [
      {
        heading: "1. Scope the first useful version",
        body:
          "The first version should prove the core value, not cover every edge case. I usually define the must-have user flow, data model, and deployment path before UI polish.",
      },
      {
        heading: "2. Create a daily execution loop",
        body:
          "Every day needs three answers: what shipped, what is blocked, and what is next. This keeps clients confident and helps the team avoid silent delays.",
        bullets: [
          "Use short status notes instead of long meetings.",
          "Demo working screens early.",
          "Keep a visible backlog for decisions and blockers.",
        ],
      },
      {
        heading: "3. Do not separate quality from speed",
        body:
          "Fast delivery does not mean messy delivery. Reusable components, typed data, clean API boundaries, and deployment checks save time across the whole project.",
      },
    ],
    takeaway:
      "Speed comes from clarity. A small team wins when scope, communication, and engineering quality move together.",
  },
  "lessons-from-freelance-outreach": {
    excerpt:
      "What outreach taught me about positioning, trust, pain points, and writing messages people actually want to reply to.",
    readTime: "4 min read",
    intro:
      "Freelance outreach is not about sending more messages. It is about making the right person feel that you understand the problem they are already carrying.",
    keyPoints: [
      "Lead with the client's pain, not your full skill list.",
      "Make the next step small and low-pressure.",
      "Proof and clarity beat long generic pitches.",
    ],
    sections: [
      {
        heading: "1. The first line decides attention",
        body:
          "A useful opening line should show relevance immediately. Mention the exact role, post, website issue, or business context before talking about yourself.",
      },
      {
        heading: "2. Pain before solution",
        body:
          "Most decision makers do not wake up wanting a new tech stack. They want fewer delays, fewer manual tasks, more visibility, and better delivery. The message should connect your work to that business pressure.",
      },
      {
        heading: "3. Reduce the commitment",
        body:
          "Instead of asking for a long meeting, offer a quick audit, a small scoped task, or a short call. Lower risk makes it easier for the other person to say yes.",
        bullets: [
          "Keep messages short.",
          "Show one relevant example.",
          "End with a simple next step.",
        ],
      },
    ],
    takeaway:
      "Good outreach feels like diagnosis, not begging. The more specific the message, the easier it is for the client to trust you.",
  },
  "prisma-postgres-for-real-projects": {
    excerpt:
      "A production-minded view of using Prisma and PostgreSQL for real apps where schema design, migrations, and queries matter.",
    readTime: "5 min read",
    intro:
      "A database is not just storage. In real projects, it becomes the backbone of product logic, reporting, permissions, and long-term maintainability.",
    keyPoints: [
      "Design schema around product workflows, not only tables.",
      "Keep migrations reviewable and reversible where possible.",
      "Use indexes and query patterns before performance becomes a problem.",
    ],
    sections: [
      {
        heading: "1. Model workflows, not just entities",
        body:
          "For SaaS products, the schema should reflect how users actually work: organizations, roles, projects, payments, bookings, states, and audit history. This avoids painful rewrites later.",
      },
      {
        heading: "2. Keep Prisma useful but not magical",
        body:
          "Prisma makes development clean, but you still need to understand joins, indexes, transactions, constraints, and query cost. The ORM should improve safety without hiding the database completely.",
      },
      {
        heading: "3. Plan for reporting early",
        body:
          "Dashboards and analytics usually arrive after core CRUD, but they need better data structure. Storing timestamps, statuses, amounts, and ownership clearly makes reporting much easier.",
      },
    ],
    takeaway:
      "Prisma and PostgreSQL work best when the database is treated as part of product design, not as an afterthought.",
  },
  "automation-with-n8n": {
    excerpt:
      "How I think about lead generation automation with n8n, from triggers and filters to human review and follow-up workflows.",
    readTime: "4 min read",
    intro:
      "Automation should remove repetitive work, not create uncontrolled noise. A good workflow collects signals, filters low-quality data, and gives humans a clean decision point.",
    keyPoints: [
      "Start with one high-value trigger instead of automating everything.",
      "Add filters before notifications.",
      "Keep manual approval for outreach and business-critical steps.",
    ],
    sections: [
      {
        heading: "1. Pick a clear trigger",
        body:
          "A workflow needs a clean start: a form submission, new job post, inbound email, webhook, RSS item, or scheduled scan. The clearer the trigger, the easier it is to control quality.",
      },
      {
        heading: "2. Filter before sending alerts",
        body:
          "Without filters, automation becomes noise. I prefer scoring leads by platform, keywords, urgency, budget signals, and relevance before sending anything to Slack, email, or a dashboard.",
      },
      {
        heading: "3. Keep review visible",
        body:
          "The final step should show what was found, why it matched, and what the recommended next action is. This keeps the workflow explainable and prevents bad automation from scaling.",
      },
    ],
    takeaway:
      "The best n8n workflows are small, visible, and controlled. They save time without removing human judgment where it matters.",
  },
  "computer-vision-fundamentals": {
    excerpt:
      "A simple mental model for understanding computer vision projects: inputs, labels, features, models, evaluation, and UI feedback.",
    readTime: "5 min read",
    intro:
      "Computer vision feels complex, but most projects follow the same core flow: capture an image, understand what matters, detect or classify it, and present the result clearly.",
    keyPoints: [
      "The image pipeline matters as much as the model.",
      "Evaluation should match real user conditions.",
      "The UI must communicate confidence and uncertainty clearly.",
    ],
    sections: [
      {
        heading: "1. Start with the input conditions",
        body:
          "Lighting, camera angle, background, resolution, and motion can change model behavior. Before choosing a model, define the environment where the system will actually run.",
      },
      {
        heading: "2. Labels define the product",
        body:
          "If labels are unclear, the model learns confusion. Good labeling guidelines, edge-case examples, and consistent review improve the entire project.",
      },
      {
        heading: "3. Show confidence in the interface",
        body:
          "A detection box or classification label is not enough. Users need confidence, error states, and clear next actions, especially when the model is unsure.",
        bullets: [
          "Show confidence levels where useful.",
          "Let users correct wrong outputs.",
          "Design safe fallbacks for uncertain predictions.",
        ],
      },
    ],
    takeaway:
      "Computer vision is not only model work. The real product includes data quality, evaluation, and interface clarity.",
  },
};
