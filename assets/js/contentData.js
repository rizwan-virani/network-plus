/* ============================================================================
   network+  ::  contentData.js
   Exam facts, per-domain metadata + objectives, PBQ subject-topic badges,
   curated external resources, the Exam-Mechanics and Career-Guidance readers,
   and the domain reading content (NETPLUS.reading[1..5], appended below as
   lazy-loaded modules under assets/js/content/domainN.js).

   This file loads first and establishes the global NETPLUS namespace consumed
   by quizEngine.js, flashEngine.js, and app.js.

   A deliberate sister to the security+ platform: identical architecture and
   aesthetic, Network+ content.  Authored by Professor Rizwan Virani.
   ========================================================================== */
window.NETPLUS = window.NETPLUS || {};

NETPLUS.exam = {
  code: "N10-009",
  name: "CompTIA Network+",
  minutes: 90,
  maxQuestions: 90,
  scaleLow: 100, scaleHigh: 900, passing: 720,
  domains: 5,
  launched: "2024",
  retiredPredecessor: "N10-008"
};

/* Per-domain metadata. `objectives` mirror the official N10-009 exam outline. */
NETPLUS.domainMeta = [
  { id: 1, weight: 23, color: "d1", icon: "🌐", title: "Networking Concepts", sectionCount: 18,
    short: "The foundation: the OSI model, ports and protocols, appliances and services, transmission media, topologies and architectures, IPv4 addressing, cloud, and modern network use cases.",
    objectives: [
      { id: "1.1", t: "Explain concepts related to the OSI reference model" },
      { id: "1.2", t: "Compare and contrast networking appliances, applications, and functions" },
      { id: "1.3", t: "Summarize cloud concepts and connectivity options" },
      { id: "1.4", t: "Explain common networking ports, protocols, services, and traffic types" },
      { id: "1.5", t: "Compare and contrast transmission media and transceivers" },
      { id: "1.6", t: "Compare and contrast network topologies, architectures, and types" },
      { id: "1.7", t: "Given a scenario, use appropriate IPv4 network addressing" },
      { id: "1.8", t: "Summarize evolving use cases for modern network environments" }
    ] },
  { id: 2, weight: 20, color: "d2", icon: "🔌", title: "Network Implementation",
    short: "Building the network: routing technologies and protocols, switching features (VLANs, STP, trunking), wireless standards and security, and the physical factors of real installations.",
    sectionCount: 16,
    objectives: [
      { id: "2.1", t: "Explain characteristics of routing technologies" },
      { id: "2.2", t: "Given a scenario, configure switching technologies and features" },
      { id: "2.3", t: "Given a scenario, select and configure wireless devices and technologies" },
      { id: "2.4", t: "Explain important factors of physical installations" }
    ] },
  { id: 3, weight: 19, color: "d3", icon: "📡", title: "Network Operations",
    short: "Running the network: organizational processes and documentation, monitoring (SNMP, flow, logs), disaster recovery and high availability, IPv4/IPv6 services, and access/management methods.",
    sectionCount: 16,
    objectives: [
      { id: "3.1", t: "Explain the purpose of organizational processes and procedures" },
      { id: "3.2", t: "Given a scenario, use network monitoring technologies" },
      { id: "3.3", t: "Explain disaster recovery (DR) concepts" },
      { id: "3.4", t: "Given a scenario, implement IPv4 and IPv6 network services" },
      { id: "3.5", t: "Compare and contrast network access and management methods" }
    ] },
  { id: 4, weight: 14, color: "d4", icon: "🛡", title: "Network Security",
    short: "Defending the network: core security concepts and the CIA/AAA models, common attack types and their impact, and the features, hardening, and segmentation used to mitigate them.",
    sectionCount: 15,
    objectives: [
      { id: "4.1", t: "Explain the importance of basic network security concepts" },
      { id: "4.2", t: "Summarize various types of attacks and their impact to the network" },
      { id: "4.3", t: "Given a scenario, apply network security features, defense techniques, and solutions" }
    ] },
  { id: 5, weight: 24, color: "d5", icon: "🔧", title: "Network Troubleshooting",
    short: "Fixing the network: the structured troubleshooting methodology, plus cabling/physical, network-service, performance, and security issue resolution using the right tools and commands.",
    sectionCount: 17,
    objectives: [
      { id: "5.1", t: "Explain the troubleshooting methodology" },
      { id: "5.2", t: "Given a scenario, troubleshoot common cabling and physical interface issues" },
      { id: "5.3", t: "Given a scenario, troubleshoot common issues with network services" },
      { id: "5.4", t: "Given a scenario, troubleshoot common performance issues" },
      { id: "5.5", t: "Given a scenario, troubleshoot common network security issues" }
    ] }
];

