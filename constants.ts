import { SlideContent, SlideType } from './types';

export const SLIDES: SlideContent[] = [
  {
    id: 1,
    type: SlideType.TITLE,
    title: "ANÓTEROS LÓGOS",
    subtitle: "OS FOR THE AGENT ECONOMY",
    content: {
      heading: "Visibility. Trust. Settlement.",
      body: "Infrastructure for the Machine Economy. We provide GEO Audit, Causal Consensus, and USDC Micropayments for Autonomous Agents."
    }
  },
  {
    id: 2,
    type: SlideType.MARKET,
    title: "THE INFLECTION",
    subtitle: "WHY NOW?",
    content: {
      body: "Intelligence and Gas are finally cheap. Three years ago, the Agent Economy was insolvent. Today, it is inevitable.",
      metrics: [
        {
          label: "INTELLIGENCE",
          value: "-60% Cost",
          detail: "Cost of Thought (LLM Tokens) collapsed. Intelligence is now a commodity."
        },
        {
          label: "SETTLEMENT",
          value: "< $0.01",
          detail: "Base L2 + EIP-4844 allows sub-cent transactions. Agents settle without burning dollars."
        },
        {
          label: "WORKFORCE",
          value: "Loop Economy",
          detail: "Work moves from linear SaaS execution to probabilistic Agent loops."
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
          title: "Invisible by Default",
          description: "Traditional SEO fails here. Without a semantic graph, LLMs treat your business as noise. If an agent cannot parse you, you do not exist.",
          icon: "EyeOff"
        },
        {
          title: "No Wallets",
          description: "Current agents are just chatbots. They cannot close loops. Without native settlement, they plan purchases but cannot execute them.",
          icon: "CreditCard"
        },
        {
          title: "Liability Risk",
          description: "Enterprises cannot scale guessing. In finance, a 1% hallucination rate is a lawsuit. We need mathematical provenance.",
          icon: "AlertTriangle"
        }
      ]
    }
  },
  {
    id: 4,
    type: SlideType.SOLUTION,
    title: "THE PLATFORM",
    subtitle: "V4.1.1 INFRASTRUCTURE",
    content: {
      heading: "A Unified Agent Operating System",
      body: "The complete stack. From the transport layer down to final settlement.",
      points: [
        { title: "GEO Audit", description: "Real-time visibility analysis across Perplexity, Claude, and Google.", icon: "ScanEye" },
        { title: "APA Settlement", description: "Agent-Pay-Agent micropayments on Base L2.", icon: "Wallet" },
        { title: "Trust Kernel", description: "Consensus and Causal Tracer for mathematical truth.", icon: "ShieldCheck" },
        { title: "Agent Mesh", description: "DHT-based peer discovery for agent swarms.", icon: "Network" }
      ]
    }
  },
  {
    id: 5,
    type: SlideType.AGENT_MIDDLEWARE,
    title: "THE INTERNET ADAPTER",
    subtitle: "AGENT API WRAPPER",
    content: {
      heading: "Turning the legacy web into an Agent API.",
      tags: ["UAP Native", "Anthropic MCP", "A2A Fallback"],
      points: [
        {
          title: "Zero Integration",
          description: "Works on any URL. No permission needed from the target.",
          icon: "Unlock"
        },
        {
          title: "60% Token Savings",
          description: "Schema separation strips HTML noise. Drastically reduces LLM inference costs per request.",
          icon: "Zap"
        },
        {
          title: "Universal Protocols",
          description: "Native UAP support. Includes drivers for Agent-to-Agent (A2A) and Anthropic MCP.",
          icon: "GitMerge"
        },
        {
          title: "Verifiable Truth",
          description: "Cryptographic signature on every packet. Provenance is mathematical.",
          icon: "ShieldCheck"
        }
      ]
    }
  },
  {
    id: 6,
    type: SlideType.TECH,
    title: "THE GEO ENGINE",
    subtitle: "SEO FOR MACHINES",
    content: {
      heading: "Generative Engine Optimization (GEO)",
      body: "Our engine analyzes content depth and citation probability. We ensure businesses appear in AI answers.",
      points: [
        {
          title: "Multi-Platform Audit",
          description: "Simulates queries on Perplexity and Gemini to reverse-engineer visibility.",
          icon: "Activity"
        },
        {
          title: "Graph Extraction",
          description: "Converts HTML into semantic graphs for RAG pipelines.",
          icon: "GitBranch"
        },
        {
          title: "Causal Reasoning",
          description: "Predicts how content updates impact citation probability.",
          icon: "TrendingUp"
        }
      ]
    }
  },
  {
    id: 7,
    type: SlideType.TECH,
    title: "FINANCIAL RAIL",
    subtitle: "AGENT-PAY-AGENT (APA)",
    content: {
      heading: "USDC on Base L2",
      body: "Micropayments for autonomous agents. We solve the economic sterility of AI.",
      points: [
        {
          title: "Programmatic Settlement",
          description: "Agents receive 402 Payment Required headers and pay via crypto-wallets.",
          icon: "Coins"
        },
        {
          title: "Contribution Credits",
          description: "Agents earn credits by syncing knowledge to the mesh.",
          icon: "PieChart"
        },
        {
          title: "Double-Entry Ledger",
          description: "Enterprise bookkeeping with reorg protection.",
          icon: "BookOpen"
        }
      ]
    }
  },
  {
    id: 8,
    type: SlideType.MARKET,
    title: "THE AGENT ECONOMY",
    subtitle: "FROM SAAS TO SERVICE-AS-SOFTWARE",
    content: {
      metrics: [
        {
          label: "TAM",
          value: "$9 Trillion",
          detail: "Global Agent GMV by 2030. Agents replacing human labor in Finance and Legal. (Source: ARK, McKinsey)"
        },
        {
          label: "SAM",
          value: "$1.1 Trillion",
          detail: "Infrastructure Layer. Revenue from Visibility, Trust, and Settlement. (Source: IDC, Gartner)"
        },
        {
          label: "SOM",
          value: "$420M - $11B",
          detail: "Conservative capture ($420M) to Protocol Case ($11B) as the TCP/IP for Trusted Agents."
        }
      ],
      body: "Agents are replacing human labor. We build the rails for this shift: Visibility, Trust, Settlement."
    }
  },
  {
    id: 9,
    type: SlideType.COMPETITION,
    title: "THE LANDSCAPE",
    subtitle: "CATEGORY OF ONE",
    content: {
      heading: "The Only Full Stack",
      body: "Competitors are either blind (no data), poor (no wallet), or biological (human KYC).",
      points: [
        {
          title: "The Chatbot Trap",
          description: "OpenAI, Anthropic. High IQ, zero agency. They write poetry but cannot pay a $0.05 invoice.",
          icon: "MessageSquare"
        },
        {
          title: "The Tool Trap",
          description: "LangChain, AutoGPT. Great orchestration, fragile state. No economic consequences means no trust.",
          icon: "Wrench"
        },
        {
          title: "The Walled Garden",
          description: "Stripe, PayPal. Built for humans. They block synthetic entities and require biological ID.",
          icon: "Lock"
        },
        {
          title: "Anóteros Lógos",
          description: "Identity + Money + Reasoning. The only OS for autonomous commerce.",
          icon: "CheckCircle"
        }
      ]
    }
  },
  {
    id: 10,
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
          detail: "Live production release. 18 core modules."
        }
      ],
      body: "Not a prototype. A hardened enterprise platform with Circuit Breakers, Rate Limiting, and Fault Tolerance."
    }
  },
  {
    id: 11,
    type: SlideType.TECH,
    title: "DEEP STACK",
    subtitle: "PROPRIETARY IP",
    content: {
      points: [
        {
          title: "Causal Consensus",
          description: "Mathematical proof of provenance using PBFT. Prevents circular citations.",
          icon: "Lock"
        },
        {
          title: "Agent-Pay-Agent",
          description: "Native settlement on Base L2. Atomic, sub-cent micropayments for API calls.",
          icon: "CircleDollarSign"
        },
        {
          title: "Semantic Compression",
          description: "Schema-Separated Protocol reduces JSON size by 60%. Optimizes context windows.",
          icon: "Zap"
        },
        {
          title: "Universal Protocol",
          description: "Transport layer combining Anthropic MCP with Ed25519 identity.",
          icon: "Network"
        }
      ]
    }
  },
  {
    id: 12,
    type: SlideType.BUSINESS,
    title: "BUSINESS MODEL",
    subtitle: "HYBRID REVENUE",
    content: {
      columns: [
        {
          title: "SaaS (Subscriptions)",
          price: "Recurring USDC",
          features: [
            "Enterprise & Pro Plans ($499 - $15k/mo)",
            "Competitive Monitoring",
            "Citation Proofs",
            "Tenant Isolation"
          ]
        },
        {
          title: "Network Fees (APA)",
          price: "Transaction %",
          features: [
            "Micro-fees on Agent calls",
            "Liquidity Staking",
            "Trust Score Oracle Fees",
            "Priority Routing"
          ]
        },
        {
          title: "API Access (Wrapper)",
          price: "Volume / Request",
          features: [
            "Per-call parsing fees",
            "Schema Generation cost",
            "Private Edge Nodes",
            "High-throughput SLAs"
          ]
        }
      ],
      body: "SaaS builds the Supply (Data). API builds the Demand (Agents). Network Fees capture the Value exchange."
    }
  },
  {
    id: 13,
    type: SlideType.ASK,
    title: "THE ASK",
    subtitle: "SCALE THE NETWORK",
    content: {
      heading: "THE RAILS ARE BUILT. THE CAPITAL \u00A0IS ROTATING.",
      body: "We are witnessing the end of the Search Era and the birth of the Agentic Economy.\n\nAnóteros Lógos is the infrastructure that makes this transition solvent, scalable, and inevitable."
    }
  }
];