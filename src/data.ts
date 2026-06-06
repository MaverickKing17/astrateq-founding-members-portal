import { TimelineStep, BenefitItem, PhilosophyPillar, ResourceDocument, VehicleCompatibility } from './types';

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    id: 'step-1',
    title: 'Reservation Confirmed',
    subtitle: 'Step 01 — Completed',
    description: 'Your founding membership position is verified and secured in our global registry. Priority access token is active.',
    status: 'completed',
  },
  {
    id: 'step-2',
    title: 'Founding Updates',
    subtitle: 'Step 02 — Active Phase',
    description: 'Exclusive briefings detailing hardware architecture, secure boot specifications, and early engineering milestones.',
    status: 'current',
  },
  {
    id: 'step-3',
    title: 'Compatibility Research',
    subtitle: 'Step 03 — In Progress',
    description: 'Iterative virtual modeling and diagnostic verification across premium modern EV and luxury SUV platforms.',
    status: 'current',
  },
  {
    id: 'step-4',
    title: 'Product Development',
    subtitle: 'Step 04 — Upcoming',
    description: 'Final hardware acceleration, thermal sealing for sub-zero climates, and local neural core training.',
    status: 'upcoming',
  },
  {
    id: 'step-5',
    title: 'Launch Preparation',
    subtitle: 'Step 05 — Upcoming',
    description: 'Pre-production hardware validation, final over-the-air deployment safety checks, and regulatory alignments.',
    status: 'upcoming',
  },
  {
    id: 'step-6',
    title: 'Product Availability',
    subtitle: 'Step 06 — Delivery',
    description: 'Priority shipping and hand-assembled unit dispatch to our founding community before general release.',
    status: 'upcoming',
  },
];

export const FOUNDING_MEMBERS_MATTER = [
  {
    id: 'founding-access',
    title: 'Founding Access',
    description: 'Direct entry into building the future of local vehicle intelligence. Your position guarantees the earliest access to hardware allotments.',
  },
  {
    id: 'priority-updates',
    title: 'Priority Updates',
    description: 'Raw, transparent engineering updates direct from our product development team, with zero promotional filter.',
  },
  {
    id: 'early-notifications',
    title: 'Early Notifications',
    description: 'Advanced notifications on technical breakthroughs, regional regulatory updates, and firmware release schedules.',
  },
  {
    id: 'community-participation',
    title: 'Community Participation',
    description: 'Collaborate face-to-face in exclusive roundtable discussions, feedback loops, and early-stage developer previews.',
  },
];

export const MISSION_DETAILS = {
  headline: 'Why Astrateq Gadgets Exists',
  paragraphs: [
    'We believe the modern vehicle is a sanctuary of personal movement, not a node for centralized surveillance. As automobiles transition into computer-controlled intelligent platforms, the data generated belongs exclusively to the driver, not a corporate cloud.',
    'Astrateq Gadgets was founded in response to the growing vulnerability of vehicle telematics. By engineering custom local hardware accelerators that compute telemetry and sensor intelligence on-device at the edge, we bypass external cloud dependencies.',
    'Our philosophy is anchored in true privacy, low-latency intelligence, and architectural honesty. We build for drivers who demand world-class vehicle capabilities without trading away their digital sovereignty.'
  ],
};

export const FOUNDING_BENEFITS: BenefitItem[] = [
  {
    id: 'priority-product-updates',
    title: 'Priority Product Updates',
    description: 'Receive technical documentation, block diagrams, and firmware architectural briefs before public release.',
    detail: 'Get bi-weekly technical briefs outlining high-altitude testing, secure hardware key management setups, and local neural network optimization progress.',
  },
  {
    id: 'compatibility-research-updates',
    title: 'Compatibility Research Updates',
    description: 'Deep dives into specific car platforms, CAN-bus integration safety parameters, and power-management diagnostics.',
    detail: 'Detailed test logs across major premium luxury SUV platforms. Explains how our high-impedance isolators guarantee zero battery drain even during harsh Canadian freezing winters.',
  },
  {
    id: 'early-access-notifications',
    title: 'Early Access Notifications',
    description: 'Exclusive reservation queues and localized setup priority windows when physical hardware assembly begins.',
    detail: 'Founding members are assigned a permanent serial code priority rank. This grants access to the first production run and personalized installation assistance.',
  },
  {
    id: 'educational-resources',
    title: 'Educational Resources',
    description: 'Extensive handbooks covering local processing, decentralized telemetry protocols, and DIY system diagnostics.',
    detail: 'Full schemas, security whitepapers, and guides outlining privacy-first diagnostic tracking. Learn how to audit network packet transmissions from your console yourself.',
  },
  {
    id: 'future-product-announcements',
    title: 'Future Product Announcements',
    description: 'Privileged previews of upcoming sensor arrays, cabin intelligence accessories, and expansion modules.',
    detail: 'Direct access to Astrateq inner labs. View physical mockups of our modular edge expansion cards designed for high-resolution cameras and LiDAR feedback loops.',
  },
  {
    id: 'community-insights',
    title: 'Community Insights',
    description: 'Shared platform analysis, diagnostic feedback, and technical wisdom from our worldwide founder community.',
    detail: 'An absolute zero-tracker forum where founding developers, engineers, and premium automotive enthusiasts share telemetry customization configurations.',
  },
];