/* The five PBQ formats, badged by their true operational subject topic. */
NETPLUS.pbqFormats = [
  { id: 1, icon: "🧮", domainColor: 1, obj: "1.7", badge: "SUBNETTING & IP", title: "Subnetting & IP Allocation",
    desc: "Interpret requirements and compute CIDR boundaries, subnet masks, network and broadcast addresses, and usable host ranges for a given allocation.",
    long: "Each scenario gives an address block and a requirement. Work the math field by field: the <b>CIDR prefix</b>, the <b>subnet mask</b>, the <b>network/broadcast</b> addresses, the <b>usable host range</b>, and the number of hosts per subnet. Apply VLSM and efficient allocation." },
  { id: 2, icon: "🔀", domainColor: 2, obj: "2.1 / 2.2", badge: "SWITCHING & ROUTING", title: "Switching & Routing Console",
    desc: "A CLI simulation: configure VLANs and trunking, link aggregation, and routing — choosing the right commands, interfaces, and protocol parameters (e.g., OSPF).",
    long: "You are at the console. For each task choose the correct <b>command</b>, <b>interface mode</b> (access/trunk), <b>VLAN/encapsulation</b>, <b>link-aggregation</b> setting, and <b>routing</b> parameter (OSPF area, metric, static route) to meet the design." },
  { id: 3, icon: "🔥", domainColor: 4, obj: "4.3", badge: "FIREWALL ACL", title: "Firewall ACL & Security Filtering",
    desc: "Manipulate firewall rules: actions, protocol/port filters, and source/destination zones to permit required traffic and deny the rest under least privilege.",
    long: "Build the access-control list for the requirement. Set each rule's <b>action</b> (permit/deny), <b>source</b> and <b>destination</b> zone, <b>protocol</b> and <b>port</b>, and rule <b>order</b>, applying deny-by-default and least privilege across security zones." },
  { id: 4, icon: "📶", domainColor: 2, obj: "2.3", badge: "WI-FI PLANNING", title: "Wi-Fi Planning & Wireless Security",
    desc: "Plan a WLAN: non-overlapping channels, band and width selection, and wireless security — WPA3-Enterprise, 802.1X/RADIUS parameters, and SSID design.",
    long: "Engineer the wireless deployment. Choose the correct <b>channel</b> plan (non-overlapping 2.4/5/6 GHz), <b>band/width</b>, <b>security mode</b> (WPA3-Personal/Enterprise), and <b>802.1X/RADIUS</b> parameters to deliver capacity and security without co-channel interference." },
  { id: 5, icon: "🗺", domainColor: 4, obj: "1.2 / 4.3", badge: "TOPOLOGY & CONTROLS", title: "Topology Architecture & Control Placement",
    desc: "Position controls in a topology: WAFs, IPS/IDS units, next-gen firewalls, load balancers, proxies, and jump hosts in the correct zones for the risk requirement.",
    long: "A placement workspace. For each position in the topology, choose the device that belongs there — <b>WAF</b>, <b>NGFW</b>, <b>IPS/IDS</b>, <b>load balancer</b>, <b>reverse/forward proxy</b>, <b>jump host</b>, and more — to satisfy segmentation, exposure, and defense-in-depth across the campus, DMZ, and cloud edge." },
  { id: 6, icon: "📊", domainColor: 3, obj: "3.1 – 3.5", badge: "NETWORK OPERATIONS", title: "Network Operations & Monitoring",
    desc: "Run the ops console: SNMP and flow monitoring, syslog triage, configuration backups, documentation and IPAM, DR readiness, and DHCP/DNS/NTP service upkeep.",
    long: "Operate the production network. For each task choose the right <b>monitoring mechanism</b> (SNMP polling vs traps, NetFlow/sFlow/IPFIX, port mirroring), <b>syslog severity</b>, <b>configuration state</b> (running vs startup vs golden), <b>documentation artifact</b> (physical/logical diagram, rack, IPAM, asset inventory), <b>resilience metric</b> (RTO/RPO/MTTR/MTBF, site type), and <b>service parameter</b> (DHCP scope/lease/reservation, DNS record/TTL, NTP stratum) to keep the network observable and recoverable." },
  { id: 7, icon: "🔧", domainColor: 5, obj: "5.1 – 5.5", badge: "TROUBLESHOOTING", title: "Troubleshooting Runbook",
    desc: "Work live incidents with the CompTIA methodology: read the symptoms and tool output, isolate the layer, pick the next diagnostic step, and choose the fix.",
    long: "A ticket is open and the clock is running. Read the exhibit — ping and traceroute output, interface counters, Wi-Fi survey data, switch logs — then work the runbook: identify the <b>failure layer</b>, the <b>most likely cause</b>, the correct <b>next methodology step</b>, the right <b>diagnostic tool or command</b>, and the <b>fix</b> that resolves the incident without collateral damage." }
];

