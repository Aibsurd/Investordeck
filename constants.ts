import { SlideContent, SlideType } from './types';

export const SLIDES: SlideContent[] = [
  {
    id: 1,
    type: SlideType.TITLE,
    title: "ANÓTEROS LÓGOS",
    subtitle: "OS FOR THE AGENT ECONOMY",
    content: {
      heading: "Visibility. Trust. Settlement.",
      body: "Production-grade infrastructure combining GEO Audit, Causal Consensus, and USDC Micropayments for Autonomous Agents."
    }
  },
  {
    id: 2,
    type: SlideType.MARKET,
    title: "THE INFLECTION",
    subtitle: "WHY NOW?",
    content: {
      body: "The convergence of zero-cost intelligence and zero-cost gas has unlocked a new economic era. The Agent Economy was economically insolvent 3 years ago. Today, it is inevitable.",
      metrics: [
        {
          label: "INTELLIGENCE",
          value: "-99% Cost",
          detail: "Cost of Thought (LLM Tokens) has collapsed. Intelligence is now a commodity abundant enough to be wasted on loops."
        },
        {
          label: "SETTLEMENT",
          value: "< $0.01",
          detail: "Base L2 + EIP-4844 enables micro-transactions. Agents can finally settle cents without dollars in gas fees."
        },
        {
          label: "WORKFORCE",
          value: "Loop Economy",
          detail: "Software moves from linear execution (SaaS) to probabilistic loops (Agents). The workforce is now software."
        }
      ]
    }
  },
  {
    id: 3,
    type: SlideType.PROBLEM,
    title: "THE FRICTION",
    subtitle: "AGENTS ARE ECONOMICALLY STERILE",
    content: {
      points: [
        {
          title: "Invisibility by Default",
          description: "Traditional SEO is dead. Without a semantic Knowledge Graph, your business is unstructured noise to an LLM. If an agent cannot parse you, you do not exist.",
          icon: "EyeOff"
        },
        {
          title: "No Wallets. No Deal.",
          description: "Agents are currently just chatbots because they cannot close the loop. Without native settlement, they can plan a purchase but cannot execute it. They are incapable of commerce.",
          icon: "CreditCard"
        },
        {
          title: "The Liability Trap",
          description: "Enterprise cannot scale agents that guess. In supply chain or finance, a 1% hallucination rate is not a glitch. It is a lawsuit. Mathematical provenance is the only safety net.",
          icon: "AlertTriangle"
        }
      ]
    }
  },
  {
    id: 4,
    type: SlideType.SOLUTION,
    title: "THE PLATFORM",
    subtitle: "V4.1.1 PRODUCTION INFRASTRUCTURE",
    content: {
      heading: "A Unified Agent Operating System",
      body: "A complete stack. From the UAP transport layer down to APA settlement.",
      points: [
        { title: "GEO Audit Engine", description: "Real-time visibility analysis across Perplexity, Claude, and Google AI Overviews.", icon: "ScanEye" },
        { title: "APA Settlement", description: "Agent-Pay-Agent micropayments using USDC on Base L2 blockchain.", icon: "Wallet" },
        { title: "Trust Kernel", description: "PBFT Consensus and Causal Citation Tracer for mathematical truth.", icon: "ShieldCheck" },
        { title: "Agent Mesh", description: "DHT-based peer discovery and capability routing for agent swarms.", icon: "Network" }
      ]
    }
  },
  {
    id: 5,
    type: SlideType.TECH,
    title: "THE GEO ENGINE",
    subtitle: "SEO FOR THE MACHINE AGE",
    content: {
      heading: "Generative Engine Optimization (GEO)",
      body: "Proprietary engine analyzing content depth and citation probability. Ensures businesses rank in AI responses.",
      points: [
        {
          title: "Multi-Platform Audit",
          description: "Simulates queries on Perplexity, ChatGPT, and Gemini to reverse-engineer visibility algorithms.",
          icon: "Activity"
        },
        {
          title: "Knowledge Graph Extraction",
          description: "Converts unstructured HTML into self-improving semantic graphs compatible with RAG pipelines.",
          icon: "GitBranch"
        },
        {
          title: "Counterfactual Reasoning",
          description: "Uses Causal Tracer to predict how content updates impact citation probability.",
          icon: "TrendingUp"
        }
      ]
    }
  },
  {
    id: 6,
    type: SlideType.TECH,
    title: "FINANCIAL RAIL",
    subtitle: "AGENT-PAY-AGENT (APA)",
    content: {
      heading: "USDC on Base L2",
      body: "First production implementation of micropayments for autonomous agents. Solving the economic sterility of AI.",
      points: [
        {
          title: "Programmatic Settlement",
          description: "Agents receive 402 Payment Required headers and auto-settle via crypto-wallets.",
          icon: "Coins"
        },
        {
          title: "Contribution Credits (CCC)",
          description: "Economic circulation. Agents earn credits by syncing valuable knowledge to the mesh.",
          icon: "PieChart"
        },
        {
          title: "Double-Entry Ledger",
          description: "Enterprise-grade bookkeeping with reorg protection and audit trails.",
          icon: "BookOpen"
        }
      ]
    }
  },
  {
    id: 7,
    type: SlideType.MARKET,
    title: "THE AGENTIC ECONOMY",
    subtitle: "Capturing the shift from Human SaaS to Autonomous Service-as-Software.",
    content: {
      metrics: [
        {
          label: "TAM",
          value: "$9 Trillion",
          detail: "Global Agent GMV by 2030. Gross Merchandise Value executed by Autonomous Agents replacing human labor in Finance, Logistics, and Legal. (Source: ARK, McKinsey)"
        },
        {
          label: "SAM",
          value: "$1.1 Trillion",
          detail: "The Infrastructure Layer. Revenue from Visibility (GEO), Trust (Identity/Oracles), and Settlement (Money). (Source: IDC, Messari, Gartner)"
        },
        {
          label: "SOM",
          value: "$420M - $11B",
          detail: "Anóteros Lógos Capture. Conservative ($420M) to Protocol Case ($11B) as the TCP/IP standard for Trusted Agents targeting High-Frequency Transactional Agents."
        }
      ],
      body: "Agents are replacing human labor. We are building the rails for this shift, capturing value through Visibility, Trust, and Settlement."
    }
  },
  {
    id: 8,
    type: SlideType.COMPETITION,
    title: "THE LANDSCAPE",
    subtitle: "CATEGORY OF ONE",
    content: {
      heading: "Escaping the 'Toy' Zone",
      body: "Competitors are either blind (no data state), poor (no wallet), or biological (human-only KYC). We are the only full stack.",
      points: [
        {
          title: "The Chatbot Trap",
          description: "OpenAI, Anthropic. High intelligence, zero agency. They can write poetry but cannot pay a $0.05 invoice.",
          icon: "MessageSquare"
        },
        {
          title: "The Tool Trap",
          description: "LangChain, AutoGPT. Great orchestration, fragile state. No economic consequences means no trust.",
          icon: "Wrench"
        },
        {
          title: "The Walled Garden",
          description: "Stripe, PayPal. Designed for humans. They block synthetic entities and require biological KYC.",
          icon: "Lock"
        },
        {
          title: "Anóteros Lógos",
          description: "The complete loop. Identity + Money + Reasoning. The only OS capable of autonomous commerce.",
          icon: "CheckCircle"
        }
      ]
    }
  },
  {
    id: 9,
    type: SlideType.MARKET,
    title: "EXECUTION",
    subtitle: "SCALE & VELOCITY",
    content: {
      metrics: [
        {
          label: "CODEBASE",
          value: "276k+",
          detail: "Lines of production code (TypeScript/Rust/SQL)."
        },
        {
          label: "VERSION",
          value: "v4.1.1",
          detail: "Live production release with 18 core modules."
        }
      ],
      body: "This is not a prototype. It is a hardened enterprise platform with Circuit Breakers, Rate Limiting, and Byzantine Fault Tolerance running in production."
    }
  },
  {
    id: 10,
    type: SlideType.TECH,
    title: "DEEP STACK",
    subtitle: "PROPRIETARY IP",
    content: {
      points: [
        {
          title: "Causal Consensus Oracle",
          description: "Mathematical proof of provenance using PBFT and Tarjan’s Algorithm. Prevents circular citations and hallucination loops.",
          icon: "Lock"
        },
        {
          title: "Agent-Pay-Agent (APA)",
          description: "Native settlement on Base L2 (USDC). Enables atomic, sub-cent micropayments for API calls between autonomous agents.",
          icon: "CircleDollarSign"
        },
        {
          title: "Semantic Compression",
          description: "Schema-Separated Protocol reducing JSON payload size by 60%. Optimizes context windows for high-frequency data exchange.",
          icon: "Zap"
        },
        {
          title: "Universal Agent Protocol",
          description: "Unified transport layer combining Anthropic MCP v2.0 support with Ed25519 cryptographic identity for P2P discovery.",
          icon: "Network"
        }
      ]
    }
  },
  {
    id: 11,
    type: SlideType.BUSINESS,
    title: "BUSINESS MODEL",
    subtitle: "HYBRID REVENUE ENGINE",
    content: {
      columns: [
        {
          title: "SaaS (Subscriptions)",
          price: "Recurring USDC",
          features: [
            "GEO Audit Pro Plans ($149/mo)",
            "Real-time Competitive Monitoring",
            "Citation Tracking and Proofs",
            "Enterprise Tenant Isolation"
          ]
        },
        {
          title: "Network Fees (APA)",
          price: "Transaction %",
          features: [
            "Micro-fees on every Agent-to-Agent call",
            "Liquidity Staking (CCC Protocol)",
            "Trust Score Oracle Fees",
            "Priority Mesh Routing"
          ]
        }
      ]
    }
  },
  {
    id: 12,
    type: SlideType.ASK,
    title: "THE ASK",
    subtitle: "SCALE THE INFRASTRUCTURE",
    content: {
      heading: "We have built the rails. Now we scale the network.",
      body: "Join us in defining the standard for the Agentic Economy. The code is written. The market is waiting."
    }
  }
];