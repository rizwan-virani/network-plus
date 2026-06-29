window.TAXONOMY = [
  {
    title: "OSI Model Layers",
    subtitle: "Sort each protocol, PDU, or device to the OSI layer where it operates.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "datalink", label: "Data Link" },
      { id: "network", label: "Network" },
      { id: "transport", label: "Transport" },
      { id: "application", label: "Application" }
    ],
    items: [
      { text: "MAC address", cat: "datalink" },
      { text: "Ethernet switch", cat: "datalink" },
      { text: "Frames", cat: "datalink" },
      { text: "VLAN tagging (802.1Q)", cat: "datalink" },
      { text: "IP address", cat: "network" },
      { text: "Router", cat: "network" },
      { text: "ICMP", cat: "network" },
      { text: "Packets", cat: "network" },
      { text: "TCP", cat: "transport" },
      { text: "UDP", cat: "transport" },
      { text: "Port numbers", cat: "transport" },
      { text: "Segments", cat: "transport" },
      { text: "HTTP", cat: "application" },
      { text: "DNS", cat: "application" },
      { text: "SMTP", cat: "application" },
      { text: "FTP", cat: "application" },
      { text: "HTTPS", cat: "application" }
    ]
  },
  {
    title: "Routing Protocols versus Wireless Standards",
    subtitle: "Sort each technology into routing protocols or wireless standards.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "routing", label: "Routing Protocols" },
      { id: "wireless", label: "Wireless Standards" }
    ],
    items: [
      { text: "OSPF", cat: "routing" },
      { text: "BGP", cat: "routing" },
      { text: "RIP", cat: "routing" },
      { text: "EIGRP", cat: "routing" },
      { text: "Static routes", cat: "routing" },
      { text: "Default route", cat: "routing" },
      { text: "Administrative distance", cat: "routing" },
      { text: "Link-state advertisement", cat: "routing" },
      { text: "802.11ax (Wi-Fi 6)", cat: "wireless" },
      { text: "802.11ac (Wi-Fi 5)", cat: "wireless" },
      { text: "802.11n", cat: "wireless" },
      { text: "802.11g", cat: "wireless" },
      { text: "WPA3", cat: "wireless" },
      { text: "5 GHz band", cat: "wireless" },
      { text: "2.4 GHz band", cat: "wireless" },
      { text: "SSID broadcast", cat: "wireless" }
    ]
  },
  {
    title: "SOHO IP Addressing versus DNS and DHCP Functions",
    subtitle: "Sort each item into IP addressing or DNS and DHCP functions.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "ip", label: "IP Addressing" },
      { id: "services", label: "DNS and DHCP Functions" }
    ],
    items: [
      { text: "Private range 192.168.0.0/16", cat: "ip" },
      { text: "Default gateway", cat: "ip" },
      { text: "Subnet mask 255.255.255.0", cat: "ip" },
      { text: "APIPA 169.254.x.x", cat: "ip" },
      { text: "CIDR /24", cat: "ip" },
      { text: "Loopback 127.0.0.1", cat: "ip" },
      { text: "Private range 10.0.0.0/8", cat: "ip" },
      { text: "Broadcast address", cat: "ip" },
      { text: "Resolves a hostname to an IP", cat: "services" },
      { text: "Assigns IP leases automatically", cat: "services" },
      { text: "A record", cat: "services" },
      { text: "Scope and reservation", cat: "services" },
      { text: "Relay and IP helper", cat: "services" },
      { text: "PTR record for reverse lookup", cat: "services" },
      { text: "MX record for mail", cat: "services" },
      { text: "CNAME alias record", cat: "services" },
      { text: "Lease renewal time", cat: "services" }
    ]
  },
  {
    title: "IP Address Subnet Aggregation",
    subtitle: "Match variable length subnet masks to their usable host counts and roles.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "classc", label: "Class C Subnet (/24)" },
      { id: "medium", label: "Medium Department (/26)" },
      { id: "transit", label: "Small Transit Link (/30)" },
      { id: "campus", label: "Large Campus (/22)" }
    ],
    items: [
      { text: "254 usable hosts", cat: "classc" },
      { text: "Mask 255.255.255.0", cat: "classc" },
      { text: "Single typical LAN", cat: "classc" },
      { text: "256 total addresses", cat: "classc" },
      { text: "62 usable hosts", cat: "medium" },
      { text: "Mask 255.255.255.192", cat: "medium" },
      { text: "Four subnets per /24", cat: "medium" },
      { text: "64 addresses per block", cat: "medium" },
      { text: "2 usable hosts", cat: "transit" },
      { text: "Mask 255.255.255.252", cat: "transit" },
      { text: "Point-to-point router link", cat: "transit" },
      { text: "Wastes fewest addresses", cat: "transit" },
      { text: "1022 usable hosts", cat: "campus" },
      { text: "Mask 255.255.252.0", cat: "campus" },
      { text: "Four /24s combined", cat: "campus" },
      { text: "1024 total addresses", cat: "campus" }
    ]
  },
  {
    title: "WAN Connectivity Technologies",
    subtitle: "Categorize telecom delivery mechanisms by their signaling framework.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "circuit", label: "Circuit-Switched Media" },
      { id: "packet", label: "Packet-Switched Infrastructure" },
      { id: "metro", label: "Optical Metro Ethernet" },
      { id: "cellular", label: "Cellular Backup Systems" }
    ],
    items: [
      { text: "Dedicated T1 leased line", cat: "circuit" },
      { text: "ISDN dial-up circuit", cat: "circuit" },
      { text: "PSTN voice path", cat: "circuit" },
      { text: "Fixed 64 Kbps channels", cat: "circuit" },
      { text: "MPLS label switching", cat: "packet" },
      { text: "Frame Relay virtual circuits", cat: "packet" },
      { text: "Shared bandwidth statistical muxing", cat: "packet" },
      { text: "ATM cell relay", cat: "packet" },
      { text: "Carrier Ethernet handoff", cat: "metro" },
      { text: "Fiber over dark city loop", cat: "metro" },
      { text: "E-Line point-to-point service", cat: "metro" },
      { text: "Gigabit Layer 2 transport", cat: "metro" },
      { text: "LTE failover modem", cat: "cellular" },
      { text: "5G WAN uplink", cat: "cellular" },
      { text: "SIM-based out-of-band link", cat: "cellular" },
      { text: "Wireless carrier APN", cat: "cellular" }
    ]
  },
  {
    title: "Network Topology Architectures",
    subtitle: "Sort layout diagrams and redundancy patterns into their topology profiles.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "star", label: "Star / Hub and Spoke" },
      { id: "full", label: "Full Mesh" },
      { id: "partial", label: "Partial Mesh" },
      { id: "spine", label: "Spine-Leaf Datacenter" }
    ],
    items: [
      { text: "Central switch connects all", cat: "star" },
      { text: "Single point of failure", cat: "star" },
      { text: "Easy to add nodes", cat: "star" },
      { text: "Spokes share one hub", cat: "star" },
      { text: "Every node interconnected", cat: "full" },
      { text: "n(n-1)/2 link count", cat: "full" },
      { text: "Maximum path redundancy", cat: "full" },
      { text: "Highest cabling cost", cat: "full" },
      { text: "Some critical nodes linked", cat: "partial" },
      { text: "Balances cost and resilience", cat: "partial" },
      { text: "Selective redundant paths", cat: "partial" },
      { text: "Hybrid of star and mesh", cat: "partial" },
      { text: "Every leaf to every spine", cat: "spine" },
      { text: "Predictable east-west latency", cat: "spine" },
      { text: "Two-tier Clos fabric", cat: "spine" },
      { text: "No direct leaf-to-leaf link", cat: "spine" }
    ]
  },
  {
    title: "High Availability and Redundancy Protocols",
    subtitle: "Map resilience technologies to the domain or layer each one protects.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "stp", label: "Layer 2 Loops (STP/RSTP)" },
      { id: "fhrp", label: "Gateway Redundancy (FHRP/VRRP)" },
      { id: "lacp", label: "Link Aggregation (LACP)" },
      { id: "lb", label: "Load Balancing" }
    ],
    items: [
      { text: "Blocks redundant switch ports", cat: "stp" },
      { text: "Prevents broadcast storms", cat: "stp" },
      { text: "Elects a root bridge", cat: "stp" },
      { text: "BPDU exchange between switches", cat: "stp" },
      { text: "Shared virtual gateway IP", cat: "fhrp" },
      { text: "Active and standby routers", cat: "fhrp" },
      { text: "HSRP virtual MAC", cat: "fhrp" },
      { text: "Failover for default gateway", cat: "fhrp" },
      { text: "Bundles multiple physical links", cat: "lacp" },
      { text: "EtherChannel port group", cat: "lacp" },
      { text: "Increases aggregate bandwidth", cat: "lacp" },
      { text: "802.3ad negotiation", cat: "lacp" },
      { text: "Distributes client requests", cat: "lb" },
      { text: "Round-robin server pool", cat: "lb" },
      { text: "Virtual IP front end", cat: "lb" },
      { text: "Health-checks backend nodes", cat: "lb" }
    ]
  },
  {
    title: "Network Telemetry and Monitoring Formats",
    subtitle: "Classify monitoring methods by the type of system data each collects.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "snmp", label: "Device Status (SNMP)" },
      { id: "syslog", label: "Log Aggregation (Syslog)" },
      { id: "netflow", label: "Traffic Flow (NetFlow/IPFIX)" },
      { id: "span", label: "Packet Inspection (SPAN/Mirror)" }
    ],
    items: [
      { text: "Polls OID MIB values", cat: "snmp" },
      { text: "UDP port 161 queries", cat: "snmp" },
      { text: "Trap on threshold breach", cat: "snmp" },
      { text: "Reports CPU and memory", cat: "snmp" },
      { text: "Severity level 0 to 7", cat: "syslog" },
      { text: "Collector on UDP 514", cat: "syslog" },
      { text: "Timestamped event messages", cat: "syslog" },
      { text: "Centralized log server", cat: "syslog" },
      { text: "Records source-destination conversations", cat: "netflow" },
      { text: "Exports flow records", cat: "netflow" },
      { text: "Top talkers bandwidth report", cat: "netflow" },
      { text: "Five-tuple traffic accounting", cat: "netflow" },
      { text: "Copies frames to analyzer", cat: "span" },
      { text: "Port mirror to sniffer", cat: "span" },
      { text: "Full payload capture", cat: "span" },
      { text: "Feeds an IDS sensor", cat: "span" }
    ]
  },
  {
    title: "Disaster Recovery and Business Continuity",
    subtitle: "Sort contingency infrastructure into the recovery container it represents.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "hot", label: "Hot Site" },
      { id: "warm", label: "Warm Site" },
      { id: "cold", label: "Cold Site" },
      { id: "cloud", label: "Cloud Backup Vaulting" }
    ],
    items: [
      { text: "Near-instant failover ready", cat: "hot" },
      { text: "Live replicated data", cat: "hot" },
      { text: "Highest ongoing cost", cat: "hot" },
      { text: "Mirrors production fully", cat: "hot" },
      { text: "Partial equipment installed", cat: "warm" },
      { text: "Hours to restore data", cat: "warm" },
      { text: "Periodic backups loaded", cat: "warm" },
      { text: "Moderate cost compromise", cat: "warm" },
      { text: "Empty powered space", cat: "cold" },
      { text: "No hardware preinstalled", cat: "cold" },
      { text: "Longest recovery time", cat: "cold" },
      { text: "Cheapest standby option", cat: "cold" },
      { text: "Offsite object storage", cat: "cloud" },
      { text: "Immutable snapshot retention", cat: "cloud" },
      { text: "Geo-redundant replication", cat: "cloud" },
      { text: "Pay-as-you-go capacity", cat: "cloud" }
    ]
  },
  {
    title: "Routing Protocol Characteristics",
    subtitle: "Categorize update behaviors and metrics by the routing protocol type.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "dv", label: "Distance Vector (RIP)" },
      { id: "ls", label: "Link-State (OSPF)" },
      { id: "pv", label: "Path Vector (BGP)" },
      { id: "hybrid", label: "Hybrid (EIGRP)" }
    ],
    items: [
      { text: "Hop count metric", cat: "dv" },
      { text: "15 hop maximum", cat: "dv" },
      { text: "Periodic full table updates", cat: "dv" },
      { text: "Slow convergence prone", cat: "dv" },
      { text: "Builds topology database", cat: "ls" },
      { text: "Cost based on bandwidth", cat: "ls" },
      { text: "Dijkstra SPF algorithm", cat: "ls" },
      { text: "Areas and backbone 0", cat: "ls" },
      { text: "Autonomous system path list", cat: "pv" },
      { text: "Internet exterior gateway", cat: "pv" },
      { text: "AS-path loop prevention", cat: "pv" },
      { text: "TCP port 179 peering", cat: "pv" },
      { text: "DUAL feasible successor", cat: "hybrid" },
      { text: "Composite bandwidth-delay metric", cat: "hybrid" },
      { text: "Cisco proprietary origin", cat: "hybrid" },
      { text: "Rapid partial updates", cat: "hybrid" }
    ]
  },
  {
    title: "Unified Communication Technologies",
    subtitle: "Match media delivery and synchronization properties to their comms layer.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "sip", label: "Session Control (SIP)" },
      { id: "rtp", label: "Media Streaming (RTP)" },
      { id: "ntp", label: "Clock Sync (NTP)" },
      { id: "qos", label: "Quality of Service (QoS)" }
    ],
    items: [
      { text: "Sets up and tears down calls", cat: "sip" },
      { text: "INVITE and BYE messages", cat: "sip" },
      { text: "Signaling on port 5060", cat: "sip" },
      { text: "Negotiates call parameters", cat: "sip" },
      { text: "Carries voice audio packets", cat: "rtp" },
      { text: "Sequence numbers and timestamps", cat: "rtp" },
      { text: "Real-time UDP transport", cat: "rtp" },
      { text: "Jitter buffer reordering", cat: "rtp" },
      { text: "Synchronizes device clocks", cat: "ntp" },
      { text: "Stratum hierarchy levels", cat: "ntp" },
      { text: "UDP port 123", cat: "ntp" },
      { text: "Corrects time drift", cat: "ntp" },
      { text: "DSCP packet marking", cat: "qos" },
      { text: "Prioritizes voice traffic", cat: "qos" },
      { text: "Traffic shaping queues", cat: "qos" },
      { text: "Reduces latency and jitter", cat: "qos" }
    ]
  },
  {
    title: "VLAN Segment Configurations",
    subtitle: "Sort switch ports and attributes by how they process tagged and untagged traffic.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "access", label: "Access Ports" },
      { id: "trunk", label: "Trunk Ports (802.1Q)" },
      { id: "native", label: "Native VLAN" },
      { id: "voice", label: "Voice VLAN" }
    ],
    items: [
      { text: "Carries a single VLAN", cat: "access" },
      { text: "Connects to end host", cat: "access" },
      { text: "Sends untagged frames", cat: "access" },
      { text: "Assigned one VLAN ID", cat: "access" },
      { text: "Carries multiple VLANs", cat: "trunk" },
      { text: "Adds 4-byte dot1q tag", cat: "trunk" },
      { text: "Links switch to switch", cat: "trunk" },
      { text: "Allowed VLAN list", cat: "trunk" },
      { text: "Untagged on a trunk", cat: "native" },
      { text: "Defaults to VLAN 1", cat: "native" },
      { text: "Must match both ends", cat: "native" },
      { text: "Hopping attack target", cat: "native" },
      { text: "Tagged IP phone segment", cat: "voice" },
      { text: "Separates phone from PC", cat: "voice" },
      { text: "Auxiliary VLAN assignment", cat: "voice" },
      { text: "Prioritizes call audio", cat: "voice" }
    ]
  },
  {
    title: "Copper and Fiber Media Failures",
    subtitle: "Match Layer 1 fault symptoms to the physical cause behind each one.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "copper", label: "Copper Faults (Crosstalk/Attenuation)" },
      { id: "fiber", label: "Fiber Faults (Dirty/Bend Radius)" },
      { id: "pinout", label: "Pinout Mismatch (Split Pairs)" },
      { id: "impedance", label: "Impedance Issues" }
    ],
    items: [
      { text: "Signal fades over distance", cat: "copper" },
      { text: "Adjacent pair interference", cat: "copper" },
      { text: "EMI from nearby motors", cat: "copper" },
      { text: "Exceeds 100 meter limit", cat: "copper" },
      { text: "Contaminated connector endface", cat: "fiber" },
      { text: "Macrobend light loss", cat: "fiber" },
      { text: "High insertion loss dB", cat: "fiber" },
      { text: "Single-mode multimode mismatch", cat: "fiber" },
      { text: "Wires on wrong pins", cat: "pinout" },
      { text: "T568A to T568B mix", cat: "pinout" },
      { text: "Twisted pairs separated wrong", cat: "pinout" },
      { text: "Crossed transmit and receive", cat: "pinout" },
      { text: "Cable type mismatch reflection", cat: "impedance" },
      { text: "Return loss on line", cat: "impedance" },
      { text: "Signal echo and bounce", cat: "impedance" },
      { text: "Mixed 50 and 75 ohm", cat: "impedance" }
    ]
  },
  {
    title: "Remote Access Connection Implementations",
    subtitle: "Classify connectivity options by their crypto and encapsulation baseline.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "ssl", label: "Client-to-Site VPN (SSL/TLS)" },
      { id: "ipsec", label: "Gateway VPN (IPsec)" },
      { id: "ssh", label: "Secure Shell (SSH)" },
      { id: "telnet", label: "Legacy Unencrypted (Telnet)" }
    ],
    items: [
      { text: "Browser-based portal tunnel", cat: "ssl" },
      { text: "Runs over TCP 443", cat: "ssl" },
      { text: "Per-user remote client", cat: "ssl" },
      { text: "No special client firewall rules", cat: "ssl" },
      { text: "Site-to-site encrypted tunnel", cat: "ipsec" },
      { text: "ESP and AH headers", cat: "ipsec" },
      { text: "IKE key exchange phase", cat: "ipsec" },
      { text: "Tunnel mode encapsulation", cat: "ipsec" },
      { text: "Encrypted CLI on port 22", cat: "ssh" },
      { text: "Public key authentication", cat: "ssh" },
      { text: "Secure router management", cat: "ssh" },
      { text: "Replaces insecure remote shell", cat: "ssh" },
      { text: "Cleartext on port 23", cat: "telnet" },
      { text: "Credentials sent in plaintext", cat: "telnet" },
      { text: "No encryption at all", cat: "telnet" },
      { text: "Deprecated management access", cat: "telnet" }
    ]
  },
  {
    title: "Command Line Network Diagnostics",
    subtitle: "Match terminal output to the CLI diagnostic utility that produced it.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "trace", label: "Route Tracing (tracert/traceroute)" },
      { id: "netstat", label: "Connection Audit (netstat)" },
      { id: "ipconfig", label: "Interface Telemetry (ipconfig/ifconfig)" },
      { id: "nslookup", label: "Name Server (nslookup/dig)" }
    ],
    items: [
      { text: "Lists each hop latency", cat: "trace" },
      { text: "Shows path to destination", cat: "trace" },
      { text: "TTL increments per router", cat: "trace" },
      { text: "Pinpoints where loss begins", cat: "trace" },
      { text: "Lists active TCP sockets", cat: "netstat" },
      { text: "Shows listening ports", cat: "netstat" },
      { text: "Displays connection states", cat: "netstat" },
      { text: "Maps PIDs to ports", cat: "netstat" },
      { text: "Reveals local IP and mask", cat: "ipconfig" },
      { text: "Shows default gateway", cat: "ipconfig" },
      { text: "Displays adapter MAC address", cat: "ipconfig" },
      { text: "Flush DNS cache option", cat: "ipconfig" },
      { text: "Resolves hostname to IP", cat: "nslookup" },
      { text: "Queries DNS A records", cat: "nslookup" },
      { text: "Returns authoritative server", cat: "nslookup" },
      { text: "Looks up MX records", cat: "nslookup" }
    ]
  }
];