/* Curated free study resources. */
NETPLUS.resources = [
  { icon: "🎥", title: "Professor Messer — Free N10-009 Course", host: "professormesser.com",
    url: "https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/",
    desc: "The complete, free video course covering every N10-009 objective, plus monthly live study groups, practice questions, and downloadable course notes." },
  { icon: "📄", title: "Official CompTIA N10-009 Exam Objectives (PDF)", host: "comptia.org",
    url: "https://www.comptia.org/en-us/certifications/network/",
    desc: "The authoritative exam outline — every objective and sub-bullet CompTIA can test. Download the objectives PDF from the certification page and use it as your master checklist." },
  { icon: "👥", title: "r/CompTIA — Community Wiki & Study Guides", host: "reddit.com/r/CompTIA",
    url: "https://www.reddit.com/r/CompTIA/wiki/index/",
    desc: "Crowd-sourced study plans, exam-day experiences, and the well-known community guides. Read recent “passed” posts for current question-style intel." },
  { icon: "🌐", title: "Subnetting Practice", host: "subnettingpractice.com",
    url: "https://subnettingpractice.com/",
    desc: "Drill subnetting until it's automatic — the single most testable hands-on skill on Network+. Pair it with the Subnetting & IP Allocation PBQs here." },
  { icon: "📚", title: "Cisco Networking Basics & Packet Tracer", host: "netacad.com",
    url: "https://www.netacad.com/",
    desc: "Free Cisco Networking Academy courses and the Packet Tracer simulator — invaluable for hands-on practice with switching, routing, and VLANs." },
  { icon: "🧭", title: "r/networking — Industry Context", host: "reddit.com/r/networking",
    url: "https://www.reddit.com/r/networking/",
    desc: "How the concepts play out in real infrastructure roles — useful for connecting Network+ theory to the day-to-day work of a network technician." }
];