export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    id: 'driver-ownership',
    title: 'Driver Ownership',
    description: 'You purchase the machine; you own the telemetry. All driving telemetry, route heuristics, and vehicle health metrics are generated, processed, and destroyed on-board.',
  },
  {
    id: 'privacy-awareness',
    title: 'Privacy Awareness',
    description: 'Astrateq products do not quietly feed commercial analytics systems. Zero analytics trackers are present in our software stack. Digital isolation is built by architecture, not policies.',
  },
  {
    id: 'local-processing-principles',
    title: 'Local Processing Principles',
    description: 'Edge computation is our foundation. By processing cabin safety vectors and CAN-bus signals via high-performance on-board processors, we deliver millisecond-level responsiveness under civil blackout conditions.',
  },
  {
    id: 'technology-transparency',
    title: 'Technology Transparency',
    description: 'We publish source manifests for our embedded Kernels, enabling direct verification. No hidden routines, no backend calls, and absolute assurance of operation parameters.',
  },
];

export const CANADIAN_DIFFERENTIATORS = {
  headline: 'Canadian Driver Considerations',
  introduction: 'Canada’s diverse climate and sprawling geography present unique, unforgiving challenges for modern intelligent vehicles. Astrateq is engineered from day one to operate resiliently in these severe local conditions.',
  points: [
    {
      title: 'Sub-Zero Winter Resilience',
      description: 'Extended Canadian winters can degrade high-performance hardware performance and battery efficiency. Astrateq hardware modules utilize vacuum-sealed, military-grade thermal management circuits to maintain optimal operating temperatures even at -40°C.',
    },
    {
      title: 'Decentralized Long-Distance Journeys',
      description: 'Traversing the vast spaces of the Trans-Canada Highway often means hours without cell reception. Relying on cloud vehicle intelligence is a major hazard. Our local processing computing core ensures navigation, safety assists, and diagnostics function completely offline.',
    },
    {
      title: 'Urban Commuting and Congestion',
      description: 'Navigating dense metropolitan cores like Toronto, Montreal, or Vancouver requires complex visual processing. Our local hardware coordinates sensor inputs right at the edge, offering lag-free telemetry tracking without burdening cellular bandwidth chains.',
    },
    {
      title: 'Sovereign Privacy under National Scrutiny',
      description: 'Canada’s driver privacy environment is evolving. By verifying and isolating all driving logs locally on your physical console, you preserve complete tracking immunity from remote collection and commercial data brokers.',
    }
  ]
};

export const RESOURCE_CENTER_DOCS: ResourceDocument[] = [
  {
    id: 'vehicle-compatibility-guide',
    title: 'Digital Vehicle Compatibility & Safety Guide',
    subtitle: 'Technical Whitepaper — v1.4.2',
    description: 'Comprehensive electrical and architectural roadmap outlining vehicle telemetry safety boundaries, high-impedance CAN-gateways, and vehicle warranty immunity.',
    size: '8.4 MB',
    format: 'PDF Document',
    type: 'guide'
  },
  {
    id: 'diagnostic-compatibility-report',
    title: 'Diagnostic Compatibility Report',
    subtitle: 'Platform Matrix — v2.1.0',
    description: 'An exhaustive hardware compatibility matrix detailing fully tested luxury SUVs, electric platforms, and passenger cars. Identifies sensor socket locations.',
    size: '4.2 MB',
    format: 'PDF Document',
    type: 'report'
  },
  {
    id: 'zero-cloud-privacy-manifesto',
    title: 'Zero-Cloud Privacy Manifesto',
    subtitle: 'Philosophical Charter — First Edition',
    description: 'A deep analysis of vehicle data protection, our edge-first computing architecture, and our public pledge to local drivers regarding digital sovereignty.',
    size: '2.1 MB',
    format: 'PDF Document',
    type: 'manifesto'
  },
  {
    id: 'future-educational-resources',
    title: 'Future Educational Resources Bundle',
    subtitle: 'Founder Knowledge Base',
    description: 'A collection of developer materials, interface specifications, and custom firmware flashing guides for advanced hardware customization.',
    size: '12.8 MB',
    format: 'ZIP Folder',
    type: 'education'
  }
];