/* ---- Reader: Exam Mechanics card ---- */
NETPLUS.examMechanics = [
  { heading: "Format, length, and delivery", body:
    "<p>The <strong>CompTIA Network+ N10-009</strong> is a single exam of <strong>up to 90 questions</strong> to be completed in <strong>90 minutes</strong>. It is delivered either at a Pearson VUE testing center or via OnVUE online proctoring. Because the count is a <em>maximum</em>, your particular form may contain fewer scored items; CompTIA also seeds unscored “beta” questions it is evaluating for future exams, and you cannot tell which is which — so treat every question as if it counts.</p>" +
    "<p>The exam mixes <strong>multiple-choice</strong> items (single- and multiple-response) with a handful of <strong>performance-based questions (PBQs)</strong>. On Network+, PBQs are heavily practical — subnetting math, reading a switch/router CLI, placing devices in a topology, configuring a firewall rule, or planning a wireless deployment. They typically appear first, are worth more, and consume more time, which leads directly to the single most important time-management rule below.</p>" +
    "<div class='callout exam'><div class='lbl'>Exam tip</div>PBQs front-load the exam and can eat your clock — and Network+ PBQs often involve <strong>subnetting</strong>, which is slow if you're not fluent. If a PBQ stalls you, <strong>flag it and move on</strong>. Bank the fast multiple-choice points first, then return with whatever time remains.</div>" },
  { heading: "Scoring: the 100–900 scale", body:
    "<p>Network+ is scored on a <strong>scaled range of 100 to 900</strong>, and the passing score is <strong>720</strong>. Scaled scoring is not a simple percentage: CompTIA weights items by difficulty and equates across exam forms so that no candidate is advantaged or disadvantaged by drawing a harder set. As a result you cannot reverse-engineer an exact “number correct” from 720, and CompTIA does not publish the raw-to-scaled mapping.</p>" +
    "<p>Practically, strong candidates aim to answer the clear majority of questions correctly to give themselves comfortable margin. There is <strong>no penalty for guessing</strong> — an unanswered question is simply wrong — so you should never leave an item blank. Eliminate obviously wrong options, make your best choice, flag it if unsure, and move on.</p>" +
    "<blockquote>This platform's mock exam reports a scaled score using a transparent linear approximation of the 100–900 band. Use it as a <em>relative</em> readiness signal — “am I trending toward 720?” — not as a literal prediction of your official score.</blockquote>" },
  { heading: "Question styles and how to read them", body:
    "<p>CompTIA writes “best answer” questions. Often two or three options are <em>plausible</em> and only one is <em>best</em> for the scenario described. Read the <strong>last sentence first</strong> — it usually contains the actual ask (“which device <em>best</em>…”, “what should the technician do <em>first</em>…”). Words like <strong>first</strong>, <strong>best</strong>, <strong>most likely</strong>, and <strong>least</strong> are decisive; circle them mentally.</p>" +
    "<ul><li><strong>Multiple-response</strong> items tell you how many to pick (“choose two”). You must get all of them right for credit.</li><li><strong>Scenario</strong> items bury the relevant detail in a paragraph — identify the requirement, the constraint, and the layer/technology involved before looking at options.</li><li><strong>PBQs</strong> reward methodical work; partial credit is generally available, so complete every field you can even if unsure of one. For subnetting, write out the math.</li></ul>" +
    "<div class='callout'><div class='lbl'>Strategy</div>Use the <strong>flag-and-review</strong> workflow. First pass: answer everything you know cold and flag the rest. Second pass: spend remaining minutes only on flagged items. This guarantees you never run out of time with easy points unanswered.</div>" },
  { heading: "Eligibility, cost, and renewal", body:
    "<p>There are <strong>no formal prerequisites</strong>, but CompTIA recommends <strong>CompTIA A+</strong> and around <strong>9–12 months</strong> of hands-on networking experience. Network+ pairs naturally with A+ before it and Security+ after it.</p>" +
    "<p>The exam voucher cost varies by region (commonly in the US$390+ range). Academic and bundle discounts exist — ask your institution. There may also be funding available for a free voucher. Connect with the Program Director or your professor for more information about funding opportunities.</p>" +
    "<p>Network+ is valid for <strong>three years</strong> and participates in CompTIA's <strong>Continuing Education (CE)</strong> program: you renew by earning continuing-education units, completing a higher-level certification, or related activities, rather than re-sitting the exam. Notably, <strong>earning Security+ also renews your Network+</strong> automatically.</p>" },
  { heading: "Exam-day logistics", body:
    "<p>Bring two forms of ID; for online proctoring you must show a clear workspace, a working webcam, and a stable connection. You cannot use notes, phones, or smartwatches. A simple on-screen whiteboard or provided scratch material may be available — use it for <strong>subnetting math</strong> and to jot the OSI layers or port numbers you'll otherwise lose under pressure.</p>" +
    "<div class='callout scenario'><div class='lbl'>Mindset</div>Arrive early, breathe, and remember: Network+ rewards <strong>fluency with fundamentals</strong> — the OSI model, ports/protocols, subnetting, and a structured troubleshooting method. Most questions are answerable by applying those fundamentals to the scenario in front of you.</div>" }
];

/* ---- Reader: Career Guidance card ---- */
NETPLUS.careerGuidance = [
  { heading: "Where Network+ sits on the ladder", body:
    "<p><strong>Network+ is the foundational, vendor-neutral networking certification.</strong> It typically follows <strong>A+</strong> (general IT support) and precedes <strong>Security+</strong> (security fundamentals) on the CompTIA core pathway. Its value is breadth: it proves you understand how networks are designed, addressed, connected, operated, secured, and troubleshot — across any vendor's equipment.</p>" +
    "<p>For hiring managers, Network+ on a résumé is shorthand for “this person understands networking fundamentals and can be trusted near the infrastructure.” It is frequently listed as a <em>required</em> or <em>preferred</em> qualification for junior network and infrastructure roles, and it is a common stepping stone toward vendor tracks like Cisco's CCNA.</p>" },
  { heading: "Infrastructure milestones it aligns with", body:
    "<p>Network+ maps directly to the everyday work of supporting and building networks. It validates that you can:</p>" +
    "<ul>" +
    "<li><strong>Address and subnet a network</strong> — design IPv4/IPv6 schemes, calculate subnets, and plan DHCP/DNS services.</li>" +
    "<li><strong>Implement switching and routing</strong> — configure VLANs, trunking, and basic routing; understand STP and link aggregation.</li>" +
    "<li><strong>Deploy wireless</strong> — plan channels and security (WPA3, 802.1X) for a usable, secure WLAN.</li>" +
    "<li><strong>Operate and document</strong> — monitor with SNMP and flow data, follow change/incident processes, and plan for high availability and disaster recovery.</li>" +
    "<li><strong>Secure and troubleshoot</strong> — apply segmentation and hardening, and resolve faults with a structured methodology.</li>" +
    "</ul>" +
    "<div class='callout exam'><div class='lbl'>Why it matters</div>These are the literal job tasks of network technicians and junior admins. Network+ tells an employer you can do them on day one without hand-holding.</div>" },
  { heading: "Roles Network+ opens", body:
    "<p>Network+ aligns with a cluster of early-career infrastructure roles. It will not, by itself, make you a senior network engineer — but it credibly qualifies you for:</p>" +
    "<ul>" +
    "<li><strong>Junior Network Administrator</strong> — configuring and maintaining switches, routers, and addressing.</li>" +
    "<li><strong>NOC Technician (Network Operations Center)</strong> — monitoring links and devices, triaging alerts, and escalating outages. Domain 3 (Operations) and Domain 5 (Troubleshooting) map directly.</li>" +
    "<li><strong>Network Support Specialist / Help Desk (network-focused)</strong> — resolving connectivity issues with a structured method.</li>" +
    "<li><strong>Systems Administrator</strong> — where networking fluency is essential to managing servers and services.</li>" +
    "<li><strong>Field/Infrastructure Technician</strong> — cabling, physical installs, and device deployment.</li>" +
    "</ul>" },
  { heading: "Building the path beyond Network+", body:
    "<p>Treat Network+ as a launch point. A common trajectory: <em>A+ → Network+ → hands-on NOC/admin experience → a specialization</em>. From here, many learners add <strong>Security+</strong> (which also auto-renews Network+), pursue Cisco's <strong>CCNA</strong> for deeper, vendor-specific routing and switching, or branch toward cloud networking (AWS/Azure) as infrastructure moves to the cloud.</p>" +
    "<div class='callout scenario'><div class='lbl'>Practical advice</div>Pair the cert with <strong>demonstrable hands-on skill</strong> — a home lab with a switch and router, Packet Tracer or GNS3 labs, and relentless <strong>subnetting practice</strong>. Certifications get you past résumé filters; the ability to subnet on a whiteboard and reason through a broken link gets you through interviews.</div>" }
];

/* Reading content lazy-loads from assets/js/content/domainN.js, populating
   NETPLUS.reading[N]. Flashcard decks lazy-load from content/flashN.js into
   NETPLUS.flash[N]. */
NETPLUS.reading = NETPLUS.reading || {};
NETPLUS.flash = NETPLUS.flash || {};