export const POPULAR_CANADIAN_VEHICLES: VehicleCompatibility[] = [
  {
    make: 'Tesla',
    model: 'Model X / Model Y',
    years: '2020 - 2026',
    status: 'Highly Compatible',
    hardwareRequirement: 'Diagnostic Socket Type-T1 Adapter',
    climatePerformance: 'Thermal core pre-heating active at -25°C',
  },
  {
    make: 'Rivian',
    model: 'R1S / R1T',
    years: '2022 - 2026',
    status: 'Highly Compatible',
    hardwareRequirement: 'Astrateq Direct Harness A2',
    climatePerformance: 'Sealed IP67 enclosure holds performance down to -45°C',
  },
  {
    make: 'BMW',
    model: 'iX / X5 / X7',
    years: '2019 - 2026',
    status: 'Highly Compatible',
    hardwareRequirement: 'OBD-II Smart Interface B1',
    climatePerformance: 'Standard passive alloy heatsink dissipation',
  },
  {
    make: 'Audi',
    model: 'Q4 e-tron / Q8 e-tron',
    years: '2021 - 2026',
    status: 'Highly Compatible',
    hardwareRequirement: 'OBD-II Smart Interface B1',
    climatePerformance: 'Dual heating-pad integration for persistent boot stability',
  },
  {
    make: 'Mercedes-Benz',
    model: 'EQE SUV / EQS SUV / GLE',
    years: '2020 - 2026',
    status: 'Compatible with Adaptation',
    hardwareRequirement: 'Secure Gateway Bypass Module M2',
    climatePerformance: 'Excellent power efficiency under high cabin temperatures',
  },
  {
    make: 'Lexus',
    model: 'RX / RZ / NX',
    years: '2018 - 2026',
    status: 'Highly Compatible',
    hardwareRequirement: 'OBD-II Smart Interface B1',
    climatePerformance: 'Passive solid-state design, uncompromised in sub-zero start',
  },
  {
    make: 'Volvo',
    model: 'EX90 / XC90 Recharge',
    years: '2021 - 2026',
    status: 'Highly Compatible',
    hardwareRequirement: 'OBD-II Smart Interface B1',
    climatePerformance: 'Swedish design standard, certified operational down to -35°C',
  },
  {
    make: 'Land Rover',
    model: 'Range Rover / Defender EV',
    years: '2022 - 2026',
    status: 'Researching',
    hardwareRequirement: 'Requires Beta Cable Suite R1',
    climatePerformance: 'Heated dynamic core under active laboratory optimization',
  }
];

export const FOUNDERS_MESSAGE = {
  signature: 'The Astrateq Hardware & Firmware Engineering Team',
  date: 'June 2026',
  editorial: `Dear founding member,

When we started Astrateq Gadgets, modern consumer vehicles were already shifting rapidly towards heavy telemetry harvesting models. Tech platforms and automotive conglomerates were quietly converting vehicles into profit-generating surveillance sensors. We saw a clear boundary: the driver must retain uncompromised ownership of their location history, driving kinetics, and cabin environment telemetry.

By choosing to secure an Astrateq Founding Membership, you did more than pre-order advanced hardware. You took a stand for the physical privacy of your journeys. You voted for an engineering paradigm that places high-performance computing back where it belongs—right inside the physical cabin, entirely isolated under your direct physical custody.

Our engineering task is monumental. Designing local processors that can digest massive multi-sensor CAN transactions in real-time, safely isolating battery loads, and surviving intense Canadian winters requires uncompromising technical craftsmanship and extreme diligence. 

But with your backing and patience, we are meeting this challenge head-on. This priority access guide is our promise of transparency to you. Moving forward, you will have front-row sightlines into every circuit layout, diagnostic validation report, and firmware release we craft.

We are incredibly proud to have you on board. Welcome to local intelligence.

With high regard,
The Astrateq Team`,
};

export const COMMON_FAQS = [
  {
    question: 'How does Astrateq process vehicle telemetry without the cloud?',
    answer: 'Astrateq modules house an on-board neural acceleration core that plugs directly into your car’s diagnostic and control ports using passive, optically isolated couplers. It runs machine learning models locally on the edge to analyze steering, traction, and cabin metrics. No raw data is serialized, stored on corporate servers, or transmitted. Your parameters are strictly isolated.',
  },
  {
    question: 'Are my vehicle’s manufacturer warranties affected by the installation?',
    answer: 'No. Astrateq leverages active optical isolation barriers and high-impedance taps. It listens to public CAN statements and broadcasts diagnostics without altering safety-critical vehicle ECUs. Since it does not modify the vehicle’s electrical architecture or write to secure vehicle components, the installation remains fully factory-compliant and non-invasive.',
  },
  {
    question: 'How do you guarantee operation during the extreme Canadian winter?',
    answer: 'All Astrateq modules undergo continuous thermal cycling down to -46°C in our laboratory. We use automotive-grade components, low-resistivity gold traces, and a small, highly efficient internal thermal heater block that pre-warms the core using minimal standby current, ensuring instant wake-up upon vehicle ignition.',
  },
  {
    question: 'What is the exact shipping timeline for Founders?',
    answer: 'Our timeline is milestone-driven rather than bound to arbitrary marketing dates, ensuring absolute reliability. We are currently finishing the Compatibility Research and Product Development milestones. Founding members will receive private notices when production-grade hardware validation prints are finalized, granting you the first allotment queue.',
  },
];
