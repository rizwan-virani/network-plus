/* network+ :: quizEngine.js  (data bank + assessment engine) */
NETPLUS.questions = NETPLUS.questions || [];
NETPLUS.pbqs = NETPLUS.pbqs || [];
NETPLUS.questions.push(
  { id:"D1-001", domain:1, obj:"1.1", diff:"easy", q:"At which layer of the OSI model do IP addresses operate to make routing decisions?", options:["Layer 3 (Network)","Layer 4 (Transport)","Layer 7 (Application)","Layer 2 (Data Link)"], answer:0, explain:"<strong>Layer 3 (Network)</strong> handles logical addressing and path selection using IP addresses, which routers read to make routing decisions.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Layer 2 (Data Link)</b>: Layer 2 uses physical MAC addresses for local frame delivery within a single segment, not the logical IP addresses used to route between networks.</span><span class='qd'><b>Layer 4 (Transport)</b>: Layer 4 manages end-to-end segmentation and ports such as TCP and UDP, not the addressing routers use to forward packets.</span><span class='qd'><b>Layer 7 (Application)</b>: Layer 7 provides services to applications such as HTTP and DNS and never makes hop-by-hop routing decisions.</span>" },
  { id:"D1-002", domain:1, obj:"1.1", diff:"easy", q:"Which OSI layer is responsible for converting data into electrical, optical, or radio signals on the physical medium?", options:["Layer 4 (Transport)","Layer 1 (Physical)","Layer 2 (Data Link)","Layer 3 (Network)"], answer:1, explain:"The <strong>Physical layer (Layer 1)</strong> defines how raw bits are transmitted as electrical, optical, or radio signals across the medium.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Layer 2 (Data Link)</b>: Layer 2 organizes bits into frames and handles MAC addressing, but it does not encode the actual signals onto the wire.</span><span class='qd'><b>Layer 3 (Network)</b>: Layer 3 handles logical IP addressing and routing, which is independent of the signaling on the medium.</span><span class='qd'><b>Layer 4 (Transport)</b>: Layer 4 deals with segmentation and reliable delivery, far above the physical signaling described here.</span>" },
  { id:"D1-003", domain:1, obj:"1.4", diff:"easy", q:"Which port number does SSH use by default?", options:["25","21","22","23"], answer:2, explain:"<strong>SSH uses TCP port 22</strong> to provide encrypted remote login and command execution.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>21</b>: Port 21 is the FTP control channel, an unrelated cleartext file-transfer protocol.</span><span class='qd'><b>23</b>: Port 23 is Telnet, an unencrypted remote-access protocol that SSH was designed to replace.</span><span class='qd'><b>25</b>: Port 25 is SMTP for server-to-server email transfer, not remote shell access.</span>" },
  { id:"D1-004", domain:1, obj:"1.4", diff:"easy", q:"What transport protocol and port does HTTPS use?", options:["TCP 8080","UDP 443","UDP 80","TCP 443"], answer:3, explain:"<strong>HTTPS uses TCP port 443</strong> to carry web traffic secured by TLS.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>UDP 80</b>: Port 80 is plain HTTP and it runs over TCP, not UDP, and it is unencrypted.</span><span class='qd'><b>TCP 8080</b>: Port 8080 is a common alternate HTTP proxy or web port, not the standard HTTPS port.</span><span class='qd'><b>UDP 443</b>: Although QUIC and HTTP/3 use UDP 443, classic HTTPS over TLS uses TCP 443, so the standard answer is TCP.</span>" },
  { id:"D1-005", domain:1, obj:"1.4", diff:"easy", q:"Which protocol resolves domain names to IP addresses and primarily uses port 53?", options:["DNS","SNMP","LDAP","DHCP"], answer:0, explain:"<strong>DNS</strong> resolves hostnames to IP addresses using port 53, with UDP for most queries and TCP for zone transfers and large responses.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DHCP</b>: DHCP automatically assigns IP configuration to clients using UDP 67 and 68, not name resolution on port 53.</span><span class='qd'><b>SNMP</b>: SNMP monitors and manages network devices over UDP 161 and 162, not domain name lookups.</span><span class='qd'><b>LDAP</b>: LDAP queries directory services over port 389, not the DNS hierarchy on port 53.</span>" },
  { id:"D1-006", domain:1, obj:"1.4", diff:"easy", q:"Remote Desktop Protocol (RDP) listens on which default port?", options:["3306","3389","5900","1433"], answer:1, explain:"<strong>RDP uses TCP port 3389</strong> to provide remote graphical desktop access to Windows systems.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>3306</b>: Port 3306 is MySQL database access, not remote desktop.</span><span class='qd'><b>5900</b>: Port 5900 is VNC, a different remote-desktop protocol that is not RDP.</span><span class='qd'><b>1433</b>: Port 1433 is Microsoft SQL Server, a database service rather than a remote desktop.</span>" },
  { id:"D1-007", domain:1, obj:"1.2", diff:"easy", q:"Which device operates primarily at Layer 2 and forwards frames based on MAC addresses?", options:["Repeater","Hub","Switch","Router"], answer:2, explain:"A <strong>switch</strong> builds a MAC address table and forwards frames at Layer 2 toward only the port where the destination resides.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Hub</b>: A hub is a Layer 1 device that blindly repeats incoming signals out every port without reading MAC addresses.</span><span class='qd'><b>Router</b>: A router operates at Layer 3, forwarding packets between networks based on IP addresses rather than MAC frames.</span><span class='qd'><b>Repeater</b>: A repeater is a Layer 1 device that regenerates a signal to extend distance and has no awareness of MAC addresses.</span>" },
  { id:"D1-008", domain:1, obj:"1.2", diff:"easy", q:"What is the primary function of a router?", options:["Convert digital to analog signals","Assign MAC addresses to hosts","Amplify electrical signals","Connect and route traffic between different networks"], answer:3, explain:"A <strong>Connect and route traffic between different networks</strong> describes a router, which forwards packets between separate networks using Layer 3 addressing and a routing table.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Amplify electrical signals</b>: Amplifying or regenerating signals is the job of a repeater or amplifier at Layer 1, not a router.</span><span class='qd'><b>Convert digital to analog signals</b>: Digital-to-analog conversion is performed by a modem, not a router.</span><span class='qd'><b>Assign MAC addresses to hosts</b>: MAC addresses are burned into network interface cards by the manufacturer and are never assigned by a router.</span>" },
  { id:"D1-009", domain:1, obj:"1.5", diff:"easy", q:"Which copper cable category is rated for 10GBASE-T over the full 100 meters?", options:["Cat 6a","Cat 5","Cat 5e","Cat 6"], answer:0, explain:"<strong>Cat 6a</strong> supports 10GBASE-T over the full 100 meters because its tighter specifications and shielding limit alien crosstalk.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Cat 5</b>: Cat 5 is rated only for 100 Mbps and cannot reliably carry gigabit, let alone 10 Gbps.</span><span class='qd'><b>Cat 5e</b>: Cat 5e supports 1 Gbps to 100 m but is not rated for 10 Gbps.</span><span class='qd'><b>Cat 6</b>: Cat 6 carries 10 Gbps only to roughly 55 m due to crosstalk, not the full 100 m.</span>" },
  { id:"D1-010", domain:1, obj:"1.5", diff:"easy", q:"Which fiber type is designed for long-distance transmission using a laser light source and a small core?", options:["Multimode fiber","Single-mode fiber","Twinaxial cable","Shielded twisted pair"], answer:1, explain:"<strong>Single-mode fiber</strong> has a small core of about 9 microns and uses a laser source, allowing low-loss transmission over long distances.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Multimode fiber</b>: Multimode has a larger core and uses LEDs or VCSELs, limiting it to shorter distances due to modal dispersion.</span><span class='qd'><b>Twinaxial cable</b>: Twinaxial is shielded copper used for very short high-speed links such as DAC, not long-distance fiber.</span><span class='qd'><b>Shielded twisted pair</b>: STP is copper cabling limited to about 100 m, not a long-distance fiber medium.</span>" },
  { id:"D1-011", domain:1, obj:"1.4", diff:"easy", q:"Which protocol is connection-oriented and provides reliable, ordered delivery using acknowledgments?", options:["ARP","UDP","TCP","ICMP"], answer:2, explain:"<strong>TCP</strong> is connection-oriented and provides reliable, ordered delivery using sequence numbers and acknowledgments.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>UDP</b>: UDP is connectionless and best-effort, sending datagrams without acknowledgments or guaranteed ordering.</span><span class='qd'><b>ICMP</b>: ICMP is a Layer 3 control and error-reporting protocol used by tools like ping, not a reliable transport protocol.</span><span class='qd'><b>ARP</b>: ARP resolves IP addresses to MAC addresses on a local segment and provides no data delivery service.</span>" },
  { id:"D1-012", domain:1, obj:"1.4", diff:"easy", q:"What port does SMTP use for sending email between mail servers?", options:["110","143","993","25"], answer:3, explain:"<strong>SMTP uses TCP port 25</strong> for server-to-server mail relay between mail transfer agents.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>110</b>: Port 110 is POP3, used by clients to download mail, not to send it between servers.</span><span class='qd'><b>143</b>: Port 143 is IMAP, used by clients to access mailboxes, not for server-to-server sending.</span><span class='qd'><b>993</b>: Port 993 is IMAPS, the TLS-encrypted version of IMAP retrieval, not SMTP transfer.</span>" },
  { id:"D1-013", domain:1, obj:"1.1", diff:"easy", q:"Which OSI layer is responsible for end-to-end segmentation and reliable delivery using TCP?", options:["Layer 4 (Transport)","Layer 5 (Session)","Layer 2 (Data Link)","Layer 3 (Network)"], answer:0, explain:"The <strong>Transport layer (Layer 4)</strong> performs end-to-end segmentation, flow control, and reliable delivery using TCP, or fast best-effort delivery using UDP.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Layer 2 (Data Link)</b>: Layer 2 handles local frame delivery and MAC addressing, not end-to-end reliability.</span><span class='qd'><b>Layer 3 (Network)</b>: Layer 3 handles logical addressing and routing of packets, not segmentation or acknowledgments.</span><span class='qd'><b>Layer 5 (Session)</b>: Layer 5 manages dialogue setup and teardown between applications, not the reliable segment delivery TCP provides.</span>" },
  { id:"D1-014", domain:1, obj:"1.2", diff:"easy", q:"What does a firewall primarily do?", options:["Assign IP addresses dynamically","Filter traffic based on a defined rule set","Translate domain names to IPs","Boost wireless signal strength"], answer:1, explain:"A <strong>Filter traffic based on a defined rule set</strong> is the core function of a firewall, which permits or denies traffic according to configured security rules.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Assign IP addresses dynamically</b>: Dynamic IP assignment is performed by a DHCP server, not a firewall.</span><span class='qd'><b>Translate domain names to IPs</b>: Name-to-IP translation is the job of DNS, not traffic filtering.</span><span class='qd'><b>Boost wireless signal strength</b>: Extending or boosting wireless coverage is done by access points or repeaters, not firewalls.</span>" },
  { id:"D1-015", domain:1, obj:"1.5", diff:"easy", q:"Which connector is most commonly used to terminate Cat 6 Ethernet cabling?", options:["LC","RJ11","RJ45","BNC"], answer:2, explain:"<strong>RJ45</strong> is the 8-position, 8-contact connector used to terminate twisted-pair Ethernet such as Cat 6.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>LC</b>: LC is a small form-factor fiber-optic connector, not used on copper Ethernet.</span><span class='qd'><b>RJ11</b>: RJ11 is a smaller 6-position connector used for analog telephone lines, not Ethernet.</span><span class='qd'><b>BNC</b>: BNC is a bayonet coaxial connector used with legacy 10BASE2 or video, not twisted-pair Ethernet.</span>" },
  { id:"D1-016", domain:1, obj:"1.4", diff:"easy", q:"Which protocol and port are used by SNMP for network device monitoring queries?", options:["TCP 389","UDP 514","TCP 636","UDP 161"], answer:3, explain:"<strong>SNMP uses UDP port 161</strong> for management queries to devices, with traps sent on UDP 162.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>TCP 389</b>: Port 389 is LDAP for directory services, not SNMP monitoring.</span><span class='qd'><b>UDP 514</b>: Port 514 is syslog for centralized log collection, not SNMP polling.</span><span class='qd'><b>TCP 636</b>: Port 636 is LDAPS, the TLS-secured directory protocol, unrelated to SNMP.</span>" },
  { id:"D1-017", domain:1, obj:"1.1", diff:"easy", q:"Which OSI layer is associated with switches and MAC address forwarding?", options:["Layer 2","Layer 3","Layer 4","Layer 1"], answer:0, explain:"The <strong>Layer 2</strong> Data Link layer uses MAC addresses, which switches read to build a forwarding table and switch frames.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Layer 1</b>: Layer 1 is the Physical layer of signals and cabling, the domain of hubs and repeaters, not MAC forwarding.</span><span class='qd'><b>Layer 3</b>: Layer 3 is the Network layer of IP routing, the domain of routers, not basic switching.</span><span class='qd'><b>Layer 4</b>: Layer 4 is the Transport layer of ports and segments, well above MAC-based frame forwarding.</span>" },
  { id:"D1-018", domain:1, obj:"1.2", diff:"medium", q:"A company wants a single appliance that performs firewalling, intrusion prevention, antivirus, and web filtering. Which solution BEST fits?", options:["Layer 2 switch","Unified Threat Management (UTM)","Load balancer","Proxy server"], answer:1, explain:"A <strong>Unified Threat Management (UTM)</strong> appliance consolidates firewalling, intrusion prevention, antivirus, and web filtering into a single integrated device.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Layer 2 switch</b>: A Layer 2 switch only forwards frames by MAC address and offers none of these security inspection functions.</span><span class='qd'><b>Load balancer</b>: A load balancer distributes client requests across servers and does not bundle antivirus or IPS into one box.</span><span class='qd'><b>Proxy server</b>: A proxy mediates and can filter web requests but does not provide the full firewall, IPS, and antivirus suite of a UTM.</span>" },
  { id:"D1-019", domain:1, obj:"1.4", diff:"medium", q:"An administrator needs encrypted file transfer over SSH. Which protocol and port should be used?", options:["FTPS over TCP 990","FTP over TCP 21","SFTP over TCP 22","TFTP over UDP 69"], answer:2, explain:"<strong>SFTP over TCP 22</strong> tunnels file transfer inside an SSH session, providing encryption on the same port as SSH.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>FTP over TCP 21</b>: Standard FTP on port 21 sends credentials and data in cleartext and is not encrypted by SSH.</span><span class='qd'><b>TFTP over UDP 69</b>: TFTP is a lightweight, unauthenticated, unencrypted transfer used for things like firmware, not secure SSH-based transfer.</span><span class='qd'><b>FTPS over TCP 990</b>: FTPS secures FTP with TLS rather than SSH, so it does not meet the requirement of transfer over SSH.</span>" },
  { id:"D1-020", domain:1, obj:"1.4", diff:"medium", q:"Which pair correctly matches the protocol to its default port?", options:["NTP - TCP 123","Syslog - TCP 53","LDAPS - TCP 389","Telnet - TCP 23"], answer:3, explain:"<strong>Telnet - TCP 23</strong> is the correct pairing, since Telnet provides cleartext remote terminal access on TCP port 23.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>LDAPS - TCP 389</b>: LDAPS actually uses TCP 636, while 389 is plain unencrypted LDAP.</span><span class='qd'><b>NTP - TCP 123</b>: NTP uses UDP port 123, not TCP, for time synchronization.</span><span class='qd'><b>Syslog - TCP 53</b>: Syslog uses UDP 514, and port 53 belongs to DNS, so this pairing is wrong twice.</span>" },
  { id:"D1-021", domain:1, obj:"1.1", diff:"medium", q:"A web application uses HTTP cookies to maintain user login state across requests. Which OSI layer is MOST associated with managing these dialogues?", options:["Layer 5 (Session)","Layer 6 (Presentation)","Layer 3 (Network)","Layer 4 (Transport)"], answer:0, explain:"The <strong>Layer 5 (Session)</strong> layer establishes, manages, and terminates the ongoing dialogues between applications that maintain state across requests.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Layer 3 (Network)</b>: Layer 3 only routes individual packets by IP and has no concept of an application dialogue or session.</span><span class='qd'><b>Layer 4 (Transport)</b>: Layer 4 manages a transport connection and ports but does not track the higher-level application conversation that cookies represent.</span><span class='qd'><b>Layer 6 (Presentation)</b>: Layer 6 handles data formatting, encryption, and translation, not the establishment and management of dialogues.</span>" },
  { id:"D1-022", domain:1, obj:"1.1", diff:"medium", q:"TLS encryption and data format translation such as character encoding occur at which OSI layer?", options:["Layer 5 (Session)","Layer 6 (Presentation)","Layer 7 (Application)","Layer 4 (Transport)"], answer:1, explain:"The <strong>Layer 6 (Presentation)</strong> layer handles encryption, decryption, compression, and translation of data formats such as character encoding.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Layer 4 (Transport)</b>: Layer 4 segments data and manages ports and reliability, not encryption or format translation.</span><span class='qd'><b>Layer 5 (Session)</b>: Layer 5 opens and maintains dialogues between hosts but does not transform or encode the data itself.</span><span class='qd'><b>Layer 7 (Application)</b>: Layer 7 provides the network interface to applications, while the formatting and encryption work is attributed to the Presentation layer.</span>" },
  { id:"D1-023", domain:1, obj:"1.5", diff:"medium", q:"A technician must run a 40 Gbps link between two switches in the same rack at low cost. Which media is the BEST choice?", options:["Cat 5e UTP","Single-mode fiber with long-range optics","Direct Attach Copper (DAC) / twinaxial","Coaxial RG-6"], answer:2, explain:"<strong>Direct Attach Copper (DAC) / twinaxial</strong> is an inexpensive, short-reach option ideal for 40 Gbps switch-to-switch links within a single rack.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Cat 5e UTP</b>: Cat 5e is rated only to 1 Gbps and cannot carry a 40 Gbps link.</span><span class='qd'><b>Single-mode fiber with long-range optics</b>: Single-mode with long-range optics is far more expensive than needed for two switches a few feet apart.</span><span class='qd'><b>Coaxial RG-6</b>: RG-6 coax is used for video and broadband, not high-speed switch interconnects.</span>" },
  { id:"D1-024", domain:1, obj:"1.5", diff:"medium", q:"Which statement about multimode versus single-mode fiber is correct?", options:["Single-mode has a larger core for higher bandwidth","Multimode supports longer distances than single-mode","Single-mode uses LEDs while multimode uses lasers","Multimode has a larger core and is used for shorter distances"], answer:3, explain:"<strong>Multimode has a larger core and is used for shorter distances</strong> because its wider core allows multiple light modes, which causes modal dispersion that limits range.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Multimode supports longer distances than single-mode</b>: This is reversed, since single-mode supports far longer distances than multimode.</span><span class='qd'><b>Single-mode uses LEDs while multimode uses lasers</b>: This is reversed, since single-mode uses lasers and multimode commonly uses LEDs or VCSELs.</span><span class='qd'><b>Single-mode has a larger core for higher bandwidth</b>: Single-mode actually has a much smaller core of about 9 microns, not a larger one.</span>" },
  { id:"D1-025", domain:1, obj:"1.2", diff:"medium", q:"Which device distributes incoming client requests across multiple backend servers to improve availability and performance?", options:["Load balancer","IDS","Media converter","Wireless access point"], answer:0, explain:"A <strong>Load balancer</strong> distributes incoming client requests across a pool of backend servers to improve availability, scalability, and performance.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>IDS</b>: An IDS passively detects and alerts on suspicious traffic and does not distribute client requests.</span><span class='qd'><b>Media converter</b>: A media converter changes the physical medium such as copper to fiber and performs no traffic distribution.</span><span class='qd'><b>Wireless access point</b>: A wireless access point connects wireless clients to the wired network and does not balance server load.</span>" },
  { id:"D1-026", domain:1, obj:"1.2", diff:"medium", q:"What is the key difference between an IDS and an IPS?", options:["An IDS blocks traffic; an IPS only logs it","An IDS detects and alerts; an IPS can actively block traffic inline","An IDS works at Layer 2; an IPS works at Layer 7 only","There is no functional difference"], answer:1, explain:"<strong>An IDS detects and alerts; an IPS can actively block traffic inline</strong> because an IDS monitors passively while an IPS sits in the traffic path and can drop malicious packets.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>An IDS blocks traffic; an IPS only logs it</b>: This reverses the roles, since the IPS is the one that blocks and the IDS is the one that only alerts.</span><span class='qd'><b>An IDS works at Layer 2; an IPS works at Layer 7 only</b>: Both systems inspect traffic across multiple layers and are not fixed to those specific layers.</span><span class='qd'><b>There is no functional difference</b>: There is a clear functional difference, since one is passive detection and the other is active inline prevention.</span>" },
  { id:"D1-027", domain:1, obj:"1.4", diff:"medium", q:"Which protocol uses UDP port 67 and 68 to automatically assign IP configuration to hosts?", options:["NTP","DNS","DHCP","ARP"], answer:2, explain:"<strong>DHCP</strong> uses UDP ports 67 (server) and 68 (client) to lease IP addresses and related configuration to hosts automatically.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS</b>: DNS resolves names to IP addresses on port 53 and does not assign IP configuration.</span><span class='qd'><b>ARP</b>: ARP maps a known IP to a MAC address on the local segment and does not lease addresses.</span><span class='qd'><b>NTP</b>: NTP synchronizes clocks over UDP 123 and has nothing to do with IP assignment.</span>" },
  { id:"D1-028", domain:1, obj:"1.4", diff:"medium", q:"A user reports that secure web pages fail but unencrypted pages load. Which port is MOST likely being blocked?", options:["UDP 53","TCP 25","TCP 80","TCP 443"], answer:3, explain:"Secure web pages use <strong>TCP 443</strong> for HTTPS, so if encrypted sites fail while plain HTTP still loads, port 443 is the likely block.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>TCP 80</b>: Port 80 is plain HTTP, and unencrypted pages are working, so 80 is not blocked.</span><span class='qd'><b>UDP 53</b>: Port 53 is DNS, and if name resolution failed both secure and unsecure sites would break, not just HTTPS.</span><span class='qd'><b>TCP 25</b>: Port 25 is SMTP email transfer and is unrelated to loading web pages.</span>" },
  { id:"D1-029", domain:1, obj:"1.1", diff:"medium", q:"During encapsulation, what does the Transport layer add to the data it receives from upper layers?", options:["A segment header with source/destination ports","Physical line coding","A frame trailer with FCS","A packet header with source/destination IP"], answer:0, explain:"The <strong>A segment header with source/destination ports</strong> is added at the Transport layer, which builds segments containing port numbers and sequencing.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A frame trailer with FCS</b>: A frame trailer with a frame check sequence is added at Layer 2, the Data Link layer, not the Transport layer.</span><span class='qd'><b>A packet header with source/destination IP</b>: An IP header with source and destination addresses is added at Layer 3, the Network layer.</span><span class='qd'><b>Physical line coding</b>: Line coding of bits onto the medium occurs at Layer 1, the Physical layer.</span>" },
  { id:"D1-030", domain:1, obj:"1.4", diff:"medium", q:"Which protocols correctly map to their default ports for retrieving email?", options:["POP3 993 and IMAP 995","POP3 110 and IMAP 143","POP3 143 and IMAP 110","POP3 25 and IMAP 110"], answer:1, explain:"<strong>POP3 110 and IMAP 143</strong> is correct, since POP3 retrieves mail on TCP 110 and IMAP accesses mailboxes on TCP 143.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>POP3 143 and IMAP 110</b>: This swaps the two ports, since 143 is IMAP and 110 is POP3.</span><span class='qd'><b>POP3 25 and IMAP 110</b>: Port 25 is SMTP sending and 110 is POP3, so neither pairing is correct for IMAP retrieval.</span><span class='qd'><b>POP3 993 and IMAP 995</b>: These are the secure variants reversed, since 995 is POP3S and 993 is IMAPS.</span>" },
  { id:"D1-031", domain:1, obj:"1.2", diff:"medium", q:"A network engineer needs to convert a copper Ethernet link to fiber to extend a run beyond 100 meters. Which device is appropriate?", options:["Content filter","Repeater","Media converter","Bridge"], answer:2, explain:"A <strong>Media converter</strong> transparently translates between copper and fiber, letting a run continue on fiber beyond the 100 m copper limit.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Repeater</b>: A repeater regenerates a signal on the same medium and cannot convert copper to fiber.</span><span class='qd'><b>Bridge</b>: A bridge connects and filters traffic between Layer 2 segments but does not convert physical media.</span><span class='qd'><b>Content filter</b>: A content filter inspects and blocks traffic based on policy and has no role in media conversion.</span>" },
  { id:"D1-032", domain:1, obj:"1.5", diff:"medium", q:"Which transceiver form factor supports speeds up to 100 Gbps and is commonly used in data center switches?", options:["GBIC","SFP","SFP+","QSFP28"], answer:3, explain:"<strong>QSFP28</strong> is a quad small form-factor pluggable transceiver that supports 100 Gbps and is widely used in data center switches.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SFP</b>: SFP tops out at about 1 Gbps, far below 100 Gbps.</span><span class='qd'><b>SFP+</b>: SFP+ supports up to 10 Gbps, which is one tenth of the required speed.</span><span class='qd'><b>GBIC</b>: GBIC is an older, larger 1 Gbps form factor that predates 100 Gbps optics.</span>" },
  { id:"D1-033", domain:1, obj:"1.4", diff:"medium", q:"Which protocol uses TCP port 636 to provide directory services securely over TLS?", options:["LDAPS","Kerberos","RADIUS","LDAP"], answer:0, explain:"<strong>LDAPS</strong> uses TCP port 636 to encrypt directory queries with TLS.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>LDAP</b>: Plain LDAP uses TCP 389 and sends directory queries unencrypted.</span><span class='qd'><b>Kerberos</b>: Kerberos provides ticket-based authentication on port 88, not directory lookups over TLS on 636.</span><span class='qd'><b>RADIUS</b>: RADIUS handles AAA on UDP 1812 and 1813, not directory services on 636.</span>" },
  { id:"D1-034", domain:1, obj:"1.1", diff:"medium", q:"A frame arrives at a host but is dropped because the destination MAC does not match. At which OSI layer was this decision made?", options:["Layer 1 (Physical)","Layer 2 (Data Link)","Layer 3 (Network)","Layer 4 (Transport)"], answer:1, explain:"MAC addressing and frame filtering occur at the <strong>Layer 2 (Data Link)</strong> layer, where a host compares the destination MAC and drops frames not addressed to it.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Layer 1 (Physical)</b>: Layer 1 only transmits raw bits and has no concept of a MAC address to compare.</span><span class='qd'><b>Layer 3 (Network)</b>: Layer 3 inspects IP addresses, not the MAC field that triggered this drop.</span><span class='qd'><b>Layer 4 (Transport)</b>: Layer 4 examines ports and segments, well above the MAC-based filtering described.</span>" },
  { id:"D1-035", domain:1, obj:"1.4", diff:"medium", q:"Which statement BEST describes the difference between TCP and UDP?", options:["UDP performs retransmission while TCP does not","UDP guarantees delivery; TCP does not","TCP uses a three-way handshake; UDP is connectionless with no handshake","Both are connectionless protocols"], answer:2, explain:"<strong>TCP uses a three-way handshake; UDP is connectionless with no handshake</strong> correctly captures that TCP sets up a connection while UDP simply sends datagrams.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>UDP guarantees delivery; TCP does not</b>: This is reversed, since TCP guarantees delivery and UDP is best-effort.</span><span class='qd'><b>Both are connectionless protocols</b>: Only UDP is connectionless, while TCP is connection-oriented.</span><span class='qd'><b>UDP performs retransmission while TCP does not</b>: This is reversed, since TCP performs retransmission and UDP does not.</span>" },
  { id:"D1-036", domain:1, obj:"1.2", diff:"medium", q:"Which appliance terminates VPN tunnels and authenticates remote users connecting into a corporate network?", options:["Layer 2 switch","Print server","DHCP relay","VPN concentrator / headend"], answer:3, explain:"A <strong>VPN concentrator / headend</strong> terminates many encrypted tunnels and authenticates remote-access users connecting into the corporate network.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Layer 2 switch</b>: A Layer 2 switch forwards frames locally by MAC address and cannot terminate VPN tunnels.</span><span class='qd'><b>Print server</b>: A print server manages access to printers and has no VPN tunneling or authentication role.</span><span class='qd'><b>DHCP relay</b>: A DHCP relay forwards DHCP broadcasts across subnets and does not handle encrypted remote access.</span>" },
  { id:"D1-037", domain:1, obj:"1.4", diff:"medium", q:"A network monitoring server needs to receive log messages from many devices. Which protocol and default port should be opened?", options:["Syslog over UDP 514","SNMP over UDP 162","NetFlow over TCP 2055","NTP over UDP 123"], answer:0, explain:"<strong>Syslog over UDP 514</strong> is the standard way to forward event and log messages to a centralized collector.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SNMP over UDP 162</b>: UDP 162 carries SNMP traps, which are device alerts, not general syslog log forwarding.</span><span class='qd'><b>NetFlow over TCP 2055</b>: NetFlow exports traffic flow statistics, typically over UDP, and is not a logging protocol.</span><span class='qd'><b>NTP over UDP 123</b>: NTP synchronizes clocks and does not transport log messages.</span>" },
  { id:"D1-038", domain:1, obj:"1.1", diff:"medium", q:"In the OSI model, which layer is responsible for path determination and logical addressing across internetworks?", options:["Layer 2 (Data Link)","Layer 3 (Network)","Layer 4 (Transport)","Layer 7 (Application)"], answer:1, explain:"The <strong>Layer 3 (Network)</strong> layer handles logical IP addressing and path determination to move packets across internetworks.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Layer 2 (Data Link)</b>: Layer 2 delivers frames within a single segment using MAC addresses and does not perform internetwork path selection.</span><span class='qd'><b>Layer 4 (Transport)</b>: Layer 4 provides end-to-end delivery and ports but relies on Layer 3 for routing.</span><span class='qd'><b>Layer 7 (Application)</b>: Layer 7 serves applications such as HTTP and DNS and plays no role in path determination.</span>" },
  { id:"D1-039", domain:1, obj:"1.5", diff:"medium", q:"A technician finds two devices that won't link at 1 Gbps over Cat 5e. The run is 95 meters of properly terminated Cat 5e. What is the MOST likely concern to verify next?", options:["Cat 5e cannot support 1 Gbps at any length","The cable exceeds the 100 m maximum for twisted pair","Crosstalk or termination quality on the cable","Single-mode optics are required"], answer:2, explain:"Cat 5e is rated for 1 Gbps to 100 m, so at 95 m the most likely fault is <strong>Crosstalk or termination quality on the cable</strong> rather than the standard itself.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Cat 5e cannot support 1 Gbps at any length</b>: Cat 5e is specifically rated for 1000BASE-T gigabit, so this is false.</span><span class='qd'><b>The cable exceeds the 100 m maximum for twisted pair</b>: At 95 m the run is within the 100 m limit, so length is not the problem.</span><span class='qd'><b>Single-mode optics are required</b>: This is a copper Ethernet run, and gigabit over Cat 5e does not require fiber optics.</span>" },
  { id:"D1-040", domain:1, obj:"1.4", diff:"medium", q:"Which protocol provides time synchronization across network devices and uses UDP port 123?", options:["NTLM","SMB","SNTP only","NTP"], answer:3, explain:"<strong>NTP</strong> uses UDP port 123 to synchronize clocks across networked systems, which is vital for accurate logging and authentication.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SNTP only</b>: SNTP is a simplified subset of NTP, and the broadly correct protocol name for time synchronization is NTP, so restricting it to SNTP only is wrong.</span><span class='qd'><b>NTLM</b>: NTLM is a Microsoft authentication protocol, not a time synchronization service.</span><span class='qd'><b>SMB</b>: SMB provides Windows file and printer sharing, unrelated to clock synchronization.</span>" },
  { id:"D1-041", domain:1, obj:"1.2", diff:"medium", q:"A company wants outbound web requests to be cached and filtered through a single point. Which device is BEST suited?", options:["Forward proxy server","Reverse proxy","Layer 2 switch","Wireless controller"], answer:0, explain:"A <strong>Forward proxy server</strong> sits in the outbound path of client requests, caching content and enforcing content-filtering policy at a single chokepoint.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Reverse proxy</b>: A reverse proxy handles inbound requests on behalf of internal servers, not outbound client browsing.</span><span class='qd'><b>Layer 2 switch</b>: A Layer 2 switch forwards frames by MAC and cannot cache or filter web content.</span><span class='qd'><b>Wireless controller</b>: A wireless controller manages access points and does not proxy or filter web requests.</span>" },
  { id:"D1-042", domain:1, obj:"1.4", diff:"medium", q:"Which port is used by FTP for the control connection?", options:["20","21","22","69"], answer:1, explain:"<strong>FTP control uses TCP port 21</strong> to carry commands and responses, while the data channel uses port 20 in active mode.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>20</b>: Port 20 is the FTP data channel in active mode, not the control connection.</span><span class='qd'><b>22</b>: Port 22 is SSH and SFTP, a different protocol from classic FTP control.</span><span class='qd'><b>69</b>: Port 69 is TFTP over UDP, a separate lightweight transfer protocol with no control channel.</span>" },
  { id:"D1-043", domain:1, obj:"1.1", diff:"hard", q:"A packet capture shows traffic being fragmented and reassembled with TTL decrements at each hop. At which OSI layer is the TTL field processed?", options:["Layer 5 (Session)","Layer 2 (Data Link)","Layer 3 (Network)","Layer 4 (Transport)"], answer:2, explain:"The <strong>Layer 3 (Network)</strong> layer processes the TTL field, since TTL lives in the IP header and each router decrements it.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Layer 2 (Data Link)</b>: Layer 2 frames have no TTL field, since TTL is part of the IP header at Layer 3.</span><span class='qd'><b>Layer 4 (Transport)</b>: TCP and UDP headers at Layer 4 do not contain the TTL field.</span><span class='qd'><b>Layer 5 (Session)</b>: The Session layer manages dialogues and has nothing to do with the IP TTL field.</span>" },
  { id:"D1-044", domain:1, obj:"1.4", diff:"hard", q:"An application requires the LOWEST latency and can tolerate occasional packet loss, such as live VoIP. Which transport protocol behavior BEST supports this?", options:["ICMP, because it is connectionless","TCP with a larger window size only","TCP, because retransmission ensures quality","UDP, because it avoids handshake and retransmission overhead"], answer:3, explain:"<strong>UDP, because it avoids handshake and retransmission overhead</strong> suits live VoIP, which prefers low latency and can tolerate occasional loss.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>TCP, because retransmission ensures quality</b>: TCP retransmission adds delay and jitter that harm real-time voice rather than helping it.</span><span class='qd'><b>ICMP, because it is connectionless</b>: ICMP is a control and diagnostic protocol and is not used to carry application media streams.</span><span class='qd'><b>TCP with a larger window size only</b>: A larger TCP window does not remove the handshake and retransmission delays that make TCP a poor fit for live voice.</span>" },
  { id:"D1-045", domain:1, obj:"1.1", diff:"hard", q:"A user cannot reach a website by name, but pinging the site's IP succeeds. Considering the OSI model, the problem MOST likely involves a protocol operating at which layer?", options:["Layer 7 (Application)","Layer 2 (Data Link)","Layer 1 (Physical)","Layer 3 (Network)"], answer:0, explain:"Name resolution depends on <strong>Layer 7 (Application)</strong> via DNS, so since the IP is reachable, lower layers work and DNS is the likely fault.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Layer 1 (Physical)</b>: A successful ping to the IP proves the physical link is up, so Layer 1 is not the issue.</span><span class='qd'><b>Layer 3 (Network)</b>: Reaching the IP by ping confirms Layer 3 routing works, ruling out a Network-layer fault.</span><span class='qd'><b>Layer 2 (Data Link)</b>: Successful packet delivery shows frames are being forwarded, so Layer 2 is functioning.</span>" },
  { id:"D1-046", domain:1, obj:"1.5", diff:"hard", q:"A 10GBASE-SR link over OM3 multimode fiber is failing intermittently at 350 meters. What is the MOST likely cause?", options:["The optics are single-mode and incompatible","OM3 at 10 Gbps exceeds its supported distance, so the run is too long","RJ45 connectors degrade fiber signals","UDP packet loss is corrupting the light"], answer:1, explain:"<strong>OM3 at 10 Gbps exceeds its supported distance, so the run is too long</strong>, because OM3 supports 10GBASE-SR only to roughly 300 m and 350 m is beyond that.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The optics are single-mode and incompatible</b>: 10GBASE-SR is a short-reach multimode standard, and OM3 is multimode, so the optics match the fiber type.</span><span class='qd'><b>RJ45 connectors degrade fiber signals</b>: Fiber links use connectors such as LC, not RJ45, so this does not apply.</span><span class='qd'><b>UDP packet loss is corrupting the light</b>: UDP is a transport protocol and does not physically affect the optical signal on the fiber.</span>" },
  { id:"D1-047", domain:1, obj:"1.4", diff:"hard", q:"A security audit requires replacing all cleartext remote-management and file-transfer protocols. Which set of replacements is MOST appropriate?", options:["Replace Telnet with HTTP (80) and FTP with SMTP (25)","Replace SSH with Telnet (23) and SFTP with FTP (21)","Replace Telnet with SSH (22) and FTP with SFTP (22)","Replace Telnet with RDP (3389) and FTP with TFTP (69)"], answer:2, explain:"<strong>Replace Telnet with SSH (22) and FTP with SFTP (22)</strong> swaps cleartext protocols for encrypted equivalents, both secured over SSH on port 22.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replace Telnet with RDP (3389) and FTP with TFTP (69)</b>: RDP is a remote desktop, not a Telnet shell replacement, and TFTP is unencrypted and unauthenticated.</span><span class='qd'><b>Replace Telnet with HTTP (80) and FTP with SMTP (25)</b>: HTTP and SMTP are unencrypted and are not remote-management or file-transfer protocols.</span><span class='qd'><b>Replace SSH with Telnet (23) and SFTP with FTP (21)</b>: This moves from secure to cleartext protocols, the opposite of the audit requirement.</span>" },
  { id:"D1-048", domain:1, obj:"1.2", diff:"hard", q:"Traffic destined for a public web service must be inspected, decrypted, and load-balanced before reaching internal servers. Which device placement is MOST appropriate?", options:["A forward proxy on each client workstation","A Layer 2 switch between the servers","A DHCP relay at the edge","A reverse proxy / load balancer at the network edge in front of the servers"], answer:3, explain:"A <strong>A reverse proxy / load balancer at the network edge in front of the servers</strong> can terminate TLS, inspect, and distribute inbound public traffic before it reaches internal servers.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A forward proxy on each client workstation</b>: A forward proxy handles outbound client browsing and cannot protect or balance traffic to public-facing servers.</span><span class='qd'><b>A Layer 2 switch between the servers</b>: A Layer 2 switch only forwards frames and cannot decrypt, inspect, or load-balance.</span><span class='qd'><b>A DHCP relay at the edge</b>: A DHCP relay forwards address-assignment requests and has no role in inspecting or balancing web traffic.</span>" },
  { id:"D1-049", domain:1, obj:"1.1", diff:"hard", q:"Encapsulation adds headers as data moves down the stack. Which sequence correctly orders the resulting PDUs from Layer 4 down to Layer 2?", options:["Segment, Packet, Frame","Packet, Segment, Frame","Bit, Frame, Packet","Frame, Packet, Segment"], answer:0, explain:"<strong>Segment, Packet, Frame</strong> is correct, since the Transport layer creates a segment, the Network layer wraps it into a packet, and the Data Link layer encloses it in a frame.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Frame, Packet, Segment</b>: This reverses the order, since encapsulation moves downward from segment to packet to frame.</span><span class='qd'><b>Packet, Segment, Frame</b>: This places the packet before the segment, but Layer 4 segments are created before Layer 3 packets.</span><span class='qd'><b>Bit, Frame, Packet</b>: Bits are the Layer 1 PDU and this sequence omits the Layer 4 segment entirely.</span>" },
  { id:"D1-050", domain:1, obj:"1.4", diff:"hard", q:"A firewall permits TCP 443 outbound but a user still cannot establish HTTPS sessions, while DNS lookups succeed. Which is the BEST next item to verify?", options:["That UDP 53 is blocked","That the three-way handshake on 443 completes (not blocked by a stateful rule)","That port 80 is open","That ICMP echo is allowed"], answer:1, explain:"Since DNS works, name resolution is fine, so the best next step is to verify <strong>That the three-way handshake on 443 completes (not blocked by a stateful rule)</strong>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>That UDP 53 is blocked</b>: DNS lookups already succeed, so UDP 53 is clearly not blocked.</span><span class='qd'><b>That port 80 is open</b>: Port 80 is plain HTTP and is irrelevant to establishing encrypted HTTPS sessions on 443.</span><span class='qd'><b>That ICMP echo is allowed</b>: ICMP echo is used for ping diagnostics and is not required for an HTTPS connection to form.</span>" },
  { id:"D1-051", domain:1, obj:"1.5", diff:"hard", q:"A technician needs a single 10 Gbps fiber transceiver that can be swapped without rebooting the switch. Which form factor is MOST appropriate?", options:["GBIC","SFP","SFP+","QSFP"], answer:2, explain:"<strong>SFP+</strong> is a hot-swappable transceiver that supports 10 Gbps and can be replaced without rebooting the switch.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>GBIC</b>: GBIC is an older, larger 1 Gbps form factor that does not reach 10 Gbps.</span><span class='qd'><b>SFP</b>: Standard SFP tops out at about 1 Gbps, below the required 10 Gbps.</span><span class='qd'><b>QSFP</b>: QSFP is a quad form factor aimed at 40 Gbps and above, more than this single 10 Gbps link needs.</span>" },
  { id:"D1-052", domain:1, obj:"1.2", diff:"hard", q:"A network design requires Layer 3 routing decisions and high-speed Layer 2 forwarding in a single device for inter-VLAN routing. Which device BEST meets this need?", options:["Repeater","Bridge","Unmanaged switch","Layer 3 (multilayer) switch"], answer:3, explain:"A <strong>Layer 3 (multilayer) switch</strong> performs wire-speed Layer 2 forwarding and Layer 3 routing in one device, making it ideal for inter-VLAN routing.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Unmanaged switch</b>: An unmanaged switch only forwards frames at Layer 2 and cannot route between VLANs.</span><span class='qd'><b>Repeater</b>: A repeater regenerates signals at Layer 1 and offers no switching or routing.</span><span class='qd'><b>Bridge</b>: A bridge connects Layer 2 segments and cannot make Layer 3 routing decisions.</span>" },
  { id:"D1-053", domain:1, obj:"1.4", diff:"hard", q:"An administrator must allow secure directory authentication and Kerberos. Which combination of ports should be permitted?", options:["LDAPS 636 and Kerberos 88","LDAP 389 and Kerberos 464","LDAPS 443 and Kerberos 88","LDAP 636 and Kerberos 749"], answer:0, explain:"<strong>LDAPS 636 and Kerberos 88</strong> is correct, providing TLS-secured directory queries on TCP 636 and ticket-based authentication on port 88.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>LDAP 389 and Kerberos 464</b>: LDAP 389 is unencrypted, and port 464 is the Kerberos password-change service, not the main authentication port.</span><span class='qd'><b>LDAPS 443 and Kerberos 88</b>: LDAPS uses 636, not 443, which is HTTPS.</span><span class='qd'><b>LDAP 636 and Kerberos 749</b>: Port 636 is LDAPS not plain LDAP, and 749 is the legacy Kerberos admin port, not authentication on 88.</span>" },
  { id:"D1-054", domain:1, obj:"1.1", diff:"hard", q:"A switch receives a frame, reads the destination MAC, and forwards it, but never inspects the IP header. This behavior confirms the switch operates primarily at which layer, and what does it ignore?", options:["Layer 3; it ignores MAC addresses","Layer 2; it ignores Layer 3 IP information","Layer 4; it ignores ports","Layer 1; it ignores frames"], answer:1, explain:"A traditional switch operates at <strong>Layer 2; it ignores Layer 3 IP information</strong>, forwarding strictly by destination MAC address.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Layer 3; it ignores MAC addresses</b>: This is reversed, since the switch reads MAC addresses and ignores Layer 3 IP details.</span><span class='qd'><b>Layer 4; it ignores ports</b>: A basic switch operates at Layer 2 and does not process Layer 4 ports at all.</span><span class='qd'><b>Layer 1; it ignores frames</b>: The switch clearly reads frames to extract the MAC, so it operates above Layer 1.</span>" },
  { id:"D1-055", domain:1, obj:"1.2", diff:"hard", q:"To protect web servers from SQL injection and cross-site scripting at the application layer, which appliance is MOST appropriate?", options:["Load balancer with no inspection","Stateless packet-filter firewall","Web Application Firewall (WAF)","Layer 2 switch"], answer:2, explain:"A <strong>Web Application Firewall (WAF)</strong> inspects HTTP and HTTPS traffic at Layer 7 to block application attacks such as SQL injection and cross-site scripting.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Stateless packet-filter firewall</b>: A stateless packet filter only checks IPs, ports, and protocols and cannot parse application-layer payloads for injection attacks.</span><span class='qd'><b>Layer 2 switch</b>: A Layer 2 switch forwards frames by MAC and has no visibility into HTTP content.</span><span class='qd'><b>Load balancer with no inspection</b>: A load balancer without inspection merely distributes requests and does not filter malicious application input.</span>" },
  { id:"D1-056", domain:1, obj:"1.4", diff:"medium", q:"Which protocol and port provide secure, encrypted retrieval of email using IMAP over TLS?", options:["IMAP over TCP 143","POP3S over TCP 995","SMTP over TCP 587","IMAPS over TCP 993"], answer:3, explain:"<strong>IMAPS over TCP 993</strong> wraps IMAP mailbox access in TLS, providing encrypted retrieval of email.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>IMAP over TCP 143</b>: Plain IMAP on 143 retrieves mail without TLS encryption.</span><span class='qd'><b>POP3S over TCP 995</b>: POP3S is the secure variant of POP3, not IMAP, so it does not match the requirement.</span><span class='qd'><b>SMTP over TCP 587</b>: Port 587 is SMTP mail submission for sending, not retrieving, email.</span>" },
  { id:"D1-057", domain:1, obj:"1.5", diff:"medium", q:"Which cable standard would a technician choose to minimize electromagnetic interference in an environment with heavy machinery?", options:["STP / shielded twisted pair","RG-6 coaxial","Plenum-rated UTP only","UTP Cat 5e"], answer:0, explain:"<strong>STP / shielded twisted pair</strong> adds metallic shielding that reduces electromagnetic interference, making it ideal near heavy machinery.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>UTP Cat 5e</b>: Unshielded twisted pair has no shielding and is more susceptible to EMI in noisy environments.</span><span class='qd'><b>RG-6 coaxial</b>: RG-6 is a coaxial cable for video and broadband, not the data cabling choice implied for this run.</span><span class='qd'><b>Plenum-rated UTP only</b>: A plenum rating addresses fire and smoke safety in air spaces, not electromagnetic interference.</span>" },
  { id:"D1-058", domain:1, obj:"1.4", diff:"medium", q:"A VoIP deployment uses SIP for call signaling. Which default port is associated with unencrypted SIP?", options:["TCP 1723","TCP/UDP 5060","TCP 5061","UDP 1720"], answer:1, explain:"<strong>TCP/UDP 5060</strong> is the default port for unencrypted SIP call signaling.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>TCP 5061</b>: Port 5061 is SIP over TLS, the encrypted variant, not unencrypted SIP.</span><span class='qd'><b>UDP 1720</b>: Port 1720 is used by H.323 call signaling, a different VoIP protocol from SIP.</span><span class='qd'><b>TCP 1723</b>: Port 1723 is PPTP for VPN tunneling, unrelated to SIP signaling.</span>" }
);
NETPLUS.questions.push(
  { id:"D1-059", domain:1, obj:"1.7", diff:"easy", q:"Which of the following is a private IPv4 address range defined by RFC 1918?", options:["169.254.0.0/16","172.32.0.0/12","192.168.0.0/16","11.0.0.0/8"], answer:2, explain:"<strong>192.168.0.0/16</strong> is one of the three RFC 1918 private blocks (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) reserved for internal use and not routed on the public internet.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>172.32.0.0/12</b>: The private Class B range is 172.16.0.0/12 (172.16 through 172.31), so 172.32 falls outside it and is public.</span><span class='qd'><b>11.0.0.0/8</b>: Only 10.0.0.0/8 is private; 11.0.0.0/8 is a publicly assigned block.</span><span class='qd'><b>169.254.0.0/16</b>: This is the APIPA link-local range defined by RFC 3927, not an RFC 1918 private range.</span>" },
  { id:"D1-060", domain:1, obj:"1.7", diff:"easy", q:"A host configures itself with an address in the 169.254.0.0/16 range. What does this indicate?", options:["The host is using a loopback address","A static address was assigned","The host received a DHCP lease","DHCP failed and APIPA was used"], answer:3, explain:"<strong>DHCP failed and APIPA was used</strong> because a 169.254.x.x address is self-assigned only when the client cannot reach a DHCP server to obtain a lease.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A static address was assigned</b>: An administrator would not manually assign a reserved 169.254 link-local address, and a static config does not depend on DHCP.</span><span class='qd'><b>The host received a DHCP lease</b>: A successful lease yields an address from the configured scope, never the APIPA 169.254 range.</span><span class='qd'><b>The host is using a loopback address</b>: Loopback is 127.0.0.0/8 (127.0.0.1), a different reserved block entirely.</span>" },
  { id:"D1-061", domain:1, obj:"1.7", diff:"medium", q:"Given the host address 192.168.10.50/26, what is the network address?", options:["192.168.10.0","192.168.10.32","192.168.10.48","192.168.10.64"], answer:0, explain:"<strong>192.168.10.0</strong> is correct because a /26 mask creates blocks of 64 addresses (0-63, 64-127), and host .50 falls in the first block whose network address is .0.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>192.168.10.32</b>: This would be a subnet boundary only for a /27 (block size 32), not a /26.</span><span class='qd'><b>192.168.10.48</b>: 48 is not a multiple of the /26 block size of 64, so it cannot be a network address.</span><span class='qd'><b>192.168.10.64</b>: This is the start of the second /26 subnet (64-127), but .50 is below 64 so it belongs to the .0 subnet.</span>" },
  { id:"D1-062", domain:1, obj:"1.7", diff:"medium", q:"For the network 10.1.1.0/27, what is the broadcast address?", options:["10.1.1.15","10.1.1.31","10.1.1.63","10.1.1.255"], answer:1, explain:"<strong>10.1.1.31</strong> is correct because a /27 uses 32-address blocks, making the first subnet 10.1.1.0-31 with .31 as its broadcast address.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>10.1.1.15</b>: 15 is the broadcast for a /28 (block size 16), not a /27.</span><span class='qd'><b>10.1.1.63</b>: 63 is the broadcast of the second /27 subnet (32-63), not the first.</span><span class='qd'><b>10.1.1.255</b>: 255 is the broadcast only for a /24 covering the whole fourth octet, far larger than a /27.</span>" },
  { id:"D1-063", domain:1, obj:"1.7", diff:"medium", q:"How many usable host addresses are available in a /29 subnet?", options:["14","4","6","8"], answer:2, explain:"<strong>6</strong> is correct because a /29 contains 2^3 = 8 total addresses, and subtracting the network and broadcast addresses leaves 6 usable hosts.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>4</b>: 4 usable hosts corresponds to a /29 only if you wrongly subtract more than two addresses; 8 minus 2 is 6.</span><span class='qd'><b>8</b>: 8 is the total address count for a /29, but the network and broadcast addresses are not usable for hosts.</span><span class='qd'><b>14</b>: 14 usable hosts is the count for a /28 (16 total minus 2), not a /29.</span>" },
  { id:"D1-064", domain:1, obj:"1.6", diff:"easy", q:"Which physical topology connects every endpoint to a single central switch or hub?", options:["Bus","Mesh","Ring","Star"], answer:3, explain:"<strong>Star</strong> is correct because each endpoint has its own dedicated link to a central switch or hub, the dominant design in modern Ethernet LANs.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Mesh</b>: A mesh interconnects nodes directly to one another rather than through a single central device.</span><span class='qd'><b>Ring</b>: A ring chains each node to two neighbors forming a closed loop, with no central hub.</span><span class='qd'><b>Bus</b>: A bus shares one common backbone cable that all nodes tap into, not a central switch.</span>" },
  { id:"D1-065", domain:1, obj:"1.6", diff:"medium", q:"A data center fabric uses leaf switches that each connect to every spine switch, with no leaf-to-leaf links. What topology is this?", options:["Spine-leaf","Hub-and-spoke","Ring","Three-tier"], answer:0, explain:"<strong>Spine-leaf</strong> is correct because every leaf connects to every spine with no leaf-to-leaf links, giving a uniform two-hop Clos fabric with predictable east-west latency.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Three-tier</b>: The classic core, distribution, and access hierarchy is optimized for north-south traffic, not the flat spine-leaf design described.</span><span class='qd'><b>Hub-and-spoke</b>: This connects remote spoke sites to one central hub, a WAN topology, not a data center fabric.</span><span class='qd'><b>Ring</b>: A ring passes traffic around a closed loop through neighbors, which is not how leaf and spine switches interconnect.</span>" },
  { id:"D1-066", domain:1, obj:"1.3", diff:"easy", q:"In which cloud service model does the provider manage the operating system and runtime while the customer deploys only their application code?", options:["IaaS","PaaS","SaaS","DaaS"], answer:1, explain:"<strong>PaaS</strong> is correct because the provider manages the OS and runtime while the customer supplies only application code and data.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>IaaS</b>: With IaaS the customer must install and manage the OS and runtime themselves on top of provided virtual infrastructure.</span><span class='qd'><b>SaaS</b>: SaaS delivers a finished application; the customer writes no code at all.</span><span class='qd'><b>DaaS</b>: Desktop as a Service delivers virtual desktops, not an application development platform.</span>" },
  { id:"D1-067", domain:1, obj:"1.3", diff:"easy", q:"A company uses a web-based email service it does not install or maintain. Which cloud model is this?", options:["IaaS","PaaS","SaaS","On-premises"], answer:2, explain:"<strong>SaaS</strong> is correct because the company consumes a complete, vendor-managed application over the network without installing or maintaining it.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>IaaS</b>: IaaS provides raw compute and storage that the customer must configure, not a ready-to-use email application.</span><span class='qd'><b>PaaS</b>: PaaS gives a development platform for building apps, but here the company only consumes a finished app.</span><span class='qd'><b>On-premises</b>: On-premises means the organization installs and maintains the software itself, the opposite of the scenario.</span>" },
  { id:"D1-068", domain:1, obj:"1.8", diff:"medium", q:"Which security model assumes no implicit trust and requires verification of every user and device for each access request?", options:["Defense in depth","Least privilege only","Perimeter security","Zero trust"], answer:3, explain:"<strong>Zero trust</strong> is correct because it removes implicit trust based on network location and verifies every user and device on each access request.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Perimeter security</b>: Perimeter (castle-and-moat) security trusts anything inside the boundary, the very assumption zero trust rejects.</span><span class='qd'><b>Defense in depth</b>: This layers multiple controls but does not by itself eliminate implicit trust within the network.</span><span class='qd'><b>Least privilege only</b>: Least privilege limits permissions but is just one principle, not the full continuous-verification model.</span>" },
  { id:"D1-069", domain:1, obj:"1.8", diff:"medium", q:"Which technology converges SD-WAN with cloud-delivered security services such as SWG, CASB, and ZTNA into a single framework?", options:["SASE","MPLS","VXLAN","SDN"], answer:0, explain:"<strong>SASE</strong> is correct because Secure Access Service Edge converges SD-WAN with cloud-delivered security services such as SWG, CASB, and ZTNA into one framework.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SDN</b>: SDN separates the control and data planes within a network but does not bundle cloud security services with WAN.</span><span class='qd'><b>MPLS</b>: MPLS is a label-switching transport technology, not a converged security-and-networking framework.</span><span class='qd'><b>VXLAN</b>: VXLAN is a Layer 2 overlay encapsulation for extending segments, unrelated to cloud security convergence.</span>" },
  { id:"D1-070", domain:1, obj:"1.8", diff:"medium", q:"What is the primary benefit of SD-WAN over traditional WAN routing?", options:["It eliminates the need for any internet circuits","It centrally applies policy and dynamically steers traffic across multiple transports","It encrypts all LAN traffic by default","It removes the need for physical routers"], answer:1, explain:"<strong>It centrally applies policy and dynamically steers traffic across multiple transports</strong> is correct because SD-WAN uses centralized, application-aware policy to route across MPLS, broadband, and LTE links.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It eliminates the need for any internet circuits</b>: SD-WAN often uses internet broadband as a transport rather than eliminating it.</span><span class='qd'><b>It encrypts all LAN traffic by default</b>: SD-WAN secures WAN tunnels between sites; it does not automatically encrypt internal LAN traffic.</span><span class='qd'><b>It removes the need for physical routers</b>: SD-WAN still requires edge devices (physical or virtual) at each site to terminate the transports.</span>" },
  { id:"D1-071", domain:1, obj:"1.7", diff:"medium", q:"What is the default (classful) subnet mask for the address 172.16.5.10?", options:["255.255.255.255","255.0.0.0","255.255.0.0","255.255.255.0"], answer:2, explain:"<strong>255.255.0.0</strong> is correct because 172.16.5.10 is a Class B address (first octet 128-191), whose default classful mask is /16.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>255.0.0.0</b>: This /8 mask is the default for Class A (first octet 1-126), not Class B.</span><span class='qd'><b>255.255.255.0</b>: This /24 mask is the default for Class C (first octet 192-223), not Class B.</span><span class='qd'><b>255.255.255.255</b>: This /32 is a host mask matching a single address, never a default classful mask.</span>" },
  { id:"D1-072", domain:1, obj:"1.7", diff:"hard", q:"A subnet must support at least 500 hosts. Which prefix length is the MOST efficient choice?", options:["/24","/21","/22","/23"], answer:3, explain:"<strong>/23</strong> is correct because it yields 510 usable hosts (512 minus 2), the smallest block that still satisfies the 500-host requirement.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>/22</b>: A /22 provides 1022 usable hosts, which works but wastes far more space than a /23.</span><span class='qd'><b>/24</b>: A /24 gives only 254 usable hosts, too few for 500.</span><span class='qd'><b>/21</b>: A /21 provides 2046 usable hosts, even more wasteful than /22 for only 500 needed.</span>" },
  { id:"D1-073", domain:1, obj:"1.7", diff:"easy", q:"Which technique allows many internal hosts to share a single public IP by tracking unique source port numbers?", options:["PAT","DNS","DHCP","Static NAT"], answer:0, explain:"<strong>PAT</strong> is correct because Port Address Translation (NAT overload) multiplexes many internal hosts onto one public IP by tracking unique source port numbers.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Static NAT</b>: Static NAT is a fixed one-to-one mapping and cannot share a single public address among many hosts.</span><span class='qd'><b>DNS</b>: DNS resolves names to IP addresses and performs no address translation.</span><span class='qd'><b>DHCP</b>: DHCP assigns IP configuration to clients but does not translate addresses or multiplex on ports.</span>" },
  { id:"D1-074", domain:1, obj:"1.7", diff:"easy", q:"An IPv6 address beginning with fe80:: belongs to which address scope?", options:["Global unicast","Link-local","Unique local","Multicast"], answer:1, explain:"<strong>Link-local</strong> is correct because the fe80::/10 range is reserved for link-local addresses that are valid only on the local network segment.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Global unicast</b>: Global unicast addresses begin with 2000::/3 and are routable on the public internet, not fe80.</span><span class='qd'><b>Unique local</b>: Unique local addresses use fc00::/7 (commonly fd00::/8) for internal routing, not fe80.</span><span class='qd'><b>Multicast</b>: IPv6 multicast addresses begin with ff00::/8, not fe80.</span>" },
  { id:"D1-075", domain:1, obj:"1.7", diff:"medium", q:"Which IPv6 address type is the rough equivalent of an RFC 1918 private IPv4 address and uses the fc00::/7 prefix?", options:["Link-local","Global unicast","Unique local","Anycast"], answer:2, explain:"<strong>Unique local</strong> is correct because ULAs (fc00::/7, commonly fd00::/8) are routable within an organization but not on the public internet, mirroring RFC 1918 private IPv4.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Link-local</b>: Link-local (fe80::/10) is confined to a single segment and is not routed even within the organization.</span><span class='qd'><b>Global unicast</b>: Global unicast (2000::/3) is publicly routable, the opposite of a private equivalent.</span><span class='qd'><b>Anycast</b>: Anycast is a delivery method to the nearest of several nodes, not an address scope analogous to RFC 1918.</span>" },
  { id:"D1-076", domain:1, obj:"1.7", diff:"medium", q:"Given 192.168.1.0/24 split into /28 subnets, how many subnets are created?", options:["32","14","8","16"], answer:3, explain:"<strong>16</strong> is correct because moving from /24 to /28 borrows 4 host bits, yielding 2^4 = 16 subnets.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>8</b>: 8 subnets would result from borrowing only 3 bits (a /27), not the 4 bits of a /28.</span><span class='qd'><b>32</b>: 32 subnets would require borrowing 5 bits (a /29), one more than /28.</span><span class='qd'><b>14</b>: 14 is the number of usable hosts per /28 subnet, not the count of subnets.</span>" },
  { id:"D1-077", domain:1, obj:"1.7", diff:"hard", q:"A host has IP 172.20.130.45 with mask 255.255.192.0. What is the network address?", options:["172.20.128.0","172.20.130.0","172.20.0.0","172.20.192.0"], answer:0, explain:"<strong>172.20.128.0</strong> is correct because 255.255.192.0 is a /18 with a block size of 64 in the third octet, and 130 falls in the 128-191 block.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>172.20.130.0</b>: This treats the mask as a /24; with a /18 block size of 64, the boundary is 128, not 130.</span><span class='qd'><b>172.20.0.0</b>: This would be the network only for a /16 mask, ignoring the borrowed bits that make it /18.</span><span class='qd'><b>172.20.192.0</b>: 192 is the start of the next /18 block (192-255); 130 is below it, so it belongs to the 128 block.</span>" },
  { id:"D1-078", domain:1, obj:"1.6", diff:"medium", q:"Which topology provides the highest fault tolerance by giving every node a direct link to every other node?", options:["Bus","Full mesh","Ring","Star"], answer:1, explain:"<strong>Full mesh</strong> is correct because a direct link between every pair of nodes maximizes redundancy, requiring n(n-1)/2 links.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Star</b>: A star centralizes all connections on one device, which becomes a single point of failure.</span><span class='qd'><b>Bus</b>: A bus relies on one shared backbone cable whose failure can disrupt the entire segment.</span><span class='qd'><b>Ring</b>: A simple ring offers limited redundancy because a single break can isolate nodes unless it is dual-ring.</span>" },
  { id:"D1-079", domain:1, obj:"1.6", diff:"medium", q:"In a traditional three-tier hierarchical network design, which layer aggregates traffic from access switches and enforces policy?", options:["Edge","Core","Distribution","Access"], answer:2, explain:"<strong>Distribution</strong> is correct because the distribution (aggregation) layer collects access-switch traffic, applies routing and policy, and forwards toward the core.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Core</b>: The core layer provides high-speed backbone switching and avoids policy processing to maximize throughput.</span><span class='qd'><b>Access</b>: The access layer connects end devices directly and does not aggregate other switches.</span><span class='qd'><b>Edge</b>: Edge is not one of the three classic hierarchical layers; it generally refers to the boundary toward external networks.</span>" },
  { id:"D1-080", domain:1, obj:"1.3", diff:"medium", q:"A startup rents virtual machines, storage, and networking and installs its own OS and applications. Which cloud model is this?", options:["FaaS","SaaS","PaaS","IaaS"], answer:3, explain:"<strong>IaaS</strong> is correct because the provider supplies virtual machines, storage, and networking while the customer installs and manages its own OS and applications.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SaaS</b>: SaaS delivers a finished application; the customer would not install its own OS.</span><span class='qd'><b>PaaS</b>: PaaS manages the OS and runtime for the customer, removing the need to install an OS.</span><span class='qd'><b>FaaS</b>: Function as a Service runs event-driven code without any server or OS management by the customer.</span>" },
  { id:"D1-081", domain:1, obj:"1.3", diff:"medium", q:"Which cloud deployment model combines on-premises infrastructure with public cloud resources, allowing workloads to move between them?", options:["Hybrid cloud","Community cloud","Private cloud","Public cloud"], answer:0, explain:"<strong>Hybrid cloud</strong> is correct because it integrates on-premises infrastructure with public cloud so workloads can burst or migrate between them.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Private cloud</b>: A private cloud is dedicated to a single organization and does not by itself combine with public cloud resources.</span><span class='qd'><b>Public cloud</b>: Public cloud alone is multi-tenant provider infrastructure with no on-premises component.</span><span class='qd'><b>Community cloud</b>: A community cloud is shared among organizations with common concerns, not a mix of private and public.</span>" },
  { id:"D1-082", domain:1, obj:"1.3", diff:"hard", q:"An enterprise wants a dedicated, private high-bandwidth connection to its cloud provider that bypasses the public internet. Which option BEST fits?", options:["VPN over internet","Direct Connect / dedicated interconnect","NAT gateway","Internet gateway"], answer:1, explain:"<strong>Direct Connect / dedicated interconnect</strong> is correct because it provides a private, consistent-performance circuit to the cloud that bypasses the public internet.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>VPN over internet</b>: A VPN tunnels over the public internet, so it cannot guarantee the dedicated bandwidth and latency requested.</span><span class='qd'><b>NAT gateway</b>: A NAT gateway lets private instances reach the internet for outbound traffic; it is not a private cloud link.</span><span class='qd'><b>Internet gateway</b>: An internet gateway provides public internet access to a VPC, the opposite of bypassing the internet.</span>" },
  { id:"D1-083", domain:1, obj:"1.8", diff:"hard", q:"Which architecture separates the network control plane from the data plane and manages forwarding through a centralized controller?", options:["NFV","SD-WAN","SDN","SASE"], answer:2, explain:"<strong>SDN</strong> is correct because Software-Defined Networking decouples the control plane from the data plane and programs forwarding through a centralized controller.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SD-WAN</b>: SD-WAN applies SDN principles specifically to WAN path selection, not the general control and data plane separation described.</span><span class='qd'><b>SASE</b>: SASE converges WAN and cloud security services and is not defined by control and data plane separation.</span><span class='qd'><b>NFV</b>: Network Function Virtualization runs network functions as software on commodity hardware but does not centralize forwarding control.</span>" },
  { id:"D1-084", domain:1, obj:"1.7", diff:"hard", q:"Using VLSM on 10.0.0.0/24, a point-to-point link needs exactly 2 usable addresses. Which prefix is MOST efficient?", options:["/31","/28","/29","/30"], answer:3, explain:"<strong>/30</strong> is correct because it provides exactly 2 usable host addresses (4 total minus network and broadcast), ideal for a point-to-point link.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>/29</b>: A /29 gives 6 usable hosts, wasting four addresses on a link that needs only two.</span><span class='qd'><b>/31</b>: A /31 (RFC 3021) offers 2 addresses with no broadcast and is valid for point-to-point, but a standard /30 is the expected MOST efficient answer that still gives 2 usable hosts in classic subnetting.</span><span class='qd'><b>/28</b>: A /28 yields 14 usable hosts, far more than the two required.</span>" },
  { id:"D1-085", domain:1, obj:"1.7", diff:"medium", q:"What subnet mask corresponds to the CIDR prefix /20?", options:["255.255.240.0","255.255.248.0","255.255.224.0","255.255.255.0"], answer:0, explain:"<strong>255.255.240.0</strong> is correct because /20 sets the first 4 bits of the third octet (11110000 = 240).<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>255.255.248.0</b>: 248 (11111000) corresponds to /21, with 5 bits in the third octet.</span><span class='qd'><b>255.255.224.0</b>: 224 (11100000) corresponds to /19, with only 3 bits in the third octet.</span><span class='qd'><b>255.255.255.0</b>: This is a /24 mask, with all 8 bits of the third octet set.</span>" },
  { id:"D1-086", domain:1, obj:"1.7", diff:"medium", q:"Which address is the broadcast address for the subnet 192.168.100.64/26?", options:["192.168.100.95","192.168.100.127","192.168.100.63","192.168.100.128"], answer:1, explain:"<strong>192.168.100.127</strong> is correct because a /26 block is 64 addresses, so the .64 subnet spans 64-127 and its broadcast is .127.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>192.168.100.95</b>: 95 is the broadcast for a /27 subnet (64-95), not a /26.</span><span class='qd'><b>192.168.100.63</b>: 63 is the broadcast of the previous /26 (0-63), not the .64 subnet.</span><span class='qd'><b>192.168.100.128</b>: 128 is the network address of the next /26 subnet, not a broadcast.</span>" },
  { id:"D1-087", domain:1, obj:"1.7", diff:"hard", q:"A host is configured as 10.10.10.130/25. Which statement about its subnet is correct?", options:["Network is 10.10.10.0; broadcast is 10.10.10.255","Network is 10.10.10.0; broadcast is 10.10.10.127","Network is 10.10.10.128; broadcast is 10.10.10.255","Network is 10.10.10.128; broadcast is 10.10.10.191"], answer:2, explain:"<strong>Network is 10.10.10.128; broadcast is 10.10.10.255</strong> is correct because a /25 splits the octet into 0-127 and 128-255, and host .130 sits in the second subnet.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Network is 10.10.10.0; broadcast is 10.10.10.127</b>: This is the first /25 subnet, but .130 is above 127 so it is not in this block.</span><span class='qd'><b>Network is 10.10.10.128; broadcast is 10.10.10.191</b>: A broadcast of .191 implies a /26 block size of 64, not the /25 block size of 128.</span><span class='qd'><b>Network is 10.10.10.0; broadcast is 10.10.10.255</b>: This describes a single /24, ignoring the /25 split that places .130 in the .128 subnet.</span>" },
  { id:"D1-088", domain:1, obj:"1.6", diff:"easy", q:"Which topology forwards data in one direction around a closed loop, passing through each device in turn?", options:["Mesh","Hybrid","Star","Ring"], answer:3, explain:"<strong>Ring</strong> is correct because each node connects to two neighbors forming a closed loop, and data circulates in one direction through each device in turn.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Star</b>: A star sends all traffic through a central device rather than passing it node to node around a loop.</span><span class='qd'><b>Mesh</b>: A mesh provides multiple direct paths between nodes, not a single circulating loop.</span><span class='qd'><b>Hybrid</b>: A hybrid combines two or more topology types and does not specifically describe a one-direction loop.</span>" },
  { id:"D1-089", domain:1, obj:"1.6", diff:"hard", q:"An administrator must justify spine-leaf over three-tier for a new virtualized data center. Which is the BEST justification?", options:["It provides consistent, low-latency east-west bandwidth between any two leaves","It eliminates the need for VLANs","It removes the need for a routing protocol","It reduces the number of switches required"], answer:0, explain:"<strong>It provides consistent, low-latency east-west bandwidth between any two leaves</strong> is correct because virtualized data centers generate heavy server-to-server traffic that spine-leaf keeps to a uniform two-hop path.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It reduces the number of switches required</b>: Spine-leaf often uses more switches than three-tier; its benefit is performance, not switch count.</span><span class='qd'><b>It eliminates the need for VLANs</b>: Spine-leaf fabrics still use VLANs or VXLAN segments for tenant isolation.</span><span class='qd'><b>It removes the need for a routing protocol</b>: Spine-leaf fabrics rely heavily on routing protocols such as BGP between leaves and spines.</span>" },
  { id:"D1-090", domain:1, obj:"1.1", diff:"easy", q:"At which OSI layer do IP addresses and routing operate?", options:["Layer 2","Layer 3","Layer 4","Layer 7"], answer:1, explain:"<strong>Layer 3</strong> is correct because the Network layer handles logical IP addressing and routing between networks.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Layer 2</b>: The Data Link layer uses MAC addresses and switching within a segment, not IP routing.</span><span class='qd'><b>Layer 4</b>: The Transport layer handles segmentation and port-based delivery via TCP and UDP, not IP routing.</span><span class='qd'><b>Layer 7</b>: The Application layer provides services to applications and does not perform IP addressing or routing.</span>" },
  { id:"D1-091", domain:1, obj:"1.1", diff:"medium", q:"A switch makes forwarding decisions based on MAC addresses. At which OSI layer does it primarily operate?", options:["Layer 4","Layer 1","Layer 2","Layer 3"], answer:2, explain:"<strong>Layer 2</strong> is correct because a traditional switch forwards frames using MAC addresses at the Data Link layer.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Layer 1</b>: The Physical layer transmits raw bits and hubs operate here, with no awareness of MAC addresses.</span><span class='qd'><b>Layer 3</b>: Layer 3 forwarding uses IP addresses (routing), which a basic MAC-based switch does not perform.</span><span class='qd'><b>Layer 4</b>: Layer 4 deals with TCP and UDP ports, not MAC-based frame forwarding.</span>" },
  { id:"D1-092", domain:1, obj:"1.2", diff:"easy", q:"Which protocol dynamically assigns IP addresses, subnet masks, and gateways to clients?", options:["SNMP","NTP","DNS","DHCP"], answer:3, explain:"<strong>DHCP</strong> is correct because it automatically leases IP addresses, subnet masks, and gateways to clients.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS</b>: DNS resolves hostnames to IP addresses and does not assign IP configuration.</span><span class='qd'><b>SNMP</b>: SNMP monitors and manages network devices; it does not lease addresses.</span><span class='qd'><b>NTP</b>: NTP synchronizes clocks across devices and has no role in IP assignment.</span>" },
  { id:"D1-093", domain:1, obj:"1.2", diff:"medium", q:"Which protocol and port pair is used by HTTPS?", options:["TCP 443","UDP 53","TCP 22","TCP 80"], answer:0, explain:"<strong>TCP 443</strong> is correct because HTTPS carries web traffic secured with TLS over TCP port 443.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>TCP 80</b>: Port 80 is unencrypted HTTP, not HTTPS.</span><span class='qd'><b>UDP 53</b>: UDP 53 is DNS query traffic, unrelated to web HTTPS.</span><span class='qd'><b>TCP 22</b>: TCP 22 is SSH for secure remote shell, not HTTPS web traffic.</span>" },
  { id:"D1-094", domain:1, obj:"1.7", diff:"medium", q:"Which of these is NOT a valid private (RFC 1918) address?", options:["192.168.255.1","172.40.0.1","10.255.255.254","172.16.0.1"], answer:1, explain:"<strong>172.40.0.1</strong> is correct because the private Class B range is only 172.16.0.0 through 172.31.255.255, so 172.40.0.1 lies outside it and is public.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>10.255.255.254</b>: This is within 10.0.0.0/8, a valid RFC 1918 private address.</span><span class='qd'><b>172.16.0.1</b>: This is within 172.16.0.0/12, a valid private address.</span><span class='qd'><b>192.168.255.1</b>: This is within 192.168.0.0/16, a valid private address.</span>" },
  { id:"D1-095", domain:1, obj:"1.7", diff:"hard", q:"How many usable hosts per subnet result from subnetting 192.168.0.0/24 into four equal subnets?", options:["254","30","62","126"], answer:2, explain:"<strong>62</strong> is correct because four equal subnets of a /24 require a /26 (block of 64), and each /26 yields 62 usable hosts.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>30</b>: 30 usable hosts corresponds to a /27, which would split the /24 into eight subnets, not four.</span><span class='qd'><b>126</b>: 126 usable hosts corresponds to a /25, which splits the /24 into only two subnets.</span><span class='qd'><b>254</b>: 254 is the usable host count of the entire unsubnetted /24, not one of four subnets.</span>" },
  { id:"D1-096", domain:1, obj:"1.7", diff:"medium", q:"What is the wildcard mask equivalent of the subnet mask 255.255.255.0?", options:["0.0.255.255","255.255.255.0","0.0.0.0","0.0.0.255"], answer:3, explain:"<strong>0.0.0.255</strong> is correct because a wildcard mask is the bitwise inverse of the subnet mask, and the inverse of 255.255.255.0 is 0.0.0.255.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>0.0.255.255</b>: This is the wildcard inverse of 255.255.0.0 (a /16), not a /24.</span><span class='qd'><b>255.255.255.0</b>: This is the subnet mask itself, not its inverted wildcard form.</span><span class='qd'><b>0.0.0.0</b>: An all-zero wildcard matches a single exact host (the inverse of 255.255.255.255), not a /24.</span>" },
  { id:"D1-097", domain:1, obj:"1.8", diff:"medium", q:"Which concept describes deploying infrastructure through machine-readable definition files rather than manual configuration?", options:["Infrastructure as Code","Zero trust","Network segmentation","Spanning tree"], answer:0, explain:"<strong>Infrastructure as Code</strong> is correct because IaC provisions and manages infrastructure using version-controlled, machine-readable definition files instead of manual configuration.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Zero trust</b>: Zero trust is a security model that removes implicit trust, unrelated to defining infrastructure in files.</span><span class='qd'><b>Network segmentation</b>: Segmentation divides a network into isolated zones; it does not describe automated provisioning from definition files.</span><span class='qd'><b>Spanning tree</b>: Spanning Tree Protocol prevents Layer 2 loops and has nothing to do with declarative infrastructure provisioning.</span>" },
  { id:"D1-098", domain:1, obj:"1.8", diff:"hard", q:"A security team wants to limit lateral movement by isolating individual workloads with granular policy. Which approach is BEST?", options:["VLAN trunking","Microsegmentation","Port mirroring","Link aggregation"], answer:1, explain:"<strong>Microsegmentation</strong> is correct because it applies fine-grained per-workload policy so a compromise of one host cannot easily spread laterally.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>VLAN trunking</b>: Trunking carries multiple VLANs over one link but provides broad segment-level separation, not per-workload isolation.</span><span class='qd'><b>Port mirroring</b>: Port mirroring copies traffic to a monitoring port for analysis and enforces no isolation.</span><span class='qd'><b>Link aggregation</b>: Link aggregation bundles physical links for bandwidth and redundancy, not security isolation.</span>" },
  { id:"D1-099", domain:1, obj:"1.3", diff:"hard", q:"Which cloud connectivity construct allows two separate virtual private clouds to communicate privately without traversing the internet?", options:["Internet gateway","Public load balancer","VPC peering","NAT gateway"], answer:2, explain:"<strong>VPC peering</strong> is correct because it establishes a private routing relationship between two VPCs so resources communicate using private addresses without traversing the internet.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>NAT gateway</b>: A NAT gateway provides outbound internet access for private instances, not private VPC-to-VPC connectivity.</span><span class='qd'><b>Internet gateway</b>: An internet gateway connects a VPC to the public internet, the opposite of private peering.</span><span class='qd'><b>Public load balancer</b>: A public load balancer distributes incoming internet traffic to instances and does not link two VPCs privately.</span>" },
  { id:"D1-100", domain:1, obj:"1.3", diff:"medium", q:"What term describes the practice of using services from more than one public cloud provider?", options:["Private cloud","Edge cloud","Hybrid cloud","Multicloud"], answer:3, explain:"<strong>Multicloud</strong> is correct because it refers to consuming services from more than one public cloud provider, often to avoid lock-in or improve resilience.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Hybrid cloud</b>: Hybrid combines on-premises infrastructure with public cloud, not multiple public providers.</span><span class='qd'><b>Private cloud</b>: Private cloud is dedicated single-organization infrastructure, not the use of multiple public providers.</span><span class='qd'><b>Edge cloud</b>: Edge cloud places compute near users for low latency and does not describe using multiple providers.</span>" },
  { id:"D1-101", domain:1, obj:"1.7", diff:"easy", q:"Which IPv6 address type is used to send a packet to the nearest of a group of interfaces sharing the same address?", options:["Anycast","Broadcast","Unicast","Multicast"], answer:0, explain:"<strong>Anycast</strong> is correct because one address is assigned to multiple nodes and routing delivers the packet to the topologically nearest member.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Unicast</b>: Unicast delivers a packet to a single specific interface, not the nearest of a group.</span><span class='qd'><b>Multicast</b>: Multicast delivers to all members of a group simultaneously, not just the nearest one.</span><span class='qd'><b>Broadcast</b>: IPv6 has no broadcast; that function is replaced by multicast.</span>" },
  { id:"D1-102", domain:1, obj:"1.7", diff:"medium", q:"In an IPv6 global unicast address, which range identifies addresses currently allocated for global routing?", options:["fe80::/10","2000::/3","fc00::/7","ff00::/8"], answer:1, explain:"<strong>2000::/3</strong> is correct because that block is designated for global unicast addresses routable on the public IPv6 internet.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>fe80::/10</b>: This is the link-local range, valid only on the local segment.</span><span class='qd'><b>fc00::/7</b>: This is the unique local range, routable internally but not on the public internet.</span><span class='qd'><b>ff00::/8</b>: This is the multicast range, not global unicast.</span>" },
  { id:"D1-103", domain:1, obj:"1.7", diff:"hard", q:"Which compressed form correctly represents the IPv6 address 2001:0db8:0000:0000:0000:ff00:0042:8329?", options:["2001:0db8::ff00:0042:8329:0","2001:db8:ff00::42:8329","2001:db8::ff00:42:8329","2001:db8:0:0:ff00::42:8329"], answer:2, explain:"<strong>2001:db8::ff00:42:8329</strong> is correct because leading zeros in each group are dropped and the single run of all-zero groups is replaced by one :: .<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>2001:db8:0:0:ff00::42:8329</b>: This uses :: while also leaving explicit zero groups, which both fails to maximize compression and risks ambiguity.</span><span class='qd'><b>2001:0db8::ff00:0042:8329:0</b>: This keeps leading zeros (0db8, 0042), misplaces the zero run, and adds a trailing :0 that does not match the original address.</span><span class='qd'><b>2001:db8:ff00::42:8329</b>: This drops the zero groups but also omits a needed group, leaving too few hextets to equal the original 128 bits.</span>" },
  { id:"D1-104", domain:1, obj:"1.6", diff:"easy", q:"Which topology design connects multiple remote sites back to a single central hub site?", options:["Ring","Spine-leaf","Full mesh","Hub-and-spoke"], answer:3, explain:"<strong>Hub-and-spoke</strong> is correct because remote spoke sites connect through a single central hub that handles inter-site traffic.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Full mesh</b>: A full mesh links every site directly to every other, with no single central hub.</span><span class='qd'><b>Ring</b>: A ring chains sites in a closed loop rather than routing all traffic through one hub.</span><span class='qd'><b>Spine-leaf</b>: Spine-leaf is a flat data center fabric, not a central-hub WAN design.</span>" },
  { id:"D1-105", domain:1, obj:"1.6", diff:"medium", q:"A partial mesh topology is often chosen over a full mesh because it:", options:["Reduces link count and cost while keeping redundancy on critical paths","Requires no switches","Provides one hop between every pair of nodes","Eliminates all single points of failure"], answer:0, explain:"<strong>Reduces link count and cost while keeping redundancy on critical paths</strong> is correct because partial mesh adds redundant links only where needed, balancing fault tolerance against the cost of a full mesh.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Eliminates all single points of failure</b>: Only a full mesh guarantees that; a partial mesh may still leave some links without backup.</span><span class='qd'><b>Requires no switches</b>: A partial mesh still relies on switches or routers to interconnect nodes.</span><span class='qd'><b>Provides one hop between every pair of nodes</b>: That single-hop property belongs to a full mesh, not a partial mesh.</span>" },
  { id:"D1-106", domain:1, obj:"1.7", diff:"medium", q:"Static NAT is BEST described as:", options:["Many private hosts sharing one public IP via ports","A one-to-one mapping between a private and a public address","Automatic private addressing on DHCP failure","Translation between IPv4 and IPv6"], answer:1, explain:"<strong>A one-to-one mapping between a private and a public address</strong> is correct because static NAT creates a fixed mapping, commonly used to expose an internal server at a consistent public address.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Many private hosts sharing one public IP via ports</b>: That describes PAT (NAT overload), not static NAT.</span><span class='qd'><b>Automatic private addressing on DHCP failure</b>: That is APIPA, unrelated to NAT.</span><span class='qd'><b>Translation between IPv4 and IPv6</b>: That is NAT64 or similar protocol translation, not a static one-to-one IPv4 mapping.</span>" },
  { id:"D1-107", domain:1, obj:"1.7", diff:"hard", q:"A /22 network is summarized from four contiguous /24s. Which set of networks aggregates into 192.168.4.0/22?", options:["192.168.4.0, 192.168.8.0, 192.168.12.0, 192.168.16.0","192.168.2.0, 192.168.3.0, 192.168.4.0, 192.168.5.0","192.168.4.0, 192.168.5.0, 192.168.6.0, 192.168.7.0","192.168.0.0, 192.168.1.0, 192.168.2.0, 192.168.3.0"], answer:2, explain:"<strong>192.168.4.0, 192.168.5.0, 192.168.6.0, 192.168.7.0</strong> is correct because a /22 starting at 192.168.4.0 covers 192.168.4.0 through 192.168.7.255, exactly those four contiguous /24s.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>192.168.0.0, 192.168.1.0, 192.168.2.0, 192.168.3.0</b>: These aggregate into 192.168.0.0/22, not the 192.168.4.0/22 block requested.</span><span class='qd'><b>192.168.4.0, 192.168.8.0, 192.168.12.0, 192.168.16.0</b>: These are not contiguous /24s, so they cannot summarize into a single /22.</span><span class='qd'><b>192.168.2.0, 192.168.3.0, 192.168.4.0, 192.168.5.0</b>: This block does not align on a /22 boundary (which must start on a multiple of 4 in the third octet) so it cannot summarize cleanly.</span>" },
  { id:"D1-108", domain:1, obj:"1.8", diff:"medium", q:"Which use case BEST describes IoT and SCADA networks compared with traditional IT networks?", options:["They always use IPv6 only","They cannot be monitored","They never require segmentation","They often use specialized protocols and benefit from isolation from general IT traffic"], answer:3, explain:"<strong>They often use specialized protocols and benefit from isolation from general IT traffic</strong> is correct because IoT and SCADA/ICS systems frequently run legacy or specialized protocols and are commonly segmented for security and reliability.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>They never require segmentation</b>: These systems often require segmentation more than typical IT due to fragile, legacy protocols.</span><span class='qd'><b>They always use IPv6 only</b>: Many IoT and SCADA devices use IPv4 or proprietary protocols, so IPv6-only is false.</span><span class='qd'><b>They cannot be monitored</b>: These networks can and should be monitored, often with specialized OT monitoring tools.</span>" },
  { id:"D1-109", domain:1, obj:"1.8", diff:"hard", q:"An organization wants to deliver compute closer to end users to reduce latency for real-time applications. Which approach is the BEST fit?", options:["Edge computing","Cold storage tiering","Full mesh WAN","Centralized data center only"], answer:0, explain:"<strong>Edge computing</strong> is correct because it processes data near its source, lowering latency for real-time and IoT workloads.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Centralized data center only</b>: A single distant data center adds latency, the opposite of what real-time applications need.</span><span class='qd'><b>Cold storage tiering</b>: Cold storage is for infrequently accessed data and does not reduce compute latency for users.</span><span class='qd'><b>Full mesh WAN</b>: A full mesh WAN improves site interconnection but does not move compute closer to end users.</span>" },
  { id:"D1-110", domain:1, obj:"1.7", diff:"medium", q:"Which address represents the IPv4 loopback used to test the local TCP/IP stack?", options:["169.254.0.1","127.0.0.1","0.0.0.0","255.255.255.255"], answer:1, explain:"<strong>127.0.0.1</strong> is correct because it is the IPv4 loopback address used to verify the local TCP/IP stack.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>0.0.0.0</b>: This represents an unspecified address or default route, not loopback.</span><span class='qd'><b>255.255.255.255</b>: This is the limited broadcast address, not loopback.</span><span class='qd'><b>169.254.0.1</b>: This is an APIPA link-local address, not loopback.</span>" },
  { id:"D1-111", domain:1, obj:"1.7", diff:"hard", q:"For the host 192.168.50.200/27, which range represents its usable host addresses?", options:["192.168.50.200 - 192.168.50.231","192.168.50.224 - 192.168.50.254","192.168.50.193 - 192.168.50.222","192.168.50.192 - 192.168.50.223"], answer:2, explain:"<strong>192.168.50.193 - 192.168.50.222</strong> is correct because a /27 uses 32-wide blocks; .200 falls in 192-223 with network .192 and broadcast .223, leaving .193 through .222 usable.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>192.168.50.192 - 192.168.50.223</b>: This includes the network address .192 and broadcast .223, which are not usable host addresses.</span><span class='qd'><b>192.168.50.200 - 192.168.50.231</b>: This range does not align to the /27 boundary of 192 and crosses into the next subnet.</span><span class='qd'><b>192.168.50.224 - 192.168.50.254</b>: This is the next /27 subnet (224-255), not the one containing .200.</span>" },
  { id:"D1-112", domain:1, obj:"1.3", diff:"medium", q:"Which cloud characteristic allows resources to automatically scale up or down based on demand?", options:["Geo-redundancy","Throughput","Multitenancy","Elasticity"], answer:3, explain:"<strong>Elasticity</strong> is correct because rapid elasticity lets cloud resources automatically expand or contract to match workload demand.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Multitenancy</b>: Multitenancy means multiple customers share the same infrastructure, not automatic scaling.</span><span class='qd'><b>Geo-redundancy</b>: Geo-redundancy replicates resources across regions for availability, not on-demand scaling.</span><span class='qd'><b>Throughput</b>: Throughput is a performance measure of data moved per unit time, not a scaling characteristic.</span>" },
  { id:"D1-113", domain:1, obj:"1.3", diff:"easy", q:"In cloud networking, what does a security group function as?", options:["A virtual, stateful filter controlling traffic to cloud resources","A DNS resolver","A load balancer","A physical firewall appliance"], answer:0, explain:"<strong>A virtual, stateful filter controlling traffic to cloud resources</strong> is correct because a cloud security group acts as a stateful virtual firewall defining allowed inbound and outbound traffic for instances.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A physical firewall appliance</b>: A security group is a software construct in the cloud platform, not a physical appliance.</span><span class='qd'><b>A DNS resolver</b>: A DNS resolver answers name queries and performs no traffic filtering.</span><span class='qd'><b>A load balancer</b>: A load balancer distributes traffic across targets and does not act as a stateful packet filter.</span>" },
  { id:"D1-114", domain:1, obj:"1.7", diff:"medium", q:"Which statement about the address 255.255.255.255 is correct?", options:["It is the loopback address","It is a limited (local) broadcast address","It is an APIPA address","It is a multicast address"], answer:1, explain:"<strong>It is a limited (local) broadcast address</strong> is correct because 255.255.255.255 reaches all hosts on the local subnet and is not forwarded by routers.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It is the loopback address</b>: Loopback is 127.0.0.1, not 255.255.255.255.</span><span class='qd'><b>It is an APIPA address</b>: APIPA addresses fall in 169.254.0.0/16, not the all-ones address.</span><span class='qd'><b>It is a multicast address</b>: Multicast uses the 224.0.0.0/4 range, not 255.255.255.255.</span>" },
  { id:"D1-115", domain:1, obj:"1.8", diff:"hard", q:"A company wants centralized, policy-driven management of thousands of branch routers with application-aware path selection. Which solution is the BEST fit?", options:["NAT","Static routing","SD-WAN","Spanning Tree Protocol"], answer:2, explain:"<strong>SD-WAN</strong> is correct because it centralizes policy and uses application-aware routing across multiple transports, ideal for managing thousands of branch routers.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Static routing</b>: Static routing requires manual per-device configuration and offers no centralized, application-aware path selection.</span><span class='qd'><b>Spanning Tree Protocol</b>: STP prevents Layer 2 loops within a switched LAN and does nothing for WAN branch management.</span><span class='qd'><b>NAT</b>: NAT translates addresses and provides no centralized policy or application-aware routing.</span>" }
);
NETPLUS.questions.push(
{ id:"D2-001", domain:2, obj:"2.1", diff:"easy", q:"What is the default administrative distance of a directly connected interface on a Cisco router?", options:["1","90","110","0"], answer:3, explain:"<strong>0</strong> is the administrative distance of a directly connected interface, the most trusted source because the router can physically see the link.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>1</b>: An AD of 1 belongs to a static route, which is highly trusted but still ranks below a directly connected interface.</span><span class='qd'><b>90</b>: An AD of 90 is internal EIGRP, a dynamic protocol far less trusted than a local connection.</span><span class='qd'><b>110</b>: An AD of 110 is OSPF, a link-state dynamic protocol, not a directly attached link.</span>" },
{ id:"D2-002", domain:2, obj:"2.1", diff:"easy", q:"Which routing protocol uses hop count as its sole metric and limits routes to a maximum of 15 hops?", options:["RIP","BGP","OSPF","EIGRP"], answer:0, explain:"<strong>RIP</strong> uses hop count as its only metric, and because 16 hops is deemed unreachable, the maximum usable path is 15 hops.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>OSPF</b>: OSPF is link-state and uses a bandwidth-based cost metric, not hop count, with no 15-hop limit.</span><span class='qd'><b>EIGRP</b>: EIGRP uses a composite metric of bandwidth and delay and supports up to 255 hops, not a simple hop count capped at 15.</span><span class='qd'><b>BGP</b>: BGP is a path-vector protocol that uses AS-path and policy attributes, not hop count.</span>" },
{ id:"D2-003", domain:2, obj:"2.1", diff:"medium", q:"A network administrator configures a route that does not change unless manually edited. What type of route is this?", options:["Dynamic route","Static route","Default route learned via OSPF","Floating EIGRP route"], answer:1, explain:"<strong>Static route</strong> is manually entered by an administrator and stays in the routing table unchanged until someone manually edits or removes it.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Dynamic route</b>: A dynamic route is learned and updated automatically by a routing protocol, so it does change without manual editing.</span><span class='qd'><b>Default route learned via OSPF</b>: A route learned via OSPF is dynamic and can be withdrawn or updated as the OSPF topology changes.</span><span class='qd'><b>Floating EIGRP route</b>: EIGRP routes are dynamically learned, and a floating route is a static-route concept, not an EIGRP-learned one.</span>" },
{ id:"D2-004", domain:2, obj:"2.1", diff:"medium", q:"Which routing protocol is the only widely deployed exterior gateway protocol used between autonomous systems on the internet?", options:["IS-IS","OSPF","BGP","EIGRP"], answer:2, explain:"<strong>BGP</strong> is the path-vector exterior gateway protocol that exchanges reachability between autonomous systems and is the routing protocol of the global internet.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>OSPF</b>: OSPF is an interior gateway protocol used inside a single autonomous system, not between them.</span><span class='qd'><b>EIGRP</b>: EIGRP is a Cisco interior gateway protocol for routing within an organization, not across the internet.</span><span class='qd'><b>IS-IS</b>: IS-IS is a link-state interior gateway protocol, used within a domain rather than between autonomous systems.</span>" },
{ id:"D2-005", domain:2, obj:"2.1", diff:"easy", q:"What administrative distance does OSPF use by default on a Cisco router?", options:["120","90","100","110"], answer:3, explain:"<strong>110</strong> is the default administrative distance of OSPF on a Cisco router.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>90</b>: An AD of 90 is internal EIGRP, not OSPF.</span><span class='qd'><b>100</b>: An AD of 100 is the legacy IGRP protocol, not OSPF.</span><span class='qd'><b>120</b>: An AD of 120 is RIP, not OSPF.</span>" },
{ id:"D2-006", domain:2, obj:"2.1", diff:"medium", q:"Which protocol has the LOWEST default administrative distance among the choices, making it preferred when multiple protocols offer the same route?", options:["Internal EIGRP (90)","External EIGRP (170)","RIP (120)","OSPF (110)"], answer:0, explain:"<strong>Internal EIGRP (90)</strong> has the lowest administrative distance of the choices, so its route is preferred when the same prefix is offered by multiple protocols.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>RIP (120)</b>: RIP has the highest AD listed, making it the least preferred of these options.</span><span class='qd'><b>OSPF (110)</b>: OSPF at 110 is lower than RIP but still higher than internal EIGRP at 90.</span><span class='qd'><b>External EIGRP (170)</b>: External EIGRP at 170 is even higher than RIP, so it is the least trusted here.</span>" },
{ id:"D2-007", domain:2, obj:"2.1", diff:"medium", q:"OSPF organizes routers into which logical grouping to control the scope of link-state advertisements?", options:["Autonomous systems","Areas","Zones","Domains"], answer:1, explain:"<strong>Areas</strong> are the logical groupings OSPF uses to limit the scope of link-state advertisement flooding, with area 0 serving as the backbone.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Autonomous systems</b>: An autonomous system is the broader administrative routing domain used by BGP, not the intra-OSPF grouping that scopes LSA flooding.</span><span class='qd'><b>Zones</b>: Zones are a DNS concept, not an OSPF topology construct.</span><span class='qd'><b>Domains</b>: Domain is a generic term and is not the specific OSPF unit that confines LSA flooding.</span>" },
{ id:"D2-008", domain:2, obj:"2.1", diff:"hard", q:"A router learns the same destination network from both OSPF and RIP. Which route will the router install in its routing table, and why?", options:["The RIP route, because distance-vector is faster","The RIP route, because it has fewer hops","The OSPF route, because its administrative distance is lower","Both routes, for load balancing"], answer:2, explain:"<strong>The OSPF route, because its administrative distance is lower</strong> is correct because the router compares AD first, and OSPF (110) is more trusted than RIP (120).<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The RIP route, because it has fewer hops</b>: Hop count is RIP's internal metric and is never compared across protocols; AD is the deciding factor between protocols.</span><span class='qd'><b>Both routes, for load balancing</b>: Routes from two different protocols with different AD values are not load balanced; only one is installed.</span><span class='qd'><b>The RIP route, because distance-vector is faster</b>: Distance-vector is generally slower to converge, and protocol type does not override the lower AD of OSPF.</span>" },
{ id:"D2-009", domain:2, obj:"2.1", diff:"medium", q:"Which routing protocol developed by Cisco is classified as an advanced distance-vector (hybrid) protocol?", options:["BGP","OSPF","RIP","EIGRP"], answer:3, explain:"<strong>EIGRP</strong> is the Cisco-developed advanced distance-vector (hybrid) protocol that uses the DUAL algorithm for loop-free, fast convergence.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>OSPF</b>: OSPF is a true link-state protocol, not a distance-vector hybrid.</span><span class='qd'><b>RIP</b>: RIP is a classic distance-vector protocol, not an advanced hybrid, and is an open standard rather than Cisco-developed.</span><span class='qd'><b>BGP</b>: BGP is a path-vector exterior gateway protocol, not a distance-vector hybrid.</span>" },
{ id:"D2-010", domain:2, obj:"2.1", diff:"hard", q:"An administrator wants a static route to serve only as a backup that activates if the OSPF-learned route fails. What technique accomplishes this?", options:["Configure a floating static route with an AD higher than OSPF","Disable OSPF on the interface","Set the static route's hop count to 15","Lower the static route's metric to 0"], answer:0, explain:"<strong>Configure a floating static route with an AD higher than OSPF</strong> works because giving the static route an AD above 110 keeps it out of the table until the OSPF route is withdrawn.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Lower the static route's metric to 0</b>: Metric is not compared across sources before AD, and a metric change would not make it act as a standby backup.</span><span class='qd'><b>Disable OSPF on the interface</b>: Disabling OSPF removes the primary dynamic route entirely rather than creating a failover backup.</span><span class='qd'><b>Set the static route's hop count to 15</b>: Static routes do not use a RIP-style hop count, so this setting does not control backup behavior.</span>" },
{ id:"D2-011", domain:2, obj:"2.1", diff:"easy", q:"A route written as 0.0.0.0/0 represents what?", options:["A loopback route","A default route","A multicast route","A directly connected route"], answer:1, explain:"<strong>A default route</strong> is what 0.0.0.0/0 represents, matching any destination when no more specific route exists.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A loopback route</b>: A loopback address is in the 127.0.0.0/8 range, not the all-zeros default prefix.</span><span class='qd'><b>A multicast route</b>: Multicast uses the 224.0.0.0/4 range, not 0.0.0.0/0.</span><span class='qd'><b>A directly connected route</b>: A connected route corresponds to a specific attached subnet, not the catch-all 0.0.0.0/0 prefix.</span>" },
{ id:"D2-012", domain:2, obj:"2.1", diff:"hard", q:"A router has two routes to 10.1.1.0: a static route to 10.1.1.0/24 and an OSPF route to 10.1.1.0/26. A packet is destined for 10.1.1.5. Which route is used?", options:["Both routes equally","The /24 static route, because static is more trusted","The /26 OSPF route, because longest prefix match wins","Neither, the packet is dropped"], answer:2, explain:"<strong>The /26 OSPF route, because longest prefix match wins</strong> is correct because the router selects the most specific matching prefix, and 10.1.1.5 falls within 10.1.1.0/26.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The /24 static route, because static is more trusted</b>: AD and trust only break ties between identical prefixes; a longer prefix always wins over a shorter one.</span><span class='qd'><b>Neither, the packet is dropped</b>: A matching route exists, so the packet is forwarded, not dropped.</span><span class='qd'><b>Both routes equally</b>: The router forwards using a single best (most specific) route, not both simultaneously.</span>" },
{ id:"D2-013", domain:2, obj:"2.1", diff:"medium", q:"Which of the following is a link-state routing protocol?", options:["IGRP","RIP","BGP","OSPF"], answer:3, explain:"<strong>OSPF</strong> is a link-state protocol that floods link-state advertisements so each router builds a full topology map and runs the SPF (Dijkstra) algorithm.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>RIP</b>: RIP is a distance-vector protocol that shares its routing table, not link-state information.</span><span class='qd'><b>BGP</b>: BGP is a path-vector protocol using AS-path attributes, not link-state flooding.</span><span class='qd'><b>IGRP</b>: IGRP is a legacy Cisco distance-vector protocol, not link-state.</span>" },
{ id:"D2-014", domain:2, obj:"2.1", diff:"medium", q:"What does NAT primarily accomplish on a network?", options:["Translates private IP addresses to public addresses","Assigns VLAN tags to frames","Calculates routing metrics","Encrypts traffic between routers"], answer:0, explain:"<strong>Translates private IP addresses to public addresses</strong> is NAT's core function, mapping RFC 1918 addresses to routable public addresses for internet access.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Encrypts traffic between routers</b>: Encryption is the job of protocols like IPsec, not NAT, which only rewrites addresses.</span><span class='qd'><b>Assigns VLAN tags to frames</b>: VLAN tagging is an 802.1Q Layer 2 function, unrelated to NAT.</span><span class='qd'><b>Calculates routing metrics</b>: Metric calculation is performed by routing protocols, not by address translation.</span>" },
{ id:"D2-015", domain:2, obj:"2.1", diff:"hard", q:"Which NAT variation allows many internal hosts to share a single public IP by using unique source port numbers?", options:["Static NAT","PAT (NAT overload)","DNAT","One-to-one NAT"], answer:1, explain:"<strong>PAT (NAT overload)</strong> lets many internal hosts share one public IP by tracking each session with a unique source port number.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Static NAT</b>: Static NAT permanently maps one private address to one public address, not many to one.</span><span class='qd'><b>DNAT</b>: Destination NAT rewrites the destination address for inbound services and does not multiplex many hosts onto one public IP via ports.</span><span class='qd'><b>One-to-one NAT</b>: One-to-one NAT is exactly the single-mapping behavior PAT avoids, so it cannot share one address across many hosts.</span>" },
{ id:"D2-016", domain:2, obj:"2.1", diff:"medium", q:"What is the primary purpose of First Hop Redundancy Protocols such as HSRP and VRRP?", options:["To assign IP addresses dynamically","To load balance across switch ports","To provide a redundant default gateway for hosts","To encrypt routing updates"], answer:2, explain:"<strong>To provide a redundant default gateway for hosts</strong> is the purpose of FHRPs like HSRP and VRRP, which present a shared virtual gateway IP so hosts stay connected if the active router fails.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To load balance across switch ports</b>: Port load balancing is provided by link aggregation, not by gateway redundancy protocols.</span><span class='qd'><b>To encrypt routing updates</b>: FHRPs do not encrypt traffic; their role is gateway failover.</span><span class='qd'><b>To assign IP addresses dynamically</b>: Dynamic address assignment is DHCP's function, not an FHRP function.</span>" },
{ id:"D2-017", domain:2, obj:"2.1", diff:"easy", q:"What default administrative distance does RIP use?", options:["170","90","110","120"], answer:3, explain:"<strong>120</strong> is the default administrative distance of RIP on a Cisco router.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>90</b>: An AD of 90 is internal EIGRP, not RIP.</span><span class='qd'><b>110</b>: An AD of 110 is OSPF, not RIP.</span><span class='qd'><b>170</b>: An AD of 170 is external EIGRP, not RIP.</span>" },
{ id:"D2-018", domain:2, obj:"2.1", diff:"medium", q:"Which OSPF area number is reserved as the backbone area to which all other areas must connect?", options:["Area 0","Area 255","Area 1","Area 10"], answer:0, explain:"<strong>Area 0</strong> is the reserved OSPF backbone area to which all non-backbone areas must connect, directly or via virtual links.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Area 1</b>: Area 1 is an ordinary non-backbone area that itself must attach to area 0.</span><span class='qd'><b>Area 10</b>: Area 10 is just a normal numbered area, not the reserved backbone.</span><span class='qd'><b>Area 255</b>: Area 255 is a valid area number but carries no special backbone status.</span>" },
{ id:"D2-019", domain:2, obj:"2.1", diff:"hard", q:"Compared with distance-vector protocols, which statement BEST describes a key advantage of link-state protocols like OSPF?", options:["They consume less memory and CPU","Each router builds a full topology map, enabling faster convergence","They are limited to 15 hops","They broadcast the full routing table every 30 seconds"], answer:1, explain:"<strong>Each router builds a full topology map, enabling faster convergence</strong> is the key advantage, since flooded link-state information lets every router compute the entire topology and avoid loops.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>They consume less memory and CPU</b>: Link-state protocols actually use more memory and CPU to store the topology database and run SPF.</span><span class='qd'><b>They are limited to 15 hops</b>: The 15-hop limit is a RIP distance-vector constraint, not a link-state trait.</span><span class='qd'><b>They broadcast the full routing table every 30 seconds</b>: Periodic full-table broadcasts describe RIP behavior; link-state protocols send incremental updates only on change.</span>" },
{ id:"D2-020", domain:2, obj:"2.1", diff:"medium", q:"Which metric does OSPF use by default to determine the best path?", options:["Administrative distance","Hop count","Bandwidth-based cost","Delay and reliability"], answer:2, explain:"<strong>Bandwidth-based cost</strong> is OSPF's default metric, computed as reference bandwidth divided by interface bandwidth, with the lowest cumulative cost chosen.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Hop count</b>: Hop count is RIP's metric, not OSPF's.</span><span class='qd'><b>Delay and reliability</b>: Delay and reliability are components of EIGRP's composite metric, not OSPF's cost.</span><span class='qd'><b>Administrative distance</b>: AD is used to choose between protocols, not as a path metric within OSPF.</span>" },
{ id:"D2-021", domain:2, obj:"2.2", diff:"easy", q:"A VLAN primarily provides which benefit at Layer 2?", options:["It encrypts frames","It increases PoE wattage","It routes between subnets","It segments a switch into multiple broadcast domains"], answer:3, explain:"<strong>It segments a switch into multiple broadcast domains</strong> is the primary Layer 2 benefit of a VLAN, isolating traffic logically without separate physical switches.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It routes between subnets</b>: Routing between VLANs is a Layer 3 function requiring a router or Layer 3 switch, not the VLAN itself.</span><span class='qd'><b>It encrypts frames</b>: VLANs provide segmentation, not encryption.</span><span class='qd'><b>It increases PoE wattage</b>: PoE power is governed by 802.3af/at/bt standards, not by VLAN configuration.</span>" },
{ id:"D2-022", domain:2, obj:"2.2", diff:"medium", q:"Which IEEE standard defines VLAN tagging on trunk links between switches?", options:["802.1Q","802.3af","802.11ac","802.1X"], answer:0, explain:"<strong>802.1Q</strong> is the IEEE standard that inserts a 4-byte VLAN tag into the Ethernet frame to identify VLAN membership across trunk links.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>802.1X</b>: 802.1X is a port-based network access control and authentication standard, not VLAN tagging.</span><span class='qd'><b>802.3af</b>: 802.3af defines Power over Ethernet, unrelated to VLAN tagging.</span><span class='qd'><b>802.11ac</b>: 802.11ac is a wireless LAN standard, not a wired VLAN trunking standard.</span>" },
{ id:"D2-023", domain:2, obj:"2.2", diff:"medium", q:"On an 802.1Q trunk, which VLAN is left untagged by default?", options:["The management VLAN","The native VLAN","VLAN 1000","The voice VLAN"], answer:1, explain:"<strong>The native VLAN</strong> is carried untagged by default across an 802.1Q trunk, while all other VLANs are tagged.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The management VLAN</b>: The management VLAN is tagged like any other VLAN unless it happens to be configured as the native VLAN.</span><span class='qd'><b>VLAN 1000</b>: VLAN 1000 is an ordinary VLAN and is tagged on the trunk unless set as native.</span><span class='qd'><b>The voice VLAN</b>: The voice VLAN is tagged so phones and PCs can be distinguished, so it is not the untagged VLAN.</span>" },
{ id:"D2-024", domain:2, obj:"2.2", diff:"easy", q:"What is the primary purpose of Spanning Tree Protocol?", options:["To aggregate links into one logical link","To assign IP addresses","To prevent Layer 2 switching loops","To encrypt VLAN traffic"], answer:2, explain:"<strong>To prevent Layer 2 switching loops</strong> is STP's primary purpose, blocking redundant paths so broadcast storms and loops do not form.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To assign IP addresses</b>: Address assignment is DHCP's role, not STP's.</span><span class='qd'><b>To encrypt VLAN traffic</b>: STP does not encrypt; it only manages loop-free topology.</span><span class='qd'><b>To aggregate links into one logical link</b>: Link bundling is done by LACP/link aggregation, whereas STP blocks redundant links rather than aggregating them.</span>" },
{ id:"D2-025", domain:2, obj:"2.2", diff:"hard", q:"During STP root bridge election, which switch becomes the root bridge?", options:["The switch with the most ports","The switch with the fastest uplink","The switch with the highest MAC address","The switch with the lowest bridge ID (priority then MAC)"], answer:3, explain:"<strong>The switch with the lowest bridge ID (priority then MAC)</strong> becomes the root bridge, using priority first and MAC address as the tiebreaker.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The switch with the highest MAC address</b>: The lowest MAC, not the highest, breaks a priority tie.</span><span class='qd'><b>The switch with the most ports</b>: Port count is not part of the root bridge election.</span><span class='qd'><b>The switch with the fastest uplink</b>: Uplink speed affects path cost to the root, not which switch becomes root.</span>" },
{ id:"D2-026", domain:2, obj:"2.2", diff:"medium", q:"In classic 802.1D STP, which port state actively forwards user frames?", options:["Forwarding","Blocking","Listening","Learning"], answer:0, explain:"<strong>Forwarding</strong> is the only 802.1D port state that actively passes user data frames.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Blocking</b>: A blocking port discards data frames and only listens for BPDUs to prevent loops.</span><span class='qd'><b>Listening</b>: A listening port processes BPDUs to determine topology but does not forward user frames or learn MACs.</span><span class='qd'><b>Learning</b>: A learning port builds its MAC table but still does not forward user frames.</span>" },
{ id:"D2-027", domain:2, obj:"2.2", diff:"hard", q:"Which 802.1D STP port state listens to BPDUs and builds the MAC address table but does NOT yet forward user frames?", options:["Listening","Learning","Forwarding","Blocking"], answer:1, explain:"<strong>Learning</strong> is the 802.1D state where a port populates its MAC address table from incoming frames but does not yet forward user traffic.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Blocking</b>: A blocking port neither learns MAC addresses nor forwards; it only receives BPDUs.</span><span class='qd'><b>Listening</b>: A listening port processes BPDUs but does not yet build the MAC table.</span><span class='qd'><b>Forwarding</b>: A forwarding port both learns and forwards user traffic, so it is past the learning-only state.</span>" },
{ id:"D2-028", domain:2, obj:"2.2", diff:"medium", q:"What is the default bridge priority value used in STP before any tiebreaker is applied?", options:["1","4096","32768","0"], answer:2, explain:"<strong>32768</strong> is the default STP bridge priority; lowering it below 32768 makes a switch more likely to become root.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>0</b>: 0 is the lowest configurable priority you can set to force root election, not the default.</span><span class='qd'><b>1</b>: 1 is not a valid default and priorities are set in increments of 4096.</span><span class='qd'><b>4096</b>: 4096 is the increment step for priority values and a common manual setting, not the default value.</span>" },
{ id:"D2-029", domain:2, obj:"2.2", diff:"easy", q:"What does port security on a switch allow an administrator to control?", options:["The PoE wattage delivered","The routing protocol used","The VLAN tag format","Which MAC addresses are permitted on a port"], answer:3, explain:"<strong>Which MAC addresses are permitted on a port</strong> is what port security controls, restricting a port to specific or a limited number of source MAC addresses.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The VLAN tag format</b>: The tag format is defined by 802.1Q, not by port security.</span><span class='qd'><b>The PoE wattage delivered</b>: PoE wattage is set by the PoE standard and power policy, not port security.</span><span class='qd'><b>The routing protocol used</b>: Routing protocols operate at Layer 3 and are unrelated to switchport MAC-based security.</span>" },
{ id:"D2-030", domain:2, obj:"2.2", diff:"medium", q:"Which technology bundles multiple physical links into one logical link for increased bandwidth and redundancy?", options:["Link aggregation (LACP)","Port mirroring","VLAN trunking","Spanning Tree"], answer:0, explain:"<strong>Link aggregation (LACP)</strong> bundles multiple physical links into one logical link for added bandwidth and redundancy.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Spanning Tree</b>: STP blocks redundant links to prevent loops rather than combining them into one channel.</span><span class='qd'><b>Port mirroring</b>: Port mirroring copies traffic to a monitoring port and does not aggregate bandwidth.</span><span class='qd'><b>VLAN trunking</b>: Trunking carries multiple VLANs on one link but does not bond multiple physical links together.</span>" },
{ id:"D2-031", domain:2, obj:"2.2", diff:"medium", q:"LACP is defined under which IEEE standard?", options:["802.1Q","802.3ad","802.1X","802.3af"], answer:1, explain:"<strong>802.3ad</strong> is the IEEE standard that defines LACP (later folded into 802.1AX) for link aggregation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>802.1Q</b>: 802.1Q defines VLAN tagging, not link aggregation.</span><span class='qd'><b>802.1X</b>: 802.1X defines port-based access control and authentication, not aggregation.</span><span class='qd'><b>802.3af</b>: 802.3af defines Power over Ethernet, not LACP.</span>" },
{ id:"D2-032", domain:2, obj:"2.2", diff:"hard", q:"A port-security violation is configured in shutdown mode. What happens when an unauthorized MAC is detected?", options:["The switch reboots","The frame is silently dropped and the port stays up","The port is placed in err-disabled state and stops forwarding","The MAC is added to the allowed list automatically"], answer:2, explain:"<strong>The port is placed in err-disabled state and stops forwarding</strong> is the result in shutdown violation mode, blocking all traffic until an administrator re-enables the port.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The frame is silently dropped and the port stays up</b>: That describes protect mode, not shutdown mode.</span><span class='qd'><b>The MAC is added to the allowed list automatically</b>: Port security blocks unauthorized MACs rather than auto-permitting them.</span><span class='qd'><b>The switch reboots</b>: A violation affects only the offending port, not the entire switch.</span>" },
{ id:"D2-033", domain:2, obj:"2.2", diff:"medium", q:"Which feature should be enabled on access ports connecting to end devices to allow them to skip the listening and learning delay and transition straight to forwarding?", options:["Root guard","Loop guard","BPDU guard","PortFast"], answer:3, explain:"<strong>PortFast</strong> moves an access port straight to forwarding, skipping the listening and learning delay for end-host ports.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>BPDU guard</b>: BPDU guard err-disables a port if a BPDU arrives; it does not speed up the transition to forwarding.</span><span class='qd'><b>Root guard</b>: Root guard prevents a port from becoming a path to a superior root, not from skipping STP delay.</span><span class='qd'><b>Loop guard</b>: Loop guard protects against unidirectional link failures, not transition timing.</span>" },
{ id:"D2-034", domain:2, obj:"2.2", diff:"hard", q:"Which switch port feature, often paired with PortFast, immediately err-disables a port if it unexpectedly receives a BPDU?", options:["BPDU guard","Storm control","DHCP snooping","Root guard"], answer:0, explain:"<strong>BPDU guard</strong> err-disables a PortFast access port the moment it unexpectedly receives a BPDU, signaling an unauthorized switch.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Root guard</b>: Root guard blocks superior BPDUs to protect root placement but does not err-disable on any BPDU receipt.</span><span class='qd'><b>Storm control</b>: Storm control limits broadcast/multicast flooding rates, not BPDU receipt.</span><span class='qd'><b>DHCP snooping</b>: DHCP snooping filters rogue DHCP traffic, unrelated to BPDU handling.</span>" },
{ id:"D2-035", domain:2, obj:"2.2", diff:"easy", q:"What is the function of a trunk port on a switch?", options:["It carries traffic for only one VLAN","It carries traffic for multiple VLANs between switches","It supplies PoE to access points","It mirrors traffic for analysis"], answer:1, explain:"<strong>It carries traffic for multiple VLANs between switches</strong> is the function of a trunk port, typically tagging frames with 802.1Q.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It carries traffic for only one VLAN</b>: Carrying a single VLAN with untagged frames describes an access port, not a trunk.</span><span class='qd'><b>It supplies PoE to access points</b>: PoE delivery is a power function independent of trunking.</span><span class='qd'><b>It mirrors traffic for analysis</b>: Traffic mirroring is a SPAN/monitor port function, not a trunk function.</span>" },
{ id:"D2-036", domain:2, obj:"2.2", diff:"medium", q:"What problem can occur if the native VLAN is mismatched on two ends of an 802.1Q trunk?", options:["Increased administrative distance","PoE failure","VLAN hopping and traffic leaking between VLANs","Loss of routing tables"], answer:2, explain:"<strong>VLAN hopping and traffic leaking between VLANs</strong> can result from a native VLAN mismatch, since untagged frames may be placed into the wrong VLAN on the far end.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>PoE failure</b>: PoE is a power function unaffected by native VLAN configuration.</span><span class='qd'><b>Loss of routing tables</b>: Routing tables are a Layer 3 construct and are not erased by a native VLAN mismatch.</span><span class='qd'><b>Increased administrative distance</b>: AD is a routing-protocol trust value, unrelated to VLAN trunk configuration.</span>" },
{ id:"D2-037", domain:2, obj:"2.2", diff:"medium", q:"Which protocol allows a router to route between VLANs using a single trunked physical interface divided into subinterfaces?", options:["Spanning Tree","HSRP","LACP","Router-on-a-stick"], answer:3, explain:"<strong>Router-on-a-stick</strong> uses subinterfaces on one trunked physical link, each tagged for a VLAN, to perform inter-VLAN routing.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Spanning Tree</b>: STP prevents Layer 2 loops and does not perform routing between VLANs.</span><span class='qd'><b>HSRP</b>: HSRP provides a redundant default gateway, not inter-VLAN routing over subinterfaces.</span><span class='qd'><b>LACP</b>: LACP aggregates physical links and does not route between VLANs.</span>" },
{ id:"D2-038", domain:2, obj:"2.2", diff:"hard", q:"Two switches are connected by two cables and STP is disabled. What is the MOST likely immediate result?", options:["A broadcast storm and switching loop","Automatic link aggregation","VLAN pruning","Faster convergence"], answer:0, explain:"<strong>A broadcast storm and switching loop</strong> is the immediate result, because with STP disabled broadcast frames circulate endlessly over the redundant cables.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Faster convergence</b>: Removing loop prevention causes instability, not faster convergence.</span><span class='qd'><b>Automatic link aggregation</b>: Aggregation requires explicit LACP/EtherChannel configuration and does not occur automatically.</span><span class='qd'><b>VLAN pruning</b>: VLAN pruning limits VLAN propagation on trunks and has nothing to do with redundant cabling loops.</span>" },
{ id:"D2-039", domain:2, obj:"2.2", diff:"medium", q:"How many bits is the VLAN ID field in an 802.1Q tag, and what is the maximum usable VLAN number?", options:["10 bits, 1023","12 bits, 4094","16 bits, 65535","8 bits, 255"], answer:1, explain:"<strong>12 bits, 4094</strong> is correct: the 802.1Q VLAN ID field is 12 bits, with values 1 to 4094 usable since 0 and 4095 are reserved.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>8 bits, 255</b>: 8 bits would allow only 256 values, far fewer than the 12-bit VLAN field.</span><span class='qd'><b>10 bits, 1023</b>: 10 bits does not match the actual 12-bit VLAN ID field size.</span><span class='qd'><b>16 bits, 65535</b>: 16 bits overstates the field; the VLAN ID is only 12 bits within the tag.</span>" },
{ id:"D2-040", domain:2, obj:"2.2", diff:"hard", q:"An administrator wants to prevent a downstream switch from ever becoming the STP root on a given port. Which feature is the BEST choice?", options:["Flow control","BPDU guard","Root guard","PortFast"], answer:2, explain:"<strong>Root guard</strong> is best because it ignores superior BPDUs on the protected port, ensuring a downstream switch can never take over as root.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>BPDU guard</b>: BPDU guard err-disables a port on any BPDU and is meant for edge ports, not for keeping a switch-to-switch port from becoming root.</span><span class='qd'><b>PortFast</b>: PortFast just speeds an access port to forwarding and provides no root protection.</span><span class='qd'><b>Flow control</b>: Flow control manages frame pacing to avoid buffer overrun, unrelated to STP root election.</span>" },
{ id:"D2-041", domain:2, obj:"2.3", diff:"easy", q:"Which 802.11 standard is also marketed as Wi-Fi 6?", options:["802.11g","802.11n","802.11ac","802.11ax"], answer:3, explain:"<strong>802.11ax</strong> is the standard marketed as Wi-Fi 6, operating in 2.4 GHz and 5 GHz with improved efficiency via OFDMA.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>802.11n</b>: 802.11n is branded Wi-Fi 4, not Wi-Fi 6.</span><span class='qd'><b>802.11ac</b>: 802.11ac is Wi-Fi 5, not Wi-Fi 6.</span><span class='qd'><b>802.11g</b>: 802.11g is an older 2.4 GHz standard predating the Wi-Fi generation naming for 6.</span>" },
{ id:"D2-042", domain:2, obj:"2.3", diff:"medium", q:"Which non-overlapping 2.4 GHz channels are typically recommended to avoid co-channel interference in the US?", options:["1, 6, 11","1, 5, 9","2, 7, 12","1, 4, 8"], answer:0, explain:"<strong>1, 6, 11</strong> are the non-overlapping 2.4 GHz channels in the US, spaced far enough apart to avoid co-channel overlap.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>1, 5, 9</b>: Channels 5 and 9 are too close to channel 1 and each other, so their 22 MHz widths overlap.</span><span class='qd'><b>2, 7, 12</b>: This set overlaps and channel 12 is not usable under standard US regulations.</span><span class='qd'><b>1, 4, 8</b>: Only four channels apart, these still overlap because each channel is about five channels wide.</span>" },
{ id:"D2-043", domain:2, obj:"2.3", diff:"medium", q:"Which wireless security standard introduced Simultaneous Authentication of Equals (SAE) to replace the pre-shared key handshake?", options:["WPA2","WPA3","WEP","WPA"], answer:1, explain:"<strong>WPA3</strong> introduced Simultaneous Authentication of Equals (SAE), the Dragonfly handshake, to resist offline dictionary attacks.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>WEP</b>: WEP uses a weak RC4-based static key scheme with no SAE.</span><span class='qd'><b>WPA</b>: WPA relied on TKIP and a PSK handshake, not SAE.</span><span class='qd'><b>WPA2</b>: WPA2 uses the four-way PSK handshake that SAE was designed to replace.</span>" },
{ id:"D2-044", domain:2, obj:"2.3", diff:"hard", q:"In a wireless deployment, what is the MOST likely cause of severe throughput loss when two nearby access points are both set to 2.4 GHz channel 6?", options:["Excessive administrative distance","PoE overload","Co-channel interference","Native VLAN mismatch"], answer:2, explain:"<strong>Co-channel interference</strong> is the most likely cause because two APs on the same channel 6 must contend for identical airtime, halving effective throughput.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>PoE overload</b>: PoE limits affect whether a device powers on, not airtime contention between APs.</span><span class='qd'><b>Native VLAN mismatch</b>: A native VLAN mismatch is a wired trunk problem, not a wireless throughput cause.</span><span class='qd'><b>Excessive administrative distance</b>: AD is a routing concept and has no bearing on wireless RF throughput.</span>" },
{ id:"D2-045", domain:2, obj:"2.3", diff:"medium", q:"Which wireless component connects multiple lightweight access points and centralizes their configuration and management?", options:["Layer 2 switch","DHCP server","Default gateway","Wireless LAN controller"], answer:3, explain:"<strong>Wireless LAN controller</strong> centrally manages lightweight access points, handling their configuration, roaming, and RF coordination.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Layer 2 switch</b>: A switch forwards frames and may power APs but does not centrally configure or manage them as a WLC does.</span><span class='qd'><b>DHCP server</b>: A DHCP server assigns IP addresses and does not manage AP configuration or RF.</span><span class='qd'><b>Default gateway</b>: A gateway routes traffic off the subnet and provides no AP management role.</span>" },
{ id:"D2-046", domain:2, obj:"2.4", diff:"easy", q:"Which PoE standard, 802.3af, delivers approximately how much power at the PSE port?", options:["15.4 watts","30 watts","60 watts","100 watts"], answer:0, explain:"<strong>15.4 watts</strong> is the power 802.3af delivers at the PSE port, leaving roughly 12.95 W at the powered device.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>30 watts</b>: 30 watts is the 802.3at (PoE+) figure, not 802.3af.</span><span class='qd'><b>60 watts</b>: 60 watts corresponds to 802.3bt Type 3, not 802.3af.</span><span class='qd'><b>100 watts</b>: About 90 to 100 watts is 802.3bt Type 4, far beyond 802.3af.</span>" },
{ id:"D2-047", domain:2, obj:"2.4", diff:"medium", q:"Which PoE standard, known as PoE+, supplies up to about 30 watts at the source port?", options:["802.3af","802.3at","802.3bt","802.3ad"], answer:1, explain:"<strong>802.3at</strong>, known as PoE+, supplies up to about 30 watts at the source port for higher-draw devices.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>802.3af</b>: 802.3af is the original PoE at about 15.4 W, not 30 W.</span><span class='qd'><b>802.3bt</b>: 802.3bt is PoE++ delivering 60 to 90+ W, well above the 30 W of PoE+.</span><span class='qd'><b>802.3ad</b>: 802.3ad is link aggregation (LACP), not a PoE power standard.</span>" },
{ id:"D2-048", domain:2, obj:"2.4", diff:"hard", q:"A facility needs to power a pan-tilt-zoom camera and a videoconferencing endpoint that each draw more than 50 watts over Ethernet. Which PoE standard is required?", options:["802.3af","802.3at","802.3bt","802.3u"], answer:2, explain:"<strong>802.3bt</strong> is required because each device draws over 50 W, and 802.3bt (PoE++/4PPoE) supplies up to about 60 W (Type 3) or 90 to 100 W (Type 4).<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>802.3af</b>: 802.3af caps at about 15.4 W, far below a 50+ W draw.</span><span class='qd'><b>802.3at</b>: 802.3at (PoE+) maxes near 30 W, still insufficient for over 50 W.</span><span class='qd'><b>802.3u</b>: 802.3u is the Fast Ethernet (100BASE-TX) standard, not a PoE standard.</span>" },
{ id:"D2-049", domain:2, obj:"2.4", diff:"medium", q:"When mounting equipment in a data center, what does the unit 'U' (rack unit) measure?", options:["Horizontal width in millimeters","Cooling capacity in BTUs","Power consumption in watts","Vertical height equal to 1.75 inches"], answer:3, explain:"<strong>Vertical height equal to 1.75 inches</strong> is what one rack unit (1U) measures in a standard 19-inch rack.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Power consumption in watts</b>: Power draw is measured in watts, not rack units.</span><span class='qd'><b>Horizontal width in millimeters</b>: Rack width (19 inches) is a separate fixed dimension; U measures height, not width.</span><span class='qd'><b>Cooling capacity in BTUs</b>: Cooling is rated in BTUs, unrelated to the U height measurement.</span>" },
{ id:"D2-050", domain:2, obj:"2.4", diff:"medium", q:"Which type of cabling distribution point typically connects horizontal cabling from work areas to the backbone in an intermediate location on each floor?", options:["IDF (intermediate distribution frame)","Demarcation point","Patch panel jumper","MDF (main distribution frame)"], answer:0, explain:"<strong>IDF (intermediate distribution frame)</strong> aggregates horizontal cabling on a floor and links back to the MDF via backbone cabling.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>MDF (main distribution frame)</b>: The MDF is the central main facility point, not the intermediate per-floor distribution point.</span><span class='qd'><b>Demarcation point</b>: The demarc marks the boundary between the provider and the customer network, not an internal cabling aggregation point.</span><span class='qd'><b>Patch panel jumper</b>: A jumper is a short patch cord, not a distribution frame location.</span>" }
);
NETPLUS.questions.push(
{ id:"D2-051", domain:2, obj:"2.3", diff:"easy", q:"Which three channels in the 2.4 GHz band are non-overlapping and recommended for U.S. deployments?", options:["1, 5, 9","1, 6, 11","2, 7, 12","3, 8, 13"], answer:1, explain:"<strong>1, 6, 11</strong> are the non-overlapping 2.4 GHz channels recommended in the US, spaced five channels apart to avoid overlap.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>1, 5, 9</b>: Channels spaced only four apart overlap because each channel is about five channels wide.</span><span class='qd'><b>2, 7, 12</b>: This set overlaps and channel 12 is restricted under US rules.</span><span class='qd'><b>3, 8, 13</b>: These overlap and channel 13 is not permitted in the US.</span>" },
{ id:"D2-052", domain:2, obj:"2.3", diff:"easy", q:"Which wireless standard is also marketed as Wi-Fi 6 and operates in both 2.4 GHz and 5 GHz bands?", options:["802.11n","802.11ac","802.11ax","802.11g"], answer:2, explain:"<strong>802.11ax</strong> is marketed as Wi-Fi 6 and operates in both the 2.4 GHz and 5 GHz bands.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>802.11n</b>: 802.11n is Wi-Fi 4, an earlier dual-band standard, not Wi-Fi 6.</span><span class='qd'><b>802.11ac</b>: 802.11ac is Wi-Fi 5 and operates only in 5 GHz.</span><span class='qd'><b>802.11g</b>: 802.11g is a single-band 2.4 GHz legacy standard, not Wi-Fi 6.</span>" },
{ id:"D2-053", domain:2, obj:"2.3", diff:"easy", q:"Which 802.11 standard operates ONLY in the 5 GHz band?", options:["802.11b","802.11g","802.11n","802.11ac"], answer:3, explain:"<strong>802.11ac</strong> (Wi-Fi 5) operates exclusively in the 5 GHz band.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>802.11b</b>: 802.11b operates only in 2.4 GHz, not 5 GHz.</span><span class='qd'><b>802.11g</b>: 802.11g is a 2.4 GHz-only standard.</span><span class='qd'><b>802.11n</b>: 802.11n is dual-band, supporting both 2.4 and 5 GHz, so it is not 5 GHz only.</span>" },
{ id:"D2-054", domain:2, obj:"2.3", diff:"medium", q:"A technician wants the widest channel bandwidth available to a Wi-Fi 6E client. Which band must be used to obtain 160 MHz channels with minimal contention?", options:["6 GHz","900 MHz","2.4 GHz","5 GHz only"], answer:0, explain:"<strong>6 GHz</strong> must be used because Wi-Fi 6E added that band, providing abundant spectrum for many 160 MHz channels with minimal contention.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>2.4 GHz</b>: The 2.4 GHz band is too narrow to support 160 MHz channels.</span><span class='qd'><b>5 GHz only</b>: 5 GHz supports some 160 MHz channels but with more contention and DFS constraints than 6 GHz.</span><span class='qd'><b>900 MHz</b>: 900 MHz is not a Wi-Fi 6E band and offers far too little spectrum for wide channels.</span>" },
{ id:"D2-055", domain:2, obj:"2.3", diff:"medium", q:"What is the maximum channel width supported in the 2.4 GHz band by most modern access points?", options:["20 MHz","40 MHz","80 MHz","160 MHz"], answer:1, explain:"<strong>40 MHz</strong> is the practical maximum channel width in the narrow 2.4 GHz band, though 20 MHz is preferred to keep channels non-overlapping.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>20 MHz</b>: 20 MHz is the recommended width, but it is not the maximum the band can support.</span><span class='qd'><b>80 MHz</b>: 80 MHz channels are available only in 5 GHz and 6 GHz, not in 2.4 GHz.</span><span class='qd'><b>160 MHz</b>: 160 MHz requires the wide spectrum of 5 GHz or 6 GHz and cannot fit in 2.4 GHz.</span>" },
{ id:"D2-056", domain:2, obj:"2.3", diff:"medium", q:"Which security standard introduced Simultaneous Authentication of Equals (SAE) to replace the pre-shared key handshake?", options:["WPA","WPA2","WPA3","WEP"], answer:2, explain:"<strong>WPA3</strong> introduced Simultaneous Authentication of Equals (SAE) to replace the pre-shared key handshake and resist offline dictionary attacks.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>WEP</b>: WEP uses static RC4 keys and predates SAE entirely.</span><span class='qd'><b>WPA</b>: WPA introduced TKIP and a PSK handshake, not SAE.</span><span class='qd'><b>WPA2</b>: WPA2 uses the four-way PSK handshake that SAE was created to replace.</span>" },
{ id:"D2-057", domain:2, obj:"2.3", diff:"medium", q:"WPA2-Personal uses which encryption cipher by default?", options:["RC4","GCMP-256","TKIP","AES-CCMP"], answer:3, explain:"<strong>AES-CCMP</strong> is the default cipher mandated by WPA2.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>TKIP</b>: TKIP is the legacy WPA cipher carried over as a deprecated option, not the WPA2 default.</span><span class='qd'><b>RC4</b>: RC4 is the weak stream cipher used by WEP and TKIP, not WPA2's AES-based default.</span><span class='qd'><b>GCMP-256</b>: GCMP-256 is associated with WPA3, not the default WPA2 cipher.</span>" },
{ id:"D2-058", domain:2, obj:"2.3", diff:"easy", q:"What does SSID stand for in a wireless network?", options:["Service Set Identifier","System Security ID","Signal Strength Indicator","Secure Server Identification"], answer:0, explain:"<strong>Service Set Identifier</strong> is what SSID stands for, the human-readable name of a wireless network.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Secure Server Identification</b>: This is a fabricated expansion that does not match the 802.11 term.</span><span class='qd'><b>System Security ID</b>: This is not the meaning of SSID in wireless networking.</span><span class='qd'><b>Signal Strength Indicator</b>: Signal strength is measured by RSSI, which is a different acronym and concept.</span>" },
{ id:"D2-059", domain:2, obj:"2.3", diff:"medium", q:"Which value uniquely identifies a specific access point's radio at the MAC layer?", options:["SSID","BSSID","ESSID","VLAN ID"], answer:1, explain:"<strong>BSSID</strong> uniquely identifies an access point's radio at the MAC layer, being the MAC address of that radio.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SSID</b>: The SSID is the network name, which many APs can share, so it is not unique to one radio.</span><span class='qd'><b>ESSID</b>: An ESSID is the SSID shared across an extended service set, not a per-radio MAC identifier.</span><span class='qd'><b>VLAN ID</b>: A VLAN ID is a Layer 2 segmentation tag, not a wireless radio identifier.</span>" },
{ id:"D2-060", domain:2, obj:"2.3", diff:"medium", q:"During a predictive wireless site survey, what deliverable visually shows expected signal coverage and strength across a floor plan?", options:["Logical topology","Wiring diagram","Heat map","Rack elevation"], answer:2, explain:"<strong>Heat map</strong> is the deliverable that overlays expected signal coverage and strength onto a floor plan.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Wiring diagram</b>: A wiring diagram shows physical cable connections, not RF coverage.</span><span class='qd'><b>Rack elevation</b>: A rack elevation depicts equipment placement in a rack, not wireless coverage.</span><span class='qd'><b>Logical topology</b>: A logical topology shows device and network relationships, not signal strength across a floor.</span>" },
{ id:"D2-061", domain:2, obj:"2.3", diff:"hard", q:"A site survey reveals two adjacent APs both set to channel 6 in 2.4 GHz with overlapping coverage. Users report slow throughput. What is the MOST likely cause?", options:["Cross-band leakage","Insufficient PoE budget","Adjacent-channel interference","Co-channel interference"], answer:3, explain:"<strong>Co-channel interference</strong> is the most likely cause because both APs share channel 6 and must contend for the same airtime where coverage overlaps.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Adjacent-channel interference</b>: Adjacent-channel interference arises from partially overlapping nearby channels, not from two APs on the exact same channel.</span><span class='qd'><b>Cross-band leakage</b>: Cross-band leakage between 2.4 and 5 GHz is not occurring when both APs use the same 2.4 GHz channel.</span><span class='qd'><b>Insufficient PoE budget</b>: A PoE shortfall would prevent an AP from powering, not cause same-channel airtime contention.</span>" },
{ id:"D2-062", domain:2, obj:"2.3", diff:"medium", q:"Which authentication method does WPA3-Enterprise rely on for centralized credential validation?", options:["802.1X with a RADIUS server","MAC address filtering","Open system authentication","A static pre-shared key"], answer:0, explain:"<strong>802.1X with a RADIUS server</strong> is what WPA3-Enterprise relies on, authenticating each user through EAP against a central RADIUS server.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A static pre-shared key</b>: A shared PSK is the Personal mode mechanism, not the per-user Enterprise approach.</span><span class='qd'><b>MAC address filtering</b>: MAC filtering is a weak, easily spoofed control, not centralized credential validation.</span><span class='qd'><b>Open system authentication</b>: Open authentication performs no credential validation at all.</span>" },
{ id:"D2-063", domain:2, obj:"2.3", diff:"hard", q:"In an 802.1X deployment, which device acts as the authenticator?", options:["The wireless client (supplicant)","The access point or switch","The RADIUS server","The DNS server"], answer:1, explain:"<strong>The access point or switch</strong> acts as the authenticator in 802.1X, gating port access between the supplicant and the authentication server.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The wireless client (supplicant)</b>: The client is the supplicant requesting access, not the authenticator.</span><span class='qd'><b>The RADIUS server</b>: The RADIUS server is the authentication server that validates credentials, not the authenticator that gates the port.</span><span class='qd'><b>The DNS server</b>: DNS resolves names and plays no role in 802.1X authentication.</span>" },
{ id:"D2-064", domain:2, obj:"2.3", diff:"easy", q:"Which legacy wireless security protocol is considered broken and should never be used?", options:["WPA2","WPA3","WEP","WPA2-Enterprise"], answer:2, explain:"<strong>WEP</strong> is the broken legacy protocol, using a weak RC4 implementation with a short IV that can be cracked in minutes.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>WPA2</b>: WPA2 with AES-CCMP remains widely considered secure for general use.</span><span class='qd'><b>WPA3</b>: WPA3 is the current, strongest standard, not a broken one.</span><span class='qd'><b>WPA2-Enterprise</b>: WPA2-Enterprise adds 802.1X per-user authentication and is a strong configuration, not deprecated.</span>" },
{ id:"D2-065", domain:2, obj:"2.3", diff:"medium", q:"What is the primary advantage of 5 GHz over 2.4 GHz for high-density wireless deployments?", options:["Lower power consumption","Better compatibility with old devices","Longer range through walls","More non-overlapping channels"], answer:3, explain:"<strong>More non-overlapping channels</strong> is the primary advantage of 5 GHz, reducing interference in dense deployments at the cost of shorter range.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Longer range through walls</b>: 5 GHz actually has shorter range and weaker wall penetration than 2.4 GHz.</span><span class='qd'><b>Lower power consumption</b>: Band choice does not inherently reduce client power consumption.</span><span class='qd'><b>Better compatibility with old devices</b>: Many legacy devices support only 2.4 GHz, so 5 GHz is less backward-compatible.</span>" },
{ id:"D2-066", domain:2, obj:"2.3", diff:"hard", q:"A WPA3-Personal network must remain accessible to some older WPA2-only clients during migration. Which configuration BEST achieves this?", options:["WPA2/WPA3 transition (mixed) mode","Open authentication","WEP fallback","WPA3-only mode"], answer:0, explain:"<strong>WPA2/WPA3 transition (mixed) mode</strong> advertises both WPA2 and WPA3, letting capable clients use SAE while legacy clients fall back to WPA2-PSK.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>WPA3-only mode</b>: WPA3-only would lock out the WPA2-only clients that must remain connected during migration.</span><span class='qd'><b>Open authentication</b>: Open authentication provides no encryption and would not meet the security need.</span><span class='qd'><b>WEP fallback</b>: WEP is broken and deprecated, so it is never an acceptable fallback.</span>" },
{ id:"D2-067", domain:2, obj:"2.3", diff:"medium", q:"Which 802.11 standard introduced MU-MIMO downlink and operates in 5 GHz at gigabit data rates?", options:["802.11g","802.11ac (Wave 2)","802.11b","802.11a"], answer:1, explain:"<strong>802.11ac (Wave 2)</strong> introduced downlink MU-MIMO and wider channels in 5 GHz, supporting multi-gigabit aggregate throughput.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>802.11a</b>: 802.11a is an early 5 GHz standard capped at 54 Mbps with no MU-MIMO.</span><span class='qd'><b>802.11g</b>: 802.11g is a 2.4 GHz 54 Mbps standard without MU-MIMO.</span><span class='qd'><b>802.11b</b>: 802.11b is an 11 Mbps 2.4 GHz standard far below gigabit speeds.</span>" },
{ id:"D2-068", domain:2, obj:"2.3", diff:"easy", q:"Approximately what maximum data rate does legacy 802.11b provide?", options:["150 Mbps","600 Mbps","11 Mbps","54 Mbps"], answer:2, explain:"<strong>11 Mbps</strong> is the maximum data rate of legacy 802.11b in the 2.4 GHz band.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>54 Mbps</b>: 54 Mbps is the peak rate of 802.11a and 802.11g, not 802.11b.</span><span class='qd'><b>150 Mbps</b>: 150 Mbps reflects a single 802.11n spatial stream, not 802.11b.</span><span class='qd'><b>600 Mbps</b>: 600 Mbps is the aggregate maximum of 802.11n, far above 802.11b.</span>" },
{ id:"D2-069", domain:2, obj:"2.3", diff:"easy", q:"Approximately what maximum data rate does 802.11g provide in the 2.4 GHz band?", options:["300 Mbps","1300 Mbps","11 Mbps","54 Mbps"], answer:3, explain:"<strong>54 Mbps</strong> is the maximum data rate of 802.11g in the 2.4 GHz band, matching 802.11a's peak in a different band.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>11 Mbps</b>: 11 Mbps is the 802.11b maximum, slower than 802.11g.</span><span class='qd'><b>300 Mbps</b>: 300 Mbps is an 802.11n rate with multiple streams, not 802.11g.</span><span class='qd'><b>1300 Mbps</b>: 1300 Mbps is an 802.11ac figure, far beyond 802.11g.</span>" },
{ id:"D2-070", domain:2, obj:"2.3", diff:"medium", q:"A roaming user keeps the same SSID while moving between several APs in a building. What is this collection of APs sharing one SSID called?", options:["Extended Service Set (ESS)","Independent Basic Service Set (IBSS)","Distribution system port","Basic Service Set (BSS)"], answer:0, explain:"<strong>Extended Service Set (ESS)</strong> describes multiple BSSs sharing one SSID, enabling seamless roaming between APs.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Basic Service Set (BSS)</b>: A BSS is the coverage of a single AP, not a collection of APs.</span><span class='qd'><b>Independent Basic Service Set (IBSS)</b>: An IBSS is an ad-hoc peer-to-peer network with no AP, not a multi-AP roaming set.</span><span class='qd'><b>Distribution system port</b>: This refers to the AP's wired uplink, not the grouping of APs under one SSID.</span>" },
{ id:"D2-071", domain:2, obj:"2.3", diff:"hard", q:"During a site survey you measure -40 dBm near an AP and -85 dBm at the cell edge. Which statement is correct?", options:["-85 dBm is a stronger signal than -40 dBm","-40 dBm is a stronger signal than -85 dBm","Both indicate identical signal strength","dBm values cannot compare signal strength"], answer:1, explain:"<strong>-40 dBm is a stronger signal than -85 dBm</strong> is correct because RSSI values closer to zero indicate stronger signal.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>-85 dBm is a stronger signal than -40 dBm</b>: This reverses the scale; -85 dBm is weaker, being further from zero.</span><span class='qd'><b>Both indicate identical signal strength</b>: The two values differ by 45 dB, so they are far from identical.</span><span class='qd'><b>dBm values cannot compare signal strength</b>: dBm is precisely the unit used to compare wireless signal strength.</span>" },
{ id:"D2-072", domain:2, obj:"2.3", diff:"medium", q:"Which wireless feature uses multiple antennas and spatial streams to transmit to several clients simultaneously?", options:["Band steering","Channel bonding","MIMO/MU-MIMO","Beamforming only"], answer:2, explain:"<strong>MIMO/MU-MIMO</strong> uses multiple antennas and spatial streams to transmit to several clients simultaneously, raising aggregate capacity.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Beamforming only</b>: Beamforming focuses a signal toward a client but does not by itself serve multiple clients with separate spatial streams.</span><span class='qd'><b>Band steering</b>: Band steering nudges clients between 2.4 and 5 GHz, not simultaneous multi-client streaming.</span><span class='qd'><b>Channel bonding</b>: Channel bonding widens a channel for more bandwidth but does not provide multi-client spatial multiplexing.</span>" },
{ id:"D2-073", domain:2, obj:"2.4", diff:"easy", q:"Which TIA wiring standard places the green pair on pins 1 and 2?", options:["T568B","RJ11","MDI-X","T568A"], answer:3, explain:"<strong>T568A</strong> places the green pair on pins 1 and 2, with orange on pins 3 and 6.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>T568B</b>: T568B swaps the pairs so orange is on pins 1-2 and green on 3-6.</span><span class='qd'><b>RJ11</b>: RJ11 is a smaller telephone connector standard, not an eight-pin TIA Ethernet pinout.</span><span class='qd'><b>MDI-X</b>: MDI-X describes a port's crossover wiring behavior, not a TIA pin-color standard.</span>" },
{ id:"D2-074", domain:2, obj:"2.4", diff:"easy", q:"A standard straight-through Ethernet patch cable uses which wiring on both ends?", options:["The same standard (e.g., T568B) on both ends","Rolled pinout","Loopback pinout","T568A on one end, T568B on the other"], answer:0, explain:"<strong>The same standard (e.g., T568B) on both ends</strong> defines a straight-through cable; mixing T568A and T568B yields a crossover.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>T568A on one end, T568B on the other</b>: That mismatched arrangement produces a crossover cable, not a straight-through.</span><span class='qd'><b>Rolled pinout</b>: A rolled (rollover) pinout reverses pin order for console connections, not a standard data patch cable.</span><span class='qd'><b>Loopback pinout</b>: A loopback wires transmit back to receive for testing, not for connecting two devices.</span>" },
{ id:"D2-075", domain:2, obj:"2.4", diff:"medium", q:"Which cable is traditionally required to directly connect two PCs' NICs without Auto-MDI-X?", options:["Straight-through","Crossover","Rollover (console)","Loopback"], answer:1, explain:"<strong>Crossover</strong> cable, T568A on one end and T568B on the other, crosses transmit and receive pairs to directly link two like devices without Auto-MDI-X.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Straight-through</b>: A straight-through cable does not cross the pairs and fails to connect two identical NICs without Auto-MDI-X.</span><span class='qd'><b>Rollover (console)</b>: A rollover cable is for serial console management, not data between two NICs.</span><span class='qd'><b>Loopback</b>: A loopback plug tests a single port and does not connect two devices.</span>" },
{ id:"D2-076", domain:2, obj:"2.4", diff:"easy", q:"In a building's cabling hierarchy, what is the term for the central space housing the primary network equipment and demarc?", options:["UPS","IDF","MDF","PDU"], answer:2, explain:"<strong>MDF</strong> (Main Distribution Frame) is the central space housing primary network equipment and the demarcation point.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>IDF</b>: An IDF is an intermediate per-floor or per-zone frame that uplinks to the MDF, not the central facility point.</span><span class='qd'><b>PDU</b>: A PDU distributes power in a rack and is not a cabling distribution space.</span><span class='qd'><b>UPS</b>: A UPS provides battery backup, not a wiring distribution location.</span>" },
{ id:"D2-077", domain:2, obj:"2.4", diff:"medium", q:"An IDF on the third floor connects back to the building's central equipment room. The central room is BEST described as the:", options:["Demarcation extension","Patch panel","IDF","MDF"], answer:3, explain:"<strong>MDF</strong> is the building's central equipment room that IDFs uplink to via backbone cabling.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>IDF</b>: The third-floor frame is the IDF; the central room it connects to is the MDF, not another IDF.</span><span class='qd'><b>Demarcation extension</b>: A demarc extension carries the provider boundary inward and is not the central distribution frame.</span><span class='qd'><b>Patch panel</b>: A patch panel terminates cables within a frame but is not the central equipment room itself.</span>" },
{ id:"D2-078", domain:2, obj:"2.4", diff:"easy", q:"What standardizes the mounting width of most network equipment racks?", options:["19 inches","24 inches","30 inches","12 inches"], answer:0, explain:"<strong>19 inches</strong> is the industry-standard mounting width for most network equipment racks.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>12 inches</b>: 12 inches is too narrow and is not a standard rack width.</span><span class='qd'><b>24 inches</b>: 24 inches is not the standard equipment mounting width, though some enclosures are wider externally.</span><span class='qd'><b>30 inches</b>: 30 inches exceeds the standard 19-inch mounting rail spacing.</span>" },
{ id:"D2-079", domain:2, obj:"2.4", diff:"medium", q:"A device is labeled 2U. How much vertical rack space does it occupy?", options:["1.75 inches","3.5 inches","5.25 inches","7 inches"], answer:1, explain:"<strong>3.5 inches</strong> is correct because each rack unit equals 1.75 inches, so 2U occupies 2 times 1.75 inches.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>1.75 inches</b>: 1.75 inches is the height of a single 1U device, not 2U.</span><span class='qd'><b>5.25 inches</b>: 5.25 inches is 3U, not 2U.</span><span class='qd'><b>7 inches</b>: 7 inches is 4U, double the correct 2U height.</span>" },
{ id:"D2-080", domain:2, obj:"2.4", diff:"medium", q:"Which PoE standard (802.3at) is commonly known as PoE+ and supplies up to about 30 W at the PSE port?", options:["802.3u","802.3af","802.3at","802.3bt Type 4"], answer:2, explain:"<strong>802.3at</strong> (PoE+) supplies up to about 30 W at the PSE port.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>802.3af</b>: 802.3af delivers about 15.4 W, not 30 W.</span><span class='qd'><b>802.3bt Type 4</b>: 802.3bt Type 4 provides up to about 90 W, far above the 30 W of PoE+.</span><span class='qd'><b>802.3u</b>: 802.3u is the Fast Ethernet standard, not a PoE power standard.</span>" },
{ id:"D2-081", domain:2, obj:"2.4", diff:"hard", q:"A 48-port switch has a total PoE power budget of 370 W. Each AP draws 25.5 W (802.3at). What is the MAXIMUM number of APs the switch can fully power simultaneously?", options:["18","48","12","14"], answer:3, explain:"<strong>14</strong> is correct because 370 W divided by 25.5 W per AP equals 14.5, and only whole APs can be fully powered, so 14 is the maximum.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>12</b>: 12 APs use only 306 W and understates the budget, leaving capacity unused.</span><span class='qd'><b>18</b>: 18 APs would need 459 W, exceeding the 370 W budget.</span><span class='qd'><b>48</b>: Powering all 48 ports would require far more than the available 370 W.</span>" },
{ id:"D2-082", domain:2, obj:"2.4", diff:"medium", q:"Which device provides battery backup to keep equipment running through a brief power outage?", options:["UPS","KVM","NIC","PDU"], answer:0, explain:"<strong>UPS</strong> provides battery backup and power conditioning to keep equipment running through a brief outage.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>PDU</b>: A PDU only distributes power to devices and holds no battery for outages.</span><span class='qd'><b>KVM</b>: A KVM switch shares keyboard, video, and mouse across servers and provides no power backup.</span><span class='qd'><b>NIC</b>: A NIC is a network interface card and has nothing to do with power backup.</span>" },
{ id:"D2-083", domain:2, obj:"2.4", diff:"medium", q:"What is the primary function of a PDU in a server rack?", options:["Provide battery backup","Distribute and sometimes meter AC power to multiple devices","Convert fiber to copper","Filter network traffic"], answer:1, explain:"<strong>Distribute and sometimes meter AC power to multiple devices</strong> is the PDU's primary function, with managed models also metering and remotely switching outlets.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Provide battery backup</b>: Battery backup is the role of a UPS, not a PDU.</span><span class='qd'><b>Convert fiber to copper</b>: Media conversion is done by a media converter, not a PDU.</span><span class='qd'><b>Filter network traffic</b>: Traffic filtering is a firewall or ACL function, unrelated to power distribution.</span>" },
{ id:"D2-084", domain:2, obj:"2.4", diff:"hard", q:"Equipment requires 1500 VA and must survive a 10-minute outage. When sizing a UPS, which specification is MOST important to verify beyond VA rating?", options:["Cable category","Number of network ports","Runtime at the expected load","Rack unit color"], answer:2, explain:"<strong>Runtime at the expected load</strong> is the most important specification because a UPS must hold the actual load long enough, which VA rating alone does not guarantee.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Number of network ports</b>: A UPS is a power device; network port count is irrelevant to its sizing.</span><span class='qd'><b>Rack unit color</b>: Color has no bearing on whether the battery sustains the load for the required duration.</span><span class='qd'><b>Cable category</b>: Cable category relates to data cabling performance, not UPS battery runtime.</span>" },
{ id:"D2-085", domain:2, obj:"2.4", diff:"easy", q:"What hardware is used to terminate and organize multiple cable runs at the top of a rack for easy patching?", options:["UPS","Media converter","Bridge","Patch panel"], answer:3, explain:"<strong>Patch panel</strong> terminates permanent cable runs and presents ports for short patch cords, simplifying moves and changes.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>UPS</b>: A UPS provides battery power and does not terminate or organize cable runs.</span><span class='qd'><b>Media converter</b>: A media converter changes between media types such as fiber and copper, not bulk cable termination.</span><span class='qd'><b>Bridge</b>: A bridge forwards frames between segments and is not a passive cable-termination panel.</span>" },
{ id:"D2-086", domain:2, obj:"2.4", diff:"medium", q:"Which connector and standard would you expect on the console (management) port cable of many switches?", options:["Rollover (rolled) cable","Loopback plug","Straight-through Ethernet","Crossover Ethernet"], answer:0, explain:"<strong>Rollover (rolled) cable</strong> reverses pin order end to end and is used for serial console management of switches and routers.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Straight-through Ethernet</b>: A straight-through cable carries data between dissimilar devices, not serial console signaling.</span><span class='qd'><b>Crossover Ethernet</b>: A crossover cable links two like data devices, not a console port.</span><span class='qd'><b>Loopback plug</b>: A loopback plug tests a port by looping signals back, not for console access.</span>" },
{ id:"D2-087", domain:2, obj:"2.4", diff:"hard", q:"A network drop tests fine for continuity but data only works at 100 Mbps, not 1 Gbps. A wiremap shows pins 4,5,7,8 are open. What is the MOST likely cause?", options:["A crossover instead of straight-through","Only two pairs were terminated","Split pairs on pins 1-2","Excessive cable length over 100 m"], answer:1, explain:"<strong>Only two pairs were terminated</strong> is the most likely cause because 100BASE-TX needs just pairs on 1-2 and 3-6, while 1000BASE-T requires all four pairs, and the open pins 4,5,7,8 show two pairs are missing.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A crossover instead of straight-through</b>: A crossover swaps pairs but would not leave pins 4,5,7,8 open, and it would not cap the link at 100 Mbps this way.</span><span class='qd'><b>Split pairs on pins 1-2</b>: A split pair causes crosstalk and errors but still shows all eight pins connected, not opens on 4,5,7,8.</span><span class='qd'><b>Excessive cable length over 100 m</b>: An over-length run causes attenuation, not specific open pins on the wiremap.</span>" },
{ id:"D2-088", domain:2, obj:"2.4", diff:"medium", q:"What is the maximum recommended horizontal run length for balanced twisted-pair Ethernet (Cat 5e/6)?", options:["305 meters","55 meters","100 meters","185 meters"], answer:2, explain:"<strong>100 meters</strong> is the maximum TIA channel length for balanced twisted-pair Ethernet, typically 90 m of permanent link plus 10 m of patch cords.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>55 meters</b>: 55 meters is a distance limit for certain 10GBASE-T runs on Cat 6, not the general Cat 5e/6 maximum.</span><span class='qd'><b>185 meters</b>: 185 meters is the old 10BASE2 (thinnet) coax limit, not twisted-pair Ethernet.</span><span class='qd'><b>305 meters</b>: 305 meters (1000 feet) is a cable box length, not a single Ethernet channel limit.</span>" },
{ id:"D2-089", domain:2, obj:"2.4", diff:"easy", q:"Which best practice helps prevent overheating in a densely populated equipment rack?", options:["Disabling UPS units","Stacking devices with no gaps and no airflow","Removing all blanking panels","Hot aisle / cold aisle airflow management"], answer:3, explain:"<strong>Hot aisle / cold aisle airflow management</strong> prevents overheating by keeping cold intake air separated from hot exhaust, aided by blanking panels.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Removing all blanking panels</b>: Removing blanking panels lets hot and cold air mix, worsening cooling rather than improving it.</span><span class='qd'><b>Disabling UPS units</b>: Disabling UPS units removes power protection and does nothing to manage heat.</span><span class='qd'><b>Stacking devices with no gaps and no airflow</b>: Blocking airflow traps heat and causes overheating, the opposite of best practice.</span>" },
{ id:"D2-090", domain:2, obj:"2.4", diff:"medium", q:"802.3bt Type 4 PoE (sometimes called PoE++) can deliver approximately how much power at the PSE port?", options:["90-100 W","15.4 W","30 W","60 W"], answer:0, explain:"<strong>90-100 W</strong> is the approximate power 802.3bt Type 4 (PoE++) delivers at the PSE using all four pairs, suitable for high-draw devices.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>15.4 W</b>: 15.4 W is the 802.3af figure, far below PoE++.</span><span class='qd'><b>30 W</b>: 30 W is the 802.3at (PoE+) figure, not Type 4 PoE++.</span><span class='qd'><b>60 W</b>: 60 W corresponds to 802.3bt Type 3, not the higher Type 4.</span>" },
{ id:"D2-091", domain:2, obj:"2.2", diff:"medium", q:"Which VLAN concept allows a single switch port to carry traffic for multiple VLANs using 802.1Q tags?", options:["Access port","Trunk port","Native untagged port","Mirror port"], answer:1, explain:"<strong>Trunk port</strong> carries traffic for multiple VLANs over one switch port by tagging frames with 802.1Q.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Access port</b>: An access port belongs to a single VLAN and sends untagged frames.</span><span class='qd'><b>Native untagged port</b>: The native VLAN is just one untagged VLAN on a trunk, not the concept of carrying many VLANs.</span><span class='qd'><b>Mirror port</b>: A mirror (SPAN) port copies traffic for analysis and does not tag multiple VLANs for transport.</span>" },
{ id:"D2-092", domain:2, obj:"2.2", diff:"medium", q:"In 802.1Q trunking, frames belonging to which VLAN are transmitted untagged by default?", options:["VLAN 4095","All VLANs are tagged","VLAN 1 native VLAN","The highest VLAN ID"], answer:2, explain:"<strong>VLAN 1 native VLAN</strong> frames are transmitted untagged by default across an 802.1Q trunk.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The highest VLAN ID</b>: The highest VLAN ID is tagged like any non-native VLAN.</span><span class='qd'><b>VLAN 4095</b>: VLAN 4095 is reserved and not used as the untagged native VLAN.</span><span class='qd'><b>All VLANs are tagged</b>: The native VLAN is specifically left untagged, so not all VLANs are tagged.</span>" },
{ id:"D2-093", domain:2, obj:"2.2", diff:"hard", q:"Two switches connect via a trunk, but a VLAN's hosts on each switch cannot communicate while same-switch hosts can. Same-switch hosts in other VLANs also work. What should you check FIRST?", options:["The PoE budget of each switch","The console cable pinout","The native VLAN setting on both ends","That the VLAN is allowed/tagged on the trunk link"], answer:3, explain:"<strong>That the VLAN is allowed/tagged on the trunk link</strong> should be checked first, since intra-switch traffic works but the VLAN's frames are not crossing the trunk.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The native VLAN setting on both ends</b>: A native VLAN mismatch typically affects only untagged traffic and raises errors, but here a specific VLAN is failing across the trunk while others succeed.</span><span class='qd'><b>The PoE budget of each switch</b>: PoE budget affects powering devices, not VLAN frame forwarding across a trunk.</span><span class='qd'><b>The console cable pinout</b>: The console cable is for management access and has no effect on data VLAN connectivity.</span>" },
{ id:"D2-094", domain:2, obj:"2.2", diff:"medium", q:"Which protocol prevents Layer 2 loops by blocking redundant switch paths until needed?", options:["Spanning Tree Protocol (STP)","HSRP","BGP","OSPF"], answer:0, explain:"<strong>Spanning Tree Protocol (STP)</strong> prevents Layer 2 loops by blocking redundant switch paths until they are needed.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>OSPF</b>: OSPF is a Layer 3 routing protocol and does not block Layer 2 switch loops.</span><span class='qd'><b>HSRP</b>: HSRP provides gateway redundancy, not Layer 2 loop prevention.</span><span class='qd'><b>BGP</b>: BGP routes between autonomous systems at Layer 3 and has no role in switch loop prevention.</span>" },
{ id:"D2-095", domain:2, obj:"2.2", diff:"easy", q:"A switch feature that immediately transitions an access port to forwarding for end devices is called:", options:["Trunk negotiation","PortFast","Root guard","BPDU flood"], answer:1, explain:"<strong>PortFast</strong> immediately transitions an access port to forwarding for end devices, bypassing the STP listening and learning states.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Root guard</b>: Root guard protects root bridge placement and does not accelerate port forwarding.</span><span class='qd'><b>BPDU flood</b>: BPDU flood is not a real edge-port feature for fast forwarding.</span><span class='qd'><b>Trunk negotiation</b>: Trunk negotiation (DTP) forms trunks between switches, unrelated to fast access-port forwarding.</span>" },
{ id:"D2-096", domain:2, obj:"2.2", diff:"medium", q:"Combining multiple physical links into one logical link for bandwidth and redundancy is known as:", options:["Half-duplex bonding","Port mirroring","Link aggregation (LACP)","VLAN pruning"], answer:2, explain:"<strong>Link aggregation (LACP)</strong> bundles physical links into one logical channel for increased throughput and failover.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Port mirroring</b>: Port mirroring copies traffic to a monitor port and does not combine links.</span><span class='qd'><b>VLAN pruning</b>: VLAN pruning limits which VLANs traverse a trunk and does not aggregate links.</span><span class='qd'><b>Half-duplex bonding</b>: This is not a valid aggregation technique; LACP requires full-duplex links.</span>" },
{ id:"D2-097", domain:2, obj:"2.2", diff:"hard", q:"A new switch port connected to a server negotiates 100 Mbps half-duplex while the server is set to 1 Gbps full-duplex. Users report sluggish transfers and CRC errors. What is the BEST fix?", options:["Disable STP on the port","Increase the PoE budget","Replace the patch panel","Set both ends to matching auto-negotiation or matching fixed speed/duplex"], answer:3, explain:"<strong>Set both ends to matching auto-negotiation or matching fixed speed/duplex</strong> is the best fix because a duplex mismatch causes late collisions and CRC errors.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Replace the patch panel</b>: The errors stem from a duplex mismatch, not faulty patch panel hardware.</span><span class='qd'><b>Disable STP on the port</b>: STP does not cause duplex mismatch errors, and disabling it risks loops.</span><span class='qd'><b>Increase the PoE budget</b>: PoE power has no effect on speed and duplex negotiation or CRC errors.</span>" },
{ id:"D2-098", domain:2, obj:"2.3", diff:"medium", q:"Which band did Wi-Fi 6E specifically add support for, requiring new client and AP hardware?", options:["6 GHz","900 MHz","2.4 GHz","5 GHz"], answer:0, explain:"<strong>6 GHz</strong> is the band Wi-Fi 6E specifically added, requiring new client and AP hardware and offering clean spectrum with wide channels.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>900 MHz</b>: 900 MHz is not a Wi-Fi 6E band.</span><span class='qd'><b>2.4 GHz</b>: 2.4 GHz was already supported by base 802.11ax, not newly added by 6E.</span><span class='qd'><b>5 GHz</b>: 5 GHz was likewise already part of 802.11ax before the 6E extension.</span>" },
{ id:"D2-099", domain:2, obj:"2.3", diff:"hard", q:"An enterprise wants per-user encryption keys and centralized credential management for Wi-Fi without distributing a shared passphrase. Which is the MOST appropriate choice?", options:["WPA3-Personal (SAE)","WPA3-Enterprise with 802.1X","Open network with captive portal","WPA2-Personal"], answer:1, explain:"<strong>WPA3-Enterprise with 802.1X</strong> is most appropriate because it authenticates each user via RADIUS and derives unique per-user keys without a shared passphrase.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>WPA3-Personal (SAE)</b>: WPA3-Personal still uses a shared passphrase rather than centralized per-user credentials.</span><span class='qd'><b>Open network with captive portal</b>: An open network provides no per-user encryption keys and weak access control.</span><span class='qd'><b>WPA2-Personal</b>: WPA2-Personal uses a single shared key, exactly what the requirement seeks to avoid.</span>" },
{ id:"D2-100", domain:2, obj:"2.4", diff:"medium", q:"During a wireless install, an AP requires more than 30 W and fails to fully power on a PoE+ switch port. Which upgrade resolves this?", options:["Lower the SSID broadcast power","Switch to 802.3af","Use an 802.3bt (PoE++) switch or injector","Use a crossover cable"], answer:2, explain:"<strong>Use an 802.3bt (PoE++) switch or injector</strong> resolves it because devices needing more than the ~30 W of 802.3at require 802.3bt Type 3/4 power.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Switch to 802.3af</b>: 802.3af supplies only about 15.4 W, even less than PoE+, so it cannot power the AP.</span><span class='qd'><b>Use a crossover cable</b>: Cable pinout does not change available PoE power.</span><span class='qd'><b>Lower the SSID broadcast power</b>: Reducing radio transmit power does not increase the PoE budget the port can deliver.</span>" }
);
NETPLUS.questions.push(
  { id:"D3-001", domain:3, obj:"3.2", diff:"easy", q:"Which SNMP version was the first to provide encryption and strong authentication for management traffic?", options:["SNMPv2u","SNMPv1","SNMPv2c","SNMPv3"], answer:3, explain:"<strong>SNMPv3</strong> introduced the User-based Security Model (USM), the first version to add message authentication, integrity, and encryption to SNMP management traffic.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SNMPv1</b>: SNMPv1 authenticates only with a cleartext community string and provides no encryption.</span><span class='qd'><b>SNMPv2c</b>: The c in SNMPv2c stands for community-based, so it still relies on plaintext community strings with no encryption.</span><span class='qd'><b>SNMPv2u</b>: SNMPv2u was an experimental user-based draft that was never widely adopted and was superseded by SNMPv3, which is the recognized first secure version.</span>" },
  { id:"D3-002", domain:3, obj:"3.2", diff:"easy", q:"In SNMP, what is the term for an unsolicited message a managed device sends to the manager when an event occurs?", options:["Trap","Walk","Get","Poll"], answer:0, explain:"<strong>Trap</strong> is an unsolicited, asynchronous notification that a managed agent pushes to the NMS when an event occurs, without being asked.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Poll</b>: Polling is the manager actively querying the agent, which is solicited and manager-initiated rather than an unsolicited device message.</span><span class='qd'><b>Walk</b>: A walk is a series of manager-initiated GetNext requests to traverse a subtree, not a device-sent notification.</span><span class='qd'><b>Get</b>: A Get is a manager-initiated request to read a single OID value, the opposite of an agent pushing data.</span>" },
  { id:"D3-003", domain:3, obj:"3.2", diff:"medium", q:"An administrator wants the NMS to actively request status values from devices at regular intervals rather than waiting for notifications. Which approach is this?", options:["Trap-based collection","Polling","Inform acknowledgment","Syslog forwarding"], answer:1, explain:"<strong>Polling</strong> has the manager periodically send Get requests to retrieve values from devices at regular intervals.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Trap-based collection</b>: Traps are device-initiated and arrive only when an event fires, so the manager waits passively rather than requesting at intervals.</span><span class='qd'><b>Inform acknowledgment</b>: An inform is an acknowledged trap variant sent by the agent, still event-driven and not a scheduled manager query.</span><span class='qd'><b>Syslog forwarding</b>: Syslog forwarding pushes log messages to a collector and is unrelated to the manager actively requesting SNMP status values.</span>" },
  { id:"D3-004", domain:3, obj:"3.2", diff:"medium", q:"What uniquely identifies a single variable within an SNMP MIB?", options:["Severity level","Community string","OID","Trap number"], answer:2, explain:"<strong>OID</strong> (Object Identifier) is the dotted-decimal address that uniquely identifies a specific managed object within the MIB hierarchy.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Community string</b>: A community string is a shared password controlling access, not an identifier for a specific variable.</span><span class='qd'><b>Trap number</b>: There is no per-variable trap number; traps are event notifications, not MIB variable identifiers.</span><span class='qd'><b>Severity level</b>: Severity level is a syslog concept ranking message importance, not an SNMP MIB object identifier.</span>" },
  { id:"D3-005", domain:3, obj:"3.2", diff:"easy", q:"Which SNMPv2c element functions as a shared password that both the manager and agent must match?", options:["MIB","Inform","OID","Community string"], answer:3, explain:"<strong>Community string</strong> is the plaintext shared secret in SNMPv1 and v2c that both manager and agent must match to gain read or write access.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>OID</b>: An OID identifies a managed object within the MIB; it is not a password.</span><span class='qd'><b>MIB</b>: The MIB is the database of manageable objects, not a shared credential.</span><span class='qd'><b>Inform</b>: An inform is an acknowledged notification message, not an authentication element.</span>" },
  { id:"D3-006", domain:3, obj:"3.2", diff:"medium", q:"Which flow technology was developed by Cisco to export records about IP traffic passing through an interface?", options:["NetFlow","IPFIX","SPAN","sFlow"], answer:0, explain:"<strong>NetFlow</strong> is Cisco's proprietary flow-export technology that summarizes IP traffic passing through an interface into flow records.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>sFlow</b>: sFlow is a separate, vendor-neutral packet-sampling standard, not a Cisco development.</span><span class='qd'><b>IPFIX</b>: IPFIX is the IETF standard derived from NetFlow v9, but it is an open standard rather than the Cisco-developed technology.</span><span class='qd'><b>SPAN</b>: SPAN mirrors raw packets to a monitor port; it does not export summarized flow records.</span>" },
  { id:"D3-007", domain:3, obj:"3.2", diff:"medium", q:"Which monitoring technology uses statistical packet sampling and embedded agents in switch hardware rather than collecting every flow?", options:["NetFlow","sFlow","Syslog","SNMP"], answer:1, explain:"<strong>sFlow</strong> uses statistical packet sampling with agents embedded directly in switch ASICs, so it scales at high speeds without capturing every flow.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>NetFlow</b>: Traditional NetFlow accounts for every flow in the cache rather than relying on hardware statistical sampling.</span><span class='qd'><b>Syslog</b>: Syslog transports text event messages, not sampled packet or flow data.</span><span class='qd'><b>SNMP</b>: SNMP polls counters and object values; it does not sample packets for traffic analysis.</span>" },
  { id:"D3-008", domain:3, obj:"3.2", diff:"hard", q:"An organization needs a vendor-neutral, IETF-standardized flow export format that interoperates across multiple hardware vendors. Which is the BEST choice?", options:["NetFlow v5","sFlow","IPFIX","RMON"], answer:2, explain:"<strong>IPFIX</strong> (RFC 7011) is the IETF-standardized flow export format designed for multivendor interoperability.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>NetFlow v5</b>: NetFlow v5 is a fixed Cisco-proprietary format, not a vendor-neutral IETF standard.</span><span class='qd'><b>sFlow</b>: sFlow is an industry sampling standard but is governed by sFlow.org, not the IETF flow-export standard the scenario specifies.</span><span class='qd'><b>RMON</b>: RMON is an SNMP-based remote monitoring MIB, not a flow export protocol.</span>" },
  { id:"D3-009", domain:3, obj:"3.2", diff:"medium", q:"A technician configures a switch to copy traffic from several ports to one analyzer port. What is the Cisco name for this feature?", options:["Trunking","LACP","STP","SPAN"], answer:3, explain:"<strong>SPAN</strong> (Switched Port Analyzer) is the Cisco feature that copies traffic from source ports or VLANs to a destination analyzer port; generically it is called port mirroring.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Trunking</b>: Trunking carries multiple VLANs over a single link using tagging; it does not mirror traffic to an analyzer.</span><span class='qd'><b>LACP</b>: LACP negotiates link aggregation to bundle ports, which has nothing to do with copying traffic for capture.</span><span class='qd'><b>STP</b>: STP prevents Layer 2 loops by blocking redundant paths; it does not duplicate traffic to a monitor port.</span>" },
  { id:"D3-010", domain:3, obj:"3.2", diff:"medium", q:"Port mirroring is configured so a protocol analyzer can capture traffic. What is the analyzer connected to?", options:["The destination (monitor) port","The trunk port","The uplink port","The source port"], answer:0, explain:"<strong>The destination (monitor) port</strong> is where mirrored traffic is copied, so the protocol analyzer or IDS connects there.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The source port</b>: The source port is the interface whose traffic is being copied, not where the analyzer attaches.</span><span class='qd'><b>The trunk port</b>: A trunk port carries tagged multi-VLAN traffic and is not the defined mirror output for the analyzer.</span><span class='qd'><b>The uplink port</b>: An uplink port connects to upstream infrastructure and is unrelated to where mirrored traffic is delivered.</span>" },
  { id:"D3-011", domain:3, obj:"3.2", diff:"easy", q:"In the syslog severity scale, which numeric level represents an Emergency (system unusable)?", options:["8","0","1","7"], answer:1, explain:"<strong>0</strong> is the syslog severity for Emergency, the most severe level meaning the system is unusable.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>1</b>: Level 1 is Alert, which is severe but means action must be taken immediately, not system unusable.</span><span class='qd'><b>7</b>: Level 7 is Debug, the least severe level for detailed troubleshooting.</span><span class='qd'><b>8</b>: There is no level 8; the syslog scale runs only from 0 through 7.</span>" },
  { id:"D3-012", domain:3, obj:"3.2", diff:"medium", q:"Which syslog severity level corresponds to Debug messages?", options:["3","5","7","0"], answer:2, explain:"<strong>7</strong> is the syslog severity for Debug, the least severe level used for detailed troubleshooting output.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>0</b>: Level 0 is Emergency, the most severe level, not Debug.</span><span class='qd'><b>3</b>: Level 3 is Error, indicating an error condition rather than debug detail.</span><span class='qd'><b>5</b>: Level 5 is Notice, a normal but significant condition, not Debug.</span>" },
  { id:"D3-013", domain:3, obj:"3.2", diff:"hard", q:"A device is configured to log severity level 4 and above. Which message will be recorded?", options:["A Notice (5) message","A Debug (7) message","An Informational (6) message","A Warning (4) message"], answer:3, explain:"<strong>A Warning (4) message</strong> is recorded because logging level 4 and above severity captures everything from Warning(4) up through the more severe levels (lower numbers).<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A Debug (7) message</b>: Debug is level 7, less severe than 4, so it is excluded by a level-4-and-above filter.</span><span class='qd'><b>An Informational (6) message</b>: Informational is level 6, below the level-4 threshold, so it is not logged.</span><span class='qd'><b>A Notice (5) message</b>: Notice is level 5, less severe than 4, so it falls outside the configured range.</span>" },
  { id:"D3-014", domain:3, obj:"3.2", diff:"medium", q:"Which syslog severity level number is assigned to Warning messages?", options:["4","6","2","3"], answer:0, explain:"<strong>4</strong> is the syslog severity number assigned to Warning messages, sitting between Error(3) and Notice(5).<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>2</b>: Level 2 is Critical, a more severe condition than Warning.</span><span class='qd'><b>3</b>: Level 3 is Error, one step more severe than Warning.</span><span class='qd'><b>6</b>: Level 6 is Informational, less severe than Warning.</span>" },
  { id:"D3-015", domain:3, obj:"3.2", diff:"easy", q:"What is the primary purpose of establishing a network performance baseline?", options:["To encrypt management traffic","To define normal operating metrics for later comparison","To assign IP addresses automatically","To replace a firewall ruleset"], answer:1, explain:"<strong>To define normal operating metrics for later comparison</strong> is the purpose of a baseline, documenting typical utilization, latency, and throughput so deviations and trends can be spotted.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To encrypt management traffic</b>: Encryption is provided by protocols like SSH or SNMPv3, not by a performance baseline.</span><span class='qd'><b>To assign IP addresses automatically</b>: Automatic IP assignment is the job of DHCP, unrelated to baselining.</span><span class='qd'><b>To replace a firewall ruleset</b>: A baseline measures performance and does not perform traffic filtering or replace firewall policy.</span>" },
  { id:"D3-016", domain:3, obj:"3.2", diff:"medium", q:"A monitoring team notices CPU utilization is consistently 40% higher than it was six months ago. Which previously collected data set BEST supports this comparison?", options:["Network diagram","Change log","Performance baseline","NDA"], answer:2, explain:"<strong>Performance baseline</strong> provides the previously collected normal readings needed to compare against today's CPU utilization and reveal the gradual increase.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Change log</b>: A change log records modifications made over time but does not store historical performance metrics for trend comparison.</span><span class='qd'><b>NDA</b>: An NDA is a confidentiality agreement, not a record of performance data.</span><span class='qd'><b>Network diagram</b>: A diagram shows topology and connectivity, not historical utilization figures.</span>" },
  { id:"D3-017", domain:3, obj:"3.2", diff:"hard", q:"An administrator must capture flow records on a high-throughput core switch without overloading the CPU. Sampling, not full capture, is acceptable. Which technology is MOST appropriate?", options:["Port mirroring to an IDS","Syslog at debug level","Full NetFlow on every packet","sFlow"], answer:3, explain:"<strong>sFlow</strong> uses hardware-based packet sampling, providing traffic visibility on a high-throughput core switch while minimizing CPU impact.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Full NetFlow on every packet</b>: Accounting for every packet adds significant CPU load, exactly what the scenario must avoid.</span><span class='qd'><b>Port mirroring to an IDS</b>: Mirroring copies full traffic, can overwhelm the monitor link, and is not the sampled flow approach requested.</span><span class='qd'><b>Syslog at debug level</b>: Debug-level syslog floods event logging and does not produce flow records or sampling of traffic.</span>" },
  { id:"D3-018", domain:3, obj:"3.2", diff:"medium", q:"Which protocol and default port are commonly used to forward log messages to a centralized collector?", options:["Syslog, UDP 514","NetFlow, UDP 2055","SMTP, TCP 25","SNMP, UDP 161"], answer:0, explain:"<strong>Syslog, UDP 514</strong> is the standard protocol and default port for forwarding log messages to a centralized collector.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SNMP, UDP 161</b>: UDP 161 is for SNMP agent polling, not log forwarding.</span><span class='qd'><b>NetFlow, UDP 2055</b>: UDP 2055 is a common NetFlow export port for flow records, not text log messages.</span><span class='qd'><b>SMTP, TCP 25</b>: TCP 25 is for email transport, not centralized event logging.</span>" },
  { id:"D3-019", domain:3, obj:"3.2", diff:"hard", q:"A security team wants an IDS to inspect a copy of all traffic crossing a switch without being inline. Which is the FIRST configuration to implement?", options:["Deploy IPAM","Configure a SPAN/port-mirror session to the IDS port","Enable SNMPv3 traps","Set syslog to severity 7"], answer:1, explain:"<strong>Configure a SPAN/port-mirror session to the IDS port</strong> delivers a copy of all switch traffic to the IDS so it can inspect passively without sitting inline.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Enable SNMPv3 traps</b>: SNMP traps send device event notifications, not a copy of user traffic for inspection.</span><span class='qd'><b>Set syslog to severity 7</b>: Verbose syslog generates log detail but does not feed packet traffic to an IDS.</span><span class='qd'><b>Deploy IPAM</b>: IPAM manages IP address space, DHCP, and DNS, and does nothing to mirror traffic to an IDS.</span>" },
  { id:"D3-020", domain:3, obj:"3.2", diff:"easy", q:"What does an SNMP 'walk' operation do?", options:["Reboots the agent","Sends a single trap","Retrieves a tree of OID values sequentially","Encrypts the community string"], answer:2, explain:"<strong>Retrieves a tree of OID values sequentially</strong> describes a walk, which uses successive GetNext requests to traverse an entire MIB subtree.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Sends a single trap</b>: Sending a trap is an agent-initiated event notification, not a manager traversal of OIDs.</span><span class='qd'><b>Encrypts the community string</b>: A walk does not encrypt anything; encryption is an SNMPv3 USM feature.</span><span class='qd'><b>Reboots the agent</b>: A walk only reads values and never reboots or otherwise alters the device.</span>" },
  { id:"D3-021", domain:3, obj:"3.1", diff:"easy", q:"Which document is a formal contract that defines the expected level of service, including uptime and response times, between a provider and a customer?", options:["SOW","MOU","NDA","SLA"], answer:3, explain:"<strong>SLA</strong> (Service Level Agreement) is the formal contract specifying measurable service commitments such as uptime percentages and response times.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>NDA</b>: An NDA protects confidential information; it does not define service levels.</span><span class='qd'><b>SOW</b>: A SOW defines project deliverables and tasks, not ongoing service commitments.</span><span class='qd'><b>MOU</b>: An MOU expresses non-binding mutual intent, not enforceable service metrics.</span>" },
  { id:"D3-022", domain:3, obj:"3.1", diff:"easy", q:"Which agreement is primarily used to protect confidential information shared between parties?", options:["NDA","SOW","MTBF","SLA"], answer:0, explain:"<strong>NDA</strong> (Non-Disclosure Agreement) legally binds parties to keep shared information confidential.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SLA</b>: An SLA defines service performance commitments, not confidentiality obligations.</span><span class='qd'><b>SOW</b>: A SOW scopes project deliverables and timelines, not protection of secrets.</span><span class='qd'><b>MTBF</b>: MTBF is a reliability metric for hardware, not a confidentiality agreement.</span>" },
  { id:"D3-023", domain:3, obj:"3.1", diff:"medium", q:"Which document defines the specific deliverables, tasks, timeline, and milestones for a particular project?", options:["MOU","SOW","NDA","SLA"], answer:1, explain:"<strong>SOW</strong> (Statement of Work) details the scope, deliverables, tasks, schedule, milestones, and acceptance criteria for a specific project.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>MOU</b>: An MOU records non-binding mutual intent, not detailed project deliverables and milestones.</span><span class='qd'><b>NDA</b>: An NDA governs confidentiality of shared information, not project tasks.</span><span class='qd'><b>SLA</b>: An SLA sets ongoing service metrics, not the one-time deliverables of a project.</span>" },
  { id:"D3-024", domain:3, obj:"3.1", diff:"medium", q:"Two organizations want to document a mutual understanding and intent to cooperate, but without creating a legally binding contract. Which document fits BEST?", options:["NDA","SLA","MOU","SOW"], answer:2, explain:"<strong>MOU</strong> (Memorandum of Understanding) documents shared intent and cooperation but is generally not legally enforceable like a contract.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SLA</b>: An SLA is an enforceable contract defining service levels, the opposite of non-binding.</span><span class='qd'><b>SOW</b>: A SOW is a binding project document specifying deliverables, not a statement of intent.</span><span class='qd'><b>NDA</b>: An NDA is a legally binding confidentiality agreement, not a non-binding cooperation statement.</span>" },
  { id:"D3-025", domain:3, obj:"3.1", diff:"easy", q:"What is the main goal of a change management process?", options:["To assign DHCP scopes","To encrypt syslog traffic","To bypass approvals for faster deployment","To control and document modifications to reduce risk"], answer:3, explain:"<strong>To control and document modifications to reduce risk</strong> is the core goal of change management, providing a structured, approved process that minimizes disruption.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To bypass approvals for faster deployment</b>: Bypassing approvals defeats the purpose of change management, which exists to enforce review.</span><span class='qd'><b>To assign DHCP scopes</b>: Assigning DHCP scopes is an addressing task, unrelated to the change governance process.</span><span class='qd'><b>To encrypt syslog traffic</b>: Encrypting syslog is a transport security measure, not the objective of change management.</span>" },
  { id:"D3-026", domain:3, obj:"3.1", diff:"medium", q:"During a change management process, which item describes the steps to return systems to their prior state if the change fails?", options:["Rollback (backout) plan","Maintenance window","Risk register","Approval matrix"], answer:0, explain:"<strong>Rollback (backout) plan</strong> documents the steps to revert a change and restore the previous working state if the change fails.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Approval matrix</b>: An approval matrix identifies who must authorize a change, not how to undo it.</span><span class='qd'><b>Maintenance window</b>: A maintenance window is the scheduled time to apply changes, not the reversal procedure.</span><span class='qd'><b>Risk register</b>: A risk register catalogs identified risks, not the technical steps to back out a change.</span>" },
  { id:"D3-027", domain:3, obj:"3.1", diff:"medium", q:"A scheduled period of approved downtime during which changes can be safely applied is called what?", options:["Polling cycle","Maintenance window","Recovery point","Baseline interval"], answer:1, explain:"<strong>Maintenance window</strong> is the pre-approved timeframe, often during low usage, reserved for safely applying changes.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Recovery point</b>: A recovery point relates to the state of data to which a system can be restored, not a scheduled change period.</span><span class='qd'><b>Baseline interval</b>: A baseline interval concerns how often performance data is sampled, not approved downtime.</span><span class='qd'><b>Polling cycle</b>: A polling cycle is how frequently an NMS queries devices, unrelated to scheduled change downtime.</span>" },
  { id:"D3-028", domain:3, obj:"3.1", diff:"medium", q:"Which document records the formal authorization to proceed with a proposed change after review by stakeholders?", options:["Bill of materials","Baseline","Change request approval","NDA"], answer:2, explain:"<strong>Change request approval</strong> is the documented sign-off from the change advisory board or stakeholders that authorizes implementation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>NDA</b>: An NDA governs confidentiality and does not authorize a change.</span><span class='qd'><b>Bill of materials</b>: A BOM lists required components, not formal change authorization.</span><span class='qd'><b>Baseline</b>: A baseline records normal performance metrics, not approval to proceed with a change.</span>" },
  { id:"D3-029", domain:3, obj:"3.1", diff:"hard", q:"An engineer plans a firmware upgrade on a core router. Which step should be completed FIRST in a mature change management process?", options:["Notify users after completion","Delete the rollback plan","Apply the upgrade immediately","Submit a change request for review and approval"], answer:3, explain:"<strong>Submit a change request for review and approval</strong> is the first step in a mature process, initiating risk assessment and scheduling before any implementation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Apply the upgrade immediately</b>: Acting before review violates change management and skips risk assessment and approval.</span><span class='qd'><b>Notify users after completion</b>: Notification should occur before the change as well, and it is not the first procedural step.</span><span class='qd'><b>Delete the rollback plan</b>: A rollback plan must be kept, not deleted, since it enables recovery if the upgrade fails.</span>" },
  { id:"D3-030", domain:3, obj:"3.1", diff:"medium", q:"Which document inventories the hardware and software components required to build or replace a system?", options:["Bill of materials (BOM)","SLA","MOU","SOW"], answer:0, explain:"<strong>Bill of materials (BOM)</strong> inventories all hardware and software parts, components, and quantities needed to build or replace a system.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SOW</b>: A SOW scopes project tasks and deliverables, not a component parts list.</span><span class='qd'><b>SLA</b>: An SLA defines service performance commitments, not an inventory of components.</span><span class='qd'><b>MOU</b>: An MOU expresses mutual intent, not a list of required hardware and software.</span>" },
  { id:"D3-031", domain:3, obj:"3.1", diff:"medium", q:"Which type of diagram shows the actual physical placement and cabling of devices, racks, and ports?", options:["Logical diagram","Physical diagram","Sequence diagram","Flow diagram"], answer:1, explain:"<strong>Physical diagram</strong> depicts the real-world layout including cable runs, rack positions, and port assignments of devices.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Logical diagram</b>: A logical diagram shows IP subnets, VLANs, and routing relationships rather than physical placement and cabling.</span><span class='qd'><b>Sequence diagram</b>: A sequence diagram models the order of interactions or messages over time, not physical device layout.</span><span class='qd'><b>Flow diagram</b>: A flow diagram illustrates process or data flow logic, not physical cabling and rack positions.</span>" },
  { id:"D3-032", domain:3, obj:"3.1", diff:"medium", q:"A logical network diagram primarily depicts which of the following?", options:["Floor outlet numbers","Exact cable lengths","IP subnets, VLANs, and routing relationships","Rack unit positions"], answer:2, explain:"<strong>IP subnets, VLANs, and routing relationships</strong> are what a logical diagram depicts, representing how the network functions rather than where devices physically sit.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Exact cable lengths</b>: Cable lengths are a physical detail captured in a physical diagram, not a logical one.</span><span class='qd'><b>Rack unit positions</b>: Rack positions are physical placement information, belonging to a physical diagram.</span><span class='qd'><b>Floor outlet numbers</b>: Floor outlet numbers describe physical cabling locations, not logical network structure.</span>" },
  { id:"D3-033", domain:3, obj:"3.1", diff:"hard", q:"After a major outage, an organization wants to ensure documentation reflects the current environment. Which practice MOST directly prevents drift between documentation and reality?", options:["Encrypting the diagrams","Deleting old baselines","Storing diagrams offline only","Updating documentation as part of the change process"], answer:3, explain:"<strong>Updating documentation as part of the change process</strong> keeps diagrams and records synchronized with the actual environment, preventing drift.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Storing diagrams offline only</b>: Where diagrams are stored does not keep their contents current with reality.</span><span class='qd'><b>Encrypting the diagrams</b>: Encryption protects confidentiality but does nothing to keep documentation accurate.</span><span class='qd'><b>Deleting old baselines</b>: Removing baselines discards historical data and does not synchronize documentation with the current state.</span>" },
  { id:"D3-034", domain:3, obj:"3.1", diff:"hard", q:"Which document would an auditor MOST likely review to confirm that only authorized, reviewed modifications were made to network infrastructure over the past year?", options:["Change logs","NDA","DHCP scope","MIB"], answer:0, explain:"<strong>Change logs</strong> provide the audit trail of who changed what, when, and with what approval, demonstrating that only authorized modifications occurred.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>NDA</b>: An NDA covers confidentiality and contains no record of infrastructure changes.</span><span class='qd'><b>DHCP scope</b>: A DHCP scope defines an address range for leasing, not a history of authorized changes.</span><span class='qd'><b>MIB</b>: A MIB is the SNMP database of manageable objects, not an audit record of modifications.</span>" },
  { id:"D3-035", domain:3, obj:"3.1", diff:"medium", q:"An acceptable use policy (AUP) primarily defines what?", options:["Hardware warranty terms","How users may and may not use organizational resources","SNMP community strings","Routing protocol selection"], answer:1, explain:"<strong>How users may and may not use organizational resources</strong> is what an AUP defines, setting the rules and acceptable behavior for accessing company systems.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Hardware warranty terms</b>: Warranty terms are vendor contract details, not user behavior rules.</span><span class='qd'><b>SNMP community strings</b>: Community strings are SNMP credentials, not policy on acceptable use.</span><span class='qd'><b>Routing protocol selection</b>: Choosing a routing protocol is a design decision, unrelated to user conduct policy.</span>" },
  { id:"D3-036", domain:3, obj:"3.3", diff:"easy", q:"Which disaster recovery metric defines the maximum acceptable amount of data loss measured in time?", options:["MTBF","RTO","RPO","MTTR"], answer:2, explain:"<strong>RPO</strong> (Recovery Point Objective) defines the maximum tolerable amount of data loss measured in time, which dictates backup frequency.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>RTO</b>: RTO is the maximum time to restore a service, measuring downtime tolerance rather than data loss.</span><span class='qd'><b>MTTR</b>: MTTR is the average time to repair a failed component, not a measure of acceptable data loss.</span><span class='qd'><b>MTBF</b>: MTBF measures average uptime between failures, indicating reliability rather than data loss.</span>" },
  { id:"D3-037", domain:3, obj:"3.3", diff:"easy", q:"Which metric defines the maximum acceptable time to restore a service after a disruption?", options:["MTBF","BOM","RPO","RTO"], answer:3, explain:"<strong>RTO</strong> (Recovery Time Objective) defines the maximum acceptable time to restore a service after a disruption.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>RPO</b>: RPO measures acceptable data loss in time, not how long restoration may take.</span><span class='qd'><b>MTBF</b>: MTBF describes average time between failures, a reliability metric, not a restoration target.</span><span class='qd'><b>BOM</b>: A BOM is a parts inventory document, not a recovery time metric.</span>" },
  { id:"D3-038", domain:3, obj:"3.3", diff:"medium", q:"A fully equipped alternate site with live, real-time replicated data ready for near-instant failover is known as what?", options:["Hot site","Mobile site","Cold site","Warm site"], answer:0, explain:"<strong>Hot site</strong> is a fully equipped alternate location with hardware, connectivity, and live real-time replicated data, enabling near-instant failover.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Cold site</b>: A cold site has space and power only, requiring hardware and data to be installed before use.</span><span class='qd'><b>Warm site</b>: A warm site has equipment and connectivity but needs data loaded and synchronized before operating, so failover is not near-instant.</span><span class='qd'><b>Mobile site</b>: A mobile site is a transportable facility brought to a location and is not defined by continuously replicated live data.</span>" },
  { id:"D3-039", domain:3, obj:"3.3", diff:"medium", q:"Which recovery site type provides space and power but requires hardware to be brought in and configured before use?", options:["Warm site","Cold site","Cloud site","Hot site"], answer:1, explain:"<strong>Cold site</strong> provides facilities and utilities such as space and power only, so equipment must be brought in and configured before use.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Hot site</b>: A hot site is fully equipped with live replicated data, the opposite of needing hardware installed.</span><span class='qd'><b>Warm site</b>: A warm site already has hardware and connectivity in place and needs only data restoration, not full hardware setup.</span><span class='qd'><b>Cloud site</b>: A cloud site uses provider-hosted virtual resources and typically provisions on demand rather than offering only bare space and power.</span>" },
  { id:"D3-040", domain:3, obj:"3.3", diff:"hard", q:"A business requires an RPO near zero but can tolerate several hours of RTO at a lower cost. Which design BEST satisfies this?", options:["Tape backups stored offsite monthly","Cold site with weekly backups","Continuous data replication to a warm site","No backups, rebuild on demand"], answer:2, explain:"<strong>Continuous data replication to a warm site</strong> keeps data current for a near-zero RPO, while the warm site provides acceptable but not instantaneous recovery, balancing cost against the relaxed RTO.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Cold site with weekly backups</b>: Weekly backups allow up to a week of data loss, far exceeding a near-zero RPO.</span><span class='qd'><b>No backups, rebuild on demand</b>: Without backups all data is lost on failure, which cannot satisfy a near-zero RPO.</span><span class='qd'><b>Tape backups stored offsite monthly</b>: Monthly tapes permit a month of data loss, grossly violating the near-zero RPO requirement.</span>" },
  { id:"D3-041", domain:3, obj:"3.3", diff:"medium", q:"Which high-availability concept refers to automatically transferring operations to a standby system when the primary fails?", options:["Polling","Load shedding","Throttling","Failover"], answer:3, explain:"<strong>Failover</strong> automatically transfers operations to a standby system when the primary fails, maintaining availability.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Polling</b>: Polling is an SNMP manager querying devices for status, not a redundancy mechanism.</span><span class='qd'><b>Load shedding</b>: Load shedding intentionally drops or reduces load to protect a system, not transfer to a standby.</span><span class='qd'><b>Throttling</b>: Throttling limits the rate of traffic or requests, not switch operations to a backup on failure.</span>" },
  { id:"D3-042", domain:3, obj:"3.3", diff:"hard", q:"An administrator measures average time to repair failed devices to improve maintainability. Which metric is being tracked?", options:["MTTR","RPO","SLA","MTBF"], answer:0, explain:"<strong>MTTR</strong> (Mean Time To Repair) measures the average time needed to restore a failed component to service, reflecting maintainability.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>MTBF</b>: MTBF measures average operating time between failures, indicating reliability rather than repair speed.</span><span class='qd'><b>RPO</b>: RPO measures acceptable data loss in time, not repair duration.</span><span class='qd'><b>SLA</b>: An SLA is a service contract, not a measured repair-time metric.</span>" },
  { id:"D3-043", domain:3, obj:"3.4", diff:"medium", q:"Which service automatically assigns IPv4 addresses, subnet masks, and gateways to clients?", options:["DNS","DHCP","NTP","SNMP"], answer:1, explain:"<strong>DHCP</strong> dynamically leases IPv4 configuration, including address, subnet mask, gateway, and DNS, to clients.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS</b>: DNS resolves hostnames to IP addresses; it does not assign IP configuration.</span><span class='qd'><b>NTP</b>: NTP synchronizes clocks and has no role in IP address assignment.</span><span class='qd'><b>SNMP</b>: SNMP monitors and manages devices; it does not lease addresses.</span>" },
  { id:"D3-044", domain:3, obj:"3.4", diff:"medium", q:"Which service keeps clocks synchronized across network devices, which is critical for accurate log correlation?", options:["DNS","SMTP","NTP","DHCP"], answer:2, explain:"<strong>NTP</strong> (Network Time Protocol) synchronizes device clocks so log timestamps align across systems for accurate correlation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DHCP</b>: DHCP assigns IP configuration, not time synchronization.</span><span class='qd'><b>DNS</b>: DNS resolves names to addresses and does not coordinate clocks.</span><span class='qd'><b>SMTP</b>: SMTP transports email and has nothing to do with clock synchronization.</span>" },
  { id:"D3-045", domain:3, obj:"3.4", diff:"hard", q:"In IPv6, which mechanism allows a host to configure its own address using the router's advertised prefix without a DHCP server?", options:["NAT","APIPA","DHCPv4","SLAAC"], answer:3, explain:"<strong>SLAAC</strong> (Stateless Address Autoconfiguration) lets an IPv6 host build its own address from the prefix advertised in Router Advertisements, without a DHCP server.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>NAT</b>: NAT translates addresses between networks; it does not autoconfigure a host address from a router prefix.</span><span class='qd'><b>APIPA</b>: APIPA is an IPv4 link-local fallback (169.254.x.x) used when DHCP fails, not an IPv6 prefix-based mechanism.</span><span class='qd'><b>DHCPv4</b>: DHCPv4 requires a server to assign IPv4 addresses, which is exactly what SLAAC avoids and applies to IPv4 only.</span>" },
  { id:"D3-046", domain:3, obj:"3.4", diff:"medium", q:"What is the primary function of an IPAM solution?", options:["Centrally tracking and managing IP address space, DHCP, and DNS","Mirroring switch ports","Synchronizing clocks","Encrypting traffic"], answer:0, explain:"<strong>Centrally tracking and managing IP address space, DHCP, and DNS</strong> is the primary function of IPAM, consolidating oversight to prevent conflicts.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Encrypting traffic</b>: Encryption is handled by protocols like SSH or IPsec, not by IPAM.</span><span class='qd'><b>Mirroring switch ports</b>: Port mirroring is a SPAN function for traffic capture, unrelated to address management.</span><span class='qd'><b>Synchronizing clocks</b>: Clock synchronization is NTP's job, not part of IP address management.</span>" },
  { id:"D3-047", domain:3, obj:"3.5", diff:"medium", q:"Which protocol provides encrypted command-line remote management, replacing Telnet?", options:["FTP","SSH","HTTP","SNMPv1"], answer:1, explain:"<strong>SSH</strong> encrypts remote terminal sessions, protecting credentials and commands, and replaced the plaintext Telnet.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>HTTP</b>: HTTP is unencrypted web traffic and is not a command-line management replacement for Telnet.</span><span class='qd'><b>SNMPv1</b>: SNMPv1 is a monitoring protocol with plaintext community strings, not an encrypted CLI session.</span><span class='qd'><b>FTP</b>: FTP transfers files in cleartext and is not a secure remote command-line shell.</span>" },
  { id:"D3-048", domain:3, obj:"3.5", diff:"hard", q:"An administrator needs out-of-band management access to a router even when the production network is down. Which method is BEST?", options:["HTTP web GUI over Wi-Fi","SSH over the production LAN","A dedicated console/serial connection","Telnet through the data plane"], answer:2, explain:"<strong>A dedicated console/serial connection</strong> provides out-of-band management that works independently of the production network, allowing access during outages.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SSH over the production LAN</b>: SSH over the production LAN is in-band and fails when that network is down.</span><span class='qd'><b>Telnet through the data plane</b>: Telnet through the data plane is both in-band (failing in an outage) and unencrypted.</span><span class='qd'><b>HTTP web GUI over Wi-Fi</b>: A web GUI over Wi-Fi rides the production network and is unavailable when it is down.</span>" }
);
NETPLUS.questions.push(
{ id:"D3-049", domain:3, obj:"3.3", diff:"easy", q:"An organization wants an alternate recovery site with power, network connectivity, and pre-staged hardware, but accepts that recent data must be restored from backups before failover completes. Which site type is this?", options:["Cold site","Cloud site","Hot site","Warm site"], answer:3, explain:"<strong>Warm site</strong> — a facility with power, connectivity, and hardware already in place but without live, continuously replicated data, so backups must be restored before operations resume. It balances cost against recovery speed.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Hot site</b>: A hot site maintains live, real-time replicated data and can take over almost immediately, with no backup restore required.</span><span class='qd'><b>Cold site</b>: A cold site provides only space and power; hardware must be brought in and configured, making recovery far slower.</span><span class='qd'><b>Cloud site</b>: This names a hosting location, not the classic readiness tier describing pre-staged hardware without live data.</span>" },
{ id:"D3-050", domain:3, obj:"3.3", diff:"easy", q:"Which metric defines the maximum acceptable time to restore a service after an outage?", options:["RTO","MTBF","SLA","RPO"], answer:0, explain:"<strong>RTO</strong> (Recovery Time Objective) is the target duration within which a service must be restored after an outage.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>RPO</b>: RPO measures acceptable data loss in time, not restoration duration.</span><span class='qd'><b>MTBF</b>: MTBF is a reliability metric for time between failures, not a recovery target.</span><span class='qd'><b>SLA</b>: An SLA is a service contract that may reference RTO but is not itself the restoration-time metric.</span>" },
{ id:"D3-051", domain:3, obj:"3.3", diff:"easy", q:"What does MTTR stand for in availability planning?", options:["Maximum Tolerable Transaction Rate","Mean Time To Repair","Minimum Time To Recover","Mean Time To Restore Backups"], answer:1, explain:"<strong>Mean Time To Repair</strong> is the correct expansion of MTTR, the average time to repair a failed component and return it to operation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Mean Time To Restore Backups</b>: This is not the standard MTTR definition; MTTR refers to repairing the component, not specifically restoring backups.</span><span class='qd'><b>Maximum Tolerable Transaction Rate</b>: This is an invented term unrelated to availability metrics.</span><span class='qd'><b>Minimum Time To Recover</b>: This is not what MTTR stands for; MTTR is a mean repair time, not a minimum recovery time.</span>" },
{ id:"D3-052", domain:3, obj:"3.3", diff:"medium", q:"MTBF is most useful for describing which characteristic of a hardware component?", options:["How much it costs to replace","How long data can be lost","How reliable the device is between failures","How fast it can be repaired"], answer:2, explain:"<strong>How reliable the device is between failures</strong> is what MTBF describes, estimating average operational time between inherent failures of a repairable system.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>How long data can be lost</b>: Acceptable data loss is measured by RPO, not MTBF.</span><span class='qd'><b>How fast it can be repaired</b>: Repair speed is measured by MTTR, not MTBF.</span><span class='qd'><b>How much it costs to replace</b>: Replacement cost is a financial figure, not a reliability metric.</span>" },
{ id:"D3-053", domain:3, obj:"3.3", diff:"easy", q:"Which recovery site is fully equipped, running, and able to take over operations almost immediately?", options:["Mobile site","Cold site","Warm site","Hot site"], answer:3, explain:"<strong>Hot site</strong> is a fully operational duplicate with live systems and current data, enabling near-instant takeover at the highest cost.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Cold site</b>: A cold site has only space and power, so it cannot take over almost immediately.</span><span class='qd'><b>Warm site</b>: A warm site has equipment but needs data restored first, so failover is delayed rather than immediate.</span><span class='qd'><b>Mobile site</b>: A mobile site is a transportable facility, not a continuously running duplicate ready for instant takeover.</span>" },
{ id:"D3-054", domain:3, obj:"3.3", diff:"medium", q:"A company wants a recovery site with hardware and network connectivity in place but data that must be loaded and synchronized before use. Which site type is this?", options:["Warm site","Cold site","Cloud site","Hot site"], answer:0, explain:"<strong>Warm site</strong> has equipment and network connectivity in place but requires current data to be loaded and synchronized before it can operate.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Hot site</b>: A hot site already has live, replicated data and needs no loading before use.</span><span class='qd'><b>Cold site</b>: A cold site lacks installed hardware, so it provides only space and power rather than ready equipment.</span><span class='qd'><b>Cloud site</b>: A cloud site provisions virtual resources on demand and is not specifically the equipment-ready, data-pending site described.</span>" },
{ id:"D3-055", domain:3, obj:"3.3", diff:"easy", q:"Which recovery site type is the least expensive but takes the longest to bring online?", options:["Warm site","Cold site","Active-active site","Hot site"], answer:1, explain:"<strong>Cold site</strong> provides only space and power with little or no equipment, making it the cheapest yet slowest to activate.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Hot site</b>: A hot site is the most expensive and fastest, the opposite of least expensive and slowest.</span><span class='qd'><b>Warm site</b>: A warm site is moderately priced and faster than a cold site because hardware is already in place.</span><span class='qd'><b>Active-active site</b>: An active-active design runs live in parallel for immediate continuity, which is high cost and fast, not cheap and slow.</span>" },
{ id:"D3-056", domain:3, obj:"3.3", diff:"medium", q:"Which backup type copies only the data changed since the last backup of ANY type and clears the archive bit?", options:["Full","Differential","Incremental","Snapshot"], answer:2, explain:"<strong>Incremental</strong> backups copy only data changed since the last backup of any type and clear the archive bit, minimizing backup time.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Full</b>: A full backup copies all data regardless of change and clears the archive bit, not just the recent changes.</span><span class='qd'><b>Differential</b>: A differential copies all changes since the last full backup and does not clear the archive bit.</span><span class='qd'><b>Snapshot</b>: A snapshot captures a point-in-time image of state rather than copying changes based on the archive bit.</span>" },
{ id:"D3-057", domain:3, obj:"3.3", diff:"medium", q:"Which backup type copies all data changed since the last FULL backup and does not clear the archive bit?", options:["Full","Mirror","Incremental","Differential"], answer:3, explain:"<strong>Differential</strong> backups copy everything changed since the last full backup and leave the archive bit set, so each grows until the next full.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Incremental</b>: An incremental copies only changes since the last backup of any type and clears the archive bit.</span><span class='qd'><b>Full</b>: A full backup copies all data and clears the archive bit, not just changes since the last full.</span><span class='qd'><b>Mirror</b>: A mirror maintains an exact ongoing copy of the source and is not the archive-bit-based differential method described.</span>" },
{ id:"D3-058", domain:3, obj:"3.3", diff:"hard", q:"To restore from incremental backups after a failure, what is the MINIMUM set of backups that must be applied?", options:["The last full plus every incremental since that full","The most recent incremental only","The last full backup only","The last full plus the most recent incremental"], answer:0, explain:"<strong>The last full plus every incremental since that full</strong> is required, applied in order, because each incremental holds only the changes from the prior backup.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The last full backup only</b>: The full alone omits all changes captured by the incrementals taken afterward.</span><span class='qd'><b>The last full plus the most recent incremental</b>: Skipping earlier incrementals loses the intermediate changes they alone contain.</span><span class='qd'><b>The most recent incremental only</b>: A single incremental has only the latest changes and cannot rebuild the full data set without the base full.</span>" },
{ id:"D3-059", domain:3, obj:"3.3", diff:"medium", q:"To restore using differential backups, which backups are required?", options:["The last full plus every differential","The last full plus only the most recent differential","Only the most recent differential","Every differential since the system was built"], answer:1, explain:"<strong>The last full plus only the most recent differential</strong> is required, since each differential already contains all changes since the full.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The last full plus every differential</b>: Older differentials are redundant because the latest one already includes their changes.</span><span class='qd'><b>Only the most recent differential</b>: Without the base full backup the differential cannot reconstruct the complete data set.</span><span class='qd'><b>Every differential since the system was built</b>: Differentials before the most recent full are obsolete and unnecessary for the restore.</span>" },
{ id:"D3-060", domain:3, obj:"3.3", diff:"easy", q:"The 3-2-1 backup rule recommends keeping three copies of data on two media types with how many copies stored offsite?", options:["Three","Zero","One","Two"], answer:2, explain:"<strong>One</strong> copy stored offsite is the requirement of the 3-2-1 rule: three total copies on two media types with at least one offsite.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Zero</b>: Keeping no copy offsite leaves all data vulnerable to a single local disaster, violating the rule.</span><span class='qd'><b>Two</b>: The rule specifies at least one offsite copy, not two, as the minimum.</span><span class='qd'><b>Three</b>: Storing all three copies offsite is not what the rule requires; only one must be offsite.</span>" },
{ id:"D3-061", domain:3, obj:"3.3", diff:"hard", q:"An organization needs an RPO of near zero and an RTO of minutes for a critical database. Which combination BEST meets this?", options:["Monthly snapshots stored offsite","Nightly full backups to tape at a cold site","Weekly differentials shipped to a warm site","Continuous data replication to a hot site"], answer:3, explain:"<strong>Continuous data replication to a hot site</strong> keeps standby data nearly current for a near-zero RPO and allows failover in minutes for a low RTO.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Nightly full backups to tape at a cold site</b>: Nightly tape allows up to a day of data loss and a cold site takes long to activate, failing both targets.</span><span class='qd'><b>Weekly differentials shipped to a warm site</b>: Weekly differentials permit days of data loss and a warm site needs data restored, missing the near-zero RPO and minutes RTO.</span><span class='qd'><b>Monthly snapshots stored offsite</b>: Monthly snapshots allow up to a month of data loss, far exceeding a near-zero RPO.</span>" },
{ id:"D3-062", domain:3, obj:"3.3", diff:"medium", q:"Which document records the step-by-step procedures used to restore systems after a major outage?", options:["Disaster Recovery Plan","Service Level Agreement","Network diagram","Acceptable Use Policy"], answer:0, explain:"<strong>Disaster Recovery Plan</strong> documents the step-by-step procedures, roles, and resources needed to restore IT systems after a major outage.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Acceptable Use Policy</b>: An AUP defines user behavior rules, not recovery procedures.</span><span class='qd'><b>Service Level Agreement</b>: An SLA defines service commitments, not the detailed steps to restore systems.</span><span class='qd'><b>Network diagram</b>: A diagram shows topology and may assist recovery but does not contain the restoration procedures.</span>" },
{ id:"D3-063", domain:3, obj:"3.4", diff:"easy", q:"Which DHCP message does a client broadcast FIRST when it has no IP address?", options:["DHCPOFFER","DHCPDISCOVER","DHCPREQUEST","DHCPACK"], answer:1, explain:"<strong>DHCPDISCOVER</strong> is the first message a client broadcasts when it has no IP address, beginning the DORA process to locate available servers.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DHCPOFFER</b>: The OFFER is sent by the server in response to a discover, not first by the client.</span><span class='qd'><b>DHCPREQUEST</b>: The REQUEST is the client's third step, accepting an offer, not the initial broadcast.</span><span class='qd'><b>DHCPACK</b>: The ACK is the server's final confirmation, the last DORA step, not the first.</span>" },
{ id:"D3-064", domain:3, obj:"3.4", diff:"medium", q:"What is the correct order of the DHCP DORA process?", options:["Offer, Discover, Acknowledge, Request","Request, Offer, Discover, Acknowledge","Discover, Offer, Request, Acknowledge","Discover, Request, Offer, Acknowledge"], answer:2, explain:"<strong>Discover, Offer, Request, Acknowledge</strong> is the correct DORA order: client discovers, server offers, client requests, server acknowledges.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Discover, Request, Offer, Acknowledge</b>: This swaps Offer and Request; the server must offer before the client requests.</span><span class='qd'><b>Offer, Discover, Acknowledge, Request</b>: Discover must come first from the client before any offer, so this sequence is out of order.</span><span class='qd'><b>Request, Offer, Discover, Acknowledge</b>: A client cannot request before discovering and being offered an address, making this order invalid.</span>" },
{ id:"D3-065", domain:3, obj:"3.4", diff:"medium", q:"A DHCP server is on a different subnet than the clients. Which feature on the router forwards client broadcasts to that server?", options:["NAT overload","Split horizon","Proxy ARP","IP helper / DHCP relay"], answer:3, explain:"<strong>IP helper / DHCP relay</strong> on the router converts client broadcasts into unicast packets forwarded to a DHCP server on another subnet.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Proxy ARP</b>: Proxy ARP answers ARP requests on behalf of hosts on another segment; it does not forward DHCP broadcasts.</span><span class='qd'><b>NAT overload</b>: NAT overload (PAT) translates many private addresses to one public address and does not relay DHCP messages.</span><span class='qd'><b>Split horizon</b>: Split horizon is a routing loop-prevention rule, unrelated to forwarding DHCP requests.</span>" },
{ id:"D3-066", domain:3, obj:"3.4", diff:"hard", q:"Clients on a remote VLAN receive no addresses even though the central DHCP server is online and scoped correctly. The router interface has no helper configured. What is the MOST likely fix?", options:["Configure an IP helper address on the clients' gateway interface","Increase the DHCP lease time","Enable DNS forwarding on the router","Add a static route to the DHCP server"], answer:0, explain:"<strong>Configure an IP helper address on the clients' gateway interface</strong> is the fix, since routers do not forward broadcast DHCP discovers by default and the relay converts them to unicast toward the server.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Add a static route to the DHCP server</b>: A static route affects routed traffic but does not forward the client's broadcast discover packets.</span><span class='qd'><b>Increase the DHCP lease time</b>: Lease time affects how long addresses are held, not whether discovers reach the server.</span><span class='qd'><b>Enable DNS forwarding on the router</b>: DNS forwarding handles name queries and has nothing to do with relaying DHCP broadcasts.</span>" },
{ id:"D3-067", domain:3, obj:"3.4", diff:"easy", q:"Which DNS record maps a hostname to an IPv4 address?", options:["AAAA","A","CNAME","PTR"], answer:1, explain:"<strong>A</strong> records map a hostname to a 32-bit IPv4 address.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>AAAA</b>: AAAA maps a hostname to a 128-bit IPv6 address, not IPv4.</span><span class='qd'><b>CNAME</b>: A CNAME aliases one hostname to another canonical name, not directly to an IP address.</span><span class='qd'><b>PTR</b>: A PTR maps an IP address back to a hostname for reverse lookups, the opposite direction.</span>" },
{ id:"D3-068", domain:3, obj:"3.4", diff:"easy", q:"Which DNS record maps a hostname to an IPv6 address?", options:["A","PTR","AAAA","SRV"], answer:2, explain:"<strong>AAAA</strong> (quad-A) records map a hostname to a 128-bit IPv6 address.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A</b>: An A record maps a hostname to a 32-bit IPv4 address, not IPv6.</span><span class='qd'><b>PTR</b>: A PTR maps an IP address to a hostname for reverse DNS, not a hostname to IPv6.</span><span class='qd'><b>SRV</b>: An SRV record specifies a service's host and port, not a hostname-to-IPv6 mapping.</span>" },
{ id:"D3-069", domain:3, obj:"3.4", diff:"medium", q:"Which DNS record creates an alias that points one name to another canonical name?", options:["NS","TXT","MX","CNAME"], answer:3, explain:"<strong>CNAME</strong> (Canonical Name) records create an alias so one hostname resolves to another hostname rather than directly to an IP.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>MX</b>: An MX record identifies mail servers for a domain, not a name alias.</span><span class='qd'><b>NS</b>: An NS record delegates a zone to authoritative name servers, not an alias to another name.</span><span class='qd'><b>TXT</b>: A TXT record holds arbitrary text such as SPF data, not a canonical name alias.</span>" },
{ id:"D3-070", domain:3, obj:"3.4", diff:"easy", q:"Which DNS record specifies the mail servers responsible for accepting email for a domain?", options:["MX","TXT","SRV","PTR"], answer:0, explain:"<strong>MX</strong> (Mail Exchanger) records identify the mail servers responsible for accepting email for a domain, with a priority value to select among them.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>TXT</b>: A TXT record carries arbitrary text like SPF or DKIM policy, not the mail server designation.</span><span class='qd'><b>SRV</b>: An SRV record locates generic services by host and port, not specifically the domain's mail exchangers.</span><span class='qd'><b>PTR</b>: A PTR record maps an IP to a hostname for reverse lookups, not mail server selection.</span>" },
{ id:"D3-071", domain:3, obj:"3.4", diff:"medium", q:"A reverse DNS lookup that resolves an IP address back to a hostname uses which record type?", options:["AAAA","PTR","CNAME","A"], answer:1, explain:"<strong>PTR</strong> (Pointer) records map an IP address back to a hostname and are the basis of reverse DNS lookups.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A</b>: An A record maps a hostname to an IPv4 address, the forward direction, not reverse.</span><span class='qd'><b>AAAA</b>: An AAAA record maps a hostname to an IPv6 address, again forward resolution.</span><span class='qd'><b>CNAME</b>: A CNAME aliases one hostname to another and does not resolve an IP back to a name.</span>" },
{ id:"D3-072", domain:3, obj:"3.4", diff:"medium", q:"SPF, DKIM, and DMARC email authentication policies are most commonly published using which DNS record type?", options:["NS","MX","TXT","SRV"], answer:2, explain:"<strong>TXT</strong> records hold arbitrary text and are used to publish SPF, DKIM, and DMARC policies that help validate email senders.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>MX</b>: An MX record designates mail servers, not the text-based authentication policies.</span><span class='qd'><b>SRV</b>: An SRV record locates services by host and port and does not carry SPF or DMARC strings.</span><span class='qd'><b>NS</b>: An NS record delegates authority for a zone, not email authentication policy.</span>" },
{ id:"D3-073", domain:3, obj:"3.4", diff:"medium", q:"Which DNS record identifies the hostname and port of a service such as SIP or LDAP?", options:["MX","NS","SOA","SRV"], answer:3, explain:"<strong>SRV</strong> (Service) records specify the host and port for specific services, letting clients locate services like SIP, LDAP, or Active Directory.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>MX</b>: An MX record locates only mail servers and does not include port information for arbitrary services.</span><span class='qd'><b>NS</b>: An NS record names the authoritative servers for a zone, not a service host and port.</span><span class='qd'><b>SOA</b>: An SOA record holds zone-wide parameters, not the location of a specific service.</span>" },
{ id:"D3-074", domain:3, obj:"3.4", diff:"medium", q:"Which DNS record delegates a zone to a set of authoritative name servers?", options:["NS","PTR","A","SOA"], answer:0, explain:"<strong>NS</strong> (Name Server) records list the authoritative name servers for a zone and are used to delegate it.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SOA</b>: An SOA record holds zone parameters like the primary server and serial number but does not list the full set of delegated name servers.</span><span class='qd'><b>PTR</b>: A PTR record maps an IP to a hostname for reverse DNS, not zone delegation.</span><span class='qd'><b>A</b>: An A record maps a hostname to an IPv4 address and does not delegate authority.</span>" },
{ id:"D3-075", domain:3, obj:"3.4", diff:"hard", q:"Which DNS record contains the zone's primary name server, the administrator contact, and the serial number used for zone transfers?", options:["NS","SOA","PTR","SRV"], answer:1, explain:"<strong>SOA</strong> (Start of Authority) records hold zone-wide parameters including the primary name server, administrator contact, serial number, and refresh and retry timers.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>NS</b>: An NS record lists authoritative name servers but does not contain the serial number or contact and timer fields.</span><span class='qd'><b>PTR</b>: A PTR record maps an IP to a hostname and carries no zone administration parameters.</span><span class='qd'><b>SRV</b>: An SRV record specifies a service host and port, not zone-wide authority information.</span>" },
{ id:"D3-076", domain:3, obj:"3.4", diff:"hard", q:"After updating a web server's IP, users still reach the old address for hours. Which DNS value MOST directly controls how long resolvers cache the old record?", options:["The zone refresh interval","The SOA serial number","The record's TTL","The MX priority"], answer:2, explain:"<strong>The record's TTL</strong> tells resolvers how long to cache the record, so a high TTL keeps the stale answer cached until it expires.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The SOA serial number</b>: The serial number signals secondaries to pull zone updates; it does not control how long resolvers cache an individual record.</span><span class='qd'><b>The MX priority</b>: MX priority selects among mail servers and has no effect on record caching.</span><span class='qd'><b>The zone refresh interval</b>: The refresh interval governs how often a secondary checks the primary, not how long external resolvers cache a record.</span>" },
{ id:"D3-077", domain:3, obj:"3.4", diff:"easy", q:"What is the well-known UDP port number for DNS queries?", options:["123","443","22","53"], answer:3, explain:"<strong>53</strong> is the well-known UDP port for DNS queries (TCP 53 is used for zone transfers and large responses).<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>22</b>: Port 22 is SSH, not DNS.</span><span class='qd'><b>123</b>: Port 123 is NTP for time synchronization, not name resolution.</span><span class='qd'><b>443</b>: Port 443 is HTTPS, not standard DNS queries.</span>" },
{ id:"D3-078", domain:3, obj:"3.4", diff:"easy", q:"Which protocol synchronizes the clocks of devices across a network?", options:["NTP","SMTP","LDAP","SNMP"], answer:0, explain:"<strong>NTP</strong> (Network Time Protocol) synchronizes device clocks, which is essential for logging, authentication, and certificate validation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SNMP</b>: SNMP monitors and manages devices but does not synchronize clocks.</span><span class='qd'><b>SMTP</b>: SMTP transports email and has no time-synchronization role.</span><span class='qd'><b>LDAP</b>: LDAP provides directory lookups for authentication and objects, not clock synchronization.</span>" },
{ id:"D3-079", domain:3, obj:"3.4", diff:"medium", q:"Which UDP port does NTP use?", options:["53","123","161","389"], answer:1, explain:"<strong>123</strong> is the UDP port NTP uses to exchange time synchronization messages.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>53</b>: UDP 53 is DNS, not NTP.</span><span class='qd'><b>161</b>: UDP 161 is SNMP agent polling, not time synchronization.</span><span class='qd'><b>389</b>: TCP/UDP 389 is LDAP directory access, not NTP.</span>" },
{ id:"D3-080", domain:3, obj:"3.4", diff:"hard", q:"Kerberos authentication is failing across a domain and certificates show as invalid. Time stamps on the servers differ by several minutes. What should be checked FIRST?", options:["VLAN tagging","DNS PTR records","NTP time synchronization","DHCP scope exhaustion"], answer:2, explain:"<strong>NTP time synchronization</strong> should be checked first, because Kerberos and certificate validation are time-sensitive and fail when clocks drift by minutes.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS PTR records</b>: PTR issues can affect reverse lookups but do not cause time-skew-driven Kerberos and certificate failures described here.</span><span class='qd'><b>DHCP scope exhaustion</b>: Scope exhaustion prevents address assignment but is unrelated to authentication failing on time drift.</span><span class='qd'><b>VLAN tagging</b>: VLAN tagging errors cause connectivity or segmentation problems, not clock-skew authentication failures.</span>" },
{ id:"D3-081", domain:3, obj:"3.4", diff:"medium", q:"In an NTP hierarchy, what does a lower stratum number indicate?", options:["A backup-only server","A higher network latency","Less accurate time source","Closer to the authoritative reference clock"], answer:3, explain:"<strong>Closer to the authoritative reference clock</strong> is what a lower stratum number indicates, with stratum 0 being the reference clock itself.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Less accurate time source</b>: Lower stratum is more, not less, accurate, being nearer the reference.</span><span class='qd'><b>A backup-only server</b>: Stratum reflects distance from the reference clock, not whether a server is primary or backup.</span><span class='qd'><b>A higher network latency</b>: Stratum measures hierarchy position relative to the reference clock, not network latency.</span>" },
{ id:"D3-082", domain:3, obj:"3.2", diff:"easy", q:"Which technology distributes incoming client requests across multiple backend servers to improve performance and availability?", options:["Load balancing","Port mirroring","Spanning tree","NIC teaming"], answer:0, explain:"<strong>Load balancing</strong> distributes incoming client requests across multiple backend servers to improve performance and provide redundancy.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>NIC teaming</b>: NIC teaming bonds adapters on a single host for redundancy and throughput, not distributing requests across multiple servers.</span><span class='qd'><b>Port mirroring</b>: Port mirroring copies traffic to a monitor port for analysis, not balancing client load.</span><span class='qd'><b>Spanning tree</b>: Spanning tree prevents Layer 2 loops, not distributes requests across servers.</span>" },
{ id:"D3-083", domain:3, obj:"3.2", diff:"medium", q:"Combining multiple physical network adapters on a server into one logical interface for redundancy and throughput is called what?", options:["Trunking","NIC teaming","Clustering","FHRP"], answer:1, explain:"<strong>NIC teaming</strong> bonds multiple physical adapters on a server into one logical interface for fault tolerance and increased bandwidth.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Clustering</b>: Clustering groups multiple servers to act as one service, not multiple adapters on one host.</span><span class='qd'><b>FHRP</b>: FHRP provides a redundant virtual gateway among routers, not adapter bonding on a server.</span><span class='qd'><b>Trunking</b>: Trunking carries multiple VLANs over a link via tagging, not combining a host's NICs into one logical interface.</span>" },
{ id:"D3-084", domain:3, obj:"3.2", diff:"medium", q:"Which category of protocol allows multiple routers to share a single virtual default-gateway IP for redundancy?", options:["Dynamic Routing Protocol","Link Aggregation Protocol","First Hop Redundancy Protocol","Spanning Tree Protocol"], answer:2, explain:"<strong>First Hop Redundancy Protocol</strong> lets multiple routers share a single virtual default-gateway IP so hosts keep connectivity if the active router fails.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Spanning Tree Protocol</b>: STP prevents Layer 2 loops; it does not provide a redundant virtual gateway.</span><span class='qd'><b>Dynamic Routing Protocol</b>: Dynamic routing protocols exchange routes between routers but do not present a shared virtual gateway IP to hosts.</span><span class='qd'><b>Link Aggregation Protocol</b>: Link aggregation bundles physical links for bandwidth, not redundant gateway addressing.</span>" },
{ id:"D3-085", domain:3, obj:"3.2", diff:"medium", q:"Which FHRP is an open IETF standard rather than a Cisco-proprietary protocol?", options:["EIGRP","HSRP","GLBP","VRRP"], answer:3, explain:"<strong>VRRP</strong> (Virtual Router Redundancy Protocol) is the open IETF-standard FHRP.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>HSRP</b>: HSRP is a Cisco-proprietary FHRP, not an open standard.</span><span class='qd'><b>GLBP</b>: GLBP is also Cisco proprietary and additionally load-balances across gateways.</span><span class='qd'><b>EIGRP</b>: EIGRP is a Cisco routing protocol, not an FHRP for gateway redundancy at all.</span>" },
{ id:"D3-086", domain:3, obj:"3.2", diff:"hard", q:"In an HSRP pair, the active router fails and the standby takes over without clients changing their gateway setting. What makes this possible?", options:["Both routers share a virtual IP and MAC address","The switch floods all gateway traffic","DHCP reassigns a new gateway instantly","Clients run a routing protocol"], answer:0, explain:"<strong>Both routers share a virtual IP and MAC address</strong>, so when the active fails the standby answers for that same virtual address and clients see no change.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Clients run a routing protocol</b>: HSRP keeps clients with a simple static default gateway; they do not run routing protocols.</span><span class='qd'><b>The switch floods all gateway traffic</b>: Flooding all gateway traffic is not how HSRP redundancy works and would be a broadcast problem.</span><span class='qd'><b>DHCP reassigns a new gateway instantly</b>: HSRP avoids changing client gateways at all; DHCP does not reassign gateways during failover.</span>" },
{ id:"D3-087", domain:3, obj:"3.2", diff:"hard", q:"A web service must survive the loss of any single server AND any single switch port on each server. Which combination BEST achieves this?", options:["NIC teaming only","Load balancing across servers plus NIC teaming on each server","A single larger server","Load balancing only"], answer:1, explain:"<strong>Load balancing across servers plus NIC teaming on each server</strong> covers both failure domains: load balancing survives losing a whole server while NIC teaming survives losing an adapter or switch port on each server.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Load balancing only</b>: Load balancing alone does not protect against a single adapter or switch port failure on a server.</span><span class='qd'><b>NIC teaming only</b>: NIC teaming alone protects a server's adapters but does not survive the loss of the entire server.</span><span class='qd'><b>A single larger server</b>: One server is a single point of failure and cannot survive losing that server.</span>" },
{ id:"D3-088", domain:3, obj:"3.5", diff:"easy", q:"Connecting to a switch's physical console port with a rollover cable is an example of which kind of management?", options:["Zero-touch provisioning","In-band management","Out-of-band management","Cloud management"], answer:2, explain:"<strong>Out-of-band management</strong> describes console-port access via a rollover cable, since it does not depend on the production network and works even when the network is down.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>In-band management</b>: In-band management rides the production data network, which a console connection deliberately bypasses.</span><span class='qd'><b>Cloud management</b>: Cloud management is administered over the internet through a hosted platform, not a local console cable.</span><span class='qd'><b>Zero-touch provisioning</b>: Zero-touch provisioning auto-configures a device over the network at boot, not local console access.</span>" },
{ id:"D3-089", domain:3, obj:"3.5", diff:"easy", q:"Managing a device by SSH over the same production network that carries user traffic is an example of what?", options:["Console management","Air-gapped management","Out-of-band management","In-band management"], answer:3, explain:"<strong>In-band management</strong> uses the production network path, so managing a device by SSH over that same network is in-band and is lost if the network fails.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Out-of-band management</b>: Out-of-band uses a separate path like a console or dedicated management network, not the production network.</span><span class='qd'><b>Console management</b>: Console management is a direct serial connection, which is a form of out-of-band, not SSH over production.</span><span class='qd'><b>Air-gapped management</b>: An air-gapped approach is physically isolated from production, the opposite of running over the production network.</span>" },
{ id:"D3-090", domain:3, obj:"3.5", diff:"medium", q:"Which protocol provides encrypted command-line remote management of network devices?", options:["SSH","HTTP","SNMPv1","Telnet"], answer:0, explain:"<strong>SSH</strong> encrypts the management session, protecting credentials and commands, unlike Telnet which sends data in clear text.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Telnet</b>: Telnet transmits all data including passwords in plaintext, providing no encryption.</span><span class='qd'><b>HTTP</b>: HTTP is unencrypted web traffic and is not an encrypted command-line management protocol.</span><span class='qd'><b>SNMPv1</b>: SNMPv1 is a monitoring protocol with plaintext community strings, not an encrypted CLI.</span>" },
{ id:"D3-091", domain:3, obj:"3.5", diff:"medium", q:"A hardened host that administrators must connect through before reaching sensitive internal systems is known as what?", options:["Captive portal","Jump box","Honeypot","Proxy ARP server"], answer:1, explain:"<strong>Jump box</strong> (jump host or bastion host) is a hardened, monitored system used as a controlled gateway to reach and manage sensitive internal devices.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Honeypot</b>: A honeypot is a decoy meant to attract and study attackers, not a gateway administrators connect through.</span><span class='qd'><b>Proxy ARP server</b>: Proxy ARP answers ARP for hosts on another segment; it is not an administrative access gateway.</span><span class='qd'><b>Captive portal</b>: A captive portal intercepts users for authentication or acceptance before network access, not a hardened admin pivot host.</span>" },
{ id:"D3-092", domain:3, obj:"3.5", diff:"hard", q:"During a network outage that brings down all switches, which access method is MOST likely to let an engineer reach a router to troubleshoot?", options:["SSH over the data network","HTTPS web GUI through the LAN","Out-of-band console or dedicated management port","RDP to a jump box on the same VLAN"], answer:2, explain:"<strong>Out-of-band console or dedicated management port</strong> does not rely on the failed production path, so it remains reachable during an outage that downs all switches.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SSH over the data network</b>: SSH over the data network is in-band and unreachable when the switches are down.</span><span class='qd'><b>HTTPS web GUI through the LAN</b>: A web GUI over the LAN depends on the failed production network and would also be unreachable.</span><span class='qd'><b>RDP to a jump box on the same VLAN</b>: RDP to a jump box still traverses the production VLAN, which is down during the outage.</span>" },
{ id:"D3-093", domain:3, obj:"3.5", diff:"medium", q:"Why is Telnet discouraged for device management in favor of SSH?", options:["Telnet cannot reach remote subnets","Telnet requires a console cable","Telnet is slower at large file transfers","Telnet transmits credentials in plaintext"], answer:3, explain:"<strong>Telnet transmits credentials in plaintext</strong>, allowing easy interception, which is why SSH and its encrypted session are preferred.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Telnet is slower at large file transfers</b>: Telnet is not a file-transfer protocol, and speed is not the security reason it is discouraged.</span><span class='qd'><b>Telnet cannot reach remote subnets</b>: Telnet can reach routed remote subnets just like SSH; reachability is not the issue.</span><span class='qd'><b>Telnet requires a console cable</b>: Telnet is a network protocol and does not require a console cable.</span>" },
{ id:"D3-094", domain:3, obj:"3.5", diff:"hard", q:"An organization wants administrators to authenticate once at a hardened gateway, with all management sessions logged and recorded. Which design BEST fits?", options:["A jump box that brokers and logs all administrative access","Shared local admin accounts on every switch","A captive portal on the management VLAN","Direct SSH from every admin laptop to each device"], answer:0, explain:"<strong>A jump box that brokers and logs all administrative access</strong> centralizes authentication at one hardened gateway and records all management sessions, matching the requirement.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Direct SSH from every admin laptop to each device</b>: Direct connections scatter access and provide no single audited, recorded entry point.</span><span class='qd'><b>Shared local admin accounts on every switch</b>: Shared local accounts destroy accountability and central logging rather than enforcing a single audited gateway.</span><span class='qd'><b>A captive portal on the management VLAN</b>: A captive portal handles user network onboarding, not brokering and recording administrative sessions.</span>" },
{ id:"D3-095", domain:3, obj:"3.5", diff:"medium", q:"Which approach BEST keeps device management traffic separate from user data traffic?", options:["Lower the routing protocol metric","Use a dedicated out-of-band management network","Increase the DHCP lease time","Enable jumbo frames on user VLANs"], answer:1, explain:"<strong>Use a dedicated out-of-band management network</strong> best keeps management traffic separate from user data, isolating it for security and availability.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Increase the DHCP lease time</b>: Lease time affects address retention and does nothing to separate management from user traffic.</span><span class='qd'><b>Enable jumbo frames on user VLANs</b>: Jumbo frames raise MTU for throughput and do not isolate management traffic.</span><span class='qd'><b>Lower the routing protocol metric</b>: Adjusting a metric changes path preference, not the separation of management and data traffic.</span>" }
);
NETPLUS.questions.push(
{ id:"D4-001", domain:4, obj:"4.1", diff:"easy", q:"Which element of the CIA triad ensures that data has not been altered or tampered with in transit or storage?", options:["Availability","Accountability","Integrity","Confidentiality"], answer:2, explain:"<strong>Integrity</strong> ensures data remains accurate and unaltered, typically verified with hashing so any tampering in transit or storage is detected.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Confidentiality</b>: Confidentiality keeps data secret from unauthorized parties through encryption, but it does not detect whether data was changed.</span><span class='qd'><b>Availability</b>: Availability ensures systems and data are reachable when needed, not that the data is unmodified.</span><span class='qd'><b>Accountability</b>: Accountability ties actions to identities through logging, and it is not one of the three core CIA triad elements measuring data alteration.</span>" },
{ id:"D4-002", domain:4, obj:"4.1", diff:"easy", q:"Which element of the CIA triad is most directly threatened by a Distributed Denial of Service (DDoS) attack?", options:["Authentication","Confidentiality","Integrity","Availability"], answer:3, explain:"<strong>Availability</strong> is most directly attacked by a DDoS, which overwhelms a resource so legitimate users cannot reach it.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Confidentiality</b>: Confidentiality concerns unauthorized disclosure of data, which a flooding attack does not target.</span><span class='qd'><b>Integrity</b>: Integrity concerns unauthorized alteration of data, but a DDoS denies access rather than modifying content.</span><span class='qd'><b>Authentication</b>: Authentication verifies identity and is not part of the CIA triad nor the asset a flooding attack consumes.</span>" },
{ id:"D4-003", domain:4, obj:"4.1", diff:"easy", q:"In the AAA framework, what does the first 'A' (Authentication) verify?", options:["The identity of the user","What resources a user may access","A log of user actions","The bandwidth allotted to a user"], answer:0, explain:"<strong>The identity of the user</strong> is exactly what authentication verifies, usually by validating credentials before access is granted.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>What resources a user may access</b>: That describes authorization, the second A, which happens only after identity is confirmed.</span><span class='qd'><b>A log of user actions</b>: That describes accounting, the third A, which records activity rather than proving identity.</span><span class='qd'><b>The bandwidth allotted to a user</b>: Bandwidth allocation is a quality-of-service or accounting concern, not an authentication function.</span>" },
{ id:"D4-004", domain:4, obj:"4.1", diff:"medium", q:"Which AAA component is responsible for recording what a user did during a session, including login times and commands issued?", options:["Authorization","Accounting","Association","Authentication"], answer:1, explain:"<strong>Accounting</strong> tracks and logs user activity such as login times and commands issued for auditing, billing, and security review.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Authentication</b>: Authentication only verifies who the user is at login and does not record what they do afterward.</span><span class='qd'><b>Authorization</b>: Authorization decides what an authenticated user is permitted to do, not what they actually did.</span><span class='qd'><b>Association</b>: Association is the 802.11 process of a wireless client joining an access point, unrelated to AAA logging.</span>" },
{ id:"D4-005", domain:4, obj:"4.1", diff:"medium", q:"Which port and transport protocol does RADIUS use for authentication messages?", options:["TCP port 1812","UDP port 49","UDP port 1812","TCP port 49"], answer:2, explain:"<strong>UDP port 1812</strong> is the standard RADIUS authentication port, with UDP 1813 used for accounting.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>TCP port 49</b>: TCP 49 is TACACS+, not RADIUS, and RADIUS does not use TCP for these messages.</span><span class='qd'><b>TCP port 1812</b>: The port number is correct but RADIUS uses UDP, not TCP, as its transport.</span><span class='qd'><b>UDP port 49</b>: Port 49 belongs to TACACS+ over TCP, so neither the port nor pairing fits RADIUS.</span>" },
{ id:"D4-006", domain:4, obj:"4.1", diff:"medium", q:"Which port and transport protocol does TACACS+ use?", options:["UDP port 1812","UDP port 49","TCP port 1813","TCP port 49"], answer:3, explain:"<strong>TCP port 49</strong> is used by TACACS+, which encrypts the entire packet payload unlike RADIUS.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>UDP port 1812</b>: That is RADIUS authentication, which uses UDP rather than the TCP transport TACACS+ requires.</span><span class='qd'><b>UDP port 49</b>: The port number is correct but TACACS+ runs over TCP, not UDP.</span><span class='qd'><b>TCP port 1813</b>: Port 1813 is RADIUS accounting over UDP, not a TACACS+ port.</span>" },
{ id:"D4-007", domain:4, obj:"4.1", diff:"hard", q:"A network engineer must choose an AAA protocol that encrypts the entire packet body and separates authentication, authorization, and accounting functions. Which is the BEST choice?", options:["TACACS+","Kerberos","RADIUS","LDAP"], answer:0, explain:"<strong>TACACS+</strong> encrypts the whole packet body and decouples authentication, authorization, and accounting, making it ideal for granular device administration.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Kerberos</b>: Kerberos is a ticket-based authentication protocol for SSO, not an AAA protocol that separates authorization and accounting per command.</span><span class='qd'><b>RADIUS</b>: RADIUS only encrypts the password field and combines authentication with authorization, so it cannot separate the functions as required.</span><span class='qd'><b>LDAP</b>: LDAP is a directory access protocol for querying user objects, not an AAA protocol that encrypts and decouples the three functions.</span>" },
{ id:"D4-008", domain:4, obj:"4.1", diff:"medium", q:"Which standard provides port-based network access control, often requiring authentication before a switch port forwards general traffic?", options:["802.1Q","802.1X","802.3af","802.11ac"], answer:1, explain:"<strong>802.1X</strong> is the IEEE port-based network access control standard that authenticates devices before a port forwards general traffic.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>802.11ac</b>: 802.11ac is a Wi-Fi physical layer standard for wireless throughput, not an access control framework.</span><span class='qd'><b>802.1Q</b>: 802.1Q defines VLAN tagging on trunk links, not authentication of devices on a port.</span><span class='qd'><b>802.3af</b>: 802.3af is the Power over Ethernet standard delivering power over copper, unrelated to access control.</span>" },
{ id:"D4-009", domain:4, obj:"4.1", diff:"medium", q:"In an 802.1X deployment, which role does the end-user device run that requests access to the network?", options:["Authentication server","RADIUS proxy","Supplicant","Authenticator"], answer:2, explain:"<strong>Supplicant</strong> is the client-side software that submits credentials to the authenticator requesting network access.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Authenticator</b>: The authenticator is the switch or AP that relays credentials, not the end-user device requesting access.</span><span class='qd'><b>Authentication server</b>: The authentication server (usually RADIUS) validates credentials and is not the requesting client.</span><span class='qd'><b>RADIUS proxy</b>: A RADIUS proxy forwards authentication requests between servers and is not the end device seeking access.</span>" },
{ id:"D4-010", domain:4, obj:"4.1", diff:"hard", q:"In 802.1X terminology, which component typically acts as the authenticator?", options:["The certificate authority","The RADIUS server","The end-user laptop","The switch or wireless access point"], answer:3, explain:"<strong>The switch or wireless access point</strong> acts as the authenticator, relaying credentials between the supplicant and the authentication server.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The RADIUS server</b>: The RADIUS server is the authentication server that makes the access decision, not the authenticator that brokers it.</span><span class='qd'><b>The end-user laptop</b>: The end-user laptop runs the supplicant requesting access, not the authenticator.</span><span class='qd'><b>The certificate authority</b>: A CA issues and signs certificates used in EAP-TLS but does not gate the port as the authenticator.</span>" },
{ id:"D4-011", domain:4, obj:"4.1", diff:"medium", q:"Which security model operates on the principle of 'never trust, always verify' and assumes no implicit trust based on network location?", options:["Zero trust","Defense in depth","Least privilege","Perimeter security"], answer:0, explain:"<strong>Zero trust</strong> follows never trust, always verify, requiring continuous verification of every user and device regardless of network location.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Defense in depth</b>: Defense in depth layers multiple controls but does not inherently remove implicit trust based on location.</span><span class='qd'><b>Least privilege</b>: Least privilege limits access rights but is a single principle, not the broad model assuming no implicit trust.</span><span class='qd'><b>Perimeter security</b>: Perimeter security trusts internal traffic once inside the boundary, the opposite of the zero trust premise.</span>" },
{ id:"D4-012", domain:4, obj:"4.1", diff:"hard", q:"In a zero trust architecture, the policy enforcement point (PEP) and policy decision point (PDP) together form which conceptual plane?", options:["The forwarding plane","The control plane","The data plane","The management plane"], answer:1, explain:"<strong>The control plane</strong> is formed by the policy decision point and policy enforcement point, which together decide and enforce access to data plane resources.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The data plane</b>: The data plane carries the actual user traffic to resources after the control plane authorizes it, not the decision-making layer.</span><span class='qd'><b>The management plane</b>: The management plane handles device administration and configuration, not zero trust access decisions.</span><span class='qd'><b>The forwarding plane</b>: The forwarding plane is another name for the data plane that moves packets, not where PDP and PEP reside.</span>" },
{ id:"D4-013", domain:4, obj:"4.1", diff:"easy", q:"Which network design concept places public-facing servers in a separate buffer zone between the internet and the internal LAN?", options:["Loopback","Broadcast domain","DMZ (screened subnet)","VLAN trunk"], answer:2, explain:"<strong>DMZ (screened subnet)</strong> places public-facing servers in a buffer zone so a compromise does not directly expose the internal LAN.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>VLAN trunk</b>: A VLAN trunk carries multiple VLANs over one link, not a security buffer zone for public servers.</span><span class='qd'><b>Loopback</b>: A loopback is a virtual interface on a device used for testing or stable addressing, not a network design zone.</span><span class='qd'><b>Broadcast domain</b>: A broadcast domain is the scope reached by broadcast frames, not an isolated zone for internet-facing services.</span>" },
{ id:"D4-014", domain:4, obj:"4.1", diff:"medium", q:"What is the primary security benefit of network segmentation?", options:["It increases overall bandwidth","It eliminates the need for firewalls","It speeds up DNS resolution","It limits the lateral movement of an attacker"], answer:3, explain:"<strong>It limits the lateral movement of an attacker</strong> because segmentation divides the network so a breach in one segment cannot easily spread to others.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It increases overall bandwidth</b>: Segmentation can reduce broadcast traffic but its primary purpose is security containment, not raw bandwidth gains.</span><span class='qd'><b>It eliminates the need for firewalls</b>: Segmentation often relies on firewalls or ACLs to filter inter-segment traffic, so it does not remove that need.</span><span class='qd'><b>It speeds up DNS resolution</b>: DNS resolution speed depends on resolvers and caching, which segmentation does not affect.</span>" },
{ id:"D4-015", domain:4, obj:"4.1", diff:"medium", q:"Which principle dictates that users should be granted only the minimum access rights required to perform their job?", options:["Least privilege","Separation of duties","Implicit deny","Defense in depth"], answer:0, explain:"<strong>Least privilege</strong> grants users only the minimum access rights required to perform their job, minimizing risk.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Separation of duties</b>: Separation of duties splits critical tasks among multiple people to prevent fraud, not minimizing one user's access.</span><span class='qd'><b>Implicit deny</b>: Implicit deny blocks anything not explicitly permitted in a rule set, a filtering default rather than a job-rights principle.</span><span class='qd'><b>Defense in depth</b>: Defense in depth layers multiple controls and does not specifically govern how much access an individual user receives.</span>" },
{ id:"D4-016", domain:4, obj:"4.1", diff:"easy", q:"Which factor type is represented by a fingerprint scan in multifactor authentication?", options:["Something you have","Something you are","Somewhere you are","Something you know"], answer:1, explain:"<strong>Something you are</strong> covers inherence factors like biometrics, including a fingerprint scan.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Something you know</b>: Knowledge factors are passwords or PINs, not physical biometric traits.</span><span class='qd'><b>Something you have</b>: Possession factors are tokens, smart cards, or phones, not an inherent body characteristic.</span><span class='qd'><b>Somewhere you are</b>: Location factors use GPS or network position, not a fingerprint.</span>" },
{ id:"D4-017", domain:4, obj:"4.1", diff:"easy", q:"A hardware token that generates a rotating one-time code represents which authentication factor?", options:["Something you are","Something you do","Something you have","Something you know"], answer:2, explain:"<strong>Something you have</strong> is the possession factor represented by a hardware token that generates a rotating one-time code.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Something you know</b>: Knowledge factors are memorized secrets like passwords, not a physical token device.</span><span class='qd'><b>Something you are</b>: Inherence factors are biometrics such as fingerprints, not a possessed object.</span><span class='qd'><b>Something you do</b>: Behavioral factors capture patterns like gait or signature dynamics, not holding a token.</span>" },
{ id:"D4-018", domain:4, obj:"4.1", diff:"hard", q:"An organization wants strong authentication that resists phishing of one-time codes. Which factor combination provides the MOST phishing-resistant MFA?", options:["Two different passwords","Password plus SMS code","Password plus email code","Password plus FIDO2 security key"], answer:3, explain:"<strong>Password plus FIDO2 security key</strong> uses origin-bound public-key cryptography, resisting phishing far better than codes that can be relayed.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Password plus SMS code</b>: SMS codes can be phished, SIM-swapped, or intercepted, making them weakly phishing-resistant.</span><span class='qd'><b>Password plus email code</b>: Email codes can be captured if the inbox is compromised or relayed through a fake site, so they are phishable.</span><span class='qd'><b>Two different passwords</b>: Two passwords are both knowledge factors, so they are not true MFA and remain fully phishable.</span>" },
{ id:"D4-019", domain:4, obj:"4.1", diff:"medium", q:"What does a Network Access Control (NAC) solution evaluate before allowing a device onto the network?", options:["The device's posture, such as patch level and antivirus status","The device's MAC vendor only","The user's typing speed","The switch firmware version"], answer:0, explain:"<strong>The device's posture, such as patch level and antivirus status</strong> is what NAC evaluates during posture assessment before granting access.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The device's MAC vendor only</b>: NAC checks far more than the MAC OUI vendor, and MAC addresses can be spoofed, so vendor alone is insufficient.</span><span class='qd'><b>The user's typing speed</b>: Typing speed is a behavioral biometric, not a compliance posture metric NAC assesses for admission.</span><span class='qd'><b>The switch firmware version</b>: NAC evaluates the connecting endpoint's health, not the infrastructure switch's firmware.</span>" },
{ id:"D4-020", domain:4, obj:"4.1", diff:"medium", q:"Which term describes a security approach that layers multiple independent controls so no single failure compromises the system?", options:["Federation","Defense in depth","Single sign-on","Zero trust"], answer:1, explain:"<strong>Defense in depth</strong> layers multiple independent controls so that if one fails, others still protect the asset.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Single sign-on</b>: SSO lets users authenticate once for many systems for convenience, not a layered control strategy.</span><span class='qd'><b>Zero trust</b>: Zero trust removes implicit trust and verifies continuously, but it is not defined by overlapping redundant layers.</span><span class='qd'><b>Federation</b>: Federation links identity across organizations or domains, not stacking multiple protective controls.</span>" },
{ id:"D4-021", domain:4, obj:"4.1", diff:"hard", q:"A company implements role-based access control (RBAC). What is the MOST accurate description of how permissions are assigned?", options:["Directly to each individual user","Based on the time of day","To roles, which are then assigned to users","Based on the device IP address"], answer:2, explain:"<strong>To roles, which are then assigned to users</strong> describes RBAC, where permissions attach to roles and users inherit them through role membership.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Directly to each individual user</b>: Assigning permissions per user is discretionary or ad hoc access control, not the role abstraction RBAC uses.</span><span class='qd'><b>Based on the time of day</b>: Time-based restrictions are an attribute-based or conditional control, not how RBAC structures permissions.</span><span class='qd'><b>Based on the device IP address</b>: IP-based access is attribute or network-based control, not RBAC role assignment.</span>" },
{ id:"D4-022", domain:4, obj:"4.1", diff:"easy", q:"Which type of attack is best categorized as a 'social engineering' technique rather than a technical exploit?", options:["SQL injection","Buffer overflow","ARP spoofing","Phishing"], answer:3, explain:"<strong>Phishing</strong> manipulates people into revealing information or taking actions, making it a social engineering attack.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SQL injection</b>: SQL injection is a technical exploit that inserts malicious queries into an application's database layer.</span><span class='qd'><b>Buffer overflow</b>: A buffer overflow is a technical memory corruption exploit, not manipulation of a person.</span><span class='qd'><b>ARP spoofing</b>: ARP spoofing is a technical Layer 2 attack forging ARP replies, not a human-targeted technique.</span>" },
{ id:"D4-023", domain:4, obj:"4.1", diff:"medium", q:"Which document defines the rules and expected behavior for users accessing organizational systems?", options:["Acceptable Use Policy (AUP)","SLA","MOU","NDA"], answer:0, explain:"<strong>Acceptable Use Policy (AUP)</strong> defines the rules and expected behavior for users accessing organizational systems and resources.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>NDA</b>: A non-disclosure agreement obligates parties to keep information confidential, not to define acceptable system use.</span><span class='qd'><b>SLA</b>: A service level agreement specifies performance and uptime commitments between provider and customer, not user conduct rules.</span><span class='qd'><b>MOU</b>: A memorandum of understanding records a general agreement between parties, not the specific usage rules for end users.</span>" },
{ id:"D4-024", domain:4, obj:"4.1", diff:"medium", q:"Which honeypot characteristic makes it valuable for security teams?", options:["It load-balances web servers","It is a decoy system designed to attract and study attackers","It blocks all inbound traffic","It encrypts all network traffic"], answer:1, explain:"<strong>It is a decoy system designed to attract and study attackers</strong>, letting defenders observe techniques without risking production systems.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It blocks all inbound traffic</b>: A honeypot deliberately invites traffic to study attackers, the opposite of blocking it like a firewall would.</span><span class='qd'><b>It encrypts all network traffic</b>: Traffic encryption is a function of VPNs or TLS, not the purpose of a decoy honeypot.</span><span class='qd'><b>It load-balances web servers</b>: Load balancing distributes client requests across servers, unrelated to luring attackers.</span>" },
{ id:"D4-025", domain:4, obj:"4.2", diff:"easy", q:"An attacker floods a server with traffic from a single source to make it unavailable. Which attack is this?", options:["Phishing","DDoS","DoS","On-path"], answer:2, explain:"<strong>DoS</strong> describes a Denial of Service attack that originates from a single source to make a target unavailable.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DDoS</b>: A DDoS uses many distributed sources rather than the single source described in the scenario.</span><span class='qd'><b>On-path</b>: An on-path attack intercepts or alters traffic between parties, not flooding a server to deny service.</span><span class='qd'><b>Phishing</b>: Phishing is social engineering to steal information, not a traffic flood that exhausts a server.</span>" },
{ id:"D4-026", domain:4, obj:"4.2", diff:"easy", q:"Which attack uses many compromised hosts, often a botnet, to overwhelm a target simultaneously?", options:["ARP spoofing","Smurf reflection only","DoS","DDoS"], answer:3, explain:"<strong>DDoS</strong> leverages many distributed, often botnet-controlled, hosts to overwhelm one target simultaneously.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DoS</b>: A plain DoS comes from a single source, not the many compromised hosts described.</span><span class='qd'><b>ARP spoofing</b>: ARP spoofing forges Layer 2 mappings to intercept traffic, not flood a target with a botnet.</span><span class='qd'><b>Smurf reflection only</b>: A Smurf attack is one specific ICMP amplification technique, too narrow to define the general botnet-based DDoS.</span>" },
{ id:"D4-027", domain:4, obj:"4.2", diff:"medium", q:"In an on-path (man-in-the-middle) attack, what is the attacker primarily able to do?", options:["Intercept and potentially alter traffic between two parties","Encrypt the victim's files for ransom","Physically destroy cabling","Only crash the target"], answer:0, explain:"<strong>Intercept and potentially alter traffic between two parties</strong> is what an on-path attacker does by positioning between the communicators.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Only crash the target</b>: Crashing a target is a denial of service goal, whereas an on-path attack focuses on eavesdropping or modifying traffic.</span><span class='qd'><b>Encrypt the victim's files for ransom</b>: Encrypting files for ransom is ransomware behavior, not interception of a conversation.</span><span class='qd'><b>Physically destroy cabling</b>: Cutting cabling is a physical attack, not the logical interception an on-path attacker performs.</span>" },
{ id:"D4-028", domain:4, obj:"4.2", diff:"medium", q:"An attacker sends gratuitous ARP replies to associate their MAC address with the default gateway's IP. What attack is this?", options:["DNS poisoning","ARP spoofing","MAC flooding","VLAN hopping"], answer:1, explain:"<strong>ARP spoofing</strong> forges gratuitous ARP replies so traffic destined for the gateway is sent to the attacker instead.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS poisoning</b>: DNS poisoning corrupts name-to-IP resolution in a resolver cache, not the IP-to-MAC binding ARP handles.</span><span class='qd'><b>MAC flooding</b>: MAC flooding overflows the switch CAM table with bogus addresses, not forging ARP replies for the gateway.</span><span class='qd'><b>VLAN hopping</b>: VLAN hopping reaches a VLAN the attacker is not assigned to, not redirecting gateway traffic via ARP.</span>" },
{ id:"D4-029", domain:4, obj:"4.2", diff:"medium", q:"An attacker rapidly sends frames with thousands of bogus source MAC addresses to a switch. What is the goal of this MAC flooding attack?", options:["To exhaust the DHCP scope","To poison the DNS cache","To overflow the CAM table and force the switch to behave like a hub","To change the gateway IP"], answer:2, explain:"<strong>To overflow the CAM table and force the switch to behave like a hub</strong> so the attacker can sniff frames flooded out all ports.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To change the gateway IP</b>: Changing the gateway is achieved by rogue DHCP or ARP spoofing, not by flooding bogus MAC addresses.</span><span class='qd'><b>To exhaust the DHCP scope</b>: Depleting the DHCP pool is DHCP starvation using spoofed leases, not filling the CAM table.</span><span class='qd'><b>To poison the DNS cache</b>: DNS poisoning targets the resolver cache, not the switch's MAC address table.</span>" },
{ id:"D4-030", domain:4, obj:"4.2", diff:"hard", q:"An attacker on an access port crafts a frame with two 802.1Q tags to reach a VLAN they are not assigned to. Which attack is this?", options:["Switch spoofing VLAN hopping","ARP poisoning","STP manipulation","Double-tagging VLAN hopping"], answer:3, explain:"<strong>Double-tagging VLAN hopping</strong> embeds two 802.1Q tags so the first switch strips the outer tag and forwards the frame to the target VLAN.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>ARP poisoning</b>: ARP poisoning forges IP-to-MAC mappings, not stacking VLAN tags to cross VLANs.</span><span class='qd'><b>STP manipulation</b>: STP manipulation injects BPDUs to alter the spanning tree topology, not nested VLAN tags.</span><span class='qd'><b>Switch spoofing VLAN hopping</b>: Switch spoofing negotiates a trunk by impersonating a switch, whereas the scenario crafts a double-tagged frame on an access port.</span>" },
{ id:"D4-031", domain:4, obj:"4.2", diff:"hard", q:"In a switch-spoofing VLAN hopping attack, what does the attacker's device pretend to be?", options:["A trunking switch negotiating a trunk link","A DNS resolver","A RADIUS server","A DHCP server"], answer:0, explain:"<strong>A trunking switch negotiating a trunk link</strong> is what the attacker pretends to be, often via DTP, to gain access to all VLANs.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A DHCP server</b>: Impersonating a DHCP server is a rogue DHCP attack handing out leases, not negotiating a trunk.</span><span class='qd'><b>A DNS resolver</b>: Posing as a DNS resolver redirects name resolution, unrelated to forming a trunk link.</span><span class='qd'><b>A RADIUS server</b>: Impersonating a RADIUS server targets authentication, not VLAN trunk negotiation.</span>" },
{ id:"D4-032", domain:4, obj:"4.2", diff:"medium", q:"An unauthorized DHCP server on the LAN hands out incorrect default gateway addresses to clients. What is this called?", options:["DNS hijacking","Rogue DHCP server","DHCP snooping","ARP cache poisoning"], answer:1, explain:"<strong>Rogue DHCP server</strong> describes an unauthorized DHCP server issuing incorrect leases that can redirect clients to an attacker-controlled gateway.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DHCP snooping</b>: DHCP snooping is the defensive switch feature that blocks rogue DHCP servers, not the attack itself.</span><span class='qd'><b>ARP cache poisoning</b>: ARP poisoning forges IP-to-MAC mappings, not handing out bad gateway addresses via DHCP.</span><span class='qd'><b>DNS hijacking</b>: DNS hijacking redirects name resolution, not the DHCP lease assignment described.</span>" },
{ id:"D4-033", domain:4, obj:"4.2", diff:"easy", q:"An attacker sets up a wireless access point with the same SSID as a legitimate corporate network to trick users into connecting. What is this attack called?", options:["Deauth flood","War driving","Evil twin","Bluesnarfing"], answer:2, explain:"<strong>Evil twin</strong> mimics a legitimate SSID to lure victims into connecting to the attacker's access point.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Deauth flood</b>: A deauthentication flood forces clients offline, but it does not itself impersonate an SSID to capture connections.</span><span class='qd'><b>War driving</b>: War driving is scanning an area to discover wireless networks, not setting up a spoofed AP.</span><span class='qd'><b>Bluesnarfing</b>: Bluesnarfing steals data from a device over Bluetooth, unrelated to a fake Wi-Fi SSID.</span>" },
{ id:"D4-034", domain:4, obj:"4.2", diff:"medium", q:"What distinguishes a rogue access point from an evil twin?", options:["They are identical in every way","A rogue AP only affects wired networks","An evil twin is always authorized","A rogue AP is any unauthorized AP on the network; an evil twin specifically impersonates a legitimate SSID"], answer:3, explain:"<strong>A rogue AP is any unauthorized AP on the network; an evil twin specifically impersonates a legitimate SSID</strong>, so an evil twin is a deceptive subset of rogue APs.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>They are identical in every way</b>: They differ because an evil twin specifically spoofs a trusted SSID, while a rogue AP need not impersonate anything.</span><span class='qd'><b>A rogue AP only affects wired networks</b>: A rogue AP is a wireless access point by definition, so it affects the wireless environment.</span><span class='qd'><b>An evil twin is always authorized</b>: An evil twin is attacker-controlled and unauthorized, the opposite of authorized.</span>" },
{ id:"D4-035", domain:4, obj:"4.2", diff:"medium", q:"An attacker sends 802.11 deauthentication frames to force clients off a wireless network. What is the typical goal?", options:["To disconnect clients, often to capture handshakes or push them to an evil twin","To assign new IP addresses","To upgrade firmware","To increase signal strength"], answer:0, explain:"<strong>To disconnect clients, often to capture handshakes or push them to an evil twin</strong> is the typical goal of sending 802.11 deauthentication frames.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To increase signal strength</b>: Deauth frames forcibly disconnect clients and have nothing to do with boosting RF signal.</span><span class='qd'><b>To assign new IP addresses</b>: IP assignment is a DHCP function, not a result of deauthentication management frames.</span><span class='qd'><b>To upgrade firmware</b>: Firmware updates are an administrative maintenance task, unrelated to deauth attacks.</span>" },
{ id:"D4-036", domain:4, obj:"4.2", diff:"medium", q:"An attacker corrupts a DNS resolver's cache so that a legitimate domain resolves to a malicious IP. What is this attack?", options:["MAC flooding","DNS poisoning (cache poisoning)","SYN flood","ARP spoofing"], answer:1, explain:"<strong>DNS poisoning (cache poisoning)</strong> inserts forged records into a resolver so a legitimate domain resolves to a malicious IP.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>ARP spoofing</b>: ARP spoofing corrupts IP-to-MAC mappings at Layer 2, not the resolver's name-to-IP records.</span><span class='qd'><b>MAC flooding</b>: MAC flooding overflows a switch CAM table, not a DNS cache.</span><span class='qd'><b>SYN flood</b>: A SYN flood exhausts a server's half-open connection table, not poisons DNS resolution.</span>" },
{ id:"D4-037", domain:4, obj:"4.2", diff:"easy", q:"Which social engineering attack specifically targets high-profile individuals such as executives?", options:["Smishing","Tailgating","Whaling","Vishing"], answer:2, explain:"<strong>Whaling</strong> is a phishing attack aimed specifically at senior executives or other high-value targets.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Vishing</b>: Vishing uses voice calls and is defined by the channel, not by targeting executives.</span><span class='qd'><b>Smishing</b>: Smishing uses SMS text messages and is defined by the medium, not the seniority of the target.</span><span class='qd'><b>Tailgating</b>: Tailgating is a physical attack of following someone through a secured door, not phishing executives.</span>" },
{ id:"D4-038", domain:4, obj:"4.2", diff:"easy", q:"Which social engineering technique uses voice calls to manipulate victims into revealing information?", options:["Pharming","Smishing","Phishing","Vishing"], answer:3, explain:"<strong>Vishing</strong> (voice phishing) uses telephone calls to deceive victims into disclosing sensitive information.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Smishing</b>: Smishing uses SMS text messages, not voice calls.</span><span class='qd'><b>Phishing</b>: Phishing is the broad category typically delivered by email, while vishing is the specific voice-call variant.</span><span class='qd'><b>Pharming</b>: Pharming redirects users to fraudulent sites via DNS or hosts manipulation, not a phone-based technique.</span>" },
{ id:"D4-039", domain:4, obj:"4.2", diff:"easy", q:"Which social engineering attack relies on text messages (SMS) to lure victims?", options:["Smishing","Whaling","Spear phishing","Vishing"], answer:0, explain:"<strong>Smishing</strong> is phishing carried out over SMS text messages to lure victims.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Vishing</b>: Vishing uses voice phone calls, not SMS messages.</span><span class='qd'><b>Whaling</b>: Whaling targets high-profile executives and is defined by the victim, not the SMS channel.</span><span class='qd'><b>Spear phishing</b>: Spear phishing is a targeted attack usually delivered by email to specific individuals, not SMS-based by definition.</span>" },
{ id:"D4-040", domain:4, obj:"4.2", diff:"medium", q:"An attacker follows an authorized employee through a secured door without using their own credentials. What physical attack is this?", options:["Pretexting","Tailgating","Shoulder surfing","Dumpster diving"], answer:1, explain:"<strong>Tailgating</strong> (piggybacking) is when an unauthorized person follows an authorized one through a controlled entry without using credentials.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Shoulder surfing</b>: Shoulder surfing is covertly viewing someone's screen or keypad to steal information, not following them through a door.</span><span class='qd'><b>Dumpster diving</b>: Dumpster diving searches discarded trash for sensitive data, not physical entry behind a person.</span><span class='qd'><b>Pretexting</b>: Pretexting invents a false scenario to manipulate a victim verbally, not physically trailing them through a secure door.</span>" },
{ id:"D4-041", domain:4, obj:"4.2", diff:"hard", q:"An attacker sends a flood of TCP packets with the SYN flag set but never completes the handshake. Which resource is exhausted?", options:["The DHCP scope","The DNS cache","The server's connection (half-open) table","The switch CAM table"], answer:2, explain:"<strong>The server's connection (half-open) table</strong> is exhausted by a SYN flood, which leaves many half-open connections so legitimate sessions are refused.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The DNS cache</b>: The DNS cache holds resolved records and is targeted by cache poisoning, not by half-open TCP connections.</span><span class='qd'><b>The switch CAM table</b>: The CAM table stores MAC-to-port mappings and is exhausted by MAC flooding, not SYN packets.</span><span class='qd'><b>The DHCP scope</b>: The DHCP scope is the address pool drained by DHCP starvation, not by incomplete TCP handshakes.</span>" },
{ id:"D4-042", domain:4, obj:"4.2", diff:"hard", q:"In a reflection/amplification DDoS attack, why does the attacker spoof the victim's source IP in requests sent to open servers?", options:["To bypass DNS resolution","To poison the ARP cache","To complete the TCP handshake faster","So the larger responses are directed back to the victim"], answer:3, explain:"<strong>So the larger responses are directed back to the victim</strong>, because spoofing the victim's IP makes amplified replies from open servers flood the victim instead of the attacker.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>To bypass DNS resolution</b>: Spoofing the source IP redirects responses, but it does not skip DNS resolution.</span><span class='qd'><b>To poison the ARP cache</b>: ARP cache poisoning is a separate Layer 2 attack and is not the purpose of source-IP spoofing in amplification.</span><span class='qd'><b>To complete the TCP handshake faster</b>: Reflection attacks typically use connectionless UDP services and do not aim to speed a TCP handshake.</span>" },
{ id:"D4-043", domain:4, obj:"4.2", diff:"easy", q:"An attacker tries every possible password combination until one works. What is this called?", options:["Brute-force attack","Phishing","On-path attack","DNS poisoning"], answer:0, explain:"<strong>Brute-force attack</strong> systematically attempts every possible credential combination until access is gained.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Phishing</b>: Phishing tricks a user into revealing credentials rather than computationally trying every combination.</span><span class='qd'><b>On-path attack</b>: An on-path attack intercepts traffic between parties, not guessing passwords exhaustively.</span><span class='qd'><b>DNS poisoning</b>: DNS poisoning forges resolver records, unrelated to cracking a password by enumeration.</span>" },
{ id:"D4-044", domain:4, obj:"4.2", diff:"medium", q:"Which attack uses a precomputed list of likely passwords or leaked credentials rather than every possible combination?", options:["SYN flood","Dictionary attack","VLAN hopping","Smurf attack"], answer:1, explain:"<strong>Dictionary attack</strong> tries words from a curated list of likely passwords or leaked credentials, which is faster than pure brute force.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>SYN flood</b>: A SYN flood is a denial of service against a connection table, not a password-guessing technique.</span><span class='qd'><b>VLAN hopping</b>: VLAN hopping reaches an unauthorized VLAN, unrelated to guessing passwords from a word list.</span><span class='qd'><b>Smurf attack</b>: A Smurf attack is an ICMP amplification flood, not a credential attack.</span>" },
{ id:"D4-045", domain:4, obj:"4.2", diff:"hard", q:"An attacker manipulates Spanning Tree Protocol by injecting superior BPDUs to become the root bridge and intercept traffic. What is the BEST term for this threat?", options:["ARP spoofing","DHCP starvation","STP/BPDU manipulation attack","Smurf attack"], answer:2, explain:"<strong>STP/BPDU manipulation attack</strong> injects superior BPDUs so the attacker's device becomes the root bridge and redirects traffic through it.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>ARP spoofing</b>: ARP spoofing forges IP-to-MAC mappings, not crafting BPDUs to win the root bridge election.</span><span class='qd'><b>DHCP starvation</b>: DHCP starvation depletes the address pool, not manipulating Spanning Tree.</span><span class='qd'><b>Smurf attack</b>: A Smurf attack is an ICMP broadcast amplification flood, not a Layer 2 STP manipulation.</span>" },
{ id:"D4-046", domain:4, obj:"4.2", diff:"hard", q:"An attacker exhausts a DHCP server's address pool by requesting all available leases with spoofed MAC addresses. What is this attack called?", options:["Rogue DHCP","ARP poisoning","DNS hijacking","DHCP starvation"], answer:3, explain:"<strong>DHCP starvation</strong> depletes the address pool by requesting all leases with spoofed MACs so legitimate clients cannot obtain addresses.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Rogue DHCP</b>: A rogue DHCP server hands out unauthorized leases, whereas starvation exhausts the legitimate server's pool.</span><span class='qd'><b>ARP poisoning</b>: ARP poisoning forges IP-to-MAC bindings, not draining DHCP addresses.</span><span class='qd'><b>DNS hijacking</b>: DNS hijacking redirects name resolution, unrelated to consuming DHCP leases.</span>" },
{ id:"D4-047", domain:4, obj:"4.2", diff:"easy", q:"Malware that encrypts a victim's files and demands payment for the decryption key is known as what?", options:["Ransomware","Adware","Rootkit","Spyware"], answer:0, explain:"<strong>Ransomware</strong> encrypts a victim's files and demands payment for the decryption key, threatening data availability.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Spyware</b>: Spyware covertly gathers information about a user, not encrypting files for ransom.</span><span class='qd'><b>Adware</b>: Adware displays unwanted advertisements, not extorting payment for decryption.</span><span class='qd'><b>Rootkit</b>: A rootkit hides malicious presence and maintains privileged access, not encrypting data for ransom.</span>" },
{ id:"D4-048", domain:4, obj:"4.2", diff:"easy", q:"Looking through an organization's discarded trash to find sensitive information is known as what?", options:["Pharming","Dumpster diving","Vishing","Tailgating"], answer:1, explain:"<strong>Dumpster diving</strong> recovers improperly discarded documents or media containing useful information for an attacker.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Tailgating</b>: Tailgating is following an authorized person through a secure door, not searching discarded trash.</span><span class='qd'><b>Pharming</b>: Pharming redirects users to fraudulent sites via DNS manipulation, not physical scavenging.</span><span class='qd'><b>Vishing</b>: Vishing uses deceptive voice calls, not retrieving information from the trash.</span>" },
{ id:"D4-049", domain:4, obj:"4.3", diff:"easy", q:"Which switch feature limits the number of MAC addresses learned on a port and can shut the port down if violated?", options:["BPDU guard","Dynamic ARP Inspection","Port security","DHCP snooping"], answer:2, explain:"<strong>Port security</strong> limits the MAC addresses learned on a port and can shut the port down when the limit is violated.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DHCP snooping</b>: DHCP snooping blocks rogue DHCP offers from untrusted ports, not limiting MAC addresses per port.</span><span class='qd'><b>BPDU guard</b>: BPDU guard disables a port that receives a BPDU to stop rogue switches, not enforcing a MAC count.</span><span class='qd'><b>Dynamic ARP Inspection</b>: DAI validates ARP packets against trusted bindings, not capping learned MAC addresses.</span>" },
{ id:"D4-050", domain:4, obj:"4.3", diff:"medium", q:"Which mitigation directly counters MAC flooding attacks against a switch?", options:["Disabling SNMP","BPDU guard","DNS filtering","Port security with a MAC limit"], answer:3, explain:"<strong>Port security with a MAC limit</strong> caps the number of MACs per port, preventing the CAM table overflow that MAC flooding relies on.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS filtering</b>: DNS filtering blocks resolution of malicious domains, irrelevant to a Layer 2 CAM table flood.</span><span class='qd'><b>Disabling SNMP</b>: Disabling SNMP reduces management exposure but does nothing to stop bogus MAC addresses flooding a port.</span><span class='qd'><b>BPDU guard</b>: BPDU guard protects against rogue switches sending BPDUs, not against MAC address table exhaustion.</span>" },
{ id:"D4-051", domain:4, obj:"4.3", diff:"medium", q:"Which feature builds a trusted binding table and drops DHCP server responses from untrusted ports, stopping rogue DHCP servers?", options:["DHCP snooping","NAT","Port mirroring","Spanning Tree"], answer:0, explain:"<strong>DHCP snooping</strong> marks ports as trusted or untrusted and blocks DHCP server responses from untrusted ports, defeating rogue DHCP servers.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Port mirroring</b>: Port mirroring copies traffic to a monitoring port for analysis, not filtering DHCP offers.</span><span class='qd'><b>Spanning Tree</b>: Spanning Tree prevents Layer 2 loops, not unauthorized DHCP responses.</span><span class='qd'><b>NAT</b>: NAT translates addresses between networks, unrelated to blocking rogue DHCP servers on a LAN.</span>" },
{ id:"D4-052", domain:4, obj:"4.3", diff:"hard", q:"Dynamic ARP Inspection (DAI) relies on which other feature's database to validate ARP packets?", options:["The NAT translation table","The DHCP snooping binding table","The STP topology table","The routing table"], answer:1, explain:"<strong>The DHCP snooping binding table</strong> is what DAI uses to validate ARP packets, dropping invalid IP-to-MAC mappings.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The STP topology table</b>: The STP topology reflects loop-free paths, not the IP-to-MAC bindings DAI checks.</span><span class='qd'><b>The routing table</b>: The routing table maps destinations to next hops at Layer 3, not validated ARP bindings.</span><span class='qd'><b>The NAT translation table</b>: The NAT table tracks address translations for outbound sessions, not ARP-to-binding validation.</span>" },
{ id:"D4-053", domain:4, obj:"4.3", diff:"medium", q:"Which mitigation BEST defends against ARP spoofing on a managed switch?", options:["Port mirroring","BPDU guard","Dynamic ARP Inspection","Storm control"], answer:2, explain:"<strong>Dynamic ARP Inspection</strong> validates ARP packets against trusted bindings, blocking the forged ARP replies used in spoofing.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>BPDU guard</b>: BPDU guard disables ports receiving BPDUs to stop rogue switches, not forged ARP replies.</span><span class='qd'><b>Storm control</b>: Storm control limits broadcast or multicast flooding rates, not validating ARP bindings.</span><span class='qd'><b>Port mirroring</b>: Port mirroring copies traffic for monitoring and does not block spoofed ARP packets.</span>" },
{ id:"D4-054", domain:4, obj:"4.3", diff:"medium", q:"Which feature should be enabled on access ports to immediately disable a port if it receives a BPDU, preventing rogue switches and STP manipulation?", options:["Port mirroring","DHCP snooping","Root guard only on trunks","BPDU guard"], answer:3, explain:"<strong>BPDU guard</strong> err-disables an access port that unexpectedly receives a BPDU, protecting against rogue switches and STP manipulation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DHCP snooping</b>: DHCP snooping filters rogue DHCP offers, not BPDUs on access ports.</span><span class='qd'><b>Root guard only on trunks</b>: Root guard prevents a port from becoming root but applies to designated links and does not err-disable an access port on any received BPDU as required.</span><span class='qd'><b>Port mirroring</b>: Port mirroring copies traffic for analysis and takes no action on received BPDUs.</span>" },
{ id:"D4-055", domain:4, obj:"4.3", diff:"hard", q:"To prevent switch-spoofing VLAN hopping, which configuration is the MOST effective?", options:["Disable DTP and set ports to access mode (nonnegotiate)","Enable BPDU guard on trunks","Increase the MTU","Enable DHCP snooping"], answer:0, explain:"<strong>Disable DTP and set ports to access mode (nonnegotiate)</strong> prevents an attacker from negotiating a trunk and is most effective against switch spoofing.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Enable BPDU guard on trunks</b>: BPDU guard protects access ports from rogue switches and does not stop DTP trunk negotiation.</span><span class='qd'><b>Increase the MTU</b>: MTU size affects frame payload, with no bearing on trunk negotiation or VLAN hopping.</span><span class='qd'><b>Enable DHCP snooping</b>: DHCP snooping blocks rogue DHCP traffic, not the DTP-based trunk an attacker negotiates.</span>" },
{ id:"D4-056", domain:4, obj:"4.3", diff:"hard", q:"Which configuration BEST mitigates double-tagging VLAN hopping?", options:["Enable port mirroring","Change the native VLAN on trunks to an unused VLAN and avoid using VLAN 1","Disable spanning tree","Increase the ARP timeout"], answer:1, explain:"<strong>Change the native VLAN on trunks to an unused VLAN and avoid using VLAN 1</strong> prevents the first switch from stripping the outer tag into the target VLAN.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Enable port mirroring</b>: Port mirroring copies traffic for monitoring and does not prevent the outer tag from being stripped.</span><span class='qd'><b>Disable spanning tree</b>: Disabling STP risks Layer 2 loops and does nothing to stop double-tagged frames.</span><span class='qd'><b>Increase the ARP timeout</b>: ARP timeout governs cache entry lifetime, unrelated to VLAN tag handling.</span>" },
{ id:"D4-057", domain:4, obj:"4.3", diff:"medium", q:"Which control filters traffic at Layer 3/4 by permitting or denying packets based on source/destination IP and port?", options:["DHCP snooping","BPDU guard","Access Control List (ACL)","Port security"], answer:2, explain:"<strong>Access Control List (ACL)</strong> permits or denies packets based on source and destination IP, ports, and protocols at Layer 3/4.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DHCP snooping</b>: DHCP snooping filters DHCP messages by port trust, not general IP and port packet filtering.</span><span class='qd'><b>BPDU guard</b>: BPDU guard reacts to BPDUs on access ports, not filtering Layer 3/4 traffic.</span><span class='qd'><b>Port security</b>: Port security limits MAC addresses at Layer 2, not permitting or denying by IP and port.</span>" },
{ id:"D4-058", domain:4, obj:"4.3", diff:"medium", q:"Most ACLs end with which implicit behavior if no rule matches?", options:["Random forwarding","Logging only","Implicit permit any","Implicit deny any"], answer:3, explain:"<strong>Implicit deny any</strong> concludes most ACLs, so any traffic not explicitly permitted is dropped.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Implicit permit any</b>: ACLs default to deny, not permit, so unmatched traffic is blocked rather than allowed.</span><span class='qd'><b>Random forwarding</b>: ACL processing is deterministic top-down, never randomly forwarding unmatched packets.</span><span class='qd'><b>Logging only</b>: Logging is an optional per-rule action, not the implicit default applied to unmatched traffic.</span>" },
{ id:"D4-059", domain:4, obj:"4.3", diff:"easy", q:"Which hardening step prevents attackers from plugging unauthorized devices into open jacks in a conference room?", options:["Disabling unused switch ports","Lowering STP priority","Increasing DHCP lease time","Enabling jumbo frames"], answer:0, explain:"<strong>Disabling unused switch ports</strong> prevents unauthorized devices from gaining access through open jacks.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Increasing DHCP lease time</b>: Longer leases reduce DHCP renewals but do nothing to stop a device plugged into an open jack.</span><span class='qd'><b>Enabling jumbo frames</b>: Jumbo frames raise the MTU for throughput, unrelated to physical port access.</span><span class='qd'><b>Lowering STP priority</b>: Lowering STP priority influences root bridge election, not whether an open jack admits a device.</span>" },
{ id:"D4-060", domain:4, obj:"4.3", diff:"easy", q:"What is a basic but critical hardening step for any new network device out of the box?", options:["Enabling Telnet","Changing default credentials","Disabling logging","Opening all ports"], answer:1, explain:"<strong>Changing default credentials</strong> is essential because default usernames and passwords are publicly known and easily abused.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Enabling Telnet</b>: Telnet sends credentials in cleartext, weakening security rather than hardening the device.</span><span class='qd'><b>Disabling logging</b>: Disabling logging removes the audit trail needed to detect issues, the opposite of hardening.</span><span class='qd'><b>Opening all ports</b>: Opening all ports expands the attack surface, directly undermining device security.</span>" },
{ id:"D4-061", domain:4, obj:"4.3", diff:"medium", q:"Which solution inspects requested domain names and blocks access to known malicious or disallowed sites?", options:["Port security","DHCP snooping","DNS filtering","BPDU guard"], answer:2, explain:"<strong>DNS filtering</strong> inspects requested domain names and blocks resolution of known malicious or disallowed sites.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>BPDU guard</b>: BPDU guard disables ports receiving BPDUs and has no role in inspecting domain names.</span><span class='qd'><b>Port security</b>: Port security limits MAC addresses on a port, not filtering DNS requests.</span><span class='qd'><b>DHCP snooping</b>: DHCP snooping blocks rogue DHCP offers, unrelated to blocking malicious domains.</span>" },
{ id:"D4-062", domain:4, obj:"4.3", diff:"medium", q:"Which technology enforces acceptable use by inspecting and blocking web traffic based on categories such as gambling or malware?", options:["Link aggregation","NAT","Port mirroring","Content filtering"], answer:3, explain:"<strong>Content filtering</strong> examines web traffic and blocks categories such as gambling or malware per policy.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Port mirroring</b>: Port mirroring copies traffic to a monitor port and does not block content by category.</span><span class='qd'><b>Link aggregation</b>: Link aggregation bundles multiple links for bandwidth and redundancy, not web content control.</span><span class='qd'><b>NAT</b>: NAT translates addresses between networks and does not inspect or block web categories.</span>" },
{ id:"D4-063", domain:4, obj:"4.3", diff:"hard", q:"A security team wants to defend against evil twin and rogue AP attacks. Which control set is MOST appropriate?", options:["Wireless intrusion prevention (WIPS) plus 802.1X/WPA3-Enterprise authentication","NAT plus jumbo frames","DHCP snooping plus BPDU guard","Dynamic ARP Inspection plus port security"], answer:0, explain:"<strong>Wireless intrusion prevention (WIPS) plus 802.1X/WPA3-Enterprise authentication</strong> detects rogue and evil-twin APs while ensuring clients authenticate to legitimate infrastructure.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DHCP snooping plus BPDU guard</b>: These are wired Layer 2 protections against rogue DHCP and rogue switches, not wireless rogue AP detection.</span><span class='qd'><b>Dynamic ARP Inspection plus port security</b>: DAI and port security address ARP spoofing and MAC limits on switch ports, not evil twin APs.</span><span class='qd'><b>NAT plus jumbo frames</b>: NAT and jumbo frames concern addressing and throughput, providing no defense against rogue wireless APs.</span>" },
{ id:"D4-064", domain:4, obj:"4.3", diff:"medium", q:"Which control should an administrator deploy to require posture checks and authentication before any device joins the LAN?", options:["SNMPv2","Network Access Control (NAC)","Port mirroring","NTP"], answer:1, explain:"<strong>Network Access Control (NAC)</strong> enforces authentication and posture assessment, admitting only compliant, authorized devices before they join the LAN.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Port mirroring</b>: Port mirroring copies traffic for monitoring and does not gate device admission.</span><span class='qd'><b>NTP</b>: NTP synchronizes clocks across devices, with no role in posture checks or admission control.</span><span class='qd'><b>SNMPv2</b>: SNMPv2 is a management and monitoring protocol, not an access control that authenticates joining devices.</span>" },
{ id:"D4-065", domain:4, obj:"4.3", diff:"hard", q:"To defend against DNS cache poisoning, which measure is MOST effective?", options:["Shortening the DHCP lease","Disabling ARP","Deploying DNSSEC to cryptographically validate DNS responses","Enabling jumbo frames"], answer:2, explain:"<strong>Deploying DNSSEC to cryptographically validate DNS responses</strong> signs records so resolvers can verify authenticity and reject forged answers.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Disabling ARP</b>: ARP is required for IP-to-MAC resolution on a LAN and disabling it would break connectivity without addressing DNS poisoning.</span><span class='qd'><b>Enabling jumbo frames</b>: Jumbo frames adjust MTU for throughput and have no effect on validating DNS responses.</span><span class='qd'><b>Shortening the DHCP lease</b>: Shorter DHCP leases affect address renewal timing, not the authenticity of DNS records.</span>" },
{ id:"D4-066", domain:4, obj:"4.3", diff:"medium", q:"Which best practice reduces the risk of credential interception when managing network devices remotely?", options:["Enable SNMPv1","Use TFTP for all transfers","Use HTTP instead of HTTPS","Use SSH instead of Telnet"], answer:3, explain:"<strong>Use SSH instead of Telnet</strong> reduces credential interception because SSH encrypts the management session while Telnet sends credentials in cleartext.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Use HTTP instead of HTTPS</b>: HTTP is unencrypted and would expose credentials, the opposite of best practice.</span><span class='qd'><b>Enable SNMPv1</b>: SNMPv1 uses cleartext community strings and offers no encryption, increasing interception risk.</span><span class='qd'><b>Use TFTP for all transfers</b>: TFTP has no authentication or encryption, making it insecure for management transfers.</span>" },
{ id:"D4-067", domain:4, obj:"4.3", diff:"medium", q:"A switch port configured with port security violation mode 'shutdown' will do what when an unauthorized MAC is detected?", options:["Place the port into an err-disabled state","Increase the MAC limit automatically","Silently allow the traffic","Mirror the traffic to the SPAN port"], answer:0, explain:"<strong>Place the port into an err-disabled state</strong> is the action of port security shutdown mode, which requires manual or automatic recovery to restore the port.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Silently allow the traffic</b>: Shutdown mode blocks the violation entirely rather than allowing the unauthorized MAC.</span><span class='qd'><b>Mirror the traffic to the SPAN port</b>: Mirroring is a monitoring feature, not the response of a port security violation.</span><span class='qd'><b>Increase the MAC limit automatically</b>: Port security enforces the configured limit and does not raise it when violated.</span>" },
{ id:"D4-068", domain:4, obj:"4.3", diff:"hard", q:"An organization wants to prevent attackers who breach one user subnet from reaching the server VLAN. Which approach BEST achieves this?", options:["Lowering the STP root priority","Segmentation with inter-VLAN ACLs/firewall rules","Enabling jumbo frames on all ports","Shortening DHCP lease times"], answer:1, explain:"<strong>Segmentation with inter-VLAN ACLs/firewall rules</strong> limits lateral movement by filtering traffic between the user subnet and the server VLAN.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Enabling jumbo frames on all ports</b>: Jumbo frames adjust MTU for throughput and do not restrict cross-subnet access.</span><span class='qd'><b>Shortening DHCP lease times</b>: Shorter leases affect address renewal, not whether an attacker can reach another VLAN.</span><span class='qd'><b>Lowering the STP root priority</b>: STP priority controls root bridge selection, not inter-VLAN traffic filtering.</span>" },
{ id:"D4-069", domain:4, obj:"4.3", diff:"hard", q:"Which control combination directly mitigates a rogue DHCP server and DHCP starvation on the same switch?", options:["STP with link aggregation","BPDU guard with NAT","DHCP snooping with port security","DNS filtering with content filtering"], answer:2, explain:"<strong>DHCP snooping with port security</strong> blocks unauthorized DHCP offers from a rogue server and limits MACs per port to curb the spoofed requests of starvation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>BPDU guard with NAT</b>: BPDU guard targets rogue switches and NAT translates addresses, neither addressing DHCP threats.</span><span class='qd'><b>DNS filtering with content filtering</b>: These block malicious domains and web categories, not DHCP server or starvation attacks.</span><span class='qd'><b>STP with link aggregation</b>: STP prevents loops and link aggregation bundles links, with no effect on rogue DHCP or starvation.</span>" },
{ id:"D4-070", domain:4, obj:"4.3", diff:"easy", q:"Which simple measure helps protect against shoulder surfing in open office areas?", options:["Disabling STP","Enabling jumbo frames","Increasing the ARP cache size","Privacy screen filters on monitors"], answer:3, explain:"<strong>Privacy screen filters on monitors</strong> narrow the viewing angle of a display, reducing the chance bystanders read sensitive information.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Disabling STP</b>: Disabling Spanning Tree risks Layer 2 loops and does nothing to limit who can view a screen.</span><span class='qd'><b>Enabling jumbo frames</b>: Jumbo frames adjust MTU for throughput, unrelated to physical visual privacy.</span><span class='qd'><b>Increasing the ARP cache size</b>: ARP cache size affects address resolution storage, not shoulder surfing protection.</span>" }
);
NETPLUS.questions.push(
  { id:"D5-001", domain:5, obj:"5.1", diff:"easy", q:"According to the CompTIA network troubleshooting methodology, what is the FIRST step?", options:["Identify the problem","Implement the solution","Document findings, actions, and outcomes","Establish a theory of probable cause"], answer:0, explain:"<strong>Identify the problem</strong> is step one of the seven-step methodology, where you gather information, question users, and determine if anything has changed before forming any theory.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Establish a theory of probable cause</b>: This is step two and cannot begin until the problem has first been defined through information gathering.</span><span class='qd'><b>Implement the solution</b>: Implementing a fix is a later step that occurs only after a theory is tested and a plan of action is built.</span><span class='qd'><b>Document findings, actions, and outcomes</b>: Documentation is the final step performed after the issue is resolved and verified, not the first.</span>" },
  { id:"D5-002", domain:5, obj:"5.1", diff:"easy", q:"Which step immediately follows 'Identify the problem' in the troubleshooting methodology?", options:["Test the theory to determine the cause","Establish a theory of probable cause","Implement the solution or escalate","Verify full system functionality"], answer:1, explain:"<strong>Establish a theory of probable cause</strong> is step two; once the problem is defined you hypothesize the likely cause, questioning the obvious first.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Test the theory to determine the cause</b>: Testing is step three and requires a theory to already exist before it can be confirmed or denied.</span><span class='qd'><b>Implement the solution or escalate</b>: This occurs after a plan of action is established, several steps later in the sequence.</span><span class='qd'><b>Verify full system functionality</b>: Verification is the second-to-last step performed after the solution is implemented.</span>" },
  { id:"D5-003", domain:5, obj:"5.1", diff:"medium", q:"A technician has confirmed a theory of probable cause. What is the NEXT step?", options:["Verify full system functionality","Re-establish a new theory","Establish a plan of action to resolve the problem","Document the findings"], answer:2, explain:"<strong>Establish a plan of action to resolve the problem</strong> is the step after a theory is confirmed by testing, and it includes identifying potential effects of the change.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Re-establish a new theory</b>: A new theory is only needed when testing fails to confirm the cause, but here the theory was already confirmed.</span><span class='qd'><b>Document the findings</b>: Documentation is the final step and comes only after the fix is implemented and verified.</span><span class='qd'><b>Verify full system functionality</b>: Verification cannot occur until a plan of action is built and the solution is actually implemented.</span>" },
  { id:"D5-004", domain:5, obj:"5.1", diff:"medium", q:"In the troubleshooting methodology, what should a technician do if testing the theory does NOT confirm the probable cause?", options:["Document the outcome and close the ticket","Immediately verify system functionality","Implement the solution anyway","Establish a new theory or escalate"], answer:3, explain:"<strong>Establish a new theory or escalate</strong> is the correct branch when testing fails to confirm the suspected cause, looping back rather than forcing an unverified fix.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Implement the solution anyway</b>: Applying a fix for an unconfirmed cause risks making changes that do not address the actual problem.</span><span class='qd'><b>Document the outcome and close the ticket</b>: The issue is still unresolved, so documenting and closing would abandon an open problem.</span><span class='qd'><b>Immediately verify system functionality</b>: There is no implemented solution yet to verify since the theory was never confirmed.</span>" },
  { id:"D5-005", domain:5, obj:"5.1", diff:"easy", q:"What is the FINAL step in the seven-step troubleshooting methodology?", options:["Document findings, actions, outcomes, and lessons learned","Establish a plan of action","Implement the solution","Verify full system functionality"], answer:0, explain:"<strong>Document findings, actions, outcomes, and lessons learned</strong> is the seventh and final step, preserving knowledge for future troubleshooting.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Implement the solution</b>: Implementation is step five, well before the final documentation step.</span><span class='qd'><b>Verify full system functionality</b>: Verification is step six, the second-to-last step that precedes documentation.</span><span class='qd'><b>Establish a plan of action</b>: Planning is an early step that happens after the theory is confirmed, not at the end.</span>" },
  { id:"D5-006", domain:5, obj:"5.1", diff:"medium", q:"After implementing a fix, which step comes BEFORE documenting the outcome?", options:["Establish a theory","Verify full system functionality and implement preventive measures","Identify the problem","Question the obvious"], answer:1, explain:"<strong>Verify full system functionality and implement preventive measures</strong> is step six, confirming the fix worked and preventing recurrence before the final documentation step.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Establish a theory</b>: Forming a theory is an early step performed before any solution is implemented, not after.</span><span class='qd'><b>Identify the problem</b>: Identifying the problem is step one and would already be complete by the time a fix is implemented.</span><span class='qd'><b>Question the obvious</b>: Questioning the obvious is a sub-task of establishing a theory, occurring early in the process.</span>" },
  { id:"D5-007", domain:5, obj:"5.1", diff:"medium", q:"A user reports that they cannot access a shared drive. What should the technician do FIRST?", options:["Escalate to the storage team","Reboot the file server","Gather information and question the user about the issue","Replace the user's network cable"], answer:2, explain:"<strong>Gather information and question the user about the issue</strong> is the first step, since identifying the problem must precede any corrective action.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Reboot the file server</b>: Rebooting before understanding the issue is an untested action that could disrupt many other users unnecessarily.</span><span class='qd'><b>Replace the user's network cable</b>: Swapping hardware assumes a physical cause that has not been established through information gathering.</span><span class='qd'><b>Escalate to the storage team</b>: Escalation comes only after the technician has identified the problem and determined it exceeds their scope.</span>" },
  { id:"D5-008", domain:5, obj:"5.1", diff:"hard", q:"During problem identification, a technician learns the user installed new software just before the outage. This BEST relates to which sub-task?", options:["Duplicating the problem","Establishing a plan of action","Approaching multiple problems individually","Determining if anything has changed"], answer:3, explain:"<strong>Determining if anything has changed</strong> is a key sub-task of identifying the problem, and recently installed software is a classic change that points to the root cause.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Approaching multiple problems individually</b>: This sub-task applies when several distinct issues exist, not to noting a single recent change.</span><span class='qd'><b>Duplicating the problem</b>: Duplicating means reproducing the symptom on demand, which is different from discovering what changed.</span><span class='qd'><b>Establishing a plan of action</b>: A plan of action is a later step built after the cause is confirmed, not part of initial identification.</span>" },
  { id:"D5-009", domain:5, obj:"5.1", diff:"medium", q:"Why is it important to question the obvious when establishing a theory of probable cause?", options:["Simple causes (e.g., unplugged cable, disabled NIC) are common and quickly ruled out","It eliminates the need to test the theory","It replaces the need to document findings","It guarantees the problem is hardware-related"], answer:0, explain:"<strong>Simple causes (e.g., unplugged cable, disabled NIC) are common and quickly ruled out</strong>, so questioning the obvious saves time before chasing complex theories.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It guarantees the problem is hardware-related</b>: Obvious causes can be software or configuration related too, so nothing about hardware is guaranteed.</span><span class='qd'><b>It eliminates the need to test the theory</b>: Every theory, even an obvious one, still must be tested to confirm the cause.</span><span class='qd'><b>It replaces the need to document findings</b>: Documentation remains a required final step regardless of how simple the cause was.</span>" },
  { id:"D5-010", domain:5, obj:"5.1", diff:"hard", q:"A technician must apply a fix that requires rebooting a core switch during business hours. What should they consider BEFORE implementing the solution?", options:["Documenting lessons learned","Potential effects of the plan of action and whether to escalate or schedule a change","Re-establishing a theory","Verifying functionality first"], answer:1, explain:"<strong>Potential effects of the plan of action and whether to escalate or schedule a change</strong> must be weighed before implementing, since a core switch reboot is disruptive and falls under change management.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Documenting lessons learned</b>: Documentation is the final step performed after the fix, not a pre-implementation consideration.</span><span class='qd'><b>Re-establishing a theory</b>: A new theory is only needed if testing failed, but here the fix has already been identified.</span><span class='qd'><b>Verifying functionality first</b>: There is nothing to verify until the solution has actually been implemented.</span>" },
  { id:"D5-011", domain:5, obj:"5.1", diff:"medium", q:"A technician resolves an issue but does not record what was done. Which methodology step was skipped?", options:["Verify functionality","Test the theory","Document findings, actions, and outcomes","Establish a theory"], answer:2, explain:"<strong>Document findings, actions, and outcomes</strong> is the step skipped, since the resolution was never recorded for future reference.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Test the theory</b>: Testing occurs mid-process to confirm the cause and is unrelated to recording the final resolution.</span><span class='qd'><b>Establish a theory</b>: Forming a theory is an early step that clearly happened since the issue was actually resolved.</span><span class='qd'><b>Verify functionality</b>: Verification confirms the fix works, but the omission described is the failure to write down what was done.</span>" },
  { id:"D5-012", domain:5, obj:"5.1", diff:"hard", q:"Several users on one floor report intermittent connectivity. The technician should approach this by:", options:["Documenting before identifying the problem","Implementing a solution before testing a theory","Assuming each report is an unrelated individual issue","Considering whether multiple symptoms share a single common cause"], answer:3, explain:"<strong>Considering whether multiple symptoms share a single common cause</strong> is correct, since one failing switch or uplink can produce many simultaneous user reports.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Assuming each report is an unrelated individual issue</b>: Treating clustered, location-specific reports as isolated ignores the likely shared root cause and wastes effort.</span><span class='qd'><b>Documenting before identifying the problem</b>: Documentation is the final step and cannot precede problem identification.</span><span class='qd'><b>Implementing a solution before testing a theory</b>: Applying a fix before testing skips confirmation and risks changing the wrong component.</span>" },
  { id:"D5-013", domain:5, obj:"5.1", diff:"easy", q:"Which action is part of 'verify full system functionality'?", options:["Asking the user to confirm the issue is resolved and the application works","Writing the incident summary","Questioning the obvious","Creating a theory of probable cause"], answer:0, explain:"<strong>Asking the user to confirm the issue is resolved and the application works</strong> is part of verifying full system functionality, ensuring the original symptom and dependent services are restored.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Writing the incident summary</b>: Writing the summary belongs to the final documentation step, not to verification.</span><span class='qd'><b>Questioning the obvious</b>: Questioning the obvious is part of establishing a theory early in the process.</span><span class='qd'><b>Creating a theory of probable cause</b>: Building a theory is an early step, whereas verification occurs after the fix is applied.</span>" },
  { id:"D5-014", domain:5, obj:"5.1", diff:"medium", q:"Being able to reproduce a reported issue on demand is referred to as:", options:["Escalating the problem","Duplicating the problem","Documenting the problem","Verifying the problem"], answer:1, explain:"<strong>Duplicating the problem</strong> means reproducing the symptom on demand, which confirms it is real and consistent and helps isolate the cause.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Escalating the problem</b>: Escalation hands the issue to another team and does nothing to reproduce the symptom.</span><span class='qd'><b>Documenting the problem</b>: Documenting records details for reference but does not demonstrate the issue happening again.</span><span class='qd'><b>Verifying the problem</b>: Verification in the methodology confirms a fix works, not that a symptom can be reproduced on demand.</span>" },
  { id:"D5-015", domain:5, obj:"5.1", diff:"hard", q:"A junior technician cannot resolve a routing issue within the SLA window. According to methodology, the BEST action is to:", options:["Reboot all routers","Continue trying indefinitely","Escalate to the appropriate team","Close the ticket as unresolved"], answer:2, explain:"<strong>Escalate to the appropriate team</strong> is correct, since exceeding the SLA window or one's ability is exactly when methodology supports handing the issue off.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Continue trying indefinitely</b>: Continuing past the SLA window violates time commitments and delays resolution.</span><span class='qd'><b>Close the ticket as unresolved</b>: Closing an open, unresolved issue abandons the user rather than getting them help.</span><span class='qd'><b>Reboot all routers</b>: Rebooting all routers is a disruptive, untested action that could cause a wider outage.</span>" },
  { id:"D5-016", domain:5, obj:"5.2", diff:"easy", q:"What term describes the gradual loss of signal strength as it travels along a cable?", options:["Jitter","Reflection","Crosstalk","Attenuation"], answer:3, explain:"<strong>Attenuation</strong> is the gradual loss of signal strength as a signal travels along a cable, worsening with distance and higher frequencies.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Crosstalk</b>: Crosstalk is signal bleeding from one wire pair into an adjacent pair, not loss over distance.</span><span class='qd'><b>Jitter</b>: Jitter is the variation in packet arrival delay, a timing issue rather than signal loss.</span><span class='qd'><b>Reflection</b>: Reflection is signal bouncing back from an impedance mismatch or break, not steady weakening over length.</span>" },
  { id:"D5-017", domain:5, obj:"5.2", diff:"medium", q:"A 150-meter run of Cat 6 copper cabling experiences poor throughput and errors. What is the MOST likely cause?", options:["Exceeding the 100-meter distance limit causing attenuation","A duplex mismatch","An incorrect VLAN","Crosstalk from fiber"], answer:0, explain:"<strong>Exceeding the 100-meter distance limit causing attenuation</strong> is correct, since twisted-pair Ethernet is rated for 100 meters and a 150-meter run degrades the signal.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Crosstalk from fiber</b>: Fiber carries light and does not induce electrical crosstalk into copper, so this is technically impossible.</span><span class='qd'><b>A duplex mismatch</b>: A duplex mismatch causes collisions and CRC errors regardless of length, not distance-driven attenuation.</span><span class='qd'><b>An incorrect VLAN</b>: A wrong VLAN causes segmentation or access issues, not throughput loss tied to cable length.</span>" },
  { id:"D5-018", domain:5, obj:"5.2", diff:"medium", q:"Signal from one wire pair bleeding into an adjacent pair is known as:", options:["Attenuation","Crosstalk","Latency","Bottlenecking"], answer:1, explain:"<strong>Crosstalk</strong> is interference where the signal on one wire pair couples into an adjacent pair, often from untwisting pairs at terminations.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Attenuation</b>: Attenuation is loss of signal strength over distance, not coupling between pairs.</span><span class='qd'><b>Latency</b>: Latency is end-to-end delay, a timing metric unrelated to inter-pair interference.</span><span class='qd'><b>Bottlenecking</b>: A bottleneck is a capacity constraint along the path, not electrical bleed between conductors.</span>" },
  { id:"D5-019", domain:5, obj:"5.2", diff:"hard", q:"A cable tester reports high NEXT on a newly terminated patch cable. What is the MOST likely cause?", options:["An incorrect IP subnet","The cable exceeds 100 meters","Wire pairs were untwisted too much at the connector","A bad SFP module"], answer:2, explain:"<strong>Wire pairs were untwisted too much at the connector</strong> is correct, since near-end crosstalk (NEXT) spikes when twists are not maintained close to the termination.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The cable exceeds 100 meters</b>: Excessive length causes attenuation and insertion loss, not the near-end crosstalk a NEXT test measures.</span><span class='qd'><b>A bad SFP module</b>: An SFP is an optical or copper transceiver and has nothing to do with crosstalk on a terminated patch cable.</span><span class='qd'><b>An incorrect IP subnet</b>: An IP subnetting error is a Layer 3 configuration issue and cannot register on a physical-layer crosstalk test.</span>" },
  { id:"D5-020", domain:5, obj:"5.2", diff:"medium", q:"A copper cable run passes next to fluorescent lights and motors, causing intermittent errors. What is the issue?", options:["Attenuation","Duplex mismatch","DNS failure","Electromagnetic interference (EMI)"], answer:3, explain:"<strong>Electromagnetic interference (EMI)</strong> from fluorescent lights and motors couples noise into unshielded copper, producing intermittent errors.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Attenuation</b>: Attenuation is distance-based signal loss and would not correlate with nearby electrical equipment.</span><span class='qd'><b>Duplex mismatch</b>: A duplex mismatch is a configuration issue causing collisions, not interference from external devices.</span><span class='qd'><b>DNS failure</b>: DNS resolves names and operates at Layer 7, completely unrelated to physical electrical noise.</span>" },
  { id:"D5-021", domain:5, obj:"5.2", diff:"medium", q:"One end of a link is set to full duplex and the other is half duplex. What symptom is MOST likely?", options:["Late collisions and degraded performance","An IP address conflict","A loop causing a broadcast storm","Complete link failure with no lights"], answer:0, explain:"<strong>Late collisions and degraded performance</strong> are the classic symptom of a duplex mismatch, where the half-duplex end detects collisions the full-duplex end ignores.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Complete link failure with no lights</b>: A duplex mismatch still establishes link and shows lights, just with poor performance.</span><span class='qd'><b>An IP address conflict</b>: An IP conflict is a Layer 3 addressing problem, not a Layer 1/2 duplex negotiation issue.</span><span class='qd'><b>A loop causing a broadcast storm</b>: A broadcast storm results from a Layer 2 switching loop, not from mismatched duplex settings on a single link.</span>" },
  { id:"D5-022", domain:5, obj:"5.2", diff:"hard", q:"An interface shows a steadily increasing CRC error counter. What does this MOST likely indicate?", options:["A correctly functioning link","Physical layer corruption from a bad cable, EMI, or duplex mismatch","An expired DHCP lease","A misconfigured default gateway"], answer:1, explain:"<strong>Physical layer corruption from a bad cable, EMI, or duplex mismatch</strong> is correct, since CRC errors mean frames arrive with checksum failures from Layer 1 problems.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A correctly functioning link</b>: A steadily rising CRC counter is by definition abnormal and indicates corruption, not healthy operation.</span><span class='qd'><b>An expired DHCP lease</b>: An expired lease is an addressing issue at Layer 3, which does not corrupt frame checksums.</span><span class='qd'><b>A misconfigured default gateway</b>: A wrong gateway blocks remote routing but does not cause physical frame corruption.</span>" },
  { id:"D5-023", domain:5, obj:"5.2", diff:"medium", q:"A cable tester indicates that two conductors that should be separate are touching. This fault is a:", options:["Crossover","Open","Short","Split pair"], answer:2, explain:"<strong>Short</strong> is correct, since a short occurs when two conductors that should remain separate make unintended contact.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Open</b>: An open is a broken or disconnected conductor with no continuity, the opposite of two wires touching.</span><span class='qd'><b>Split pair</b>: A split pair keeps continuity but pairs wires from different twisted pairs, not two conductors shorting together.</span><span class='qd'><b>Crossover</b>: A crossover is an intentional swap of transmit and receive pairs between ends, not an accidental contact fault.</span>" },
  { id:"D5-024", domain:5, obj:"5.2", diff:"medium", q:"A cable tester shows that pin 3 has no continuity end-to-end. This is an example of a(n):", options:["Reversed pair","Duplex mismatch","Short","Open"], answer:3, explain:"<strong>Open</strong> is correct, since a pin showing no continuity end-to-end means the conductor is broken or not connected.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Short</b>: A short is two conductors touching, which would show unwanted continuity rather than none at all.</span><span class='qd'><b>Reversed pair</b>: A reversed pair has continuity but with the two wires of a pair swapped, not a missing connection.</span><span class='qd'><b>Duplex mismatch</b>: A duplex mismatch is a configuration setting issue, not a physical continuity fault a tester would flag.</span>" },
  { id:"D5-025", domain:5, obj:"5.2", diff:"hard", q:"A fiber link is down. Swapping the two LC connectors at one end restores the link. What was the original problem?", options:["Transmit and receive (TX/RX) fibers were reversed","Excessive attenuation","A bad VLAN assignment","A duplex mismatch"], answer:0, explain:"<strong>Transmit and receive (TX/RX) fibers were reversed</strong> is correct, since each device's TX must reach the other's RX, and swapping the LC pair corrects the polarity.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A duplex mismatch</b>: Duplex mismatch is a copper Ethernet negotiation problem and is not how fiber polarity works.</span><span class='qd'><b>Excessive attenuation</b>: Attenuation is signal loss over distance, which swapping connectors would not fix.</span><span class='qd'><b>A bad VLAN assignment</b>: A VLAN error is a Layer 2 configuration issue and would not be resolved by reseating fibers.</span>" },
  { id:"D5-026", domain:5, obj:"5.2", diff:"medium", q:"A 10 Gb fiber port will not link even though the cable is good. Replacing the optical transceiver fixes it. The original fault was a:", options:["DHCP exhaustion","Bad SFP/transceiver module","Crosstalk problem","Open in the fiber"], answer:1, explain:"<strong>Bad SFP/transceiver module</strong> is correct, since a defective optic can block link establishment even with good fiber, and replacing it restores the link.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Crosstalk problem</b>: Crosstalk is an electrical phenomenon on copper pairs and does not occur on fiber.</span><span class='qd'><b>Open in the fiber</b>: An open fiber would not be resolved by swapping the transceiver, since the cable itself was confirmed good.</span><span class='qd'><b>DHCP exhaustion</b>: DHCP exhaustion is a Layer 3 address-pool issue and has nothing to do with a port failing to physically link.</span>" },
  { id:"D5-027", domain:5, obj:"5.2", diff:"hard", q:"A technician installs a 10GBASE-SR transceiver but the link is unstable over a long single-mode run. What is the MOST likely cause?", options:["An IP addressing error","Excessive broadcast traffic","The SFP wavelength/type does not match the fiber type","A duplex mismatch"], answer:2, explain:"<strong>The SFP wavelength/type does not match the fiber type</strong> is correct, since 10GBASE-SR is a short-range multimode optic and will not run reliably over single-mode fiber.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A duplex mismatch</b>: Duplex mismatch is a copper auto-negotiation issue, not a fiber optic-to-media compatibility problem.</span><span class='qd'><b>An IP addressing error</b>: An addressing error is Layer 3 and would not cause an unstable physical optical link.</span><span class='qd'><b>Excessive broadcast traffic</b>: Broadcast traffic is a Layer 2 load issue, not a cause of optical instability from a media mismatch.</span>" },
  { id:"D5-028", domain:5, obj:"5.2", diff:"easy", q:"Which tool would BEST identify an open, short, or miswire in a copper cable?", options:["Protocol analyzer","Bandwidth speed tester","Wi-Fi analyzer","Cable tester"], answer:3, explain:"<strong>Cable tester</strong> is correct, since it verifies continuity and pinout to detect opens, shorts, and miswires in copper.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Protocol analyzer</b>: A protocol analyzer captures and decodes traffic, offering nothing about physical wiring faults.</span><span class='qd'><b>Bandwidth speed tester</b>: A speed tester measures throughput between endpoints, not conductor continuity or pinout.</span><span class='qd'><b>Wi-Fi analyzer</b>: A Wi-Fi analyzer surveys wireless channels and signal, irrelevant to wired copper faults.</span>" },
  { id:"D5-029", domain:5, obj:"5.2", diff:"hard", q:"A technician needs to find the exact distance to a break in a fiber run. Which tool is BEST?", options:["Optical time-domain reflectometer (OTDR)","Tone generator","Multimeter","Cable tester"], answer:0, explain:"<strong>Optical time-domain reflectometer (OTDR)</strong> is correct, since it sends light pulses and measures reflections to pinpoint the distance to a break or bend in fiber.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Cable tester</b>: A standard cable tester checks copper continuity and wiring, not distance-to-fault on fiber.</span><span class='qd'><b>Tone generator</b>: A toner traces and identifies copper cables by sound, with no ability to locate fiber faults.</span><span class='qd'><b>Multimeter</b>: A multimeter measures electrical values like voltage and resistance, useless on a light-carrying fiber.</span>" },
  { id:"D5-030", domain:5, obj:"5.2", diff:"medium", q:"Which tool helps trace an unlabeled cable to the correct port in a wiring closet?", options:["Loopback plug","Tone generator and probe (toner)","OTDR","Spectrum analyzer"], answer:1, explain:"<strong>Tone generator and probe (toner)</strong> is correct, since it injects an audible tone on a wire that the probe detects to identify the cable among many.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>OTDR</b>: An OTDR locates faults along a fiber by distance, not for tracing which copper cable goes to which port.</span><span class='qd'><b>Spectrum analyzer</b>: A spectrum analyzer measures RF signals across frequencies, not the path of a physical cable.</span><span class='qd'><b>Loopback plug</b>: A loopback plug tests a port by looping its signal back, not for tracing cable routes.</span>" },
  { id:"D5-031", domain:5, obj:"5.2", diff:"hard", q:"Two wires from different pairs are crossed (e.g., one wire from pair 2 and one from pair 3 are used together) yet the cable shows continuity. This wiring fault is a:", options:["Open","TX/RX reversal","Split pair","Short"], answer:2, explain:"<strong>Split pair</strong> is correct, since using one wire from two different pairs preserves end-to-end continuity but destroys the twist relationship, causing crosstalk that simple testers may pass.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Short</b>: A short is two conductors touching, which would show abnormal continuity, not a passing continuity test with crosstalk.</span><span class='qd'><b>Open</b>: An open is a broken conductor with no continuity, the opposite of the continuity seen here.</span><span class='qd'><b>TX/RX reversal</b>: TX/RX reversal swaps transmit and receive pairs but keeps each pair intact, not the broken twist of a split pair.</span>" },
  { id:"D5-032", domain:5, obj:"5.2", diff:"medium", q:"A patch cable wired so transmit and receive pairs swap between ends is a(n):", options:["Rollover cable","Loopback cable","Straight-through cable","Crossover cable"], answer:3, explain:"<strong>Crossover cable</strong> is correct, since it deliberately swaps the transmit and receive pairs between the two ends.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Straight-through cable</b>: A straight-through cable keeps the same pinout on both ends with no pair swap.</span><span class='qd'><b>Rollover cable</b>: A rollover (console) cable reverses all pin positions for serial management, not a TX/RX pair swap.</span><span class='qd'><b>Loopback cable</b>: A loopback connects a port's transmit back to its own receive for testing, not for linking two devices.</span>" },
  { id:"D5-033", domain:5, obj:"5.2", diff:"medium", q:"After a remodel, several wall jacks show intermittent dropouts only when the HVAC runs. What is the MOST likely cause?", options:["EMI from the HVAC equipment near unshielded cabling","A routing loop","DHCP scope exhaustion","DNS misconfiguration"], answer:0, explain:"<strong>EMI from the HVAC equipment near unshielded cabling</strong> is correct, since dropouts that coincide with motors running point to electromagnetic interference.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS misconfiguration</b>: A DNS issue affects name resolution constantly, not in correlation with HVAC cycling.</span><span class='qd'><b>A routing loop</b>: A routing loop causes persistent forwarding problems unrelated to mechanical equipment timing.</span><span class='qd'><b>DHCP scope exhaustion</b>: Pool exhaustion prevents new leases regardless of HVAC operation, so it would not toggle with the motors.</span>" },
  { id:"D5-034", domain:5, obj:"5.2", diff:"hard", q:"An optical link shows excessive loss. The fiber connectors were recently handled without cleaning. What should the technician check FIRST?", options:["The switch VLAN configuration","Dirty or contaminated fiber connector end-faces","The DHCP server","The spanning tree priority"], answer:1, explain:"<strong>Dirty or contaminated fiber connector end-faces</strong> should be checked first, since handling without cleaning is a leading cause of optical loss and is quick to inspect.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The switch VLAN configuration</b>: A VLAN setting is Layer 2 and cannot cause measurable optical insertion loss.</span><span class='qd'><b>The DHCP server</b>: DHCP assigns addresses at Layer 3 and is unrelated to physical light loss on the fiber.</span><span class='qd'><b>The spanning tree priority</b>: STP priority influences topology selection, not the optical power budget of a link.</span>" },
  { id:"D5-035", domain:5, obj:"5.2", diff:"easy", q:"Which cabling problem is characterized by signal degradation specifically over long distances?", options:["TX/RX reversal","Crosstalk","Attenuation","Duplex mismatch"], answer:2, explain:"<strong>Attenuation</strong> is correct, since it is signal degradation that increases with distance, which is why media have maximum length limits.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Crosstalk</b>: Crosstalk is interference between adjacent pairs and is not specifically a function of distance.</span><span class='qd'><b>Duplex mismatch</b>: Duplex mismatch is a negotiation problem causing collisions, independent of cable length.</span><span class='qd'><b>TX/RX reversal</b>: TX/RX reversal is a wiring polarity fault that prevents linking, not gradual distance-based loss.</span>" },
  { id:"D5-036", domain:5, obj:"5.3", diff:"easy", q:"A workstation has an IP of 169.254.12.40 and cannot reach the network. What service has MOST likely failed?", options:["NTP","SNMP","DNS","DHCP"], answer:3, explain:"<strong>DHCP</strong> is correct, since a 169.254.x.x APIPA address is self-assigned when the client cannot reach a DHCP server to obtain a lease.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS</b>: DNS resolves names; its failure would block name lookups but not cause an APIPA address.</span><span class='qd'><b>NTP</b>: NTP synchronizes clocks and has no role in IP address assignment.</span><span class='qd'><b>SNMP</b>: SNMP is a management and monitoring protocol, unrelated to a host obtaining an address.</span>" },
  { id:"D5-037", domain:5, obj:"5.3", diff:"medium", q:"Users can reach websites by IP address but not by name. What is the MOST likely cause?", options:["A DNS resolution problem","A duplex mismatch","An expired certificate","DHCP exhaustion"], answer:0, explain:"<strong>A DNS resolution problem</strong> is correct, since reaching sites by IP but not by name isolates the failure to name resolution.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DHCP exhaustion</b>: If DHCP had failed the client would lack a working IP, but it can already reach sites by IP.</span><span class='qd'><b>A duplex mismatch</b>: A duplex mismatch degrades all traffic with errors, not selectively block name lookups.</span><span class='qd'><b>An expired certificate</b>: A bad certificate triggers TLS trust warnings, not an inability to resolve hostnames.</span>" },
  { id:"D5-038", domain:5, obj:"5.3", diff:"medium", q:"New clients fail to get IP addresses while existing leased clients work. The DHCP scope is the issue. The MOST likely cause is:", options:["DNS poisoning","DHCP scope/address pool exhaustion","A bad SFP","A loop"], answer:1, explain:"<strong>DHCP scope/address pool exhaustion</strong> is correct, since existing leases keep working while a depleted pool denies new clients an address.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS poisoning</b>: DNS poisoning redirects name resolution and does not prevent clients from obtaining IP addresses.</span><span class='qd'><b>A bad SFP</b>: A failed transceiver would drop a physical link entirely, not selectively block new DHCP assignments.</span><span class='qd'><b>A loop</b>: A switching loop causes broadcast storms affecting all traffic, not a clean split between old and new clients.</span>" },
  { id:"D5-039", domain:5, obj:"5.3", diff:"hard", q:"Two devices both alarm with an 'IP address conflict.' What is the MOST likely root cause?", options:["Attenuation on the cable","An incorrect default gateway","A duplicate static IP overlapping the DHCP scope","A failed DNS server"], answer:2, explain:"<strong>A duplicate static IP overlapping the DHCP scope</strong> is correct, since assigning a static address inside the DHCP range causes two devices to claim the same IP.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A failed DNS server</b>: A DNS outage breaks name resolution, not produce duplicate IP conflict alarms.</span><span class='qd'><b>Attenuation on the cable</b>: Attenuation is physical signal loss and cannot create an address conflict.</span><span class='qd'><b>An incorrect default gateway</b>: A wrong gateway blocks remote access but does not cause two hosts to share an IP.</span>" },
  { id:"D5-040", domain:5, obj:"5.3", diff:"medium", q:"Log timestamps across servers are inconsistent, complicating correlation. Which service is MOST likely misconfigured?", options:["DHCP","LDAP","DNS","NTP"], answer:3, explain:"<strong>NTP</strong> is correct, since the Network Time Protocol synchronizes clocks so log timestamps align for cross-system correlation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS</b>: DNS resolves names and has no effect on system clocks or timestamp accuracy.</span><span class='qd'><b>DHCP</b>: DHCP assigns IP configuration and does not govern time synchronization.</span><span class='qd'><b>LDAP</b>: LDAP provides directory services for authentication and lookups, not clock synchronization.</span>" },
  { id:"D5-041", domain:5, obj:"5.3", diff:"hard", q:"Clients receive a valid IP, subnet mask, and DNS but cannot reach other subnets. Which DHCP-provided option is MOST likely wrong?", options:["Default gateway","DNS suffix","NTP server","Lease time"], answer:0, explain:"<strong>Default gateway</strong> is correct, since a wrong or missing gateway lets clients talk locally but blocks routing to other subnets.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Lease time</b>: Lease time governs how long an address is held and does not affect inter-subnet reachability.</span><span class='qd'><b>DNS suffix</b>: A wrong DNS suffix affects name resolution, not the ability to route to remote subnets.</span><span class='qd'><b>NTP server</b>: An NTP option only sets time sources and has no bearing on routing between subnets.</span>" },
  { id:"D5-042", domain:5, obj:"5.3", diff:"medium", q:"A user can ping the gateway and other local hosts but not the internet. Local DNS resolves internal names only. What should the technician check?", options:["The cable length","The external/forwarder DNS configuration and internet uplink","The duplex setting","The MAC address table"], answer:1, explain:"<strong>The external/forwarder DNS configuration and internet uplink</strong> should be checked, since local connectivity works but only internal names resolve, pointing upstream.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The cable length</b>: Cable length affects the local physical link, which already works since the user reaches local hosts.</span><span class='qd'><b>The duplex setting</b>: A duplex problem would degrade all traffic, not selectively block external name resolution.</span><span class='qd'><b>The MAC address table</b>: The switch MAC table governs local Layer 2 forwarding, which is clearly functioning here.</span>" },
  { id:"D5-043", domain:5, obj:"5.3", diff:"hard", q:"After a rogue DHCP server appears on the network, some clients get wrong gateways and DNS. The BEST preventive control is:", options:["Increasing the DHCP lease time","Lowering the MTU","DHCP snooping on the switches","Disabling NTP"], answer:2, explain:"<strong>DHCP snooping on the switches</strong> is correct, since it only allows DHCP offers from trusted ports, blocking a rogue server.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Disabling NTP</b>: NTP synchronizes time and has nothing to do with stopping rogue DHCP offers.</span><span class='qd'><b>Increasing the DHCP lease time</b>: Longer leases do not prevent a rogue server from answering new or renewing clients.</span><span class='qd'><b>Lowering the MTU</b>: MTU affects frame size and fragmentation, not which device can serve DHCP.</span>" },
  { id:"D5-044", domain:5, obj:"5.3", diff:"easy", q:"Which protocol/service translates hostnames into IP addresses?", options:["NTP","SNMP","DHCP","DNS"], answer:3, explain:"<strong>DNS</strong> is correct, since the Domain Name System translates human-readable hostnames into IP addresses.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DHCP</b>: DHCP assigns IP configuration to clients but does not resolve names.</span><span class='qd'><b>NTP</b>: NTP synchronizes clocks and performs no name resolution.</span><span class='qd'><b>SNMP</b>: SNMP monitors and manages devices, with no role in translating names to addresses.</span>" },
  { id:"D5-045", domain:5, obj:"5.4", diff:"medium", q:"Voice calls have choppy audio and gaps during peak hours. Which metric is MOST relevant to investigate?", options:["Jitter","Attenuation","CRC errors","Subnet mask"], answer:0, explain:"<strong>Jitter</strong> is correct, since variation in packet delay causes the choppy audio and gaps typical of real-time voice during congestion.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Attenuation</b>: Attenuation is physical signal loss over distance, not the timing variation that disrupts VoIP.</span><span class='qd'><b>CRC errors</b>: CRC errors indicate corrupted frames at the physical layer, a different symptom than delay variation.</span><span class='qd'><b>Subnet mask</b>: A subnet mask is an addressing parameter and has no effect on real-time audio quality.</span>" },
  { id:"D5-046", domain:5, obj:"5.4", diff:"medium", q:"A file transfer is slow even though the link shows no errors. Throughput maxes well below the link rate during congestion. This indicates a:", options:["TX/RX reversal","Bottleneck/bandwidth saturation","Duplex mismatch","DNS failure"], answer:1, explain:"<strong>Bottleneck/bandwidth saturation</strong> is correct, since throughput plateauing below the link rate under load with no errors indicates a capacity constraint.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Duplex mismatch</b>: A duplex mismatch would produce collisions and CRC errors, but the link shows none.</span><span class='qd'><b>DNS failure</b>: A DNS failure blocks name resolution and would not throttle an active transfer's throughput.</span><span class='qd'><b>TX/RX reversal</b>: TX/RX reversal prevents a link from coming up at all, contradicting an active but slow transfer.</span>" },
  { id:"D5-047", domain:5, obj:"5.4", diff:"hard", q:"A real-time application suffers when round-trip time rises sharply. Which performance metric is MOST directly responsible?", options:["Cable length","MAC aging time","Latency","CRC error rate"], answer:2, explain:"<strong>Latency</strong> is correct, since rising round-trip time directly degrades the responsiveness of interactive and real-time applications.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>CRC error rate</b>: CRC errors indicate corrupted frames, a corruption issue rather than a delay metric.</span><span class='qd'><b>Cable length</b>: Cable length contributes minimally to delay and is not the metric that fluctuates with RTT here.</span><span class='qd'><b>MAC aging time</b>: MAC aging governs how long entries stay in the switch table, unrelated to round-trip delay.</span>" },
  { id:"D5-048", domain:5, obj:"5.4", diff:"hard", q:"A satellite WAN link has high latency but a TCP transfer is far slower than expected even when bandwidth is available. What concept BEST explains this?", options:["Crosstalk on the fiber","A duplex mismatch","DHCP exhaustion","High latency limits TCP throughput due to the bandwidth-delay product / small window"], answer:3, explain:"<strong>High latency limits TCP throughput due to the bandwidth-delay product / small window</strong> is correct, since a fixed window cannot keep the long satellite pipe full, capping speed.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Crosstalk on the fiber</b>: Crosstalk is an electrical copper phenomenon and does not occur on fiber.</span><span class='qd'><b>A duplex mismatch</b>: A duplex mismatch is a local Ethernet issue causing errors, not a latency-window constraint on a WAN.</span><span class='qd'><b>DHCP exhaustion</b>: DHCP exhaustion blocks address assignment and has no bearing on TCP windowing over a working link.</span>" },
  { id:"D5-049", domain:5, obj:"5.4", diff:"medium", q:"A monitoring tool reports increasing packet loss on a WAN link during business hours. The MOST likely cause is:", options:["Congestion exceeding the link's capacity","A DNS suffix error","An IP conflict","An NTP misconfiguration"], answer:0, explain:"<strong>Congestion exceeding the link's capacity</strong> is correct, since packet loss that rises during peak business hours points to saturation of the WAN link.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>An NTP misconfiguration</b>: An NTP problem skews timestamps but does not drop packets on a link.</span><span class='qd'><b>A DNS suffix error</b>: A DNS suffix error affects name resolution, not packet loss correlated with traffic load.</span><span class='qd'><b>An IP conflict</b>: An IP conflict affects the two conflicting hosts, not loss patterns tied to busy-hour congestion.</span>" },
  { id:"D5-050", domain:5, obj:"5.4", diff:"medium", q:"Which tool is BEST suited to measure end-to-end throughput between two hosts?", options:["OTDR","iPerf/bandwidth speed tester","Tone generator","Cable tester"], answer:1, explain:"<strong>iPerf/bandwidth speed tester</strong> is correct, since it generates traffic between two endpoints to measure achievable end-to-end throughput.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Tone generator</b>: A toner traces copper cables by sound and cannot measure throughput.</span><span class='qd'><b>Cable tester</b>: A cable tester verifies wiring and continuity, not data throughput between hosts.</span><span class='qd'><b>OTDR</b>: An OTDR locates faults on fiber by distance and does not measure end-to-end bandwidth.</span>" },
  { id:"D5-051", domain:5, obj:"5.4", diff:"hard", q:"A WAN circuit is provisioned at 100 Mbps but consistently delivers about 90 Mbps with bursts dropped. What is the MOST likely cause?", options:["An open in the cable","A DNS failure","Traffic shaping/policing or rate limiting on the circuit","A bad SFP"], answer:2, explain:"<strong>Traffic shaping/policing or rate limiting on the circuit</strong> is correct, since a consistent cap just below line rate with dropped bursts is the signature of a policer.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A bad SFP</b>: A failing transceiver tends to cause errors or link flaps, not a clean steady rate cap.</span><span class='qd'><b>An open in the cable</b>: An open conductor would drop the link or specific pairs, not throttle to a precise rate.</span><span class='qd'><b>A DNS failure</b>: DNS resolves names and cannot impose a throughput ceiling on a circuit.</span>" },
  { id:"D5-052", domain:5, obj:"5.4", diff:"easy", q:"Which term describes the variation in delay between received packets?", options:["Throughput","Attenuation","Latency","Jitter"], answer:3, explain:"<strong>Jitter</strong> is correct, since it is defined as the variation in delay between received packets.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Latency</b>: Latency is the absolute delay of packets, not the variation between them.</span><span class='qd'><b>Throughput</b>: Throughput measures data volume per unit time, not delay variation.</span><span class='qd'><b>Attenuation</b>: Attenuation is physical signal loss over distance, unrelated to packet timing.</span>" },
  { id:"D5-053", domain:5, obj:"5.5", diff:"medium", q:"A switch port shows hundreds of MAC addresses on a single access port, and the CAM table is full. What attack is MOST likely occurring?", options:["MAC flooding","DNS poisoning","ARP spoofing on the gateway","DHCP starvation"], answer:0, explain:"<strong>MAC flooding</strong> is correct, since flooding the CAM table with bogus source MACs on one port aims to overflow it and force the switch to flood frames.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS poisoning</b>: DNS poisoning falsifies name records and does not fill a switch CAM table.</span><span class='qd'><b>ARP spoofing on the gateway</b>: ARP spoofing maps an IP to the wrong MAC for interception, not a flood of many MACs filling the CAM table.</span><span class='qd'><b>DHCP starvation</b>: DHCP starvation exhausts the address pool, a Layer 3 attack distinct from overflowing the MAC table.</span>" },
  { id:"D5-054", domain:5, obj:"5.5", diff:"hard", q:"Users report traffic to the gateway is being intercepted. Captures show the gateway IP mapped to an attacker's MAC. What is happening?", options:["DHCP exhaustion","ARP spoofing/poisoning","Attenuation","A duplex mismatch"], answer:1, explain:"<strong>ARP spoofing/poisoning</strong> is correct, since mapping the gateway IP to the attacker's MAC redirects traffic through the attacker for on-path interception.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Attenuation</b>: Attenuation is physical signal loss and cannot reassign an IP-to-MAC mapping.</span><span class='qd'><b>A duplex mismatch</b>: A duplex mismatch degrades performance with collisions, not redirect the gateway's MAC.</span><span class='qd'><b>DHCP exhaustion</b>: DHCP exhaustion denies addresses to clients and does not poison ARP caches.</span>" },
  { id:"D5-055", domain:5, obj:"5.5", diff:"medium", q:"An attacker rapidly requests every address in the DHCP scope to deny service to legitimate clients. This is:", options:["DNS tunneling","Smurf attack","DHCP starvation","MAC flooding"], answer:2, explain:"<strong>DHCP starvation</strong> is correct, since rapidly requesting every address in the scope depletes the pool and denies service to legitimate clients.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>MAC flooding</b>: MAC flooding targets the switch CAM table, not the DHCP address pool.</span><span class='qd'><b>DNS tunneling</b>: DNS tunneling smuggles data inside DNS queries and does not consume DHCP leases.</span><span class='qd'><b>Smurf attack</b>: A Smurf attack uses spoofed ICMP broadcasts to flood a victim, not exhaust an address scope.</span>" },
  { id:"D5-056", domain:5, obj:"5.5", diff:"hard", q:"A user is redirected to a fake banking site despite typing the correct URL. Captures show wrong IPs returned for the domain. What is the MOST likely cause?", options:["Attenuation","A bad SFP","A split pair","DNS poisoning/spoofing"], answer:3, explain:"<strong>DNS poisoning/spoofing</strong> is correct, since injecting false records makes a correctly typed domain resolve to a malicious IP.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Attenuation</b>: Attenuation is physical signal loss and cannot alter DNS responses.</span><span class='qd'><b>A bad SFP</b>: A failed transceiver disrupts a physical link, not return forged IP addresses for a domain.</span><span class='qd'><b>A split pair</b>: A split pair is a wiring fault causing crosstalk, unrelated to falsified name resolution.</span>" },
  { id:"D5-057", domain:5, obj:"5.5", diff:"medium", q:"A device plugged into an access port is denied network access until it authenticates. Which security mechanism is MOST likely in use?", options:["802.1X port-based authentication","Spanning Tree Protocol","Jumbo frames","Link aggregation"], answer:0, explain:"<strong>802.1X port-based authentication</strong> is correct, since it withholds network access on a port until the connecting device successfully authenticates.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Spanning Tree Protocol</b>: STP prevents Layer 2 loops and has no authentication role.</span><span class='qd'><b>Jumbo frames</b>: Jumbo frames increase the MTU for efficiency and do not gate access.</span><span class='qd'><b>Link aggregation</b>: Link aggregation bundles ports for bandwidth and redundancy, not for authenticating devices.</span>" },
  { id:"D5-058", domain:5, obj:"5.5", diff:"hard", q:"After a new switch is added, a broadcast storm takes down the segment. Which protocol failure or misconfiguration is the MOST likely cause?", options:["An expired DHCP lease","A Layer 2 loop with Spanning Tree disabled or misconfigured","A DNS misconfiguration","An NTP drift"], answer:1, explain:"<strong>A Layer 2 loop with Spanning Tree disabled or misconfigured</strong> is correct, since looping frames circulate endlessly and produce a broadcast storm.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A DNS misconfiguration</b>: A DNS issue affects name resolution and cannot generate a Layer 2 broadcast storm.</span><span class='qd'><b>An NTP drift</b>: NTP drift desynchronizes clocks and has no effect on broadcast traffic.</span><span class='qd'><b>An expired DHCP lease</b>: An expired lease affects one client's addressing, not flood the whole segment.</span>" },
  { id:"D5-059", domain:5, obj:"5.5", diff:"medium", q:"A rogue access point with the corporate SSID lures clients to connect. This threat is BEST described as:", options:["ARP aging","An open cable","An evil twin","A duplex mismatch"], answer:2, explain:"<strong>An evil twin</strong> is correct, since a rogue access point broadcasting the legitimate SSID lures clients into connecting to the attacker.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A duplex mismatch</b>: A duplex mismatch is a wired Ethernet negotiation problem, not a wireless impersonation attack.</span><span class='qd'><b>ARP aging</b>: ARP aging is the normal expiry of cached IP-to-MAC entries, not a malicious rogue AP.</span><span class='qd'><b>An open cable</b>: An open cable is a physical break in copper, unrelated to a fraudulent wireless SSID.</span>" },
  { id:"D5-060", domain:5, obj:"5.5", diff:"hard", q:"A switch port unexpectedly enters err-disabled state after a user connects a small unmanaged switch. What feature MOST likely triggered this?", options:["DNS failure","Attenuation","Jitter","Port security violation (too many MAC addresses)"], answer:3, explain:"<strong>Port security violation (too many MAC addresses)</strong> is correct, since an unmanaged switch presents multiple MACs that exceed the per-port limit and err-disable the port.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS failure</b>: A DNS failure affects name resolution and cannot place a switch port into err-disabled state.</span><span class='qd'><b>Attenuation</b>: Attenuation is physical signal loss and does not trigger port security actions.</span><span class='qd'><b>Jitter</b>: Jitter is delay variation affecting real-time traffic, not a cause of a port being disabled.</span>" }
);
NETPLUS.questions.push(
  { id:"D5-061", domain:5, obj:"5.3", diff:"easy", q:"Users can reach websites by IP address but not by name. Which service is most likely failing?", options:["DNS","NTP","SNMP","DHCP"], answer:0, explain:"Working by IP but not by hostname isolates the failure to name resolution, which is the job of <code class='mono'>DNS</code>.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DHCP</b>: DHCP hands out IP addressing, and since hosts already have working IP connectivity the lease is clearly functioning.</span><span class='qd'><b>NTP</b>: NTP synchronizes clocks and has no role in translating names to addresses.</span><span class='qd'><b>SNMP</b>: SNMP is used to monitor and manage devices, not to resolve hostnames for clients.</span>" },
  { id:"D5-062", domain:5, obj:"5.3", diff:"easy", q:"A workstation has an IP address of 169.254.18.5. What does this indicate?", options:["The DHCP server assigned a reserved lease","APIPA self-assignment because no DHCP response was received","The device is on the management VLAN","A static address was set"], answer:1, explain:"The 169.254.0.0/16 range is APIPA, which a host self-assigns when it sends DHCP DISCOVER messages and receives no reply.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A static address was set</b>: An administrator would not manually pick a link-local 169.254 address, which is reserved for automatic fallback only.</span><span class='qd'><b>The DHCP server assigned a reserved lease</b>: A reserved (reservation) lease comes from the configured scope and would be a normal routable address, not a 169.254 address.</span><span class='qd'><b>The device is on the management VLAN</b>: VLAN membership does not by itself produce a 169.254 address; that address only appears when DHCP fails.</span>" },
  { id:"D5-063", domain:5, obj:"5.3", diff:"medium", q:"Which command on Windows releases and renews a DHCP-assigned address?", options:["arp -d","ipconfig /flushdns","ipconfig /release then ipconfig /renew","netsh winsock reset"], answer:2, explain:"<code class='mono'>ipconfig /release</code> drops the current lease and <code class='mono'>ipconfig /renew</code> requests a fresh one from the DHCP server.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>ipconfig /flushdns</b>: This clears the DNS resolver cache and has no effect on the DHCP lease.</span><span class='qd'><b>netsh winsock reset</b>: This rebuilds the Winsock catalog to fix socket/LSP corruption, not to obtain a new DHCP lease.</span><span class='qd'><b>arp -d</b>: This deletes ARP cache entries, which is unrelated to DHCP address assignment.</span>" },
  { id:"D5-064", domain:5, obj:"5.3", diff:"medium", q:"A user reports stale results when browsing to a recently re-IP'd internal server. Which command clears the local resolver cache?", options:["nslookup -refresh","ipconfig /registerdns","route flush","ipconfig /flushdns"], answer:3, explain:"<code class='mono'>ipconfig /flushdns</code> empties the local DNS resolver cache so the next lookup queries the server and picks up the new IP.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>nslookup -refresh</b>: This is not a valid nslookup option and does not clear the Windows resolver cache.</span><span class='qd'><b>ipconfig /registerdns</b>: This forces the client to re-register its own dynamic DNS record, not to clear cached lookups it has stored.</span><span class='qd'><b>route flush</b>: This clears the IP routing table, which has nothing to do with cached DNS records.</span>" },
  { id:"D5-065", domain:5, obj:"5.3", diff:"medium", q:"Which tool queries a specific DNS server directly to test record resolution?", options:["nslookup","netstat","tracert","arp"], answer:0, explain:"<code class='mono'>nslookup</code> (or <code class='mono'>dig</code>) lets you direct a query at a chosen DNS server and inspect the returned records.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>arp</b>: arp displays and edits IP-to-MAC mappings on the local segment, not DNS records.</span><span class='qd'><b>netstat</b>: netstat shows active connections, listening ports, and routing tables, not DNS resolution.</span><span class='qd'><b>tracert</b>: tracert maps the Layer 3 hops to a destination and does not query DNS servers for specific records.</span>" },
  { id:"D5-066", domain:5, obj:"5.3", diff:"hard", q:"A host can ping its default gateway and other devices in its own subnet, but cannot reach any remote subnet. Which configuration item is MOST likely wrong?", options:["DNS server address","Default gateway routing on the host's gateway","The host's MAC address","Subnet mask"], answer:1, explain:"Local subnet connectivity works, so the host addressing is fine; the inability to reach any remote subnet points to a routing problem at or beyond the gateway.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Subnet mask</b>: A wrong mask would typically break communication with some local hosts too, but here the entire local subnet is reachable.</span><span class='qd'><b>DNS server address</b>: DNS only affects name resolution; the host cannot reach remote subnets even by IP, so this is a routing issue, not a naming one.</span><span class='qd'><b>The host's MAC address</b>: A host always has a usable MAC for its NIC, and MAC addressing is only relevant within the local segment, not for remote routing.</span>" },
  { id:"D5-067", domain:5, obj:"5.3", diff:"medium", q:"A PC was moved to a port that an administrator reassigned to the wrong VLAN. What is the most likely symptom?", options:["Duplex mismatch errors only","Faster link speed","Receives an IP in the wrong subnet or no DHCP lease","DNS works but DHCP does not for everyone"], answer:2, explain:"On the wrong VLAN the host reaches the wrong DHCP scope or none at all, so it receives an unexpected subnet or falls back to APIPA.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Faster link speed</b>: VLAN assignment is a logical Layer 2 grouping and has no effect on negotiated link speed.</span><span class='qd'><b>DNS works but DHCP does not for everyone</b>: A single misassigned port affects only that PC, not DHCP for every user on the network.</span><span class='qd'><b>Duplex mismatch errors only</b>: Duplex mismatches are a physical-layer negotiation issue unrelated to which VLAN the port belongs to.</span>" },
  { id:"D5-068", domain:5, obj:"5.3", diff:"easy", q:"Which command displays the current IP address, subnet mask, and default gateway on Windows?", options:["ifconfig","ip addr","netstat -r","ipconfig"], answer:3, explain:"<code class='mono'>ipconfig</code> displays interface addressing including IP, mask, and gateway on Windows.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>ifconfig</b>: ifconfig is the legacy Linux/Unix command and is not available on standard Windows.</span><span class='qd'><b>ip addr</b>: ip addr is the modern Linux iproute2 command, not a Windows command.</span><span class='qd'><b>netstat -r</b>: netstat -r prints the routing table, not the per-interface IP, mask, and gateway summary.</span>" },
  { id:"D5-069", domain:5, obj:"5.3", diff:"medium", q:"Two devices on the same LAN have the same IP address. Which message will a Windows host typically display?", options:["IP address conflict detected","DNS server not responding","Default gateway unreachable","Network cable unplugged"], answer:0, explain:"Duplicate IPv4 addresses on a segment trigger an IP address conflict warning, and one or both hosts lose reliable connectivity.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Network cable unplugged</b>: That message indicates a physical link-down condition, not a duplicate address while the link is up.</span><span class='qd'><b>DNS server not responding</b>: A DNS failure affects name resolution, not the Layer 3 address-conflict detection triggered by a duplicate IP.</span><span class='qd'><b>Default gateway unreachable</b>: A duplicate IP produces a conflict notice specifically, whereas an unreachable gateway is a separate routing/reachability symptom.</span>" },
  { id:"D5-070", domain:5, obj:"5.3", diff:"hard", q:"Half of the clients in a /24 receive valid leases while the rest get APIPA addresses. The DHCP server is reachable. What is the MOST likely cause?", options:["DNS scavenging is disabled","The DHCP scope has been exhausted or is too small","The default gateway is misconfigured","The MTU is set too low"], answer:1, explain:"If the server is reachable but only some clients get leases, the address pool has run out, forcing the remaining clients to self-assign APIPA.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS scavenging is disabled</b>: Scavenging only cleans up stale DNS records and has no bearing on whether DHCP can hand out addresses.</span><span class='qd'><b>The default gateway is misconfigured</b>: A bad gateway would break routing for clients that already have leases, not stop half of them from getting an address.</span><span class='qd'><b>The MTU is set too low</b>: MTU affects frame size and fragmentation, not the number of leases available in a DHCP scope.</span>" },
  { id:"D5-071", domain:5, obj:"5.3", diff:"medium", q:"A DHCP relay (IP helper) is missing on a router interface. What happens to clients on that subnet?", options:["They get the lease but no gateway","They receive duplicate IPs","They cannot reach the DHCP server on another subnet and fall back to APIPA","Their DNS suffix is wrong"], answer:2, explain:"Without an IP helper/relay, DHCP broadcasts do not cross the router, so clients on the remote subnet get no lease and self-assign APIPA.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>They receive duplicate IPs</b>: A missing relay means no leases are issued at all, so there is nothing to duplicate.</span><span class='qd'><b>Their DNS suffix is wrong</b>: The DNS suffix is a lease option that is only delivered once DHCP succeeds, which it cannot here.</span><span class='qd'><b>They get the lease but no gateway</b>: Without a relay the broadcast never reaches the server, so clients get no lease whatsoever, not a partial one.</span>" },
  { id:"D5-072", domain:5, obj:"5.3", diff:"medium", q:"Which DNS record type maps a hostname to an IPv6 address?", options:["MX","PTR","A","AAAA"], answer:3, explain:"An <code class='mono'>AAAA</code> record resolves a hostname to a 128-bit IPv6 address.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A</b>: An A record maps a hostname to a 32-bit IPv4 address, not IPv6.</span><span class='qd'><b>MX</b>: An MX record identifies a domain's mail exchanger, not a host address.</span><span class='qd'><b>PTR</b>: A PTR record performs reverse lookups, mapping an IP back to a name rather than a name to an IPv6 address.</span>" },
  { id:"D5-073", domain:5, obj:"5.3", diff:"hard", q:"Email delivery to a domain fails while web browsing works fine. Which DNS record should you verify FIRST?", options:["MX record","TXT record","A record","CNAME record"], answer:0, explain:"Mail routing depends on the <code class='mono'>MX</code> record, so a missing or wrong MX breaks email while leaving web (A/CNAME) resolution intact.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A record</b>: The A record maps the web host's name to an IPv4 address, and web browsing already works, so it is fine.</span><span class='qd'><b>CNAME record</b>: A CNAME is an alias to another name and governs web aliases, not the mail-routing decision that MX controls.</span><span class='qd'><b>TXT record</b>: TXT records carry SPF/DKIM and other text data that affect mail authentication, but the actual delivery target is set by MX.</span>" },
  { id:"D5-074", domain:5, obj:"5.3", diff:"medium", q:"A user's PC has the wrong DNS suffix and cannot resolve short internal hostnames, though FQDNs work. What should be corrected?", options:["The default gateway","The DNS search/suffix list","The subnet mask","The ARP cache"], answer:1, explain:"Short names depend on the DNS suffix being appended to form an FQDN, so correcting the suffix/search list restores short-name resolution.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The default gateway</b>: The gateway routes traffic and would not selectively break short names while FQDNs continue to resolve.</span><span class='qd'><b>The subnet mask</b>: An incorrect mask affects which hosts are treated as local, not how unqualified names are expanded into FQDNs.</span><span class='qd'><b>The ARP cache</b>: ARP maps IP to MAC at Layer 2 and plays no part in appending DNS suffixes to short names.</span>" },
  { id:"D5-075", domain:5, obj:"5.3", diff:"easy", q:"Which Linux command shows the system's routing table?", options:["ss -t","arp -a","ip route","dig +trace"], answer:2, explain:"<code class='mono'>ip route</code> (or <code class='mono'>route -n</code>) lists the kernel routing table including the default gateway.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>dig +trace</b>: dig +trace walks the DNS delegation chain from the root servers, not the system routing table.</span><span class='qd'><b>ss -t</b>: ss -t lists open TCP sockets and connections, not routes.</span><span class='qd'><b>arp -a</b>: arp -a shows cached IP-to-MAC mappings, not Layer 3 routes.</span>" },
  { id:"D5-076", domain:5, obj:"5.4", diff:"easy", q:"A VoIP call has choppy, robotic audio while data transfers fine. Which performance metric is most likely the culprit?", options:["Throughput","DNS latency","MTU size","Jitter"], answer:3, explain:"Variation in packet inter-arrival timing (jitter) disrupts the steady playback real-time audio needs, even when overall throughput is adequate.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Throughput</b>: The scenario states data transfers fine, so available throughput is sufficient and is not the cause.</span><span class='qd'><b>DNS latency</b>: DNS only affects the initial name lookup before a call, not the choppiness of the audio stream once connected.</span><span class='qd'><b>MTU size</b>: VoIP uses small packets well under any standard MTU, so frame size is not what makes the audio robotic.</span>" },
  { id:"D5-077", domain:5, obj:"5.4", diff:"easy", q:"Which metric describes the round-trip time it takes a packet to travel to a destination and back?", options:["Latency","Bandwidth","Packet loss","Jitter"], answer:0, explain:"Latency is the round-trip delay for a packet to reach a destination and return, and high latency hurts interactive and real-time applications.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Jitter</b>: Jitter is the variation in latency between packets, not the round-trip time itself.</span><span class='qd'><b>Bandwidth</b>: Bandwidth is the link's capacity in bits per second, not a measure of delay.</span><span class='qd'><b>Packet loss</b>: Packet loss counts packets that never arrive, which is a reliability metric, not a timing measurement.</span>" },
  { id:"D5-078", domain:5, obj:"5.4", diff:"medium", q:"Which command shows per-hop latency and packet loss over time to help locate where loss occurs on a path?", options:["ping -t","pathping (or mtr)","arp -a","netstat -an"], answer:1, explain:"<code class='mono'>pathping</code> on Windows and <code class='mono'>mtr</code> on Linux combine traceroute and ping to report per-hop loss and latency over time.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>ping -t</b>: A continuous ping measures loss and latency only to the final destination, not for each intermediate hop.</span><span class='qd'><b>arp -a</b>: arp -a shows cached IP-to-MAC mappings and provides no path or loss statistics.</span><span class='qd'><b>netstat -an</b>: netstat -an lists local connections and listening ports, not per-hop path performance.</span>" },
  { id:"D5-079", domain:5, obj:"5.4", diff:"medium", q:"An interface shows a steadily rising count of CRC errors. What is the most likely cause?", options:["A DNS misconfiguration","Incorrect default gateway","A bad cable or electromagnetic interference","An expired TLS certificate"], answer:2, explain:"CRC and frame errors point to data corrupted in transit, which is a physical-layer problem such as a damaged cable, bad connector, or electromagnetic interference.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Incorrect default gateway</b>: A wrong gateway is a Layer 3 routing misconfiguration and does not corrupt frames into CRC errors.</span><span class='qd'><b>An expired TLS certificate</b>: A certificate problem is an application-layer trust issue and has no effect on physical-layer error counters.</span><span class='qd'><b>A DNS misconfiguration</b>: DNS affects name resolution, not the integrity of bits on the wire that CRC checks.</span>" },
  { id:"D5-080", domain:5, obj:"5.4", diff:"hard", q:"A 1 Gbps link is mysteriously slow and the interface shows many late collisions and runts. What is the MOST likely cause?", options:["Exhausted DHCP scope","Wrong DNS server","MTU mismatch","Duplex mismatch between the two ends"], answer:3, explain:"Late collisions and runts on a modern link are classic signs of a duplex mismatch, where one side runs half duplex and the other full.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>MTU mismatch</b>: An MTU mismatch produces oversized/dropped frames or fragmentation, not late collisions and runts.</span><span class='qd'><b>Exhausted DHCP scope</b>: A drained DHCP pool prevents address assignment but does not generate collision and runt counters on an established link.</span><span class='qd'><b>Wrong DNS server</b>: A bad DNS server breaks name resolution and has no effect on Layer 1/2 collision statistics.</span>" },
  { id:"D5-081", domain:5, obj:"5.4", diff:"medium", q:"Which tool measures available end-to-end throughput between two endpoints you control?", options:["iperf","nslookup","arp","route"], answer:0, explain:"<code class='mono'>iperf</code>/<code class='mono'>iperf3</code> generates traffic between a client and server you control to measure achievable end-to-end throughput.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>nslookup</b>: nslookup tests DNS resolution and does not generate traffic to measure throughput.</span><span class='qd'><b>arp</b>: arp manages local IP-to-MAC mappings and has no throughput-measurement function.</span><span class='qd'><b>route</b>: route displays or modifies the routing table, not link bandwidth or throughput.</span>" },
  { id:"D5-082", domain:5, obj:"5.4", diff:"medium", q:"A continuous ping shows occasional 'Request timed out' lines mixed with replies. Which metric does this indicate?", options:["Jitter","Packet loss","High bandwidth","Low latency"], answer:1, explain:"Intermittent missing replies amid successful ones indicate packets are being dropped along the path, which is packet loss.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Jitter</b>: Jitter shows up as varying reply times, not as replies that fail to return at all.</span><span class='qd'><b>High bandwidth</b>: High bandwidth is a capacity figure and would not cause timed-out pings.</span><span class='qd'><b>Low latency</b>: Low latency is a positive condition; timed-out replies indicate loss, not fast response.</span>" },
  { id:"D5-083", domain:5, obj:"5.4", diff:"hard", q:"An uplink that is regularly saturated to 100% utilization during business hours causes slowness for everyone. This is BEST described as what?", options:["An ARP poisoning attack","A broadcast storm","A bottleneck","A duplex mismatch"], answer:2, explain:"A consistently saturated link that throttles all downstream traffic is a bandwidth bottleneck.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A broadcast storm</b>: A broadcast storm is uncontrolled flooding of broadcast frames, usually from a loop, not steady legitimate utilization during business hours.</span><span class='qd'><b>A duplex mismatch</b>: A duplex mismatch causes collisions and errors on one link, not 100% sustained utilization affecting everyone.</span><span class='qd'><b>An ARP poisoning attack</b>: ARP poisoning redirects traffic by spoofing MAC mappings; it does not present as predictable peak-hour saturation.</span>" },
  { id:"D5-084", domain:5, obj:"5.4", diff:"medium", q:"Jumbo frames are enabled on a server but a switch in the path is not configured for them. What is the likely result?", options:["Duplicate IP addresses","DNS resolution failures","Faster transfers","Fragmentation or dropped oversized frames and poor performance"], answer:3, explain:"When the path MTU is inconsistent, oversized jumbo frames are dropped or fragmented, degrading throughput and reliability.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Faster transfers</b>: A mismatch hurts performance rather than helping it, because the oversized frames cannot pass cleanly.</span><span class='qd'><b>Duplicate IP addresses</b>: Frame-size mismatches are a Layer 2 MTU issue and do not cause two hosts to share an IP.</span><span class='qd'><b>DNS resolution failures</b>: MTU mismatches affect frame delivery, not name resolution.</span>" },
  { id:"D5-085", domain:5, obj:"5.4", diff:"medium", q:"Which command on Windows displays interface-level statistics including errors and discards?", options:["netstat -e","ipconfig /all","tracert","nslookup"], answer:0, explain:"<code class='mono'>netstat -e</code> displays interface statistics such as bytes, unicast/non-unicast packets, errors, and discards.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>ipconfig /all</b>: ipconfig /all shows configuration details like addresses, DNS, and MAC, not running error and discard counters.</span><span class='qd'><b>tracert</b>: tracert maps the hop-by-hop path to a destination and reports no interface error statistics.</span><span class='qd'><b>nslookup</b>: nslookup queries DNS and provides no interface-level statistics.</span>" },
  { id:"D5-086", domain:5, obj:"5.4", diff:"easy", q:"Which metric represents the maximum theoretical data rate of a link, often advertised in Mbps or Gbps?", options:["Latency","Bandwidth","Jitter","Packet loss"], answer:1, explain:"Bandwidth is the link's maximum theoretical capacity, advertised in Mbps or Gbps, while actual usable throughput is typically lower.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Latency</b>: Latency is the delay a packet experiences, not the rated capacity of the link.</span><span class='qd'><b>Jitter</b>: Jitter is the variation in latency, not a data-rate figure.</span><span class='qd'><b>Packet loss</b>: Packet loss measures dropped packets, not the maximum data rate.</span>" },
  { id:"D5-087", domain:5, obj:"5.4", diff:"hard", q:"Traceroute shows latency jumping from 5 ms to 180 ms at one specific hop and staying high to the destination. What does this MOST likely indicate?", options:["A duplicate IP","A DNS failure","Congestion or a slow link beginning at that hop","An expired certificate"], answer:2, explain:"A sustained latency jump at one hop that persists to the destination points to congestion or a slow link starting at that point in the path.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A DNS failure</b>: DNS resolution happens before the trace and would prevent reaching the destination, not produce a clean latency rise mid-path.</span><span class='qd'><b>An expired certificate</b>: A certificate problem is an application-layer trust issue that does not appear in traceroute hop timings.</span><span class='qd'><b>A duplicate IP</b>: A duplicate IP causes local conflicts and intermittent reachability, not a steady latency increase at one specific hop.</span>" },
  { id:"D5-088", domain:5, obj:"5.4", diff:"medium", q:"A switch port shows increasing input discards while utilization is high. What does this most likely indicate?", options:["DNS is down","A certificate expired","The cable is unplugged","The interface buffers are overrun due to congestion"], answer:3, explain:"Input discards under high utilization indicate the interface buffers are overrun by congestion and the port cannot keep up.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The cable is unplugged</b>: An unplugged cable produces a link-down state with no traffic, not high utilization with rising discards.</span><span class='qd'><b>DNS is down</b>: A DNS outage affects name resolution and would not increment interface input discard counters.</span><span class='qd'><b>A certificate expired</b>: An expired certificate is an application-layer trust error unrelated to switch buffer overruns.</span>" },
  { id:"D5-089", domain:5, obj:"5.4", diff:"easy", q:"Which term describes packets that never reach their destination and must be retransmitted?", options:["Packet loss","Throughput","Latency","Jitter"], answer:0, explain:"Packet loss is data that fails to arrive, forcing retransmissions that further reduce effective throughput.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Latency</b>: Latency is the delay packets experience while still arriving, not packets that never reach the destination.</span><span class='qd'><b>Jitter</b>: Jitter is the variation in arrival timing of packets that do arrive, not lost ones.</span><span class='qd'><b>Throughput</b>: Throughput is the rate of successfully delivered data, the opposite of packets that must be retransmitted.</span>" },
  { id:"D5-090", domain:5, obj:"5.5", diff:"medium", q:"An ACL change blocked legitimate traffic to a web server. Which tool best confirms whether a specific TCP port is now being filtered?", options:["route","nmap","arp","ipconfig"], answer:1, explain:"<code class='mono'>nmap</code> can probe specific ports and report whether they are open, closed, or filtered, confirming whether an ACL is now blocking the traffic.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>arp</b>: arp inspects local IP-to-MAC mappings and cannot test whether a remote TCP port is filtered.</span><span class='qd'><b>ipconfig</b>: ipconfig shows local interface configuration and performs no port testing.</span><span class='qd'><b>route</b>: route displays or edits the routing table and does not probe TCP port reachability.</span>" },
  { id:"D5-091", domain:5, obj:"5.5", diff:"easy", q:"Users get a browser warning that a website's certificate is not valid. The site was fine yesterday. What is the most likely cause?", options:["A broadcast storm","A rogue DHCP server","An expired TLS certificate","A duplex mismatch"], answer:2, explain:"A certificate that worked yesterday but now triggers a warning has most likely passed its validity date and needs renewal and reinstallation.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A rogue DHCP server</b>: A rogue DHCP server produces wrong addressing and gateway issues, not a certificate validity warning on a previously working site.</span><span class='qd'><b>A duplex mismatch</b>: A duplex mismatch causes collisions and slow links at Layer 1/2, not browser certificate errors.</span><span class='qd'><b>A broadcast storm</b>: A broadcast storm floods the network and degrades connectivity but does not generate certificate warnings.</span>" },
  { id:"D5-092", domain:5, obj:"5.5", diff:"medium", q:"Clients suddenly receive IP addresses from an unexpected subnet and lose internet access. Which threat is most likely?", options:["Expired certificate","MTU mismatch","DNS scavenging","Rogue DHCP server"], answer:3, explain:"An unauthorized (rogue) DHCP server handing out bad leases causes clients to receive wrong subnets and gateways, breaking internet access.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Expired certificate</b>: An expired certificate produces trust warnings on secure sites, not IP addresses from an unexpected subnet.</span><span class='qd'><b>MTU mismatch</b>: An MTU mismatch causes frame fragmentation or drops, not clients pulling addresses from the wrong scope.</span><span class='qd'><b>DNS scavenging</b>: DNS scavenging only removes stale DNS records and has no effect on which subnet clients are addressed in.</span>" },
  { id:"D5-093", domain:5, obj:"5.5", diff:"hard", q:"Two hosts intermittently lose connectivity and the gateway's MAC keeps changing in the ARP cache. Which attack is MOST likely?", options:["ARP spoofing/poisoning","Certificate pinning failure","DHCP exhaustion","DNS poisoning"], answer:0, explain:"A gateway MAC that keeps flipping between values signals ARP spoofing, where an attacker poisons the cache to impersonate the gateway.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS poisoning</b>: DNS poisoning corrupts name-to-IP answers and would not cause the gateway's MAC address to change in the ARP cache.</span><span class='qd'><b>Certificate pinning failure</b>: Pinning failures are an application-layer TLS trust problem, unrelated to fluctuating ARP entries.</span><span class='qd'><b>DHCP exhaustion</b>: DHCP exhaustion drains the lease pool so clients cannot get addresses; it does not alter a gateway's cached MAC.</span>" },
  { id:"D5-094", domain:5, obj:"5.5", diff:"medium", q:"Which command lets you inspect the local ARP table to spot a suspicious IP-to-MAC mapping?", options:["ipconfig /flushdns","arp -a","nslookup","tracert"], answer:1, explain:"<code class='mono'>arp -a</code> lists cached IP-to-MAC mappings, making it useful for spotting spoofing or a duplicate gateway MAC.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>nslookup</b>: nslookup queries DNS for name resolution and shows no ARP table entries.</span><span class='qd'><b>tracert</b>: tracert maps the path of routed hops and does not display local IP-to-MAC mappings.</span><span class='qd'><b>ipconfig /flushdns</b>: This clears the DNS resolver cache, not the ARP table you need to inspect.</span>" },
  { id:"D5-095", domain:5, obj:"5.5", diff:"hard", q:"After deploying a new firewall rule, internal users can browse the web but cannot reach a partner site over a specific port. Which is the BEST first step to confirm the rule is the cause?", options:["Flush DNS on the server","Reboot all client PCs","Review the ACL/firewall rule order and hit counters","Renew the TLS certificate"], answer:2, explain:"Because the firewall change immediately preceded the failure, reviewing the ACL/rule order and hit counters confirms whether that rule is blocking the traffic.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Reboot all client PCs</b>: Rebooting clients is disruptive and pointless when the change was made on the firewall, not the workstations.</span><span class='qd'><b>Renew the TLS certificate</b>: The symptom is a port being blocked, not a certificate trust error, so certificate renewal addresses the wrong layer.</span><span class='qd'><b>Flush DNS on the server</b>: Name resolution is not the issue when other browsing works; the new firewall rule is the likely cause.</span>" },
  { id:"D5-096", domain:5, obj:"5.5", diff:"medium", q:"An unauthorized wireless access point is discovered plugged into a wall jack. What is this called?", options:["A captive portal","A repeater","A honeypot","A rogue access point"], answer:3, explain:"An unsanctioned access point physically attached to the corporate network is a rogue access point and a serious security risk.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A honeypot</b>: A honeypot is a deliberately deployed decoy to lure and study attackers, not an unauthorized AP someone plugged in.</span><span class='qd'><b>A captive portal</b>: A captive portal is a web authentication page presented before granting access, not a physical rogue device.</span><span class='qd'><b>A repeater</b>: A repeater is a sanctioned device that extends signal range; the scenario describes an unauthorized AP, not range extension.</span>" },
  { id:"D5-097", domain:5, obj:"5.5", diff:"medium", q:"Which tool would you use to scan a subnet to discover unexpected/rogue devices and their open ports?", options:["nmap","arp -d","route print","ipconfig /all"], answer:0, explain:"<code class='mono'>nmap</code> performs host discovery and port scanning across a subnet, helping identify rogue or unknown devices and their open ports.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>arp -d</b>: arp -d deletes entries from the local ARP cache and performs no network discovery.</span><span class='qd'><b>route print</b>: route print shows the local routing table, not devices present on a subnet.</span><span class='qd'><b>ipconfig /all</b>: ipconfig /all displays the local host's configuration only, not other devices on the network.</span>" },
  { id:"D5-098", domain:5, obj:"5.5", diff:"hard", q:"A site-to-site VPN drops after a firmware update. The tunnel negotiates phase 1 but fails phase 2. What should you check FIRST?", options:["DNS suffix on clients","Mismatched IPsec transform/encryption settings between peers","The switch MTU","The DHCP scope size"], answer:1, explain:"Phase 1 succeeding but phase 2 failing points to mismatched IPsec parameters such as the transform set, PFS group, or proxy IDs between the peers.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>DNS suffix on clients</b>: A client DNS suffix has nothing to do with IPsec tunnel negotiation between two peer firewalls.</span><span class='qd'><b>The switch MTU</b>: A switch MTU might affect large-packet delivery but would not specifically cause phase 2 to fail after phase 1 completes.</span><span class='qd'><b>The DHCP scope size</b>: DHCP scope sizing is about address pool capacity and is unrelated to IKE phase negotiation.</span>" },
  { id:"D5-099", domain:5, obj:"5.5", diff:"easy", q:"A client cannot connect to the VPN and receives an authentication failure. What is the most likely cause?", options:["A broadcast storm","MTU mismatch","Incorrect credentials or an expired/invalid certificate","A duplex mismatch"], answer:2, explain:"VPN authentication failures most commonly stem from incorrect credentials or an expired/invalid client certificate.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>MTU mismatch</b>: An MTU mismatch causes fragmentation or stalled large transfers, not an explicit authentication failure message.</span><span class='qd'><b>A duplex mismatch</b>: A duplex mismatch is a Layer 1/2 performance problem and does not produce VPN authentication errors.</span><span class='qd'><b>A broadcast storm</b>: A broadcast storm degrades the local network but would not specifically reject VPN credentials.</span>" },
  { id:"D5-100", domain:5, obj:"5.5", diff:"medium", q:"Port security shut down a switch port after a workstation was unplugged and an unknown device was connected. What state is the port in?", options:["Routing","Spanning","Trunking","Err-disabled"], answer:3, explain:"A port-security violation places the interface in err-disabled state, which must be cleared (and the cause resolved) before the port forwards again.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Trunking</b>: Trunking is a configured operational mode that carries multiple VLANs, not a state triggered by a security violation.</span><span class='qd'><b>Routing</b>: Routing is a Layer 3 forwarding function, not the disabled state a violated access port enters.</span><span class='qd'><b>Spanning</b>: Spanning is not a port-security state; it loosely refers to spanning tree operation, which does not shut a port for a MAC violation.</span>" },
  { id:"D5-101", domain:5, obj:"5.1", diff:"easy", q:"Which step in the troubleshooting methodology comes immediately after identifying the problem?", options:["Establish a theory of probable cause","Document findings","Verify full system functionality","Implement the solution"], answer:0, explain:"After identifying the problem, the CompTIA methodology has you establish a theory of probable cause, which you then test.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Implement the solution</b>: Implementing comes later, only after a theory has been formed and confirmed and a plan of action established.</span><span class='qd'><b>Document findings</b>: Documentation is the final step, performed after the issue is resolved and verified.</span><span class='qd'><b>Verify full system functionality</b>: Verification follows implementation of the fix, not the initial problem identification.</span>" },
  { id:"D5-102", domain:5, obj:"5.1", diff:"medium", q:"You have implemented a fix. According to the methodology, what should you do before documenting?", options:["Escalate to a vendor","Verify full system functionality and implement preventive measures","Establish a new theory","Gather more symptoms"], answer:1, explain:"After implementing the solution you verify full system functionality and put preventive measures in place, and only then document.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Escalate to a vendor</b>: Escalation happens when a theory cannot be confirmed or resolved, not after a fix has already been implemented.</span><span class='qd'><b>Establish a new theory</b>: A new theory is only needed if the prior theory was disproven, not after a working fix is in place.</span><span class='qd'><b>Gather more symptoms</b>: Gathering symptoms belongs to the problem-identification phase, well before a fix is implemented.</span>" },
  { id:"D5-103", domain:5, obj:"5.1", diff:"medium", q:"During troubleshooting, your first theory is disproven by testing. What is the correct next action?", options:["Reboot every device","Document the failure and close the ticket","Establish a new theory or escalate","Implement the original fix anyway"], answer:2, explain:"If testing disproves a theory, the methodology says to establish a new theory of probable cause or escalate to someone who can.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Document the failure and close the ticket</b>: The problem is unresolved, so closing it skips the remaining steps and leaves the issue active.</span><span class='qd'><b>Implement the original fix anyway</b>: Implementing a fix based on a disproven theory risks making changes that do not address the real cause.</span><span class='qd'><b>Reboot every device</b>: Indiscriminately rebooting everything is not a methodical step and can cause additional disruption without diagnosis.</span>" },
  { id:"D5-104", domain:5, obj:"5.1", diff:"easy", q:"Why is documenting findings, actions, and outcomes the final step in the troubleshooting process?", options:["It assigns blame to a technician","It replaces verifying functionality","It is required to reboot devices","It builds a knowledge base and speeds future resolutions"], answer:3, explain:"Documentation creates a reference that helps resolve similar issues faster in the future and informs preventive measures.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It is required to reboot devices</b>: Documentation records the resolution; it has nothing to do with rebooting hardware.</span><span class='qd'><b>It assigns blame to a technician</b>: The purpose is knowledge sharing, not attributing fault to individuals.</span><span class='qd'><b>It replaces verifying functionality</b>: Documentation is a separate final step and does not substitute for the earlier verification of full system functionality.</span>" },
  { id:"D5-105", domain:5, obj:"5.2", diff:"easy", q:"A cable run exceeds the 100 m Ethernet limit and the link is unreliable. This is a problem at which layer?", options:["Physical","Network","Transport","Application"], answer:0, explain:"Cable length beyond the 100 m Ethernet limit and the resulting signal attenuation are physical-layer (Layer 1) cabling issues.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Network</b>: The Network layer handles IP addressing and routing, not the physical signal degradation of an over-length cable run.</span><span class='qd'><b>Transport</b>: The Transport layer manages segmentation and reliability with TCP/UDP, not physical cable distance limits.</span><span class='qd'><b>Application</b>: The Application layer deals with user-facing protocols and is unaffected by raw cable length.</span>" },
  { id:"D5-106", domain:5, obj:"5.2", diff:"medium", q:"A technician suspects a single pair in a UTP run is broken. Which tool identifies which pins/pairs are faulty?", options:["Toner probe only","Cable tester (wire map)","Spectrum analyzer","Protocol analyzer"], answer:1, explain:"A cable tester with a wire-map function shows opens, shorts, and miswires on each individual pair, identifying the faulty pins.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Spectrum analyzer</b>: A spectrum analyzer measures RF signals and is used for wireless interference analysis, not copper pair continuity.</span><span class='qd'><b>Protocol analyzer</b>: A protocol analyzer captures and decodes traffic at higher layers, not the physical wiring of pairs.</span><span class='qd'><b>Toner probe only</b>: A toner probe traces and locates a cable but does not map which specific pins or pairs are broken.</span>" },
  { id:"D5-107", domain:5, obj:"5.2", diff:"medium", q:"Which tool helps locate the far end of an unlabeled cable in a wiring closet?", options:["Multimeter","OTDR","Toner and probe (fox and hound)","Loopback plug"], answer:2, explain:"A tone generator and probe (fox and hound) let you place a tone on one end and trace it to identify a specific cable among many.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Loopback plug</b>: A loopback plug tests a single port by looping its transmit back to receive, not for locating a cable's far end.</span><span class='qd'><b>Multimeter</b>: A multimeter measures voltage, resistance, and continuity but cannot trace which jack a cable terminates at.</span><span class='qd'><b>OTDR</b>: An OTDR locates faults by distance on fiber, not identifying the far end of a copper cable in a closet.</span>" },
  { id:"D5-108", domain:5, obj:"5.2", diff:"hard", q:"A fiber link has high attenuation and intermittent loss. Which tool BEST pinpoints the distance to a break or bad splice?", options:["Tone generator","Multimeter","Wire-map tester","OTDR"], answer:3, explain:"An OTDR (optical time-domain reflectometer) measures backscatter and reflections to locate breaks, bends, and splices on fiber by distance.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Wire-map tester</b>: A wire-map tester checks copper pair continuity and cannot evaluate fiber attenuation or pinpoint a fiber break.</span><span class='qd'><b>Tone generator</b>: A tone generator traces and identifies cables but does not measure distance to a fault.</span><span class='qd'><b>Multimeter</b>: A multimeter measures electrical properties of copper and is useless on an optical fiber link.</span>" },
  { id:"D5-109", domain:5, obj:"5.2", diff:"medium", q:"A run of cable near fluorescent lights and motors shows intermittent errors. What is the most likely cause?", options:["EMI/crosstalk","Expired certificate","Wrong VLAN","DHCP exhaustion"], answer:0, explain:"Proximity to electrical noise sources such as fluorescent lights and motors induces EMI/crosstalk, causing intermittent errors that shielded cable or rerouting can mitigate.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Expired certificate</b>: An expired certificate is an application-layer trust issue, not a cause of physical noise-induced errors.</span><span class='qd'><b>Wrong VLAN</b>: A wrong VLAN is a logical Layer 2 misconfiguration and would not produce intermittent errors tied to nearby electrical equipment.</span><span class='qd'><b>DHCP exhaustion</b>: DHCP exhaustion prevents address assignment and has nothing to do with cable interference.</span>" },
  { id:"D5-110", domain:5, obj:"5.3", diff:"hard", q:"A host's subnet mask is set to /16 instead of /24. What symptom is MOST likely?", options:["It cannot obtain a DHCP lease","It assumes some remote hosts are local and fails to route to them","DNS stops resolving entirely","Its link speed drops to 10 Mbps"], answer:1, explain:"An overly broad /16 mask makes the host treat addresses that are actually on remote /24 subnets as local, so it ARPs for them instead of routing and connectivity to those hosts breaks.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>It cannot obtain a DHCP lease</b>: The host can still send and receive DHCP; a too-broad mask affects routing decisions, not the ability to get a lease.</span><span class='qd'><b>DNS stops resolving entirely</b>: DNS may still work for hosts the mask treats correctly; the mask error breaks reachability to specific off-subnet hosts, not all name resolution.</span><span class='qd'><b>Its link speed drops to 10 Mbps</b>: Subnet mask is a Layer 3 setting and has no effect on the negotiated physical link speed.</span>" },
  { id:"D5-111", domain:5, obj:"5.3", diff:"medium", q:"Which command on Windows shows all active connections and listening ports to confirm a service is bound?", options:["tracert","ipconfig /all","netstat -an","arp -a"], answer:2, explain:"<code class='mono'>netstat -an</code> lists active connections and all listening sockets numerically, so you can verify a service is bound and listening.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>arp -a</b>: arp -a shows IP-to-MAC mappings, not which TCP/UDP ports a service is listening on.</span><span class='qd'><b>tracert</b>: tracert traces the routed path to a destination and reveals nothing about local listening ports.</span><span class='qd'><b>ipconfig /all</b>: ipconfig /all displays interface configuration, not active connections or listening sockets.</span>" },
  { id:"D5-112", domain:5, obj:"5.3", diff:"medium", q:"A user can resolve external names but not internal ones. Which is the most likely cause?", options:["The default gateway is wrong","The cable is bad","The certificate expired","The client is pointed at a public DNS server instead of the internal one"], answer:3, explain:"Pointing at a public resolver returns external records but cannot see the internal zones, so internal names fail while external ones resolve.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The default gateway is wrong</b>: A bad gateway would break reachability broadly, not selectively allow external name resolution while blocking internal names.</span><span class='qd'><b>The cable is bad</b>: A faulty cable causes link errors or loss of all connectivity, not a clean split between resolving external and internal names.</span><span class='qd'><b>The certificate expired</b>: An expired certificate produces TLS trust warnings, not a failure to resolve internal hostnames.</span>" },
  { id:"D5-113", domain:5, obj:"5.4", diff:"hard", q:"Backups complete on time but interactive SSH sessions feel laggy on the same link. Which metric is MOST relevant to the SSH experience?", options:["Latency","Total bandwidth","MAC address table size","DNS TTL"], answer:0, explain:"Bulk transfers like backups tolerate delay, but interactive SSH sessions are sensitive to round-trip delay, so latency drives the perceived lag.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Total bandwidth</b>: Bandwidth is clearly adequate since backups complete on time; the interactive lag is a delay problem, not a capacity one.</span><span class='qd'><b>MAC address table size</b>: The switch MAC table size affects forwarding scale, not the responsiveness of an SSH keystroke session.</span><span class='qd'><b>DNS TTL</b>: DNS TTL governs how long records are cached and only affects the initial lookup, not the ongoing feel of the session.</span>" },
  { id:"D5-114", domain:5, obj:"5.4", diff:"medium", q:"Which command sends a sustained stream of ICMP echoes to observe ongoing loss and latency to a host?", options:["route print","ping -t (Windows) or ping (Linux)","nslookup","arp -a"], answer:1, explain:"A continuous ping (<code class='mono'>ping -t</code> on Windows, default behavior on Linux) sends a sustained stream of ICMP echoes to reveal intermittent loss and latency over time.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>nslookup</b>: nslookup performs DNS lookups and sends no ICMP echoes to measure loss or latency.</span><span class='qd'><b>arp -a</b>: arp -a displays cached IP-to-MAC mappings and generates no traffic to a host.</span><span class='qd'><b>route print</b>: route print shows the routing table and does not probe a host's reachability over time.</span>" },
  { id:"D5-115", domain:5, obj:"5.4", diff:"easy", q:"Which Linux tool combines traceroute and ping to continuously show per-hop loss and latency?", options:["ss","tcpdump","mtr","dig"], answer:2, explain:"<code class='mono'>mtr</code> continuously probes each hop along the path, displaying running per-hop loss and latency statistics by combining traceroute and ping.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>dig</b>: dig is a DNS lookup tool and does not measure per-hop loss or latency.</span><span class='qd'><b>ss</b>: ss reports socket statistics and open connections, not path performance.</span><span class='qd'><b>tcpdump</b>: tcpdump captures packets for inspection but does not compute per-hop loss and latency along a route.</span>" },
  { id:"D5-116", domain:5, obj:"5.5", diff:"medium", q:"Which packet-capture tool would you use to confirm whether traffic is actually leaving an interface during troubleshooting?", options:["ipconfig","route","arp","tcpdump (or Wireshark)"], answer:3, explain:"<code class='mono'>tcpdump</code> and Wireshark capture and inspect packets, confirming exactly what traffic is actually traversing an interface.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>ipconfig</b>: ipconfig shows interface configuration but does not capture or display the packets crossing an interface.</span><span class='qd'><b>route</b>: route displays or edits the routing table and cannot confirm whether specific packets are leaving an interface.</span><span class='qd'><b>arp</b>: arp manages IP-to-MAC mappings and provides no packet-level capture capability.</span>" },
  { id:"D5-117", domain:5, obj:"5.5", diff:"hard", q:"Web traffic to one external site is silently dropped while everything else works, and there is no certificate error. Which is the BEST tool to determine where packets are being discarded?", options:["traceroute/tracert to the destination","ipconfig /all","arp -d","nslookup only"], answer:0, explain:"<code class='mono'>traceroute</code>/<code class='mono'>tracert</code> reveals where along the path responses stop, helping pinpoint the hop where a blocking ACL or filter discards the packets.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>ipconfig /all</b>: ipconfig /all shows only the local host's configuration and cannot trace where packets are dropped along a path.</span><span class='qd'><b>arp -d</b>: arp -d clears the local ARP cache and provides no path-level diagnostics.</span><span class='qd'><b>nslookup only</b>: nslookup confirms name resolution, but the scenario already excludes DNS as the issue, so it cannot locate where packets are discarded.</span>" },
  { id:"D5-118", domain:5, obj:"5.5", diff:"medium", q:"A newly issued server certificate is valid, but clients still report an untrusted certificate. What is the most likely cause?", options:["The DHCP scope is exhausted","The intermediate/CA chain is not installed","The MTU is too small","The VLAN is wrong"], answer:1, explain:"If the intermediate or root CA chain is not installed, clients cannot build a trust path even though the leaf certificate itself is valid.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>The MTU is too small</b>: A small MTU affects packet delivery and fragmentation, not certificate trust validation.</span><span class='qd'><b>The VLAN is wrong</b>: A wrong VLAN is a Layer 2 connectivity issue and would not produce an untrusted-certificate warning.</span><span class='qd'><b>The DHCP scope is exhausted</b>: An exhausted scope prevents address assignment and has nothing to do with certificate chain trust.</span>" },
  { id:"D5-119", domain:5, obj:"5.5", diff:"easy", q:"Which security issue is indicated when a network sees a sudden flood of DHCP DISCOVER messages exhausting all leases?", options:["Duplex mismatch","DNS scavenging","DHCP starvation attack","Expired certificate"], answer:2, explain:"A flood of DHCP DISCOVER requests that drains the entire lease pool is a DHCP starvation attack, often paired with a rogue server to take over addressing.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>Expired certificate</b>: An expired certificate causes TLS trust warnings, not a surge of DHCP DISCOVER messages.</span><span class='qd'><b>Duplex mismatch</b>: A duplex mismatch is a Layer 1/2 performance fault and does not flood the network with DHCP requests.</span><span class='qd'><b>DNS scavenging</b>: DNS scavenging removes stale DNS records and is unrelated to DHCP lease exhaustion.</span>" },
  { id:"D5-120", domain:5, obj:"5.5", diff:"hard", q:"After enabling 802.1X, a conference-room port fails authentication and the device gets no access. Which is the MOST likely cause to check FIRST?", options:["An expired DNS record","A duplex mismatch","A bad cable","The supplicant is misconfigured or lacks valid credentials/certificate"], answer:3, explain:"With 802.1X, an authentication failure usually means the supplicant lacks valid credentials or a proper certificate, or is not configured for the required auth method.<br><span class='qwhy'>Why the other options are wrong:</span><span class='qd'><b>A bad cable</b>: A bad cable causes link or physical errors, not a clean 802.1X authentication rejection after the port comes up.</span><span class='qd'><b>An expired DNS record</b>: 802.1X authenticates against a RADIUS/identity store before network access, and DNS records play no part in that exchange.</span><span class='qd'><b>A duplex mismatch</b>: A duplex mismatch is a Layer 1/2 performance issue and does not produce an authentication failure.</span>" }
);
NETPLUS.pbqs.push(
  {
    id: "PBQ-001",
    format: 1,
    domain: 1,
    title: "Split a /24 into /26 subnets",
    brief: "You must divide <span class='cy'>192.168.10.0/24</span> into four equal subnets. Answer the questions for <b>Subnet 0</b> (the first subnet).",
    exhibitTitle: "requirements",
    exhibit: "<span class='ok'>Given block:</span> 192.168.10.0/24\n<span class='cy'>Task:</span> divide into 4 equal subnets\n<span class='dim'>Each subnet must support up to 60 hosts.</span>\n\nAnswer for the FIRST subnet (Subnet 0).",
    fields: [
      {
        label: "New prefix / mask for 4 equal subnets",
        hint: "4 subnets needs 2 borrowed bits: /24 + 2 = /26",
        options: ["/25 (255.255.255.128)", "/26 (255.255.255.192)", "/27 (255.255.255.224)", "/28 (255.255.255.240)"],
        answer: 1,
        explain: "4 subnets = 2^2, so borrow 2 bits. /24 + 2 = /26, mask 255.255.255.192."
      },
      {
        label: "Network address of Subnet 0",
        hint: "The first block starts at .0",
        options: ["192.168.10.0", "192.168.10.1", "192.168.10.64", "192.168.10.63"],
        answer: 0,
        explain: "With a /26 the block size is 64. The first subnet's network address is 192.168.10.0."
      },
      {
        label: "Broadcast address of Subnet 0",
        hint: "Block size 64, so the next network is .64",
        options: ["192.168.10.62", "192.168.10.64", "192.168.10.63", "192.168.10.127"],
        answer: 2,
        explain: "The /26 block 0 covers .0 to .63; the broadcast is the last address, 192.168.10.63."
      },
      {
        label: "Usable host range of Subnet 0",
        hint: "Network+1 to Broadcast-1",
        options: ["192.168.10.0 - 192.168.10.63", "192.168.10.1 - 192.168.10.62", "192.168.10.1 - 192.168.10.63", "192.168.10.0 - 192.168.10.62"],
        answer: 1,
        explain: "Usable hosts are network+1 (.1) through broadcast-1 (.62): 192.168.10.1 - 192.168.10.62."
      },
      {
        label: "Usable hosts per /26 subnet",
        hint: "2^(32-26) - 2",
        options: ["64", "62", "30", "126"],
        answer: 1,
        explain: "2^6 = 64 addresses, minus network and broadcast = 62 usable hosts."
      }
    ],
    summary: "A /24 split into four /26 subnets yields 62 usable hosts each; Subnet 0 is 192.168.10.0/26."
  },
  {
    id: "PBQ-002",
    format: 1,
    domain: 1,
    title: "Subnet for 100 hosts",
    brief: "From <span class='cy'>10.20.30.0/24</span>, select the smallest subnet that supports at least 100 usable hosts and describe it.",
    exhibitTitle: "requirements",
    exhibit: "<span class='ok'>Given block:</span> 10.20.30.0/24\n<span class='cy'>Requirement:</span> at least 100 usable hosts in one subnet\n<span class='dim'>Choose the smallest subnet (largest prefix) that still fits.</span>",
    fields: [
      {
        label: "Smallest prefix that fits 100 hosts",
        hint: "Need >=100 usable: 2^7-2 = 126",
        options: ["/24", "/25", "/26", "/23"],
        answer: 1,
        explain: "2^7 - 2 = 126 usable hosts (>=100). 32 - 7 = /25 mask 255.255.255.128."
      },
      {
        label: "Network address (first subnet)",
        hint: "Starts at .0",
        options: ["10.20.30.0", "10.20.30.1", "10.20.30.128", "10.20.30.127"],
        answer: 0,
        explain: "The first /25 starts at 10.20.30.0."
      },
      {
        label: "Broadcast address (first subnet)",
        hint: "Block size 128",
        options: ["10.20.30.128", "10.20.30.127", "10.20.30.126", "10.20.30.255"],
        answer: 1,
        explain: "The /25 block 0 spans .0 to .127; broadcast is 10.20.30.127."
      },
      {
        label: "Usable host range (first subnet)",
        hint: ".1 to .126",
        options: ["10.20.30.0 - 10.20.30.127", "10.20.30.1 - 10.20.30.126", "10.20.30.1 - 10.20.30.127", "10.20.30.1 - 10.20.30.128"],
        answer: 1,
        explain: "Usable range is 10.20.30.1 through 10.20.30.126."
      }
    ],
    summary: "A /25 provides 126 usable hosts, satisfying the 100-host requirement."
  },
  {
    id: "PBQ-003",
    format: 1,
    domain: 1,
    title: "Point-to-point /30 link",
    brief: "Configure a serial WAN link from <span class='cy'>203.0.113.0/24</span>. Allocate the very first /30 for the point-to-point link.",
    exhibitTitle: "requirements",
    exhibit: "<span class='ok'>Given block:</span> 203.0.113.0/24\n<span class='cy'>Requirement:</span> a single point-to-point link (2 usable hosts)\n<span class='dim'>Use the first available /30.</span>",
    fields: [
      {
        label: "Correct prefix for a point-to-point link",
        hint: "2 usable hosts: 2^2-2 = 2",
        options: ["/29", "/30", "/31", "/28"],
        answer: 1,
        explain: "A /30 gives 2^2 - 2 = 2 usable hosts, ideal for a P2P link."
      },
      {
        label: "Network address of first /30",
        hint: "Block size 4, starts at .0",
        options: ["203.0.113.0", "203.0.113.1", "203.0.113.4", "203.0.113.3"],
        answer: 0,
        explain: "The first /30 block is 203.0.113.0."
      },
      {
        label: "Broadcast address of first /30",
        hint: "Block size 4: .0 to .3",
        options: ["203.0.113.4", "203.0.113.2", "203.0.113.3", "203.0.113.7"],
        answer: 2,
        explain: "The /30 block 0 spans .0 to .3; broadcast is 203.0.113.3."
      },
      {
        label: "Usable host addresses",
        hint: ".1 and .2",
        options: ["203.0.113.0 and 203.0.113.3", "203.0.113.1 and 203.0.113.2", "203.0.113.1 and 203.0.113.3", "203.0.113.2 and 203.0.113.3"],
        answer: 1,
        explain: "Usable addresses are 203.0.113.1 and 203.0.113.2."
      }
    ],
    summary: "A /30 carves out exactly two usable addresses for a point-to-point WAN link."
  },
  {
    id: "PBQ-004",
    format: 1,
    domain: 1,
    title: "VLSM from 172.16.0.0/16 - large LAN",
    brief: "Using VLSM on <span class='cy'>172.16.0.0/16</span>, allocate the first subnet to a department needing <b>500 hosts</b>.",
    exhibitTitle: "requirements",
    exhibit: "<span class='ok'>Given block:</span> 172.16.0.0/16\n<span class='cy'>Dept A requirement:</span> 500 usable hosts\n<span class='dim'>Allocate the first contiguous subnet.</span>",
    fields: [
      {
        label: "Prefix for 500 hosts",
        hint: "2^9-2 = 510 >= 500",
        options: ["/22", "/23", "/24", "/21"],
        answer: 1,
        explain: "2^9 - 2 = 510 usable hosts. 32 - 9 = /23, mask 255.255.254.0."
      },
      {
        label: "Network address",
        hint: "Block size in 3rd octet is 2",
        options: ["172.16.0.0", "172.16.1.0", "172.16.2.0", "172.16.0.1"],
        answer: 0,
        explain: "The first /23 begins at 172.16.0.0."
      },
      {
        label: "Broadcast address",
        hint: "/23 covers two third-octet values",
        options: ["172.16.1.255", "172.16.2.255", "172.16.0.255", "172.16.1.254"],
        answer: 0,
        explain: "A /23 spans 172.16.0.0 - 172.16.1.255; broadcast is 172.16.1.255."
      },
      {
        label: "Usable host range",
        hint: ".0.1 to .1.254",
        options: ["172.16.0.1 - 172.16.1.255", "172.16.0.1 - 172.16.1.254", "172.16.0.0 - 172.16.1.254", "172.16.0.1 - 172.16.2.254"],
        answer: 1,
        explain: "Usable range is 172.16.0.1 through 172.16.1.254."
      },
      {
        label: "Usable hosts in a /23",
        hint: "2^9 - 2",
        options: ["512", "510", "254", "1022"],
        answer: 1,
        explain: "2^9 = 512 addresses minus 2 = 510 usable hosts."
      }
    ],
    summary: "A /23 supplies 510 usable hosts, covering the 500-host department."
  },
  {
    id: "PBQ-005",
    format: 1,
    domain: 1,
    title: "Determine subnet of an interface",
    brief: "An interface is configured as <span class='cy'>192.168.1.130/26</span>. Identify the subnet it belongs to.",
    exhibitTitle: "requirements",
    exhibit: "<span class='ok'>Given host:</span> 192.168.1.130/26\n<span class='cy'>Task:</span> identify network, broadcast, and range\n<span class='dim'>/26 block size = 64.</span>",
    fields: [
      {
        label: "Network address for 192.168.1.130/26",
        hint: "Multiples of 64: 0, 64, 128, 192",
        options: ["192.168.1.64", "192.168.1.128", "192.168.1.130", "192.168.1.192"],
        answer: 1,
        explain: "130 falls in the .128 block (128-191), so the network is 192.168.1.128."
      },
      {
        label: "Broadcast address",
        hint: "Next boundary is .192",
        options: ["192.168.1.191", "192.168.1.190", "192.168.1.192", "192.168.1.255"],
        answer: 0,
        explain: "The .128/26 block spans 128-191; broadcast is 192.168.1.191."
      },
      {
        label: "Usable host range",
        hint: ".129 to .190",
        options: ["192.168.1.128 - 192.168.1.191", "192.168.1.129 - 192.168.1.190", "192.168.1.129 - 192.168.1.191", "192.168.1.130 - 192.168.1.190"],
        answer: 1,
        explain: "Usable hosts are 192.168.1.129 through 192.168.1.190."
      },
      {
        label: "Is 192.168.1.130 a usable host?",
        hint: "It is between .129 and .190",
        options: ["No, it is the network address", "No, it is the broadcast", "Yes, it is a valid host", "No, it is out of range"],
        answer: 2,
        explain: "192.168.1.130 lies within the usable range .129-.190, so it is a valid host."
      }
    ],
    summary: "Host .130/26 resides in subnet 192.168.1.128/26 with range .129-.190."
  },
  {
    id: "PBQ-006",
    format: 1,
    domain: 1,
    title: "Subnet 10.0.0.0/8 for regional sites",
    brief: "Subnet <span class='cy'>10.0.0.0/8</span> into /16 blocks for regional sites. Describe the <b>third</b> /16 block.",
    exhibitTitle: "requirements",
    exhibit: "<span class='ok'>Given block:</span> 10.0.0.0/8\n<span class='cy'>Task:</span> create /16 subnets\n<span class='dim'>List details for the THIRD /16 (index 2).</span>",
    fields: [
      {
        label: "How many /16 subnets fit in a /8?",
        hint: "2^(16-8)",
        options: ["128", "254", "256", "65536"],
        answer: 2,
        explain: "16 - 8 = 8 borrowed bits, 2^8 = 256 subnets."
      },
      {
        label: "Network address of the third /16",
        hint: "Blocks: 10.0, 10.1, 10.2 ...",
        options: ["10.2.0.0", "10.3.0.0", "10.1.0.0", "10.2.0.1"],
        answer: 0,
        explain: "Third block (index 2) starts at 10.2.0.0."
      },
      {
        label: "Broadcast address of the third /16",
        hint: "Covers 10.2.0.0 - 10.2.255.255",
        options: ["10.2.255.254", "10.3.255.255", "10.2.255.255", "10.2.0.255"],
        answer: 2,
        explain: "A /16 spans the whole third octet range; broadcast is 10.2.255.255."
      },
      {
        label: "Usable hosts per /16",
        hint: "2^16 - 2",
        options: ["65536", "65534", "65280", "32766"],
        answer: 1,
        explain: "2^16 = 65536 addresses minus 2 = 65534 usable hosts."
      }
    ],
    summary: "A /8 divides into 256 /16 blocks; the third is 10.2.0.0/16 with 65534 hosts."
  },
  {
    id: "PBQ-007",
    format: 1,
    domain: 1,
    title: "Six subnets from a /24",
    brief: "Divide <span class='cy'>192.168.50.0/24</span> to provide at least <b>6 subnets</b>. Describe the subnet that contains host .100.",
    exhibitTitle: "requirements",
    exhibit: "<span class='ok'>Given block:</span> 192.168.50.0/24\n<span class='cy'>Requirement:</span> at least 6 subnets\n<span class='dim'>Then locate the subnet holding 192.168.50.100.</span>",
    fields: [
      {
        label: "Prefix providing at least 6 subnets",
        hint: "2^3 = 8 >= 6, borrow 3 bits",
        options: ["/26", "/27", "/28", "/25"],
        answer: 1,
        explain: "6 subnets needs 3 borrowed bits (2^3=8). /24 + 3 = /27, mask 255.255.255.224."
      },
      {
        label: "Network address containing .100",
        hint: "/27 block size 32: 96 boundary",
        options: ["192.168.50.96", "192.168.50.64", "192.168.50.100", "192.168.50.128"],
        answer: 0,
        explain: "Block size 32: .96 block covers 96-127, which contains .100."
      },
      {
        label: "Broadcast of that subnet",
        hint: "96 + 32 - 1",
        options: ["192.168.50.128", "192.168.50.127", "192.168.50.126", "192.168.50.95"],
        answer: 1,
        explain: "The .96/27 block spans 96-127; broadcast is 192.168.50.127."
      },
      {
        label: "Usable hosts per /27",
        hint: "2^5 - 2",
        options: ["32", "30", "62", "14"],
        answer: 1,
        explain: "2^5 = 32 addresses minus 2 = 30 usable hosts."
      }
    ],
    summary: "A /27 yields 8 subnets of 30 hosts; .100 sits in 192.168.50.96/27."
  },
  {
    id: "PBQ-008",
    format: 1,
    domain: 1,
    title: "VLSM second subnet allocation",
    brief: "On <span class='cy'>192.168.20.0/24</span>, the first /25 is already used. Allocate the next subnet, a /26, immediately after it.",
    exhibitTitle: "requirements",
    exhibit: "<span class='ok'>Given block:</span> 192.168.20.0/24\n<span class='warnc'>Already used:</span> 192.168.20.0/25 (Subnet A)\n<span class='cy'>Allocate next:</span> a /26 for Subnet B\n<span class='dim'>Start at the next free address.</span>",
    fields: [
      {
        label: "Network address of Subnet B (/26)",
        hint: "/25 ends at .127, next starts at .128",
        options: ["192.168.20.128", "192.168.20.126", "192.168.20.64", "192.168.20.127"],
        answer: 0,
        explain: "The /25 occupies .0-.127, so the next /26 starts at 192.168.20.128."
      },
      {
        label: "Broadcast of Subnet B",
        hint: "/26 block size 64: 128-191",
        options: ["192.168.20.192", "192.168.20.191", "192.168.20.190", "192.168.20.255"],
        answer: 1,
        explain: "The .128/26 block spans 128-191; broadcast is 192.168.20.191."
      },
      {
        label: "Usable host range of Subnet B",
        hint: ".129 to .190",
        options: ["192.168.20.128 - 192.168.20.191", "192.168.20.129 - 192.168.20.190", "192.168.20.129 - 192.168.20.191", "192.168.20.128 - 192.168.20.190"],
        answer: 1,
        explain: "Usable hosts are 192.168.20.129 through 192.168.20.190."
      },
      {
        label: "Usable hosts in Subnet B",
        hint: "2^6 - 2",
        options: ["64", "62", "126", "30"],
        answer: 1,
        explain: "A /26 has 2^6 - 2 = 62 usable hosts."
      }
    ],
    summary: "After a /25 (.0-.127), the next /26 is 192.168.20.128/26 with 62 hosts."
  },
  {
    id: "PBQ-009",
    format: 1,
    domain: 1,
    title: "Identify mask from host count",
    brief: "A subnet must hold exactly <b>14 usable hosts</b> for a small office. Apply it starting at <span class='cy'>192.168.100.16</span>.",
    exhibitTitle: "requirements",
    exhibit: "<span class='ok'>Given start:</span> 192.168.100.16\n<span class='cy'>Requirement:</span> 14 usable hosts\n<span class='dim'>Pick the exact-fit prefix.</span>",
    fields: [
      {
        label: "Prefix for exactly 14 usable hosts",
        hint: "2^4 - 2 = 14",
        options: ["/27", "/28", "/29", "/26"],
        answer: 1,
        explain: "2^4 - 2 = 14 usable hosts. 32 - 4 = /28, mask 255.255.255.240."
      },
      {
        label: "Network address",
        hint: "Block size 16, .16 is a boundary",
        options: ["192.168.100.16", "192.168.100.0", "192.168.100.17", "192.168.100.32"],
        answer: 0,
        explain: ".16 is a valid /28 boundary (multiple of 16), so the network is 192.168.100.16."
      },
      {
        label: "Broadcast address",
        hint: "16 + 16 - 1",
        options: ["192.168.100.32", "192.168.100.31", "192.168.100.30", "192.168.100.47"],
        answer: 1,
        explain: "The .16/28 block spans 16-31; broadcast is 192.168.100.31."
      },
      {
        label: "Usable host range",
        hint: ".17 to .30",
        options: ["192.168.100.16 - 192.168.100.31", "192.168.100.17 - 192.168.100.30", "192.168.100.17 - 192.168.100.31", "192.168.100.16 - 192.168.100.30"],
        answer: 1,
        explain: "Usable hosts are 192.168.100.17 through 192.168.100.30."
      }
    ],
    summary: "A /28 fits exactly 14 hosts; the block at .16 spans .17-.30."
  },
  {
    id: "PBQ-010",
    format: 1,
    domain: 1,
    title: "Supernet two /24s",
    brief: "Summarize <span class='cy'>192.168.0.0/24</span> and <span class='cy'>192.168.1.0/24</span> into a single route.",
    exhibitTitle: "requirements",
    exhibit: "<span class='ok'>Given networks:</span>\n192.168.0.0/24\n192.168.1.0/24\n<span class='cy'>Task:</span> produce one summary (supernet) route\n<span class='dim'>Find the shortest prefix that covers both.</span>",
    fields: [
      {
        label: "Summary prefix covering both /24s",
        hint: "Two /24s combine into a /23",
        options: ["/22", "/23", "/24", "/25"],
        answer: 1,
        explain: "Two contiguous /24s (0 and 1) aggregate into a /23, mask 255.255.254.0."
      },
      {
        label: "Summary network address",
        hint: "/23 boundary is the even third octet",
        options: ["192.168.0.0", "192.168.1.0", "192.168.0.1", "192.168.2.0"],
        answer: 0,
        explain: "The /23 aggregate starts at 192.168.0.0."
      },
      {
        label: "Broadcast of the summary block",
        hint: "Covers .0.0 - .1.255",
        options: ["192.168.0.255", "192.168.1.255", "192.168.2.255", "192.168.1.254"],
        answer: 1,
        explain: "The /23 spans 192.168.0.0 - 192.168.1.255; broadcast is 192.168.1.255."
      },
      {
        label: "Total usable hosts in the /23",
        hint: "2^9 - 2",
        options: ["508", "510", "512", "254"],
        answer: 1,
        explain: "2^9 = 512 addresses minus 2 = 510 usable hosts."
      }
    ],
    summary: "Two adjacent /24s summarize to 192.168.0.0/23 with 510 usable hosts."
  },
  {
    id: "PBQ-011",
    format: 1,
    domain: 1,
    title: "Eight equal subnets",
    brief: "Divide <span class='cy'>192.168.8.0/24</span> into <b>8 equal subnets</b> and describe the <b>fifth</b> subnet.",
    exhibitTitle: "requirements",
    exhibit: "<span class='ok'>Given block:</span> 192.168.8.0/24\n<span class='cy'>Task:</span> 8 equal subnets\n<span class='dim'>Describe the FIFTH subnet (index 4).</span>",
    fields: [
      {
        label: "Prefix for 8 equal subnets",
        hint: "2^3 = 8, borrow 3 bits",
        options: ["/26", "/27", "/28", "/25"],
        answer: 1,
        explain: "8 = 2^3, borrow 3 bits. /24 + 3 = /27, block size 32."
      },
      {
        label: "Network address of the fifth subnet",
        hint: "Blocks: 0,32,64,96,128 ...",
        options: ["192.168.8.96", "192.168.8.128", "192.168.8.160", "192.168.8.127"],
        answer: 1,
        explain: "Indexes 0-4 are .0,.32,.64,.96,.128. The fifth subnet is 192.168.8.128."
      },
      {
        label: "Broadcast of the fifth subnet",
        hint: "128 + 32 - 1",
        options: ["192.168.8.160", "192.168.8.159", "192.168.8.158", "192.168.8.191"],
        answer: 1,
        explain: "The .128/27 block spans 128-159; broadcast is 192.168.8.159."
      },
      {
        label: "Usable host range of the fifth subnet",
        hint: ".129 to .158",
        options: ["192.168.8.128 - 192.168.8.159", "192.168.8.129 - 192.168.8.158", "192.168.8.129 - 192.168.8.159", "192.168.8.128 - 192.168.8.158"],
        answer: 1,
        explain: "Usable hosts are 192.168.8.129 through 192.168.8.158."
      }
    ],
    summary: "Eight /27 subnets of 30 hosts; the fifth is 192.168.8.128/27."
  },
  {
    id: "PBQ-012",
    format: 1,
    domain: 1,
    title: "VLSM /16 for a /27 subnet",
    brief: "From <span class='cy'>172.20.0.0/16</span>, allocate a /27 for a small VLAN. Describe the second /27 (the one after 172.20.0.0/27).",
    exhibitTitle: "requirements",
    exhibit: "<span class='ok'>Given block:</span> 172.20.0.0/16\n<span class='warnc'>First /27 used:</span> 172.20.0.0/27\n<span class='cy'>Allocate next:</span> the second /27\n<span class='dim'>Block size in the last octet is 32.</span>",
    fields: [
      {
        label: "Network address of the second /27",
        hint: "First /27 ends at .31, next starts at .32",
        options: ["172.20.0.32", "172.20.0.64", "172.20.0.31", "172.20.1.0"],
        answer: 0,
        explain: "The first /27 covers .0-.31, so the second starts at 172.20.0.32."
      },
      {
        label: "Broadcast of the second /27",
        hint: "32 + 32 - 1",
        options: ["172.20.0.64", "172.20.0.63", "172.20.0.62", "172.20.0.95"],
        answer: 1,
        explain: "The .32/27 block spans 32-63; broadcast is 172.20.0.63."
      },
      {
        label: "Usable host range",
        hint: ".33 to .62",
        options: ["172.20.0.32 - 172.20.0.63", "172.20.0.33 - 172.20.0.62", "172.20.0.33 - 172.20.0.63", "172.20.0.32 - 172.20.0.62"],
        answer: 1,
        explain: "Usable hosts are 172.20.0.33 through 172.20.0.62."
      },
      {
        label: "Usable hosts in a /27",
        hint: "2^5 - 2",
        options: ["32", "30", "62", "14"],
        answer: 1,
        explain: "A /27 has 2^5 - 2 = 30 usable hosts."
      }
    ],
    summary: "The second /27 from 172.20.0.0/16 is 172.20.0.32/27 with 30 usable hosts."
  },
  {
    id: "PBQ-013",
    format: 1,
    domain: 1,
    title: "Subnet for 25 hosts",
    brief: "A wireless VLAN needs <b>25 usable hosts</b>. Allocate it from <span class='cy'>10.10.10.0/24</span> starting at the first subnet.",
    exhibitTitle: "requirements",
    exhibit: "<span class='ok'>Given block:</span> 10.10.10.0/24\n<span class='cy'>Requirement:</span> 25 usable hosts\n<span class='dim'>Pick the smallest subnet that fits, then describe the first one.</span>",
    fields: [
      {
        label: "Smallest prefix fitting 25 hosts",
        hint: "/27 gives 30, /28 gives 14",
        options: ["/26", "/27", "/28", "/25"],
        answer: 1,
        explain: "/28 = 14 (too small). /27 = 2^5 - 2 = 30 usable >= 25, mask 255.255.255.224."
      },
      {
        label: "Network address (first subnet)",
        hint: "Starts at .0",
        options: ["10.10.10.0", "10.10.10.32", "10.10.10.1", "10.10.10.31"],
        answer: 0,
        explain: "The first /27 begins at 10.10.10.0."
      },
      {
        label: "Broadcast address (first subnet)",
        hint: "Block size 32: .0 to .31",
        options: ["10.10.10.32", "10.10.10.31", "10.10.10.30", "10.10.10.63"],
        answer: 1,
        explain: "The .0/27 block spans 0-31; broadcast is 10.10.10.31."
      },
      {
        label: "Usable host range (first subnet)",
        hint: ".1 to .30",
        options: ["10.10.10.0 - 10.10.10.31", "10.10.10.1 - 10.10.10.30", "10.10.10.1 - 10.10.10.31", "10.10.10.1 - 10.10.10.32"],
        answer: 1,
        explain: "Usable hosts are 10.10.10.1 through 10.10.10.30."
      }
    ],
    summary: "A /27 provides 30 usable hosts, covering the 25-host wireless VLAN."
  },
  {
    id: "PBQ-014",
    format: 1,
    domain: 1,
    title: "Locate subnet of a /29 host",
    brief: "A printer is set to <span class='cy'>192.168.5.45/29</span>. Identify its subnet boundaries.",
    exhibitTitle: "requirements",
    exhibit: "<span class='ok'>Given host:</span> 192.168.5.45/29\n<span class='cy'>Task:</span> network, broadcast, range\n<span class='dim'>/29 block size = 8.</span>",
    fields: [
      {
        label: "Network address for 192.168.5.45/29",
        hint: "Multiples of 8: 40 boundary",
        options: ["192.168.5.40", "192.168.5.48", "192.168.5.45", "192.168.5.32"],
        answer: 0,
        explain: "Block size 8: 45 falls in the .40 block (40-47), network is 192.168.5.40."
      },
      {
        label: "Broadcast address",
        hint: "40 + 8 - 1",
        options: ["192.168.5.48", "192.168.5.47", "192.168.5.46", "192.168.5.55"],
        answer: 1,
        explain: "The .40/29 block spans 40-47; broadcast is 192.168.5.47."
      },
      {
        label: "Usable host range",
        hint: ".41 to .46",
        options: ["192.168.5.40 - 192.168.5.47", "192.168.5.41 - 192.168.5.46", "192.168.5.41 - 192.168.5.47", "192.168.5.40 - 192.168.5.46"],
        answer: 1,
        explain: "Usable hosts are 192.168.5.41 through 192.168.5.46."
      },
      {
        label: "Usable hosts in a /29",
        hint: "2^3 - 2",
        options: ["8", "6", "14", "4"],
        answer: 1,
        explain: "A /29 has 2^3 - 2 = 6 usable hosts."
      }
    ],
    summary: "Host .45/29 sits in subnet 192.168.5.40/29 with range .41-.46."
  },
  {
    id: "PBQ-015",
    format: 1,
    domain: 1,
    title: "VLSM plan across mixed sizes",
    brief: "From <span class='cy'>192.168.30.0/24</span>, allocate in order: Subnet A (60 hosts) then Subnet B (28 hosts). Describe Subnet B.",
    exhibitTitle: "requirements",
    exhibit: "<span class='ok'>Given block:</span> 192.168.30.0/24\n<span class='cy'>Allocate in order:</span>\nSubnet A = 60 hosts\nSubnet B = 28 hosts\n<span class='dim'>Largest first. Then describe Subnet B.</span>",
    fields: [
      {
        label: "Prefix for Subnet A (60 hosts)",
        hint: "2^6 - 2 = 62 >= 60",
        options: ["/25", "/26", "/27", "/24"],
        answer: 1,
        explain: "/26 = 62 usable hosts (>=60). Subnet A occupies 192.168.30.0/26 (.0-.63)."
      },
      {
        label: "Prefix for Subnet B (28 hosts)",
        hint: "2^5 - 2 = 30 >= 28",
        options: ["/26", "/27", "/28", "/25"],
        answer: 1,
        explain: "/27 = 30 usable hosts (>=28), mask 255.255.255.224."
      },
      {
        label: "Network address of Subnet B",
        hint: "A ends at .63, B starts next on a /27 boundary",
        options: ["192.168.30.64", "192.168.30.96", "192.168.30.32", "192.168.30.63"],
        answer: 0,
        explain: "Subnet A used .0-.63; the next /27 starts at 192.168.30.64."
      },
      {
        label: "Broadcast of Subnet B",
        hint: "64 + 32 - 1",
        options: ["192.168.30.96", "192.168.30.95", "192.168.30.94", "192.168.30.127"],
        answer: 1,
        explain: "The .64/27 block spans 64-95; broadcast is 192.168.30.95."
      },
      {
        label: "Usable host range of Subnet B",
        hint: ".65 to .94",
        options: ["192.168.30.64 - 192.168.30.95", "192.168.30.65 - 192.168.30.94", "192.168.30.65 - 192.168.30.95", "192.168.30.64 - 192.168.30.94"],
        answer: 1,
        explain: "Usable hosts are 192.168.30.65 through 192.168.30.94."
      }
    ],
    summary: "VLSM places A at .0/26 and B at 192.168.30.64/27 with range .65-.94."
  }
);
NETPLUS.pbqs.push(
  {
    id: "PBQ-016",
    format: 1,
    domain: 1,
    title: "Point-to-Point /30 WAN Link",
    brief: "A serial WAN link between two routers uses a /30 from the block below. Fill in the addressing details for this link.",
    exhibitTitle: "WAN link requirements",
    exhibit: "Assigned block: <span class='cy'>192.168.10.0/30</span>\nUse: <span class='dim'>router-to-router serial link</span>\nRouter A: lowest usable host\nRouter B: highest usable host",
    fields: [
      {
        label: "Subnet mask for /30",
        hint: "30 network bits",
        options: ["255.255.255.0", "255.255.255.248", "255.255.255.252", "255.255.255.254"],
        answer: 2,
        explain: "A /30 borrows 30 bits, leaving 2 host bits. The last octet is 11111100 = 252, so the mask is 255.255.255.252."
      },
      {
        label: "Number of usable host addresses",
        hint: "2 host bits",
        options: ["1", "2", "4", "6"],
        answer: 1,
        explain: "2 host bits give 2^2 = 4 addresses; subtract the network and broadcast addresses to get 2 usable hosts, exactly enough for a point-to-point link."
      },
      {
        label: "Router A address (lowest usable)",
        hint: "network address + 1",
        options: ["192.168.10.0", "192.168.10.1", "192.168.10.2", "192.168.10.3"],
        answer: 1,
        explain: "The network address is 192.168.10.0, so the lowest usable host is 192.168.10.1."
      },
      {
        label: "Router B address (highest usable)",
        hint: "broadcast - 1",
        options: ["192.168.10.1", "192.168.10.2", "192.168.10.3", "192.168.10.4"],
        answer: 1,
        explain: "The broadcast for 192.168.10.0/30 is 192.168.10.3, so the highest usable host is 192.168.10.2."
      }
    ],
    summary: "A /30 (255.255.255.252) yields 4 addresses and 2 usable hosts, the classic choice for point-to-point WAN links. Network .0, hosts .1 and .2, broadcast .3."
  },
  {
    id: "PBQ-017",
    format: 1,
    domain: 1,
    title: "Point-to-Point /31 Link (RFC 3021)",
    brief: "To conserve addresses, engineering uses /31 links on point-to-point interfaces. Work out the two usable endpoints.",
    exhibitTitle: "P2P link requirements",
    exhibit: "Assigned block: <span class='cy'>10.0.0.4/31</span>\nMode: <span class='ok'>RFC 3021 /31 point-to-point</span>\nNo network/broadcast reserved",
    fields: [
      {
        label: "Subnet mask for /31",
        hint: "31 network bits",
        options: ["255.255.255.252", "255.255.255.254", "255.255.255.255", "255.255.255.248"],
        answer: 1,
        explain: "A /31 has 31 network bits and 1 host bit. The last octet is 11111110 = 254, so the mask is 255.255.255.254."
      },
      {
        label: "Usable host addresses on a /31",
        hint: "RFC 3021 special case",
        options: ["0", "1", "2", "4"],
        answer: 2,
        explain: "RFC 3021 allows both addresses in a /31 to be used as hosts on point-to-point links, so there are 2 usable addresses with no network or broadcast reserved."
      },
      {
        label: "First endpoint address",
        hint: "the even address",
        options: ["10.0.0.3", "10.0.0.4", "10.0.0.5", "10.0.0.6"],
        answer: 1,
        explain: "The block 10.0.0.4/31 covers 10.0.0.4 and 10.0.0.5; the first endpoint is 10.0.0.4."
      },
      {
        label: "Second endpoint address",
        hint: "the odd address",
        options: ["10.0.0.4", "10.0.0.5", "10.0.0.6", "10.0.0.7"],
        answer: 1,
        explain: "The second address in 10.0.0.4/31 is 10.0.0.5, used as the other endpoint."
      }
    ],
    summary: "A /31 (255.255.255.254) provides exactly 2 usable addresses under RFC 3021 for point-to-point links, saving the address pair otherwise lost to network/broadcast."
  },
  {
    id: "PBQ-018",
    format: 1,
    domain: 1,
    title: "/27 Office Subnet",
    brief: "An office floor is assigned a /27. Determine its boundaries and host capacity.",
    exhibitTitle: "office subnet requirements",
    exhibit: "Assigned subnet: <span class='cy'>172.16.8.0/27</span>\nUse: <span class='dim'>workstations + printers</span>",
    fields: [
      {
        label: "Subnet mask for /27",
        hint: "27 network bits",
        options: ["255.255.255.192", "255.255.255.224", "255.255.255.240", "255.255.255.248"],
        answer: 1,
        explain: "A /27 has 27 network bits. The last octet is 11100000 = 224, so the mask is 255.255.255.224."
      },
      {
        label: "Usable hosts per /27",
        hint: "5 host bits",
        options: ["14", "30", "32", "62"],
        answer: 1,
        explain: "5 host bits give 2^5 = 32 addresses; minus network and broadcast leaves 30 usable hosts."
      },
      {
        label: "Broadcast address",
        hint: "last address in the block",
        options: ["172.16.8.30", "172.16.8.31", "172.16.8.32", "172.16.8.63"],
        answer: 1,
        explain: "The block size is 32, so 172.16.8.0/27 spans .0 to .31; the broadcast is 172.16.8.31."
      },
      {
        label: "Last usable host address",
        hint: "broadcast - 1",
        options: ["172.16.8.29", "172.16.8.30", "172.16.8.31", "172.16.8.32"],
        answer: 1,
        explain: "Broadcast is 172.16.8.31, so the last usable host is 172.16.8.30."
      }
    ],
    summary: "A /27 (255.255.255.224) has a block size of 32 and 30 usable hosts. For 172.16.8.0/27: network .0, usable .1-.30, broadcast .31."
  },
  {
    id: "PBQ-019",
    format: 1,
    domain: 1,
    title: "Identify the Subnet ID for a Host",
    brief: "Given a host IP and mask, determine which subnet the host belongs to.",
    exhibitTitle: "host membership requirements",
    exhibit: "Host IP: <span class='cy'>192.168.20.77</span>\nMask: <span class='cy'>255.255.255.224</span> (/27)\nFind the network the host falls in",
    fields: [
      {
        label: "Block size in the last octet",
        hint: "256 - 224",
        options: ["16", "32", "64", "128"],
        answer: 1,
        explain: "256 - 224 = 32, so subnets increment by 32 in the last octet: .0, .32, .64, .96, ..."
      },
      {
        label: "Subnet (network) address for .77",
        hint: "largest multiple of 32 <= 77",
        options: ["192.168.20.32", "192.168.20.64", "192.168.20.96", "192.168.20.72"],
        answer: 1,
        explain: "Multiples of 32 are 64 and 96; 77 falls between 64 and 95, so the subnet is 192.168.20.64."
      },
      {
        label: "Broadcast address of that subnet",
        hint: "next boundary - 1",
        options: ["192.168.20.79", "192.168.20.95", "192.168.20.96", "192.168.20.127"],
        answer: 1,
        explain: "The subnet 192.168.20.64/27 spans .64-.95, so the broadcast is 192.168.20.95."
      },
      {
        label: "Is .77 a usable host in this subnet?",
        hint: "between network and broadcast",
        options: ["Yes", "No, it is the network address", "No, it is the broadcast address", "No, it is out of range"],
        answer: 0,
        explain: "The usable range is .65-.94, and 77 lies within it, so 192.168.20.77 is a valid host address."
      }
    ],
    summary: "With /27 the block size is 32. Host .77 falls in 192.168.20.64/27 (range .64-.95), broadcast .95, usable .65-.94 — .77 is a valid host."
  },
  {
    id: "PBQ-020",
    format: 1,
    domain: 1,
    title: "VLSM Across Departments",
    brief: "Allocate subnets from 10.1.0.0/22 to three departments using VLSM, largest first.",
    exhibitTitle: "VLSM allocation requirements",
    exhibit: "Supernet: <span class='cy'>10.1.0.0/22</span>\nSales: <span class='ok'>500 hosts</span>\nSupport: <span class='ok'>200 hosts</span>\nLab: <span class='ok'>100 hosts</span>\nAllocate largest first, contiguous",
    fields: [
      {
        label: "Prefix for Sales (500 hosts)",
        hint: "smallest prefix fitting 500 usable",
        options: ["/22", "/23", "/24", "/25"],
        answer: 1,
        explain: "A /23 gives 2^9 - 2 = 510 usable hosts, the smallest block that holds 500. A /24 only gives 254."
      },
      {
        label: "Sales subnet address",
        hint: "start of the supernet",
        options: ["10.1.0.0/23", "10.1.1.0/23", "10.1.2.0/23", "10.1.4.0/23"],
        answer: 0,
        explain: "Allocating largest first from the start, Sales gets 10.1.0.0/23 (covers 10.1.0.0-10.1.1.255)."
      },
      {
        label: "Prefix for Support (200 hosts)",
        hint: "smallest prefix fitting 200 usable",
        options: ["/23", "/24", "/25", "/26"],
        answer: 1,
        explain: "A /24 gives 254 usable hosts, the smallest block that holds 200."
      },
      {
        label: "Support subnet address",
        hint: "next free block after Sales /23",
        options: ["10.1.1.0/24", "10.1.2.0/24", "10.1.3.0/24", "10.1.4.0/24"],
        answer: 1,
        explain: "Sales used 10.1.0.0-10.1.1.255, so the next free /24 is 10.1.2.0/24."
      },
      {
        label: "Lab subnet address (100 hosts, /25)",
        hint: "next free block after Support /24",
        options: ["10.1.2.128/25", "10.1.3.0/25", "10.1.3.128/25", "10.1.4.0/25"],
        answer: 1,
        explain: "A /25 (126 usable) fits 100 hosts. After Support's 10.1.2.0/24 the next free block is 10.1.3.0/25."
      }
    ],
    summary: "VLSM largest-first from 10.1.0.0/22: Sales 10.1.0.0/23, Support 10.1.2.0/24, Lab 10.1.3.0/25 — packing variable sizes contiguously without waste."
  },
  {
    id: "PBQ-021",
    format: 1,
    domain: 1,
    title: "/29 Server Cluster",
    brief: "A small server cluster needs its own /29. Compute the addressing details.",
    exhibitTitle: "server cluster requirements",
    exhibit: "Assigned subnet: <span class='cy'>10.20.30.16/29</span>\nUse: <span class='dim'>clustered app servers</span>",
    fields: [
      {
        label: "Subnet mask for /29",
        hint: "29 network bits",
        options: ["255.255.255.240", "255.255.255.248", "255.255.255.252", "255.255.255.224"],
        answer: 1,
        explain: "A /29 has 29 network bits. The last octet is 11111000 = 248, so the mask is 255.255.255.248."
      },
      {
        label: "Usable hosts per /29",
        hint: "3 host bits",
        options: ["4", "6", "8", "14"],
        answer: 1,
        explain: "3 host bits give 2^3 = 8 addresses; minus network and broadcast leaves 6 usable hosts."
      },
      {
        label: "First usable host",
        hint: "network + 1",
        options: ["10.20.30.16", "10.20.30.17", "10.20.30.18", "10.20.30.23"],
        answer: 1,
        explain: "The network is 10.20.30.16, so the first usable host is 10.20.30.17."
      },
      {
        label: "Broadcast address",
        hint: "block size 8",
        options: ["10.20.30.22", "10.20.30.23", "10.20.30.24", "10.20.30.31"],
        answer: 1,
        explain: "Block size is 8, so 10.20.30.16/29 spans .16-.23; the broadcast is 10.20.30.23."
      }
    ],
    summary: "A /29 (255.255.255.248) has block size 8 and 6 usable hosts. For 10.20.30.16/29: network .16, usable .17-.22, broadcast .23."
  },
  {
    id: "PBQ-022",
    format: 1,
    domain: 1,
    title: "/28 Subnet Boundaries",
    brief: "A DMZ segment uses a /28. Identify its network, range, and broadcast.",
    exhibitTitle: "DMZ subnet requirements",
    exhibit: "Assigned subnet: <span class='cy'>203.0.113.48/28</span>\nUse: <span class='warnc'>public-facing DMZ hosts</span>",
    fields: [
      {
        label: "Subnet mask for /28",
        hint: "28 network bits",
        options: ["255.255.255.224", "255.255.255.240", "255.255.255.248", "255.255.255.252"],
        answer: 1,
        explain: "A /28 has 28 network bits. The last octet is 11110000 = 240, so the mask is 255.255.255.240."
      },
      {
        label: "Usable hosts per /28",
        hint: "4 host bits",
        options: ["6", "14", "16", "30"],
        answer: 1,
        explain: "4 host bits give 2^4 = 16 addresses; minus network and broadcast leaves 14 usable hosts."
      },
      {
        label: "Network address (already given) range start",
        hint: "block size 16",
        options: ["203.0.113.32", "203.0.113.48", "203.0.113.64", "203.0.113.16"],
        answer: 1,
        explain: "Block size is 16; multiples are .0, .16, .32, .48, .64. The stated subnet starts at 203.0.113.48."
      },
      {
        label: "Broadcast address",
        hint: "next boundary - 1",
        options: ["203.0.113.62", "203.0.113.63", "203.0.113.64", "203.0.113.79"],
        answer: 1,
        explain: "203.0.113.48/28 spans .48-.63, so the broadcast is 203.0.113.63 (usable .49-.62)."
      }
    ],
    summary: "A /28 (255.255.255.240) has block size 16 and 14 usable hosts. For 203.0.113.48/28: network .48, usable .49-.62, broadcast .63."
  },
  {
    id: "PBQ-023",
    format: 1,
    domain: 1,
    title: "Which /30 Does a Host Belong To?",
    brief: "Several /30 links share a /24. Determine which /30 a given interface IP belongs to.",
    exhibitTitle: "link membership requirements",
    exhibit: "Interface IP: <span class='cy'>192.168.5.26</span>\nMask: <span class='cy'>255.255.255.252</span> (/30)\nIdentify the /30 link",
    fields: [
      {
        label: "Block size in last octet",
        hint: "256 - 252",
        options: ["2", "4", "8", "16"],
        answer: 1,
        explain: "256 - 252 = 4, so /30 subnets increment by 4: .0, .4, .8, .12, .16, .20, .24, .28, ..."
      },
      {
        label: "Network address for .26",
        hint: "largest multiple of 4 <= 26",
        options: ["192.168.5.20", "192.168.5.24", "192.168.5.26", "192.168.5.28"],
        answer: 1,
        explain: "Multiples of 4 around 26 are 24 and 28; 26 falls in 24-27, so the network is 192.168.5.24."
      },
      {
        label: "Broadcast for that /30",
        hint: "network + 3",
        options: ["192.168.5.25", "192.168.5.26", "192.168.5.27", "192.168.5.28"],
        answer: 2,
        explain: "192.168.5.24/30 spans .24-.27, so the broadcast is 192.168.5.27."
      },
      {
        label: "The two usable hosts on this link",
        hint: "network+1 and broadcast-1",
        options: [".24 and .27", ".25 and .26", ".25 and .27", ".24 and .25"],
        answer: 1,
        explain: "Usable hosts are network+1 (.25) and broadcast-1 (.26), so .25 and .26 — and .26 is our interface."
      }
    ],
    summary: "With /30 the block size is 4. Host .26 belongs to 192.168.5.24/30 (range .24-.27), usable .25-.26, broadcast .27."
  },
  {
    id: "PBQ-024",
    format: 1,
    domain: 1,
    title: "/26 Subnet Planning",
    brief: "Split 192.168.100.0/24 into /26 subnets and place a host.",
    exhibitTitle: "subnet split requirements",
    exhibit: "Parent: <span class='cy'>192.168.100.0/24</span>\nSubnet to: <span class='ok'>/26</span>\nHost to place: <span class='cy'>192.168.100.150</span>",
    fields: [
      {
        label: "Subnet mask for /26",
        hint: "26 network bits",
        options: ["255.255.255.128", "255.255.255.192", "255.255.255.224", "255.255.255.240"],
        answer: 1,
        explain: "A /26 has 26 network bits. The last octet is 11000000 = 192, so the mask is 255.255.255.192."
      },
      {
        label: "How many /26 subnets fit in a /24?",
        hint: "2 borrowed bits",
        options: ["2", "4", "8", "16"],
        answer: 1,
        explain: "Going from /24 to /26 borrows 2 bits, giving 2^2 = 4 subnets (.0, .64, .128, .192)."
      },
      {
        label: "Which /26 contains .150?",
        hint: "block size 64",
        options: ["192.168.100.64/26", "192.168.100.128/26", "192.168.100.192/26", "192.168.100.96/26"],
        answer: 1,
        explain: "Block size is 64; .150 falls between 128 and 191, so it is in 192.168.100.128/26."
      },
      {
        label: "Broadcast of that /26",
        hint: "128 + 64 - 1",
        options: ["192.168.100.159", "192.168.100.191", "192.168.100.192", "192.168.100.255"],
        answer: 1,
        explain: "192.168.100.128/26 spans .128-.191, so the broadcast is 192.168.100.191 (usable .129-.190)."
      }
    ],
    summary: "A /26 (255.255.255.192) splits a /24 into 4 subnets of 64 addresses. Host .150 lands in 192.168.100.128/26, broadcast .191."
  },
  {
    id: "PBQ-025",
    format: 1,
    domain: 1,
    title: "/25 Two-Way Split",
    brief: "Divide 10.50.4.0/24 into two /25 halves and assign hosts.",
    exhibitTitle: "two-way split requirements",
    exhibit: "Parent: <span class='cy'>10.50.4.0/24</span>\nSplit into: <span class='ok'>two /25 subnets</span>\nHost: <span class='cy'>10.50.4.200</span>",
    fields: [
      {
        label: "Subnet mask for /25",
        hint: "25 network bits",
        options: ["255.255.255.0", "255.255.255.128", "255.255.255.192", "255.255.255.224"],
        answer: 1,
        explain: "A /25 has 25 network bits. The last octet is 10000000 = 128, so the mask is 255.255.255.128."
      },
      {
        label: "Usable hosts per /25",
        hint: "7 host bits",
        options: ["62", "126", "128", "254"],
        answer: 1,
        explain: "7 host bits give 2^7 = 128 addresses; minus network and broadcast leaves 126 usable hosts."
      },
      {
        label: "Which /25 contains .200?",
        hint: "two halves: .0 and .128",
        options: ["10.50.4.0/25", "10.50.4.128/25", "10.50.4.192/25", "10.50.4.64/25"],
        answer: 1,
        explain: "The two halves are 10.50.4.0/25 (.0-.127) and 10.50.4.128/25 (.128-.255). .200 is in the second, 10.50.4.128/25."
      },
      {
        label: "Broadcast of the subnet holding .200",
        hint: "upper half ends at .255",
        options: ["10.50.4.191", "10.50.4.254", "10.50.4.255", "10.50.4.128"],
        answer: 2,
        explain: "10.50.4.128/25 spans .128-.255, so its broadcast is 10.50.4.255 (usable .129-.254)."
      }
    ],
    summary: "A /25 (255.255.255.128) splits a /24 into two 128-address halves with 126 usable each. Host .200 is in 10.50.4.128/25, broadcast .255."
  },
  {
    id: "PBQ-026",
    format: 1,
    domain: 1,
    title: "VLSM with /30 Links and LAN",
    brief: "From 172.20.0.0/24, carve a /26 LAN plus several /30 router links.",
    exhibitTitle: "mixed VLSM requirements",
    exhibit: "Parent: <span class='cy'>172.20.0.0/24</span>\nLAN: <span class='ok'>50 hosts</span>\nRouter links: <span class='ok'>several /30 P2P</span>\nAllocate LAN first",
    fields: [
      {
        label: "Prefix for the 50-host LAN",
        hint: "smallest fitting 50 usable",
        options: ["/24", "/25", "/26", "/27"],
        answer: 2,
        explain: "A /26 gives 62 usable hosts, the smallest block that holds 50. A /27 only gives 30."
      },
      {
        label: "LAN subnet address",
        hint: "start of parent",
        options: ["172.20.0.0/26", "172.20.0.64/26", "172.20.0.128/26", "172.20.0.32/26"],
        answer: 0,
        explain: "Allocating the LAN first from the start of the parent gives 172.20.0.0/26 (covers .0-.63)."
      },
      {
        label: "First /30 link after the LAN",
        hint: "next free block is .64, block size 4",
        options: ["172.20.0.60/30", "172.20.0.64/30", "172.20.0.68/30", "172.20.0.128/30"],
        answer: 1,
        explain: "After the LAN ends at .63, the next free address is .64, so the first /30 is 172.20.0.64/30 (.64-.67)."
      },
      {
        label: "Second /30 link",
        hint: "next block after .64/30",
        options: ["172.20.0.66/30", "172.20.0.68/30", "172.20.0.72/30", "172.20.0.70/30"],
        answer: 1,
        explain: "The first /30 used .64-.67, so the next /30 is 172.20.0.68/30 (.68-.71)."
      }
    ],
    summary: "VLSM packs the 50-host LAN into 172.20.0.0/26 (.0-.63), then /30 links follow at 172.20.0.64/30, 172.20.0.68/30, and so on — block size 4 each."
  },
  {
    id: "PBQ-027",
    format: 1,
    domain: 1,
    title: "Host Range for a /23",
    brief: "A large user VLAN uses a /23. Determine its span and usable range.",
    exhibitTitle: "large VLAN requirements",
    exhibit: "Assigned subnet: <span class='cy'>10.8.6.0/23</span>\nUse: <span class='dim'>user workstation VLAN</span>",
    fields: [
      {
        label: "Subnet mask for /23",
        hint: "23 network bits",
        options: ["255.255.254.0", "255.255.255.0", "255.255.252.0", "255.255.255.128"],
        answer: 0,
        explain: "A /23 has 23 network bits. The third octet is 11111110 = 254, so the mask is 255.255.254.0."
      },
      {
        label: "Usable hosts per /23",
        hint: "9 host bits",
        options: ["254", "510", "512", "1022"],
        answer: 1,
        explain: "9 host bits give 2^9 = 512 addresses; minus network and broadcast leaves 510 usable hosts."
      },
      {
        label: "Broadcast address",
        hint: "block spans two /24 ranges",
        options: ["10.8.6.255", "10.8.7.255", "10.8.8.0", "10.8.7.254"],
        answer: 1,
        explain: "10.8.6.0/23 covers 10.8.6.0 through 10.8.7.255, so the broadcast is 10.8.7.255."
      },
      {
        label: "Last usable host",
        hint: "broadcast - 1",
        options: ["10.8.6.254", "10.8.7.254", "10.8.7.255", "10.8.8.1"],
        answer: 1,
        explain: "Broadcast is 10.8.7.255, so the last usable host is 10.8.7.254."
      }
    ],
    summary: "A /23 (255.255.254.0) spans two /24 ranges, 512 addresses, 510 usable. For 10.8.6.0/23: usable 10.8.6.1-10.8.7.254, broadcast 10.8.7.255."
  },
  {
    id: "PBQ-028",
    format: 1,
    domain: 1,
    title: "Subnet ID with /26 in the Third Octet Region",
    brief: "Determine the subnet and broadcast for a host using a /26 mask.",
    exhibitTitle: "host placement requirements",
    exhibit: "Host IP: <span class='cy'>192.168.40.130</span>\nMask: <span class='cy'>255.255.255.192</span> (/26)\nFind subnet and usable range",
    fields: [
      {
        label: "Block size in last octet",
        hint: "256 - 192",
        options: ["32", "64", "128", "16"],
        answer: 1,
        explain: "256 - 192 = 64, so /26 subnets increment by 64: .0, .64, .128, .192."
      },
      {
        label: "Subnet address for .130",
        hint: "largest multiple of 64 <= 130",
        options: ["192.168.40.64", "192.168.40.128", "192.168.40.192", "192.168.40.96"],
        answer: 1,
        explain: "Multiples of 64 are 64, 128, 192; .130 falls in 128-191, so the subnet is 192.168.40.128."
      },
      {
        label: "First usable host",
        hint: "network + 1",
        options: ["192.168.40.128", "192.168.40.129", "192.168.40.130", "192.168.40.131"],
        answer: 1,
        explain: "The network is 192.168.40.128, so the first usable host is 192.168.40.129."
      },
      {
        label: "Broadcast address",
        hint: "128 + 64 - 1",
        options: ["192.168.40.190", "192.168.40.191", "192.168.40.192", "192.168.40.255"],
        answer: 1,
        explain: "192.168.40.128/26 spans .128-.191, so the broadcast is 192.168.40.191 (usable .129-.190)."
      }
    ],
    summary: "With /26 the block size is 64. Host .130 belongs to 192.168.40.128/26, usable .129-.190, broadcast .191."
  },
  {
    id: "PBQ-029",
    format: 1,
    domain: 1,
    title: "Loopback Addressing with /32",
    brief: "Router loopbacks are configured as /32 host routes. Confirm the addressing facts.",
    exhibitTitle: "loopback requirements",
    exhibit: "Loopback: <span class='cy'>10.255.255.1/32</span>\nUse: <span class='ok'>router ID / management</span>",
    fields: [
      {
        label: "Subnet mask for /32",
        hint: "all network bits",
        options: ["255.255.255.252", "255.255.255.254", "255.255.255.255", "255.255.255.0"],
        answer: 2,
        explain: "A /32 has all 32 bits as network bits, so the mask is 255.255.255.255 — a single host route."
      },
      {
        label: "Number of addresses in a /32",
        hint: "0 host bits",
        options: ["1", "2", "4", "0"],
        answer: 0,
        explain: "0 host bits means 2^0 = 1 address; a /32 represents exactly one host, with no network/broadcast distinction."
      },
      {
        label: "Typical use of a /32 in routing",
        hint: "single-address route",
        options: ["A broadcast domain", "A point-to-point link", "A loopback or host route", "A summary route"],
        answer: 2,
        explain: "A /32 identifies one specific host and is commonly used for loopback interfaces and host routes."
      },
      {
        label: "The usable address in this /32",
        hint: "the address itself",
        options: ["10.255.255.0", "10.255.255.1", "10.255.255.2", "10.255.255.255"],
        answer: 1,
        explain: "The single address represented by 10.255.255.1/32 is 10.255.255.1 itself."
      }
    ],
    summary: "A /32 (255.255.255.255) is a single-host route — ideal for loopbacks and router IDs. It contains exactly one address, here 10.255.255.1."
  },
  {
    id: "PBQ-030",
    format: 1,
    domain: 1,
    title: "VLSM: Departments plus P2P Links",
    brief: "From 192.168.0.0/24 allocate a department LAN and a /31 uplink using VLSM.",
    exhibitTitle: "combined VLSM requirements",
    exhibit: "Parent: <span class='cy'>192.168.0.0/24</span>\nFinance LAN: <span class='ok'>25 hosts</span>\nUplink: <span class='ok'>/31 point-to-point</span>\nAllocate LAN first, then uplink high in the range",
    fields: [
      {
        label: "Prefix for the 25-host Finance LAN",
        hint: "smallest fitting 25 usable",
        options: ["/26", "/27", "/28", "/29"],
        answer: 1,
        explain: "A /27 gives 30 usable hosts, the smallest block that holds 25. A /28 only gives 14."
      },
      {
        label: "Finance LAN subnet address",
        hint: "start of parent",
        options: ["192.168.0.0/27", "192.168.0.32/27", "192.168.0.64/27", "192.168.0.128/27"],
        answer: 0,
        explain: "Allocating the LAN first from the start gives 192.168.0.0/27 (covers .0-.31)."
      },
      {
        label: "Finance LAN broadcast",
        hint: "block size 32",
        options: ["192.168.0.30", "192.168.0.31", "192.168.0.32", "192.168.0.63"],
        answer: 1,
        explain: "192.168.0.0/27 spans .0-.31, so the broadcast is 192.168.0.31 (usable .1-.30)."
      },
      {
        label: "Two endpoint addresses of the 192.168.0.254/31 uplink",
        hint: "even/odd pair",
        options: [".253 and .254", ".254 and .255", ".255 and .256", ".252 and .253"],
        answer: 1,
        explain: "A /31 at 192.168.0.254 covers 192.168.0.254 and 192.168.0.255, both usable as endpoints under RFC 3021."
      }
    ],
    summary: "VLSM mixes a /27 Finance LAN (192.168.0.0/27, usable .1-.30) with a /31 uplink (192.168.0.254-.255) high in the parent /24 — efficient use of one /24."
  }
);
NETPLUS.pbqs.push(
  {
    id: "PBQ-031",
    format: 2,
    domain: 2,
    title: "Create a VLAN and Name It",
    brief: "On switch SW1, create VLAN 20 in the database and assign it the name SALES.",
    exhibitTitle: "SW1# / VLAN database",
    exhibit: "<span class='dim'>SW1#</span> <span class='cy'>configure terminal</span>\n<span class='dim'>SW1(config)#</span> <span class='warnc'>_______</span>\n<span class='dim'>SW1(config-vlan)#</span> <span class='warnc'>_______</span>\n<span class='dim'>SW1(config-vlan)#</span> <span class='ok'>end</span>",
    fields: [
      {
        label: "Command to create VLAN 20",
        hint: "Enter VLAN configuration sub-mode for a single VLAN ID.",
        options: ["vlan 20", "vlan database 20", "switchport vlan 20", "create vlan 20"],
        answer: 0,
        explain: "From global config, \"vlan 20\" creates the VLAN (if needed) and enters config-vlan mode."
      },
      {
        label: "Command to name the VLAN",
        hint: "Assign the friendly name inside config-vlan mode.",
        options: ["description SALES", "name SALES", "vlan name SALES", "set name SALES"],
        answer: 1,
        explain: "Inside config-vlan mode the \"name SALES\" command labels the VLAN."
      },
      {
        label: "Command to verify the new VLAN",
        hint: "Display the VLAN table from privileged EXEC.",
        options: ["show interfaces", "show running-config vlan", "show vlan brief", "show mac address-table"],
        answer: 2,
        explain: "\"show vlan brief\" lists VLAN IDs, names, and assigned access ports."
      }
    ],
    summary: "Creating VLAN 20 named SALES requires \"vlan 20\" then \"name SALES\"; verify with \"show vlan brief\"."
  },
  {
    id: "PBQ-032",
    format: 2,
    domain: 2,
    title: "Assign an Access Port to a VLAN",
    brief: "Configure interface Gi0/2 as a static access port in VLAN 20 for a single workstation.",
    exhibitTitle: "SW1# / interface Gi0/2",
    exhibit: "<span class='dim'>SW1(config)#</span> <span class='cy'>interface gigabitethernet0/2</span>\n<span class='dim'>SW1(config-if)#</span> <span class='warnc'>_______</span>\n<span class='dim'>SW1(config-if)#</span> <span class='warnc'>_______</span>\n<span class='dim'>SW1(config-if)#</span> <span class='ok'>no shutdown</span>",
    fields: [
      {
        label: "Set the interface mode",
        hint: "Force the port to operate as an access (untagged) port.",
        options: ["switchport mode trunk", "switchport mode access", "switchport mode dynamic", "switchport nonegotiate"],
        answer: 1,
        explain: "\"switchport mode access\" pins the port to a single untagged VLAN."
      },
      {
        label: "Place the port in VLAN 20",
        hint: "Bind the access VLAN membership.",
        options: ["switchport access vlan 20", "switchport trunk vlan 20", "vlan 20", "switchport voice vlan 20"],
        answer: 0,
        explain: "\"switchport access vlan 20\" assigns the untagged VLAN for the access port."
      },
      {
        label: "Verify the port assignment",
        hint: "Show the switchport status for one interface.",
        options: ["show ip interface brief", "show vlan id 20", "show interfaces gi0/2 switchport", "show running-config"],
        answer: 2,
        explain: "\"show interfaces gi0/2 switchport\" reveals administrative mode and access VLAN."
      }
    ],
    summary: "An access port needs \"switchport mode access\" plus \"switchport access vlan 20\"."
  },
  {
    id: "PBQ-033",
    format: 2,
    domain: 2,
    title: "Configure an 802.1Q Trunk",
    brief: "Make uplink Gi0/24 an 802.1Q trunk so tagged frames from multiple VLANs cross to SW2.",
    exhibitTitle: "SW1# / interface Gi0/24 uplink",
    exhibit: "<span class='dim'>SW1(config)#</span> <span class='cy'>interface gigabitethernet0/24</span>\n<span class='dim'>SW1(config-if)#</span> <span class='warnc'>_______</span>\n<span class='dim'>SW1(config-if)#</span> <span class='warnc'>_______</span>\n<span class='dim'>SW1(config-if)#</span> <span class='ok'>end</span>",
    fields: [
      {
        label: "Set the trunk encapsulation",
        hint: "Many switches require selecting dot1q before forcing trunk mode.",
        options: ["switchport trunk encapsulation isl", "switchport trunk encapsulation dot1q", "switchport encapsulation dot1q", "encapsulation dot1q"],
        answer: 1,
        explain: "\"switchport trunk encapsulation dot1q\" selects the IEEE 802.1Q tagging standard."
      },
      {
        label: "Force the interface to trunk",
        hint: "Set the operational mode, not access.",
        options: ["switchport mode access", "switchport mode trunk", "switchport trunk allowed vlan all", "switchport mode dynamic auto"],
        answer: 1,
        explain: "\"switchport mode trunk\" makes the port carry tagged traffic for multiple VLANs."
      },
      {
        label: "Verify trunk status",
        hint: "Confirm the operational mode and allowed VLANs.",
        options: ["show interfaces trunk", "show vlan brief", "show mac address-table", "show cdp neighbors"],
        answer: 0,
        explain: "\"show interfaces trunk\" lists trunking ports, encapsulation, native VLAN, and allowed VLANs."
      }
    ],
    summary: "An 802.1Q trunk uses \"switchport trunk encapsulation dot1q\" then \"switchport mode trunk\"."
  },
  {
    id: "PBQ-034",
    format: 2,
    domain: 2,
    title: "Restrict Allowed VLANs on a Trunk",
    brief: "Limit trunk Gi0/24 so it carries only VLANs 10, 20, and 30 and nothing else.",
    exhibitTitle: "SW1# / trunk allowed list",
    exhibit: "<span class='dim'>SW1(config)#</span> <span class='cy'>interface gigabitethernet0/24</span>\n<span class='dim'>SW1(config-if)#</span> <span class='ok'>switchport mode trunk</span>\n<span class='dim'>SW1(config-if)#</span> <span class='warnc'>_______</span>\n<span class='dim'>SW1(config-if)#</span> <span class='warnc'>_______</span>",
    fields: [
      {
        label: "Set the explicit allowed VLAN list",
        hint: "Replace the default all-VLAN list with three specific IDs.",
        options: ["switchport trunk allowed vlan 10,20,30", "switchport access vlan 10,20,30", "switchport trunk vlan 10 20 30", "allowed vlan 10,20,30"],
        answer: 0,
        explain: "\"switchport trunk allowed vlan 10,20,30\" prunes the trunk to just those VLANs."
      },
      {
        label: "Add VLAN 40 later without retyping the list",
        hint: "Append a VLAN to the existing allowed set.",
        options: ["switchport trunk allowed vlan 40", "switchport trunk allowed vlan add 40", "switchport trunk allowed vlan all 40", "switchport trunk vlan add 40"],
        answer: 1,
        explain: "\"switchport trunk allowed vlan add 40\" appends 40 instead of overwriting the list."
      },
      {
        label: "Verify the allowed list",
        hint: "Inspect trunk details.",
        options: ["show vlan brief", "show interfaces trunk", "show ip route", "show spanning-tree"],
        answer: 1,
        explain: "\"show interfaces trunk\" shows the VLANs allowed and active on the trunk."
      }
    ],
    summary: "Use the allowed-VLAN list and the \"add\" keyword to extend it without overwriting."
  },
  {
    id: "PBQ-035",
    format: 2,
    domain: 2,
    title: "Set the Native VLAN on a Trunk",
    brief: "Change the trunk native (untagged) VLAN from 1 to 99 on both ends to harden the link.",
    exhibitTitle: "SW1# / native VLAN 99",
    exhibit: "<span class='dim'>SW1(config)#</span> <span class='cy'>interface gigabitethernet0/24</span>\n<span class='dim'>SW1(config-if)#</span> <span class='ok'>switchport mode trunk</span>\n<span class='dim'>SW1(config-if)#</span> <span class='warnc'>_______</span>\n<span class='dim'>SW1(config-if)#</span> <span class='ok'>end</span>",
    fields: [
      {
        label: "Command to set native VLAN 99",
        hint: "The untagged VLAN carried over the trunk.",
        options: ["switchport native vlan 99", "switchport trunk native vlan 99", "switchport access vlan 99", "native vlan 99"],
        answer: 1,
        explain: "\"switchport trunk native vlan 99\" defines which VLAN is sent untagged on the trunk."
      },
      {
        label: "Why must both ends match?",
        hint: "Think about a native VLAN mismatch.",
        options: ["To enable PoE", "To prevent a native VLAN mismatch and VLAN hopping", "To speed up STP", "To allow half-duplex"],
        answer: 1,
        explain: "Mismatched native VLANs cause traffic leakage between VLANs and CDP/STP warnings."
      },
      {
        label: "Where the native VLAN appears in output",
        hint: "Which show command reports it?",
        options: ["show interfaces trunk", "show mac address-table", "show ip interface brief", "show vlan id 99"],
        answer: 0,
        explain: "\"show interfaces trunk\" includes a Native vlan column for each trunk port."
      }
    ],
    summary: "Set a non-default native VLAN with \"switchport trunk native vlan 99\" on both trunk ends."
  },
  {
    id: "PBQ-036",
    format: 2,
    domain: 2,
    title: "Bundle Links with LACP",
    brief: "Aggregate Gi0/1 and Gi0/2 into a LACP EtherChannel (Port-Channel 1) toward SW2.",
    exhibitTitle: "SW1# / LACP port-channel",
    exhibit: "<span class='dim'>SW1(config)#</span> <span class='cy'>interface range gi0/1 - 2</span>\n<span class='dim'>SW1(config-if-range)#</span> <span class='warnc'>_______</span>\n<span class='dim'>SW1(config-if-range)#</span> <span class='ok'>no shutdown</span>\n<span class='dim'>SW1(config-if-range)#</span> <span class='warnc'>_______</span>",
    fields: [
      {
        label: "Bundle the ports with active LACP",
        hint: "LACP negotiates; \"active\" sends LACP packets.",
        options: ["channel-group 1 mode on", "channel-group 1 mode active", "channel-group 1 mode desirable", "port-channel 1 mode active"],
        answer: 1,
        explain: "\"channel-group 1 mode active\" enrolls the ports using LACP in active mode."
      },
      {
        label: "Which protocol is the IEEE standard?",
        hint: "Open standard vs Cisco proprietary.",
        options: ["PAgP", "LACP (802.3ad)", "STP", "VTP"],
        answer: 1,
        explain: "LACP (IEEE 802.3ad / 802.1AX) is the vendor-neutral link-aggregation protocol; PAgP is Cisco-only."
      },
      {
        label: "Verify the bundle",
        hint: "Show EtherChannel summary.",
        options: ["show etherchannel summary", "show vlan brief", "show interfaces status", "show ip route"],
        answer: 0,
        explain: "\"show etherchannel summary\" shows the port-channel number, protocol, and member-port flags."
      }
    ],
    summary: "LACP bundles use \"channel-group 1 mode active\"; verify with \"show etherchannel summary\"."
  },
  {
    id: "PBQ-037",
    format: 2,
    domain: 2,
    title: "Match LACP Negotiation Modes",
    brief: "Confirm both switches will form an LACP bundle and avoid a hard-coded mismatch.",
    exhibitTitle: "SW1 <-> SW2 / channel modes",
    exhibit: "<span class='dim'>SW1 gi0/1-2:</span> <span class='ok'>channel-group 1 mode active</span>\n<span class='dim'>SW2 gi0/1-2:</span> <span class='warnc'>_______</span>\n<span class='dim'>Goal:</span> <span class='cy'>form Po1 via LACP</span>",
    fields: [
      {
        label: "Mode for SW2 to complete LACP",
        hint: "active+active or active+passive both work for LACP.",
        options: ["channel-group 1 mode on", "channel-group 1 mode passive", "channel-group 1 mode desirable", "channel-group 1 mode auto"],
        answer: 1,
        explain: "LACP passive responds to LACP packets; active+passive successfully negotiates a bundle."
      },
      {
        label: "Which pairing FAILS to form a channel?",
        hint: "One side static, one side negotiating.",
        options: ["active + passive", "active + active", "on + active", "passive + active"],
        answer: 2,
        explain: "\"on\" is static (no negotiation); pairing it with LACP active causes the channel not to form."
      },
      {
        label: "Mode for static (no protocol) bundling",
        hint: "Forces the channel up without LACP/PAgP.",
        options: ["mode active", "mode passive", "mode on", "mode desirable"],
        answer: 2,
        explain: "\"mode on\" forces the EtherChannel up with no negotiation on either side."
      }
    ],
    summary: "LACP forms with active/active or active/passive; \"on\" must be on both ends or the channel fails."
  },
  {
    id: "PBQ-038",
    format: 2,
    domain: 2,
    title: "Enable Port Security with a Limit",
    brief: "Lock access port Gi0/5 to a maximum of 2 MAC addresses and shut down on violation.",
    exhibitTitle: "SW1# / port-security Gi0/5",
    exhibit: "<span class='dim'>SW1(config)#</span> <span class='cy'>interface gi0/5</span>\n<span class='dim'>SW1(config-if)#</span> <span class='ok'>switchport mode access</span>\n<span class='dim'>SW1(config-if)#</span> <span class='warnc'>_______</span>\n<span class='dim'>SW1(config-if)#</span> <span class='warnc'>_______</span>\n<span class='dim'>SW1(config-if)#</span> <span class='warnc'>_______</span>",
    fields: [
      {
        label: "Enable port security on the interface",
        hint: "The feature must be turned on first.",
        options: ["switchport port-security", "port-security enable", "switchport security on", "ip port-security"],
        answer: 0,
        explain: "\"switchport port-security\" activates the feature on an access port."
      },
      {
        label: "Limit to 2 learned addresses",
        hint: "Set the maximum secure MAC count.",
        options: ["switchport port-security max 2", "switchport port-security maximum 2", "switchport port-security limit 2", "port-security maximum 2"],
        answer: 1,
        explain: "\"switchport port-security maximum 2\" caps the number of secure MAC addresses at two."
      },
      {
        label: "Shut the port on violation",
        hint: "The default and most restrictive action.",
        options: ["switchport port-security violation protect", "switchport port-security violation restrict", "switchport port-security violation shutdown", "switchport port-security violation drop"],
        answer: 2,
        explain: "\"violation shutdown\" err-disables the port when an unauthorized MAC appears (the default)."
      }
    ],
    summary: "Port security needs enable, \"maximum 2\", and \"violation shutdown\" for err-disable on breach."
  },
  {
    id: "PBQ-039",
    format: 2,
    domain: 2,
    title: "Sticky MAC and Recovery",
    brief: "Make Gi0/5 learn its allowed MAC dynamically, save it to config, and recover from err-disable.",
    exhibitTitle: "SW1# / sticky learning",
    exhibit: "<span class='dim'>SW1(config-if)#</span> <span class='ok'>switchport port-security</span>\n<span class='dim'>SW1(config-if)#</span> <span class='warnc'>_______</span>\n<span class='dim'>SW1#</span> <span class='warnc'>_______</span>",
    fields: [
      {
        label: "Learn the MAC and add it to running-config",
        hint: "Sticky converts learned addresses to secure entries.",
        options: ["switchport port-security mac-address sticky", "switchport port-security sticky enable", "switchport port-security mac sticky", "switchport sticky mac-address"],
        answer: 0,
        explain: "\"switchport port-security mac-address sticky\" learns the MAC and writes it into the config."
      },
      {
        label: "View current secure MAC entries",
        hint: "Privileged EXEC verification command.",
        options: ["show port-security address", "show mac sticky", "show secure mac-address", "show port-security sticky"],
        answer: 0,
        explain: "\"show port-security address\" lists secure MACs, their type, and the bound port."
      },
      {
        label: "Recover an err-disabled port (manual)",
        hint: "Bounce the interface.",
        options: ["clear port-security", "reset interface", "shutdown then no shutdown", "no switchport port-security"],
        answer: 2,
        explain: "Toggling \"shutdown\" then \"no shutdown\" re-enables a port that violation shutdown disabled."
      }
    ],
    summary: "Sticky learning saves the MAC; \"show port-security address\" verifies; a shut/no-shut recovers the port."
  },
  {
    id: "PBQ-040",
    format: 2,
    domain: 2,
    title: "Configure a Static Route",
    brief: "On router R1, reach the remote 10.2.2.0/24 network via next-hop 192.0.2.1.",
    exhibitTitle: "R1# / static route",
    exhibit: "<span class='dim'>R1#</span> <span class='cy'>configure terminal</span>\n<span class='dim'>R1(config)#</span> <span class='warnc'>_______</span>\n<span class='dim'>R1(config)#</span> <span class='ok'>end</span>\n<span class='dim'>Remote net:</span> <span class='cy'>10.2.2.0/24</span>  <span class='dim'>Next hop:</span> <span class='cy'>192.0.2.1</span>",
    fields: [
      {
        label: "Correct static route syntax",
        hint: "ip route <network> <mask> <next-hop>.",
        options: ["ip route 10.2.2.0 255.255.255.0 192.0.2.1", "ip route 10.2.2.0/24 192.0.2.1", "route add 10.2.2.0 192.0.2.1", "ip route 192.0.2.1 255.255.255.0 10.2.2.0"],
        answer: 0,
        explain: "The dotted mask form \"ip route 10.2.2.0 255.255.255.0 192.0.2.1\" is the IOS syntax."
      },
      {
        label: "Administrative distance of a static route",
        hint: "Lower than OSPF and RIP by default.",
        options: ["0", "1", "110", "120"],
        answer: 1,
        explain: "A static route has an administrative distance of 1 by default (directly connected is 0)."
      },
      {
        label: "Verify the route is installed",
        hint: "Display the routing table.",
        options: ["show ip route", "show running-config", "show ip interface brief", "show arp"],
        answer: 0,
        explain: "\"show ip route\" shows the static route flagged with an S in the table."
      }
    ],
    summary: "Static route syntax is \"ip route network mask next-hop\"; AD is 1; verify with \"show ip route\"."
  },
  {
    id: "PBQ-041",
    format: 2,
    domain: 2,
    title: "Configure a Default Route",
    brief: "Send all unknown traffic from R1 to the ISP edge at 203.0.113.1 (gateway of last resort).",
    exhibitTitle: "R1# / default route",
    exhibit: "<span class='dim'>R1(config)#</span> <span class='warnc'>_______</span>\n<span class='dim'>ISP next hop:</span> <span class='cy'>203.0.113.1</span>\n<span class='dim'>Goal:</span> <span class='ok'>0.0.0.0/0 -> ISP</span>",
    fields: [
      {
        label: "Correct default-route command",
        hint: "Quad-zero network and quad-zero mask.",
        options: ["ip route 0.0.0.0 0.0.0.0 203.0.113.1", "ip route 0.0.0.0 255.255.255.255 203.0.113.1", "ip default-network 203.0.113.1", "ip route default 203.0.113.1"],
        answer: 0,
        explain: "\"ip route 0.0.0.0 0.0.0.0 203.0.113.1\" matches every destination as the default route."
      },
      {
        label: "What the default route is called in the table",
        hint: "The router uses it when nothing else matches.",
        options: ["Gateway of last resort", "Floating route", "Summary route", "Host route"],
        answer: 0,
        explain: "A default route appears as the gateway of last resort in \"show ip route\"."
      },
      {
        label: "Make it a backup (floating) static route",
        hint: "Raise the administrative distance above the dynamic protocol.",
        options: ["ip route 0.0.0.0 0.0.0.0 203.0.113.1 250", "ip route 0.0.0.0 0.0.0.0 203.0.113.1 1", "ip route 0.0.0.0 0.0.0.0 203.0.113.1 backup", "ip route floating 0.0.0.0 0.0.0.0 203.0.113.1"],
        answer: 0,
        explain: "Appending a high AD like 250 makes it a floating static that only installs if the primary fails."
      }
    ],
    summary: "A default route is \"ip route 0.0.0.0 0.0.0.0 next-hop\"; a trailing AD makes it floating."
  },
  {
    id: "PBQ-042",
    format: 2,
    domain: 2,
    title: "Start an OSPF Process",
    brief: "Enable OSPF process 1 on R1 and advertise the 10.1.1.0/24 LAN in area 0.",
    exhibitTitle: "R1# / OSPF process & area",
    exhibit: "<span class='dim'>R1(config)#</span> <span class='warnc'>_______</span>\n<span class='dim'>R1(config-router)#</span> <span class='warnc'>_______</span>\n<span class='dim'>LAN:</span> <span class='cy'>10.1.1.0/24</span>  <span class='dim'>Area:</span> <span class='cy'>0</span>",
    fields: [
      {
        label: "Start OSPF process 1",
        hint: "The process ID is locally significant.",
        options: ["router ospf 1", "router ospf area 0", "ospf process 1", "router rip ospf 1"],
        answer: 0,
        explain: "\"router ospf 1\" starts the OSPF routing process with locally significant ID 1."
      },
      {
        label: "Advertise the LAN in area 0",
        hint: "OSPF network statements use a wildcard mask.",
        options: ["network 10.1.1.0 255.255.255.0 area 0", "network 10.1.1.0 0.0.0.255 area 0", "network 10.1.1.0/24 area 0", "network 10.1.1.0 0.0.0.255"],
        answer: 1,
        explain: "OSPF uses a wildcard mask: \"network 10.1.1.0 0.0.0.255 area 0\"."
      },
      {
        label: "Verify OSPF neighbors",
        hint: "Confirm adjacency state (FULL).",
        options: ["show ip ospf neighbor", "show ip route ospf", "show ospf interface", "show ip protocols"],
        answer: 0,
        explain: "\"show ip ospf neighbor\" lists adjacencies and their states (e.g., FULL)."
      }
    ],
    summary: "OSPF needs \"router ospf 1\" and a network statement with a wildcard mask and area 0."
  },
  {
    id: "PBQ-043",
    format: 2,
    domain: 2,
    title: "Inter-VLAN Routing (Router-on-a-Stick)",
    brief: "Configure subinterfaces on R1 Gi0/0 to route between VLAN 10 and VLAN 20 over one trunk.",
    exhibitTitle: "R1# / Gi0/0 subinterfaces",
    exhibit: "<span class='dim'>R1(config)#</span> <span class='cy'>interface gi0/0.10</span>\n<span class='dim'>R1(config-subif)#</span> <span class='warnc'>_______</span>\n<span class='dim'>R1(config-subif)#</span> <span class='warnc'>_______</span>\n<span class='dim'>R1(config-subif)#</span> <span class='ok'>exit</span>",
    fields: [
      {
        label: "Tag the subinterface for VLAN 10",
        hint: "802.1Q encapsulation on the subinterface.",
        options: ["encapsulation dot1q 10", "switchport trunk vlan 10", "encapsulation isl 10", "vlan 10 dot1q"],
        answer: 0,
        explain: "\"encapsulation dot1q 10\" associates the subinterface with VLAN 10 tagged frames."
      },
      {
        label: "Assign the VLAN 10 gateway IP",
        hint: "This becomes the default gateway for VLAN 10 hosts.",
        options: ["ip address 10.10.10.1 255.255.255.0", "ip address dhcp", "switchport access vlan 10", "no ip address"],
        answer: 0,
        explain: "The subinterface IP \"10.10.10.1/24\" is the default gateway for that VLAN."
      },
      {
        label: "Required on the switch port to R1",
        hint: "One physical link must carry both VLANs.",
        options: ["switchport mode access", "switchport mode trunk", "no switchport", "switchport voice vlan"],
        answer: 1,
        explain: "The switch port to R1 must be a trunk so both VLAN tags reach the router."
      }
    ],
    summary: "Router-on-a-stick uses dot1q subinterfaces with gateway IPs, fed by a trunk from the switch."
  },
  {
    id: "PBQ-044",
    format: 2,
    domain: 2,
    title: "Enable a Routed (Layer 3) SVI",
    brief: "On a layer-3 switch, create an SVI for VLAN 30 as the gateway 10.30.30.1/24.",
    exhibitTitle: "L3SW# / interface Vlan30",
    exhibit: "<span class='dim'>L3SW(config)#</span> <span class='ok'>ip routing</span>\n<span class='dim'>L3SW(config)#</span> <span class='warnc'>_______</span>\n<span class='dim'>L3SW(config-if)#</span> <span class='warnc'>_______</span>\n<span class='dim'>L3SW(config-if)#</span> <span class='warnc'>_______</span>",
    fields: [
      {
        label: "Create the VLAN 30 interface",
        hint: "The SVI is a virtual interface named after the VLAN.",
        options: ["interface vlan 30", "interface svi 30", "interface gi0/30", "vlan interface 30"],
        answer: 0,
        explain: "\"interface vlan 30\" creates the switched virtual interface for VLAN 30."
      },
      {
        label: "Assign the gateway address",
        hint: "Hosts in VLAN 30 will use this IP.",
        options: ["ip address 10.30.30.1 255.255.255.0", "switchport access vlan 30", "ip helper-address 10.30.30.1", "standby 30 ip 10.30.30.1"],
        answer: 0,
        explain: "\"ip address 10.30.30.1 255.255.255.0\" makes the SVI the VLAN 30 gateway."
      },
      {
        label: "Bring the SVI up",
        hint: "The interface is administratively down by default.",
        options: ["enable interface", "no shutdown", "switchport", "spanning-tree enable"],
        answer: 1,
        explain: "\"no shutdown\" activates the SVI so it can route VLAN 30 traffic."
      }
    ],
    summary: "An L3 SVI needs \"ip routing\", \"interface vlan 30\", an IP, and \"no shutdown\"."
  },
  {
    id: "PBQ-045",
    format: 2,
    domain: 2,
    title: "Troubleshoot a Trunk/Access Mismatch",
    brief: "VLAN 20 hosts on SW1 cannot reach SW2. The uplink shows a config mismatch; correct it.",
    exhibitTitle: "SW1 <-> SW2 / uplink mismatch",
    exhibit: "<span class='dim'>SW1 gi0/24:</span> <span class='ok'>switchport mode trunk</span>\n<span class='dim'>SW2 gi0/24:</span> <span class='warnc'>switchport mode access</span>\n<span class='dim'>SW2 gi0/24:</span> <span class='warnc'>switchport access vlan 1</span>\n<span class='dim'>Symptom:</span> <span class='warnc'>VLAN 20 isolated</span>",
    fields: [
      {
        label: "Root cause of the failure",
        hint: "One side tags, the other does not.",
        options: ["Duplex mismatch", "SW2 port is access, not trunk", "Wrong cable type", "STP is disabled"],
        answer: 1,
        explain: "SW2's port is an access port in VLAN 1, so tagged VLAN 20 frames are dropped."
      },
      {
        label: "Fix on SW2 gi0/24",
        hint: "Match SW1's trunk configuration.",
        options: ["switchport mode access", "switchport mode trunk", "switchport access vlan 20", "no switchport"],
        answer: 1,
        explain: "Setting \"switchport mode trunk\" on SW2 lets the tagged VLAN 20 traffic pass."
      },
      {
        label: "Confirm VLAN 20 now crosses the link",
        hint: "Check allowed/active VLANs on the trunk.",
        options: ["show interfaces trunk", "show ip route", "show port-security", "show cdp neighbors detail"],
        answer: 0,
        explain: "\"show interfaces trunk\" confirms both ports trunk and VLAN 20 is allowed and active."
      }
    ],
    summary: "A trunk/access mismatch isolates VLANs; both uplink ends must be trunks for tagged traffic."
  }
);
NETPLUS.pbqs.push(
  {
    id: "PBQ-046", format: 2, domain: 2,
    title: "Elect the STP Root Bridge",
    brief: "Three switches run per-VLAN spanning tree. The core switch <b>SW-CORE</b> must always be the root for VLAN 10. Read the bridge IDs and configure deterministic root election.",
    exhibitTitle: "SW-CORE# show spanning-tree vlan 10",
    exhibit: "VLAN0010\n  Spanning tree enabled protocol <span class='cy'>rstp</span>\n  Root ID    Priority    <span class='warnc'>32778</span>\n             Address     <span class='dim'>00a1.0bcd.1111</span>\n             This bridge is <span class='warnc'>NOT</span> the root\n\n  Bridge ID  Priority    32778  (priority 32768 sys-id-ext 10)\n             Address     <span class='dim'>00a1.0bcd.2222</span>\n\nInterface        Role Sts Cost      Prio.Nbr\n---------------- ---- --- --------- --------\nGi0/1            <span class='warnc'>Root</span> FWD 4         128.1\nGi0/2            Desg FWD 4         128.2",
    fields: [
      { label: "Why is SW-CORE NOT currently the root for VLAN 10?", hint: "Lowest bridge ID (priority + MAC) wins the election.", options: ["Its priority is tied but its MAC address is higher than the current root's", "It has no VLAN 10 configured", "Its interfaces are administratively down", "RSTP cannot elect a root bridge"], answer: 0, explain: "All switches likely share the default priority 32768; the switch with the lowest MAC won. SW-CORE's MAC (…2222) is higher than the root's (…1111), so it lost the tie." },
      { label: "Command to force SW-CORE to become root for VLAN 10 automatically:", hint: "A macro that sets a low priority for you.", options: ["spanning-tree vlan 10 root primary", "spanning-tree mode rstp", "spanning-tree portfast default", "no spanning-tree vlan 10"], answer: 0, explain: "spanning-tree vlan 10 root primary lowers the priority (typically to 24576) so this switch wins the root election for VLAN 10." },
      { label: "If you set priority manually instead, which value guarantees root with default neighbors?", hint: "Must be a multiple of 4096 and lower than 32768.", options: ["4096", "32768", "32778", "61440"], answer: 0, explain: "Priority must be in increments of 4096. 4096 is lower than the default 32768, so SW-CORE wins. 4096 is set with spanning-tree vlan 10 priority 4096." },
      { label: "After SW-CORE becomes root, what role do all of ITS active ports take?", hint: "The root bridge has no root port.", options: ["All become designated (forwarding) ports", "All become root ports", "All become blocking ports", "Half root, half designated"], answer: 0, explain: "The root bridge is closest to itself on every segment, so all of its ports are designated and forwarding; it never has a root port." }
    ],
    summary: "Lowest bridge ID wins STP root election. Use 'root primary' or a priority that is a multiple of 4096 to make the core deterministic; the root's ports are all designated."
  },
  {
    id: "PBQ-047", format: 2, domain: 2,
    title: "PortFast and BPDU Guard on Access Ports",
    brief: "End-user access ports on <b>SW-ACCESS</b> take ~30 seconds to start forwarding, and a user once plugged in a rogue switch causing a loop. Harden the edge ports.",
    exhibitTitle: "SW-ACCESS(config)# interface range Gi0/3 - 24",
    exhibit: "interface GigabitEthernet0/3\n switchport mode <span class='ok'>access</span>\n switchport access vlan 20\n <span class='dim'>! no edge optimizations applied</span>\n\n<span class='warnc'>! Symptom: 30s delay (listening+learning) before PCs get DHCP</span>\n<span class='warnc'>! Risk: a rogue switch on an access port can win root election</span>",
    fields: [
      { label: "Command to skip the listening/learning delay on these access ports:", hint: "Moves the port straight to forwarding.", options: ["spanning-tree portfast", "spanning-tree cost 1", "switchport nonegotiate", "spanning-tree vlan 20 root primary"], answer: 0, explain: "spanning-tree portfast transitions an edge access port directly to forwarding, eliminating the ~30s delay so DHCP completes quickly." },
      { label: "Command that shuts the port if a BPDU is ever received (rogue switch defense):", hint: "Err-disables the port on BPDU arrival.", options: ["spanning-tree bpduguard enable", "spanning-tree portfast", "switchport port-security", "no cdp enable"], answer: 0, explain: "BPDU Guard err-disables a PortFast port the instant it receives a BPDU, blocking a rogue switch from joining the spanning tree." },
      { label: "On which interface type should PortFast NEVER be enabled?", hint: "PortFast assumes no other switch is attached.", options: ["A trunk link between two switches", "An access port to a PC", "An access port to a printer", "An access port to an IP phone"], answer: 0, explain: "PortFast is only for edge/access ports with end devices. Enabling it on a switch-to-switch trunk can create a temporary loop because it skips loop-prevention states." },
      { label: "After BPDU Guard err-disables a port, how does it recover by default?", hint: "Default behavior requires intervention.", options: ["Manually: shutdown then no shutdown (or errdisable recovery)", "It recovers automatically in 30 seconds", "It reboots the switch", "It never forwards again until reimaged"], answer: 0, explain: "By default an err-disabled port stays down until you bounce it (shut/no shut) or configure errdisable recovery to auto-restore after a timer." }
    ],
    summary: "PortFast speeds edge ports to forwarding; BPDU Guard err-disables them if a BPDU appears. Never use PortFast on trunks. Recover err-disabled ports manually or via errdisable recovery."
  },
  {
    id: "PBQ-048", format: 2, domain: 2,
    title: "Router-on-a-Stick: Inter-VLAN Subinterfaces",
    brief: "A single router link to <b>SW1</b> must route between VLAN 10 (10.1.10.0/24) and VLAN 20 (10.1.20.0/24). The switch port is already a trunk. Configure the router subinterfaces.",
    exhibitTitle: "R1(config)# interface Gi0/0  (trunked to SW1)",
    exhibit: "interface GigabitEthernet0/0\n <span class='dim'>no ip address</span>\n no shutdown\n!\n<span class='cy'>interface GigabitEthernet0/0.10</span>\n encapsulation dot1q <span class='warnc'>?</span>\n ip address 10.1.10.1 255.255.255.0\n!\n<span class='cy'>interface GigabitEthernet0/0.20</span>\n encapsulation dot1q <span class='warnc'>?</span>\n ip address 10.1.20.1 255.255.255.0\n!\nSW1: switchport mode trunk (Gi0/1 to R1)",
    fields: [
      { label: "Encapsulation command for subinterface Gi0/0.10:", hint: "Tag frames for VLAN 10 using the 802.1Q standard.", options: ["encapsulation dot1q 10", "encapsulation dot1q 20", "switchport access vlan 10", "encapsulation isl 10"], answer: 0, explain: "Each subinterface must tag with its VLAN ID: 'encapsulation dot1q 10' associates Gi0/0.10 with VLAN 10. ISL is legacy/Cisco-only; 802.1Q is standard." },
      { label: "What IP address do VLAN 10 hosts use as their default gateway?", hint: "The router subinterface IP for their VLAN.", options: ["10.1.10.1", "10.1.20.1", "10.1.10.254", "0.0.0.0"], answer: 0, explain: "Gi0/0.10 holds 10.1.10.1, so VLAN 10 hosts point their default gateway at 10.1.10.1 to reach other subnets." },
      { label: "What must the SW1 port toward R1 be configured as?", hint: "It must carry multiple VLANs to the router.", options: ["A trunk port (802.1Q)", "An access port in VLAN 10", "An access port in VLAN 20", "A routed (no switchport) port"], answer: 0, explain: "Router-on-a-stick needs a single trunk carrying both tagged VLANs to the router; an access port could carry only one VLAN." },
      { label: "Which native-VLAN mismatch symptom would break this setup?", hint: "Both ends of the trunk must agree on the untagged VLAN.", options: ["Native VLAN mismatch causes untagged traffic to land in the wrong VLAN", "It increases routing table size", "It disables dot1q encapsulation entirely", "It forces all ports into VLAN 1"], answer: 0, explain: "If R1 and SW1 disagree on the native (untagged) VLAN, untagged frames are misassociated, leaking traffic between VLANs and causing connectivity problems." }
    ],
    summary: "Router-on-a-stick uses dot1q subinterfaces, one per VLAN, each with the VLAN's gateway IP. The switch uplink must be a trunk; watch for native-VLAN mismatches."
  },
  {
    id: "PBQ-049", format: 2, domain: 2,
    title: "SVI Inter-VLAN Routing on a Layer 3 Switch",
    brief: "Replace router-on-a-stick with switched virtual interfaces on <b>L3-SW</b>. Enable routing and create gateways for VLAN 30 and VLAN 40.",
    exhibitTitle: "L3-SW(config)# (multilayer switch)",
    exhibit: "<span class='warnc'>ip routing</span>   <span class='dim'>! must be enabled for SVIs to route</span>\n!\ninterface <span class='cy'>vlan 30</span>\n ip address 172.16.30.1 255.255.255.0\n no shutdown\n!\ninterface <span class='cy'>vlan 40</span>\n ip address 172.16.40.1 255.255.255.0\n no shutdown\n!\ninterface Gi1/0/5\n switchport access vlan 30",
    fields: [
      { label: "Which global command is REQUIRED for the SVIs to route between VLANs?", hint: "Layer 3 switches do not route by default.", options: ["ip routing", "spanning-tree vlan 30 root primary", "switchport mode trunk", "no switchport"], answer: 0, explain: "Without 'ip routing' the multilayer switch only switches within VLANs; enabling it turns on Layer 3 forwarding between the SVIs." },
      { label: "What is interface VLAN 30 called?", hint: "A virtual Layer 3 interface for the VLAN.", options: ["A switched virtual interface (SVI)", "A subinterface", "A loopback", "A trunk port"], answer: 0, explain: "An 'interface vlan X' is an SVI: a virtual L3 interface giving the VLAN a gateway IP on the switch itself." },
      { label: "An SVI shows 'up/down'. The most common cause is:", hint: "An SVI needs at least one active member port.", options: ["No active access/trunk port carries that VLAN, or the VLAN is not in the VLAN database", "ip routing is disabled", "The IP address is a multicast address", "PortFast is missing"], answer: 0, explain: "An SVI line protocol comes up only when at least one port in that VLAN is up and the VLAN exists. No active member port (or missing VLAN) leaves it up/down." },
      { label: "Default gateway a host in VLAN 40 should use:", hint: "The SVI address for VLAN 40.", options: ["172.16.40.1", "172.16.30.1", "172.16.40.254", "172.16.0.1"], answer: 0, explain: "Interface VLAN 40 is 172.16.40.1, so VLAN 40 hosts use that as their gateway for inter-VLAN routing." }
    ],
    summary: "L3 switches route between VLANs using SVIs, but only after 'ip routing' is enabled. An SVI stays up/down until an active member port and the VLAN exist."
  },
  {
    id: "PBQ-050", format: 2, domain: 2,
    title: "Troubleshoot: show vlan brief",
    brief: "A PC on port Gi0/8 cannot reach its VLAN 50 server. Read the VLAN assignment table to find the misconfiguration.",
    exhibitTitle: "SW2# show vlan brief",
    exhibit: "VLAN Name                 Status    Ports\n---- -------------------- --------- -------------------------------\n1    default              active    Gi0/1, Gi0/2\n50   SERVERS              <span class='ok'>active</span>    Gi0/9, Gi0/10\n60   USERS                active    Gi0/3, Gi0/4\n99   MGMT                 active    Gi0/24\n\n<span class='warnc'>Gi0/8 is currently in VLAN 1 (default) — expected VLAN 50</span>",
    fields: [
      { label: "Why can't the PC on Gi0/8 reach the VLAN 50 server?", hint: "Compare Gi0/8's VLAN to the server's VLAN.", options: ["Gi0/8 is in VLAN 1, not VLAN 50 — different broadcast domains", "VLAN 50 is shut down", "The server ports are in VLAN 60", "Gi0/8 is a trunk"], answer: 0, explain: "Gi0/8 sits in VLAN 1 while the servers are in VLAN 50. Without a Layer 3 route between them, the PC is isolated in the wrong broadcast domain." },
      { label: "Commands to move Gi0/8 into VLAN 50:", hint: "Set the access VLAN under the interface.", options: ["interface Gi0/8 ; switchport mode access ; switchport access vlan 50", "vlan 50 ; name SERVERS", "interface Gi0/8 ; switchport trunk allowed vlan 50", "ip routing"], answer: 0, explain: "Under the interface, set access mode and assign access VLAN 50 so the port joins the SERVERS broadcast domain." },
      { label: "If VLAN 50 did NOT appear in the table, the next step would be:", hint: "The VLAN must exist in the database first.", options: ["Create it with 'vlan 50' in global config", "Reboot the switch", "Enable ip routing", "Convert Gi0/8 to a trunk"], answer: 0, explain: "Assigning a port to a nonexistent VLAN leaves it inactive. Create the VLAN ('vlan 50') in the database first, then assign ports." },
      { label: "Which command confirms the fix took effect on the port?", hint: "Shows operational mode and access VLAN.", options: ["show interfaces Gi0/8 switchport", "show ip route", "show mac address-table", "show spanning-tree summary"], answer: 0, explain: "'show interfaces Gi0/8 switchport' reports the administrative/operational mode and the access VLAN, confirming Gi0/8 is now in VLAN 50." }
    ],
    summary: "show vlan brief reveals port-to-VLAN assignments. A port left in VLAN 1 can't reach another VLAN without L3 routing — reassign the access VLAN, creating the VLAN first if needed."
  },
  {
    id: "PBQ-051", format: 2, domain: 2,
    title: "Troubleshoot: show interfaces status",
    brief: "An uplink between two switches won't pass traffic. Read the interface status output to identify the duplex/trunk problem.",
    exhibitTitle: "SW3# show interfaces status",
    exhibit: "Port    Name      Status       Vlan    Duplex  Speed Type\nGi0/1   uplink-A  <span class='warnc'>err-disabled</span>  trunk   auto    auto  10/100/1000\nGi0/2   pc-jdoe   connected    60      a-full  a-1000 10/100/1000\nGi0/3   ap-lobby  connected    trunk   a-full  a-1000 10/100/1000\nGi0/24  printer   <span class='warnc'>notconnect</span>   90      auto    auto  10/100/1000",
    fields: [
      { label: "What does the 'err-disabled' status on Gi0/1 indicate?", hint: "A protection feature shut the port down.", options: ["A violation (e.g., BPDU guard or port-security) disabled the port", "The cable is unplugged", "The port is administratively shut", "The VLAN was deleted"], answer: 0, explain: "err-disabled means a protective mechanism (port-security violation, BPDU Guard, etc.) shut the port. It must be cleared and the port bounced." },
      { label: "What does 'notconnect' on Gi0/24 most likely mean?", hint: "No link is detected at Layer 1.", options: ["No cable/link detected — physical layer issue", "A spanning-tree loop", "A duplex mismatch", "An ACL is blocking it"], answer: 0, explain: "notconnect means the port is enabled but sees no link partner — typically an unplugged or faulty cable, or the far end is down." },
      { label: "First step to recover the err-disabled uplink Gi0/1:", hint: "Find and fix the cause, then bounce the port.", options: ["Identify the violation cause, fix it, then 'shutdown' / 'no shutdown'", "Delete and recreate the VLAN", "Change the speed to 10 Mbps", "Enable ip routing"], answer: 0, explain: "Determine why it err-disabled (logs/show errdisable), remove the cause, then bounce the port with shut/no shut (or use errdisable recovery)." },
      { label: "A duplex mismatch on a link typically shows up as:", hint: "Half/full disagreement causes collisions.", options: ["Late collisions and CRC/runt errors with slow throughput", "An immediate err-disabled state", "VLAN 1 reassignment", "A higher OSPF cost"], answer: 0, explain: "Duplex mismatch (one side full, one half) causes late collisions and CRC/runt errors, degrading throughput rather than fully dropping the link." }
    ],
    summary: "show interfaces status surfaces err-disabled (protection triggered), notconnect (no link), and duplex/speed. Fix the root cause, then bounce err-disabled ports."
  },
  {
    id: "PBQ-052", format: 2, domain: 2,
    title: "Troubleshoot: show ip route",
    brief: "Hosts behind <b>R2</b> can't reach 203.0.113.0/24. Read the routing table to find why and choose the fix.",
    exhibitTitle: "R2# show ip route",
    exhibit: "Codes: C connected, S static, O OSPF, * default\n\nC    10.2.0.0/24 is directly connected, Gi0/0\nC    10.2.1.0/24 is directly connected, Gi0/1\nO    192.168.5.0/24 [110/2] via 10.2.0.2\n<span class='warnc'>! no route to 203.0.113.0/24 and no gateway of last resort</span>\n\nGateway of last resort is <span class='warnc'>not set</span>",
    fields: [
      { label: "Why does traffic to 203.0.113.0/24 fail?", hint: "Look for any matching route or default.", options: ["No matching route and no default route exists — packets are dropped", "OSPF cost is too high", "The connected routes overlap", "The interface is shut"], answer: 0, explain: "Nothing in the table matches 203.0.113.0/24 and there is no gateway of last resort, so R2 has no path and drops the packets." },
      { label: "Command to add a default route toward next hop 10.2.0.254:", hint: "0.0.0.0/0 covers all unknown destinations.", options: ["ip route 0.0.0.0 0.0.0.0 10.2.0.254", "ip route 203.0.113.0 255.255.255.0 Gi0/0", "router ospf 1", "ip default-gateway 10.2.0.254"], answer: 0, explain: "A default static route 'ip route 0.0.0.0 0.0.0.0 10.2.0.254' sends all unmatched traffic (including 203.0.113.0/24) to the next hop." },
      { label: "The '[110/2]' on the OSPF route means:", hint: "Two numbers: administrative distance / metric.", options: ["Administrative distance 110, metric (cost) 2", "110 hops, 2 ms latency", "VLAN 110, area 2", "Priority 110, bandwidth 2"], answer: 0, explain: "In brackets, the first number is the administrative distance (OSPF = 110) and the second is the route metric (cost), here 2." },
      { label: "If two routes to the same prefix existed, which is preferred?", hint: "Lower administrative distance wins between sources.", options: ["The one with the lower administrative distance", "The one with the higher metric", "The OSPF route always, regardless of AD", "The most recently learned route"], answer: 0, explain: "When different sources offer the same prefix, the lowest administrative distance wins (e.g., static AD 1 beats OSPF AD 110)." }
    ],
    summary: "A missing route with no default means dropped traffic. Add 'ip route 0.0.0.0 0.0.0.0 <next-hop>'. Brackets show [AD/metric]; lowest AD wins between route sources."
  },
  {
    id: "PBQ-053", format: 2, domain: 2,
    title: "Troubleshoot: show spanning-tree",
    brief: "A link is unexpectedly blocking. Read the spanning-tree output to interpret port roles and confirm loop-free operation.",
    exhibitTitle: "SW4# show spanning-tree vlan 60",
    exhibit: "VLAN0060\n  Root ID    Priority 28672   Address 00aa.1111.0001\n  Bridge ID  Priority 32828   Address 00aa.2222.0002\n\nInterface  Role Sts Cost  Prio.Nbr\n---------- ---- --- ----- --------\nGi0/1      <span class='ok'>Root</span> FWD 4     128.1\nGi0/2      Desg FWD 4     128.2\nGi0/3      <span class='warnc'>Altn BLK</span> 4     128.3",
    fields: [
      { label: "What is the role and state of Gi0/3?", hint: "Read the Role/Sts columns.", options: ["Alternate port in blocking state (loop prevention)", "Root port forwarding", "Designated port forwarding", "Disabled port"], answer: 0, explain: "Gi0/3 is an Alternate port in BLK (blocking) — RSTP keeps it as a backup path, blocked to prevent a loop." },
      { label: "Gi0/3 blocking is:", hint: "Is this a fault or normal STP behavior?", options: ["Normal — STP blocks the redundant path to keep the topology loop-free", "A fault that must be cleared", "A duplex mismatch", "An err-disabled condition"], answer: 0, explain: "Blocking a redundant link is exactly what spanning tree should do; it prevents loops while keeping the link as a standby." },
      { label: "Which interface is this switch's path toward the root bridge?", hint: "Only one port is the root port.", options: ["Gi0/1 (Root port)", "Gi0/2 (Designated)", "Gi0/3 (Alternate)", "None — this is the root"], answer: 0, explain: "Gi0/1 is the Root port, the single lowest-cost path toward the root bridge. The root bridge's address differs from this bridge's, so this is not the root." },
      { label: "If the Gi0/1 root path fails, what happens to Gi0/3?", hint: "RSTP can promote an alternate quickly.", options: ["It transitions to the root port and starts forwarding", "It stays blocked permanently", "It err-disables", "It becomes the new root bridge"], answer: 0, explain: "RSTP rapidly promotes the Alternate (Gi0/3) to the new root port and moves it to forwarding when the primary root path is lost." }
    ],
    summary: "show spanning-tree shows port roles: Root (path to root), Designated (forwarding on a segment), Alternate/Blocking (redundant backup). Blocking a redundant link is normal loop prevention."
  },
  {
    id: "PBQ-054", format: 2, domain: 2,
    title: "Bring Up OSPF Neighbors",
    brief: "<b>R3</b> and <b>R4</b> share 10.0.34.0/24 but never form an OSPF adjacency. Configure OSPF and verify the neighbor.",
    exhibitTitle: "R3(config)# router ospf 1",
    exhibit: "router ospf 1\n network 10.0.34.0 0.0.0.255 area <span class='warnc'>?</span>\n!\nR3# show ip ospf neighbor\n<span class='warnc'>(empty — no neighbors)</span>\n\n<span class='dim'>R4 is in area 0 on 10.0.34.0/24; hello/dead 10/40; MTU 1500</span>",
    fields: [
      { label: "Which area must R3 use on 10.0.34.0/24 to peer with R4 (area 0)?", hint: "Both ends of a link must share the same area.", options: ["area 0", "area 1", "area 34", "area 110"], answer: 0, explain: "OSPF neighbors on the same segment must be in the same area. R4 uses area 0, so R3's network statement must also place the link in area 0." },
      { label: "The wildcard mask 0.0.0.255 in the network statement means:", hint: "Wildcard is the inverse of a subnet mask.", options: ["Match the /24 network 10.0.34.0 (inverse of 255.255.255.0)", "Match a single host", "Match all 10.x.x.x networks", "Match nothing"], answer: 0, explain: "OSPF uses wildcard (inverse) masks. 0.0.0.255 matches the /24, enabling OSPF on interfaces in 10.0.34.0/24." },
      { label: "Which mismatch will PREVENT the adjacency from forming?", hint: "Several parameters must match between neighbors.", options: ["Mismatched hello/dead timers, area, or MTU", "Different hostnames", "Different interface descriptions", "Different clock settings"], answer: 0, explain: "OSPF requires matching area, subnet/mask, hello and dead timers, and MTU to form a full adjacency; any mismatch stalls it (often at EXSTART for MTU)." },
      { label: "Command to confirm the neighbor reached FULL state:", hint: "Lists neighbor state and router IDs.", options: ["show ip ospf neighbor", "show ip route", "show vlan brief", "show interfaces status"], answer: 0, explain: "'show ip ospf neighbor' lists each neighbor and its state; FULL (or FULL/DR/BDR) confirms a complete adjacency." }
    ],
    summary: "OSPF neighbors must share area, subnet, timers, and MTU. Use the correct area in the network statement (with a wildcard mask) and verify with 'show ip ospf neighbor'."
  },
  {
    id: "PBQ-055", format: 2, domain: 2,
    title: "PoE and Voice VLAN for IP Phones",
    brief: "Deploy IP phones with PCs daisy-chained behind them on <b>SW5</b>. The port must power the phone, tag voice traffic, and pass untagged PC data.",
    exhibitTitle: "SW5(config)# interface Gi0/12",
    exhibit: "interface GigabitEthernet0/12\n switchport mode access\n switchport access vlan 60        <span class='dim'>! PC data (untagged)</span>\n switchport voice vlan <span class='warnc'>?</span>   <span class='dim'>! phone (tagged)</span>\n <span class='ok'>power inline auto</span>          <span class='dim'>! PoE to the phone</span>\n!\n<span class='dim'>Phone draws ~7W; switch is 802.3af capable (15.4W/port)</span>",
    fields: [
      { label: "Command to place phone traffic in voice VLAN 200:", hint: "Voice VLAN rides tagged alongside the access VLAN.", options: ["switchport voice vlan 200", "switchport access vlan 200", "switchport trunk allowed vlan 200", "encapsulation dot1q 200"], answer: 0, explain: "'switchport voice vlan 200' tells the phone (via CDP/LLDP-MED) to tag voice frames in VLAN 200 while the PC's data stays untagged in the access VLAN." },
      { label: "How are PC data and phone voice frames separated on this single port?", hint: "One is tagged, one is not.", options: ["PC data is untagged (access VLAN); voice is 802.1Q-tagged (voice VLAN)", "Both are untagged", "Both are tagged the same", "The PC traffic is dropped"], answer: 0, explain: "The phone passes the PC's untagged frames in the data VLAN and tags its own voice frames into the voice VLAN, separating the two on one cable." },
      { label: "The phone needs 7W and the switch is 802.3af. Is power sufficient?", hint: "Compare the standard's budget to the draw.", options: ["Yes — 802.3af provides up to ~15.4W per port, more than 7W", "No — 802.3af maxes at 5W", "Only with 802.3bt", "Only if the PC is unplugged"], answer: 0, explain: "802.3af (PoE) supplies up to 15.4W at the port (12.95W at the device), comfortably covering a 7W phone. 802.3at/bt offer more for higher-draw devices." },
      { label: "Command/option that lets the switch supply power automatically:", hint: "Negotiates and delivers PoE as needed.", options: ["power inline auto", "power inline never", "no power inline", "switchport nonegotiate"], answer: 0, explain: "'power inline auto' lets the switch detect a powered device and deliver PoE automatically; 'never' disables PoE on the port." }
    ],
    summary: "A voice-enabled access port powers the phone (PoE), tags voice in the voice VLAN, and passes PC data untagged in the access VLAN. 802.3af covers ~15W; use higher standards for bigger loads."
  },
  {
    id: "PBQ-056", format: 2, domain: 2,
    title: "Configure an 802.1Q Trunk and Allowed VLANs",
    brief: "The uplink between <b>SW6</b> and <b>SW7</b> must carry VLANs 10, 20, and 99 only. Configure the trunk and restrict the VLAN list.",
    exhibitTitle: "SW6(config)# interface Gi0/1",
    exhibit: "interface GigabitEthernet0/1\n switchport mode <span class='warnc'>?</span>\n switchport trunk encapsulation dot1q\n switchport trunk allowed vlan <span class='warnc'>?</span>\n switchport trunk native vlan 99\n!\n<span class='dim'>SW7 Gi0/1 is already 'switchport mode trunk'</span>",
    fields: [
      { label: "Mode setting to make Gi0/1 a trunk:", hint: "Force trunking, not dynamic negotiation.", options: ["switchport mode trunk", "switchport mode access", "switchport mode dynamic auto", "no switchport"], answer: 0, explain: "'switchport mode trunk' statically forces the port to trunk. 'dynamic auto' on both ends would NOT form a trunk (both passive)." },
      { label: "Command to allow ONLY VLANs 10, 20, and 99:", hint: "Explicitly list the permitted VLANs.", options: ["switchport trunk allowed vlan 10,20,99", "switchport trunk allowed vlan all", "switchport access vlan 10,20,99", "switchport trunk allowed vlan add 1"], answer: 0, explain: "'switchport trunk allowed vlan 10,20,99' prunes the trunk to exactly those VLANs, blocking all others and reducing unnecessary broadcast flooding." },
      { label: "With native VLAN 99 set here, SW7 must also use native VLAN 99 or:", hint: "Native VLANs must match on both ends.", options: ["A native VLAN mismatch occurs, mixing untagged traffic between VLANs", "The trunk speeds up", "VLAN 99 is deleted", "All VLANs become tagged"], answer: 0, explain: "Both trunk ends must agree on the native (untagged) VLAN. A mismatch causes untagged frames to land in the wrong VLAN and triggers errors." },
      { label: "Command to verify which VLANs are actually trunking:", hint: "Shows trunk mode, native, and allowed/active VLANs.", options: ["show interfaces trunk", "show ip route", "show power inline", "show ip ospf neighbor"], answer: 0, explain: "'show interfaces trunk' lists each trunk port's mode, native VLAN, and the allowed/active VLANs, confirming the prune took effect." }
    ],
    summary: "Force trunks with 'switchport mode trunk', restrict VLANs with 'allowed vlan', and match native VLANs on both ends. Verify with 'show interfaces trunk'."
  },
  {
    id: "PBQ-057", format: 2, domain: 2,
    title: "Bundle Links with LACP EtherChannel",
    brief: "Two parallel links between <b>SW8</b> and <b>SW9</b> should act as one logical 2 Gbps trunk using LACP. Configure the channel group.",
    exhibitTitle: "SW8(config)# interface range Gi0/1 - 2",
    exhibit: "interface range GigabitEthernet0/1 - 2\n switchport mode trunk\n channel-group 1 mode <span class='warnc'>?</span>\n!\ninterface Port-channel1\n switchport mode trunk\n!\n<span class='dim'>SW9 is configured with 'channel-group 1 mode active'</span>",
    fields: [
      { label: "Which mode forms an LACP bundle with SW9 ('active')?", hint: "LACP modes are active and passive; both passive won't bundle.", options: ["active", "on", "desirable", "auto"], answer: 0, explain: "LACP uses active/passive. SW9 is active, so SW8 can be active (or passive). 'on' is static (no protocol) and 'desirable/auto' are PAgP, which won't interoperate with LACP." },
      { label: "What is the benefit of bundling these two links?", hint: "Aggregation gives bandwidth and resilience.", options: ["Increased aggregate bandwidth and redundancy without an STP block", "It disables spanning tree globally", "It converts the link to Layer 3 automatically", "It doubles the VLAN count"], answer: 0, explain: "EtherChannel treats the links as one logical interface, summing bandwidth and surviving a single member failure; STP sees one link, so it won't block the redundant one." },
      { label: "What must match on BOTH member interfaces for the bundle to form?", hint: "Inconsistent settings keep ports out of the channel.", options: ["Speed, duplex, switchport mode, and allowed VLANs", "Hostname and clock", "Cable color and length", "OSPF area"], answer: 0, explain: "All bundled members must share speed, duplex, trunk/access mode, native and allowed VLANs; mismatches make a port suspend rather than join." },
      { label: "Command to confirm the Port-channel is bundled and up:", hint: "Shows EtherChannel members and flags.", options: ["show etherchannel summary", "show ip route", "show vlan brief", "show power inline"], answer: 0, explain: "'show etherchannel summary' lists the port-channel and member ports with flags; 'P' (bundled) and 'SU' status confirm the bundle is active." }
    ],
    summary: "LACP needs at least one active end; member ports must match speed/duplex/mode/VLANs. The bundle adds bandwidth and redundancy as one logical link. Verify with 'show etherchannel summary'."
  },
  {
    id: "PBQ-058", format: 2, domain: 2,
    title: "Static Route and Floating Backup",
    brief: "<b>R5</b> reaches 198.51.100.0/24 via a primary ISP (next hop 10.5.0.1) and must fail over to a backup (10.5.9.1). Configure both routes.",
    exhibitTitle: "R5(config)#",
    exhibit: "ip route 198.51.100.0 255.255.255.0 10.5.0.1\n<span class='dim'>! primary, default AD 1</span>\nip route 198.51.100.0 255.255.255.0 10.5.9.1 <span class='warnc'>?</span>\n<span class='dim'>! backup must be installed only if primary fails</span>",
    fields: [
      { label: "What value makes the backup a 'floating' static route?", hint: "Give it a higher administrative distance than the primary.", options: ["A higher AD, e.g. 'ip route ... 10.5.9.1 10'", "AD 0", "AD 1 (same as primary)", "Metric 0"], answer: 0, explain: "A floating static route gets a higher AD (e.g., 10) than the primary (AD 1). It stays out of the table until the primary route is withdrawn, then floats in." },
      { label: "While the primary is healthy, which route is in the routing table?", hint: "Lowest AD wins.", options: ["Only the primary (AD 1) — the backup is hidden", "Both, load-balanced", "Only the backup", "Neither"], answer: 0, explain: "With a lower AD, only the primary installs. The higher-AD backup waits in reserve and is not used while the primary is valid." },
      { label: "The backup activates when:", hint: "The primary's next hop/route must become invalid.", options: ["The primary route is removed (e.g., its next hop/interface goes down)", "The backup AD is lowered to 1", "OSPF is enabled", "The switch reboots"], answer: 0, explain: "If the primary's next hop becomes unreachable (interface down or tracked object fails), the primary is pulled and the floating backup is installed." },
      { label: "A static route's default administrative distance is:", hint: "Static is one of the lowest, just above connected.", options: ["1", "0", "110", "120"], answer: 0, explain: "Static routes default to AD 1 (connected is 0). This is why a static route usually beats dynamic protocols like OSPF (110) for the same prefix." }
    ],
    summary: "A floating static route uses a higher AD so it only installs when the primary fails. Static default AD is 1; verify failover by checking 'show ip route' after downing the primary."
  },
  {
    id: "PBQ-059", format: 2, domain: 2,
    title: "Troubleshoot: VLAN Trunk Pruning Drops a VLAN",
    brief: "After tightening a trunk, VLAN 30 users across the link lost connectivity. Read the trunk output to find and fix it.",
    exhibitTitle: "SW10# show interfaces trunk",
    exhibit: "Port    Mode  Encapsulation  Status    Native vlan\nGi0/1   on    802.1q         trunking  1\n\nPort    Vlans allowed on trunk\nGi0/1   <span class='warnc'>10,20,99</span>\n\nPort    Vlans allowed and active in management domain\nGi0/1   10,20,99\n<span class='warnc'>! VLAN 30 exists on both switches but is NOT allowed on this trunk</span>",
    fields: [
      { label: "Why did VLAN 30 lose cross-switch connectivity?", hint: "Check the allowed VLAN list on the trunk.", options: ["VLAN 30 is not in the trunk's allowed VLAN list, so its frames are pruned", "VLAN 30 was deleted from the database", "The trunk is in access mode", "The native VLAN is wrong"], answer: 0, explain: "The allowed list is 10,20,99 — VLAN 30 is excluded, so the trunk drops VLAN 30 traffic between the switches even though the VLAN exists." },
      { label: "Command to add VLAN 30 without overwriting the existing list:", hint: "Use the 'add' keyword.", options: ["switchport trunk allowed vlan add 30", "switchport trunk allowed vlan 30", "switchport access vlan 30", "switchport trunk allowed vlan remove 10,20,99"], answer: 0, explain: "'allowed vlan add 30' appends VLAN 30 to the current list. Using 'allowed vlan 30' alone would REPLACE the list and drop 10, 20, 99." },
      { label: "What would 'switchport trunk allowed vlan 30' (without add) do?", hint: "No 'add' keyword means replace.", options: ["Replace the list with only VLAN 30, breaking 10, 20, and 99", "Append VLAN 30 safely", "Do nothing", "Convert the port to access"], answer: 0, explain: "Without 'add', the command overwrites the allowed list, so only VLAN 30 would trunk and the others would be pruned — a common outage cause." },
      { label: "Best practice for trunk allowed lists to avoid surprises:", hint: "Explicit and minimal, but documented.", options: ["Allow only the VLANs actually needed and document changes", "Always allow 'all' VLANs", "Leave the native VLAN as the data VLAN", "Disable trunking entirely"], answer: 0, explain: "Pruning to only required VLANs limits broadcast scope and attack surface, but you must track the list so legitimately added VLANs (like 30) get included." }
    ],
    summary: "Trunk pruning drops any VLAN not in the allowed list. Use 'allowed vlan add' to append; the bare form replaces the list. Keep lists minimal but documented."
  },
  {
    id: "PBQ-060", format: 2, domain: 2,
    title: "OSPF Cost and DR/BDR Election",
    brief: "On a multi-access segment, <b>R6</b> should win the OSPF DR election, and a high-bandwidth path should be preferred. Tune priority and cost.",
    exhibitTitle: "R6# show ip ospf interface Gi0/0",
    exhibit: "GigabitEthernet0/0 is up, line protocol is up\n  Internet Address 10.6.0.1/24, Area 0\n  Process ID 1, Router ID 6.6.6.6\n  Network Type BROADCAST, Cost: <span class='cy'>1</span>\n  State <span class='warnc'>DROTHER</span>, Priority 1\n  Designated Router (id) 9.9.9.9\n  Backup Designated Router (id) 8.8.8.8",
    fields: [
      { label: "Which interface setting makes R6 most likely to win the DR election?", hint: "Highest OSPF priority wins; 0 disqualifies.", options: ["ip ospf priority 255 (highest on the segment)", "ip ospf priority 0", "ip ospf cost 1", "passive-interface Gi0/0"], answer: 0, explain: "The highest OSPF interface priority wins DR; 255 is the max. Priority 0 makes a router ineligible. Router ID breaks ties only when priorities match." },
      { label: "What does the current state 'DROTHER' mean for R6?", hint: "It is neither DR nor BDR.", options: ["R6 is neither the DR nor the BDR on this segment", "R6 is the designated router", "R6 has no OSPF neighbors", "R6's interface is down"], answer: 0, explain: "DROTHER means R6 formed adjacencies but lost the DR/BDR election (currently 9.9.9.9 is DR, 8.8.8.8 is BDR)." },
      { label: "To prefer a higher-bandwidth link, you should:", hint: "OSPF cost is inversely proportional to bandwidth.", options: ["Lower the OSPF cost on the preferred interface (or raise reference bandwidth)", "Raise the cost on the preferred interface", "Set priority 0", "Disable the interface"], answer: 0, explain: "OSPF prefers the lowest total cost. Lowering an interface's cost (or increasing reference bandwidth) makes its path preferred for SPF calculations." },
      { label: "After changing OSPF priority, what makes the new DR election take effect?", hint: "DR is not preemptive by default.", options: ["Clear OSPF (or bounce the interface) — DR election is non-preemptive", "Nothing; it changes instantly", "Reload all routers simultaneously", "Delete area 0"], answer: 0, explain: "DR/BDR election is non-preemptive: an existing DR keeps the role until the adjacency resets. Bounce the interface or 'clear ip ospf process' to force re-election." }
    ],
    summary: "Highest OSPF priority wins DR (0 = ineligible); the election is non-preemptive. Lower cost (or raise reference bandwidth) to prefer high-bandwidth paths; reset OSPF to force a new election."
  }
);
NETPLUS.pbqs.push(
  {
    id: "PBQ-061",
    format: 3,
    domain: 4,
    title: "DMZ Web Server Exposure",
    brief: "The public web server in the DMZ must be reachable from the Internet over HTTPS only. All other inbound traffic from the WAN to the DMZ must be dropped.",
    exhibitTitle: "fw0 // zones",
    exhibit: "[ <span class='hl'>WAN / Internet</span> ] -- eth0\n        |\n     ( fw0 )\n        |\n[ <span class='warnc'>DMZ</span> 203.0.113.0/24 ]  web01 = 203.0.113.10\n        |\n[ <span class='ok'>LAN</span> 10.0.0.0/24 ]\n\nACL inbound on eth0 (WAN -> DMZ):\n  10  <span class='cy'>?</span>  src any  dst 203.0.113.10  ...\n  99  <span class='dim'>implicit deny all</span>",
    fields: [
      {
        label: "Rule 10 action for HTTPS to web01",
        hint: "Allow the required service explicitly",
        options: ["Deny", "Permit", "Log only", "Reject-reset"],
        answer: 1,
        explain: "The requirement is to allow HTTPS in, so rule 10 must Permit that specific flow before the implicit deny drops everything else."
      },
      {
        label: "Destination for rule 10",
        hint: "Least privilege: target the host, not the whole subnet",
        options: ["203.0.113.0/24", "203.0.113.10/32", "any", "10.0.0.0/24"],
        answer: 1,
        explain: "Least privilege means scoping the destination to the single web server host (/32), not the entire DMZ subnet."
      },
      {
        label: "Protocol for rule 10",
        hint: "HTTPS rides on which transport?",
        options: ["UDP", "ICMP", "TCP", "GRE"],
        answer: 2,
        explain: "HTTPS uses TLS over TCP, so the rule must match TCP."
      },
      {
        label: "Destination port for rule 10",
        hint: "Standard HTTPS port",
        options: ["80", "8080", "443", "22"],
        answer: 2,
        explain: "HTTPS listens on TCP 443. Port 80 would be plain HTTP and is not permitted."
      },
      {
        label: "What handles all other WAN-to-DMZ traffic?",
        hint: "Rely on default behavior",
        options: ["A broad permit any", "The implicit deny at the end", "A NAT rule", "An allow ICMP rule"],
        answer: 1,
        explain: "With only the explicit HTTPS permit, the implicit deny-all at the bottom drops every other inbound flow automatically."
      }
    ],
    summary: "Permit TCP 443 to web01/32 from the WAN; the implicit deny handles the rest. Scope tightly and rely on deny-by-default."
  },
  {
    id: "PBQ-062",
    format: 3,
    domain: 4,
    title: "Guest Wi-Fi Isolation",
    brief: "Guest Wi-Fi clients may reach the Internet but must never reach the corporate LAN or server VLAN. Block lateral access while preserving outbound web.",
    exhibitTitle: "fw0 // zones",
    exhibit: "[ <span class='ok'>Guest Wi-Fi</span> 192.168.50.0/24 ]\n        |\n     ( fw0 )\n      /     \\\n[ <span class='hl'>LAN</span> 10.0.0.0/24 ]   [ <span class='hl'>Server VLAN</span> 10.0.20.0/24 ]\n        \\     /\n     [ <span class='cy'>Internet</span> ]\n\nACL on guest interface (top-down):\n  10  <span class='cy'>?</span>  guest -> LAN/server  ...\n  20  Permit  guest -> any  (internet)\n  99  <span class='dim'>implicit deny</span>",
    fields: [
      {
        label: "Rule 10 action (guest to internal nets)",
        hint: "Stop lateral movement",
        options: ["Permit", "Deny", "Translate", "Mirror"],
        answer: 1,
        explain: "Guest must not reach LAN or server VLAN, so rule 10 explicitly denies guest traffic to the internal subnets."
      },
      {
        label: "Destination for the block rule",
        hint: "Cover both private internal ranges",
        options: ["192.168.50.0/24", "10.0.0.0/8", "0.0.0.0/0", "8.8.8.8/32"],
        answer: 1,
        explain: "Denying 10.0.0.0/8 covers both the LAN (10.0.0.0/24) and server VLAN (10.0.20.0/24) in one summarized rule."
      },
      {
        label: "Why must the deny rule come BEFORE the internet permit?",
        hint: "Think first-match processing",
        options: ["Lower latency", "ACLs are top-down first-match", "It enables NAT", "To save memory"],
        answer: 1,
        explain: "ACLs evaluate top-down and stop at the first match; the specific deny to internal nets must precede the broad permit-any or guests would match the permit first."
      },
      {
        label: "Rule 20 lets guests reach the Internet via",
        hint: "Everything not internal",
        options: ["Permit guest -> 10.0.0.0/8", "Permit guest -> any", "Deny guest -> any", "Permit LAN -> guest"],
        answer: 1,
        explain: "After the internal deny, a permit guest-to-any allows outbound Internet while internal destinations have already been dropped."
      }
    ],
    summary: "Deny guest-to-10.0.0.0/8 first, then permit guest-to-any. Order matters because ACLs are first-match top-down."
  },
  {
    id: "PBQ-063",
    format: 3,
    domain: 4,
    title: "Management Plane Lockdown",
    brief: "SSH management of network devices must be allowed only from the management subnet to the device management VLAN. All other SSH must be denied.",
    exhibitTitle: "fw0 // zones",
    exhibit: "[ <span class='ok'>Mgmt</span> 10.0.99.0/24 ]\n        |\n     ( fw0 )\n        |\n[ <span class='warnc'>Mgmt VLAN</span> 10.0.250.0/24 ]  switches/routers\n\n[ <span class='hl'>LAN users</span> 10.0.0.0/24 ]  <- must NOT SSH to devices\n\nACL (top-down):\n  10  Permit  src <span class='cy'>?</span>  dst 10.0.250.0/24  tcp 22\n  20  <span class='cy'>?</span>  src any  dst 10.0.250.0/24  tcp 22\n  99  <span class='dim'>implicit deny</span>",
    fields: [
      {
        label: "Source for rule 10 (permit)",
        hint: "Only the admin jump network",
        options: ["10.0.0.0/24", "10.0.99.0/24", "any", "10.0.250.0/24"],
        answer: 1,
        explain: "Only the management subnet 10.0.99.0/24 should be permitted to SSH to devices."
      },
      {
        label: "Protocol and port for SSH",
        hint: "Secure shell transport",
        options: ["UDP 22", "TCP 22", "TCP 23", "TCP 3389"],
        answer: 1,
        explain: "SSH uses TCP 22. TCP 23 is Telnet and TCP 3389 is RDP."
      },
      {
        label: "Rule 20 action (catch remaining SSH)",
        hint: "Explicitly stop everyone else",
        options: ["Permit", "Deny", "Permit-log", "Forward"],
        answer: 1,
        explain: "Rule 20 explicitly denies any other source's SSH to the device VLAN, documenting the intent even though implicit deny exists."
      },
      {
        label: "Best practice this design demonstrates",
        hint: "Restrict admin access surface",
        options: ["Port forwarding", "Least-privilege management access", "DNS sinkholing", "Load balancing"],
        answer: 1,
        explain: "Restricting device management to a single trusted subnet is least-privilege control of the management plane."
      }
    ],
    summary: "Permit TCP 22 only from 10.0.99.0/24 to the mgmt VLAN, deny all other SSH. Tight admin scope is least privilege."
  },
  {
    id: "PBQ-064",
    format: 3,
    domain: 4,
    title: "Outbound LAN Web Access",
    brief: "LAN users must browse the Internet over HTTP and HTTPS but must not initiate any other outbound protocol. Default deny everything else.",
    exhibitTitle: "fw0 // zones",
    exhibit: "[ <span class='ok'>LAN</span> 10.0.0.0/24 ]\n        |\n     ( fw0 ) --- eth0 --- [ <span class='cy'>Internet</span> ]\n\nACL outbound (LAN -> WAN), top-down:\n  10  Permit  src 10.0.0.0/24  dst any  tcp <span class='cy'>?</span>\n  20  Permit  src 10.0.0.0/24  dst any  tcp <span class='cy'>?</span>\n  99  <span class='dim'>implicit deny</span>",
    fields: [
      {
        label: "Rule 10 destination port (web)",
        hint: "Cleartext web",
        options: ["443", "80", "53", "25"],
        answer: 1,
        explain: "HTTP uses TCP 80 for cleartext web browsing."
      },
      {
        label: "Rule 20 destination port (secure web)",
        hint: "Encrypted web",
        options: ["8080", "22", "443", "3389"],
        answer: 2,
        explain: "HTTPS uses TCP 443 for encrypted browsing."
      },
      {
        label: "How is non-web outbound (e.g., SMTP, RDP) handled?",
        hint: "Nothing permits it",
        options: ["Permitted by rule 10", "Dropped by implicit deny", "Routed to DMZ", "Translated by NAT"],
        answer: 1,
        explain: "Only 80 and 443 are permitted; every other outbound port falls through to the implicit deny and is dropped."
      },
      {
        label: "This whitelisting approach is called",
        hint: "Allow known-good, block the rest",
        options: ["Blacklisting", "Default-allow", "Default-deny with explicit permits", "Stateless flooding"],
        answer: 2,
        explain: "Permitting only specific services and dropping everything else is a default-deny (allow-list) posture."
      }
    ],
    summary: "Permit TCP 80 and 443 outbound from the LAN; the implicit deny blocks all other protocols. Allow-list by default."
  },
  {
    id: "PBQ-065",
    format: 3,
    domain: 4,
    title: "DMZ to Internal Database",
    brief: "The DMZ web server must query the internal database on TCP 3306, but no other DMZ-to-LAN traffic is allowed. Prevent a compromised DMZ host from pivoting.",
    exhibitTitle: "fw0 // zones",
    exhibit: "[ <span class='warnc'>DMZ</span> 203.0.113.0/24 ]  web01=.10\n        |\n     ( fw0 )\n        |\n[ <span class='hl'>Server VLAN</span> 10.0.20.0/24 ]  db01=10.0.20.5\n\nACL (DMZ -> internal), top-down:\n  10  Permit  src <span class='cy'>?</span>  dst <span class='cy'>?</span>  tcp <span class='cy'>?</span>\n  20  <span class='cy'>?</span>  src 203.0.113.0/24  dst 10.0.0.0/8  ip any\n  99  <span class='dim'>implicit deny</span>",
    fields: [
      {
        label: "Rule 10 source (DMZ side)",
        hint: "Only the web host should query the DB",
        options: ["203.0.113.0/24", "203.0.113.10/32", "any", "10.0.20.5/32"],
        answer: 1,
        explain: "Only web01 (203.0.113.10/32) needs DB access; scoping to the host limits the blast radius if other DMZ hosts are compromised."
      },
      {
        label: "Rule 10 destination",
        hint: "Just the database host",
        options: ["10.0.20.0/24", "10.0.20.5/32", "10.0.0.0/8", "any"],
        answer: 1,
        explain: "Target the single database host 10.0.20.5/32 rather than the whole server VLAN."
      },
      {
        label: "Rule 10 destination port (MySQL)",
        hint: "Default MySQL/MariaDB port",
        options: ["1433", "3306", "5432", "1521"],
        answer: 1,
        explain: "MySQL/MariaDB listens on TCP 3306. 1433 is MSSQL, 5432 is PostgreSQL, 1521 is Oracle."
      },
      {
        label: "Rule 20 action (any other DMZ -> internal)",
        hint: "Block pivoting explicitly",
        options: ["Permit", "Deny", "NAT", "Tunnel"],
        answer: 1,
        explain: "An explicit deny of all other DMZ-to-internal IP traffic documents and enforces segmentation against lateral movement."
      }
    ],
    summary: "Permit only web01/32 to db01/32 on TCP 3306, deny all other DMZ-to-internal traffic. Contain the DMZ."
  },
  {
    id: "PBQ-066",
    format: 3,
    domain: 4,
    title: "DNS Resolver Restriction",
    brief: "Internal clients must use only the internal DNS resolver. Direct outbound DNS to the Internet must be blocked to prevent tunneling and bypass.",
    exhibitTitle: "fw0 // zones",
    exhibit: "[ <span class='ok'>LAN</span> 10.0.0.0/24 ]\n        |\n     ( fw0 )\n        |\n[ <span class='warnc'>Server VLAN</span> ]  dns01=10.0.20.53\n        |\n[ <span class='cy'>Internet</span> ]\n\nACL outbound, top-down:\n  10  Permit  src 10.0.0.0/24  dst 10.0.20.53  <span class='cy'>?</span> 53\n  20  <span class='cy'>?</span>  src 10.0.0.0/24  dst any  udp 53\n  99  <span class='dim'>implicit deny</span>",
    fields: [
      {
        label: "Protocol for DNS queries in rule 10",
        hint: "Standard DNS query transport",
        options: ["TCP", "UDP", "ICMP", "GRE"],
        answer: 1,
        explain: "Standard DNS queries use UDP 53 (TCP 53 is used for zone transfers and large responses)."
      },
      {
        label: "Rule 20 action (LAN -> any DNS)",
        hint: "Stop clients reaching outside resolvers",
        options: ["Permit", "Deny", "Redirect", "Log-permit"],
        answer: 1,
        explain: "Deny outbound DNS to any external server so clients are forced to use the internal resolver only."
      },
      {
        label: "Why permit the internal resolver BEFORE denying any DNS?",
        hint: "First-match order",
        options: ["Performance tuning", "First-match: specific permit must precede broad deny", "To enable caching", "Required by RFC"],
        answer: 1,
        explain: "Top-down first-match means the specific permit to 10.0.20.53 must come before the broad deny, or legitimate internal DNS would also be blocked."
      },
      {
        label: "Security benefit of blocking external DNS",
        hint: "Covert channel risk",
        options: ["Faster lookups", "Prevents DNS tunneling/exfiltration", "Reduces ARP traffic", "Enables DHCP"],
        answer: 1,
        explain: "Forcing internal-only resolution helps prevent DNS tunneling and data exfiltration over UDP 53."
      }
    ],
    summary: "Permit UDP 53 to the internal resolver, then deny all other outbound DNS. Specific-permit-before-broad-deny stops tunneling."
  },
  {
    id: "PBQ-067",
    format: 3,
    domain: 4,
    title: "RDP Jump Host Only",
    brief: "Remote Desktop to internal servers must be allowed only from the dedicated jump host, never directly from general LAN users.",
    exhibitTitle: "fw0 // zones",
    exhibit: "[ <span class='ok'>LAN users</span> 10.0.0.0/24 ]   jump01=10.0.0.9\n        |\n     ( fw0 )\n        |\n[ <span class='warnc'>Server VLAN</span> 10.0.20.0/24 ]\n\nACL (-> server VLAN), top-down:\n  10  Permit  src <span class='cy'>?</span>  dst 10.0.20.0/24  tcp <span class='cy'>?</span>\n  20  <span class='cy'>?</span>  src 10.0.0.0/24  dst 10.0.20.0/24  tcp 3389\n  99  <span class='dim'>implicit deny</span>",
    fields: [
      {
        label: "Rule 10 source (allowed RDP origin)",
        hint: "Only the bastion",
        options: ["10.0.0.0/24", "10.0.0.9/32", "any", "10.0.20.0/24"],
        answer: 1,
        explain: "Only the jump host 10.0.0.9/32 is permitted to RDP into the server VLAN."
      },
      {
        label: "RDP destination port",
        hint: "Remote Desktop Protocol",
        options: ["22", "443", "3389", "5900"],
        answer: 2,
        explain: "RDP uses TCP 3389. 5900 is VNC and 22 is SSH."
      },
      {
        label: "Rule 20 action (general LAN -> servers RDP)",
        hint: "Block everyone but the jump host",
        options: ["Permit", "Deny", "Translate", "Mirror"],
        answer: 1,
        explain: "Deny the broader LAN subnet's RDP so only the jump host (matched earlier) succeeds."
      },
      {
        label: "This control pattern is best described as",
        hint: "Funnel admin access through one audited host",
        options: ["Split tunneling", "Bastion / jump-host least privilege", "Port mirroring", "DMZ hosting"],
        answer: 1,
        explain: "Channeling all administrative RDP through a single audited bastion is a least-privilege jump-host pattern."
      }
    ],
    summary: "Permit TCP 3389 only from jump01/32, deny RDP from the rest of the LAN. Bastion access is least privilege."
  },
  {
    id: "PBQ-068",
    format: 3,
    domain: 4,
    title: "Permit Ordering Trap",
    brief: "An admin placed a broad permit above a specific deny and traffic that should be blocked is getting through. Fix the rule order and intent.",
    exhibitTitle: "fw0 // zones",
    exhibit: "[ <span class='ok'>LAN</span> 10.0.0.0/24 ]  guest_pc=10.0.0.200\n        |\n     ( fw0 )\n        |\n[ <span class='hl'>Finance VLAN</span> 10.0.30.0/24 ]\n\nCURRENT ACL (broken), top-down:\n  10  <span class='warnc'>Permit</span>  src 10.0.0.0/24  dst 10.0.30.0/24  ip\n  20  <span class='hl'>Deny</span>    src 10.0.0.200/32  dst 10.0.30.0/24  ip\n  99  <span class='dim'>implicit deny</span>",
    fields: [
      {
        label: "Why is guest_pc still reaching Finance?",
        hint: "First match wins",
        options: ["NAT overlap", "Rule 10 matches first and permits it", "Port mismatch", "Implicit deny disabled"],
        answer: 1,
        explain: "ACLs are first-match top-down; the broad permit at rule 10 matches guest_pc before the deny at rule 20 is ever evaluated."
      },
      {
        label: "Correct fix",
        hint: "Specific before general",
        options: ["Delete rule 99", "Move the specific deny (20) above the permit (10)", "Change permit to UDP", "Add a NAT rule"],
        answer: 1,
        explain: "Place the specific deny for 10.0.0.200/32 above the broad permit so the exception is evaluated first."
      },
      {
        label: "General ACL ordering principle",
        hint: "Exceptions go first",
        options: ["Broadest rules first", "Most specific rules first", "Alphabetical by host", "Permits always last"],
        answer: 1,
        explain: "Most specific rules (exceptions) belong at the top; broader rules go beneath them in a top-down first-match list."
      },
      {
        label: "After reordering, what stops other unintended access?",
        hint: "Default behavior",
        options: ["A permit any", "The implicit deny at rule 99", "A static route", "Spanning tree"],
        answer: 1,
        explain: "Anything not explicitly permitted still falls to the implicit deny at the end of the list."
      }
    ],
    summary: "First-match means the specific deny must sit above the broad permit. Most-specific-first plus implicit deny fixes the leak."
  },
  {
    id: "PBQ-069",
    format: 3,
    domain: 4,
    title: "Inbound SMTP to Mail Relay",
    brief: "Only the DMZ mail relay should receive inbound SMTP from the Internet. Internal mail servers must not be directly exposed.",
    exhibitTitle: "fw0 // zones",
    exhibit: "[ <span class='hl'>Internet</span> ] -- eth0\n        |\n     ( fw0 )\n        |\n[ <span class='warnc'>DMZ</span> ]  relay01=203.0.113.25\n        |\n[ <span class='ok'>Server VLAN</span> ]  mail-int=10.0.20.25\n\nACL inbound on eth0, top-down:\n  10  Permit  src any  dst <span class='cy'>?</span>  tcp <span class='cy'>?</span>\n  20  Deny    src any  dst 10.0.20.0/24  tcp 25\n  99  <span class='dim'>implicit deny</span>",
    fields: [
      {
        label: "Rule 10 destination",
        hint: "Only the public relay",
        options: ["10.0.20.25/32", "203.0.113.25/32", "203.0.113.0/24", "any"],
        answer: 1,
        explain: "Inbound SMTP should land only on the DMZ relay host 203.0.113.25/32."
      },
      {
        label: "SMTP port for rule 10",
        hint: "Mail transfer port",
        options: ["110", "143", "25", "587"],
        answer: 2,
        explain: "Server-to-server SMTP uses TCP 25. 587 is submission, 110/143 are POP3/IMAP."
      },
      {
        label: "Purpose of rule 20",
        hint: "Defense in depth",
        options: ["Speed up delivery", "Explicitly block direct inbound to internal mail", "Enable NAT", "Allow IMAP"],
        answer: 1,
        explain: "Rule 20 explicitly denies any inbound SMTP aimed at the internal server VLAN, documenting that internal mail is never Internet-facing."
      },
      {
        label: "Why expose the relay in the DMZ rather than internal mail directly?",
        hint: "Segmentation purpose",
        options: ["Lower cost", "DMZ isolates Internet-facing services from the LAN", "Faster routing", "Avoids NAT"],
        answer: 1,
        explain: "A DMZ isolates Internet-facing services so a compromise does not directly expose internal systems."
      }
    ],
    summary: "Permit TCP 25 inbound only to relay01/32 and deny inbound SMTP to the internal VLAN. The DMZ shields internal mail."
  },
  {
    id: "PBQ-070",
    format: 3,
    domain: 4,
    title: "Block Spoofed and Bogon Sources",
    brief: "Apply anti-spoofing on the WAN interface: traffic arriving from the Internet claiming to be from internal RFC1918 space must be dropped.",
    exhibitTitle: "fw0 // zones",
    exhibit: "[ <span class='hl'>Internet</span> ] -- eth0 (untrusted)\n        |\n     ( fw0 )\n        |\n[ <span class='ok'>LAN</span> 10.0.0.0/8 ]\n\nACL inbound on eth0, top-down:\n  10  <span class='cy'>?</span>  src 10.0.0.0/8     dst any  ip\n  20  Deny    src 192.168.0.0/16  dst any  ip\n  30  Deny    src 172.16.0.0/12   dst any  ip\n  40  Permit  src any  dst 203.0.113.10  tcp 443\n  99  <span class='dim'>implicit deny</span>",
    fields: [
      {
        label: "Rule 10 action for src 10.0.0.0/8 inbound from WAN",
        hint: "Internal source on the outside is impossible legitimately",
        options: ["Permit", "Deny", "Translate", "Log-permit"],
        answer: 1,
        explain: "A packet arriving on the untrusted WAN claiming an internal 10.0.0.0/8 source is spoofed and must be denied."
      },
      {
        label: "Rules 10-30 collectively block",
        hint: "Private address ranges",
        options: ["Multicast", "RFC1918 spoofed sources", "Broadcast storms", "Jumbo frames"],
        answer: 1,
        explain: "10/8, 172.16/12 and 192.168/16 are the RFC1918 private ranges; seeing them as a source on the WAN indicates spoofing."
      },
      {
        label: "Why must anti-spoof denies precede rule 40's permit?",
        hint: "First match again",
        options: ["To reduce CPU", "So spoofed packets are dropped before any permit can match", "For NAT", "To enable logging"],
        answer: 1,
        explain: "Top-down first-match: the spoof denies must be evaluated before the HTTPS permit so a spoofed packet cannot slip through the permit."
      },
      {
        label: "This filtering at the network edge is called",
        hint: "Ingress hardening",
        options: ["Egress NAT", "Ingress/anti-spoofing filtering", "Port security", "DHCP snooping"],
        answer: 1,
        explain: "Dropping bogus source addresses at the untrusted ingress interface is anti-spoofing (ingress) filtering."
      }
    ],
    summary: "Deny RFC1918 sources inbound on the WAN before any permit. Anti-spoof ingress filtering must come first in the list."
  },
  {
    id: "PBQ-071",
    format: 3,
    domain: 4,
    title: "ICMP Diagnostics Policy",
    brief: "Allow internal hosts to ping out for troubleshooting, but block inbound ICMP echo requests from the Internet to reduce reconnaissance.",
    exhibitTitle: "fw0 // zones",
    exhibit: "[ <span class='ok'>LAN</span> 10.0.0.0/24 ]\n        |\n     ( fw0 ) -- eth0 -- [ <span class='hl'>Internet</span> ]\n\nACL eth0 inbound (WAN -> in), top-down:\n  10  <span class='cy'>?</span>  src any  dst any  <span class='cy'>?</span> echo-request\n  20  Permit  established/reply traffic\n  99  <span class='dim'>implicit deny</span>",
    fields: [
      {
        label: "Rule 10 action for inbound echo-request",
        hint: "Reduce external recon",
        options: ["Permit", "Deny", "Redirect", "Mirror"],
        answer: 1,
        explain: "Inbound ICMP echo-request from the Internet should be denied so external scanners cannot map live hosts."
      },
      {
        label: "Protocol matched by rule 10",
        hint: "Ping uses which protocol?",
        options: ["TCP", "UDP", "ICMP", "IGMP"],
        answer: 2,
        explain: "Ping (echo-request/echo-reply) is ICMP, not TCP or UDP."
      },
      {
        label: "How do replies to internal pings still get back in?",
        hint: "Stateful inspection",
        options: ["A permit any rule", "Stateful firewall allows established/related return traffic", "Static NAT", "Broadcast"],
        answer: 1,
        explain: "A stateful firewall tracks the outbound echo-request and permits the matching echo-reply as established/related, so no broad inbound permit is needed."
      },
      {
        label: "Risk of permitting unrestricted inbound ICMP",
        hint: "What attackers learn",
        options: ["Slower DNS", "Host discovery and reconnaissance", "ARP poisoning", "VLAN hopping"],
        answer: 1,
        explain: "Open inbound ICMP aids attacker reconnaissance (host discovery, OS fingerprinting via responses)."
      }
    ],
    summary: "Deny inbound ICMP echo-request; let stateful inspection return replies to internal pings. Limits external recon."
  },
  {
    id: "PBQ-072",
    format: 3,
    domain: 4,
    title: "Egress Filtering for Exfil",
    brief: "Block outbound traffic on ports commonly abused for command-and-control while still allowing normal web and DNS. Apply egress least privilege.",
    exhibitTitle: "fw0 // zones",
    exhibit: "[ <span class='ok'>LAN</span> 10.0.0.0/24 ]\n        |\n     ( fw0 ) -- eth0 -- [ <span class='hl'>Internet</span> ]\n\nACL eth0 outbound, top-down:\n  10  Permit  src 10.0.0.0/24  dst 10.0.20.53  udp 53\n  20  Permit  src 10.0.0.0/24  dst any  tcp 443\n  30  Permit  src 10.0.0.0/24  dst any  tcp 80\n  40  <span class='cy'>?</span>  src 10.0.0.0/24  dst any  tcp 23\n  99  <span class='dim'>implicit deny</span>",
    fields: [
      {
        label: "Rule 40 action for outbound TCP 23 (Telnet)",
        hint: "Cleartext legacy protocol",
        options: ["Permit", "Deny", "Log-permit", "NAT"],
        answer: 1,
        explain: "Telnet (TCP 23) is insecure and not needed outbound; deny it explicitly."
      },
      {
        label: "Without rules 20/30/10, what would happen to web and DNS?",
        hint: "Default posture",
        options: ["Permitted anyway", "Dropped by implicit deny", "Routed to DMZ", "Cached"],
        answer: 1,
        explain: "With a default-deny egress posture, only the explicitly permitted ports (53, 443, 80) pass; everything else, including web/DNS without those permits, would be dropped."
      },
      {
        label: "Best term for restricting outbound to known-good ports",
        hint: "Direction of filtering",
        options: ["Ingress filtering", "Egress filtering / least privilege", "Port forwarding", "Hairpinning"],
        answer: 1,
        explain: "Controlling what may leave the network is egress filtering, applied here with a least-privilege allow-list."
      },
      {
        label: "Primary benefit of strict egress rules",
        hint: "Stop data leaving",
        options: ["Faster downloads", "Limits malware C2 and data exfiltration", "Improves Wi-Fi range", "Reduces ARP"],
        answer: 1,
        explain: "Egress filtering constrains the ports malware can use for command-and-control and exfiltration."
      }
    ],
    summary: "Permit only 53/443/80 outbound and deny Telnet; implicit deny blocks the rest. Egress least privilege limits exfil."
  },
  {
    id: "PBQ-073",
    format: 3,
    domain: 4,
    title: "Stateful vs Stateless Return Traffic",
    brief: "On a stateful firewall, LAN users must reach external HTTPS without an explicit inbound permit for return packets. Configure the outbound permit correctly.",
    exhibitTitle: "fw0 // zones",
    exhibit: "[ <span class='ok'>LAN</span> 10.0.0.0/24 ]\n        |\n     ( fw0 = <span class='cy'>stateful</span> )\n        |\n[ <span class='hl'>Internet</span> ]\n\nACL outbound, top-down:\n  10  Permit  src 10.0.0.0/24  dst any  tcp <span class='cy'>?</span>\n  99  <span class='dim'>implicit deny</span>\n\nACL inbound: <span class='warnc'>(none added for replies)</span>",
    fields: [
      {
        label: "Rule 10 destination port (secure web)",
        hint: "HTTPS",
        options: ["80", "443", "8443", "22"],
        answer: 1,
        explain: "HTTPS is TCP 443; permit it outbound for the LAN."
      },
      {
        label: "Do you need an explicit inbound rule for the HTTPS replies?",
        hint: "Stateful behavior",
        options: ["Yes, permit any inbound 443", "No, the state table allows the return flow", "Yes, permit any inbound high ports", "No, disable the firewall"],
        answer: 1,
        explain: "A stateful firewall records the outbound session and automatically permits the matching return packets, so no inbound rule is required."
      },
      {
        label: "On a STATELESS ACL, return traffic would require",
        hint: "No connection tracking",
        options: ["Nothing extra", "An explicit inbound permit for the reply ports", "A NAT pool", "Spanning tree"],
        answer: 1,
        explain: "A stateless filter has no session memory, so replies need an explicit inbound permit (typically established/ack to ephemeral ports)."
      },
      {
        label: "Security advantage of stateful over a broad inbound permit",
        hint: "Only expected replies allowed",
        options: ["Faster CPU", "Only packets matching a known session are allowed in", "More IP addresses", "Less cabling"],
        answer: 1,
        explain: "Stateful inspection admits only return packets that match an existing outbound session, avoiding a wide inbound permit."
      }
    ],
    summary: "Permit outbound TCP 443; a stateful firewall returns the replies via its state table. Stateless filters need explicit inbound permits."
  },
  {
    id: "PBQ-074",
    format: 3,
    domain: 4,
    title: "Inter-VLAN Segmentation",
    brief: "Sales VLAN must reach the shared file server but must not reach the Finance VLAN. Finance may reach the file server too. Enforce east-west segmentation.",
    exhibitTitle: "fw0 // zones",
    exhibit: "[ <span class='ok'>Sales VLAN</span> 10.0.40.0/24 ]\n[ <span class='hl'>Finance VLAN</span> 10.0.30.0/24 ]\n        |\n     ( fw0 )\n        |\n[ <span class='warnc'>Shared</span> ]  filesrv=10.0.20.8\n\nACL (top-down):\n  10  Permit  src 10.0.40.0/24  dst <span class='cy'>?</span>  tcp 445\n  20  <span class='cy'>?</span>  src 10.0.40.0/24  dst 10.0.30.0/24  ip\n  30  Permit  src 10.0.30.0/24  dst 10.0.20.8/32  tcp 445\n  99  <span class='dim'>implicit deny</span>",
    fields: [
      {
        label: "Rule 10 destination (Sales -> file server)",
        hint: "Only the file host",
        options: ["10.0.30.0/24", "10.0.20.8/32", "10.0.40.0/24", "any"],
        answer: 1,
        explain: "Sales should reach only the file server host 10.0.20.8/32, not entire subnets."
      },
      {
        label: "Port 445 corresponds to",
        hint: "Windows file sharing",
        options: ["FTP", "SMB/CIFS", "RDP", "LDAP"],
        answer: 1,
        explain: "TCP 445 is SMB (file sharing), the protocol for accessing the shared file server."
      },
      {
        label: "Rule 20 action (Sales -> Finance)",
        hint: "Keep VLANs isolated",
        options: ["Permit", "Deny", "Translate", "Mirror"],
        answer: 1,
        explain: "Sales must not reach Finance, so deny that east-west flow explicitly."
      },
      {
        label: "What this VLAN-to-VLAN control achieves",
        hint: "Lateral containment",
        options: ["Faster switching", "Microsegmentation / east-west least privilege", "Larger broadcast domain", "Loop prevention"],
        answer: 1,
        explain: "Restricting traffic between VLANs to only required flows is microsegmentation, limiting east-west lateral movement."
      }
    ],
    summary: "Permit Sales and Finance to filesrv/32 on TCP 445, deny Sales-to-Finance. East-west segmentation is least privilege."
  },
  {
    id: "PBQ-075",
    format: 3,
    domain: 4,
    title: "Cleanup and Implicit Deny Audit",
    brief: "Audit a messy ACL: remove a dangerous any-any permit, confirm logging on denies, and verify the implicit deny is not being shadowed.",
    exhibitTitle: "fw0 // zones",
    exhibit: "[ <span class='ok'>LAN</span> 10.0.0.0/24 ] -- ( fw0 ) -- [ <span class='hl'>Internet</span> ]\n\nCURRENT ACL, top-down:\n  10  Permit  src 10.0.0.0/24  dst any  tcp 443\n  20  <span class='hl'>Permit  src any  dst any  ip any</span>\n  30  Deny    src any  dst 10.0.250.0/24  ip   (mgmt)\n  99  <span class='dim'>implicit deny</span>",
    fields: [
      {
        label: "Main problem with rule 20",
        hint: "It allows everything",
        options: ["Wrong port", "A permit-any-any defeats all later denies and the implicit deny", "Missing protocol", "Duplicate of rule 10"],
        answer: 1,
        explain: "A permit any-any matches all traffic, so rule 30's deny and the implicit deny never apply; it must be removed."
      },
      {
        label: "After removing rule 20, rule 30 should be",
        hint: "Protect management",
        options: ["Deleted", "Kept to block access to the mgmt subnet", "Changed to permit", "Moved to the bottom"],
        answer: 1,
        explain: "Keep the deny to the management subnet so general LAN traffic cannot reach device management even via permitted services."
      },
      {
        label: "Best practice for deny rules during an audit",
        hint: "Visibility",
        options: ["Disable logging to save space", "Enable logging on deny rules for visibility", "Permit then log", "Remove all denies"],
        answer: 1,
        explain: "Logging denies provides visibility into blocked/attempted traffic for monitoring and incident response."
      },
      {
        label: "Role of the implicit deny once rule 20 is gone",
        hint: "Default catch-all",
        options: ["It is unused", "It drops anything not explicitly permitted", "It permits return traffic", "It enables NAT"],
        answer: 1,
        explain: "With the any-any permit removed, the implicit deny again functions as the default catch-all, dropping everything not explicitly allowed."
      }
    ],
    summary: "Remove the permit-any-any that shadows later rules, keep the mgmt deny, log denies. Restore a working deny-by-default."
  }
);
NETPLUS.pbqs.push(
  {
    id: "PBQ-076",
    format: 3,
    domain: 4,
    title: "Site-to-Site VPN Permit Rule",
    brief: "The HQ firewall must allow the IPsec tunnel and the branch LAN to reach the HQ file server cluster across the site-to-site VPN. Build the inbound permit rule on the WAN interface.",
    exhibitTitle: "Topology and Zones",
    exhibit: "<span class='cy'>HQ Firewall</span>\n  WAN  198.51.100.10  (Internet/VPN zone)\n  LAN  10.10.0.0/16    (Corporate zone)\n\n<span class='cy'>Branch Site</span>\n  Peer 203.0.113.50\n  Branch LAN  <span class='hl'>172.16.20.0/24</span>\n\n<span class='cy'>HQ File Cluster</span>\n  <span class='hl'>10.10.50.0/24</span>  SMB/445\n\n<span class='dim'>Tunnel: IKEv2 + ESP, peers 198.51.100.10 <-> 203.0.113.50</span>",
    fields: [
      {
        label: "ACTION for the post-decrypt traffic rule",
        hint: "Branch users need access, so the rule outcome is to allow.",
        options: ["DENY", "PERMIT", "DROP", "RESET"],
        answer: 1,
        explain: "The branch LAN is trusted across the VPN, so the rule must PERMIT the decrypted traffic to the file cluster."
      },
      {
        label: "SOURCE for the permit rule",
        hint: "Traffic originates from the remote office subnet.",
        options: ["10.10.50.0/24", "172.16.20.0/24", "198.51.100.10", "0.0.0.0/0"],
        answer: 1,
        explain: "After decryption the source is the branch LAN 172.16.20.0/24, the protected subnet on the far side of the tunnel."
      },
      {
        label: "DESTINATION for the permit rule",
        hint: "Only the file cluster should be reachable, not all of HQ.",
        options: ["10.10.0.0/16", "10.10.50.0/24", "203.0.113.50", "any"],
        answer: 1,
        explain: "Scope the destination to the file cluster 10.10.50.0/24 rather than the entire corporate /16 to follow least privilege."
      },
      {
        label: "PORT to permit for file access",
        hint: "Windows file sharing over modern SMB.",
        options: ["TCP 21", "TCP 445", "TCP 389", "UDP 500"],
        answer: 1,
        explain: "SMB file sharing uses TCP 445; UDP 500 (IKE) is for tunnel setup, not the file payload."
      },
      {
        label: "Best practice for the IKE/ESP peer traffic",
        hint: "The tunnel endpoints must be allowed before any inner traffic flows.",
        options: ["Permit UDP 500 / ESP only between the two peer public IPs", "Permit all UDP from any source", "Disable the implicit deny on the WAN", "Allow ESP from 0.0.0.0/0 to the WAN IP"],
        answer: 0,
        explain: "Restrict the tunnel-control rules (UDP 500 and ESP/protocol 50) to the specific peer IP pair so only the legitimate branch can negotiate the VPN."
      }
    ],
    summary: "A site-to-site VPN needs a tightly scoped peer rule for IKE/ESP plus an inner permit rule from the branch subnet to the specific HQ resource, never the whole corporate network."
  },
  {
    id: "PBQ-077",
    format: 3,
    domain: 4,
    title: "Block SMB Egress to the Internet",
    brief: "A worm is spreading over SMB. Prevent any internal host from sending SMB to the Internet while leaving internal east-west file sharing intact. Order the egress rules correctly.",
    exhibitTitle: "Egress Filter Plan (WAN out)",
    exhibit: "<span class='cy'>Zones</span>\n  Corporate LAN  10.0.0.0/8\n  Internet       any (via WAN)\n\n<span class='warnc'>Threat: SMB/445 beaconing outbound</span>\n\n<span class='cy'>Rule Table (top-down, first match wins)</span>\n  R1  ____  10.0.0.0/8 -> any  TCP 445\n  R2  PERMIT 10.0.0.0/8 -> 10.0.0.0/8  TCP 445  <span class='ok'>(internal SMB ok)</span>\n  R3  PERMIT 10.0.0.0/8 -> any  TCP 80,443\n  R4  <span class='dim'>implicit deny any any</span>",
    fields: [
      {
        label: "ACTION for R1",
        hint: "R1 targets SMB leaving toward the Internet.",
        options: ["PERMIT", "DENY", "LOG-ONLY", "NAT"],
        answer: 1,
        explain: "R1 must DENY SMB destined for the Internet to stop the worm from beaconing out."
      },
      {
        label: "DESTINATION that makes R1 catch only Internet-bound SMB",
        hint: "You still want internal sharing to work via R2.",
        options: ["10.0.0.0/8", "any", "192.168.1.0/24", "the WAN IP only"],
        answer: 1,
        explain: "R1 destination 'any' blocks SMB going anywhere, but because R2 below permits internal /8 SMB, only Internet-bound 445 is affected once ordering is fixed."
      },
      {
        label: "Where must the internal-permit (R2) sit relative to R1?",
        hint: "First match wins in a top-down ACL.",
        options: ["R2 must be above R1 so internal SMB is matched first", "Order does not matter for these rules", "R2 must be below the implicit deny", "R1 and R2 must be merged into one rule"],
        answer: 0,
        explain: "With first-match semantics, the specific internal PERMIT must precede the broad Internet DENY; otherwise a deny-any-445 above it would also block internal file sharing."
      },
      {
        label: "PROTOCOL/PORT pair to specify in R1",
        hint: "Modern Windows file sharing.",
        options: ["UDP 137", "TCP 445", "TCP 3389", "TCP 25"],
        answer: 1,
        explain: "SMB direct-host runs over TCP 445; that is the egress to block."
      },
      {
        label: "Why keep the implicit deny (R4) at the bottom?",
        hint: "Default posture for anything not explicitly allowed.",
        options: ["It permits leftover traffic for convenience", "It enforces deny-by-default for any unmatched flow", "It is required for NAT to function", "It logs but never blocks"],
        answer: 1,
        explain: "The implicit deny enforces a default-deny posture so only explicitly permitted traffic (web, internal SMB) leaves the network."
      }
    ],
    summary: "To block SMB exfiltration, place a specific internal-SMB permit above a broad deny of SMB to 'any', relying on first-match ordering and the implicit deny for everything else."
  },
  {
    id: "PBQ-078",
    format: 3,
    domain: 4,
    title: "DNS Allowed Only to the Resolver",
    brief: "Stop clients from using rogue external DNS. Force all DNS to the internal resolver and block direct client DNS to the Internet on the egress firewall.",
    exhibitTitle: "DNS Control Zones",
    exhibit: "<span class='cy'>Clients</span>\n  Workstation VLAN  10.20.0.0/16\n\n<span class='cy'>Resolver</span>\n  Internal DNS  <span class='hl'>10.20.5.53</span>\n\n<span class='cy'>Internet</span>\n  Public DNS / any\n\n<span class='warnc'>Goal: only 10.20.5.53 may query the Internet on 53</span>",
    fields: [
      {
        label: "ACTION for clients -> resolver on DNS",
        hint: "Clients must reach the internal resolver.",
        options: ["DENY", "PERMIT", "DROP", "REDIRECT-only"],
        answer: 1,
        explain: "Clients must be PERMITted to query the internal resolver 10.20.5.53 on port 53."
      },
      {
        label: "PORT/PROTOCOL for standard DNS queries",
        hint: "DNS lookups use this by default.",
        options: ["TCP 53 only", "UDP 53 (and TCP 53 for large responses)", "UDP 853", "TCP 853"],
        answer: 1,
        explain: "DNS primarily uses UDP 53, with TCP 53 as fallback for large/zone responses; 853 is DoT, a different service."
      },
      {
        label: "ACTION for Workstation VLAN -> any Internet DNS",
        hint: "Direct client DNS to outside resolvers must be stopped.",
        options: ["PERMIT", "DENY", "NAT", "LOG-ONLY"],
        answer: 1,
        explain: "Direct client DNS to the Internet must be DENIED so users cannot bypass filtering with rogue resolvers."
      },
      {
        label: "SOURCE allowed to send DNS out to the Internet",
        hint: "Only one host should resolve recursively externally.",
        options: ["10.20.0.0/16", "10.20.5.53", "any", "the firewall WAN IP"],
        answer: 1,
        explain: "Only the internal resolver 10.20.5.53 should be permitted to send DNS toward the Internet; all other clients are denied."
      },
      {
        label: "Best-practice ordering of the two egress DNS rules",
        hint: "Specific resolver allow vs broad client deny.",
        options: ["Permit 10.20.5.53->any:53 above Deny 10.20.0.0/16->any:53", "Deny first, then permit", "Both can be in any order", "Merge into one permit"],
        answer: 0,
        explain: "The specific PERMIT for the resolver must sit above the broad client DENY so first-match lets only 10.20.5.53 out while blocking everyone else."
      }
    ],
    summary: "Funnel DNS through the internal resolver by permitting clients to it, permitting only the resolver outbound on 53, and denying all other client DNS to the Internet."
  },
  {
    id: "PBQ-079",
    format: 3,
    domain: 4,
    title: "RDP Restricted to a Jump Host",
    brief: "Administrative RDP into the server VLAN must come only from the hardened jump host. Build the ACL so no other source can reach 3389 on the servers.",
    exhibitTitle: "Management Access Zones",
    exhibit: "<span class='cy'>Admin Zone</span>\n  Jump Host  <span class='hl'>10.30.9.5</span>\n\n<span class='cy'>Server VLAN</span>\n  Servers  <span class='hl'>10.30.40.0/24</span>\n\n<span class='cy'>User Zone</span>\n  Workstations  10.30.10.0/24  <span class='warnc'>(must NOT RDP directly)</span>",
    fields: [
      {
        label: "ACTION for the jump-host RDP rule",
        hint: "The jump host is the one allowed admin path.",
        options: ["DENY", "PERMIT", "DROP", "RESET"],
        answer: 1,
        explain: "PERMIT RDP from the jump host so administrators retain a controlled management path."
      },
      {
        label: "SOURCE for the permit rule",
        hint: "A single hardened host, not a subnet.",
        options: ["10.30.10.0/24", "10.30.9.5", "10.30.40.0/24", "any"],
        answer: 1,
        explain: "Source must be the single jump host 10.30.9.5; using a /24 or any would defeat the restriction."
      },
      {
        label: "DESTINATION and PORT for RDP",
        hint: "Remote Desktop Protocol port.",
        options: ["10.30.40.0/24 TCP 3389", "10.30.40.0/24 TCP 22", "any TCP 3389", "10.30.40.0/24 UDP 161"],
        answer: 0,
        explain: "RDP uses TCP 3389; the destination is the server VLAN 10.30.40.0/24."
      },
      {
        label: "ACTION for Workstations -> servers on 3389",
        hint: "Ordinary users must not RDP straight to servers.",
        options: ["PERMIT", "DENY", "NAT", "LOG-ONLY"],
        answer: 1,
        explain: "A DENY rule for 10.30.10.0/24 to the server VLAN on 3389 ensures users cannot bypass the jump host."
      }
    ],
    summary: "Lock RDP to the server VLAN behind a jump host by permitting only the single jump-host IP on TCP 3389 and explicitly denying user-subnet RDP."
  },
  {
    id: "PBQ-080",
    format: 3,
    domain: 4,
    title: "Segment IoT from Corporate",
    brief: "An inter-VLAN firewall must isolate the IoT VLAN. IoT devices may reach the cloud and the NTP/DNS services, but must never initiate connections into the corporate VLAN.",
    exhibitTitle: "IoT Segmentation Zones",
    exhibit: "<span class='cy'>IoT VLAN</span>\n  <span class='hl'>192.168.50.0/24</span>\n\n<span class='cy'>Corporate VLAN</span>\n  <span class='hl'>192.168.10.0/24</span>\n\n<span class='cy'>Shared Services</span>\n  DNS/NTP  192.168.5.0/24\n\n<span class='warnc'>IoT -> Corporate must be denied; IoT -> Internet allowed</span>",
    fields: [
      {
        label: "ACTION for IoT -> Corporate VLAN",
        hint: "Isolation is the whole point.",
        options: ["PERMIT", "DENY", "NAT", "REDIRECT"],
        answer: 1,
        explain: "DENY all IoT-initiated traffic into the corporate VLAN to contain compromised devices."
      },
      {
        label: "ACTION for IoT -> Shared DNS/NTP",
        hint: "Devices still need name resolution and time.",
        options: ["DENY", "PERMIT", "DROP", "RESET"],
        answer: 1,
        explain: "PERMIT IoT to the shared services subnet on the specific service ports so devices stay functional."
      },
      {
        label: "PORTS to permit toward Shared Services",
        hint: "Name resolution and time sync.",
        options: ["UDP 53 and UDP 123", "TCP 445 and TCP 3389", "TCP 23 and TCP 80", "UDP 161 and TCP 25"],
        answer: 0,
        explain: "DNS uses UDP 53 and NTP uses UDP 123; only those service ports should be opened to the shared subnet."
      },
      {
        label: "Best-practice handling of return traffic to IoT",
        hint: "Corporate-initiated sessions to IoT may still be needed for management.",
        options: ["Use a stateful rule so replies to IoT-initiated flows are allowed automatically", "Add a manual permit for every possible return port", "Disable stateful inspection on the IoT interface", "Permit corporate -> IoT any any"],
        answer: 0,
        explain: "A stateful firewall automatically allows return packets for sessions the IoT device started, so no broad inbound permit is required."
      },
      {
        label: "Order of the IoT -> Corporate DENY vs IoT -> Internet PERMIT",
        hint: "The deny must protect corporate even though Internet is allowed.",
        options: ["Place DENY IoT->192.168.10.0/24 above PERMIT IoT->any", "Place PERMIT IoT->any above the corporate deny", "Order is irrelevant with stateful filtering", "Remove the corporate deny entirely"],
        answer: 0,
        explain: "Because a broad PERMIT to 'any' would also cover the corporate subnet, the specific corporate DENY must come first in a first-match ACL."
      }
    ],
    summary: "IoT segmentation permits only required services and Internet egress while a higher-priority deny blocks IoT-to-corporate; stateful inspection handles return traffic."
  },
  {
    id: "PBQ-081",
    format: 3,
    domain: 4,
    title: "Web Server in the DMZ",
    brief: "A public web server sits in the DMZ. Allow HTTP/HTTPS from the Internet to it, but ensure the DMZ can never initiate connections into the internal LAN.",
    exhibitTitle: "DMZ Three-Leg Design",
    exhibit: "<span class='cy'>Internet</span>  any (WAN)\n\n<span class='cy'>DMZ Zone</span>\n  Web Server  <span class='hl'>203.0.113.20</span>\n\n<span class='cy'>Internal LAN</span>\n  <span class='hl'>10.0.0.0/16</span>\n\n<span class='warnc'>Inbound to web: 80/443 ok. DMZ -> LAN: deny</span>",
    fields: [
      {
        label: "ACTION for Internet -> Web Server",
        hint: "The site must be publicly reachable.",
        options: ["DENY", "PERMIT", "DROP", "RESET"],
        answer: 1,
        explain: "PERMIT inbound web traffic so the public can reach the DMZ web server."
      },
      {
        label: "PORTS for the inbound web rule",
        hint: "Cleartext and encrypted web.",
        options: ["TCP 80 and TCP 443", "TCP 21 and TCP 22", "UDP 53 and UDP 123", "TCP 3389 and TCP 445"],
        answer: 0,
        explain: "HTTP is TCP 80 and HTTPS is TCP 443; only these should be opened from the Internet to the web server."
      },
      {
        label: "DESTINATION for the inbound permit",
        hint: "Only the one server, not the whole DMZ.",
        options: ["10.0.0.0/16", "203.0.113.20", "any", "the LAN gateway"],
        answer: 1,
        explain: "Scope the destination to the single web server 203.0.113.20 to minimize exposure."
      },
      {
        label: "ACTION for DMZ -> Internal LAN",
        hint: "A compromised DMZ host must not pivot inward.",
        options: ["PERMIT", "DENY", "NAT", "LOG-ONLY"],
        answer: 1,
        explain: "DENY DMZ-initiated traffic to the internal LAN so a breached web server cannot reach internal systems."
      },
      {
        label: "If the web server needs a backend DB on the LAN, what is best practice?",
        hint: "Avoid opening the whole LAN.",
        options: ["Permit only web server -> DB IP on the DB port", "Permit DMZ -> LAN any any", "Move the database into the DMZ", "Disable the DMZ->LAN deny"],
        answer: 0,
        explain: "Open a narrow permit from the web server's IP to just the database host and port, keeping the broad DMZ-to-LAN deny intact."
      }
    ],
    summary: "DMZ design permits only 80/443 inbound to the specific web server and denies DMZ-to-LAN, opening a single tightly scoped rule only when a backend connection is truly required."
  },
  {
    id: "PBQ-082",
    format: 3,
    domain: 4,
    title: "Guest Portal Segmentation Rules",
    brief: "Guest wireless clients should reach only the Internet. Block all guest access to corporate, management, and other guest peers on the captive-portal firewall.",
    exhibitTitle: "Guest Network Zones",
    exhibit: "<span class='cy'>Guest VLAN</span>\n  <span class='hl'>172.31.99.0/24</span>\n\n<span class='cy'>Corporate</span>\n  10.0.0.0/8\n\n<span class='cy'>Management</span>\n  10.255.0.0/16\n\n<span class='warnc'>Guest -> Internet only; deny RFC1918 and peer isolation</span>",
    fields: [
      {
        label: "ACTION for Guest -> Corporate (10.0.0.0/8)",
        hint: "Guests must not touch corporate resources.",
        options: ["PERMIT", "DENY", "NAT", "REDIRECT"],
        answer: 1,
        explain: "DENY guest traffic to the corporate /8 so visitors cannot reach internal systems."
      },
      {
        label: "ACTION for Guest -> Management (10.255.0.0/16)",
        hint: "Infrastructure management must never be exposed to guests.",
        options: ["PERMIT", "DENY", "LOG-ONLY", "NAT"],
        answer: 1,
        explain: "DENY guests to the management subnet to protect switches, APs, and firewall admin interfaces."
      },
      {
        label: "ACTION for Guest -> Internet",
        hint: "Internet browsing is the only thing guests should do.",
        options: ["DENY", "PERMIT", "DROP", "RESET"],
        answer: 1,
        explain: "PERMIT guest traffic to the Internet (after the RFC1918 denies) so visitors can browse."
      },
      {
        label: "Best practice to stop guest-to-guest snooping",
        hint: "Clients on the same SSID should not see each other.",
        options: ["Enable client/peer isolation on the guest VLAN", "Permit guest -> guest any any", "Disable the captive portal", "Use a single flat VLAN for all users"],
        answer: 0,
        explain: "Client (peer) isolation prevents guest devices from communicating with each other on the same network."
      },
      {
        label: "Correct ordering of guest rules",
        hint: "RFC1918 denies must precede the broad Internet permit.",
        options: ["Deny RFC1918 ranges, then Permit guest->any", "Permit guest->any, then deny RFC1918", "Order is irrelevant", "Only one Internet permit is needed"],
        answer: 0,
        explain: "Place the specific RFC1918 denies above the broad Internet permit so a permit to 'any' does not accidentally allow internal access."
      }
    ],
    summary: "Guest isolation denies all RFC1918 internal ranges first, permits Internet egress, and enables client isolation so guests reach only the outside world."
  },
  {
    id: "PBQ-083",
    format: 3,
    domain: 4,
    title: "Outbound Telnet and FTP Block",
    brief: "Security policy bans cleartext remote management out of the network. Block Telnet and FTP egress while still allowing SSH and SFTP.",
    exhibitTitle: "Egress Hardening",
    exhibit: "<span class='cy'>LAN</span>  10.5.0.0/16\n<span class='cy'>Internet</span>  any\n\n<span class='warnc'>Banned: Telnet, FTP (cleartext)</span>\n<span class='ok'>Allowed: SSH, SFTP (encrypted)</span>",
    fields: [
      {
        label: "ACTION for LAN -> any on TCP 23",
        hint: "Telnet is cleartext.",
        options: ["PERMIT", "DENY", "NAT", "LOG-ONLY"],
        answer: 1,
        explain: "DENY TCP 23 (Telnet) egress because credentials traverse in cleartext."
      },
      {
        label: "PORT to deny for cleartext FTP control",
        hint: "FTP control channel.",
        options: ["TCP 21", "TCP 22", "TCP 990", "UDP 69"],
        answer: 0,
        explain: "FTP control uses TCP 21; that is the cleartext service to block."
      },
      {
        label: "ACTION for LAN -> any on TCP 22",
        hint: "SSH and SFTP ride this port.",
        options: ["DENY", "PERMIT", "DROP", "RESET"],
        answer: 1,
        explain: "PERMIT TCP 22 so encrypted SSH and SFTP remain available as the sanctioned alternative."
      },
      {
        label: "Why is the implicit deny still important here?",
        hint: "Consider ports you did not explicitly list.",
        options: ["It catches any other unlisted egress by default", "It re-permits Telnet automatically", "It is only for inbound traffic", "It disables stateful inspection"],
        answer: 0,
        explain: "The implicit deny ensures any protocol you did not explicitly permit is blocked, reinforcing a default-deny egress posture."
      }
    ],
    summary: "Cleartext protocols Telnet (23) and FTP (21) are denied while SSH/SFTP (22) is permitted, with the implicit deny covering everything else outbound."
  },
  {
    id: "PBQ-084",
    format: 3,
    domain: 4,
    title: "Stateless ACL Return-Path Dilemma",
    brief: "An older router ACL is stateless. Decide how to allow internal users' web replies without manually opening high ports, and recommend the right firewall behavior.",
    exhibitTitle: "Return-Traffic Design",
    exhibit: "<span class='cy'>LAN</span>  10.8.0.0/16 -> Internet web\n<span class='cy'>WAN in</span>  Internet -> LAN replies\n\n<span class='dim'>Stateless ACL cannot track sessions</span>\n<span class='warnc'>Question: how to allow only legitimate replies?</span>",
    fields: [
      {
        label: "Outbound ACTION for LAN -> web (80/443)",
        hint: "Users must browse.",
        options: ["DENY", "PERMIT", "DROP", "RESET"],
        answer: 1,
        explain: "PERMIT outbound HTTP/HTTPS so internal users can reach websites."
      },
      {
        label: "Best way to allow the matching replies",
        hint: "Modern firewalls track connection state.",
        options: ["Use a stateful firewall that auto-permits established/related replies", "Permit Internet -> LAN any any", "Open all TCP high ports 1024-65535 inbound", "Disable the implicit deny inbound"],
        answer: 0,
        explain: "A stateful firewall tracks the outbound session and automatically permits the established/related return packets without a broad inbound rule."
      },
      {
        label: "If you must stay stateless, the safest inbound rule is",
        hint: "Match only acknowledgement packets of existing sessions.",
        options: ["Permit TCP inbound only where the ACK/established flag is set", "Permit all inbound TCP", "Permit inbound UDP any", "Permit inbound ICMP only"],
        answer: 0,
        explain: "A stateless ACL can approximate state by permitting inbound TCP with the established (ACK) flag, allowing replies but not new inbound connections."
      },
      {
        label: "Inbound DESTINATION scope for the reply rule",
        hint: "Replies return to the internal browsing subnet.",
        options: ["10.8.0.0/16", "any", "the WAN IP only", "0.0.0.0/0"],
        answer: 0,
        explain: "Replies are destined back to the LAN 10.8.0.0/16, so scope the inbound permit to that subnet."
      }
    ],
    summary: "Prefer a stateful firewall to auto-permit established/related replies; if stuck on a stateless ACL, permit only inbound TCP with the established flag back to the LAN subnet."
  },
  {
    id: "PBQ-085",
    format: 3,
    domain: 4,
    title: "Database Tier Lockdown",
    brief: "Only the application tier may reach the database tier. Build the inter-VLAN rule so app servers reach SQL while users and the web tier cannot.",
    exhibitTitle: "Three-Tier App Zones",
    exhibit: "<span class='cy'>Web Tier</span>  10.1.1.0/24\n<span class='cy'>App Tier</span>  <span class='hl'>10.1.2.0/24</span>\n<span class='cy'>DB Tier</span>   <span class='hl'>10.1.3.0/24</span>  MS SQL\n\n<span class='warnc'>Only App -> DB on the SQL port</span>",
    fields: [
      {
        label: "ACTION for App Tier -> DB Tier",
        hint: "App servers must query the database.",
        options: ["DENY", "PERMIT", "DROP", "RESET"],
        answer: 1,
        explain: "PERMIT the app tier to reach the database tier on the SQL port."
      },
      {
        label: "SOURCE for the permit rule",
        hint: "Middle tier only.",
        options: ["10.1.1.0/24", "10.1.2.0/24", "10.1.3.0/24", "any"],
        answer: 1,
        explain: "Source is the app tier 10.1.2.0/24; the web tier and users must not be sources."
      },
      {
        label: "PORT for Microsoft SQL Server",
        hint: "Default MS SQL listener.",
        options: ["TCP 1433", "TCP 3306", "TCP 5432", "TCP 1521"],
        answer: 0,
        explain: "MS SQL Server listens on TCP 1433 by default (3306 is MySQL, 5432 Postgres, 1521 Oracle)."
      },
      {
        label: "ACTION for Web Tier -> DB Tier",
        hint: "The web tier should talk to the app tier, not the DB directly.",
        options: ["PERMIT", "DENY", "NAT", "LOG-ONLY"],
        answer: 1,
        explain: "DENY the web tier directly to the database so all DB access is mediated by the app tier."
      }
    ],
    summary: "Lock the database tier to TCP 1433 from the app subnet only, denying web-tier and user access so the database is never directly exposed."
  },
  {
    id: "PBQ-086",
    format: 3,
    domain: 4,
    title: "Management Plane Access Control",
    brief: "SSH and SNMP to network devices must come only from the NOC management subnet. Restrict device management and deny it from everywhere else.",
    exhibitTitle: "Out-of-Band Management Zones",
    exhibit: "<span class='cy'>NOC Mgmt</span>  <span class='hl'>10.99.1.0/24</span>\n<span class='cy'>Device Mgmt IPs</span>  <span class='hl'>10.99.250.0/24</span>\n<span class='cy'>User VLAN</span>  10.40.0.0/16  <span class='warnc'>(no mgmt access)</span>",
    fields: [
      {
        label: "ACTION for NOC -> Device Mgmt on SSH",
        hint: "Admins need CLI access.",
        options: ["DENY", "PERMIT", "DROP", "RESET"],
        answer: 1,
        explain: "PERMIT SSH from the NOC management subnet to the device management addresses."
      },
      {
        label: "PORTS for SSH and SNMP management",
        hint: "Secure shell plus the monitoring protocol.",
        options: ["TCP 22 and UDP 161", "TCP 23 and UDP 162", "TCP 22 and TCP 80", "TCP 3389 and UDP 514"],
        answer: 0,
        explain: "SSH uses TCP 22 and SNMP polling uses UDP 161; those are the management ports to permit."
      },
      {
        label: "SOURCE for the management permit",
        hint: "Only the NOC subnet.",
        options: ["10.40.0.0/16", "10.99.1.0/24", "any", "10.99.250.0/24"],
        answer: 1,
        explain: "Source must be the NOC management subnet 10.99.1.0/24, not user networks."
      },
      {
        label: "ACTION for User VLAN -> Device Mgmt",
        hint: "Ordinary users should never reach device management.",
        options: ["PERMIT", "DENY", "NAT", "LOG-ONLY"],
        answer: 1,
        explain: "DENY the user VLAN to device management IPs to keep the management plane isolated."
      },
      {
        label: "Best practice for SNMP version on the permitted rule",
        hint: "Cleartext community strings are risky.",
        options: ["Require SNMPv3 with auth/priv rather than v1/v2c", "Allow SNMPv1 for simplicity", "Use SNMP over Telnet", "Disable SNMP entirely and rely on ICMP"],
        answer: 0,
        explain: "SNMPv3 provides authentication and encryption; v1/v2c send community strings in cleartext and should be avoided."
      }
    ],
    summary: "Restrict device management (SSH/22 and SNMP/161) to the NOC subnet only, deny it from user VLANs, and require SNMPv3 for confidentiality and integrity."
  },
  {
    id: "PBQ-087",
    format: 3,
    domain: 4,
    title: "Geo/IP Block of Malicious Range",
    brief: "Threat intel flags a hostile prefix scanning your edge. Add an explicit block at the top of the WAN inbound ACL without disturbing legitimate web access.",
    exhibitTitle: "Edge Inbound ACL",
    exhibit: "<span class='cy'>WAN inbound rules (top-down)</span>\n  R1  ____  <span class='hl'>198.18.0.0/15</span> -> any  (threat range)\n  R2  PERMIT any -> 203.0.113.20  TCP 80,443  <span class='ok'>(web)</span>\n  R3  <span class='dim'>implicit deny</span>",
    fields: [
      {
        label: "ACTION for R1",
        hint: "Stop the hostile prefix entirely.",
        options: ["PERMIT", "DENY", "NAT", "LOG-ONLY"],
        answer: 1,
        explain: "DENY the malicious prefix so its scanning never reaches any service."
      },
      {
        label: "Why must R1 sit above R2?",
        hint: "First match wins.",
        options: ["So the block is evaluated before the web permit", "So web traffic is matched first", "Order does not matter", "So NAT applies before filtering"],
        answer: 0,
        explain: "If the web permit were above the deny, a host in the threat range could still hit 80/443; the deny must be evaluated first."
      },
      {
        label: "DESTINATION for the block rule",
        hint: "Block the source to everything you expose.",
        options: ["any", "203.0.113.20 only", "10.0.0.0/8", "the WAN IP"],
        answer: 0,
        explain: "Set destination 'any' so the hostile source is blocked from reaching every exposed service, not just the web server."
      },
      {
        label: "Best practice after adding the block",
        hint: "Visibility matters for tuning.",
        options: ["Enable logging on the deny to confirm hits and watch for false positives", "Remove the implicit deny", "Disable the web permit", "Open ICMP from the threat range"],
        answer: 0,
        explain: "Logging the deny rule lets you confirm it is catching the hostile range and detect any legitimate traffic accidentally blocked."
      }
    ],
    summary: "Place an explicit deny for the malicious prefix at the top of the WAN ACL, scoped to 'any' destination, with logging enabled so it is evaluated before legitimate permits."
  },
  {
    id: "PBQ-088",
    format: 3,
    domain: 4,
    title: "VoIP Traffic Permit and Protection",
    brief: "Allow SIP and RTP between the IP phone VLAN and the PBX while keeping data clients out of the voice VLAN. Build the inter-VLAN voice rules.",
    exhibitTitle: "Voice VLAN Zones",
    exhibit: "<span class='cy'>Voice VLAN</span>  <span class='hl'>10.7.7.0/24</span>  IP phones\n<span class='cy'>PBX</span>  <span class='hl'>10.7.1.10</span>\n<span class='cy'>Data VLAN</span>  10.7.20.0/24  <span class='warnc'>(no voice access)</span>",
    fields: [
      {
        label: "ACTION for Voice VLAN -> PBX",
        hint: "Phones must register and call.",
        options: ["DENY", "PERMIT", "DROP", "RESET"],
        answer: 1,
        explain: "PERMIT the voice VLAN to reach the PBX for signaling and media."
      },
      {
        label: "PORT/PROTOCOL for SIP signaling",
        hint: "Session Initiation Protocol default.",
        options: ["UDP/TCP 5060", "TCP 1720", "UDP 69", "TCP 1433"],
        answer: 0,
        explain: "SIP signaling uses port 5060 (TCP/UDP); 1720 is H.323, a different VoIP signaling protocol."
      },
      {
        label: "What carries the actual audio media?",
        hint: "Real-time media over a UDP range.",
        options: ["RTP over a UDP port range (e.g., 16384-32767)", "TCP 80", "ICMP", "TCP 22"],
        answer: 0,
        explain: "RTP carries voice media over a negotiated UDP port range, which must be permitted alongside SIP."
      },
      {
        label: "ACTION for Data VLAN -> Voice VLAN",
        hint: "Keep data clients out of voice.",
        options: ["PERMIT", "DENY", "NAT", "LOG-ONLY"],
        answer: 1,
        explain: "DENY data clients into the voice VLAN to protect call quality and reduce the attack surface."
      },
      {
        label: "Best practice for voice quality alongside the permit",
        hint: "Voice is latency-sensitive.",
        options: ["Apply QoS marking/priority to the permitted voice traffic", "Disable the implicit deny", "Route voice through the guest VLAN", "Block RTP and allow only SIP"],
        answer: 0,
        explain: "QoS prioritizes the permitted SIP/RTP flows so voice stays clear; filtering alone does not guarantee call quality."
      }
    ],
    summary: "Voice rules permit SIP (5060) and RTP (UDP range) between phones and the PBX, deny data-VLAN access to voice, and pair the permits with QoS prioritization."
  },
  {
    id: "PBQ-089",
    format: 3,
    domain: 4,
    title: "Anti-Spoofing Ingress Filter",
    brief: "Apply anti-spoofing on the WAN interface. Drop inbound packets that claim internal or bogon source addresses before any other processing.",
    exhibitTitle: "Ingress Anti-Spoof Rules",
    exhibit: "<span class='cy'>WAN inbound (top of ACL)</span>\n  R1  ____ src <span class='hl'>10.0.0.0/8</span> -> any\n  R2  ____ src 192.168.0.0/16 -> any\n  R3  ____ src 127.0.0.0/8 -> any\n  R4  PERMIT any -> 203.0.113.20  TCP 443\n\n<span class='warnc'>Inbound packets must not claim private/loopback sources</span>",
    fields: [
      {
        label: "ACTION for R1 (inbound src 10.0.0.0/8 on WAN)",
        hint: "A public-facing interface should never see RFC1918 as a source.",
        options: ["PERMIT", "DENY", "NAT", "LOG-ONLY"],
        answer: 1,
        explain: "DENY inbound packets claiming a private 10.0.0.0/8 source on the WAN; they are spoofed."
      },
      {
        label: "Why deny inbound src 127.0.0.0/8 (R3)?",
        hint: "Loopback should never arrive from the wire.",
        options: ["It is loopback and can only be spoofed when seen on the WAN", "It is a valid Internet source", "It is the default gateway range", "It is required for NAT"],
        answer: 0,
        explain: "127.0.0.0/8 is loopback; a packet arriving on the WAN with that source is forged and must be dropped."
      },
      {
        label: "Where must these anti-spoof denies be placed?",
        hint: "They should run before legitimate permits.",
        options: ["At the very top of the inbound ACL", "Just above the implicit deny", "After the web permit", "Anywhere, order is irrelevant"],
        answer: 0,
        explain: "Anti-spoofing denies belong at the top so spoofed packets are dropped before any permit can match them."
      },
      {
        label: "Best practice to cover all bogon/private ranges",
        hint: "Several reserved ranges should be filtered.",
        options: ["Deny all RFC1918 plus reserved bogons inbound on the WAN", "Deny only 10.0.0.0/8", "Permit private ranges for flexibility", "Filter bogons on the LAN interface instead"],
        answer: 0,
        explain: "Filter the full set of RFC1918 (10/8, 172.16/12, 192.168/16) and other bogons inbound on the WAN for complete anti-spoofing."
      }
    ],
    summary: "Anti-spoofing denies inbound packets that forge private or loopback source addresses, placed at the top of the WAN ACL before any permit, covering all RFC1918 and bogon ranges."
  },
  {
    id: "PBQ-090",
    format: 3,
    domain: 4,
    title: "Remote Access VPN Split Rules",
    brief: "Remote VPN clients land in a dedicated pool. Permit them to reach internal apps but block lateral movement to the management network and enforce least privilege.",
    exhibitTitle: "Remote VPN Pool Zones",
    exhibit: "<span class='cy'>VPN Pool</span>  <span class='hl'>10.200.0.0/24</span>\n<span class='cy'>App Servers</span>  <span class='hl'>10.10.30.0/24</span>\n<span class='cy'>Mgmt Net</span>  10.255.0.0/16  <span class='warnc'>(off-limits to VPN)</span>",
    fields: [
      {
        label: "ACTION for VPN Pool -> App Servers",
        hint: "Remote workers need the apps.",
        options: ["DENY", "PERMIT", "DROP", "RESET"],
        answer: 1,
        explain: "PERMIT the VPN pool to reach the internal application servers they need for work."
      },
      {
        label: "DESTINATION/PORT for an internal HTTPS app",
        hint: "Scope to the app subnet on the web port.",
        options: ["10.10.30.0/24 TCP 443", "any TCP 443", "10.255.0.0/16 TCP 443", "10.10.30.0/24 TCP 3389"],
        answer: 0,
        explain: "Permit the VPN pool to the app subnet 10.10.30.0/24 on TCP 443 only, following least privilege."
      },
      {
        label: "ACTION for VPN Pool -> Management Net",
        hint: "Remote clients must not reach infrastructure management.",
        options: ["PERMIT", "DENY", "NAT", "LOG-ONLY"],
        answer: 1,
        explain: "DENY the VPN pool to the management network to prevent lateral movement to infrastructure."
      },
      {
        label: "Ordering of the management DENY vs app PERMIT",
        hint: "Protect management even if a later permit is broad.",
        options: ["Deny VPN->Mgmt above any broad VPN permit", "Permit first, deny later", "Order is irrelevant", "Merge them into one rule"],
        answer: 0,
        explain: "The management DENY must precede any broad VPN permit so first-match logic blocks management access before a wider allow can match."
      },
      {
        label: "Best practice for what VPN clients can reach",
        hint: "Default posture for unlisted destinations.",
        options: ["Permit only required app subnets and rely on implicit deny for the rest", "Permit VPN -> any any for convenience", "Disable the implicit deny for VPN users", "Place VPN clients directly on the corporate LAN"],
        answer: 0,
        explain: "Grant VPN clients only the specific subnets and ports they need; the implicit deny blocks everything else, enforcing least privilege."
      }
    ],
    summary: "Remote VPN access permits only the required app subnets and ports, denies the management network with a higher-priority rule, and leans on the implicit deny for least privilege."
  }
);
NETPLUS.pbqs.push(
{
id:"PBQ-091",
format:4,
domain:2,
title:"Three-AP Office on 2.4 GHz",
brief:"A small office deploys three APs on the 2.4 GHz band in a single floor. Pick non-overlapping channels and fix the interference.",
exhibitTitle:"2.4 GHz Channel Plan",
exhibit:"FLOOR 1 - 2.4 GHz APs\n-----------------------------\nAP-1 (Lobby)    channel <span class='ok'>1</span>\nAP-2 (Center)   channel <span class='hl'>3</span>  &lt;-- overlaps 1\nAP-3 (Back)     channel <span class='ok'>11</span>\n-----------------------------\n<span class='dim'>Goal: 3 non-overlapping channels</span>\n<span class='cy'>2.4 GHz non-overlap set = 1 / 6 / 11</span>",
fields:[
{label:"Best channel for AP-2 (Center)",hint:"Must not overlap channels 1 or 11",options:["Channel 6","Channel 3","Channel 4","Channel 9"],answer:0,explain:"On 2.4 GHz only channels 1, 6, and 11 are non-overlapping. With AP-1 on 1 and AP-3 on 11, AP-2 must use 6."},
{label:"Why channel 3 was a problem",hint:"Spectral overlap",options:["It is reserved for radar","It overlaps channels 1 and 6 causing interference","It is a 5 GHz channel","It is illegal in the US"],answer:1,explain:"Channel 3 partially overlaps both 1 and 6, so its energy bleeds into neighbors and lowers throughput."},
{label:"Channel width to use on 2.4 GHz",hint:"Spectrum is scarce here",options:["80 MHz","40 MHz","20 MHz","160 MHz"],answer:2,explain:"2.4 GHz has only enough room for three 20 MHz channels. Wider channels (40 MHz) destroy the non-overlap plan and cause co-channel interference."},
{label:"Reason to keep 2.4 GHz at 20 MHz",hint:"Tradeoff",options:["Better security","Longer battery life only","Higher peak speed","Preserves the 1/6/11 non-overlap plan"],answer:3,explain:"A 40 MHz channel on 2.4 GHz consumes two of the three usable channels, making non-overlapping reuse impossible."}
],
summary:"Use 1/6/11 at 20 MHz on 2.4 GHz so three APs never overlap."
},
{
id:"PBQ-092",
format:4,
domain:2,
title:"Band Selection for High Density",
brief:"A conference center needs maximum capacity for laptops and phones. Choose the right bands and widths.",
exhibitTitle:"Band Capability Matrix",
exhibit:"BAND OPTIONS\n-----------------------------\n<span class='warnc'>2.4 GHz</span>  3 channels, long range, crowded\n<span class='ok'>5 GHz</span>    many channels, good capacity\n<span class='ok'>6 GHz</span>    most spectrum, Wi-Fi 6E only\n-----------------------------\nClients: <span class='cy'>mixed Wi-Fi 5 / 6 / 6E</span>\n<span class='dim'>Need: max throughput, dense seating</span>",
fields:[
{label:"Primary band for capacity",hint:"Most clean channels",options:["5 GHz","900 MHz","Bluetooth band","2.4 GHz"],answer:0,explain:"5 GHz offers many non-overlapping channels and is supported by virtually all modern clients, making it the workhorse for capacity."},
{label:"Band for newest 6E clients",hint:"Widest open spectrum",options:["5 GHz","6 GHz","60 GHz","2.4 GHz"],answer:1,explain:"6 GHz (Wi-Fi 6E) adds large amounts of fresh, interference-free spectrum for capable clients."},
{label:"Keep 2.4 GHz enabled for",hint:"Legacy reach",options:["DHCP only","Highest throughput","Legacy and long-range IoT devices","RADIUS traffic"],answer:2,explain:"2.4 GHz has better range and wall penetration and supports older/IoT clients, so it is kept but not used for high-capacity needs."},
{label:"5 GHz width for dense seating",hint:"More channels vs more speed",options:["160 MHz","80 MHz","40 MHz","20 or 40 MHz"],answer:3,explain:"In high density, narrower channels (20/40 MHz) give more non-overlapping channels for reuse, reducing co-channel interference versus a few wide 160 MHz channels."}
],
summary:"5/6 GHz carry capacity; narrow channels maximize reuse in dense areas."
},
{
id:"PBQ-093",
format:4,
domain:2,
title:"WPA3-Personal Rollout",
brief:"A coffee shop wants strong wireless security with a single passphrase for guests. Configure the correct mode.",
exhibitTitle:"SSID Security Config",
exhibit:"SSID: GuestWiFi\n-----------------------------\nAuth: <span class='hl'>WPA2-PSK (TKIP)</span>  &lt;-- weak\nKey:  shared passphrase\n-----------------------------\n<span class='cy'>Target: modern PSK with forward secrecy</span>\n<span class='dim'>No RADIUS server available</span>",
fields:[
{label:"Correct security mode",hint:"Passphrase but modern",options:["WPA3-Personal (SAE)","WPA3-Enterprise","Open / no security","WEP"],answer:0,explain:"WPA3-Personal uses SAE (Simultaneous Authentication of Equals) for a shared passphrase with forward secrecy and resistance to offline dictionary attacks."},
{label:"Handshake used by WPA3-Personal",hint:"Replaces 4-way PSK",options:["EAP-TLS","SAE / Dragonfly","PEAP","Open System"],answer:1,explain:"WPA3-Personal authenticates with SAE (the Dragonfly handshake), not the WPA2 pre-shared-key 4-way handshake."},
{label:"Cipher to require",hint:"Drop legacy",options:["TKIP","WEP","AES-CCMP / GCMP","RC4"],answer:2,explain:"WPA3 mandates AES (CCMP/GCMP); legacy TKIP/WEP/RC4 are insecure and must be disabled."},
{label:"Why WPA2-PSK TKIP was a problem",hint:"Two weaknesses",options:["Needs a RADIUS server","Only works on 6 GHz","Too fast","Weak cipher and vulnerable to offline attacks"],answer:3,explain:"TKIP is deprecated and WPA2-PSK is susceptible to offline dictionary attacks once the handshake is captured."}
],
summary:"Use WPA3-Personal (SAE) with AES for a shared-passphrase network."
},
{
id:"PBQ-094",
format:4,
domain:2,
title:"802.1X Enterprise Authentication",
brief:"A corporate WLAN must authenticate each user against Active Directory using certificates. Configure 802.1X/RADIUS.",
exhibitTitle:"Enterprise WLAN Parameters",
exhibit:"SSID: CORP-SECURE\n-----------------------------\nSecurity: <span class='ok'>WPA3-Enterprise</span>\nAuth server: <span class='cy'>radius.corp.local</span>\nPort: <span class='hl'>1645</span>  &lt;-- legacy\nEAP: ?\n-----------------------------\n<span class='dim'>PKI issues client + server certs</span>",
fields:[
{label:"Correct security mode",hint:"Per-user auth",options:["WPA3-Enterprise","WPA2-PSK","Open with portal","WPA3-Personal"],answer:0,explain:"WPA3-Enterprise uses 802.1X to authenticate each user individually via a RADIUS server, unlike a single PSK."},
{label:"EAP method for client+server certs",hint:"Mutual certificates",options:["CHAP","EAP-TLS","EAP-MD5","PAP"],answer:1,explain:"EAP-TLS provides mutual certificate authentication (both client and server present certs), the strongest common EAP method."},
{label:"Standard RADIUS authentication port",hint:"Modern assigned port",options:["3389","1645","1812","389"],answer:2,explain:"The IANA-assigned RADIUS authentication port is UDP 1812 (1813 for accounting). 1645/1646 are legacy ports."},
{label:"Role of the RADIUS server",hint:"AAA",options:["Provides DNS","Encrypts the air interface only","Assigns IP addresses","Authenticates users and authorizes access"],answer:3,explain:"RADIUS performs Authentication, Authorization, and Accounting for the 802.1X supplicants connecting to the WLAN."}
],
summary:"WPA3-Enterprise + 802.1X with EAP-TLS to RADIUS on UDP 1812."
},
{
id:"PBQ-095",
format:4,
domain:2,
title:"Co-Channel Interference Cleanup",
brief:"A two-floor office reuses the same 5 GHz channel on adjacent APs. Redesign the channel plan to remove co-channel interference.",
exhibitTitle:"5 GHz AP Map",
exhibit:"5 GHz DEPLOYMENT\n-----------------------------\nAP-A  ch <span class='hl'>36</span>\nAP-B  ch <span class='hl'>36</span>  &lt;-- same as A, adjacent\nAP-C  ch <span class='ok'>149</span>\nAP-D  ch <span class='ok'>44</span>\n-----------------------------\n<span class='cy'>Use distinct UNII channels per cell</span>\n<span class='dim'>UNII-1: 36/40/44/48  UNII-3: 149/153/157/161</span>",
fields:[
{label:"Fix for AP-B",hint:"Different non-DFS channel",options:["Change to 40 (or another distinct channel)","Change to 36 again","Move to 2.4 GHz channel 1","Keep 36"],answer:0,explain:"Two adjacent APs on the same channel cause co-channel interference (they share airtime). Assign AP-B a distinct channel such as 40."},
{label:"What is co-channel interference",hint:"Same channel neighbors",options:["Two APs on overlapping different channels","APs on the same channel contending for airtime","Microwave noise only","Bluetooth crossover"],answer:1,explain:"Co-channel interference occurs when nearby APs share the exact same channel and must take turns transmitting, cutting effective throughput."},
{label:"Channel reuse principle",hint:"Spatial planning",options:["One channel for the whole site","Same channel everywhere","Repeat channels only where cells do not overlap","Random channels"],answer:2,explain:"Channels should be reused only between cells that are far enough apart not to hear each other, maximizing capacity."},
{label:"Best width here to keep channels available",hint:"More cells need more channels",options:["Single 20 MHz only","160 MHz","80 MHz","40 MHz"],answer:3,explain:"40 MHz balances throughput with having enough distinct 5 GHz channels to give each adjacent AP its own, avoiding co-channel overlap."}
],
summary:"Assign distinct channels to adjacent cells; reuse only where cells do not overlap."
},
{
id:"PBQ-096",
format:4,
domain:2,
title:"Channel Width Tradeoff",
brief:"An engineer wants the fastest single-client speed but the site is dense. Decide on channel width and understand the tradeoff.",
exhibitTitle:"Width vs Capacity",
exhibit:"5 GHz WIDTH OPTIONS\n-----------------------------\n20 MHz  <span class='dim'>most channels, lowest peak</span>\n40 MHz  <span class='ok'>balanced</span>\n80 MHz  <span class='warnc'>fewer channels</span>\n160 MHz <span class='hl'>highest peak, very few channels</span>\n-----------------------------\nSite: <span class='cy'>dense, many APs</span>",
fields:[
{label:"Effect of wider channels",hint:"Speed vs reuse",options:["More throughput but fewer non-overlapping channels","More channels and more throughput","No effect on channels","Less throughput, more channels"],answer:0,explain:"Doubling channel width roughly doubles peak throughput but halves the number of non-overlapping channels available for reuse."},
{label:"Best width for a dense multi-AP site",hint:"Need reuse",options:["80 MHz","20 or 40 MHz","320 MHz","160 MHz"],answer:1,explain:"In dense deployments, narrower channels (20/40 MHz) provide more channels for reuse and reduce co-channel interference."},
{label:"When 160 MHz is appropriate",hint:"Isolated, few APs",options:["2.4 GHz only","Crowded apartment building","A single isolated AP needing max speed","Outdoor mesh of many APs"],answer:2,explain:"160 MHz suits low-density environments with few APs where there is no competition for the spectrum."},
{label:"Risk of 160 MHz in a dense site",hint:"Overlap",options:["Stronger encryption","Lower latency always","Better roaming","Severe channel overlap and co-channel interference"],answer:3,explain:"With so few 160 MHz channels, neighboring APs are forced to overlap, causing interference and reduced aggregate capacity."}
],
summary:"Wider = faster per client but fewer channels; dense sites favor 20/40 MHz."
},
{
id:"PBQ-097",
format:4,
domain:2,
title:"Guest Portal vs Secured SSID",
brief:"A retail store needs an open guest network with a captive portal and a separate secured staff network. Configure both.",
exhibitTitle:"Dual SSID Plan",
exhibit:"SSIDs\n-----------------------------\nGuest:  <span class='warnc'>Open + captive portal</span>\nStaff:  <span class='ok'>WPA3-Enterprise</span>\nVLAN:   guest=20  staff=10\n-----------------------------\n<span class='cy'>Staff uses RADIUS auth</span>\n<span class='dim'>Guest isolated from staff VLAN</span>",
fields:[
{label:"Guest network protection",hint:"WPA3 enhancement for open nets",options:["Opportunistic Wireless Encryption (OWE)","TKIP","No encryption ever","WEP"],answer:0,explain:"OWE (Enhanced Open) encrypts traffic on an open SSID without a passphrase, protecting guests while keeping the portal experience."},
{label:"Staff SSID security mode",hint:"Per-user",options:["WPA3-Personal","WPA3-Enterprise","Open","WPA2-PSK"],answer:1,explain:"Staff should use WPA3-Enterprise with 802.1X so each employee authenticates individually against RADIUS."},
{label:"Keep guests off the staff VLAN by",hint:"Segmentation",options:["Using one SSID","Same VLAN for both","VLAN/network segmentation and client isolation","Disabling DHCP"],answer:2,explain:"Mapping each SSID to its own VLAN and isolating clients prevents guests from reaching staff resources."},
{label:"EAP method for staff with passwords (no certs)",hint:"Tunneled password",options:["EAP-MD5","Open","PAP only","PEAP (MSCHAPv2)"],answer:3,explain:"PEAP wraps MSCHAPv2 in a TLS tunnel, allowing username/password auth when client certificates are not deployed."}
],
summary:"OWE-protected open guest SSID plus WPA3-Enterprise staff SSID on separate VLANs."
},
{
id:"PBQ-098",
format:4,
domain:2,
title:"Overlapping Channel Audit",
brief:"A site survey reveals overlapping 2.4 GHz channels from a previous installer. Identify and correct each overlap.",
exhibitTitle:"Survey Results",
exhibit:"2.4 GHz SURVEY\n-----------------------------\nAP-1  ch <span class='ok'>1</span>\nAP-2  ch <span class='hl'>4</span>   overlaps 1 &amp; 6\nAP-3  ch <span class='ok'>6</span>\nAP-4  ch <span class='hl'>8</span>   overlaps 6 &amp; 11\nAP-5  ch <span class='ok'>11</span>\n-----------------------------\n<span class='cy'>Valid set: 1 / 6 / 11 only</span>",
fields:[
{label:"Reassign AP-2 to",hint:"Reuse pattern",options:["Channel 11 (or 1/6 not adjacent)","Channel 4","Channel 5","Channel 2"],answer:0,explain:"AP-2 must move to one of 1/6/11; choosing the one whose neighbors are spatially distant (e.g. 11) restores non-overlap."},
{label:"Reassign AP-4 to",hint:"Stay in valid set",options:["Channel 7","Channel 1 (or another 1/6/11 value)","Channel 9","Channel 8"],answer:1,explain:"AP-4 must also use 1/6/11. Picking 1 (far from AP-3 on 6 and AP-5 on 11) avoids co-channel and overlap."},
{label:"Why overlapping channels hurt",hint:"Adjacent-channel interference",options:["They speed up roaming","They increase range","They cause adjacent-channel interference and corruption","They improve security"],answer:2,explain:"Overlapping channels bleed energy into each other, creating adjacent-channel interference that corrupts frames and forces retransmits."},
{label:"Only valid non-overlap channels on 2.4 GHz",hint:"US/most regions",options:["1, 5, 9","2, 7, 12","1, 4, 8, 11","1, 6, 11"],answer:3,explain:"In the 2.4 GHz band, channels 1, 6, and 11 are the only set of three that do not overlap."}
],
summary:"Snap every 2.4 GHz AP to 1/6/11 to eliminate adjacent-channel overlap."
},
{
id:"PBQ-099",
format:4,
domain:2,
title:"RADIUS and EAP Parameters",
brief:"Finish configuring an 802.1X WLAN: set the RADIUS endpoint, ports, shared secret, and EAP method.",
exhibitTitle:"802.1X Settings",
exhibit:"WLAN: SECURE-NET (802.1X)\n-----------------------------\nRADIUS IP:   <span class='cy'>10.0.0.50</span>\nAuth port:   <span class='hl'>?</span>\nAcct port:   <span class='hl'>?</span>\nShared secret: <span class='warnc'>set me</span>\nEAP:         <span class='ok'>cert-based</span>\n-----------------------------\n<span class='dim'>WPA3-Enterprise</span>",
fields:[
{label:"RADIUS authentication port",hint:"UDP",options:["1812","1813","1645","80"],answer:0,explain:"UDP 1812 is the standard RADIUS authentication port."},
{label:"RADIUS accounting port",hint:"UDP, one above auth",options:["1812","1813","443","389"],answer:1,explain:"UDP 1813 is the standard RADIUS accounting port."},
{label:"Purpose of the shared secret",hint:"AP-to-RADIUS",options:["Defines the VLAN","Encrypts client Wi-Fi","Authenticates the AP (NAS) to the RADIUS server","Sets the SSID"],answer:2,explain:"The shared secret is configured on both the AP and RADIUS server so they can trust and protect RADIUS messages between them."},
{label:"EAP method for full certificate auth",hint:"Both ends present certs",options:["EAP-MD5","PAP","LEAP","EAP-TLS"],answer:3,explain:"EAP-TLS uses certificates on both supplicant and server, providing the strongest mutual authentication."}
],
summary:"RADIUS on UDP 1812/1813 with a shared secret; EAP-TLS for cert-based auth."
},
{
id:"PBQ-100",
format:4,
domain:2,
title:"Warehouse Coverage Plan",
brief:"A large warehouse with metal racks needs reliable coverage for handheld scanners. Choose band, width, and security.",
exhibitTitle:"Warehouse RF Plan",
exhibit:"WAREHOUSE\n-----------------------------\nObstacles: <span class='warnc'>metal racks (high attenuation)</span>\nClients:   <span class='cy'>barcode scanners (2.4 GHz)</span>\nNeed:      coverage &gt; throughput\n-----------------------------\n<span class='dim'>Roaming required between aisles</span>",
fields:[
{label:"Band for best coverage/penetration",hint:"Longer range",options:["2.4 GHz","6 GHz","60 GHz","Both 5 and 6 only"],answer:0,explain:"2.4 GHz propagates farther and penetrates obstacles better than 5/6 GHz, ideal where coverage matters more than speed and legacy scanners are 2.4 GHz only."},
{label:"Channel width on 2.4 GHz",hint:"Keep reuse",options:["40 MHz","20 MHz","80 MHz","160 MHz"],answer:1,explain:"Use 20 MHz to keep the 1/6/11 plan valid across many APs covering the aisles."},
{label:"Feature for seamless aisle roaming",hint:"802.11 fast transition",options:["STP","Port mirroring","802.11r fast roaming","DHCP snooping"],answer:2,explain:"802.11r (Fast BSS Transition) speeds up re-authentication as scanners roam between APs, preventing session drops."},
{label:"Security mode if scanners support it",hint:"Modern PSK",options:["Open","WPA-TKIP","WEP","WPA3-Personal (SAE)"],answer:3,explain:"WPA3-Personal (SAE) gives strong protection with a shared key suitable for many headless scanner devices."}
],
summary:"2.4 GHz at 20 MHz for coverage, 802.11r roaming, WPA3-Personal security."
},
{
id:"PBQ-101",
format:4,
domain:2,
title:"DFS Channels and Radar",
brief:"An installer wants to use additional 5 GHz channels in the UNII-2 range near an airport. Account for DFS behavior.",
exhibitTitle:"5 GHz Channel Classes",
exhibit:"5 GHz UNII RANGES\n-----------------------------\nUNII-1  36-48   <span class='ok'>no DFS</span>\nUNII-2  52-64   <span class='warnc'>DFS required</span>\nUNII-2e 100-144 <span class='warnc'>DFS required</span>\nUNII-3  149-165 <span class='ok'>no DFS</span>\n-----------------------------\nLocation: <span class='hl'>near airport radar</span>",
fields:[
{label:"What DFS requires of the AP",hint:"Radar detection",options:["Detect radar and vacate the channel","Disable encryption","Use 2.4 GHz","Higher power always"],answer:0,explain:"Dynamic Frequency Selection requires the AP to detect radar and move off the channel to protect radar systems."},
{label:"Risk of DFS channels near radar",hint:"Interruptions",options:["Faster speeds","Random channel changes / brief outages on radar hits","Better security","No risk at all"],answer:1,explain:"When radar is detected the AP must leave the channel, causing momentary disconnects, which is undesirable near an airport."},
{label:"Safer channel choice here",hint:"Non-DFS",options:["Channel 52","Channel 100","Channel 149 (UNII-3)","Channel 64"],answer:2,explain:"UNII-1 (36-48) and UNII-3 (149-165) are non-DFS, avoiding radar-induced channel changes near the airport."},
{label:"Benefit of using DFS channels elsewhere",hint:"Capacity",options:["Stronger encryption","Longer range","Lower latency guaranteed","More available 5 GHz channels for reuse"],answer:3,explain:"Away from radar, DFS channels add many usable 5 GHz channels, improving capacity and channel reuse."}
],
summary:"DFS channels add capacity but vacate on radar; prefer non-DFS near airports."
},
{
id:"PBQ-102",
format:4,
domain:2,
title:"Transition Mode Mixed Clients",
brief:"A network has both legacy WPA2 devices and new WPA3 devices on one SSID. Configure secure coexistence.",
exhibitTitle:"Mixed-Client SSID",
exhibit:"SSID: OFFICE\n-----------------------------\nClients: <span class='warnc'>old Wi-Fi 5 (WPA2)</span>\n         <span class='ok'>new Wi-Fi 6 (WPA3)</span>\nGoal: support both securely\n-----------------------------\n<span class='cy'>Plan a migration path</span>",
fields:[
{label:"Mode allowing both WPA2 and WPA3 clients",hint:"Backward compatible",options:["WPA3 transition (mixed) mode","WEP","Open","WPA3-only"],answer:0,explain:"WPA3 transition mode advertises both WPA2-PSK and WPA3-SAE so legacy and new clients can join the same SSID."},
{label:"Security tradeoff of transition mode",hint:"Lowest common denominator",options:["It is more secure than WPA3-only","WPA2 clients keep WPA2-level weaknesses","It blocks all WPA2 clients","It disables AES"],answer:1,explain:"Transition mode still permits WPA2 connections, so the network is only as strong as WPA2 for those clients; move to WPA3-only when ready."},
{label:"End-state once legacy devices retire",hint:"Final config",options:["Open","WPA2-only","WPA3-only (SAE)","WEP"],answer:2,explain:"After legacy clients are gone, switch to WPA3-only for the strongest security and to remove the transition-mode weaknesses."},
{label:"Cipher required for both",hint:"Common modern cipher",options:["RC4","WEP-104","TKIP","AES-CCMP"],answer:3,explain:"AES-CCMP is the shared secure cipher; TKIP/WEP must be disabled even in transition mode."}
],
summary:"Use WPA3 transition mode now, AES only, then move to WPA3-only later."
},
{
id:"PBQ-103",
format:4,
domain:2,
title:"6 GHz Wi-Fi 6E Deployment",
brief:"A new build deploys Wi-Fi 6E. Configure the 6 GHz band with the correct mandatory security.",
exhibitTitle:"6 GHz Config",
exhibit:"BAND: 6 GHz (Wi-Fi 6E)\n-----------------------------\nWidth options: <span class='ok'>up to 160 MHz</span>\nSecurity:      <span class='hl'>must be WPA3</span>\nLegacy WPA2:   <span class='warnc'>not allowed on 6 GHz</span>\n-----------------------------\n<span class='cy'>Open networks must use OWE</span>",
fields:[
{label:"Mandatory security on 6 GHz",hint:"No legacy allowed",options:["WPA3 (SAE or Enterprise)","WEP","Open with no encryption","WPA2-PSK"],answer:0,explain:"The 6 GHz band mandates WPA3; WPA2 and older are prohibited, so it is secure by design."},
{label:"Open SSID requirement on 6 GHz",hint:"Encrypted open",options:["Plain open allowed","OWE (Enhanced Open) required","WEP required","TKIP required"],answer:1,explain:"Even open networks on 6 GHz must use OWE so traffic is encrypted without a passphrase."},
{label:"Advantage of 6 GHz spectrum",hint:"Cleaner air",options:["Works on all old clients","Best wall penetration","Lots of fresh channels with little legacy interference","Longest range"],answer:2,explain:"6 GHz provides abundant wide channels and is free of legacy 802.11 traffic, boosting capacity for capable clients."},
{label:"Why keep 5 GHz alongside 6 GHz",hint:"Client support",options:["6 GHz lacks security","To run WEP","6 GHz is slower","Many existing clients are not 6E-capable"],answer:3,explain:"Only Wi-Fi 6E/7 clients use 6 GHz, so 5 GHz remains necessary for the large installed base of devices."}
],
summary:"6 GHz requires WPA3 (OWE for open) and complements 5 GHz for older clients."
},
{
id:"PBQ-104",
format:4,
domain:2,
title:"Too-Wide Channel Misconfig",
brief:"A home-office AP was set to 80 MHz on 2.4 GHz and is causing problems. Diagnose and correct the width and channel.",
exhibitTitle:"AP Radio Settings",
exhibit:"AP RADIO (2.4 GHz)\n-----------------------------\nChannel: <span class='hl'>6</span>\nWidth:   <span class='hl'>80 MHz</span>  &lt;-- invalid here\nNeighbors: many on 1/6/11\n-----------------------------\nResult: <span class='warnc'>constant interference</span>\n<span class='cy'>Fix the width</span>",
fields:[
{label:"Problem with 80 MHz on 2.4 GHz",hint:"Band is too small",options:["2.4 GHz cannot fit 80 MHz without massive overlap","It improves range","It boosts security","It is fine"],answer:0,explain:"The entire 2.4 GHz band only spans about three 20 MHz channels; an 80 MHz channel overlaps everything and is not supported in practice."},
{label:"Correct width for 2.4 GHz",hint:"Default",options:["40 MHz","20 MHz","160 MHz","80 MHz"],answer:1,explain:"Set 20 MHz so the AP fits cleanly into the 1/6/11 plan and stops overlapping neighbors."},
{label:"Keep the channel at",hint:"Already valid",options:["Channel 8","Channel 13","Channel 6","Channel 3"],answer:2,explain:"Channel 6 is a valid non-overlapping channel; only the width needs to change to 20 MHz."},
{label:"Expected result after the fix",hint:"Interference",options:["Loss of all clients","No change","More interference","Reduced interference and stable throughput"],answer:3,explain:"Narrowing to 20 MHz removes the overlap with neighbors on 1/6/11, reducing interference and stabilizing performance."}
],
summary:"2.4 GHz must use 20 MHz; keep channel 6 and drop the invalid 80 MHz width."
},
{
id:"PBQ-105",
format:4,
domain:2,
title:"Campus 802.1X with PEAP",
brief:"A university WLAN authenticates students with their domain username and password (no client certificates). Configure the EAP and RADIUS chain.",
exhibitTitle:"Campus Auth Design",
exhibit:"SSID: EDUROAM-LITE\n-----------------------------\nSecurity: <span class='ok'>WPA3-Enterprise</span>\nCreds:    <span class='cy'>username + password</span>\nServer cert: <span class='ok'>installed on RADIUS</span>\nClient cert: <span class='warnc'>none</span>\n-----------------------------\n<span class='dim'>RADIUS proxies to AD</span>",
fields:[
{label:"EAP method for password-only auth",hint:"Server cert, no client cert",options:["PEAP (MSCHAPv2)","EAP-MD5","PAP","EAP-TLS"],answer:0,explain:"PEAP builds a TLS tunnel using the server certificate, then carries MSCHAPv2 username/password inside, ideal when clients lack certificates."},
{label:"Security mode",hint:"Per-user",options:["WPA3-Personal","WPA3-Enterprise","WPA2-PSK","Open"],answer:1,explain:"WPA3-Enterprise with 802.1X authenticates each student individually via RADIUS."},
{label:"Why a server certificate is still needed",hint:"Validate the server",options:["It is optional","To encrypt the SSID name","So clients can validate the RADIUS server and protect credentials in the tunnel","To assign IPs"],answer:2,explain:"The server cert lets supplicants verify they are talking to the real RADIUS server, preventing credential theft via rogue servers."},
{label:"RADIUS authentication port",hint:"Standard UDP",options:["1645","1813","636","1812"],answer:3,explain:"UDP 1812 is the standard RADIUS authentication port the AP forwards EAP messages to."},
{label:"Backend the RADIUS server checks",hint:"Identity store",options:["Active Directory / identity store","DNS zone","NTP server","DHCP scope"],answer:0,explain:"RADIUS validates the username/password against the directory (e.g., Active Directory) before authorizing the student."}
],
summary:"WPA3-Enterprise with PEAP-MSCHAPv2 to RADIUS (UDP 1812) validating against AD."
}
);
NETPLUS.pbqs.push(
  {
    id: "PBQ-106",
    format: 4,
    domain: 2,
    title: "Multi-Floor Coverage & Channel Reuse (2.4 GHz)",
    brief: "A three-story office uses 2.4 GHz APs stacked near the same vertical location on each floor. Co-channel interference is high. Plan a non-overlapping channel reuse pattern and fix the band-width that keeps 2.4 GHz channels non-overlapping.",
    exhibitTitle: "2.4 GHz AP Stack — Vertical Alignment",
    exhibit: "Floor 3  AP-3A  ch <span class='warnc'>6</span>  20MHz   RSSI to AP-2A: <span class='warnc'>-58 dBm</span>\nFloor 2  AP-2A  ch <span class='warnc'>6</span>  20MHz   RSSI to AP-1A: <span class='warnc'>-60 dBm</span>\nFloor 1  AP-1A  ch <span class='warnc'>6</span>  20MHz   <span class='dim'>ground level</span>\n\n<span class='dim'>2.4 GHz non-overlapping channels (US):</span> <span class='cy'>1, 6, 11</span>\n<span class='warnc'>Issue:</span> all three vertically-stacked APs share channel 6 → co-channel contention",
    fields: [
      {
        label: "Channel plan for the vertical stack (Floor1 / Floor2 / Floor3)",
        hint: "Pick channels that do not overlap between adjacent floors.",
        options: ["6 / 6 / 6", "1 / 6 / 11", "1 / 3 / 6", "1 / 2 / 3"],
        answer: 1,
        explain: "Only 1, 6, and 11 are non-overlapping in 2.4 GHz. Assigning 1/6/11 to the three stacked APs removes co-channel and adjacent-channel interference between floors."
      },
      {
        label: "Channel width to keep 2.4 GHz channels non-overlapping",
        hint: "Wider bonded channels collapse the 1/6/11 plan.",
        options: ["20 MHz", "40 MHz", "80 MHz", "160 MHz"],
        answer: 0,
        explain: "20 MHz is the only width that preserves three non-overlapping channels (1/6/11) in the narrow 2.4 GHz band. 40 MHz bonding leaves effectively one clean channel and is discouraged."
      },
      {
        label: "Adjustment that most reduces co-channel overlap between floors",
        hint: "Vertical RF leakage through floors is the problem.",
        options: ["Increase Tx power on all APs", "Lower Tx power so cells stop bleeding through floors", "Disable band steering", "Switch all APs to a hidden SSID"],
        answer: 1,
        explain: "Reducing transmit power shrinks each cell so signal does not bleed vertically between floors, lowering co-channel contention. Raising power would worsen the overlap."
      },
      {
        label: "Why 2.4 GHz is reused per-floor instead of abandoned",
        hint: "Think propagation and legacy clients.",
        options: ["It has more channels than 5 GHz", "It penetrates walls/floors and supports legacy IoT clients", "It is faster than 5 GHz", "It is exempt from interference"],
        answer: 1,
        explain: "2.4 GHz propagates farther and through obstacles and still serves legacy/IoT devices, so it is retained for coverage even though it has fewer channels than 5 GHz."
      }
    ],
    summary: "Use the 1/6/11 non-overlapping plan at 20 MHz on stacked floors and trim Tx power so cells do not bleed vertically, eliminating 2.4 GHz co-channel contention."
  },
  {
    id: "PBQ-107",
    format: 4,
    domain: 2,
    title: "High-Density Lecture Hall Capacity",
    brief: "A 400-seat lecture hall must support ~350 simultaneous 5 GHz clients. Tune band, channel width, and AP density so per-AP client load and airtime stay manageable.",
    exhibitTitle: "Lecture Hall WLAN Design Targets",
    exhibit: "Seats: <span class='hl'>400</span>   Expected concurrent clients: <span class='hl'>~350</span>\nCurrent: <span class='warnc'>2 APs</span> @ 5 GHz, <span class='warnc'>80 MHz</span> width\nObserved: <span class='warnc'>~175 clients/AP</span>, high <span class='warnc'>airtime utilization</span> / retries\n\n<span class='dim'>Target per-AP client count for dense data:</span> <span class='cy'>~30-50</span>",
    fields: [
      {
        label: "Channel width for high-density 5 GHz",
        hint: "Narrower channels = more non-overlapping channels = more APs without interference.",
        options: ["160 MHz", "80 MHz", "20 MHz", "Auto/widest available"],
        answer: 2,
        explain: "In high density, narrow 20 MHz channels maximize the number of non-overlapping channels so many APs can coexist. Wide 80/160 MHz channels reduce channel reuse and increase contention."
      },
      {
        label: "Approximate number of APs to meet the per-AP target",
        hint: "350 clients divided by ~40 clients/AP.",
        options: ["2 APs", "4 APs", "8-10 APs", "20+ APs"],
        answer: 2,
        explain: "At roughly 40 clients per AP, ~350 clients need about 8-10 APs. Two APs forces ~175 clients each, far above the dense-data target."
      },
      {
        label: "Primary band to prioritize for capacity",
        hint: "More spectrum and channels.",
        options: ["2.4 GHz", "5 GHz", "900 MHz", "Bluetooth"],
        answer: 1,
        explain: "5 GHz offers many more non-overlapping channels than 2.4 GHz, which is essential for packing multiple APs into a dense room without interference."
      },
      {
        label: "AP placement strategy for the seating area",
        hint: "Spread cells, lower power, use ceiling/under-seat mounts.",
        options: ["One high-power AP at the rear", "Many low-power APs spread across the ceiling", "All APs in the projector room", "Omni APs at full power in the hallway"],
        answer: 1,
        explain: "Many low-power APs spread across the ceiling create small cells that divide clients evenly and limit co-channel overlap, the standard high-density approach."
      }
    ],
    summary: "High density favors many low-power APs on narrow 20 MHz 5 GHz channels (~8-10 APs here) to hold per-AP load near 40 clients and keep airtime healthy."
  },
  {
    id: "PBQ-108",
    format: 4,
    domain: 2,
    title: "Roaming, AP Power & Cell Overlap",
    brief: "Voice-over-WLAN users drop calls when walking between APs. Tune cell overlap, power matching, and a fast-roaming feature so handoffs are seamless.",
    exhibitTitle: "Roaming Path — AP Cell Overlap",
    exhibit: "AP-W1  Tx <span class='warnc'>23 dBm</span>   AP-W2  Tx <span class='warnc'>11 dBm</span>\nCell overlap at boundary: <span class='warnc'>~5%</span>  (gap → client clings to AP-W1)\nClient roam threshold: <span class='dim'>-75 dBm</span>\n\n<span class='dim'>Voice roaming target overlap:</span> <span class='cy'>15-20%</span>   <span class='dim'>Fast roam:</span> <span class='cy'>802.11r</span>",
    fields: [
      {
        label: "Cell overlap target for seamless voice roaming",
        hint: "Too little overlap leaves coverage gaps at handoff.",
        options: ["0-5%", "15-20%", "50%", "90%"],
        answer: 1,
        explain: "Voice/real-time roaming needs roughly 15-20% cell overlap so a client associates with the next AP before losing the current one. ~5% leaves a gap that causes sticky clients and drops."
      },
      {
        label: "Fix for the mismatched AP transmit power",
        hint: "Equalize so neither cell dominates.",
        options: ["Set both APs to matched, moderate power", "Maximize AP-W2 power only", "Disable AP-W2", "Leave the mismatch in place"],
        answer: 0,
        explain: "Matching the APs to similar moderate power balances the cells so the roaming boundary sits midway, preventing one oversized cell that causes sticky-client behavior."
      },
      {
        label: "Standard that enables fast/secure handoff (key caching)",
        hint: "Fast BSS Transition.",
        options: ["802.11k", "802.11r", "802.11v", "802.11w"],
        answer: 1,
        explain: "802.11r (Fast BSS Transition) pre-establishes/caches keys so re-authentication during roam is near-instant, critical for voice. (k assists discovery, v assists steering.)"
      },
      {
        label: "Standard that helps the client discover neighbor APs",
        hint: "Neighbor reports.",
        options: ["802.11r", "802.11k", "802.11e", "802.11h"],
        answer: 1,
        explain: "802.11k provides neighbor AP reports so the client knows good roam candidates in advance, speeding the roam decision. It complements 802.11r for handoff."
      }
    ],
    summary: "Seamless voice roaming needs 15-20% cell overlap with matched AP power, 802.11r for fast key handoff, and 802.11k neighbor reports for roam candidate discovery."
  },
  {
    id: "PBQ-109",
    format: 4,
    domain: 2,
    title: "Wi-Fi 6E (6 GHz) Greenfield Planning",
    brief: "A new building deploys Wi-Fi 6E. Plan 6 GHz channel width, the mandatory security mode, and how legacy clients are handled across bands.",
    exhibitTitle: "6 GHz (Wi-Fi 6E) Design Sheet",
    exhibit: "Band: <span class='cy'>6 GHz</span>  (1200 MHz of new spectrum)\nClients: 6E-capable laptops <span class='ok'>+</span> legacy 802.11ac (5 GHz only)\nSecurity required for 6 GHz: <span class='hl'>WPA3 only</span>  (no open/WPA2 on 6 GHz)\n\n<span class='dim'>6 GHz available widths:</span> <span class='cy'>20 / 40 / 80 / 160 MHz</span>",
    fields: [
      {
        label: "Mandatory security mode on the 6 GHz band",
        hint: "6 GHz disallows legacy/open security.",
        options: ["WEP", "WPA2-PSK", "WPA3", "Open with captive portal"],
        answer: 2,
        explain: "6 GHz operation mandates WPA3 (with SAE/OWE); WPA2, WEP, and open networks are not permitted on 6 GHz, raising the baseline security floor."
      },
      {
        label: "Channel width that best exploits the wide 6 GHz spectrum",
        hint: "6 GHz has room for many wide channels.",
        options: ["20 MHz", "40 MHz", "80 or 160 MHz", "5 MHz"],
        answer: 2,
        explain: "With 1200 MHz of clean spectrum and little legacy interference, 6 GHz can use 80 or 160 MHz channels for high throughput while still retaining multiple non-overlapping channels."
      },
      {
        label: "How legacy 802.11ac clients are served",
        hint: "They cannot use 6 GHz.",
        options: ["On the 5 GHz radio of the same AP", "Forced onto 6 GHz", "Blocked entirely", "Only on 2.4 GHz at WEP"],
        answer: 0,
        explain: "Legacy 5 GHz-only clients associate on the AP's 5 GHz radio; 6 GHz is reserved for 6E-capable devices. Tri-band APs serve all three bands simultaneously."
      },
      {
        label: "Discovery aid so 6E clients find 6 GHz APs quickly",
        hint: "A 6 GHz-specific beaconing/discovery mechanism.",
        options: ["DFS scanning", "Preferred Scanning Channels / out-of-band discovery (RNR)", "WEP probe", "SSID hiding"],
        answer: 1,
        explain: "6 GHz uses out-of-band discovery (Reduced Neighbor Report from 2.4/5 GHz) and Preferred Scanning Channels so clients locate 6 GHz BSSs without scanning the whole band."
      }
    ],
    summary: "Wi-Fi 6E planning: WPA3 is mandatory on 6 GHz, use wide 80/160 MHz channels, serve legacy clients on 5 GHz, and rely on RNR/out-of-band discovery for fast 6 GHz association."
  },
  {
    id: "PBQ-110",
    format: 4,
    domain: 2,
    title: "Guest SSID Isolation & Segmentation",
    brief: "A retail guest Wi-Fi must keep visitors off the corporate LAN. Configure SSID-to-VLAN mapping, client isolation, and the right access control for an open guest network.",
    exhibitTitle: "SSID / VLAN Mapping Plan",
    exhibit: "SSID <span class='cy'>CORP</span>     VLAN <span class='ok'>10</span>  WPA3-Enterprise  → internal LAN\nSSID <span class='cy'>GUEST</span>    VLAN <span class='warnc'>?</span>   <span class='warnc'>captive portal</span>     → ???\nSSID <span class='cy'>IOT</span>      VLAN <span class='ok'>30</span>  WPA3-PSK         → restricted\n\n<span class='warnc'>Risk:</span> GUEST currently bridged to <span class='warnc'>VLAN 10</span> (same as CORP)",
    fields: [
      {
        label: "VLAN assignment for the GUEST SSID",
        hint: "Must be separate from corporate VLAN 10.",
        options: ["VLAN 10 (same as CORP)", "A dedicated guest VLAN (e.g., 40) routed only to the Internet", "No VLAN (native)", "VLAN 30 (IoT)"],
        answer: 1,
        explain: "Guests belong on a dedicated VLAN (e.g., 40) whose routing leads only to the Internet, isolating them from CORP (VLAN 10) and IoT (VLAN 30) internal resources."
      },
      {
        label: "Feature that stops guests from reaching each other",
        hint: "Layer 2 peer-to-peer blocking on the SSID.",
        options: ["Band steering", "Client/peer isolation", "Fast roaming", "Airtime fairness"],
        answer: 1,
        explain: "Client (peer) isolation blocks station-to-station traffic on the guest SSID, preventing a malicious guest from attacking other guests on the same VLAN."
      },
      {
        label: "Access control appropriate for an open guest SSID",
        hint: "No PSK distribution; track acceptance.",
        options: ["802.1X with per-user certs", "Captive portal with terms acceptance", "WEP shared key", "MAC-only allow list"],
        answer: 1,
        explain: "A captive portal presents terms/acceptance (and optional auth) for open guest access without distributing keys. 802.1X/certs is overkill for transient guests; WEP is insecure."
      },
      {
        label: "Where to enforce the guest-to-Internet-only rule",
        hint: "Inter-VLAN routing boundary.",
        options: ["On each guest laptop", "ACL/firewall policy at the gateway between VLANs", "In the captive portal HTML", "At the AP antenna"],
        answer: 1,
        explain: "An ACL/firewall rule at the inter-VLAN gateway permits the guest VLAN to reach only the Internet and denies routes to internal subnets, enforcing isolation at L3."
      }
    ],
    summary: "Isolate guests on a dedicated Internet-only VLAN, enable client isolation on the SSID, use a captive portal for open access, and enforce segmentation with a gateway ACL."
  },
  {
    id: "PBQ-111",
    format: 4,
    domain: 2,
    title: "Mesh vs Controller-Based Architecture",
    brief: "A warehouse annex has no Ethernet drops for new APs. Decide between wireless mesh and wired controller-based APs and configure backhaul and management.",
    exhibitTitle: "Annex AP Deployment Constraints",
    exhibit: "Main building: <span class='ok'>wired APs + WLC</span> (controller-based)\nAnnex: <span class='warnc'>no Ethernet drops</span>, structural concrete, 4 new APs needed\nBackhaul options: <span class='cy'>wireless mesh</span> vs <span class='warnc'>new cable runs</span>\n\n<span class='dim'>Mesh root AP must be:</span> <span class='cy'>wired uplink to LAN</span>",
    fields: [
      {
        label: "Best architecture for the cable-less annex",
        hint: "No Ethernet means wireless backhaul.",
        options: ["Wireless mesh with a wired root AP", "All-wired controller APs only", "Standalone home routers", "Powerline-only with no Wi-Fi"],
        answer: 0,
        explain: "Wireless mesh lets non-root APs relay traffic over a dedicated RF backhaul to a wired root AP, avoiding costly cable runs in the annex while still extending the managed WLAN."
      },
      {
        label: "Requirement for the mesh root (portal) AP",
        hint: "The gateway back to the wired LAN.",
        options: ["It must be battery powered", "It must have a wired uplink to the LAN", "It must use 2.4 GHz only", "It must be hidden SSID"],
        answer: 1,
        explain: "The mesh root/portal AP needs a wired uplink; mesh point APs connect to it over the air. Without a wired root, the mesh has no path to the core network."
      },
      {
        label: "Band typically reserved for mesh backhaul",
        hint: "Keep client traffic off the relay link.",
        options: ["2.4 GHz", "A dedicated 5/6 GHz radio for backhaul", "900 MHz", "Bluetooth"],
        answer: 1,
        explain: "A dedicated 5 GHz (or 6 GHz) radio is reserved for mesh backhaul so relay traffic does not compete with client airtime, preserving throughput across hops."
      },
      {
        label: "How the new mesh APs are managed",
        hint: "Reuse existing infrastructure.",
        options: ["Each configured individually via console", "Adopted by the existing WLC for central management", "Managed only by end users", "Left at factory defaults"],
        answer: 1,
        explain: "The mesh APs are adopted into the existing wireless LAN controller, giving central config, RF management, and security policy consistent with the wired APs."
      }
    ],
    summary: "With no cabling, deploy wireless mesh: a wired root AP, a dedicated 5/6 GHz backhaul radio, and adopt the mesh APs into the existing WLC for unified management."
  },
  {
    id: "PBQ-112",
    format: 4,
    domain: 2,
    title: "802.1X / RADIUS Enterprise Auth",
    brief: "Corporate Wi-Fi must use per-user authentication against Active Directory. Configure WPA3-Enterprise components: authenticator, authentication server, and EAP method.",
    exhibitTitle: "WPA3-Enterprise Auth Chain",
    exhibit: "Supplicant (laptop) → <span class='cy'>Authenticator</span> → <span class='cy'>Auth Server</span> → AD\nSSID CORP: <span class='hl'>WPA3-Enterprise</span>  802.1X\nServer: <span class='warnc'>RADIUS at 10.0.0.20</span>  shared secret set\nEAP: <span class='warnc'>?</span>   (cert-based vs credential-based)",
    fields: [
      {
        label: "Which device acts as the 802.1X authenticator",
        hint: "It sits between supplicant and the auth server.",
        options: ["The laptop", "The AP / WLAN controller", "The RADIUS server", "Active Directory"],
        answer: 1,
        explain: "The AP (or WLC) is the authenticator: it relays EAP between the supplicant (laptop) and the authentication (RADIUS) server and opens the port only after success."
      },
      {
        label: "Protocol between the authenticator and the auth server",
        hint: "AAA protocol carrying EAP.",
        options: ["RADIUS", "HTTP", "SNMP", "SMB"],
        answer: 0,
        explain: "RADIUS carries the EAP exchange between the authenticator and the authentication server and returns Accept/Reject plus keying material for the session."
      },
      {
        label: "Strongest common EAP method (mutual cert auth)",
        hint: "Both client and server present certificates.",
        options: ["EAP-MD5", "EAP-TLS", "PAP", "LEAP"],
        answer: 1,
        explain: "EAP-TLS uses mutual certificate authentication (client and server certs), the strongest widely deployed method. EAP-MD5/LEAP are weak; PAP is not an EAP method."
      },
      {
        label: "What must match between the AP and the RADIUS server",
        hint: "Trust value plus reachability.",
        options: ["The SSID name only", "The shared secret (and the server IP/port)", "The channel number", "The Tx power"],
        answer: 1,
        explain: "The AP and RADIUS server must share the same RADIUS shared secret, and the AP must point to the correct server IP/UDP ports (1812/1813), or authentication fails."
      }
    ],
    summary: "WPA3-Enterprise uses the AP/WLC as authenticator, RADIUS to the auth server (matching shared secret and IP/port), and EAP-TLS for strong mutual-certificate user auth."
  },
  {
    id: "PBQ-113",
    format: 4,
    domain: 2,
    title: "DFS Channels & Radar Avoidance (5 GHz)",
    brief: "A 5 GHz deployment near an airport sees periodic AP channel changes and brief outages. Configure DFS behavior and channel selection to keep radar-band channels usable.",
    exhibitTitle: "5 GHz Channel / DFS Status",
    exhibit: "Channel 36  (UNII-1)  <span class='ok'>non-DFS</span>\nChannel 52  (UNII-2A) <span class='warnc'>DFS</span>  → radar event logged, AP moved\nChannel 100 (UNII-2C) <span class='warnc'>DFS</span>  → CAC scan required\nChannel 149 (UNII-3)  <span class='ok'>non-DFS</span>\n\n<span class='dim'>Near airport radar:</span> frequent <span class='warnc'>DFS hits</span> on UNII-2",
    fields: [
      {
        label: "What DFS requires an AP to do on radar detection",
        hint: "Vacate the channel.",
        options: ["Increase power", "Immediately vacate the channel and move", "Switch to WEP", "Broadcast a louder beacon"],
        answer: 1,
        explain: "Dynamic Frequency Selection requires the AP to detect radar and vacate the channel (moving to another), protecting primary radar users. This causes the brief outages observed."
      },
      {
        label: "Best channel choice to avoid frequent radar hits here",
        hint: "Use non-DFS UNII-1/UNII-3 channels.",
        options: ["Stay on channel 52", "Prefer non-DFS channels (36 or 149)", "Use channel 100 only", "Disable 5 GHz"],
        answer: 1,
        explain: "Near strong radar, pinning APs to non-DFS channels (UNII-1 ch 36 or UNII-3 ch 149) avoids the repeated DFS evictions and outages on UNII-2 DFS channels."
      },
      {
        label: "Why DFS channels are still valuable in general",
        hint: "Spectrum availability.",
        options: ["They add more 5 GHz channels/capacity", "They are faster than non-DFS", "They need no security", "They reach farther"],
        answer: 0,
        explain: "DFS channels expand the pool of available 5 GHz channels, increasing capacity and channel reuse. The tradeoff is possible radar-driven channel changes."
      }
    ],
    summary: "DFS makes APs vacate channels on radar detection; near airport radar, prefer non-DFS UNII-1/3 channels to avoid outages, but keep DFS in the pool elsewhere for extra capacity."
  },
  {
    id: "PBQ-114",
    format: 4,
    domain: 2,
    title: "Wireless Survey & AP Placement",
    brief: "A predictive survey shows coverage holes and an overpowered AP. Adjust AP placement, power, and antenna choice to fix the heat map.",
    exhibitTitle: "Predictive Survey Heat Map (RSSI)",
    exhibit: "Open office:  <span class='ok'>-55 dBm</span> good\nCorner conf rm: <span class='warnc'>-82 dBm</span> coverage hole\nLobby:        <span class='warnc'>-38 dBm</span> overpowered (sticky clients)\nWarehouse:    <span class='warnc'>weak, tall racks block signal</span>\n\n<span class='dim'>Design target indoors:</span> <span class='cy'>-65 to -70 dBm</span> at cell edge",
    fields: [
      {
        label: "Fix for the -82 dBm corner conference room",
        hint: "No signal there; add coverage.",
        options: ["Lower power on nearby APs", "Add an AP (or directional antenna) for that area", "Disable the SSID", "Switch to 2.4 GHz only"],
        answer: 1,
        explain: "A -82 dBm hole needs more RF coverage there: add an AP or aim a directional antenna into the corner room to bring the cell edge into the -65 to -70 dBm target."
      },
      {
        label: "Fix for the -38 dBm overpowered lobby",
        hint: "Too strong causes sticky clients.",
        options: ["Raise Tx power further", "Reduce the AP Tx power", "Add two more APs", "Use a high-gain antenna"],
        answer: 1,
        explain: "An overpowered -38 dBm cell causes clients to cling and reduces reuse; lowering Tx power shrinks the cell toward the target edge and improves roaming."
      },
      {
        label: "Antenna type best for the long warehouse aisle",
        hint: "Focus energy down the aisle past racks.",
        options: ["Omnidirectional", "Directional (Yagi/patch) aimed down the aisle", "Rubber duck at low gain", "No antenna"],
        answer: 1,
        explain: "A directional (patch/Yagi) antenna focuses energy down the obstructed aisle, overcoming tall racks better than an omni that radiates wasted energy into shelving."
      },
      {
        label: "Survey type that validates the design after install",
        hint: "Walk the site with real measurements.",
        options: ["Predictive-only", "Post-deployment (passive/active) site survey", "Paper floor plan review", "Vendor datasheet"],
        answer: 1,
        explain: "A post-deployment site survey (passive/active validation) measures real RSSI/SNR after install to confirm coverage and find remaining holes the predictive model missed."
      }
    ],
    summary: "Cure coverage holes by adding APs/directional antennas, trim overpowered cells with lower Tx, aim directional antennas down obstructed aisles, then validate with a post-deployment survey."
  },
  {
    id: "PBQ-115",
    format: 4,
    domain: 2,
    title: "Stadium Bowl High-Density Capacity",
    brief: "A stadium bowl must serve tens of thousands of phones. Plan antenna type, AP sectorization, and band-steering to maximize capacity in dense seating.",
    exhibitTitle: "Stadium Bowl RF Plan",
    exhibit: "Seating bowl: <span class='hl'>~40,000 seats</span>, dense devices\nMount: under-seat / handrail / overhead <span class='cy'>narrow-beam</span>\nIssue: <span class='warnc'>omni APs overlap heavily</span>, high co-channel\nGoal: small, aimed cells covering <span class='cy'>seating sections</span>",
    fields: [
      {
        label: "Antenna approach for tight stadium cells",
        hint: "Aim energy at a section, not everywhere.",
        options: ["High-gain omnidirectional", "Narrow-beam directional/sector antennas per section", "No external antennas", "2.4 GHz only omni"],
        answer: 1,
        explain: "Narrow-beam directional/sector antennas confine each cell to a seating section, minimizing overlap and co-channel interference so thousands of devices can be served densely."
      },
      {
        label: "Channel width to maximize reuse in the bowl",
        hint: "Narrow = more channels = more cells.",
        options: ["160 MHz", "80 MHz", "20 MHz", "Widest possible"],
        answer: 2,
        explain: "20 MHz channels maximize the count of non-overlapping channels, letting many sector cells coexist. Wide channels would collapse reuse in an ultra-dense environment."
      },
      {
        label: "Feature to push capable clients off congested 2.4 GHz",
        hint: "Move dual-band clients to 5/6 GHz.",
        options: ["Band steering", "WEP", "SSID hiding", "DFS"],
        answer: 0,
        explain: "Band steering nudges dual-band capable clients onto 5/6 GHz, relieving the congested 2.4 GHz band and balancing load across radios in dense venues."
      },
      {
        label: "Why per-AP client limits matter most here",
        hint: "Airtime is shared.",
        options: ["To save electricity", "Because airtime is shared; capping clients keeps airtime usable", "To hide the SSID", "To extend range"],
        answer: 1,
        explain: "Wi-Fi airtime is shared per cell; capping clients per AP/cell keeps airtime contention manageable so each device gets usable throughput in a packed stadium."
      }
    ],
    summary: "Stadium capacity comes from narrow-beam sector antennas, 20 MHz channels for maximum reuse, band steering to 5/6 GHz, and per-cell client caps to protect shared airtime."
  },
  {
    id: "PBQ-116",
    format: 4,
    domain: 2,
    title: "BYOD Onboarding & PSK Strategy",
    brief: "A campus wants secure BYOD without per-user certificates yet must avoid one shared password for everyone. Choose the security mode and onboarding method.",
    exhibitTitle: "BYOD SSID Security Options",
    exhibit: "SSID <span class='cy'>BYOD</span>: must avoid <span class='warnc'>one shared PSK for all</span>\nNo PKI for student certs (<span class='warnc'>no EAP-TLS</span>)\nNeed: <span class='hl'>per-device key</span>, easy onboarding\n\n<span class='dim'>Options:</span> <span class='cy'>WPA3-Personal (SAE)</span> | <span class='cy'>iPSK/MPSK</span> | <span class='cy'>WPA3-Enterprise</span>",
    fields: [
      {
        label: "Best option for per-device keys without certificates",
        hint: "Identity/Multi PSK assigns unique keys per device.",
        options: ["Single shared WPA2-PSK", "iPSK / MPSK (per-device pre-shared keys)", "Open network", "WEP"],
        answer: 1,
        explain: "Identity/Multi-PSK (iPSK/MPSK) issues a unique pre-shared key per device on one SSID, enabling per-device revocation and segmentation without deploying client certificates."
      },
      {
        label: "Upgrade to PSK that resists offline dictionary attacks",
        hint: "WPA3 personal handshake.",
        options: ["WEP", "WPA3-Personal (SAE)", "WPA-TKIP", "Open"],
        answer: 1,
        explain: "WPA3-Personal uses SAE (Simultaneous Authentication of Equals), which resists offline dictionary attacks on the passphrase unlike WPA2-PSK's 4-way handshake capture."
      },
      {
        label: "Benefit of per-device keys for offboarding",
        hint: "Revoke one device without resetting all.",
        options: ["Faster roaming", "Revoke a single device's key without changing everyone's", "Higher Tx power", "More channels"],
        answer: 1,
        explain: "Per-device keys let you revoke one lost/stolen device by deleting its key, with no need to rotate a shared PSK across the entire campus."
      }
    ],
    summary: "For certificate-free BYOD, use iPSK/MPSK for per-device keys (with WPA3-Personal SAE to harden the handshake), enabling individual revocation without a campus-wide PSK reset."
  },
  {
    id: "PBQ-117",
    format: 4,
    domain: 2,
    title: "Detecting Rogue & Evil-Twin APs",
    brief: "Security monitoring flags an unknown SSID matching corporate. Configure WIPS detection and the controls that defeat evil-twin and rogue APs.",
    exhibitTitle: "WIPS Alert — Suspicious BSSID",
    exhibit: "Corp SSID: <span class='cy'>CORP</span>  BSSID set: <span class='ok'>known/managed</span>\nDetected: SSID <span class='warnc'>CORP</span>  BSSID <span class='warnc'>UNKNOWN</span>  ch 6\nSignal: strong near lobby   Encryption: <span class='warnc'>Open</span>\n\n<span class='dim'>Likely:</span> <span class='warnc'>evil-twin</span> luring clients",
    fields: [
      {
        label: "System that detects/classifies rogue APs",
        hint: "Wireless intrusion prevention.",
        options: ["WIPS/WIDS", "DHCP snooping", "STP", "NAT"],
        answer: 0,
        explain: "A wireless IDS/IPS (WIPS/WIDS) monitors the air for unknown BSSIDs/SSIDs, classifies rogues vs evil twins, and can alert or contain them."
      },
      {
        label: "Control that prevents clients from trusting an evil twin",
        hint: "Mutual authentication via certs.",
        options: ["Open guest portal", "WPA3-Enterprise with server-certificate validation (EAP-TLS)", "Hiding the SSID", "MAC filtering only"],
        answer: 1,
        explain: "With WPA3-Enterprise and proper server-certificate validation, clients reject an evil twin that lacks the trusted RADIUS server certificate, defeating credential theft."
      },
      {
        label: "Why hiding the SSID does NOT stop evil twins",
        hint: "Hidden SSIDs are still discoverable.",
        options: ["It increases range", "Clients still probe the name, which attackers can capture and clone", "It encrypts traffic", "It blocks RADIUS"],
        answer: 1,
        explain: "Hidden SSIDs are trivially discovered (clients probe for them), so an attacker can learn and clone the name; SSID hiding is not a security control against evil twins."
      },
      {
        label: "Immediate response when a rogue is on the wired LAN",
        hint: "Find and disable its switch port.",
        options: ["Increase AP power", "Trace the MAC and shut the switch port it plugs into", "Change the corporate channel", "Disable WIPS"],
        answer: 1,
        explain: "A wired rogue is contained by tracing its MAC to the access switch port and disabling that port, cutting the rogue's path to the internal network."
      }
    ],
    summary: "Use WIPS/WIDS to detect rogue/evil-twin APs, defeat evil twins with WPA3-Enterprise server-cert validation (SSID hiding does not), and contain wired rogues by shutting their switch port."
  },
  {
    id: "PBQ-118",
    format: 4,
    domain: 2,
    title: "PoE Budget for AP Deployment",
    brief: "New Wi-Fi 6 APs draw more power than the old ones. Verify the PoE standard and switch power budget so all APs power up at full capability.",
    exhibitTitle: "PoE Power Planning",
    exhibit: "New AP draw: <span class='hl'>~25 W</span> (full radios)\nSwitch ports: <span class='warnc'>802.3af</span> (15.4 W) → AP runs <span class='warnc'>degraded</span>\nPoE budget: switch total <span class='warnc'>370 W</span>, <span class='hl'>24 APs</span> planned\n\n<span class='dim'>PoE: af=15.4W  at=30W  bt=60-100W</span>",
    fields: [
      {
        label: "PoE standard needed for a ~25 W AP",
        hint: "af gives 15.4 W; need more.",
        options: ["802.3af (PoE)", "802.3at (PoE+)", "Passive 5 V USB", "No PoE"],
        answer: 1,
        explain: "802.3at (PoE+) supplies up to ~30 W at the port, enough for a ~25 W AP; 802.3af's 15.4 W forces the AP into a degraded/low-power mode."
      },
      {
        label: "Effect of underpowering the AP with 802.3af",
        hint: "AP disables features to fit the budget.",
        options: ["Higher throughput", "Reduced radios/Tx power or disabled ports", "No effect", "Longer range"],
        answer: 1,
        explain: "Under-powered APs shed capability: they may disable a radio, reduce Tx power, or shut a secondary Ethernet port to stay within the lower PoE budget."
      },
      {
        label: "Why the total switch PoE budget matters",
        hint: "24 APs x ~25 W vs 370 W total.",
        options: ["It limits how many APs can draw full power simultaneously", "It sets the SSID count", "It changes the channel plan", "It has no effect on APs"],
        answer: 0,
        explain: "24 APs at ~25 W is ~600 W, exceeding a 370 W budget; the switch can only fully power a subset, so budget must be sized (or APs spread across switches)."
      }
    ],
    summary: "Wi-Fi 6 APs at ~25 W need 802.3at (PoE+); 802.3af degrades them, and the switch's total PoE budget must cover all APs at full draw or be split across switches."
  },
  {
    id: "PBQ-119",
    format: 4,
    domain: 2,
    title: "Captive Portal & RADIUS Accounting for Guests",
    brief: "A hotel needs guest Wi-Fi with login, time limits, and usage logging. Configure the portal auth flow and the AAA function that records sessions.",
    exhibitTitle: "Hotel Guest Access Flow",
    exhibit: "Guest associates → <span class='cy'>captive portal</span> redirect\nLogin: room # + last name  → <span class='cy'>RADIUS auth</span>\nNeed: <span class='hl'>session time limit</span> + <span class='hl'>usage logging</span>\n\n<span class='dim'>AAA:</span> Authentication / Authorization / <span class='cy'>Accounting</span>",
    fields: [
      {
        label: "What triggers the captive portal redirect",
        hint: "Pre-auth HTTP is intercepted.",
        options: ["DNS only", "Unauthenticated HTTP/HTTPS is redirected to the portal", "ICMP echo", "ARP"],
        answer: 1,
        explain: "Before authentication, the controller intercepts the guest's web request and redirects it to the captive portal login page; other traffic is blocked until login."
      },
      {
        label: "AAA function that logs session start/stop and data used",
        hint: "The third A.",
        options: ["Authentication", "Authorization", "Accounting", "Encryption"],
        answer: 2,
        explain: "RADIUS Accounting records session start/stop, duration, and data volume, providing the usage logging and billing/time-limit data the hotel needs."
      },
      {
        label: "AAA function that enforces the guest time limit/role",
        hint: "What the user is allowed to do.",
        options: ["Authentication", "Authorization", "Accounting", "Association"],
        answer: 1,
        explain: "Authorization defines what an authenticated guest may do, including applying a role with a session time limit and bandwidth policy."
      },
      {
        label: "Risk if the portal uses plain HTTP for login",
        hint: "Credentials in the clear.",
        options: ["Faster login", "Credentials can be sniffed; use HTTPS for the portal", "Better range", "No risk"],
        answer: 1,
        explain: "A plain-HTTP portal exposes login data to sniffing on the open WLAN; the portal page must use HTTPS so credentials are encrypted in transit."
      }
    ],
    summary: "Guest access flow: intercept unauthenticated HTTP/HTTPS to an HTTPS captive portal, RADIUS authenticates, authorization sets the time-limited role, and accounting logs each session."
  },
  {
    id: "PBQ-120",
    format: 4,
    domain: 2,
    title: "Band Steering, MU-MIMO & OFDMA Tuning",
    brief: "A dense Wi-Fi 6 office underuses modern features. Enable the right airtime-efficiency and load-balancing capabilities for many small-packet clients.",
    exhibitTitle: "Wi-Fi 6 Feature Status",
    exhibit: "Clients: many phones/laptops, <span class='warnc'>small frequent packets</span>\nBand steering: <span class='warnc'>OFF</span>  → 2.4 GHz crowded\nOFDMA: <span class='warnc'>OFF</span>     MU-MIMO: <span class='ok'>ON</span>\n\n<span class='dim'>OFDMA = sub-carrier sharing</span> | <span class='dim'>MU-MIMO = spatial streams</span>",
    fields: [
      {
        label: "Feature that subdivides a channel for many small-packet clients",
        hint: "Resource units within one transmission.",
        options: ["MU-MIMO", "OFDMA", "WEP", "DFS"],
        answer: 1,
        explain: "OFDMA splits a channel into resource units so multiple small-packet clients are served in one transmission, drastically improving airtime efficiency in dense Wi-Fi 6 networks."
      },
      {
        label: "What MU-MIMO provides that complements OFDMA",
        hint: "Multiple spatial streams to several clients.",
        options: ["Serves multiple clients via separate spatial streams", "Hides the SSID", "Encrypts faster", "Adds channels"],
        answer: 0,
        explain: "MU-MIMO uses multiple antennas/spatial streams to talk to several clients simultaneously; combined with OFDMA it boosts both throughput and efficiency under load."
      },
      {
        label: "Enabling band steering will primarily",
        hint: "Move capable clients to 5/6 GHz.",
        options: ["Crowd 2.4 GHz further", "Move dual-band clients to 5/6 GHz, easing 2.4 GHz", "Disable OFDMA", "Lower security"],
        answer: 1,
        explain: "Band steering pushes dual-band-capable clients onto the less-congested 5/6 GHz bands, relieving the crowded 2.4 GHz band and balancing load."
      },
      {
        label: "Best first change for the small-packet workload",
        hint: "The disabled efficiency feature matters most.",
        options: ["Turn OFDMA on", "Disable MU-MIMO", "Switch to WPA2", "Widen to 160 MHz"],
        answer: 0,
        explain: "Enabling OFDMA is the highest-impact change for many small, frequent packets, since it packs multiple clients into one transmission and cuts contention overhead."
      }
    ],
    summary: "For dense Wi-Fi 6 with small packets, enable OFDMA (sub-carrier sharing) and band steering, keep MU-MIMO on for spatial multiplexing, and balance clients across bands."
  }
);
NETPLUS.pbqs.push(
  {
    id: "PBQ-121",
    format: 5,
    domain: 4,
    title: "Internet Edge & DMZ Web Tier",
    brief: "Acme hosts a public e-commerce site. Inbound traffic from the <span class='hl'>untrusted Internet</span> must be inspected at the perimeter, then HTTP/S requests must be screened for application-layer attacks before reaching the web servers. Place the correct control at each position.",
    exhibitTitle: "topology",
    exhibit: "<span class='hl'>INTERNET</span>\n     |\n  [ <span class='cy'>A</span> ]   <span class='dim'>perimeter / segment boundary</span>\n     |\n  ===== <span class='warnc'>DMZ</span> =====\n     |\n  [ <span class='cy'>B</span> ]   <span class='dim'>screens HTTP/S for app-layer attacks</span>\n     |\n  [ <span class='cy'>C</span> ]   <span class='dim'>spreads load across the web pool</span>\n     |\n  <span class='ok'>WEB-01  WEB-02  WEB-03</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "what sits between the Internet and the DMZ",
        options: ["Next-gen firewall (NGFW)", "Load balancer", "Jump host / bastion", "Honeypot"],
        answer: 0,
        explain: "The NGFW sits at the perimeter / segment boundary, enforcing zone policy and deep inspection between the untrusted Internet and the DMZ."
      },
      {
        label: "Device for position [B]",
        hint: "screens HTTP/S for application-layer attacks",
        options: ["Forward / web proxy", "Web application firewall (WAF)", "VPN concentrator", "Network TAP"],
        answer: 1,
        explain: "A WAF belongs directly in front of the web application, filtering OWASP-style attacks (SQLi, XSS) in the HTTP/S stream before requests reach the servers."
      },
      {
        label: "Device for position [C]",
        hint: "distributes connections to the server pool",
        options: ["Load balancer", "Content filter", "IDS sensor", "NAC"],
        answer: 0,
        explain: "A load balancer sits before the server pool, distributing inbound sessions across WEB-01/02/03 for capacity and availability."
      }
    ],
    summary: "Edge to web tier: NGFW at the perimeter, WAF in front of the application, load balancer before the pool."
  },
  {
    id: "PBQ-122",
    format: 5,
    domain: 4,
    title: "Secure Remote Access Path",
    brief: "Remote employees connect over the <span class='hl'>Internet</span> and must terminate an encrypted tunnel before any access to internal resources. Posture must be checked before a device joins the LAN. Place each control.",
    exhibitTitle: "topology",
    exhibit: "<span class='hl'>REMOTE USERS</span>\n     |\n  [ <span class='cy'>A</span> ]   <span class='dim'>terminates encrypted tunnels</span>\n     |\n  [ <span class='cy'>B</span> ]   <span class='dim'>perimeter policy boundary</span>\n     |\n  [ <span class='cy'>C</span> ]   <span class='dim'>checks posture before LAN admission</span>\n     |\n  <span class='ok'>INTERNAL LAN</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "where the VPN tunnel ends",
        options: ["VPN concentrator", "Reverse proxy", "Load balancer", "Honeypot"],
        answer: 0,
        explain: "A VPN concentrator terminates the remote-access tunnels, decrypting client traffic before it is handed to the next control."
      },
      {
        label: "Device for position [B]",
        hint: "enforces zone policy at the edge",
        options: ["Content filter", "Next-gen firewall (NGFW)", "Network TAP", "Jump host / bastion"],
        answer: 1,
        explain: "The NGFW enforces the perimeter policy boundary, inspecting the now-decrypted remote traffic before it enters the trusted side."
      },
      {
        label: "Device for position [C]",
        hint: "validates device health on admission",
        options: ["Forward proxy", "WAF", "NAC", "IDS sensor"],
        answer: 2,
        explain: "Network Access Control (NAC) checks endpoint posture (patch level, AV, certificate) before admitting the device onto the internal LAN."
      }
    ],
    summary: "Remote access: VPN concentrator terminates tunnels, NGFW enforces policy, NAC gates LAN admission."
  },
  {
    id: "PBQ-123",
    format: 5,
    domain: 4,
    title: "Management Network Bastion",
    brief: "The <span class='warnc'>management network</span> (switch/router consoles, hypervisor mgmt) must be reachable only through a single hardened, audited entry point. Position the controls that isolate and protect it.",
    exhibitTitle: "topology",
    exhibit: "<span class='ok'>ADMIN WORKSTATION</span>\n     |\n  [ <span class='cy'>A</span> ]   <span class='dim'>segments mgmt from user VLANs</span>\n     |\n  [ <span class='cy'>B</span> ]   <span class='dim'>the ONLY path into mgmt</span>\n     |\n  ===== <span class='warnc'>MANAGEMENT VLAN</span> =====\n  <span class='dim'>switch consoles  iDRAC  vCenter</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "boundary between user and management zones",
        options: ["Load balancer", "Next-gen firewall (NGFW)", "Reverse proxy", "Honeypot"],
        answer: 1,
        explain: "An NGFW (or segmentation firewall) enforces the boundary between user VLANs and the management VLAN, allowing only approved mgmt flows."
      },
      {
        label: "Device for position [B]",
        hint: "single audited entry into management",
        options: ["Jump host / bastion", "VPN concentrator", "Network TAP", "Content filter"],
        answer: 0,
        explain: "A jump host / bastion is the sole, hardened, logged path into the management network; admins land here before touching any console."
      }
    ],
    summary: "Management isolation: NGFW segments the zone, a jump host is the only audited path in."
  },
  {
    id: "PBQ-124",
    format: 5,
    domain: 4,
    title: "Distribution Layer Inline Inspection",
    brief: "At the <span class='warnc'>distribution/core</span>, traffic between user blocks and the server farm must be actively blocked when an exploit signature matches, not merely alerted on. Place the controls.",
    exhibitTitle: "topology",
    exhibit: "<span class='ok'>ACCESS / USER VLANs</span>\n     |\n  [ <span class='cy'>A</span> ]   <span class='dim'>core routing + segment policy</span>\n     |\n  [ <span class='cy'>B</span> ]   <span class='dim'>inline, drops matching exploits</span>\n     |\n  ===== <span class='warnc'>SERVER FARM</span> =====",
    fields: [
      {
        label: "Device for position [A]",
        hint: "policy boundary at the core",
        options: ["Forward proxy", "Next-gen firewall (NGFW)", "WAF", "Honeypot"],
        answer: 1,
        explain: "The NGFW at the distribution/core enforces segment policy between user blocks and the server farm."
      },
      {
        label: "Device for position [B]",
        hint: "actively blocks, not just alerts",
        options: ["IDS sensor (out-of-band)", "Network TAP", "IPS sensor (inline)", "Load balancer"],
        answer: 2,
        explain: "An IPS deployed inline can drop traffic that matches an exploit signature in real time; an IDS or TAP would only observe and alert."
      }
    ],
    summary: "Core inspection: NGFW for segment policy, an inline IPS to block matching exploits."
  },
  {
    id: "PBQ-125",
    format: 5,
    domain: 4,
    title: "Outbound Web Filtering",
    brief: "Internal users browse the <span class='hl'>Internet</span>. Outbound requests must be funneled through a control that enforces category/URL policy and caches content before reaching the perimeter firewall. Place each device.",
    exhibitTitle: "topology",
    exhibit: "<span class='ok'>INTERNAL CLIENTS</span>\n     |\n  [ <span class='cy'>A</span> ]   <span class='dim'>enforces URL/category policy outbound</span>\n     |\n  [ <span class='cy'>B</span> ]   <span class='dim'>perimeter policy boundary</span>\n     |\n  <span class='hl'>INTERNET</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "clients send outbound web traffic through it",
        options: ["Reverse proxy", "Forward / web proxy", "Load balancer", "VPN concentrator"],
        answer: 1,
        explain: "A forward (web) proxy sits between internal clients and the Internet, enforcing URL/category filtering and caching outbound requests."
      },
      {
        label: "Device for position [B]",
        hint: "edge enforcement to the Internet",
        options: ["Next-gen firewall (NGFW)", "WAF", "Jump host / bastion", "NAC"],
        answer: 0,
        explain: "The NGFW is the perimeter policy boundary between the internal network and the untrusted Internet."
      }
    ],
    summary: "Outbound path: forward proxy enforces web policy, NGFW guards the perimeter."
  },
  {
    id: "PBQ-126",
    format: 5,
    domain: 4,
    title: "Reverse Proxy Web Publishing",
    brief: "A public portal must hide backend server identities and offload TLS at the <span class='warnc'>DMZ</span> edge while still screening for web attacks. Place the controls in the correct order.",
    exhibitTitle: "topology",
    exhibit: "<span class='hl'>INTERNET</span>\n     |\n  [ <span class='cy'>A</span> ]   <span class='dim'>perimeter boundary</span>\n     |\n  ===== <span class='warnc'>DMZ</span> =====\n  [ <span class='cy'>B</span> ]   <span class='dim'>app-layer attack screening</span>\n     |\n  [ <span class='cy'>C</span> ]   <span class='dim'>TLS offload, hides backend identity</span>\n     |\n  <span class='ok'>APP SERVERS</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "first control off the Internet",
        options: ["Next-gen firewall (NGFW)", "Forward proxy", "Load balancer", "Honeypot"],
        answer: 0,
        explain: "The NGFW is the perimeter boundary that inbound Internet traffic crosses first."
      },
      {
        label: "Device for position [B]",
        hint: "OWASP-class filtering",
        options: ["Network TAP", "Web application firewall (WAF)", "NAC", "VPN concentrator"],
        answer: 1,
        explain: "A WAF screens HTTP/S for application-layer attacks before requests reach the backend."
      },
      {
        label: "Device for position [C]",
        hint: "terminates TLS and masks servers",
        options: ["IDS sensor", "Content filter", "Reverse proxy", "Jump host / bastion"],
        answer: 2,
        explain: "A reverse proxy publishes the backend on behalf of the servers, offloading TLS and hiding their real identities/addresses."
      }
    ],
    summary: "Web publishing: NGFW at edge, WAF for app attacks, reverse proxy for TLS offload and concealment."
  },
  {
    id: "PBQ-127",
    format: 5,
    domain: 4,
    title: "Passive Monitoring & Decoy",
    brief: "Security ops needs a full copy of traffic for the IDS without inserting a failure point, plus a <span class='warnc'>decoy</span> to lure and study attackers in the DMZ. Place each control.",
    exhibitTitle: "topology",
    exhibit: "<span class='hl'>INTERNET</span>\n     |\n  <span class='ok'>NGFW</span>\n     |\n  [ <span class='cy'>A</span> ]   <span class='dim'>copies traffic to the IDS, no inline risk</span>\n     |  \\\n     |   [ <span class='cy'>B</span> ]  <span class='dim'>passive analyzer</span>\n     |\n  ===== <span class='warnc'>DMZ</span> =====\n  [ <span class='cy'>C</span> ]   <span class='dim'>decoy host to lure attackers</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "mirrors traffic without breaking the path",
        options: ["Network TAP", "IPS sensor (inline)", "Load balancer", "Reverse proxy"],
        answer: 0,
        explain: "A network TAP passively copies traffic to monitoring tools without becoming an inline point of failure."
      },
      {
        label: "Device for position [B]",
        hint: "watches and alerts, out-of-band",
        options: ["WAF", "IDS sensor (out-of-band)", "NAC", "Jump host / bastion"],
        answer: 1,
        explain: "An IDS sensor receives the mirrored copy and analyzes it out-of-band, alerting on matches without affecting live traffic."
      },
      {
        label: "Device for position [C]",
        hint: "intentionally vulnerable bait",
        options: ["Content filter", "VPN concentrator", "Honeypot", "Load balancer"],
        answer: 2,
        explain: "A honeypot is a decoy placed to lure and study attackers, diverting them from real assets in the DMZ."
      }
    ],
    summary: "Visibility: TAP mirrors traffic, IDS analyzes out-of-band, honeypot baits attackers."
  },
  {
    id: "PBQ-128",
    format: 5,
    domain: 4,
    title: "Cloud-Edge Application Delivery",
    brief: "A cloud-hosted app serves global users. Traffic from the <span class='hl'>Internet</span> must be filtered for web attacks, then distributed across an autoscaling pool. Place the controls at the cloud edge.",
    exhibitTitle: "topology",
    exhibit: "<span class='hl'>INTERNET</span>\n     |\n  [ <span class='cy'>A</span> ]   <span class='dim'>cloud-edge stateful policy</span>\n     |\n  [ <span class='cy'>B</span> ]   <span class='dim'>blocks SQLi / XSS</span>\n     |\n  [ <span class='cy'>C</span> ]   <span class='dim'>spreads across autoscale pool</span>\n     |\n  <span class='ok'>APP-1  APP-2  APP-3  ...</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "edge segment policy",
        options: ["Next-gen firewall (NGFW)", "Jump host / bastion", "Network TAP", "Forward proxy"],
        answer: 0,
        explain: "An NGFW (cloud firewall) enforces stateful policy at the cloud edge before traffic reaches the app tier."
      },
      {
        label: "Device for position [B]",
        hint: "web application protection",
        options: ["IDS sensor", "Web application firewall (WAF)", "NAC", "Content filter"],
        answer: 1,
        explain: "A WAF in front of the app blocks SQL injection, XSS, and other application-layer attacks."
      },
      {
        label: "Device for position [C]",
        hint: "fans out to the server pool",
        options: ["Reverse proxy", "Honeypot", "Load balancer", "VPN concentrator"],
        answer: 2,
        explain: "A load balancer distributes requests across the autoscaling application pool for capacity and resilience."
      }
    ],
    summary: "Cloud edge: NGFW for stateful policy, WAF for app attacks, load balancer before the pool."
  },
  {
    id: "PBQ-129",
    format: 5,
    domain: 4,
    title: "Branch-to-Server-Farm Segmentation",
    brief: "Branch users reach the <span class='warnc'>server farm</span> across the campus. Lateral exploit attempts must be dropped inline, and an analyst copy is needed for forensics. Place each control.",
    exhibitTitle: "topology",
    exhibit: "<span class='ok'>BRANCH USERS</span>\n     |\n  [ <span class='cy'>A</span> ]   <span class='dim'>segment boundary to farm</span>\n     |\n  [ <span class='cy'>B</span> ]   <span class='dim'>inline drop of lateral exploits</span>\n     |\n  [ <span class='cy'>C</span> ]   <span class='dim'>mirror for forensic capture</span>\n     |\n  ===== <span class='warnc'>SERVER FARM</span> =====",
    fields: [
      {
        label: "Device for position [A]",
        hint: "policy between zones",
        options: ["Load balancer", "Next-gen firewall (NGFW)", "Reverse proxy", "Honeypot"],
        answer: 1,
        explain: "The NGFW enforces the segment boundary policy between branch users and the server farm."
      },
      {
        label: "Device for position [B]",
        hint: "must block, in the data path",
        options: ["IPS sensor (inline)", "IDS sensor (out-of-band)", "Forward proxy", "NAC"],
        answer: 0,
        explain: "An inline IPS drops lateral exploit traffic in real time before it reaches the farm."
      },
      {
        label: "Device for position [C]",
        hint: "non-intrusive traffic copy",
        options: ["WAF", "Content filter", "Network TAP", "VPN concentrator"],
        answer: 2,
        explain: "A network TAP mirrors the traffic for forensic capture without inserting a point of failure."
      }
    ],
    summary: "Segmentation: NGFW boundary, inline IPS to block, TAP to mirror for forensics."
  },
  {
    id: "PBQ-130",
    format: 5,
    domain: 4,
    title: "Guest Network Containment",
    brief: "A <span class='warnc'>guest Wi-Fi</span> segment must be kept off the corporate LAN, filtered for inappropriate/malicious sites, and posture-gated if a guest tries to reach internal resources. Place the controls.",
    exhibitTitle: "topology",
    exhibit: "<span class='warnc'>GUEST WLAN</span>\n     |\n  [ <span class='cy'>A</span> ]   <span class='dim'>category/URL filtering</span>\n     |\n  [ <span class='cy'>B</span> ]   <span class='dim'>isolates guest from corporate</span>\n     |\n  [ <span class='cy'>C</span> ]   <span class='dim'>posture check before any LAN access</span>\n     |\n  <span class='ok'>CORPORATE LAN</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "blocks disallowed site categories",
        options: ["Content filter", "Load balancer", "Network TAP", "Reverse proxy"],
        answer: 0,
        explain: "A content filter enforces URL/category policy on guest browsing, blocking malicious or inappropriate sites."
      },
      {
        label: "Device for position [B]",
        hint: "zone separation enforcement",
        options: ["Honeypot", "Next-gen firewall (NGFW)", "Jump host / bastion", "VPN concentrator"],
        answer: 1,
        explain: "The NGFW isolates the guest segment from the corporate LAN, denying lateral access by policy."
      },
      {
        label: "Device for position [C]",
        hint: "health/identity gate",
        options: ["Forward proxy", "IDS sensor", "NAC", "WAF"],
        answer: 2,
        explain: "NAC posture-checks and authorizes any device attempting to cross from guest into corporate resources."
      }
    ],
    summary: "Guest containment: content filter for browsing, NGFW for isolation, NAC for posture-gated access."
  },
  {
    id: "PBQ-131",
    format: 5,
    domain: 4,
    title: "Datacenter Server Pool Front-End",
    brief: "An internal HR application runs on a pool of servers in the <span class='warnc'>server farm</span>. Sessions must be balanced, protected from app-layer attacks, and routed through a segment firewall from user VLANs. Place each control.",
    exhibitTitle: "topology",
    exhibit: "<span class='ok'>USER VLANs</span>\n     |\n  [ <span class='cy'>A</span> ]   <span class='dim'>segment policy boundary</span>\n     |\n  [ <span class='cy'>B</span> ]   <span class='dim'>app-layer attack screening</span>\n     |\n  [ <span class='cy'>C</span> ]   <span class='dim'>balances across the pool</span>\n     |\n  ===== <span class='warnc'>HR APP POOL</span> =====\n  <span class='ok'>HR-1  HR-2  HR-3</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "boundary from user VLANs",
        options: ["Load balancer", "WAF", "Next-gen firewall (NGFW)", "Honeypot"],
        answer: 2,
        explain: "The NGFW is the segment policy boundary controlling which user VLANs may reach the HR app pool."
      },
      {
        label: "Device for position [B]",
        hint: "protects the web application",
        options: ["Web application firewall (WAF)", "Forward proxy", "Network TAP", "VPN concentrator"],
        answer: 0,
        explain: "A WAF sits in front of the application servers, screening HTTP/S for application-layer attacks."
      },
      {
        label: "Device for position [C]",
        hint: "distributes to the pool",
        options: ["NAC", "IDS sensor", "Load balancer", "Content filter"],
        answer: 2,
        explain: "A load balancer distributes sessions across HR-1/2/3 immediately before the pool."
      }
    ],
    summary: "Server front-end: NGFW boundary, WAF for app protection, load balancer before the pool."
  },
  {
    id: "PBQ-132",
    format: 5,
    domain: 4,
    title: "Hybrid Cloud Interconnect",
    brief: "An on-prem datacenter connects to a cloud VPC over a site-to-site tunnel. Traffic must be encrypted in transit and inspected at both the on-prem and cloud edges. Place the controls.",
    exhibitTitle: "topology",
    exhibit: "===== <span class='ok'>ON-PREM DC</span> =====\n     |\n  [ <span class='cy'>A</span> ]   <span class='dim'>on-prem edge inspection</span>\n     |\n  [ <span class='cy'>B</span> ]   <span class='dim'>builds the encrypted site tunnel</span>\n     |\n  ~~~~ <span class='hl'>INTERNET</span> ~~~~\n     |\n  [ <span class='cy'>C</span> ]   <span class='dim'>cloud-edge stateful policy</span>\n     |\n  ===== <span class='warnc'>CLOUD VPC</span> =====",
    fields: [
      {
        label: "Device for position [A]",
        hint: "on-prem perimeter policy",
        options: ["Next-gen firewall (NGFW)", "Load balancer", "Honeypot", "Reverse proxy"],
        answer: 0,
        explain: "The on-prem NGFW inspects and enforces policy at the datacenter edge before traffic leaves the site."
      },
      {
        label: "Device for position [B]",
        hint: "establishes the encrypted link",
        options: ["Content filter", "VPN concentrator", "Network TAP", "WAF"],
        answer: 1,
        explain: "A VPN concentrator builds and terminates the site-to-site IPsec tunnel, encrypting traffic across the Internet."
      },
      {
        label: "Device for position [C]",
        hint: "policy at the cloud side",
        options: ["Forward proxy", "Jump host / bastion", "Next-gen firewall (NGFW)", "IDS sensor"],
        answer: 2,
        explain: "A cloud NGFW enforces stateful policy at the VPC edge where the tunnel lands."
      }
    ],
    summary: "Hybrid interconnect: NGFW at each edge, VPN concentrator builds the encrypted tunnel between sites."
  },
  {
    id: "PBQ-133",
    format: 5,
    domain: 4,
    title: "Three-Tier DMZ Defense-in-Depth",
    brief: "A public service spans a <span class='warnc'>three-tier DMZ</span>. Place layered controls: a perimeter firewall, an inline blocker, a web-app filter, and an internal segment firewall to the database.",
    exhibitTitle: "topology",
    exhibit: "<span class='hl'>INTERNET</span>\n     |\n  [ <span class='cy'>A</span> ]   <span class='dim'>perimeter boundary</span>\n     |\n  [ <span class='cy'>B</span> ]   <span class='dim'>inline exploit blocking</span>\n     |\n  ===== <span class='warnc'>WEB TIER</span> =====\n  [ <span class='cy'>C</span> ]   <span class='dim'>app-layer filtering</span>\n     |\n  [ <span class='cy'>D</span> ]   <span class='dim'>boundary to the DB tier</span>\n     |\n  ===== <span class='ok'>DB TIER</span> =====",
    fields: [
      {
        label: "Device for position [A]",
        hint: "first off the Internet",
        options: ["Next-gen firewall (NGFW)", "Load balancer", "Forward proxy", "Honeypot"],
        answer: 0,
        explain: "The NGFW is the outermost perimeter boundary inspecting all inbound Internet traffic."
      },
      {
        label: "Device for position [B]",
        hint: "drops matching exploits inline",
        options: ["Network TAP", "IPS sensor (inline)", "IDS sensor (out-of-band)", "NAC"],
        answer: 1,
        explain: "An inline IPS actively drops exploit traffic that passes the firewall before it reaches the web tier."
      },
      {
        label: "Device for position [C]",
        hint: "HTTP/S app protection",
        options: ["Web application firewall (WAF)", "VPN concentrator", "Content filter", "Jump host / bastion"],
        answer: 0,
        explain: "A WAF filters application-layer attacks in front of the web tier servers."
      },
      {
        label: "Device for position [D]",
        hint: "internal tier separation",
        options: ["Reverse proxy", "Load balancer", "Next-gen firewall (NGFW)", "Network TAP"],
        answer: 2,
        explain: "An internal segment NGFW restricts web-tier-to-DB-tier traffic to only required database ports, enforcing least privilege between tiers."
      }
    ],
    summary: "Defense in depth: perimeter NGFW, inline IPS, WAF at the web tier, internal NGFW to the database."
  },
  {
    id: "PBQ-134",
    format: 5,
    domain: 4,
    title: "Vendor Extranet Access",
    brief: "A third-party vendor needs limited access to one application. Their tunnel must terminate at the edge, traffic must be inspected, and they must reach the app only through a controlled, audited host. Place each control.",
    exhibitTitle: "topology",
    exhibit: "<span class='hl'>VENDOR</span>\n     |\n  [ <span class='cy'>A</span> ]   <span class='dim'>terminates the vendor tunnel</span>\n     |\n  [ <span class='cy'>B</span> ]   <span class='dim'>perimeter inspection</span>\n     |\n  [ <span class='cy'>C</span> ]   <span class='dim'>sole audited hop to the app</span>\n     |\n  <span class='ok'>VENDOR APP</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "ends the encrypted session",
        options: ["VPN concentrator", "Load balancer", "WAF", "Honeypot"],
        answer: 0,
        explain: "A VPN concentrator terminates the vendor's encrypted tunnel at the network edge."
      },
      {
        label: "Device for position [B]",
        hint: "policy and inspection",
        options: ["Content filter", "Next-gen firewall (NGFW)", "Network TAP", "Reverse proxy"],
        answer: 1,
        explain: "The NGFW inspects and enforces policy on the decrypted vendor traffic at the perimeter."
      },
      {
        label: "Device for position [C]",
        hint: "controlled, logged single hop",
        options: ["Forward proxy", "IDS sensor", "Jump host / bastion", "Load balancer"],
        answer: 2,
        explain: "A jump host / bastion is the only audited hop the vendor may use to reach the application, constraining and logging their access."
      }
    ],
    summary: "Vendor extranet: VPN concentrator terminates the tunnel, NGFW inspects, jump host is the sole audited path."
  },
  {
    id: "PBQ-135",
    format: 5,
    domain: 4,
    title: "Full Campus Edge-to-Core",
    brief: "Map an end-to-end campus design: Internet edge, DMZ web protection, server-pool distribution, core segmentation, and a hardened path into management. Place the device at every position.",
    exhibitTitle: "topology",
    exhibit: "<span class='hl'>INTERNET</span>\n     |\n  [ <span class='cy'>A</span> ]   <span class='dim'>perimeter / edge policy</span>\n     |\n  ===== <span class='warnc'>DMZ</span> =====\n  [ <span class='cy'>B</span> ]   <span class='dim'>web app protection</span>\n     |\n  [ <span class='cy'>C</span> ]   <span class='dim'>balances the web pool</span>\n     |\n  ===== <span class='ok'>CORE</span> =====\n  [ <span class='cy'>D</span> ]   <span class='dim'>inline blocking to server farm</span>\n     |\n  [ <span class='cy'>E</span> ]   <span class='dim'>only path into mgmt VLAN</span>\n     |\n  <span class='warnc'>MANAGEMENT</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "edge boundary off the Internet",
        options: ["Next-gen firewall (NGFW)", "Load balancer", "Jump host / bastion", "Honeypot"],
        answer: 0,
        explain: "The NGFW is the Internet-edge perimeter, enforcing policy and inspection for all inbound traffic."
      },
      {
        label: "Device for position [B]",
        hint: "in front of the web app",
        options: ["Forward proxy", "Web application firewall (WAF)", "Network TAP", "NAC"],
        answer: 1,
        explain: "A WAF protects the DMZ web application from app-layer attacks."
      },
      {
        label: "Device for position [C]",
        hint: "before the web server pool",
        options: ["Load balancer", "IDS sensor", "VPN concentrator", "Content filter"],
        answer: 0,
        explain: "A load balancer distributes sessions across the web pool for capacity and availability."
      },
      {
        label: "Device for position [D]",
        hint: "blocks exploits in the data path",
        options: ["IDS sensor (out-of-band)", "Reverse proxy", "IPS sensor (inline)", "Network TAP"],
        answer: 2,
        explain: "An inline IPS at the core drops exploit traffic heading toward the server farm in real time."
      },
      {
        label: "Device for position [E]",
        hint: "sole hardened entry to management",
        options: ["Jump host / bastion", "Load balancer", "WAF", "Forward proxy"],
        answer: 0,
        explain: "A jump host / bastion is the only hardened, audited path into the management VLAN."
      }
    ],
    summary: "Full campus: NGFW edge, WAF + load balancer in the DMZ, inline IPS at the core, jump host into management."
  }
);
NETPLUS.pbqs.push(
  {
    id: "PBQ-136",
    format: 5,
    domain: 4,
    title: "Branch Office SD-WAN Edge",
    brief: "A branch office connects to two ISP circuits and a corporate hub. Place the correct devices so internet-bound and corporate traffic are inspected and steered before crossing the WAN.",
    exhibitTitle: "topology",
    exhibit: "<span class='hl'>INTERNET</span>  <span class='dim'>ISP-A + ISP-B (dual circuits)</span>\n        |\n     [A] <span class='cy'>(WAN steering / overlay)</span>\n        |\n     [B] <span class='cy'>(perimeter inspection)</span>\n        |\n  <span class='ok'>LAN core switch</span> --- branch users\n        |\n     [C] <span class='cy'>(LAN access control)</span>\n        |\n  <span class='warnc'>printers / IoT / BYOD</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "Bonds two circuits and steers app traffic by policy.",
        options: ["Load balancer", "SD-WAN edge appliance", "Honeypot", "TAP"],
        answer: 1,
        explain: "The SD-WAN edge terminates both ISP circuits, builds the encrypted overlay to the hub, and performs dynamic path selection so applications use the best circuit."
      },
      {
        label: "Device for position [B]",
        hint: "Stateful inspection plus app awareness at the edge.",
        options: ["Forward proxy", "Layer-3 switch", "NGFW", "VPN concentrator"],
        answer: 2,
        explain: "An NGFW at the perimeter provides stateful filtering, application identification, and IPS for all traffic leaving or entering the branch."
      },
      {
        label: "Device for position [C]",
        hint: "Authenticates devices before they reach the LAN.",
        options: ["NAC", "Reverse proxy", "WAF", "IDS"],
        answer: 0,
        explain: "Network Access Control authenticates and posture-checks endpoints (including IoT and BYOD) before granting them an access VLAN."
      }
    ],
    summary: "SD-WAN edge steers WAN, NGFW inspects the perimeter, and NAC gates LAN access for untrusted endpoints."
  },
  {
    id: "PBQ-137",
    format: 5,
    domain: 4,
    title: "Three-Tier Data Center Fabric",
    brief: "Design a classic core/distribution/access data center. Place routing, segmentation, and east-west visibility devices in the correct tiers.",
    exhibitTitle: "topology",
    exhibit: "<span class='dim'>WAN / Internet edge</span>\n        |\n     [A] <span class='cy'>(core layer)</span>\n      /        \\\n   [B]          [B'] <span class='cy'>(distribution layer)</span>\n    |             |\n   [C]           [C] <span class='cy'>(access layer)</span>\n    |             |\n  <span class='ok'>server racks</span>   <span class='ok'>server racks</span>\n        |\n     [D] <span class='cy'>(east-west monitoring)</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "High-speed backbone routing, no host ports.",
        options: ["Access point", "Layer-3 switch (core)", "Forward proxy", "Honeypot"],
        answer: 1,
        explain: "The core is a high-throughput Layer-3 switch that routes between distribution blocks as fast as possible with minimal policy."
      },
      {
        label: "Device for position [B]",
        hint: "Aggregates access switches and enforces inter-VLAN policy.",
        options: ["Distribution Layer-3 switch", "VPN concentrator", "WAF", "TAP"],
        answer: 0,
        explain: "Distribution-layer Layer-3 switches aggregate access uplinks and are where routing, ACLs, and inter-VLAN policy live."
      },
      {
        label: "Device for position [C]",
        hint: "Where servers physically plug in.",
        options: ["Reverse proxy", "Layer-2 access switch", "IDS", "Load balancer"],
        answer: 1,
        explain: "The access layer is the Layer-2 switch that provides edge ports to servers and applies port security."
      },
      {
        label: "Device for position [D]",
        hint: "Passive copy of traffic for analysis, no inline risk.",
        options: ["NAC", "TAP", "Content filter", "Jump host"],
        answer: 1,
        explain: "A passive network TAP copies east-west traffic to monitoring/IDS tools without becoming a point of failure."
      }
    ],
    summary: "Core routes fast, distribution enforces policy, access connects servers, and a TAP feeds monitoring without inline risk."
  },
  {
    id: "PBQ-138",
    format: 5,
    domain: 4,
    title: "Hospital Segmented Medical VLAN",
    brief: "A hospital must isolate networked medical devices from general staff and the internet. Place devices to segment, inspect, and control the medical VLAN.",
    exhibitTitle: "topology",
    exhibit: "<span class='hl'>INTERNET</span>\n   |\n  [A] <span class='cy'>(perimeter)</span>\n   |\n <span class='ok'>core switch</span>\n   |        |\n staff    [B] <span class='cy'>(segment boundary)</span>\n VLAN      |\n        <span class='warnc'>MEDICAL VLAN</span> (imaging, monitors, pumps)\n           |\n          [C] <span class='cy'>(device admission)</span>\n           |\n          [D] <span class='cy'>(detect threats, no blocking)</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "Internet boundary for the whole hospital.",
        options: ["NGFW", "Load balancer", "Honeypot", "TAP"],
        answer: 0,
        explain: "An NGFW is the hospital's internet perimeter, providing stateful inspection and threat prevention."
      },
      {
        label: "Device for position [B]",
        hint: "Routes and filters between staff and medical segments.",
        options: ["Forward proxy", "Internal firewall", "Reverse proxy", "WAF"],
        answer: 1,
        explain: "An internal (segmentation) firewall between staff and medical VLANs enforces least-privilege so only authorized flows reach fragile medical devices."
      },
      {
        label: "Device for position [C]",
        hint: "Profiles and authorizes devices that cannot run agents.",
        options: ["VPN concentrator", "NAC", "Jump host", "Content filter"],
        answer: 1,
        explain: "NAC profiles and admits medical IoT devices that often cannot authenticate themselves, keeping rogue gear off the VLAN."
      },
      {
        label: "Device for position [D]",
        hint: "Alerts on anomalies without dropping packets.",
        options: ["IPS", "IDS", "WAF", "Load balancer"],
        answer: 1,
        explain: "An IDS monitors the sensitive medical VLAN and alerts without inline blocking, avoiding disruption to life-critical devices."
      }
    ],
    summary: "NGFW guards the perimeter, an internal firewall isolates the medical VLAN, NAC admits devices, and an IDS watches passively."
  },
  {
    id: "PBQ-139",
    format: 5,
    domain: 4,
    title: "Retail PCI Cardholder Data Zone",
    brief: "A retail store must isolate its point-of-sale cardholder data environment (CDE) for PCI DSS. Place devices to segment and protect the CDE.",
    exhibitTitle: "topology",
    exhibit: "<span class='hl'>INTERNET</span>\n   |\n  [A] <span class='cy'>(store perimeter)</span>\n   |\n <span class='ok'>store switch</span>\n   |        |\n guest    [B] <span class='cy'>(CDE boundary)</span>\n WiFi      |\n        <span class='warnc'>CARDHOLDER DATA ZONE</span>\n          /         \\\n        [C]          [D]\n  <span class='cy'>(POS web front)</span>  <span class='cy'>(admin access)</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "Store-edge stateful inspection.",
        options: ["TAP", "NGFW", "Honeypot", "Layer-2 switch"],
        answer: 1,
        explain: "The NGFW is the store's perimeter, separating untrusted internet from the internal store network."
      },
      {
        label: "Device for position [B]",
        hint: "Enforces strict segmentation around the CDE per PCI.",
        options: ["Internal firewall", "Forward proxy", "Access point", "Load balancer"],
        answer: 0,
        explain: "PCI DSS requires a firewall to segment the cardholder data environment, allowing only explicitly approved flows in and out."
      },
      {
        label: "Device for position [C]",
        hint: "Filters web attacks against the payment app.",
        options: ["IDS", "WAF", "VPN concentrator", "Content filter"],
        answer: 1,
        explain: "A WAF in front of the POS/payment web application inspects HTTP traffic for SQL injection, XSS, and other Layer-7 attacks."
      },
      {
        label: "Device for position [D]",
        hint: "Single audited gateway for administrative sessions.",
        options: ["Reverse proxy", "Jump host", "Honeypot", "NAC"],
        answer: 1,
        explain: "A jump host (bastion) is the single, logged, hardened entry point administrators use to reach the CDE, reducing the attack surface."
      }
    ],
    summary: "NGFW at the edge, internal firewall around the CDE, a WAF for the payment app, and a jump host for audited admin access."
  },
  {
    id: "PBQ-140",
    format: 5,
    domain: 4,
    title: "Cloud Hub-and-Spoke VNet",
    brief: "A cloud deployment uses a hub VNet with spoke VNets. Place shared security services in the hub and controls at the right points.",
    exhibitTitle: "topology",
    exhibit: "<span class='hl'>INTERNET</span>\n   |\n  [A] <span class='cy'>(hub ingress inspection)</span>\n   |\n <span class='ok'>HUB VNet</span>\n   |     |        |\n  [B]   spoke-1   spoke-2 <span class='cy'>(peered)</span>\n(<span class='cy'>app delivery</span>)   <span class='warnc'>(workloads)</span>\n   |\n  [C] <span class='cy'>(remote admin entry)</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "Centralized inspection for all spoke egress/ingress.",
        options: ["Layer-2 switch", "NGFW", "TAP", "Honeypot"],
        answer: 1,
        explain: "A hub NGFW (cloud firewall) centrally inspects north-south traffic for all peered spokes, a standard hub-and-spoke pattern."
      },
      {
        label: "Device for position [B]",
        hint: "Distributes inbound app traffic across backend instances.",
        options: ["Load balancer", "Forward proxy", "NAC", "IDS"],
        answer: 0,
        explain: "A load balancer in the hub spreads inbound application requests across healthy backend instances in the spokes."
      },
      {
        label: "Device for position [C]",
        hint: "Brokered, just-in-time admin access to private workloads.",
        options: ["WAF", "Content filter", "Jump host", "Forward proxy"],
        answer: 2,
        explain: "A jump host (bastion) in the hub gives administrators controlled access to spoke workloads that have no public IPs."
      }
    ],
    summary: "Hub NGFW inspects centrally, a load balancer fronts the app, and a bastion brokers admin access to private spokes."
  },
  {
    id: "PBQ-141",
    format: 5,
    domain: 4,
    title: "Remote-Worker VPN Termination",
    brief: "Remote employees connect over the internet to reach internal resources. Place devices to terminate, inspect, and admit remote sessions.",
    exhibitTitle: "topology",
    exhibit: "<span class='warnc'>remote workers (home / mobile)</span>\n        |\n   <span class='hl'>INTERNET</span>\n        |\n      [A] <span class='cy'>(edge filter)</span>\n        |\n      [B] <span class='cy'>(tunnel termination)</span>\n        |\n      [C] <span class='cy'>(posture before LAN)</span>\n        |\n   <span class='ok'>internal resources</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "Outermost stateful packet inspection.",
        options: ["NGFW", "Reverse proxy", "TAP", "Load balancer"],
        answer: 0,
        explain: "An NGFW at the edge filters and inspects all inbound internet traffic before it reaches the VPN service."
      },
      {
        label: "Device for position [B]",
        hint: "Aggregates and decrypts many client tunnels.",
        options: ["Forward proxy", "VPN concentrator", "Honeypot", "WAF"],
        answer: 1,
        explain: "A VPN concentrator terminates large numbers of remote-access tunnels and hands decrypted traffic to the internal network."
      },
      {
        label: "Device for position [C]",
        hint: "Checks endpoint health before granting LAN access.",
        options: ["IDS", "NAC", "Content filter", "Layer-3 switch"],
        answer: 1,
        explain: "NAC performs posture assessment (patch level, AV, compliance) on remote endpoints before allowing them onto internal VLANs."
      }
    ],
    summary: "NGFW filters the edge, a VPN concentrator terminates tunnels, and NAC posture-checks endpoints before LAN access."
  },
  {
    id: "PBQ-142",
    format: 5,
    domain: 4,
    title: "Public Web Application DMZ",
    brief: "A company hosts a public web app in a DMZ with a private database behind it. Place devices to publish, protect, and isolate the tiers.",
    exhibitTitle: "topology",
    exhibit: "<span class='hl'>INTERNET</span>\n   |\n  [A] <span class='cy'>(outer edge)</span>\n   |\n  [B] <span class='cy'>(publish + L7 filter)</span>\n   |\n <span class='warnc'>DMZ web servers</span>\n   |\n  [C] <span class='cy'>(spread load)</span>\n   |\n  [D] <span class='cy'>(DMZ-to-DB boundary)</span>\n   |\n <span class='ok'>private DB tier</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "Perimeter stateful firewall.",
        options: ["NGFW", "Jump host", "TAP", "NAC"],
        answer: 0,
        explain: "The NGFW is the outer perimeter controlling what reaches the DMZ at all."
      },
      {
        label: "Device for position [B]",
        hint: "Terminates external sessions and inspects HTTP.",
        options: ["Forward proxy", "Reverse proxy / WAF", "VPN concentrator", "IDS"],
        answer: 1,
        explain: "A reverse proxy with WAF capability publishes the web servers, terminates TLS, and filters Layer-7 web attacks before they reach the DMZ."
      },
      {
        label: "Device for position [C]",
        hint: "Distributes requests across web nodes.",
        options: ["Load balancer", "Content filter", "Honeypot", "TAP"],
        answer: 0,
        explain: "A load balancer distributes traffic across the DMZ web server pool for scale and availability."
      },
      {
        label: "Device for position [D]",
        hint: "Tight policy between DMZ and the private database.",
        options: ["Internal firewall", "Access point", "Forward proxy", "NAC"],
        answer: 0,
        explain: "An internal firewall between the DMZ and the database tier allows only the specific database ports, keeping the DB unreachable from the internet."
      }
    ],
    summary: "NGFW at the edge, reverse proxy/WAF publishes the app, a load balancer scales it, and an internal firewall isolates the database."
  },
  {
    id: "PBQ-143",
    format: 5,
    domain: 4,
    title: "Guest Network Control Placement",
    brief: "A campus offers guest Wi-Fi that must reach only the internet, never internal systems. Place devices to isolate and filter guest traffic.",
    exhibitTitle: "topology",
    exhibit: "<span class='warnc'>guest devices</span>\n   |\n <span class='dim'>guest SSID / AP</span>\n   |\n  [A] <span class='cy'>(guest segmentation)</span>\n   |\n  [B] <span class='cy'>(usage policy)</span>\n   |\n  [C] <span class='cy'>(internet edge)</span>\n   |\n <span class='hl'>INTERNET</span>\n\n<span class='ok'>internal network</span> = <span class='dim'>must remain unreachable</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "Keeps guest VLAN separate from corporate VLANs.",
        options: ["Internal firewall", "Honeypot", "TAP", "VPN concentrator"],
        answer: 0,
        explain: "An internal firewall enforces that the guest VLAN can only route to the internet, never to internal subnets."
      },
      {
        label: "Device for position [B]",
        hint: "Blocks disallowed categories and websites.",
        options: ["Load balancer", "Content filter", "WAF", "NAC"],
        answer: 1,
        explain: "A content filter applies acceptable-use policy, blocking malicious or inappropriate categories for guest browsing."
      },
      {
        label: "Device for position [C]",
        hint: "Final stateful boundary to the internet.",
        options: ["NGFW", "Reverse proxy", "Jump host", "IDS"],
        answer: 0,
        explain: "The NGFW is the internet edge providing stateful inspection and NAT for guest egress."
      }
    ],
    summary: "An internal firewall isolates the guest VLAN, a content filter enforces acceptable use, and the NGFW handles internet egress."
  },
  {
    id: "PBQ-144",
    format: 5,
    domain: 4,
    title: "Industrial OT/SCADA Boundary",
    brief: "A plant separates its IT network from the OT/SCADA control network. Place devices to inspect, deceive attackers, and admit only known controllers.",
    exhibitTitle: "topology",
    exhibit: "<span class='ok'>IT network</span>\n   |\n  [A] <span class='cy'>(IT/OT boundary)</span>\n   |\n  [B] <span class='cy'>(passive detection)</span>\n   |\n <span class='warnc'>OT / SCADA network</span> (PLCs, HMIs)\n   |\n  [C] <span class='cy'>(device admission)</span>\n   |\n  [D] <span class='cy'>(lure / decoy)</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "Strict boundary between IT and control systems.",
        options: ["NGFW", "Load balancer", "Access point", "Reverse proxy"],
        answer: 0,
        explain: "An NGFW forms the IT/OT boundary, allowing only the narrow, approved industrial protocols across it."
      },
      {
        label: "Device for position [B]",
        hint: "Watches fragile OT traffic without interfering.",
        options: ["IPS", "IDS", "WAF", "Forward proxy"],
        answer: 1,
        explain: "An IDS monitors the OT segment passively; inline blocking is avoided because dropped packets could disrupt control processes."
      },
      {
        label: "Device for position [C]",
        hint: "Ensures only known controllers join the OT VLAN.",
        options: ["NAC", "Content filter", "Jump host", "TAP"],
        answer: 0,
        explain: "NAC admits only profiled, known OT devices, blocking rogue or unauthorized hardware from the control network."
      },
      {
        label: "Device for position [D]",
        hint: "Fake target to detect lateral movement.",
        options: ["Honeypot", "Load balancer", "VPN concentrator", "Reverse proxy"],
        answer: 0,
        explain: "A honeypot in the OT segment lures and detects attackers performing reconnaissance or lateral movement."
      }
    ],
    summary: "NGFW separates IT from OT, an IDS watches passively, NAC admits known controllers, and a honeypot detects intruders."
  },
  {
    id: "PBQ-145",
    format: 5,
    domain: 4,
    title: "Outbound Web Egress Control",
    brief: "An enterprise wants all employee web traffic inspected and logged on the way out. Place devices to broker, filter, and detect egress traffic.",
    exhibitTitle: "topology",
    exhibit: "<span class='ok'>employee workstations</span>\n   |\n  [A] <span class='cy'>(outbound broker)</span>\n   |\n  [B] <span class='cy'>(category policy)</span>\n   |\n  [C] <span class='cy'>(perimeter)</span>\n   |\n <span class='hl'>INTERNET</span>\n   |\n  [D] <span class='cy'>(passive egress copy)</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "Clients send outbound web requests through it.",
        options: ["Reverse proxy", "Forward proxy", "WAF", "Load balancer"],
        answer: 1,
        explain: "A forward proxy sits between internal clients and the internet, brokering and logging outbound requests on behalf of users."
      },
      {
        label: "Device for position [B]",
        hint: "Enforces URL/category acceptable-use rules.",
        options: ["Content filter", "Honeypot", "NAC", "TAP"],
        answer: 0,
        explain: "A content filter applies category and URL policy to outbound browsing."
      },
      {
        label: "Device for position [C]",
        hint: "Stateful internet boundary.",
        options: ["NGFW", "Jump host", "IDS", "VPN concentrator"],
        answer: 0,
        explain: "The NGFW is the stateful perimeter all egress traffic crosses."
      },
      {
        label: "Device for position [D]",
        hint: "Copies egress traffic for offline analysis.",
        options: ["NAC", "TAP", "Reverse proxy", "Load balancer"],
        answer: 1,
        explain: "A TAP copies egress traffic to monitoring tools without sitting inline in the data path."
      }
    ],
    summary: "Forward proxy brokers egress, a content filter enforces policy, the NGFW is the boundary, and a TAP feeds passive monitoring."
  },
  {
    id: "PBQ-146",
    format: 5,
    domain: 4,
    title: "Multi-Tenant Hosting Edge",
    brief: "A hosting provider serves many customer apps behind a shared edge. Place devices to publish, protect, and scale tenant applications.",
    exhibitTitle: "topology",
    exhibit: "<span class='hl'>INTERNET</span>\n   |\n  [A] <span class='cy'>(edge firewall)</span>\n   |\n  [B] <span class='cy'>(scale-out front)</span>\n   |\n  [C] <span class='cy'>(L7 app protection)</span>\n   |\n <span class='warnc'>tenant web servers</span>\n   |\n  [D] <span class='cy'>(per-tenant isolation)</span>\n   |\n <span class='ok'>tenant databases</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "First stateful boundary at the edge.",
        options: ["NGFW", "Forward proxy", "Honeypot", "NAC"],
        answer: 0,
        explain: "The NGFW is the provider's stateful internet perimeter."
      },
      {
        label: "Device for position [B]",
        hint: "Spreads inbound requests across servers.",
        options: ["Load balancer", "TAP", "Content filter", "Jump host"],
        answer: 0,
        explain: "A load balancer distributes inbound tenant traffic across the web server pool."
      },
      {
        label: "Device for position [C]",
        hint: "Inspects HTTP for web exploits.",
        options: ["IDS", "WAF", "VPN concentrator", "Reverse proxy"],
        answer: 1,
        explain: "A WAF filters Layer-7 attacks (injection, XSS) targeting the hosted applications."
      },
      {
        label: "Device for position [D]",
        hint: "Keeps one tenant's DB traffic from another.",
        options: ["Internal firewall", "Access point", "Forward proxy", "Load balancer"],
        answer: 0,
        explain: "An internal firewall enforces per-tenant segmentation so web servers only reach their own database tier."
      }
    ],
    summary: "NGFW at the edge, load balancer scales out, WAF protects apps, and an internal firewall isolates tenant databases."
  },
  {
    id: "PBQ-147",
    format: 5,
    domain: 4,
    title: "Two-Firewall Screened Subnet",
    brief: "A classic screened subnet uses two firewalls with a DMZ between them. Place devices to inspect at each boundary and detect intrusions.",
    exhibitTitle: "topology",
    exhibit: "<span class='hl'>INTERNET</span>\n   |\n  [A] <span class='cy'>(outer firewall)</span>\n   |\n <span class='warnc'>DMZ</span> (public services)\n   |\n  [B] <span class='cy'>(detect in DMZ)</span>\n   |\n  [C] <span class='cy'>(inner firewall)</span>\n   |\n <span class='ok'>internal LAN</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "Faces the internet, permits only DMZ services.",
        options: ["NGFW (outer)", "Reverse proxy", "TAP", "NAC"],
        answer: 0,
        explain: "The outer NGFW permits only required public services into the DMZ and blocks everything else from the internet."
      },
      {
        label: "Device for position [B]",
        hint: "Alerts on attacks against public services.",
        options: ["IDS", "Load balancer", "Forward proxy", "Jump host"],
        answer: 0,
        explain: "An IDS in the DMZ alerts on attacks against the exposed public services."
      },
      {
        label: "Device for position [C]",
        hint: "Protects the LAN from a compromised DMZ.",
        options: ["NGFW (inner)", "Content filter", "WAF", "Honeypot"],
        answer: 0,
        explain: "The inner NGFW only allows tightly defined flows from the DMZ to the LAN, so a compromised DMZ host cannot freely pivot inside."
      }
    ],
    summary: "Outer firewall fronts the DMZ, an IDS detects attacks there, and an inner firewall shields the LAN."
  },
  {
    id: "PBQ-148",
    format: 5,
    domain: 4,
    title: "Zero-Trust Microsegmentation",
    brief: "An enterprise adopts zero trust with brokered access and per-segment policy. Place controls so every request is authenticated and inspected.",
    exhibitTitle: "topology",
    exhibit: "<span class='warnc'>users / devices</span>\n   |\n  [A] <span class='cy'>(identity-aware proxy)</span>\n   |\n  [B] <span class='cy'>(device trust check)</span>\n   |\n <span class='ok'>app segments</span>\n   |        |\n  [C]      [C'] <span class='cy'>(per-segment policy)</span>\n   |\n  [D] <span class='cy'>(privileged path)</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "Terminates and brokers each app request.",
        options: ["Reverse proxy", "Forward proxy", "Load balancer", "TAP"],
        answer: 0,
        explain: "An identity-aware reverse proxy brokers each request to internal apps, enforcing authentication before any backend connection is made."
      },
      {
        label: "Device for position [B]",
        hint: "Verifies posture/compliance of the endpoint.",
        options: ["NAC", "WAF", "Honeypot", "Content filter"],
        answer: 0,
        explain: "NAC validates device trust and posture as part of the zero-trust access decision."
      },
      {
        label: "Device for position [C]",
        hint: "Enforces least-privilege between app segments.",
        options: ["Internal firewall", "Access point", "VPN concentrator", "Load balancer"],
        answer: 0,
        explain: "Internal firewalls between microsegments enforce least-privilege east-west policy, a core zero-trust principle."
      },
      {
        label: "Device for position [D]",
        hint: "Audited bastion for admin tasks.",
        options: ["Jump host", "Reverse proxy", "TAP", "IDS"],
        answer: 0,
        explain: "A jump host provides the single audited path for privileged administrative access in a zero-trust design."
      }
    ],
    summary: "Identity-aware reverse proxy brokers access, NAC checks device trust, internal firewalls segment east-west, and a jump host governs admin."
  },
  {
    id: "PBQ-149",
    format: 5,
    domain: 4,
    title: "Site-to-Site Branch Interconnect",
    brief: "Two offices connect over the internet with an encrypted tunnel. Place devices to terminate the tunnel, route, and detect threats at each site.",
    exhibitTitle: "topology",
    exhibit: "<span class='ok'>Site A LAN</span>\n   |\n  [A] <span class='cy'>(routing)</span>\n   |\n  [B] <span class='cy'>(tunnel endpoint)</span>\n   |\n <span class='hl'>INTERNET</span>\n   |\n  [B'] <span class='dim'>(Site B tunnel endpoint)</span>\n   |\n  [C] <span class='cy'>(inline prevention at Site B)</span>\n   |\n <span class='ok'>Site B LAN</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "Forwards packets between subnets and the WAN.",
        options: ["Router", "Honeypot", "WAF", "TAP"],
        answer: 0,
        explain: "A router forwards traffic between the local LAN subnets and the WAN uplink."
      },
      {
        label: "Device for position [B]",
        hint: "Builds the encrypted IPsec tunnel to the peer site.",
        options: ["Load balancer", "VPN concentrator", "Content filter", "Reverse proxy"],
        answer: 1,
        explain: "A VPN concentrator (or VPN-capable firewall) terminates the site-to-site IPsec tunnel across the internet."
      },
      {
        label: "Device for position [C]",
        hint: "Actively blocks malicious traffic entering Site B.",
        options: ["IDS", "IPS", "Forward proxy", "NAC"],
        answer: 1,
        explain: "An IPS sits inline at Site B and actively blocks malicious traffic arriving over the tunnel, not just alerting."
      }
    ],
    summary: "A router handles forwarding, a VPN concentrator builds the tunnel, and an inline IPS blocks threats at the far site."
  },
  {
    id: "PBQ-150",
    format: 5,
    domain: 4,
    title: "Call Center VoIP Segmentation",
    brief: "A call center separates voice traffic from data and prioritizes it. Place devices to segment, admit phones, and secure the SIP edge.",
    exhibitTitle: "topology",
    exhibit: "<span class='hl'>INTERNET / SIP trunk</span>\n   |\n  [A] <span class='cy'>(SIP edge)</span>\n   |\n <span class='ok'>core switch</span>\n   |        |\n data     [B] <span class='cy'>(voice/data boundary)</span>\n VLAN      |\n        <span class='warnc'>VOICE VLAN</span> (IP phones)\n           |\n          [C] <span class='cy'>(phone admission)</span>",
    fields: [
      {
        label: "Device for position [A]",
        hint: "Secures and inspects SIP/RTP at the perimeter.",
        options: ["NGFW", "Load balancer", "Honeypot", "TAP"],
        answer: 0,
        explain: "An NGFW (acting as the SIP-aware edge) secures the SIP trunk, inspecting and controlling voice signaling and media."
      },
      {
        label: "Device for position [B]",
        hint: "Routes and filters between voice and data VLANs.",
        options: ["Internal firewall", "Forward proxy", "WAF", "VPN concentrator"],
        answer: 0,
        explain: "An internal firewall between the voice and data VLANs enforces segmentation so a compromised data host cannot reach the phones."
      },
      {
        label: "Device for position [C]",
        hint: "Authenticates phones onto the voice VLAN.",
        options: ["NAC", "Content filter", "Reverse proxy", "IDS"],
        answer: 0,
        explain: "NAC authenticates IP phones and assigns them to the voice VLAN, keeping unauthorized devices off it."
      }
    ],
    summary: "NGFW secures the SIP edge, an internal firewall splits voice from data, and NAC admits phones to the voice VLAN."
  }
);

/* ---- Format 6 · Network Operations & Monitoring (Domain 3) ---- */
NETPLUS.pbqs.push(
{
    id:"PBQ-151", format:6, domain:3,
    title:"Secure the SNMP Monitoring Plane",
    brief:"A security audit found your switches still answer <span class='hl'>SNMPv1/v2c community strings</span> sent in cleartext. You must migrate device monitoring to a configuration that is both authenticated and encrypted.",
    exhibitTitle:"audit finding #2291",
    exhibit:"<span class='warnc'>FINDING:</span> 14 switches respond to SNMPv2c community <span class='hl'>public</span> (RO) and <span class='hl'>private</span> (RW)\n<span class='dim'>capture: 10.20.0.5 -> 10.20.0.11 UDP GET sysDescr.0 community=public (cleartext)</span>\n<span class='ok'>GOAL:</span> monitoring traffic must be authenticated AND encrypted\n<span class='cy'>NMS:</span> LibreNMS at 10.20.0.5",
    fields:[
      { label:"Which SNMP version satisfies the audit goal?", hint:"Only one version introduces real cryptography.", options:["SNMPv1","SNMPv2c","SNMPv3","SNMPv2c with a longer community string"], answer:2, explain:"Only SNMPv3 provides authentication and encryption via the User-based Security Model. Changing the community string leaves v1/v2c credentials in cleartext." },
      { label:"What did SNMPv2c actually add over v1?", hint:"The 'c' means community-based - it kept v1's security model.", options:["AES encryption of all queries","GETBULK operations and improved error handling","User-based authentication","TLS transport on port 6514"], answer:1, explain:"v2c was an efficiency upgrade (GETBULK, better error handling), not a security upgrade. It kept the plaintext community-string model." },
      { label:"Which SNMPv3 security level meets the goal?", hint:"You need identity, integrity, and confidentiality together.", options:["authPriv","noAuthNoPriv","authNoPriv","communityPriv"], answer:0, explain:"authPriv authenticates the user and encrypts the payload. authNoPriv authenticates but leaves the data readable, and noAuthNoPriv provides identity only." },
      { label:"Which port must stay open on each agent for NMS queries?", hint:"Agents listen on one port; traps travel to another.", options:["UDP 161","UDP 162","UDP 514","TCP 6514"], answer:0, explain:"Agents listen for manager queries on UDP 161. UDP 162 is where the manager receives traps, and 514/6514 belong to syslog." }
    ],
    summary:"Moving to SNMPv3 authPriv gives authenticated, encrypted monitoring; v2c only added efficiency, and agents answer queries on UDP 161."
  },
  {
    id:"PBQ-152", format:6, domain:3,
    title:"Traps, Informs, or Polling?",
    brief:"You are tuning how the NMS learns about device state. Match each requirement to the right SNMP mechanism: <span class='hl'>scheduled polling, traps, or informs</span>.",
    exhibitTitle:"requirements",
    exhibit:"<span class='cy'>REQ-1:</span> 5-minute CPU and interface graphs for capacity dashboards\n<span class='cy'>REQ-2:</span> the NMS must know the INSTANT a core uplink goes down\n<span class='cy'>REQ-3:</span> UPS-on-battery alerts must NEVER be silently lost\n<span class='dim'>All devices are SNMP-managed; the NMS is 10.20.0.5.</span>",
    fields:[
      { label:"Mechanism for REQ-1 (continuous trend graphs)", hint:"The manager pulls data on a fixed schedule.", options:["Traps","Informs","Scheduled polling (GET)","SET operations"], answer:2, explain:"Polling is the manager pulling values on a schedule, which produces the continuous time-series data baselines and graphs need." },
      { label:"Mechanism for REQ-2 (instant link-down notification)", hint:"The agent pushes an unsolicited alert the moment the event occurs.", options:["A trap","A poll at the next interval","A GETNEXT walk","Loading a MIB file"], answer:0, explain:"A trap is the agent pushing an alert the instant the event happens. Polling would not see the outage until the next sweep." },
      { label:"Mechanism for REQ-3 (alert that must not be lost)", hint:"Like a trap, but the agent expects an acknowledgment.", options:["A trap","An inform","A faster poll interval","A GETBULK"], answer:1, explain:"An inform is an acknowledged trap: the agent retransmits until the manager confirms receipt, so the alert cannot be silently dropped." },
      { label:"Why is trap-only alerting risky for REQ-3?", hint:"Think about the transport traps ride on.", options:["Agents only send traps when polled","Traps are encrypted by default","The manager acknowledges every trap","Traps ride unacknowledged UDP and can be lost in congestion"], answer:3, explain:"Traps are unacknowledged UDP, so a congested network can drop one and the agent never knows. Informs close that gap with an ACK and retransmission." }
    ],
    summary:"Use polling for dashboards, traps for instant alerts, and informs when an alert must be acknowledged and never silently lost."
  },
  {
    id:"PBQ-153", format:6, domain:3,
    title:"Select the Flow Technology",
    brief:"Three sites need flow monitoring, each with a different constraint. Choose between <span class='hl'>NetFlow, sFlow, and IPFIX</span> and identify how the pieces fit together.",
    exhibitTitle:"design notes",
    exhibit:"<span class='cy'>SITE A:</span> ISP-style per-customer usage accounting (billing-grade accuracy)\n<span class='cy'>SITE B:</span> 100 Gbps collapsed core; CPU headroom is scarce; trends and top talkers only\n<span class='cy'>SITE C:</span> mixed-vendor estate; export format must be an open IETF standard\n<span class='dim'>One flow-analysis server at 10.9.9.20 will receive all exports.</span>",
    fields:[
      { label:"Best fit for SITE A (billing-grade accuracy)", hint:"One technology accounts for every flow rather than sampling.", options:["sFlow","NetFlow","SNMP polling","ERSPAN"], answer:1, explain:"NetFlow examines every flow, so its byte and packet counts are exact - the accuracy billing requires. Sampled data would only estimate usage." },
      { label:"Best fit for SITE B (100 Gbps core, minimal CPU)", hint:"Statistical sampling at the ASIC level scales to fast links.", options:["sFlow","NetFlow","Full packet capture","Debug-level syslog"], answer:0, explain:"sFlow samples packets (for example 1 in 1,000) in hardware, scaling to high-speed links with negligible CPU load - fine for trends and top talkers." },
      { label:"Best fit for SITE C (vendor-neutral standard)", hint:"Think of it as the open standardization of NetFlow v9.", options:["NetFlow v5","sFlow","IPFIX","RMON"], answer:2, explain:"IPFIX is the IETF standardization of NetFlow v9, making it the vendor-neutral flow-export choice for a mixed-vendor estate." },
      { label:"How do flow records reach the server at 10.9.9.20?", hint:"The device builds the records; the server stores and graphs them.", options:["The collector builds records and ships them to the exporter","The manager polls MIB counters for flows","A TAP copies frames directly to the server","The exporter builds flow records and sends them to the collector"], answer:3, explain:"In all three technologies the switch or router acts as the exporter, building flow records and shipping them to the collector for storage and analysis." }
    ],
    summary:"NetFlow counts every flow for accuracy, sFlow samples for scale, IPFIX is the vendor-neutral standard, and exporters send records to a collector."
  },
  {
    id:"PBQ-154", format:6, domain:3,
    title:"Syslog Severity Triage",
    brief:"The overnight syslog feed shows four new events. Triage them by <span class='hl'>severity level</span> and confirm the paging rules are built on the right scale.",
    exhibitTitle:"syslog://collector",
    exhibit:"<span class='dim'>Jul 04 02:11:09</span> CORE-SW1 <span class='warnc'>%ENVMON-4-FAN_WARN</span>: fan tray 1 below threshold   <span class='cy'>[A]</span>\n<span class='dim'>Jul 04 02:11:31</span> CORE-SW1 <span class='ok'>%SYS-6-LOGGINGHOST</span>: now logging to host 10.20.0.9   <span class='cy'>[B]</span>\n<span class='dim'>Jul 04 02:12:02</span> EDGE-R1 <span class='warnc'>%PLATFORM-0-UNRECOVERABLE</span>: system unusable, halting   <span class='cy'>[C]</span>\n<span class='dim'>Jul 04 02:12:40</span> DIST-SW2 <span class='warnc'>%LINK-3-UPDOWN</span>: interface Gi1/0/7 changed state to down   <span class='cy'>[D]</span>",
    fields:[
      { label:"Which event is the MOST severe?", hint:"The number embedded in each message is its severity level.", options:["Line A (severity 4)","Line B (severity 6)","Line C (severity 0)","Line D (severity 3)"], answer:2, explain:"Severity 0 (Emergency) means the system is unusable - the most severe condition on the scale. The other lines are Warning (4), Informational (6), and Error (3)." },
      { label:"How does the syslog severity scale run?", hint:"The direction of the scale is a classic trap.", options:["Lower numbers are more severe - 0 is Emergency, 7 is Debug","Higher numbers are more severe - 7 is Emergency","Severity 4 is always the most severe","The scale differs on every vendor"], answer:0, explain:"Syslog severities run 0 (Emergency, most severe) through 7 (Debug, least severe). Confusing the direction is the classic exam trap." },
      { label:"Which level name means 'system unusable'?", hint:"It is the very top of the scale.", options:["Alert (1)","Emergency (0)","Critical (2)","Error (3)"], answer:1, explain:"Emergency, level 0, means the system is unusable. Alert (1) means immediate action is needed but the system still runs." },
      { label:"Paging is set for severities 0-2. Which events page on-call?", hint:"Name the three most-severe levels.", options:["Warning and Notice events","Emergency, Alert, and Critical events","Informational and Debug events","Error and Warning events"], answer:1, explain:"Severities 0-2 are Emergency, Alert, and Critical. Of the four events shown, only line C (severity 0) would page the on-call engineer." }
    ],
    summary:"Syslog severity runs 0 (Emergency) to 7 (Debug); the severity-0 halt is the event that pages, while Warning and Informational lines wait for morning."
  },
  {
    id:"PBQ-155", format:6, domain:3,
    title:"Set Up a SPAN Session for the Analyzer",
    brief:"Security wants Wireshark to see the traffic of the server uplink on <span class='hl'>Gi0/5</span>. The analyzer laptop is cabled to <span class='hl'>Gi0/24</span>. Configure the mirroring session and know its limits.",
    exhibitTitle:"ticket #5512",
    exhibit:"<span class='dim'>SW1#</span> show monitor session 1\n<span class='cy'>Session 1</span>\n  Type         : Local Session\n  Source Ports : <span class='warnc'>(not configured)</span>\n  Dest Ports   : <span class='warnc'>(not configured)</span>\n<span class='dim'>Analyzer (Wireshark) is cabled to Gi0/24.</span>\n<span class='dim'>Traffic of interest enters and leaves Gi0/5 (server uplink).</span>",
    fields:[
      { label:"In this SPAN session, what role does Gi0/5 play?", hint:"It is the port whose frames you want copied.", options:["The destination (monitor) port","The reflector port","The native VLAN","The source port"], answer:3, explain:"The source is the port (or VLAN) whose traffic the switch copies. Gi0/5 carries the traffic of interest, so it is the SPAN source." },
      { label:"Where must the analyzer connect?", hint:"The switch copies frames to one designated port.", options:["Any trunk port on the switch","The SPAN destination (monitor) port, Gi0/24","The management VLAN SVI","The console port"], answer:1, explain:"Mirrored frames are copied to the designated destination/monitor port, so the analyzer must sit on Gi0/24 where the session sends the copies." },
      { label:"Later you mirror TWO busy 1 Gbps ports to Gi0/24. What is the risk?", hint:"Up to 2 Gbps of copies must fit through a 1 Gbps pipe.", options:["Oversubscription - the switch silently drops the overflow","A broadcast storm on the monitor port","MAC address flapping","A duplex mismatch on Gi0/5"], answer:0, explain:"Two saturated 1 Gbps sources can generate up to 2 Gbps of copies for a 1 Gbps destination; the switch silently drops what does not fit." },
      { label:"The analyzer later moves to a capture server across the routed core. Which variant extends the session?", hint:"Local SPAN and RSPAN stop at Layer 2 boundaries.", options:["RSPAN over an intermediate VLAN","A second local SPAN session","ERSPAN, which encapsulates mirrored traffic in GRE across Layer 3","A longer patch cable to Gi0/24"], answer:2, explain:"ERSPAN wraps mirrored frames in GRE so the copies can cross a routed network to a remote analyzer. RSPAN extends a session only across Layer 2 trunks, and a local session cannot leave the switch." }
    ],
    summary:"A SPAN session copies from source Gi0/5 to destination Gi0/24, oversubscribed copies are silently dropped, and ERSPAN carries mirrored traffic across a routed core when the analyzer is remote."
  },
  {
    id:"PBQ-156", format:6, domain:3,
    title:"Baseline-Driven Alerting",
    brief:"EDGE-R1 keeps paging on a fixed 75% CPU threshold. Use the <span class='hl'>12-week baseline</span> to decide what is actually abnormal and fix the alert rule.",
    exhibitTitle:"netmon://dashboard",
    exhibit:"<span class='cy'>DEVICE:</span> EDGE-R1   <span class='cy'>METRIC:</span> CPU utilization\n<span class='hl'>NOW (Mon 09:20):</span> 80%\n<span class='ok'>BASELINE Mon 09:00-10:00:</span> 78% average over 12 weeks\n<span class='ok'>BASELINE Sun 02:00-03:00:</span> 20% average over 12 weeks\n<span class='dim'>Current alert rule: page when CPU exceeds 75% (fixed threshold, all hours)</span>",
    fields:[
      { label:"How should you read the 80% CPU reading right now?", hint:"Compare it to the baseline for this device at this hour.", options:["It is consistent with the baseline - normal for Monday morning","The router is failing and must be replaced","The NMS polling is miscalibrated","CPU must be forced below 50% immediately"], answer:0, explain:"Against a 78% Monday-morning baseline, 80% is normal behavior for this router at this hour. A raw number means nothing without the baseline." },
      { label:"The same 80% appears at 2 a.m. Sunday. What is the right call?", hint:"The baseline for that window is 20%.", options:["Ignore it - 80% is close to the Monday figure","Baselines do not apply outside business hours","Reboot the router as a precaution","Investigate - it deviates sharply from the seasonal baseline"], answer:3, explain:"Traffic that is normal Monday at 9 a.m. can be alarming Sunday at 2 a.m. A reading four times the baseline for that window is an anomaly worth investigating." },
      { label:"What is the smarter alert trigger for this device?", hint:"The fixed 75% rule pages on normal Monday load.", options:["Keep the fixed 75% threshold on all devices","Alert only when an interface goes down","Alert on deviation from the baseline for that device and hour","Disable CPU alerting entirely"], answer:2, explain:"Deviation-from-baseline alerting pages when behavior is abnormal for that device at that time, instead of firing on load the baseline shows is routine." },
      { label:"The same NMS watches VoIP quality. Which metric matters most?", hint:"Variation in delay disrupts real-time audio.", options:["MTBF of the routers","Jitter - variation in latency","Disk IOPS on the NMS server","DNS record TTL"], answer:1, explain:"For real-time media, jitter (variation in latency) and packet loss matter as much as raw latency; high jitter breaks up voice audio." }
    ],
    summary:"A baseline converts raw metrics into meaning: 80% CPU is normal when the baseline says 78% and an anomaly when it says 20%, so alert on deviation, not a fixed number."
  },
  {
    id:"PBQ-157", format:6, domain:3,
    title:"MIBs, OIDs, and SNMP Operations",
    brief:"The NMS shows raw dotted numbers instead of sensor names for CORE-SW1, polling the 48-port interface table is slow, and the device still runs <span class='hl'>SNMPv2c with a read-write community</span>. Work through each issue.",
    exhibitTitle:"nms://device-view",
    exhibit:"<span class='dim'>NMS sensor view - CORE-SW1</span>\n<span class='warnc'>.1.3.6.1.4.1.9.9.13.1.4.1.3 = 4560</span>   <span class='dim'>(displayed as raw OID)</span>\n<span class='warnc'>.1.3.6.1.4.1.9.9.13.1.4.1.4 = 4620</span>   <span class='dim'>(displayed as raw OID)</span>\n<span class='ok'>.1.3.6.1.2.1.1.3.0 = sysUpTime: 91 days</span>\n<span class='dim'>Interface table: 48 rows retrieved one object at a time each poll cycle</span>\n<span class='cy'>Device config: SNMPv2c, RW community = private</span>",
    fields:[
      { label:"Why do the fan sensors display as raw dotted numbers?", hint:"The NMS needs the vendor's definitions to translate them.", options:["The sensors are faulty and must be re-seated","The vendor's MIB file has not been loaded into the NMS","SNMPv3 is required to resolve names","The OID tree is corrupted on the switch"], answer:1, explain:"Vendors publish MIB files defining their proprietary OIDs. Loading them into the NMS lets it translate raw numeric OIDs into human-readable sensor names." },
      { label:"What is the branch at 1.3.6.1.2.1?", hint:"The standard, non-vendor part of the tree.", options:["A private vendor enterprise branch","A syslog facility code","The standard MIB-2 branch of the OID tree","An IPv4 routing table entry"], answer:2, explain:"1.3.6.1.2.1 is the standard MIB-2 branch, where common objects like sysUpTime live. Vendor-proprietary objects sit under enterprise branches instead." },
      { label:"Which operation retrieves the 48-row interface table efficiently?", hint:"Walk many objects in one exchange instead of one GET per object.", options:["GET","SET","TRAP","GETBULK"], answer:3, explain:"GETBULK (added in v2c) retrieves many objects in one exchange, making it far more efficient than issuing 48 individual GETs per poll cycle." },
      { label:"Why is the exposed RW community string 'private' dangerous?", hint:"Read-write access means more than monitoring.", options:["An attacker who sniffs it can issue SET operations and reconfigure the device","It only allows reading sysUpTime","Nothing - community strings are hashed in transit","It only affects syslog forwarding"], answer:0, explain:"v2c sends community strings in cleartext, and the RW string authorizes SET operations - effectively remote configuration, such as shutting down a port." }
    ],
    summary:"Load vendor MIB files so the NMS can translate OIDs, use GETBULK to walk tables efficiently, and retire cleartext RW communities before someone SETs your config."
  },
  {
    id:"PBQ-158", format:6, domain:3,
    title:"Match the Monitoring Tool to the Ticket",
    brief:"Four tickets are waiting, and each needs a different visibility tier: <span class='hl'>full packet capture, flow data, SNMP polling, or a TAP</span>. Assign the right tool to each job.",
    exhibitTitle:"ticket queue",
    exhibit:"<span class='cy'>TKT-301:</span> security must reconstruct the FULL payload of a suspected exfiltration session\n<span class='cy'>TKT-302:</span> identify what is consuming the WAN - top talkers, minimal storage cost\n<span class='cy'>TKT-303:</span> plot CPU, memory, and temperature for every switch across 6 months\n<span class='cy'>TKT-304:</span> the IDS must receive EVERY frame, including corrupt ones, with zero loss",
    fields:[
      { label:"Tool for TKT-301 (reconstruct the payload)", hint:"Only one tier stores every byte.", options:["SNMP polling","sFlow sampling","Syslog review","Full packet capture"], answer:3, explain:"Only full packet capture stores every byte, letting analysts reconstruct payloads for forensics. Flow data and SNMP counters summarize, they do not store content." },
      { label:"Tool for TKT-302 (top talkers, low storage)", hint:"Summarize conversations without storing every packet.", options:["Full packet capture on the WAN router","A ping sweep of the branch","Flow data (NetFlow/IPFIX) exported to a collector","Debug-level syslog on every device"], answer:2, explain:"Flow data summarizes conversations - IPs, ports, byte counts - answering 'what is consuming bandwidth' at a fraction of packet capture's storage cost." },
      { label:"Tool for TKT-303 (device health trends)", hint:"Scheduled reads of device counters feed long-term graphs.", options:["SNMP polling into the NMS","A port-mirroring session","A passive TAP","A packet-capture ring buffer"], answer:0, explain:"SNMP polling reads CPU, memory, and temperature objects on a schedule, producing the long-term time-series data health trending needs." },
      { label:"Tool for TKT-304 (every frame, zero loss, errors included)", hint:"SPAN can drop copies and may omit malformed frames.", options:["A SPAN session on the core switch","A passive inline TAP","NetFlow with 1:1 sampling","SNMP informs"], answer:1, explain:"A passive TAP copies traffic at the wire with no oversubscription risk and includes the errors and runts a SPAN session may drop or omit." }
    ],
    summary:"Match precision to need: packet capture for payloads, flow data for bandwidth questions, SNMP polling for health trends, and a TAP when the copy must be complete."
  },
  {
    id:"PBQ-159", format:6, domain:3,
    title:"Centralize and Harden Syslog",
    brief:"All 60 network devices must log to the central collector at <span class='hl'>10.20.0.9</span>. Work through the transport, filtering, and correlation requirements.",
    exhibitTitle:"requirements",
    exhibit:"<span class='ok'>GOAL:</span> all 60 devices log to collector 10.20.0.9\n<span class='cy'>C-1:</span> phase 1 uses the default syslog transport\n<span class='cy'>C-2:</span> WAN sites need delivery that is reliable AND encrypted\n<span class='cy'>C-3:</span> devices should forward Warning and above only\n<span class='cy'>C-4:</span> events from different devices must line up during incident review",
    fields:[
      { label:"C-1: default syslog transport and port", hint:"The classic, connectionless default.", options:["UDP 514","TCP 443","UDP 161","UDP 69"], answer:0, explain:"Syslog's traditional default is UDP 514 - fast and simple, but connectionless and unencrypted. UDP 161 is SNMP and 69 is TFTP." },
      { label:"C-2: transport for the WAN sites", hint:"Reliability needs a connection; confidentiality needs encryption.", options:["UDP 514 with a bigger buffer","UDP 162","Plain TCP 514","Syslog over TLS on port 6514"], answer:3, explain:"Syslog over TLS on 6514 adds both reliable delivery and encryption. Plain TCP 514 is reliable but still sends events in cleartext." },
      { label:"C-3: 'Warning and above' forwards which severity levels?", hint:"Above means more severe - lower numbers.", options:["Levels 4 through 7","Only level 4","Levels 5 through 7","Levels 0 through 4"], answer:3, explain:"Warning is level 4, and more severe means lower numbers, so the device forwards severities 0-4 and suppresses Notice, Informational, and Debug." },
      { label:"C-4: what makes cross-device correlation possible?", hint:"Events are only comparable when their clocks agree.", options:["Raising every event to severity 0","Compressing the log archive","Synchronizing all devices to NTP so timestamps align","Using a different facility per device"], answer:2, explain:"Centralized logs are only useful when they are time-aligned; NTP-synchronized clocks let you sequence events across devices during an incident review." }
    ],
    summary:"Start with UDP 514, move sensitive paths to syslog-over-TLS 6514, forward severities 0-4 for a Warning threshold, and NTP-sync everything so events correlate."
  },
  {
    id:"PBQ-160", format:6, domain:3,
    title:"WAN Bandwidth Spike Investigation",
    brief:"The branch WAN link has jumped to <span class='hl'>95% utilization against a 40% baseline</span> and users report slow applications. Use the monitoring stack to run the investigation correctly.",
    exhibitTitle:"netmon://wan-1",
    exhibit:"<span class='cy'>LINK:</span> WAN-1 (1 Gbps to HQ)\n<span class='warnc'>UTILIZATION NOW: 95%</span>   <span class='ok'>BASELINE (this hour): 40%</span>\n<span class='dim'>sFlow (1-in-1000 sampling) exporting to collector 10.9.9.20</span>\n<span class='dim'>Top talker (estimated): 10.4.7.31 -> 203.0.113.88 : 612 Mbps</span>\n<span class='hl'>Users report slow application response at the branch.</span>",
    fields:[
      { label:"Best first step to identify what is consuming the link", hint:"The data that names the conversation already exists.", options:["Reboot the edge router to clear the congestion","Review the top-talkers report on the flow collector","Start a 24-hour full packet capture of the whole WAN","Order an upgrade to a 10 Gbps circuit"], answer:1, explain:"The flow collector already summarizes who is talking to whom and how much; its top-talkers view names the offending conversation in seconds." },
      { label:"How should you treat the 612 Mbps figure from sFlow?", hint:"Remember how sFlow builds its numbers.", options:["As an exact per-flow byte count","As encrypted and unreadable","As a statistical estimate - fine for spotting the top talker","As useless for any analysis"], answer:2, explain:"sFlow samples 1 in 1,000 packets, so its counts are statistical estimates - accurate enough to rank top talkers, but not billing-grade exact figures." },
      { label:"Where do you get the exact current load on the interface?", hint:"The NMS already polls the device's counters.", options:["Debug-level logging on the router","The wiring and patch documentation","A rack diagram of the branch","SNMP interface counters polled by the NMS"], answer:3, explain:"SNMP polling of the interface's byte counters gives the precise utilization figure, confirming what the sampled flow data estimated." },
      { label:"Peak-hour utilization keeps trending upward month over month. Which process consumes this trend data?", hint:"Trends justify growth decisions before users feel congestion.", options:["Capacity planning for a circuit upgrade","Patch management on the edge router","Cable certification of the WAN handoff","Rolling back the last configuration change"], answer:0, explain:"Sustained growth against the baseline feeds capacity planning: the trend justifies upgrading the circuit or adding a path before the link saturates. Patching, cabling, and rollbacks do not consume utilization trends." }
    ],
    summary:"Flow data names the top talker, SNMP counters confirm the exact load, sampled figures are estimates, and sustained growth in the trend feeds capacity planning."
  },
{
    id:"PBQ-161", format:6, domain:3,
    title:"Running vs Startup Config After a Reboot",
    brief:"An engineer added VLAN 45 and its SVI to distribution switch <span class='hl'>DS-2</span> yesterday afternoon. Overnight a power event rebooted the switch, and this morning the VLAN is gone. Reconstruct what happened.",
    exhibitTitle:"ds-2 console",
    exhibit:"DS-2# show vlan brief | include 45\n<span class='warnc'>(no output — VLAN 45 is not present)</span>\n\nDS-2# show startup-config | include vlan 45\n<span class='warnc'>(no output)</span>\n\n<span class='dim'>syslog 02:14:07</span>  %SYS-5-RESTART: System restarted <span class='dim'>(power event)</span>\n<span class='dim'>change log</span>      16:22 yesterday — VLAN 45 + SVI added by jchen — <span class='hl'>no save recorded</span>",
    fields:[
      { label:"Which configuration held VLAN 45 before the reboot?", hint:"Where do live, unsaved edits reside?", options:["The startup configuration in NVRAM","The running configuration in RAM","The golden configuration in the repo","The archived configuration baseline"], answer:1, explain:"The edits existed only in the running configuration, which lives in RAM and is lost when the switch reloads." },
      { label:"Why did the change disappear after the power event?", hint:"Compare what was edited with what the switch loads at boot.", options:["NVRAM was corrupted by the power surge","The golden config was pushed automatically at boot","The bootloader loaded a backup firmware image","The running config was never copied to the startup config, so the reboot loaded the last saved state"], answer:3, explain:"Because the running config was never saved to the startup config in NVRAM, the reboot loaded the last saved state, which predates VLAN 45." },
      { label:"Which step would have prevented the loss?", hint:"Persist RAM to NVRAM after a successful change.", options:["Copy the running config to the startup config","Copy the startup config to the running config","Export the golden config to NVRAM","Send the running config to the syslog server"], answer:0, explain:"Saving the running config to the startup config (copy running-config startup-config) persists changes across a reload." },
      { label:"What is the role of the golden (master) config here?", hint:"Think reference template, not automatic recovery.", options:["It is auto-loaded whenever NVRAM is empty","It records who approved each change","It is the approved reference template used to build new devices and audit live ones for drift","It is the vendor's factory-default image"], answer:2, explain:"The golden config is the approved reference template pushed to new devices for consistency and diffed against live configs to detect drift." }
    ],
    summary:"The change lived only in RAM; copying the running config to the startup config would have preserved VLAN 45 across the power-event reboot."
  },
  {
    id:"PBQ-162", format:6, domain:3,
    title:"Back-Out Plan for a Failed Firmware Upgrade",
    brief:"A firmware upgrade on distribution switch <span class='hl'>DS-1</span> is running inside its approved Sunday maintenance window, but validation has failed and time is running out. Decide how the team proceeds.",
    exhibitTitle:"ticket #7741",
    exhibit:"CHG-7741 — DS-1 firmware 17.3 -> 17.9    window: Sun 02:00-04:00\n\n01:52  <span class='ok'>pre-change: running-config exported to the config repo</span>\n01:58  new image verified, reload scheduled\n02:05  firmware 17.9 installed, switch reloaded\n02:31  <span class='warnc'>validation FAILED — OSPF neighbors stuck in EXSTART</span>\n02:40  <span class='hl'>decision point: 80 minutes left in the window</span>",
    fields:[
      { label:"What does the 01:52 config export enable?", hint:"You cannot revert to a state you never archived.", options:["Faster image transfer during the upgrade","SNMP monitoring of the reload","Executing the rollback (back-out) plan if validation fails","Skipping CAB approval for the next attempt"], answer:2, explain:"The archived config is the rollback artifact; without it there is no way to return DS-1 to its last known-good state." },
      { label:"What is the correct action at the 02:40 decision point?", hint:"Validation failed and the window is finite.", options:["Execute the back-out plan now so the switch is stable before the window closes","Keep troubleshooting into Monday business hours","Leave 17.9 in place and open a vendor case Monday","Extend the window unilaterally and retry the upgrade"], answer:0, explain:"With validation failed and limited window time, the predefined back-out plan is executed so the network is stable before users arrive." },
      { label:"What is the correct rollback order?", hint:"Reverse the change, then prove the network is healthy.", options:["Restore the archived config first, then downgrade the firmware","Boot the known-good prior image, restore the archived config, then re-validate OSPF","Erase NVRAM and rebuild the config manually from the logical diagram","Reload the switch repeatedly until adjacencies form"], answer:1, explain:"Rollback reverses the change: return to the prior image, restore the archived configuration, then re-run the same validation checks." },
      { label:"After the rollback, how is CHG-7741 closed?", hint:"Failed changes still get paperwork.", options:["Delete the failed change record","Mark the change successful to protect the team's metrics","No closure is needed — rollbacks close automatically","Document the failure and outcome in the change record and submit a new RFC for the retry"], answer:3, explain:"A failed change is documented honestly in the change record, and the retry goes back through the workflow as a new RFC." }
    ],
    summary:"A failed upgrade is reversed with the back-out plan — prior image plus the archived config — inside the window, then documented and re-attempted under a new RFC."
  },
  {
    id:"PBQ-163", format:6, domain:3,
    title:"Sequence the Change-Management Workflow",
    brief:"A new engineer drafted the plan for replacing a core router but listed the change-management steps out of order. Put the process back together.",
    exhibitTitle:"workflow draft",
    exhibit:"CHG DRAFT — core router replacement (steps as written)\n\nA. implement the change during the window\nB. <span class='cy'>CAB reviews and approves</span>\nC. submit a request for change (RFC)\nD. analyze impact and risk\nE. <span class='ok'>validate, then update diagrams / IPAM / baseline</span>\n\n<span class='dim'>note: an emergency variant exists for actively exploited vulnerabilities</span>",
    fields:[
      { label:"Which step comes first?", hint:"Nothing can be reviewed before it is requested.", options:["A — implement during the window","B — CAB approval","C — submit the RFC","D — impact and risk analysis"], answer:2, explain:"Every change begins with a request for change describing what, why, and who; nothing is analyzed or scheduled before the RFC exists." },
      { label:"What happens immediately after the RFC is submitted?", hint:"The CAB needs information before it can decide.", options:["Impact and risk analysis","CAB approval","Implementation","Validation and documentation"], answer:0, explain:"Impact and risk are analyzed first — what breaks if this fails — so the CAB has what it needs to approve or reject." },
      { label:"Who authorizes this normal change?", hint:"Submitting and approving are separate roles by design.", options:["The implementing engineer","The Change Advisory Board (CAB)","The NOC shift lead","The router vendor's TAC"], answer:1, explain:"Anyone may submit an RFC, but only the CAB authorizes a normal change — separation of duties prevents unilateral production changes." },
      { label:"What is the final step before the change is closed?", hint:"Records must keep matching reality.", options:["Reboot every affected device","Notify the ECAB","Archive the RFC without review","Update diagrams, IPAM, and the configuration baseline"], answer:3, explain:"Documentation closure updates diagrams, IPAM, and the baseline; skipping it lets the records rot until nobody trusts them." }
    ],
    summary:"The workflow runs RFC, impact analysis, CAB approval, scheduled implementation, then validation with documentation closure."
  },
  {
    id:"PBQ-164", format:6, domain:3,
    title:"Classify Standard, Normal, and Emergency Changes",
    brief:"Three tickets are sitting in Monday's change queue. Classify each one so it receives the <span class='hl'>right level of approval</span>.",
    exhibitTitle:"change queue",
    exhibit:"CHANGE QUEUE — Monday 08:10\n\nCHG-101  add VLAN 60 to access switches using the <span class='ok'>pre-approved template</span> (performed 30+ times)\nCHG-102  replace the core router chassis in the data center\nCHG-103  <span class='warnc'>patch the perimeter firewall — the CVE is being actively exploited right now</span>",
    fields:[
      { label:"How should CHG-101 (template VLAN add) be classified?", hint:"Routine, low risk, pre-authorized once.", options:["Standard (pre-approved)","Normal (full CAB review)","Emergency (ECAB)","Not a change — no approval needed"], answer:0, explain:"A routine, low-risk, template-driven task that was pre-authorized once is a standard change and needs no per-instance CAB review." },
      { label:"How should CHG-102 (core router replacement) be classified?", hint:"Large blast radius means full review.", options:["Standard (pre-approved)","Normal (full CAB review)","Emergency (ECAB)","Not a change — no approval needed"], answer:1, explain:"Replacing a core router carries enough risk to require full CAB review and scheduling within a maintenance window — a normal change." },
      { label:"How should CHG-103 (actively exploited CVE) be classified?", hint:"Action cannot wait for the next CAB meeting.", options:["Standard (pre-approved)","Normal (full CAB review)","Emergency (ECAB)","Not a change — no approval needed"], answer:2, explain:"An actively exploited vulnerability forces action first; the ECAB gives rapid authorization as an emergency change." },
      { label:"Which category completes its formal paperwork retroactively?", hint:"Governance is compressed, never skipped.", options:["Standard","Normal","Emergency","All three"], answer:2, explain:"Emergency changes compress governance: the ECAB approves quickly and the full RFC and impact analysis are documented after the fire is out." }
    ],
    summary:"Template work is standard, the router swap is a normal CAB-reviewed change, and the exploited CVE is an emergency handled by the ECAB with retroactive paperwork."
  },
  {
    id:"PBQ-165", format:6, domain:3,
    title:"Asset Inventory EOL/EOS Risk Audit",
    brief:"A quarterly lifecycle review walks the <span class='hl'>asset inventory</span> looking for hardware that can no longer be patched. Evaluate the findings.",
    exhibitTitle:"asset://inventory",
    exhibit:"ASSET INVENTORY — lifecycle report\n\nDEVICE     MODEL          DEPLOYED  VENDOR STATUS\nSW-ACC-3   CoreLine 210   2015      <span class='warnc'>end-of-support since 2024-03 — no further security patches</span>\nSW-ACC-4   CoreLine 310   2019      end-of-life announced — sales ended, support continues to 2027\nRTR-EDGE   EdgeRun 900    2023      <span class='ok'>fully supported</span>\nFW-1       SecWall 40     2021      supported — <span class='hl'>firmware three releases behind</span>",
    fields:[
      { label:"Which device poses the highest ongoing risk?", hint:"Which status means vulnerabilities will never be fixed?", options:["SW-ACC-3","SW-ACC-4","RTR-EDGE","FW-1"], answer:0, explain:"SW-ACC-3 is past end-of-support, so newly discovered vulnerabilities will never receive patches — the highest ongoing risk in the fleet." },
      { label:"What does SW-ACC-4's end-of-life status mean?", hint:"EOL is about sales; EOS is about patches.", options:["All patches stop immediately","The vendor no longer sells the product, but support and patches continue until end-of-support","The device must be removed from the network the same day","Warranty coverage is voided retroactively"], answer:1, explain:"End-of-life means sales have ended; the vendor keeps supporting and patching the product until the separate end-of-support date." },
      { label:"What is the correct handling of SW-ACC-3?", hint:"Production hardware is not swapped on a whim.", options:["Ignore it — it still passes traffic","Swap it tonight without a ticket","Submit an RFC and plan its replacement through change management","Disable SNMP on it and move on"], answer:2, explain:"Unsupported production hardware is replaced through the change-management workflow, starting with an RFC — not an unauthorized same-day swap." },
      { label:"How should FW-1's firmware lag be corrected?", hint:"Patching production gear happens at an approved time.", options:["Only after the device reaches end-of-life","Immediately during business hours with no ticket","By disabling updates to keep the platform stable","During an approved patch/maintenance window as a scheduled change"], answer:3, explain:"A supported device running old firmware is brought current as a scheduled change inside an approved maintenance window." },
      { label:"Which record tracks these EOL/EOS dates?", hint:"Serials, models, warranty, and lifecycle status live together.", options:["The logical diagram","IPAM","The site survey","The asset inventory"], answer:3, explain:"The asset inventory is the system of record for model, serial, warranty, and lifecycle status, which is what makes this audit possible." }
    ],
    summary:"Past-EOS gear is the top risk and gets a planned, RFC-driven replacement, while lagging firmware is patched in a maintenance window — all tracked in the asset inventory."
  },
  {
    id:"PBQ-166", format:6, domain:3,
    title:"Correlate Physical and Logical Diagrams",
    brief:"At 03:00 the building A to building B uplink drops and users in three VLANs lose access. The on-call engineer opens the <span class='hl'>network documentation</span> to work the problem.",
    exhibitTitle:"docs://diagrams",
    exhibit:"ALERT 03:00 — interface Te1/0/4 down/down\n\n<span class='cy'>physical view:</span> IDF-A PP-03 port 12 -- fiber F-117 -- MDF-B PP-01 port 4\n<span class='cy'>logical view :</span> VLANs 10 / 20 / 30 trunked A->B; OSPF area 0 adjacency rides VLAN 10\n\n<span class='dim'>field note: fiber F-117 found unlabeled at PP-03</span>",
    fields:[
      { label:"Which document identifies the exact fiber and patch-panel port to inspect?", hint:"Where the wires actually go.", options:["Logical diagram","Physical / wiring diagram","Asset inventory","IPAM"], answer:1, explain:"The physical/wiring diagram identifies the actual cable, patch panel, and port to inspect with your hands." },
      { label:"Which document shows which subnets and VLANs lost connectivity?", hint:"Subnets, VLANs, and routing — the flow of data.", options:["Physical diagram","Rack diagram","Logical diagram","Asset inventory"], answer:2, explain:"The logical diagram shows which subnets, VLANs, and routing adjacencies lost connectivity when the link failed." },
      { label:"The OSPF adjacency loss turned out to be one failed fiber. What is the lesson?", hint:"What looked like routing was one cable.", options:["Trust only the logical view and reconverge OSPF","Correlate both views — a logical symptom can have a physical cause","Replace OSPF with static routes","Redraw the diagrams after every alert"], answer:1, explain:"Troubleshooting almost always correlates the two views: a routing symptom on the logical diagram traced back to a single failed link on the physical one." },
      { label:"Which standard governs the labeling that F-117 is missing?", hint:"The structured-cabling labeling standard.", options:["ANSI/TIA-606","IEEE 802.1Q","RFC 1918","ISO 27001"], answer:0, explain:"ANSI/TIA-606 defines consistent port, cable, and rack labeling so a technician can trace a run end-to-end without guessing." }
    ],
    summary:"The physical diagram locates the cable, the logical diagram shows what lost connectivity, and correlating both — plus TIA-606 labeling — turns a 03:00 mystery into a quick fix."
  },
  {
    id:"PBQ-167", format:6, domain:3,
    title:"Allocate a Subnet Through IPAM",
    brief:"A VoIP rollout needs about <span class='hl'>200 new addresses</span>. Before assigning anything, the engineer checks the address plan.",
    exhibitTitle:"ipam://subnets",
    exhibit:"ipam summary — site HQ\n\nSUBNET          VLAN  PURPOSE      UTILIZATION\n10.20.4.0/24    40    voice        <span class='warnc'>78%</span>\n10.20.5.0/24    50    data         41%\n10.20.8.0/23    --    <span class='ok'>unallocated</span>  0%\n\n<span class='dim'>note: voice IPs are also tracked in VoIP_IPs.xlsx — last updated 14 months ago</span>",
    fields:[
      { label:"Which record authoritatively confirms 10.20.8.0/23 is free to assign?", hint:"The system of record for assigned and free address space.", options:["The VoIP spreadsheet","The logical diagram","The DHCP lease table alone","IPAM"], answer:3, explain:"IPAM is the authoritative record of which subnets and addresses are assigned or free, reconciled against DHCP leases and DNS records." },
      { label:"What is the risk of relying on VoIP_IPs.xlsx?", hint:"Manual records drift.", options:["Spreadsheets cannot store /23 networks","Nobody reconciles it against actual DHCP leases, so it drifts and duplicate-IP conflicts follow","It exceeds the spreadsheet row limit","Auditors cannot open .xlsx files"], answer:1, explain:"A manually maintained spreadsheet silently diverges from the live network, and duplicate-IP conflicts are the classic result." },
      { label:"The IPAM platform is sold as a DDI suite. What does DDI integrate?", hint:"Three address services working from one database.", options:["DNS, DHCP, and IPAM","Diagrams, documentation, and inventory","Discovery, diff, and inventory","DNS, DHCP, and IDS"], answer:0, explain:"DDI bundles DNS, DHCP, and IPAM so leases, name records, and the address plan stay reconciled automatically." },
      { label:"What extra benefit does allocating the /23 inside IPAM provide?", hint:"Integration eliminates manual follow-up work.", options:["It hides the allocation from the audit trail","It removes the need for DNS records","It lets the engineer skip the RFC","It can auto-create matching DNS records and DHCP scope entries, with an audit trail of who allocated the block"], answer:3, explain:"Because IPAM ties DHCP and DNS together, an allocation can automatically create the matching records and log who allocated the block, when, and why." }
    ],
    summary:"IPAM — not a stale spreadsheet — confirms 10.20.8.0/23 is free, and a DDI-integrated allocation creates matching DNS/DHCP entries with an audit trail."
  },
  {
    id:"PBQ-168", format:6, domain:3,
    title:"Document a New Rack Installation",
    brief:"An approved change added PoE access switch <span class='hl'>SW-POE-2</span> for the VoIP rollout. The install is done; now the records must catch up so the next engineer can trust them.",
    exhibitTitle:"rack r12",
    exhibit:"rack R12 — elevation (after install)\n\nU42  patch panel PP-12A\nU41  patch panel PP-12B\nU40  <span class='cy'>SW-POE-2 (new)</span>\nU39  cable management\n...\nU02  UPS-R12\n\n<span class='dim'>new uplink: SW-POE-2 Te1/0/1 -> PP-12A port 07 -> MDF</span>",
    fields:[
      { label:"Which document records that SW-POE-2 occupies U40?", hint:"U-by-U layout of equipment.", options:["Wiring map","Logical diagram","Rack diagram","Site survey"], answer:2, explain:"The rack diagram records the U-by-U placement of equipment, so SW-POE-2 is documented at U40 in rack R12." },
      { label:"Which document records that Te1/0/1 lands on PP-12A port 07?", hint:"Panel-to-port assignments.", options:["Rack diagram","Wiring / patch-panel map","Heat map","Change log"], answer:1, explain:"The wiring map captures patch-panel-to-port assignments, letting a future tech trace the uplink end-to-end." },
      { label:"Where are the switch's serial number and warranty recorded?", hint:"Serial, model, warranty, lifecycle.", options:["IPAM","Logical diagram","Site survey","Asset inventory"], answer:3, explain:"The asset inventory captures the new switch's serial number, model, warranty, and lifecycle status." },
      { label:"Where is the switch's management IP assignment recorded?", hint:"Keep the address plan matching reality.", options:["IPAM","The heat map","The SLA","The golden config"], answer:0, explain:"The management address is recorded in IPAM so the address plan stays accurate and the IP is never double-assigned." }
    ],
    summary:"Closure updates every record the install touched: rack diagram for the U-position, wiring map for the panel port, asset inventory for the serial, and IPAM for the management address."
  },
  {
    id:"PBQ-169", format:6, domain:3,
    title:"Match the Agreement to the Contract Clause",
    brief:"Acme is signing a managed SD-WAN deal. Legal forwarded four clauses from different documents — identify which <span class='hl'>agreement</span> each clause belongs to, then sanity-check the uptime promise.",
    exhibitTitle:"contract excerpts",
    exhibit:"excerpts — SD-WAN engagement\n\n1. <span class='cy'>\"Provider guarantees 99.99% monthly availability; service credits apply to any missed month.\"</span>\n2. \"Integrator shall not disclose Acme's topology, configurations, or address plan to any third party.\"\n3. \"Acme and its subsidiary NorthCo record their <span class='dim'>non-binding</span> intent to co-fund the deployment.\"\n4. \"Deliverables: cutover of 12 sites by Q3 with the attached acceptance criteria.\"",
    fields:[
      { label:"Clause 1 (availability guarantee with credits) belongs to the...", hint:"Measurable commitments with penalties.", options:["MOU","SOW","SLA","NDA"], answer:2, explain:"An uptime percentage with service credits is the defining content of a service level agreement." },
      { label:"Clause 2 (no disclosure of topology) belongs to the...", hint:"The operative verb is keep it secret.", options:["NDA","SLA","MOU","SOW"], answer:0, explain:"Confidentiality obligations belong to the non-disclosure agreement, signed before sharing architecture details with a vendor." },
      { label:"Clause 3 (non-binding intent to co-fund) belongs to the...", hint:"A handshake on paper.", options:["SLA","SOW","MOU","NDA"], answer:2, explain:"A non-binding statement of mutual intent between parties is a memorandum of understanding." },
      { label:"Clause 4 (deliverables and cutover dates) belongs to the...", hint:"Exact deliverables, scope, and milestones.", options:["SLA","NDA","MOU","SOW"], answer:3, explain:"Deliverables, dates, and acceptance criteria define the statement of work — the build project, not the running service." },
      { label:"Roughly how much yearly downtime does 99.99% allow?", hint:"Four nines.", options:["8.76 hours","52.6 minutes","5.26 minutes","3.65 days"], answer:1, explain:"Four nines allows about 52.6 minutes of downtime per year, so a single unplanned reboot can blow the entire budget." }
    ],
    summary:"Guarantee = SLA, secrecy = NDA, non-binding intent = MOU, deliverables = SOW — and four nines budgets only about 52.6 minutes of downtime a year."
  },
  {
    id:"PBQ-170", format:6, domain:3,
    title:"Nightly Configuration Drift Audit",
    brief:"The nightly configuration-backup job diffs every device against its archived reference copy. This morning it flags access switch <span class='hl'>ACC-SW-7</span> with lines nobody remembers adding.",
    exhibitTitle:"oxidized://diff acc-sw-7",
    exhibit:"oxidized diff — acc-sw-7  2026-07-04 05:00\n\n--- golden/acc-sw-7.cfg (approved baseline)\n+++ running-config (collected 05:00)\n<span class='warnc'>+ snmp-server community public RO</span>\n<span class='warnc'>+ interface Gi0/18</span>\n<span class='warnc'>+  switchport access vlan 99</span>\n\n<span class='dim'>change system: no RFC references acc-sw-7 in the last 30 days</span>",
    fields:[
      { label:"What is this untracked divergence from the approved state called?", hint:"The slow enemy of configuration management.", options:["Configuration drift","A rollback","A configuration baseline","A synthetic full backup"], answer:0, explain:"Configuration drift is the divergence of a live device from its baseline as untracked changes accumulate." },
      { label:"What reference copy is the tool diffing against?", hint:"The known-good archived template.", options:["Yesterday's syslog archive","The DHCP lease table","The archived golden config in the version-controlled repo","The vendor's factory-default template"], answer:2, explain:"Automated config-backup tools detect drift by diffing the collected running config against the archived golden copy." },
      { label:"What should have existed if these lines were authorized?", hint:"Every legitimate change leaves a paper trail.", options:["A screenshot of the console session","A verbal OK from the shift lead","An updated wireless heat map","An approved RFC in the change system"], answer:3, explain:"Any legitimate modification is tied to an approved request for change; a diff with no matching RFC is unauthorized by definition." },
      { label:"What is the correct remediation?", hint:"Do not paper over an unauthorized edit.", options:["Update the golden copy so the diff disappears","Ignore diffs smaller than five lines","Delete the archive and start a new baseline","Investigate the unauthorized change, then restore the approved baseline through change management"], answer:3, explain:"The flagged lines are investigated — an open public SNMP community is also a security exposure — and the device is returned to its approved baseline via the change process." }
    ],
    summary:"A no-RFC diff against the golden config is configuration drift from an unauthorized change: investigate it, then restore the approved baseline through change management."
  },
{
    id:"PBQ-171", format:6, domain:3,
    title:"Select DR Sites from RTO and RPO",
    brief:"The continuity committee has assigned recovery objectives to three systems. Choose the <span class='hl'>most cost-appropriate</span> recovery site and the supporting decisions for each requirement.",
    exhibitTitle:"dr worksheet",
    exhibit:"<span class='hl'>BUSINESS CONTINUITY WORKSHEET - FY26</span>\nSystem                 RTO          RPO\n<span class='cy'>Payment processing</span>     15 minutes   near-zero\n<span class='cy'>HR intranet</span>            4 days       24 hours\n<span class='cy'>File archive</span>           5 days       24 hours\n\n<span class='dim'>Directive: meet each objective at the lowest cost that satisfies it.</span>",
    fields:[
      { label:"Recovery site type for payment processing", hint:"An RTO of minutes requires a fully running, continuously synchronized duplicate.", options:["Cold site","Warm site","Cloud cold storage","Hot site"], answer:3, explain:"Only a hot site — a live, continuously replicated duplicate — can be cut over to within minutes, meeting the 15-minute RTO and near-zero RPO." },
      { label:"Recovery site type for the HR intranet and file archive", hint:"An RTO measured in days tolerates the slowest, cheapest option.", options:["Cold site","Hot site","A second hot site shared with payments","Warm site"], answer:0, explain:"A cold site provides only space, power, and cooling, and recovery from it takes days — acceptable for these systems and the lowest cost, per the directive." },
      { label:"Data protection needed for the near-zero RPO", hint:"Nightly jobs leave up to 24 hours exposed; near-zero loss demands continuous copying.", options:["Nightly full backups","Weekly differentials","Synchronous replication to the hot site","Monthly tape archive"], answer:2, explain:"Synchronous replication commits each write at both sites, bounding data loss near zero; any periodic backup leaves a much larger window." },
      { label:"DR test that proves the hot site works without touching production", hint:"The recovery site runs real workloads alongside production, not instead of it.", options:["Tabletop exercise","Parallel test","Full failover test","Checklist review"], answer:1, explain:"A parallel test brings the recovery site fully online and processes real workloads alongside production, validating RTO and RPO without the risk of a cutover." }
    ],
    summary:"Match site warmth to RTO — hot for minutes, cold for days — pair a near-zero RPO with synchronous replication, and validate the site with a parallel test."
  },
  {
    id:"PBQ-172", format:6, domain:3,
    title:"Read the Outage Timeline: RPO vs RTO",
    brief:"A database server failed mid-morning and was rebuilt from the overnight backup. Map each portion of the <span class='hl'>incident timeline</span> to the correct disaster recovery metric.",
    exhibitTitle:"incident #2214",
    exhibit:"<span class='hl'>INCIDENT #2214 - database server failure</span>\n02:00  <span class='ok'>last successful backup completed</span>\n09:30  <span class='warnc'>RAID controller fails; service down</span>\n15:30  <span class='ok'>service restored from the 02:00 backup</span>\n\n<span class='dim'>Writes committed between 02:00 and 09:30 were lost.</span>\n<span class='dim'>Business tolerance on file: maximum 4 hours of downtime.</span>",
    fields:[
      { label:"The 7.5 hours of lost data is measured against which metric?", hint:"This metric looks backward from the disaster to the last good copy.", options:["RTO","RPO","MTBF","MTTR"], answer:1, explain:"RPO is the maximum acceptable data loss measured in time — here, everything written since the 02:00 backup." },
      { label:"The 6 hours of downtime is measured against which metric?", hint:"This metric looks forward from the failure to restored service.", options:["RPO","MTTF","MTBF","RTO"], answer:3, explain:"RTO is the maximum acceptable downtime; this outage ran from 09:30 to 15:30." },
      { label:"Change that shrinks the data-loss window", hint:"A tighter RPO is bought with data-protection frequency, not site warmth.", options:["Back up or replicate more frequently","Move to a hotter recovery site","Extend the maintenance window","Buy hardware with a higher MTBF"], answer:0, explain:"RPO is bounded by how often data is protected — hourly snapshots or continuous replication shrink the loss window, while a hotter site only improves RTO." },
      { label:"Against the 4-hour tolerance, this incident...", hint:"Compare the 6-hour outage to the stated downtime limit.", options:["Met the RTO","Met the RPO","Violated the RTO","Reduced MTTR"], answer:2, explain:"Six hours of downtime exceeds the 4-hour objective, so the RTO was violated and recovery readiness must be improved." }
    ],
    summary:"RPO measures backward from the failure (data lost since the 02:00 backup), RTO measures forward (downtime), and only more frequent data protection tightens RPO."
  },
  {
    id:"PBQ-173", format:6, domain:3,
    title:"Reliability Metrics on the Ops Worksheet",
    brief:"You are completing a component reliability worksheet for the annual availability review. Classify each metric and its effect on availability correctly.",
    exhibitTitle:"reliability data",
    exhibit:"<span class='hl'>COMPONENT RELIABILITY DATA</span>\nComponent                          Metric   Value\n<span class='cy'>Edge router (repairable)</span>           MTBF     8,000 h\n<span class='cy'>Edge router (repairable)</span>           MTTR     2 h\n<span class='cy'>Sealed SSD module (replace-only)</span>   <span class='warnc'>?</span>        1,500,000 h\n\n<span class='dim'>Availability rises as failures get rarer and repairs get faster.</span>",
    fields:[
      { label:"Correct metric for the sealed, replace-only SSD module", hint:"Non-repairable parts are replaced, not returned to service.", options:["MTBF","MTTR","MTTF","RPO"], answer:2, explain:"MTTF (Mean Time To Failure) is the average lifespan of a non-repairable component; MTBF applies only to repairable systems." },
      { label:"What MTTR measures", hint:"The repair-speed side of availability.", options:["Average time to restore a failed component to service","Average time a device runs between failures","Average lifespan of single-use parts","Maximum tolerable downtime for the business"], answer:0, explain:"MTTR (Mean Time To Repair) is the average time needed to return a failed, repairable component to service." },
      { label:"Combination that raises availability", hint:"Availability is roughly MTBF divided by (MTBF + MTTR).", options:["Lower MTBF and lower MTTR","Raise MTBF and raise MTTR","Raise MTTR and lower MTBF","Raise MTBF and lower MTTR"], answer:3, explain:"Availability climbs when failures become rarer (higher MTBF) and repairs become faster (lower MTTR)." },
      { label:"What MTBF describes", hint:"The failure-frequency side of the pair.", options:["How quickly repairs complete","How often failures occur","How much data can be lost","How long a DHCP lease lasts"], answer:1, explain:"MTBF is the average running time between failures of a repairable device — a higher value means failures are rarer." }
    ],
    summary:"MTBF and MTTR describe repairable systems (failure frequency and repair speed), MTTF covers replace-only parts, and availability improves with higher MTBF and lower MTTR."
  },
  {
    id:"PBQ-174", format:6, domain:3,
    title:"Restore Order After a Midweek Crash",
    brief:"FILESRV01 runs a Sunday full backup with nightly incrementals and crashed <span class='hl'>Thursday afternoon</span>. Work out the restore and the tradeoffs behind the schedule.",
    exhibitTitle:"backup schedule",
    exhibit:"<span class='hl'>BACKUP PLAN - FILESRV01</span>\nSun 23:00      <span class='ok'>FULL</span>\nMon-Sat 23:00  <span class='cy'>INCREMENTAL</span>\n\n<span class='warnc'>Server crashed Thursday 14:10.</span>\n<span class='dim'>All backup sets verified intact and readable.</span>",
    fields:[
      { label:"Sets required to restore, in order", hint:"Incrementals capture only changes since the previous backup of any kind.", options:["Sunday's full only","Wednesday's incremental only","Sunday's full, then Monday, Tuesday, and Wednesday incrementals in order","Sunday's full plus Wednesday's incremental only"], answer:2, explain:"Each incremental holds only one night's changes, so the last full and every incremental since it must be applied in sequence." },
      { label:"If nightly differentials had run instead, the restore would need", hint:"A differential always measures from the last full.", options:["The full plus every differential in order","Wednesday's differential only","The full plus Monday's differential","The full plus Wednesday's differential only"], answer:3, explain:"A differential contains everything changed since the last full, so the restore is always exactly two sets: the full and the newest differential." },
      { label:"Why incrementals were chosen for the nightly window", hint:"Think about the size of each night's job, not the restore.", options:["They restore with the fewest sets","They copy only changes since the last backup of any kind, keeping each nightly job small and fast","They never clear the archive bit","They copy everything every night"], answer:1, explain:"Incrementals produce the smallest, fastest nightly jobs, keeping the backup window short — the tradeoff is a longer, more fragile restore chain." },
      { label:"Archive bit state after a differential runs", hint:"Only two backup types clear the bit.", options:["Left set (not cleared)","Cleared","Deleted from the file system","Set only by full backups"], answer:0, explain:"Differentials read changed files but leave the archive bit set, which is why each one keeps accumulating everything since the last full." }
    ],
    summary:"An incremental restore needs the full plus every increment in order; differentials trade a larger nightly job for a simple two-set restore."
  },
  {
    id:"PBQ-175", format:6, domain:3,
    title:"Audit a Backup Plan Against 3-2-1",
    brief:"An audit of headquarters backups found every copy <span class='hl'>online, on-site, and on the same SAN</span>. Grade the plan against the 3-2-1 rule and modern ransomware guidance.",
    exhibitTitle:"backup audit",
    exhibit:"<span class='hl'>BACKUP AUDIT - HQ FILE SERVICES</span>\nCopy 1: production volume   SAN-A, on-site, online\nCopy 2: nightly backup      <span class='warnc'>SAN-A, on-site, online</span>\nCopy 3: weekly backup       <span class='warnc'>SAN-A, on-site, online</span>\n\n<span class='dim'>Rotation scheme: none.   Last test restore: never.</span>",
    fields:[
      { label:"3-2-1 requirements this plan violates", hint:"Count the media types and the offsite copies.", options:["Only the three-copies rule","Nothing - the plan is compliant","Only the offsite-copy rule","Both the two-media-types rule and the one-offsite-copy rule"], answer:3, explain:"Three copies exist, but all sit on one media type (the same SAN) and none is offsite, so both remaining 3-2-1 requirements fail." },
      { label:"Copy that lets you recover from ransomware reaching the LAN", hint:"Malware cannot encrypt what it cannot reach or alter.", options:["A second online copy on the same SAN","A snapshot on the same volume","An air-gapped or immutable offline copy","A larger RAID group"], answer:2, explain:"An air-gapped or immutable copy cannot be reached or altered by malware on the network, which is what allows recovery without paying." },
      { label:"In GFS rotation, the monthly set is the", hint:"Daily, weekly, and monthly map to three generations.", options:["Son","Grandfather","Father","Tower"], answer:1, explain:"Grandfather-Father-Son keeps daily (son), weekly (father), and monthly (grandfather) sets for both recent granularity and long-term history." },
      { label:"What proves the backups are actually restorable", hint:"A job that reports success can still produce an unusable file.", options:["Periodic test restores","Job-success email reports","Longer retention periods","Higher-capacity tape"], answer:0, explain:"Only periodic test restores prove data can really be recovered; an untested backup that reports success creates false confidence." }
    ],
    summary:"Compliant backups need two media types and one offsite (ideally air-gapped or immutable) copy, rotated on a scheme like GFS and proven by periodic test restores."
  },
  {
    id:"PBQ-176", format:6, domain:3,
    title:"Build a DHCP Scope for a New VLAN",
    brief:"You are standing up DHCP for new <span class='hl'>VLAN 40 (10.40.0.0/24)</span>. The gateway and servers are statically addressed inside the range, and four printers must always receive the same address.",
    exhibitTitle:"scope worksheet",
    exhibit:"<span class='hl'>NEW SCOPE - VLAN 40 (10.40.0.0/24)</span>\nGateway:   10.40.0.1         <span class='cy'>static on the router</span>\nServers:   10.40.0.2 - .10   <span class='cy'>statically assigned</span>\nPrinters:  x4                <span class='warnc'>same IP every time, centrally managed options</span>\nClients:   dynamic pool\n\n<span class='dim'>A separate short-stay guest SSID scope is also planned.</span>",
    fields:[
      { label:"Protect the gateway and server addresses inside the scope with", hint:"The server must never offer these addresses to clients.", options:["A reservation for each device","An exclusion range covering 10.40.0.1 - .10","A shorter lease time","A second overlapping scope"], answer:1, explain:"An exclusion range withholds the statically assigned addresses from the pool so DHCP never hands them out and causes an IP conflict." },
      { label:"Approach for the four printers", hint:"A fixed address, but options still delivered and managed by DHCP.", options:["Static configuration on each printer's panel","An exclusion range","APIPA fallback","A DHCP reservation mapping each printer's MAC to an IP"], answer:3, explain:"A reservation permanently maps each printer's MAC to a fixed IP while the printer still leases through DHCP and receives centrally managed options." },
      { label:"Scope option that delivers the default gateway", hint:"The router option number.", options:["Option 3","Option 6","Option 15","Option 66"], answer:0, explain:"Option 3 carries the default gateway; option 6 is DNS servers, option 15 the domain name, and option 66 the TFTP/boot server." },
      { label:"Lease length for the guest SSID scope", hint:"Guests come and go; the pool must recycle before it exhausts.", options:["Very long, to reduce renewal broadcasts","Infinite, so guests keep their address","Short, so abandoned addresses return to the pool quickly","Identical to the office scope"], answer:2, explain:"Short leases reclaim addresses from departed guests quickly, preventing pool exhaustion that would leave new clients on APIPA." }
    ],
    summary:"Exclusions shield static addresses, reservations pin printers by MAC, option 3 hands out the gateway, and short leases keep a guest pool from exhausting."
  },
  {
    id:"PBQ-177", format:6, domain:3,
    title:"APIPA on One VLAN: DHCP Relay Triage",
    brief:"VLAN 50 clients self-assign <span class='hl'>169.254.x.x</span> addresses while VLAN 10, which shares a subnet with the DHCP server, leases normally. Triage the failure.",
    exhibitTitle:"ticket #3307",
    exhibit:"<span class='hl'>TICKET #3307 - VLAN 50 clients cannot reach the network</span>\nC:\\> ipconfig\n   IPv4 Address. . . . : <span class='warnc'>169.254.31.108</span>\n   Subnet Mask . . . . : 255.255.0.0\n   Default Gateway . . : (none)\n\n<span class='ok'>VLAN 10 clients (same subnet as DHCP01): leases OK</span>\n<span class='dim'>DHCP01 service health checks: passing; scope 10.50.0.0/24 is defined</span>",
    fields:[
      { label:"Most likely root cause", hint:"Routers do not forward DHCP broadcasts between subnets.", options:["The VLAN 10 scope is exhausted","A rogue DHCP server is answering first","No relay agent (ip helper-address) on the VLAN 50 interface","The DNS TTL is set too long"], answer:2, explain:"The server is healthy and its local subnet leases fine, so VLAN 50's DISCOVER broadcasts are simply never reaching it — the relay is missing." },
      { label:"What a relay agent does with the client's DISCOVER", hint:"The broadcast must become routable to cross the Layer 3 boundary.", options:["Converts the broadcast to a unicast aimed at the DHCP server and forwards it","Answers the DISCOVER locally from its own pool","Floods the broadcast to every VLAN","Drops the broadcast and logs it"], answer:0, explain:"The relay catches the local broadcast and forwards it as a unicast to the configured DHCP server across the routed network." },
      { label:"Field the relay stamps so the server picks the right scope", hint:"It records the gateway address of the receiving subnet.", options:["chaddr","TTL","SOA serial","giaddr"], answer:3, explain:"The relay records the receiving subnet in the giaddr (gateway IP address) field, telling the server which scope to draw the offer from." },
      { label:"Fix applied to the router's VLAN 50 interface", hint:"Point the interface at the central DHCP server.", options:["ip dhcp snooping","ip helper-address 10.10.0.5","switchport mode access","ntp server 10.10.0.5"], answer:1, explain:"Configuring ip helper-address on the VLAN 50 interface enables the relay, and clients lease immediately once broadcasts are forwarded." }
    ],
    summary:"APIPA on one remote VLAN while the server's own subnet leases fine points to a missing ip helper-address; the relay unicasts the broadcast and stamps giaddr."
  },
  {
    id:"PBQ-178", format:6, domain:3,
    title:"Plan a DNS Cutover with TTL",
    brief:"The public web server moves to a new address on Saturday. Prepare the <span class='hl'>example.com</span> zone so the cutover propagates quickly and cleanly.",
    exhibitTitle:"zone: example.com",
    exhibit:"<span class='hl'>$ORIGIN example.com.</span>\n@     SOA   ns1 hostmaster ( <span class='cy'>serial 2026070301</span> refresh retry expire )\nwww   <span class='warnc'>86400</span>   A      203.0.113.40\nshop  3600    CNAME  www\n@     3600    MX 10  mail\n\n<span class='dim'>Change: www moves to 198.51.100.7 on Saturday at 06:00.</span>",
    fields:[
      { label:"Preparation to make the day before the cutover", hint:"Resolvers serve cached answers until the countdown expires.", options:["Raise the www TTL to a full week","Delete the www record the night before","Lower the www TTL (for example, to 300 seconds)","Convert the A record to a CNAME"], answer:2, explain:"With an 86400-second TTL, resolvers could serve the stale address for up to a day; lowering the TTL ahead of time makes the change propagate in minutes." },
      { label:"After the edit, secondaries keep serving the old zone because", hint:"Secondaries compare one SOA value to decide whether to pull a fresh copy.", options:["AXFR is always incremental","The SOA serial number was not incremented","The TTL is now too low","A PTR record is missing"], answer:1, explain:"Secondaries compare the SOA serial to detect changes; if it is not incremented after an edit, they never pull the updated zone." },
      { label:"Rule governing the shop CNAME", hint:"An alias can only target one kind of thing.", options:["It must point to another name, never directly to an IP","It may point straight to 198.51.100.7","It belongs at the zone apex","It must carry a priority value"], answer:0, explain:"A CNAME aliases one name to another name — pointing it at a raw IP is illegal, and it cannot sit at the zone apex alongside other records." },
      { label:"Record type that maps 198.51.100.7 back to a hostname", hint:"It lives in the in-addr.arpa reverse zone.", options:["TXT","SRV","AAAA","PTR"], answer:3, explain:"PTR records provide reverse lookup from IP to name, and mail servers often check them, so the new address needs a matching PTR." }
    ],
    summary:"Lower the TTL ahead of a planned change, increment the SOA serial so secondaries sync, keep CNAMEs pointed at names, and maintain the PTR for the new address."
  },
  {
    id:"PBQ-179", format:6, domain:3,
    title:"Zone Transfers and Split-Horizon DNS",
    brief:"The corp.example zone runs one primary with two secondaries, and internal users receive <span class='hl'>different answers</span> than the internet for the same names. Identify each mechanism.",
    exhibitTitle:"dns architecture",
    exhibit:"<span class='hl'>AUTHORITATIVE DNS - corp.example</span>\n[ns1] primary            <span class='cy'>read-write zone copy</span>\n  |--> [ns2] secondary   <span class='cy'>pulls read-only copy</span>\n  |--> [ns3] secondary   <span class='cy'>pulls read-only copy</span>\n\nInternal resolvers answer employees with private IPs;\npublic servers answer the internet with <span class='warnc'>different, public IPs</span>.",
    fields:[
      { label:"How ns2 and ns3 obtain the zone", hint:"The read-only copy is pulled from the primary server.", options:["Recursive queries to the root servers","A zone transfer (AXFR/IXFR) from the primary","DHCPACK messages","Router Advertisements"], answer:1, explain:"Secondary servers pull a read-only copy of the zone from the primary via zone transfer over TCP 53." },
      { label:"Transfer type that sends only the changed records", hint:"The incremental variant.", options:["IXFR","AXFR","DoH","SOA"], answer:0, explain:"IXFR is the incremental zone transfer, sending only changes since the last sync; AXFR transfers the full zone." },
      { label:"Serving different inside and outside answers is called", hint:"Two deliberate views of one namespace.", options:["DNS tunneling","Cache poisoning","DNSSEC validation","Split-horizon (split-brain) DNS"], answer:3, explain:"Split-horizon DNS deliberately returns private IPs to internal clients and public IPs to the outside world for the same names." },
      { label:"Full zone transfers (AXFR) should be permitted to", hint:"An open transfer leaks the entire namespace to attackers.", options:["Any host that asks on TCP 53","The DHCP relay agents","Known secondary servers only","Public recursive resolvers"], answer:2, explain:"Unrestricted AXFR hands your whole internal namespace to anyone who asks, so transfers must be limited to the known secondaries." }
    ],
    summary:"Secondaries sync via AXFR/IXFR restricted to known servers, and split-horizon DNS intentionally returns different internal and external answers."
  },
  {
    id:"PBQ-180", format:6, domain:3,
    title:"Design the NTP Stratum Hierarchy",
    brief:"After an org-wide logon failure was traced to bad clocks, you are formalizing the time architecture around a <span class='hl'>GPS reference clock</span>. Label each tier of the hierarchy.",
    exhibitTitle:"time design",
    exhibit:"<span class='hl'>PROPOSED TIME ARCHITECTURE</span>\n[GPS reference clock]                stratum <span class='warnc'>?</span>\n        |\n[TIME1] directly attached server     stratum <span class='warnc'>?</span>\n        |\n[TIME2] [TIME3] sync from TIME1      stratum <span class='warnc'>?</span>\n        |\nall routers, switches, servers  ->  TIME2 / TIME3\n\n<span class='dim'>Last month: org-wide Kerberos logon failures, later tied to clock skew.</span>",
    fields:[
      { label:"Stratum of the GPS reference clock itself", hint:"The reference source is not an NTP server on the network.", options:["Stratum 0","Stratum 1","Stratum 2","Stratum 16"], answer:0, explain:"Stratum 0 is the reference clock itself (GPS, atomic); it is not directly on the network — a server attaches to it." },
      { label:"Stratum of TIME1", hint:"It is directly attached to the reference clock.", options:["Stratum 0","Stratum 1","Stratum 2","Stratum 3"], answer:1, explain:"A server directly attached to a stratum 0 source is stratum 1 — the most authoritative network time source." },
      { label:"Stratum of TIME2 and TIME3", hint:"Each hop downstream adds one to the number.", options:["Stratum 0","Stratum 1","Stratum 2","Stratum 3"], answer:2, explain:"Servers that sync from a stratum 1 server become stratum 2; every downstream hop increments the stratum by one." },
      { label:"A higher stratum number means", hint:"Count hops away from the reference.", options:["A more authoritative source","Direct attachment to a reference clock","A faster local oscillator","Farther from the reference clock and less authoritative"], answer:3, explain:"Stratum counts hops from the reference: the higher the number, the farther from the reference clock and the less authoritative the time." },
      { label:"Why drifted clocks broke the Kerberos logons", hint:"Kerberos enforces a tight clock-skew tolerance.", options:["DNS TTLs expired early","Kerberos rejects tickets when clocks skew beyond about 5 minutes","DHCP leases could not renew","The SOA serial rolled over"], answer:1, explain:"Kerberos rejects authentication tickets when clocks skew more than about five minutes, so org-wide logon failures are a classic symptom of broken NTP." }
    ],
    summary:"Stratum counts hops from the stratum 0 reference — TIME1 is stratum 1 and its downstream servers stratum 2 — and accurate time keeps Kerberos, certificates, and log correlation working."
  }
);

/* ---- Format 7 · Troubleshooting Runbook (Domain 5) ---- */
NETPLUS.pbqs.push(
{
    id:"PBQ-181", format:7, domain:5,
    title:"Run the Ticket: Seven-Step Methodology",
    brief:"Accounting cannot reach its file shares after an overnight switch replacement. Walk the ticket through the <span class='hl'>CompTIA seven-step troubleshooting methodology</span>, identifying the step in play and what the process demands next.",
    exhibitTitle:"ticket #7734",
    exhibit:"<span class='hl'>TICKET #7734</span>   priority: high   opened: 07:42\n<span class='dim'>reported by:</span> Accounting (12 users)\n<span class='dim'>symptom:</span> cannot reach \\\\FILESRV01 shares; other departments OK\n\n07:45  <span class='cy'>tech log:</span> interviewed two users; confirmed scope is VLAN 30 only\n07:51  reviewed change log: <span class='warnc'>access switch SW-ACCT replaced overnight</span>\n07:58  suspicion: uplink trunk on the new switch is missing VLAN 30\n08:04  console to SW-ACCT: show vlan brief / show interfaces trunk\n08:09  <span class='ok'>trunk output: VLAN 30 allowed AND forwarding</span> — suspicion wrong",
    fields:[
      { label:"Interviewing users and reviewing the change log at 07:45-07:51 is which step?", hint:"Gathering information, questioning users, and determining what changed all belong to step 1.", options:["Establish a theory of probable cause","Identify the problem","Test the theory to determine the cause","Document findings, actions, and outcomes"], answer:1, explain:"Questioning users, scoping the symptom, and checking what changed are all part of step 1, identify the problem." },
      { label:"Suspecting the trunk is missing VLAN 30 (07:58) belongs to which step?", hint:"Nothing has been fixed or proven yet; the technician has only formed a candidate explanation.", options:["Identify the problem","Verify full system functionality","Establish a theory of probable cause","Establish a plan of action"], answer:2, explain:"Naming a probable cause is step 2, establish a theory. It is only a theory until step 3 tests it." },
      { label:"At 08:09 the trunk output disproves the theory. What does the methodology say to do next?", hint:"Step 3 is the explicit decision point when a theory fails.", options:["Establish a new theory or escalate","Implement the solution anyway","Skip ahead to documenting findings","Reboot the switch and re-test"], answer:0, explain:"When testing does not confirm the theory, the process loops back to a new theory or escalates. You never implement a fix for a disproven cause." },
      { label:"A second theory (the VLAN 30 SVI was left shut down) is confirmed. Before touching the config, what comes next?", hint:"Between confirming the cause and making the change sits a planning step.", options:["Implement the change immediately","Verify full system functionality","Document lessons learned","Establish a plan of action and identify potential effects"], answer:3, explain:"Step 4 requires a plan of action that weighs potential effects before any change is implemented in step 5." },
      { label:"The SVI is enabled in an approved window and shares return. Which sequence correctly finishes the process?", hint:"Two steps remain after implementation, in a fixed order.", options:["Document, then verify functionality","Verify full functionality and apply preventive measures, then document","Escalate to tier 3, then close the ticket","Re-test the original theory, then close the ticket"], answer:1, explain:"Step 6 verifies the symptom is gone and nothing else broke, adding preventive measures where possible; step 7 documents findings, actions, and outcomes." }
    ],
    summary:"The seven steps run in fixed order — identify, theorize, test (looping back on failure), plan, implement, verify, document — and the exam tests knowing which step is in play and what comes next."
  },
  {
    id:"PBQ-182", format:7, domain:5,
    title:"Over-Length Run Fails at Gigabit",
    brief:"A warehouse workstation links at <span class='hl'>100 Mbps but drops repeatedly when moved to gigabit</span>. You run a certifier autotest on the drop to test your theory.",
    exhibitTitle:"certifier report",
    exhibit:"<span class='hl'>CABLE CERTIFIER — AUTOTEST</span>   link: IDF-2 port 14 to warehouse desk 9\ncable type: Cat 6 U/UTP        standard: TIA Cat 6 channel\n\nwire map          <span class='ok'>PASS</span>   (pins 1-8 straight through, no split)\nlength            <span class='warnc'>117.4 m   LIMIT 100 m   FAIL</span>\ninsertion loss    <span class='warnc'>FAIL   worst margin -3.1 dB @ 250 MHz</span>\nNEXT              <span class='ok'>PASS</span>\nreturn loss       <span class='ok'>PASS</span>\n\n<span class='dim'>symptom: trains at 100 Mbps; link drops at 1000BASE-T under load</span>",
    fields:[
      { label:"Most likely cause", hint:"The run is 17 m over the twisted-pair limit and the loss measurement fails while wiring is correct.", options:["Excessive attenuation on an over-length run","A split pair breaking the twist","A duplex mismatch on the uplink","EMI from fluorescent lighting"], answer:0, explain:"The run exceeds the 100 m limit and insertion loss (the formal measure of attenuation) fails, while wire map and NEXT pass. Signal loss over distance is the cause." },
      { label:"Why does the run work at 100 Mbps but fail at gigabit?", hint:"Attenuation is frequency-dependent.", options:["Gigabit uses only two pairs, concentrating the loss","Autonegotiation is disabled at 1000 Mbps","NEXT limits apply only to gigabit links","Higher signaling frequencies attenuate more severely on the same copper"], answer:3, explain:"Attenuation rises with frequency, so a marginal run can carry the lower frequencies of 100 Mbps yet fail at gigabit's higher signaling rates." },
      { label:"The fix", hint:"You cannot re-terminate your way out of distance.", options:["Re-terminate both ends with less untwist","Shorten the run, add an intermediate switch, or move the link to fiber","Replace the cable with copper-clad aluminum","Hardcode both ends to 1000/full"], answer:1, explain:"Attenuation from distance is fixed by shortening the run, inserting a repeater/switch mid-span, or using fiber. Forcing speed or re-terminating does not add signal." },
      { label:"Which certifier measurement formally reports attenuation across the run?", hint:"It is the 'loss' line on the report.", options:["Return loss","Wire map","Insertion loss","Propagation delay"], answer:2, explain:"Insertion loss is the certifier's measurement of attenuation across the run; the FAIL here confirms the signal arrives too weak." }
    ],
    summary:"A 117 m Cat 6 run fails insertion loss from distance-driven attenuation, so the fix is to shorten, repeat mid-span, or move to fiber — not re-terminate."
  },
  {
    id:"PBQ-183", format:7, domain:5,
    title:"Passes Continuity, Fails NEXT",
    brief:"A newly terminated conference-room drop <span class='hl'>passes a hand-held continuity tester</span> yet drops and logs CRC errors at gigabit. A full certifier autotest tells a different story.",
    exhibitTitle:"autotest results",
    exhibit:"<span class='hl'>NEW DROP: conf room B — intermittent at gigabit</span>\nhand-held continuity tester:  <span class='ok'>PASS</span>  (pins 1-8 all map end to end)\n\ncertifier autotest:\nwire map          <span class='ok'>PASS</span>   (continuity correct)\nNEXT              <span class='warnc'>FAIL   margin -8.7 dB at near end</span>\ninsertion loss    <span class='ok'>PASS</span>\nlength            <span class='ok'>62.1 m</span>\n\n<span class='dim'>CRC errors and link drops appear only at 1000BASE-T under load</span>",
    fields:[
      { label:"Most likely cause", hint:"Continuity is perfect, but the twist relationship is not.", options:["An open conductor on pins 7-8","A short between adjacent pins","A split pair — correct pins, but the wrong wires twisted together","TX/RX reversal on the patch cord"], answer:2, explain:"A split pair keeps every pin continuous end to end but pairs wires from different twists, destroying noise cancellation and driving NEXT through the floor." },
      { label:"Why did the basic continuity tester pass the run?", hint:"Think about what a cheap tester actually measures.", options:["Every pin is continuous end to end even though the wrong wires share a twist","The tester battery was low","Continuity testers cannot test solid-core cable","Auto-MDIX corrected the fault during the test"], answer:0, explain:"A continuity tester only checks that each pin connects to the matching pin. A split pair satisfies that test while still breaking the differential twist." },
      { label:"Which instrument reliably catches this fault?", hint:"It must measure crosstalk, not just wiring.", options:["A toner probe","A multimeter in resistance mode","A loopback plug","A cable certifier that measures NEXT"], answer:3, explain:"Only a certifier running frequency-domain tests like NEXT exposes a split pair; continuity-class tools all report PASS." },
      { label:"The fix", hint:"The fault lives in the terminations.", options:["Shorten the run below 100 m","Re-terminate both ends following the T568B pairing exactly","Enable jumbo frames on the port","Swap the strands at the patch panel"], answer:1, explain:"Re-terminating with the correct T568B color order restores the proper twist pairing and brings NEXT back within spec." }
    ],
    summary:"A run that passes continuity but fails NEXT is the classic split-pair signature; only a certifier catches it, and re-terminating to the correct pairing fixes it."
  },
  {
    id:"PBQ-184", format:7, domain:5,
    title:"Slow Server Link with Late Collisions",
    brief:"Users say file copies to SRV-DB <span class='hl'>crawl, yet small pings succeed</span>. You pull the switch interface counters and the server NIC settings side by side.",
    exhibitTitle:"sw1# console",
    exhibit:"<span class='cy'>SW1# show interfaces gi0/7</span>\nGigabitEthernet0/7 is up, line protocol is up\n  <span class='warnc'>Half-duplex (a-half)</span>, 100Mb/s (a-100), media 10/100/1000BaseTX\n  <span class='warnc'>1,204 runts</span>, 0 giants\n  input errors 1,982, <span class='warnc'>collisions 3,415, late collisions 289</span>\n\n<span class='cy'>SRV-DB NIC properties</span>\n  Speed and Duplex: <span class='hl'>100 Mbps Full Duplex (forced)</span>\n  NIC stats: <span class='warnc'>CRC errors incrementing</span>\n  <span class='dim'>user note: large transfers crawl; small pings are fine</span>",
    fields:[
      { label:"Most likely cause", hint:"One side is hardcoded, the other negotiated on its own.", options:["STP intermittently blocking the port","A bad patch cord","An MTU mismatch","A duplex mismatch: the server is forced 100/full while the switch port autonegotiated to half"], answer:3, explain:"A forced-full server against an auto switch port produces the classic duplex mismatch: a working but painfully slow link with late collisions, runts, and CRC errors." },
      { label:"Why did the auto side land on half duplex?", hint:"IEEE defines a safe fallback when no negotiation codes arrive.", options:["Half duplex is faster at 100 Mbps","CSMA/CD requires half duplex on copper","A hardcoded partner sends no negotiation codes, so the auto side senses speed but must fall back to half duplex","The switch port failed its self-test"], answer:2, explain:"A hardcoded port stops sending capability codes. The auto end can sense speed from the signaling but cannot detect duplex, so the standard mandates a half-duplex fallback." },
      { label:"Which counter combination points to this diagnosis?", hint:"Corruption plus collisions detected after the 64-byte window.", options:["CRC errors plus late collisions","Giants only","Output drops rising under load","Zero errors with high utilization"], answer:0, explain:"CRC errors together with late collisions strongly suggest a duplex mismatch; runts and collisions pile up on the half-duplex side." },
      { label:"The fix", hint:"Both ends must agree, and you should confirm the counters go quiet.", options:["Replace the server NIC","Set both ends to autonegotiate (or hardcode both identically), then clear counters and re-watch","Enable PortFast on the port","Shorten the cable run"], answer:1, explain:"The cure is matching settings on both ends — both auto or both forced the same. Clearing counters afterward proves the errors have actually stopped." }
    ],
    summary:"Forced 100/full on one end against auto on the other yields the textbook duplex mismatch — slow transfers, late collisions, CRC errors — fixed by configuring both sides identically."
  },
  {
    id:"PBQ-185", format:7, domain:5,
    title:"CRC Errors That Follow the Elevator",
    brief:"A mechanical-room workstation logs bursts of errors that <span class='hl'>coincide with the freight elevator running</span>. The port counters and the cable path hold the clues.",
    exhibitTitle:"sw2# counters",
    exhibit:"<span class='cy'>SW2# show interfaces fa0/12</span>\n  input errors 8,414, <span class='warnc'>CRC 8,377</span>, frame 31, overrun 0\n  <span class='ok'>collisions 0, late collisions 0</span>\n  <span class='dim'>counters cleared 2 days ago; CRC climbing ~400/hr</span>\n\n<span class='hl'>facilities note:</span> the drop crosses the mechanical room,\n<span class='warnc'>zip-tied along the same tray as the elevator motor feed</span>\nhelp desk: error bursts line up with freight elevator use",
    fields:[
      { label:"What does a high CRC count with zero collisions indicate?", hint:"The frames are being corrupted in transit, not colliding.", options:["A routing loop","A physical-media problem corrupting frames in transit","A DHCP scope failure","A duplex mismatch"], answer:1, explain:"CRC errors with no collisions point at physical media — bad cable, interference, or a dying transceiver — rather than a duplex problem, which would also show late collisions." },
      { label:"Most likely cause", hint:"The errors correlate with nearby electrical equipment cycling on.", options:["Attenuation from an over-length run","A split pair at the jack","An open on pins 4-5","EMI coupling from the elevator motor feed into the unshielded run"], answer:3, explain:"Errors that spike whenever a motor runs are the signature of EMI; the data cable bundled with the power feed is the coupling path." },
      { label:"Best way to TEST the theory before rewiring", hint:"Step 3: cheap, reversible, and it isolates the variable.", options:["Temporarily run a patch cable along a different path and watch whether CRC counters stop climbing","Replace the switch","Reload the switch and observe","Disable error counting on the port"], answer:0, explain:"A temporary reroute isolates the suspected EMI source. If the counters go quiet, the theory is confirmed before any permanent work is scheduled." },
      { label:"Permanent fix", hint:"Separation, geometry, or shielding — grounded correctly.", options:["Hardcode the port to 10/half","Use copper-clad aluminum cable instead","Reroute the drop away from the power feed (crossing at 90 degrees if needed) or use shielded cable grounded at one end","Enable jumbo frames on the port"], answer:2, explain:"EMI is beaten with distance and geometry — or shielded twisted pair with the shield grounded at a single point to avoid a ground loop." }
    ],
    summary:"CRC errors with zero collisions that track a motor's duty cycle mean EMI; test by rerouting temporarily, then fix with separation or properly grounded shielded cable."
  },
  {
    id:"PBQ-186", format:7, domain:5,
    title:"Giants on the Storage VLAN",
    brief:"Backups on the storage VLAN began failing the morning after a change window. The core uplink's error counters point at <span class='hl'>frame size</span>, not corruption.",
    exhibitTitle:"core1# counters",
    exhibit:"<span class='cy'>CORE1# show interfaces te1/0/4</span>\nTenGigabitEthernet1/0/4 is up, line protocol is up\n  <span class='hl'>MTU 1500 bytes</span>\n  input errors 12,048, CRC 0, <span class='warnc'>giants 12,048</span>\n  0 runts, <span class='ok'>collisions 0</span>\n\n<span class='hl'>change record CR-2211:</span> storage team enabled <span class='cy'>9000-byte jumbo frames</span>\non the SAN hosts last night; backups now failing on VLAN 60",
    fields:[
      { label:"In these counters, what is a 'giant'?", hint:"There is a standard maximum frame size unless jumbo support is configured.", options:["Any frame over 64 bytes","A frame with a failed FCS checksum","A frame larger than 1518 bytes arriving where jumbo frames are not enabled","A fragment left over from a collision"], answer:2, explain:"Giants are frames beyond the standard 1518-byte Ethernet maximum landing on a port that has not been configured for jumbo frames." },
      { label:"Most likely cause", hint:"Compare the host MTU in the change record with the interface MTU.", options:["The SAN hosts now send 9000-byte frames but the switch path still runs MTU 1500","A failing SFP on the uplink","EMI in the data center row","A native VLAN mismatch on the trunk"], answer:0, explain:"The hosts were set to 9000-byte jumbo frames while the switch interface still enforces 1500, so every large frame is counted as a giant and dropped." },
      { label:"The fix", hint:"MTU must agree at every hop the storage traffic crosses.", options:["Disable autonegotiation on the uplink","Configure a consistent jumbo MTU end to end along the entire storage path (or revert the hosts to 1500)","Replace the uplink cable","Enable BPDU guard on the port"], answer:1, explain:"Jumbo frames only work when both ends and every switch in the path agree on the larger MTU; otherwise the hosts must return to 1500." },
      { label:"Best way to verify after the change", hint:"Prove a full-size frame crosses the path without fragmenting.", options:["nslookup against the SAN's hostname","arp -a on a storage host","tracert to the storage VLAN gateway","A large-payload ping with the don't-fragment bit set sent across the path"], answer:3, explain:"A DF-bit ping sized near the jumbo MTU proves oversized frames now traverse every hop intact; success confirms the end-to-end MTU is consistent." }
    ],
    summary:"Giants with zero CRC errors mean an MTU disagreement — jumbo frames enabled on hosts but not the switch path — fixed by configuring a consistent MTU end to end."
  },
  {
    id:"PBQ-187", format:7, domain:5,
    title:"Locate the Fiber Break",
    brief:"The single-mode uplink between buildings A and B went dark at 10:15. A power meter shows <span class='hl'>almost no light arriving</span>, so you launch an OTDR trace to find out why.",
    exhibitTitle:"otdr://trace",
    exhibit:"<span class='hl'>fiber uplink BLDG-A to BLDG-B — down since 10:15</span>\noptical power meter at BLDG-B RX: <span class='warnc'>-38.2 dBm</span>  <span class='dim'>(baseline -7 dBm)</span>\n\nOTDR trace, launched from BLDG-A:\n  0 m      launch connector      loss 0.4 dB    <span class='ok'>ok</span>\n  96 m     fusion splice         loss 0.1 dB    <span class='ok'>ok</span>\n  <span class='warnc'>212 m    HIGH-LOSS EVENT       loss 30+ dB    reflective</span>\n  <span class='dim'>(end of trace — no fiber detected beyond event)</span>\n\nfacilities: contractor has been trenching near the 200 m mark this week",
    fields:[
      { label:"What does the power-meter reading establish against the -7 dBm baseline?", hint:"Quantify the drop from the documented healthy reading before choosing tools.", options:["Roughly 31 dB of receive light has vanished, so the physical path itself has failed","The SFP at BLDG-B was administratively shut down","The path is healthy and the outage is a routing problem","The baseline reading was recorded incorrectly"], answer:0, explain:"A fall from -7 dBm to -38.2 dBm is roughly 31 dB of missing light — far beyond dirt or a marginal splice — which confirms a physical-path failure and justifies a distance-resolved OTDR trace." },
      { label:"Which tool answers 'where along the strand is the fault?'", hint:"It times reflections and reports events by distance.", options:["An optical power meter","A visual fault locator only","An OTDR","A multimeter"], answer:2, explain:"The OTDR produces a distance-resolved trace of every splice, bend, and break, turning a 400 m mystery into one dig location." },
      { label:"Given the trace, the most likely cause", hint:"Match the 212 m event to what facilities reported.", options:["A dirty connector at BLDG-B","A complete break where the contractor trenched near the 212 m mark","TX and RX strands reversed at the patch panel","Cumulative splice loss"], answer:1, explain:"A 30+ dB reflective event with no fiber beyond it, right where excavation is under way, is a cut strand; the splices upstream are healthy." },
      { label:"After the splice repair, which tool set proves the run meets its loss budget?", hint:"A known source at one end, a meter at the other.", options:["A toner probe","A wire-map tester","A copper TDR","A light source and power meter (loss test set) measuring end-to-end dB"], answer:3, explain:"A loss test set measures total insertion loss across the repaired run, verifying it is back within the link's optical budget before traffic returns." }
    ],
    summary:"The power meter proves roughly 31 dB of light has gone missing, the OTDR converts that into a dig location at 212 m, and a loss test set certifies the repaired run against its loss budget."
  },
  {
    id:"PBQ-188", format:7, domain:5,
    title:"Flapping Uplink, Low RX Power",
    brief:"A ten-gig uplink has <span class='hl'>flapped 14 times in three hours</span>. The interface, log, and transceiver diagnostics narrow the fault to one weak signal.",
    exhibitTitle:"sw3# console",
    exhibit:"<span class='cy'>SW3# show logging | include Te1/0/1</span>\n%LINK-3-UPDOWN: Interface Te1/0/1, changed state to down\n%LINK-3-UPDOWN: Interface Te1/0/1, changed state to up\n<span class='dim'>(14 up/down transitions in 3 hours)</span>\n\n<span class='cy'>SW3# show interfaces te1/0/1</span>\n  input errors 22,391, <span class='warnc'>CRC 22,309</span>, <span class='ok'>collisions 0</span>\n\n<span class='cy'>SW3# show interfaces te1/0/1 transceiver</span>\n  Temperature 41.2 C     <span class='ok'>ok</span>\n  Tx Power   -2.1 dBm    <span class='ok'>ok</span>\n  <span class='warnc'>Rx Power   -28.4 dBm   (low alarm threshold -14.0 dBm)</span>",
    fields:[
      { label:"Most likely cause", hint:"Look at which optical reading is far below its alarm threshold.", options:["A duplex mismatch on the uplink","A routing loop","An STP topology change storm","Low received light — a dirty or damaged connector, or a failing far-end optic"], answer:3, explain:"RX power 14 dB below the alarm threshold means barely any light is arriving; that starves the receiver and produces the flaps and CRC errors." },
      { label:"Least-invasive first action", hint:"Start with the cheapest physical suspects before replacing hardware.", options:["Inspect and clean the fiber end-faces, then reseat the SFP","Replace the switch chassis","Rebuild the VLAN database","Force the port down to 1 Gbps"], answer:0, explain:"Cleaning the end-faces and reseating the optic addresses the most common causes of low RX power with minimal disruption before swapping parts." },
      { label:"Local Tx power is normal while Rx is far below threshold. What does that combination tell you?", hint:"Each reading measures light traveling in one direction only.", options:["The local transmitter is the failing component","The switch OS has a software bug","The fault sits in the incoming path — the far-end optic, the strand, or its connectors","Both directions of the link are equally degraded"], answer:2, explain:"Tx power measures the light this optic launches; Rx measures what actually arrives. A healthy Tx with a starved Rx places the fault on the receive path — the far-end transmitter, the fiber, or its connectors." },
      { label:"After swapping the optic, the correct discipline is to", hint:"Old counts stay on the interface until you reset them.", options:["Close the ticket immediately","Clear the interface counters and watch whether errors increment again","Disable logging for the interface","Hardcode the duplex setting"], answer:1, explain:"Clearing counters after the fix and re-checking separates historical errors from new ones, proving the fault is actually resolved before the ticket closes." }
    ],
    summary:"A flapping link with massive CRC errors and RX power below the low alarm is an optical-path fault: clean, reseat, or replace the optic, then clear counters to verify."
  },
  {
    id:"PBQ-189", format:7, domain:5,
    title:"PoE Camera Denied Power",
    brief:"A new PTZ camera on Gi0/18 <span class='hl'>never powers on</span>. The switch's inline-power tables and logs explain exactly why the port is being refused.",
    exhibitTitle:"sw-lobby# power",
    exhibit:"<span class='cy'>SW-LOBBY# show power inline</span>\nModule   Available(W)   Used(W)    Remaining(W)\n1        <span class='hl'>370.0</span>          <span class='warnc'>362.4</span>      <span class='warnc'>7.6</span>\n\nInterface   Admin   Oper        Power(W)   Device   Class\nGi0/18      auto    <span class='warnc'>faulty</span>      0.0        n/a      n/a\n\n<span class='cy'>SW-LOBBY# show logging | include 0/18</span>\n%ILPOWER-5-IEEE_DISCONNECT: Interface Gi0/18: PD removed\n<span class='warnc'>%ILPOWER-3-CONTROLLER_PORT_ERR: Insufficient inline power</span>\n\n<span class='dim'>new PTZ camera (Class 4, requests 25.5 W) patched to Gi0/18 today</span>",
    fields:[
      { label:"Most likely cause", hint:"Compare the watts remaining with the watts the camera requests.", options:["A defective camera","The switch's PoE budget is nearly exhausted, so the port cannot grant the 25.5 W the Class 4 camera requests","The cable run exceeds 100 m","802.1X is blocking the port"], answer:1, explain:"Only 7.6 W remains in the module's power budget, far short of the camera's 25.5 W Class 4 request, so the switch denies power and logs insufficient inline power." },
      { label:"The camera is moved to a midspan injector but still will not boot. Which tool confirms the injector is actually delivering voltage?", hint:"The question is electrical, below the network entirely.", options:["A multimeter in voltage mode","A toner probe","An OTDR","A protocol analyzer"], answer:0, explain:"A multimeter in voltage mode verifies the injector is putting out the expected volts, cleanly separating a power-delivery fault from a dead device." },
      { label:"Best fix on the switch itself", hint:"The budget, not the port, is the constraint.", options:["Disable PoE globally and use wall power everywhere","Hardcode the port to 10/half","Replace the camera with a higher-class device","Free or add PoE budget — upgrade the power supply or shift lower-priority powered devices elsewhere"], answer:3, explain:"The port is healthy; the module simply has no watts left. Upgrading the supply or shedding lower-priority PoE loads restores enough budget to power the camera." },
      { label:"What does a PoE 'class' communicate?", hint:"It is how the PD and the switch agree on a number of watts.", options:["The cable category required for power","The VLAN the device should join","The maximum power the powered device may draw, so the switch can budget for it","The manufacturer's MAC OUI"], answer:2, explain:"The class advertises the powered device's maximum draw, letting the switch reserve that wattage from its finite inline-power budget." }
    ],
    summary:"With 7.6 W remaining against a 25.5 W Class 4 request, the switch rightly denies power; the fix is more PoE budget, and a multimeter settles any injector-voltage question."
  },
  {
    id:"PBQ-190", format:7, domain:5,
    title:"New Drop Won't Train at Gigabit",
    brief:"A freshly punched reception-desk drop links reliably — but <span class='hl'>only at 100 Mbps</span>, never 1000. The wire-map result makes the reason obvious.",
    exhibitTitle:"wiremap://results",
    exhibit:"<span class='hl'>new drop: reception desk — trains at 100 Mbps, never 1000</span>\nwire-map tester:\n  pin 1 <span class='ok'>OK</span>   pin 2 <span class='ok'>OK</span>   pin 3 <span class='ok'>OK</span>   pin 6 <span class='ok'>OK</span>\n  pin 4 <span class='ok'>OK</span>   pin 5 <span class='ok'>OK</span>\n  <span class='warnc'>pin 7 OPEN     pin 8 OPEN</span>\n\n<span class='cy'>SW1# show interfaces gi0/9 status</span>\nPort    Name    Status      Vlan   Duplex   Speed\nGi0/9   RECEP   connected   10     a-full   <span class='warnc'>a-100</span>",
    fields:[
      { label:"Most likely cause", hint:"Two conductors show no continuity at all.", options:["A short between pins 7 and 8","EMI along the run","An open pair — the 7-8 conductors are broken or were never punched down","A speed mismatch configured on the switch"], answer:2, explain:"Pins 7 and 8 show no continuity, which is the definition of an open: the pair is severed or was never seated in the punch-down." },
      { label:"Why does the link still work at 100 Mbps?", hint:"Count the pairs each standard needs.", options:["Auto-MDIX repaired the broken pair","The switch ignores physical errors below gigabit","100 Mbps uses lower voltage on the same pairs","100BASE-TX needs only two pairs, while 1000BASE-T requires all four"], answer:3, explain:"Fast Ethernet runs on pairs 1-2 and 3-6, both intact here; gigabit demands all four pairs, so negotiation can never reach 1000 with pair 7-8 open." },
      { label:"Which tool reports how far down the cable the break sits?", hint:"It times a reflected pulse on copper.", options:["A TDR (time-domain reflectometer)","A toner probe","An optical light meter","A loopback plug"], answer:0, explain:"A TDR sends a pulse and times the reflection, reporting the distance to the open so you know whether the fault is at a termination or mid-run." },
      { label:"The fix", hint:"Most opens on new drops live at the terminations.", options:["Force the switch port to 1000/full","Re-terminate the 7-8 pair at both ends, fully seating the conductors, then re-run the wire map","Replace the switch","Move the jack to a different VLAN"], answer:1, explain:"Re-punching the open pair at the jack and panel restores all four pairs; a clean wire-map pass afterward confirms the drop can train at gigabit." }
    ],
    summary:"An open on pins 7-8 leaves two good pairs — enough for 100BASE-TX but not 1000BASE-T — and re-terminating the open pair restores gigabit."
  },
{
    id:"PBQ-191", format:7, domain:5,
    title:"Silent Port: Access VLAN Left at Default",
    brief:"A new Finance hire on <span class='hl'>FIN-PC14</span> gets a link light but cannot reach the file server, printers, or the Internet. The port was patched to Gi0/8 this morning; the neighboring PC on Gi0/7 works normally. Work the runbook from the switch output.",
    exhibitTitle:"sw-fin1# show interfaces status",
    exhibit:"SW-FIN1# <span class='cy'>show interfaces status</span>\nPort    Name       Status      Vlan   Duplex  Speed   Type\nGi0/7   FIN-PC13   <span class='ok'>connected</span>   30     a-full  a-1000  10/100/1000BaseTX\nGi0/8   FIN-PC14   <span class='ok'>connected</span>   <span class='warnc'>1</span>      a-full  a-1000  10/100/1000BaseTX\n\nSW-FIN1# <span class='cy'>show vlan brief</span>\nVLAN  Name       Status    Ports\n1     default    active    <span class='warnc'>Gi0/8</span>\n30    <span class='hl'>FINANCE</span>    active    Gi0/2, Gi0/3, Gi0/5, Gi0/7\n<span class='dim'>Interface counters on Gi0/8: 0 CRC, 0 collisions, negotiated 1000/full.</span>",
    fields:[
      { label:"Most likely cause", hint:"Compare the Vlan column for the working and failing ports.", options:["STP has placed Gi0/8 in a blocking state","Gi0/8 was left in default VLAN 1 instead of FINANCE VLAN 30","A speed/duplex mismatch is corrupting frames","The PC self-assigned an APIPA address because its NIC failed"], answer:1, explain:"The port is up with clean counters and full 1000/full negotiation, but it sits in VLAN 1 while every working Finance port is in VLAN 30. The PC is isolated in the wrong broadcast domain." },
      { label:"Next methodology step now that the exhibit confirms the theory", hint:"Theory tested and confirmed; what does the seven-step process call for before touching the config?", options:["Escalate to the router team","Document the outcome immediately","Re-question the user about symptoms","Establish a plan of action and identify potential effects"], answer:3, explain:"Once the theory is confirmed, the methodology moves to establishing a plan of action and identifying potential effects before implementing the change." },
      { label:"The fix", hint:"One interface-level command corrects the membership.", options:["switchport access vlan 30 on Gi0/8","switchport trunk native vlan 30 on Gi0/8","switchport mode trunk on Gi0/8","spanning-tree portfast on Gi0/8"], answer:0, explain:"Assigning the access port to VLAN 30 with \"switchport access vlan 30\" places FIN-PC14 in the Finance broadcast domain; no trunking change is involved." },
      { label:"Best verification after the change", hint:"Verify full system functionality from both the switch and the client.", options:["clear mac address-table dynamic","show spanning-tree vlan 1","show interfaces gi0/8 switchport, then ping the VLAN 30 gateway from the PC","reload the access switch"], answer:2, explain:"Confirming the access VLAN on the port and pinging the VLAN 30 gateway from the PC verifies full functionality end to end." }
    ],
    summary:"A connected port with clean counters but the wrong access VLAN isolates the host; reassign it to VLAN 30, then verify membership and gateway reachability."
  },
  {
    id:"PBQ-192", format:7, domain:5,
    title:"Native VLAN Mismatch on the Uplink Trunk",
    brief:"After a weekend hardening change, users report <span class='hl'>odd cross-subnet traffic</span> and the access switch is logging repeated CDP warnings on its uplink to the core. Follow the runbook using the log and trunk output.",
    exhibitTitle:"syslog://sw-acc3",
    exhibit:"<span class='warnc'>%CDP-4-NATIVE_VLAN_MISMATCH:</span> Native VLAN mismatch discovered on GigabitEthernet0/24 (<span class='hl'>99</span>), with SW-CORE GigabitEthernet1/0/12 (<span class='hl'>1</span>).\n<span class='dim'>(message repeating every 60 seconds)</span>\n\nSW-ACC3# <span class='cy'>show interfaces trunk</span>\nPort    Mode  Encapsulation  Status     Native vlan\nGi0/24  on    802.1q         <span class='ok'>trunking</span>   <span class='warnc'>99</span>\n\n<span class='dim'>Change log: SW-ACC3 native VLAN moved from 1 to 99 on Saturday; SW-CORE was not updated.</span>",
    fields:[
      { label:"What the log message indicates", hint:"Native VLAN is the untagged VLAN on an 802.1Q trunk.", options:["The trunk encapsulation is set to ISL","VLAN 99 has not been created on SW-ACC3","The untagged (native) VLAN differs on each end of the trunk","STP has permanently disabled the trunk"], answer:2, explain:"CDP is reporting that one trunk end sends untagged frames as VLAN 99 while the other treats untagged frames as VLAN 1 - a native VLAN mismatch." },
      { label:"Risk if the mismatch is left in place", hint:"Think about where each side delivers untagged frames.", options:["Untagged frames leak between VLAN 99 and VLAN 1, effectively merging two broadcast domains","The trunk will auto-convert to an access port","DHCP will start handing out APIPA addresses","MAC flapping will err-disable the uplink"], answer:0, explain:"Each side drops untagged frames into a different VLAN, so traffic bleeds between VLAN 99 and VLAN 1 and can hop segments - a functional and security problem." },
      { label:"The fix", hint:"Both ends of an 802.1Q trunk must agree; the hardening intent was VLAN 99.", options:["switchport mode access on both ends","Delete VLAN 99 from both switches","Set switchport trunk allowed vlan 1 on the trunk","Set switchport trunk native vlan 99 on the SW-CORE end to match"], answer:3, explain:"Completing the change by setting native VLAN 99 on SW-CORE's Gi1/0/12 makes both ends agree and preserves the hardening intent of moving off VLAN 1." },
      { label:"Best verification", hint:"Verify on both switches and watch the logs.", options:["show mac address-table on VLAN 1","show interfaces trunk on both switches and confirm the CDP mismatch logs stop","ipconfig /renew on an affected PC","show ip route on the core"], answer:1, explain:"Matching Native vlan columns on both ends plus silence from the CDP mismatch messages confirms the trunk is consistent again." }
    ],
    summary:"An 802.1Q trunk needs the same native VLAN on both ends; matching SW-CORE to VLAN 99 stops untagged frames from leaking between broadcast domains."
  },
  {
    id:"PBQ-193", format:7, domain:5,
    title:"New 10G Uplink Sits Idle: STP Blocking",
    brief:"You installed a new <span class='hl'>10G uplink</span> from SW-ACC2 to the distribution layer, yet the monitoring dashboard still shows the old 1G uplink at 92% utilization and the 10G link nearly idle. Diagnose from the spanning-tree output.",
    exhibitTitle:"sw-acc2# show spanning-tree vlan 10",
    exhibit:"SW-ACC2# <span class='cy'>show spanning-tree vlan 10</span>\nVLAN0010\n  Root ID    Priority 24586   Address 0017.5a2b.0001\n             Cost 4    Port 23 (GigabitEthernet0/23)\n\nInterface   Role  Sts   Cost   Prio.Nbr  Type\nGi0/23      Root  <span class='ok'>FWD</span>   4      128.23    P2p   <span class='dim'>old 1G uplink</span>\nTe1/0/49    Altn  <span class='warnc'>BLK</span>   <span class='warnc'>8</span>      128.49    P2p   <span class='dim'>new 10G uplink</span>\n\n<span class='dim'>netmon: Gi0/23 utilization 92%, Te1/0/49 utilization &lt;1%</span>\n<span class='dim'>change log: Te1/0/49 provisioned from the standard uplink template, which sets an STP port cost of 8.</span>",
    fields:[
      { label:"Why the 10G link carries no traffic", hint:"Look at the Role and Sts columns for Te1/0/49.", options:["STP placed Te1/0/49 in the alternate (blocking) role, so only the 1G root-port path forwards","The 10G transceiver has failed and shows no link","The native VLAN is mismatched on the new uplink","MAC flapping err-disabled the port"], answer:0, explain:"Te1/0/49 shows Altn/BLK: spanning tree sees a redundant path and is blocking the new link, leaving all VLAN 10 traffic on the 1G root port." },
      { label:"Before changing any STP values, the technician should", hint:"Step 4 of the methodology exists because STP changes cause reconvergence.", options:["Reboot both switches to force a fresh election","Disable spanning tree on VLAN 10","Plan the change and identify potential effects, since altering STP costs triggers a topology reconvergence","Clear the MAC address table on SW-ACC2"], answer:2, explain:"Adjusting STP costs forces a reconvergence that can briefly interrupt forwarding, so the methodology requires a plan of action that identifies potential effects first." },
      { label:"The fix", hint:"Make the faster path the cheapest path to the root.", options:["Set a higher STP cost on Te1/0/49","Lower the STP path cost on Te1/0/49 (or move to the long path-cost method) so the 10G link becomes the root port","Enable BPDU guard on Te1/0/49","Change the native VLAN on the old uplink"], answer:1, explain:"Reducing the port cost on the 10G interface (or using long-mode costs that properly distinguish 10G from 1G) makes it the lowest-cost path, so STP elects it as the root port and forwards on it." },
      { label:"Best verification", hint:"Confirm both the STP role change and real traffic movement.", options:["show vlan brief","show interfaces status","ipconfig /all on a client PC","show spanning-tree vlan 10 confirming Te1/0/49 is now Root/FWD, and watch its utilization climb on the dashboard"], answer:3, explain:"The port's role changing to Root/FWD plus traffic shifting onto the 10G link verifies the intended path is now in use." }
    ],
    summary:"STP was blocking the redundant 10G uplink because the 1G path had the lower cost; adjusting path cost makes the faster link the forwarding root port."
  },
  {
    id:"PBQ-194", format:7, domain:5,
    title:"Broadcast Storm from a Rogue Desk Switch",
    brief:"At 09:40 the entire second floor slows to a crawl. The access switch CPU is pegged, every port LED is <span class='hl'>solid on</span>, and syslog is scrolling MAC-flap notifications. Contain the incident, then prevent a repeat.",
    exhibitTitle:"syslog://sw-b1",
    exhibit:"<span class='warnc'>%SW_MATM-4-MACFLAP_NOTIF:</span> Host 782b.cb1a.9f30 in vlan 20 is flapping between port <span class='hl'>Gi0/5</span> and port <span class='hl'>Gi0/9</span>\n<span class='warnc'>%SW_MATM-4-MACFLAP_NOTIF:</span> Host a44c.c811.20e7 in vlan 20 is flapping between port Gi0/9 and port Gi0/5\n<span class='dim'>(dozens of hosts flapping between the same two ports)</span>\n\nSW-B1# <span class='cy'>show processes cpu | include five</span>\nCPU utilization for five seconds: <span class='warnc'>98%</span>\n\n<span class='dim'>netmon: VLAN 20 broadcast rate 184,000 pps (baseline 900 pps). Facilities note: contractor set up a desk area near Gi0/5 and Gi0/9 this morning.</span>",
    fields:[
      { label:"Most likely cause", hint:"Many MACs flapping between the same two ports means frames are looping between them.", options:["A duplicate IP address on a busy server","An unmanaged desk switch was cabled into both Gi0/5 and Gi0/9, creating a Layer 2 loop on ports without BPDU guard","A DNS server outage flooding retries","A speed/duplex mismatch on Gi0/5"], answer:1, explain:"Dozens of hosts appearing to flap between two specific ports plus a broadcast storm is the signature of a loop - here an unmanaged switch patched to two wall jacks on the same VLAN." },
      { label:"Immediate containment step", hint:"Break the loop first; root-cause cleanup comes after.", options:["Shut down one of the looped ports (Gi0/5 or Gi0/9) to break the loop","Reboot the DHCP server","Run ipconfig /flushdns on the affected PCs","Increase the STP hello timer"], answer:0, explain:"Administratively shutting one side of the loop instantly stops the storm and restores the floor while you remove the rogue switch." },
      { label:"Which exhibit evidence points to a Layer 2 loop specifically", hint:"Separate loop symptoms from IP-layer symptoms.", options:["The DHCP scope is exhausted","The trunk shows the wrong native VLAN","The same MACs flapping between two ports combined with a massive broadcast storm","The ARP cache shows two MACs for the gateway IP"], answer:2, explain:"MACFLAP notifications between a port pair plus broadcast traffic orders of magnitude above baseline are classic loop evidence; ARP conflicts and DHCP exhaustion point to different faults." },
      { label:"Preventive measure to implement during verification", hint:"Step 6 includes implementing preventive measures on access ports.", options:["Disable STP on all access ports","Raise the switch CPU alarm threshold","Set all access ports to trunk mode","Enable PortFast with BPDU guard on access ports so any BPDU heard on an access port err-disables it automatically"], answer:3, explain:"BPDU guard shuts down a PortFast access port the moment any BPDU arrives on it - including the switch's own BPDUs reflected back through an unmanaged desk switch - so a future rogue device takes down one port instead of the whole floor." }
    ],
    summary:"An unmanaged switch looping two access ports caused MAC flapping and a broadcast storm; break the loop, then deploy PortFast with BPDU guard to prevent recurrence."
  },
  {
    id:"PBQ-195", format:7, domain:5,
    title:"Gateway Off-Subnet: Local Pings Only",
    brief:"A statically configured kiosk PC can print to the local print server but cannot reach <span class='hl'>anything outside its own subnet</span>. Isolate the fault from the console output.",
    exhibitTitle:"pc-22 console",
    exhibit:"C:\\&gt; <span class='cy'>ipconfig</span>\n   IPv4 Address. . . . . . : <span class='ok'>10.40.8.57</span>\n   Subnet Mask . . . . . . : 255.255.255.0\n   Default Gateway . . . . : <span class='warnc'>10.40.9.1</span>\n\nC:\\&gt; <span class='cy'>ping 10.40.8.1</span>\n<span class='ok'>Reply from 10.40.8.1: bytes=32 time&lt;1ms TTL=255</span>  (4 of 4)\n\nC:\\&gt; <span class='cy'>ping 8.8.8.8</span>\n<span class='warnc'>PING: transmit failed. General failure.</span>  (4 of 4)\n\n<span class='dim'>Print server 10.40.8.20 responds normally.</span>",
    fields:[
      { label:"Most likely cause", hint:"Compare the gateway address against the PC's own subnet.", options:["The DNS server is unreachable","A duplicate IP address on the kiosk","The configured gateway 10.40.9.1 is not inside the PC's 10.40.8.0/24 subnet, so the PC has no usable exit","The PC self-assigned an APIPA address"], answer:2, explain:"With a /24 mask, 10.40.8.57 can only ARP for gateways in 10.40.8.0/24; 10.40.9.1 is off-subnet, so off-net packets have nowhere to go." },
      { label:"Why local pings succeed while remote pings fail", hint:"Think about which traffic needs the gateway at all.", options:["The Windows firewall blocks only outbound ICMP","On-subnet traffic is delivered directly via ARP, while off-subnet traffic must be handed to a reachable default gateway","The switch is blocking VLAN 40 on the trunk","traceroute support is disabled on the kiosk"], answer:1, explain:"Hosts deliver same-subnet frames directly after ARP resolution; only traffic leaving the subnet depends on the default gateway, which is what is broken here." },
      { label:"The fix", hint:"The router for this segment answers at .1 of the PC's own network.", options:["Change the subnet mask to 255.255.0.0","Set the PC back to DHCP-assigned APIPA","Add a host route to 8.8.8.8","Correct the default gateway to 10.40.8.1 in the static configuration"], answer:3, explain:"Setting the gateway to 10.40.8.1 - an address actually on the kiosk's subnet - restores the exit path; widening the mask would only mask the typo and break other traffic." },
      { label:"Best confirmation after the change", hint:"Prove both the first hop and an end-to-end path.", options:["ping 10.40.8.1, then tracert 8.8.8.8 and confirm the first hop is 10.40.8.1","arp -d * and nothing else","nslookup 8.8.8.8","netstat -an"], answer:0, explain:"Pinging the corrected gateway and seeing it appear as hop 1 of a completing traceroute verifies the kiosk now routes off-subnet properly." }
    ],
    summary:"A default gateway outside the host's own subnet is unreachable by ARP, so only local traffic works; pointing the kiosk at 10.40.8.1 restores off-subnet connectivity."
  },
  {
    id:"PBQ-196", format:7, domain:5,
    title:"Split-Subnet Print Server: Wrong Mask",
    brief:"Half of the office can print and half cannot, and which half works never changes. The print server was recently rebuilt with static addressing on the <span class='hl'>192.168.50.0/24</span> network. Use the test matrix to isolate the fault.",
    exhibitTitle:"ticket #5521 test matrix",
    exhibit:"PRINTSRV static config:\n   IPv4 Address : 192.168.50.200\n   Subnet Mask  : <span class='warnc'>255.255.255.128</span>\n   Gateway      : 192.168.50.1\n\nPing PRINTSRV from clients:\n   192.168.50.45   -&gt; <span class='warnc'>Request timed out</span>\n   192.168.50.62   -&gt; <span class='warnc'>Request timed out</span>\n   192.168.50.150  -&gt; <span class='ok'>Reply from 192.168.50.200</span>\n   192.168.50.201  -&gt; <span class='ok'>Reply from 192.168.50.200</span>\n\n<span class='dim'>All clients use 255.255.255.0 and gateway 192.168.50.1. Switchports show no errors.</span>",
    fields:[
      { label:"Most likely cause", hint:"Work out which addresses fall inside the server's own idea of its subnet.", options:["The print spooler service is crashing under load","STP is blocking the server's switchport","A duplicate IP conflict with a client at .45","The server's /25 mask makes it treat hosts below .128 as off-subnet, splitting the /24"], answer:3, explain:"With 255.255.255.128 at .200, the server believes its subnet is .128-.255; every failing client sits below .128, exactly matching the never-changing split." },
      { label:"Why the gateway cannot rescue the failing half", hint:"Check whether 192.168.50.1 is inside the server's computed range.", options:["The gateway 192.168.50.1 falls outside the server's computed .128-.255 range, so the server cannot even reach it to return off-subnet replies","The gateway drops all ICMP traffic","The gateway has a duplicate MAC address","The server's ARP table is full"], answer:0, explain:"The server would forward off-subnet replies to its gateway, but .1 is also outside its /25 block, so replies to the lower half are simply undeliverable." },
      { label:"The fix", hint:"Make the server agree with every other host on the segment.", options:["Move the print server to 192.168.50.100","Change all client masks to 255.255.255.128","Correct the server's mask to 255.255.255.0 to match the /24 the segment actually uses","Add a second default gateway at .129"], answer:2, explain:"Restoring the /24 mask puts the server back in the same broadcast domain boundaries as its clients and gateway; nothing else needs to change." },
      { label:"After implementing, the next methodology step is", hint:"Steps 6 and 7 close out the incident.", options:["Establish a new theory of probable cause","Verify full functionality by pinging from both halves of the /24, then document the static-config error and outcome","Escalate the ticket to the ISP","Question the obvious"], answer:1, explain:"Verification must prove both previously failing and previously working clients print, and documenting the typo helps prevent the same rebuild mistake." }
    ],
    summary:"A /25 mask on a statically built server split the /24 in half, cutting off every host below .128; correcting the mask to 255.255.255.0 restores the full segment."
  },
  {
    id:"PBQ-197", format:7, domain:5,
    title:"One VLAN on APIPA: Missing DHCP Relay",
    brief:"Fourteen tickets arrive at once, all from <span class='hl'>VLAN 20</span> users who lost connectivity after overnight core-switch maintenance. Clients on VLAN 10 and VLAN 30 are leasing addresses normally. Isolate the failure domain.",
    exhibitTitle:"pc-31 ipconfig /all",
    exhibit:"C:\\&gt; <span class='cy'>ipconfig /all</span>\n   DHCP Enabled. . . . . . . . . . : Yes\n   Autoconfiguration IPv4 Address. : <span class='warnc'>169.254.31.88</span> (Preferred)\n   Subnet Mask . . . . . . . . . . : 255.255.0.0\n   Default Gateway . . . . . . . . :\n   DHCP Server . . . . . . . . . . :\n\n<span class='dim'>helpdesk: all 14 tickets map to VLAN 20 (10.20.20.0/24). VLAN 10 and VLAN 30 clients renew leases normally against DHCP server 10.1.1.20.</span>\n<span class='dim'>change log: CORE-SW1 SVI configuration restored from backup during last night's maintenance.</span>",
    fields:[
      { label:"What the 169.254.x.x address indicates", hint:"This range has a specific name and a specific trigger.", options:["The client received no DHCP response and self-assigned an APIPA link-local address","The DNS server is down","A duplicate IP address was detected on the segment","NAT is misconfigured at the edge"], answer:0, explain:"169.254.0.0/16 is APIPA: Windows self-assigns it only after failing to reach any DHCP server, so the lease process itself is broken for these clients." },
      { label:"Best theory given that only VLAN 20 is affected", hint:"DHCP broadcasts do not cross a router without help; recall what the maintenance touched.", options:["The DHCP server service is stopped","Every affected NIC failed simultaneously","The restored VLAN 20 SVI on CORE-SW1 is missing its ip helper-address, so DHCP discovers never reach 10.1.1.20","The company-wide DHCP scope is exhausted"], answer:2, explain:"A dead server or exhausted pool would hit every VLAN; a single VLAN failing right after an SVI restore points at a lost DHCP relay (ip helper-address) on that SVI." },
      { label:"The fix", hint:"Reinstate the relay on the affected gateway interface.", options:["Statically address every VLAN 20 host","Re-add ip helper-address 10.1.1.20 to the VLAN 20 SVI on CORE-SW1","Enable DHCP snooping on the access layer","Reboot all 14 client machines"], answer:1, explain:"Restoring the helper address makes the SVI relay VLAN 20's DHCP broadcasts to 10.1.1.20 as unicast again, exactly as the other VLANs' SVIs do." },
      { label:"Client-side verification command", hint:"Force a fresh lease attempt and check the result.", options:["arp -a","nslookup 10.1.1.20","netstat -r","ipconfig /release then ipconfig /renew, confirming a 10.20.20.x lease with gateway and DNS populated"], answer:3, explain:"A successful renew replacing the APIPA address with a proper 10.20.20.x lease proves the relay path to the DHCP server works end to end." }
    ],
    summary:"APIPA addresses confined to one VLAN after an SVI restore indicate a missing ip helper-address; re-adding the DHCP relay on the VLAN 20 SVI restores leasing."
  },
  {
    id:"PBQ-198", format:7, domain:5,
    title:"Intermittent Drops from a Duplicate IP",
    brief:"An accounting workstation drops off the network for a few minutes at a time, several times a day, and Windows has flashed an <span class='hl'>address conflict</span> warning. A new lobby camera was installed this week. Trace the conflict.",
    exhibitTitle:"helpdesk trace",
    exhibit:"WKS-ACCT7 event log: <span class='warnc'>Windows has detected an IP address conflict</span>\n\nC:\\&gt; <span class='cy'>arp -a</span>   <span class='dim'>(captured 09:14)</span>\n   10.10.5.40    <span class='ok'>3c-52-82-4d-91-aa</span>    dynamic\nC:\\&gt; <span class='cy'>arp -a</span>   <span class='dim'>(captured 09:21)</span>\n   10.10.5.40    <span class='warnc'>00-1d-c9-77-30-05</span>    dynamic\n\n<span class='dim'>DHCP scope 10.10.5.0/24, range .20-.220. Active lease: 10.10.5.40 = WKS-ACCT7 (3c-52-82-4d-91-aa).</span>\n<span class='dim'>facilities: lobby camera installed Tuesday, configured with a static address.</span>",
    fields:[
      { label:"Most likely cause", hint:"A static device plus a lease for the same address is the classic recipe.", options:["A wrong subnet mask on the workstation","The camera was statically assigned 10.10.5.40 inside the DHCP scope, duplicating the workstation's lease","MAC flapping from a spanning-tree loop","DNS round robin returning stale records"], answer:1, explain:"The same IP resolving to two different MACs, an active lease for the workstation, and a new statically addressed camera inside the scope all point to a duplicate IP assignment." },
      { label:"Which exhibit evidence proves a duplicate IP rather than a Layer 2 loop", hint:"Loops flap MACs across switchports; this symptom lives in the ARP table.", options:["High CPU on the access switch","TTL expired in transit messages","An err-disabled switchport","The same IP answering with two different MAC addresses in successive arp -a captures"], answer:3, explain:"One IP alternating between two MACs in the ARP cache is duplicate-IP evidence; a loop would show the same MAC flapping between ports on the switch instead." },
      { label:"Best way to locate the offending device", hint:"Follow the second MAC through the switch, and let the OUI narrow the vendor.", options:["Look up 00-1d-c9-77-30-05 in the switch MAC address table to find its port, using the OUI to confirm the vendor","Run ipconfig /flushdns on the workstation","Ping the subnet broadcast address repeatedly","Disable the DHCP server and wait"], answer:0, explain:"The switch's MAC table maps the rogue MAC to a physical port (the camera drop), and the OUI vendor lookup corroborates that it is the camera." },
      { label:"Long-term fix", hint:"Static devices and dynamic pools must not overlap.", options:["Shorten all DHCP leases to one hour","Enable jumbo frames on the camera VLAN","Move the camera's static address outside the DHCP range, or convert it to a DHCP reservation","Disable ARP on the VLAN"], answer:2, explain:"Re-addressing the camera outside the pool (or reserving its address by MAC) removes the overlap so the conflict cannot recur." }
    ],
    summary:"A statically addressed camera inside the DHCP scope duplicated a workstation's leased IP; the flip-flopping ARP entry identifies it, and moving it out of the pool fixes it."
  },
  {
    id:"PBQ-199", format:7, domain:5,
    title:"Traceroute Dead-Ends: Missing Route to the Branch",
    brief:"A new branch subnet <span class='hl'>10.60.0.0/24</span> went live behind router BR1 this morning. Branch hosts reach local branch resources normally, but HQ administrators cannot reach any branch host. The environment uses static routing. Follow the path.",
    exhibitTitle:"hq-admin tracert",
    exhibit:"C:\\&gt; <span class='cy'>tracert 10.60.0.10</span>\n  1    &lt;1 ms   10.0.0.1     <span class='dim'>HQ-GW</span>\n  2     2 ms   10.0.0.2     <span class='dim'>CORE-R1</span>\n  3     *        *        *     <span class='warnc'>Request timed out.</span>\n  4     *        *        *     <span class='warnc'>Request timed out.</span>\n\nCORE-R1# <span class='cy'>show ip route 10.60.0.0</span>\n<span class='warnc'>% Network not in table</span>\n\n<span class='dim'>BR1 tunnel to CORE-R1 is up; BR1 holds a default route toward CORE-R1.</span>",
    fields:[
      { label:"What the traceroute reveals", hint:"The trace names the last router that still knew where to send the packet.", options:["A DNS failure at hop 2","A host firewall on 10.60.0.10","The path dies at CORE-R1, which has no route for 10.60.0.0/24","The client's TTL was set too low"], answer:2, explain:"Hops beyond CORE-R1 never answer because CORE-R1 has nowhere to forward packets for 10.60.0.0/24; the routing table lookup confirms the gap at that exact device." },
      { label:"Command output that confirms the theory on the core", hint:"Query the routing table for the specific destination network.", options:["show ip route 10.60.0.0 returning % Network not in table","show vlan brief","show mac address-table","show interfaces trunk"], answer:0, explain:"Asking the routing table directly for the branch prefix and getting % Network not in table is definitive confirmation of the missing route." },
      { label:"The fix", hint:"In a static environment, the new prefix must be added where the path breaks.", options:["Add a default route on CORE-R1 pointing at the branch","Enable spanning tree on the WAN link","NAT the branch subnet at BR1","Add ip route 10.60.0.0 255.255.255.0 with next hop BR1 on CORE-R1 (or advertise the prefix via the routing protocol)"], answer:3, explain:"A static route for 10.60.0.0/24 toward BR1 gives CORE-R1 the forwarding entry it lacks; branch-to-HQ worked only because BR1 already holds a default route back." },
      { label:"Verification and closure", hint:"Re-run the failing test, then finish the methodology.", options:["Clear the ARP cache on every HQ host","Re-run tracert 10.60.0.10 from HQ, confirm it completes through BR1, then document the added route","Reboot BR1 to refresh its tables","ipconfig /renew on branch clients"], answer:1, explain:"A completing traceroute proves the forwarding path both ways, and documenting the route addition closes out steps 6 and 7 of the methodology." }
    ],
    summary:"One-way reachability after a new subnet launch means a missing return-path route; adding the 10.60.0.0/24 route on CORE-R1 completes the path that traceroute showed breaking there."
  },
  {
    id:"PBQ-200", format:7, domain:5,
    title:"Name Resolution Down, Internet Up: DNS vs DHCP",
    brief:"Users across several floors report <span class='hl'>the Internet is down</span>, but the monitoring dashboard shows the WAN link healthy. Use the client console to decide which service actually failed.",
    exhibitTitle:"pc-40 console",
    exhibit:"C:\\&gt; <span class='cy'>ping 8.8.8.8</span>\n<span class='ok'>Reply from 8.8.8.8: bytes=32 time=18ms TTL=117</span>  (4 of 4)\n\nC:\\&gt; <span class='cy'>ping www.corp-app.com</span>\n<span class='warnc'>Ping request could not find host www.corp-app.com</span>\n\nC:\\&gt; <span class='cy'>nslookup www.corp-app.com</span>\n<span class='warnc'>DNS request timed out.</span>  timeout was 2 seconds.\nServer:  UnKnown\nAddress:  10.1.1.53\n\nC:\\&gt; <span class='cy'>ipconfig /all</span>\n   IPv4 Address : <span class='ok'>10.1.40.88</span> (Preferred)   Lease Obtained: today 08:02\n   Default Gateway : 10.1.40.1     DHCP Server : 10.1.1.20\n   DNS Servers : <span class='warnc'>10.1.1.53</span>",
    fields:[
      { label:"Which service is actually at fault", hint:"Raw IP connectivity works; only name lookups fail.", options:["DHCP - the lease is invalid","The default gateway is dropping traffic","The client NIC driver","DNS - clients cannot resolve names even though IP connectivity to the Internet works"], answer:3, explain:"Successful pings to 8.8.8.8 prove addressing, gateway, and WAN all work; only the translation of names to addresses is failing, which is DNS." },
      { label:"Which exhibit evidence rules OUT a DHCP problem", hint:"Look for a healthy, complete lease.", options:["nslookup timing out","ping by name failing","A valid non-APIPA lease obtained today with correct gateway, plus the working ping to 8.8.8.8","The switchport being up"], answer:2, explain:"DHCP clearly did its job: the client holds a fresh 10.1.40.88 lease with a functioning gateway. A DHCP failure would show APIPA or no connectivity at all." },
      { label:"Quick test to isolate a dead server from a bad record", hint:"nslookup can be pointed at an alternate resolver on the command line.", options:["nslookup www.corp-app.com 9.9.9.9 - if the alternate resolver answers, the internal server 10.1.1.53 is the failure point","arp -a on the client","ipconfig /release","Rebooting the client PC"], answer:0, explain:"Querying a different DNS server for the same name splits the problem: an answer from 9.9.9.9 proves the record exists and the fault is the unresponsive 10.1.1.53." },
      { label:"Next methodology step once the DNS server is confirmed down", hint:"The theory is confirmed; do not jump straight to changes.", options:["Document and close the ticket immediately","Establish a plan of action - restore the DNS service or repoint clients to a secondary - and identify potential effects","Re-image the affected client PCs","Flush every client's DNS cache before anything else"], answer:1, explain:"With the cause confirmed, the methodology calls for a plan of action weighing options (service restart, failover to a secondary resolver) and their effects before implementing." }
    ],
    summary:"Working IP pings with failing name lookups isolate the fault to DNS, not DHCP; testing against an alternate resolver pins it to the unresponsive internal server."
  },
{
    id:"PBQ-201", format:7, domain:5,
    title:"Adjacent-Channel Interference on Floor 2",
    brief:"Floor 2 users report Wi-Fi that crawls all day even though signal bars look full. You run a <span class='hl'>Wi-Fi analyzer</span> survey of the 2.4 GHz band from the center of the floor.",
    exhibitTitle:"wifi-analyzer://2.4ghz survey",
    exhibit:"SSID        AP       CH   WIDTH    RSSI\n<span class='cy'>CORP-WIFI</span>   AP-201   1    20 MHz   -48 dBm\n<span class='cy'>CORP-WIFI</span>   AP-202   <span class='warnc'>3</span>    20 MHz   -52 dBm\n<span class='cy'>CORP-WIFI</span>   AP-203   6    20 MHz   -50 dBm\n<span class='cy'>CORP-WIFI</span>   AP-204   <span class='warnc'>9</span>    20 MHz   -55 dBm\n<span class='cy'>CORP-WIFI</span>   AP-205   11   20 MHz   -47 dBm\n\nFloor average retry rate: <span class='warnc'>41%</span>\nNoise floor: <span class='ok'>-95 dBm (clean)</span>",
    fields:[
      { label:"Most likely cause of the slowdown", hint:"Two APs sit between the only three clean 2.4 GHz channels.", options:["Co-channel interference among APs sharing channel 6","Adjacent-channel interference from the APs on channels 3 and 9","A raised noise floor from non-Wi-Fi equipment","DFS radar events forcing channel changes"], answer:1, explain:"Channels 3 and 9 partially overlap the 1/6/11 plan, so those radios corrupt each other's frames instead of sharing airtime. The clean -95 dBm noise floor rules out non-Wi-Fi interference." },
      { label:"Why is this worse than plain co-channel interference?", hint:"Think CSMA/CA — can the radios hear and defer to each other?", options:["Overlapping radios cannot decode each other, so they never defer and transmit over one another, corrupting frames","Adjacent channels double the effective channel width","Co-channel interference only occurs on 5 GHz","Adjacent channels force the APs into 802.11b compatibility mode"], answer:0, explain:"Same-channel radios hear each other and politely take turns via CSMA/CA. Partially overlapping radios cannot decode each other, so they collide constantly — the 41% retry rate is the signature." },
      { label:"The fix", hint:"The cardinal rule of 2.4 GHz channel planning.", options:["Bond all 2.4 GHz APs to 40 MHz channels for more throughput","Raise transmit power on AP-202 and AP-204","Move every 2.4 GHz radio onto channels 1, 6, or 11 only","Disable the 2.4 GHz band entirely"], answer:2, explain:"Only channels 1, 6, and 11 never partially overlap in 2.4 GHz. Re-channeling AP-202 and AP-204 onto that plan eliminates the adjacent-channel corruption." },
      { label:"After implementing, the next methodology step", hint:"Prove the change worked before you close the ticket.", options:["Establish a new theory of probable cause","Escalate the problem to the ISP","Question users about recent environmental changes","Verify full system functionality, then document the channel plan"], answer:3, explain:"After implementation the methodology requires verifying full functionality — re-survey and confirm the retry rate fell — then documenting the findings and the new channel plan." }
    ],
    summary:"APs parked on channels 3 and 9 overlap the 1/6/11 plan and corrupt frames; moving all 2.4 GHz radios onto 1, 6, or 11 and re-verifying resolves the floor-wide slowdown."
  },
  {
    id:"PBQ-202", format:7, domain:5,
    title:"Strong Signal, Crawling Throughput",
    brief:"Break-room users say Wi-Fi collapses around lunchtime every day. Signal strength looks excellent, so you pull the <span class='hl'>client RF statistics</span> from the analyzer during the slowdown.",
    exhibitTitle:"wifi-analyzer://client stats",
    exhibit:"Client: BREAK-LAPTOP-07    AP: AP-114 (ch 6, 20 MHz)\nRSSI:            <span class='ok'>-54 dBm (strong)</span>\nNoise floor:     <span class='warnc'>-62 dBm</span>\nSNR:             <span class='warnc'>8 dB</span>\nData rate:       <span class='warnc'>5.5 Mbps (stepped down)</span>\n802.11 channel utilization: <span class='dim'>12%</span>\n\nPattern: throughput collapses <span class='hl'>11:45-13:00 daily</span>",
    fields:[
      { label:"What do these readings actually indicate?", hint:"Compare the signal to the floor beneath it.", options:["Weak coverage — the RSSI is too low","Co-channel congestion — channel utilization is saturated","Low SNR — a raised noise floor is wrecking an otherwise strong signal","DHCP scope exhaustion on the wireless VLAN"], answer:2, explain:"RSSI of -54 dBm is strong, but with the noise floor at -62 dBm only 8 dB of SNR remains, so the radio steps down to slow, robust rates. Utilization of 12% rules out congestion." },
      { label:"Best tool to identify the interference source", hint:"The noise never appears as an SSID.", options:["Wi-Fi analyzer","Heat map software","Cable certifier","Spectrum analyzer"], answer:3, explain:"A Wi-Fi analyzer decodes only 802.11 frames and is blind to non-Wi-Fi noise. A spectrum analyzer shows all RF energy in the band, revealing the actual source." },
      { label:"Most likely culprit given the daily pattern", hint:"What runs in a break room at lunch?", options:["A microwave oven raising the 2.4 GHz noise floor","A rogue AP broadcasting the corporate SSID","Radar triggering DFS on channel 6","A spanning tree topology change"], answer:0, explain:"Broadband 2.4 GHz noise that coincides with lunch hours is the classic microwave-oven signature. DFS does not apply to 2.4 GHz channel 6." },
      { label:"Best remediation", hint:"Escape the band the noise lives in.", options:["Increase AP-114 transmit power","Steer break-room clients to 5 GHz and relocate the AP away from the oven","Bond channel 6 to 40 MHz","Reinstall the client's wireless drivers"], answer:1, explain:"More transmit power cannot fix a raised noise floor. Moving clients to 5 GHz and repositioning the AP takes them out of the band the microwave pollutes." }
    ],
    summary:"A strong RSSI with a raised noise floor means low SNR; a spectrum analyzer pins the lunchtime microwave, and moving clients to 5 GHz escapes the polluted band."
  },
  {
    id:"PBQ-203", format:7, domain:5,
    title:"Dead Zone in the Far Conference Room",
    brief:"Meetings in conference room <span class='hl'>Everest</span> keep dropping off Wi-Fi. You walk the floor with an analyzer and record signal readings at three points between the room and its serving AP.",
    exhibitTitle:"site-survey://walk test",
    exhibit:"Location                 RSSI       SNR     Result\nLobby (near AP-3)        <span class='ok'>-47 dBm</span>    44 dB   <span class='ok'>solid</span>\nHallway midpoint         <span class='ok'>-63 dBm</span>    28 dB   <span class='ok'>usable</span>\nConf room Everest        <span class='warnc'>-82 dBm</span>    <span class='warnc'>9 dB</span>    drops, 1 Mbps\n\n<span class='dim'>Path notes: two concrete walls + elevator shaft between AP-3 and Everest</span>\nNoise floor: steady <span class='ok'>-91 dBm</span> at all three points",
    fields:[
      { label:"How should the -82 dBm reading be interpreted?", hint:"Closer to 0 is stronger; recall the good/weak thresholds.", options:["Excellent signal strength","Roughly average signal strength","A noise problem rather than a signal problem","Weak signal — far below the ~-65 dBm usable target"], answer:3, explain:"Around -65 dBm is good and -80 dBm is weak, so -82 dBm is below the usable range. The steady -91 dBm noise floor shows this is a signal problem, not a noise problem." },
      { label:"Most probable cause", hint:"Look at what the RF has to pass through.", options:["A raised noise floor inside the conference room","Adjacent-channel interference from a neighbor AP","Attenuation — concrete walls and the elevator shaft absorbing the signal","Band steering pushing clients off 5 GHz"], answer:2, explain:"Signal falls off steadily along the path and collapses after the concrete walls and elevator shaft, the classic absorption pattern. Nothing in the readings suggests interference." },
      { label:"Best tool to plan the fix", hint:"Visualize coverage across the whole floor plan.", options:["Spectrum analyzer","Heat map / site survey software","Protocol analyzer","Toner probe"], answer:1, explain:"Heat-map site survey software maps coverage and dead zones across the floor plan, showing exactly where a new or relocated AP would close the gap." },
      { label:"Most appropriate fix", hint:"You cannot shout through concrete — change the geometry.", options:["Add or relocate an AP so the conference room is inside a proper cell","Raise the 2.4 GHz channel width to 40 MHz","Enable WPA3 transition mode","Replace the wireless drivers on the room's laptops"], answer:0, explain:"Coverage gaps caused by structural attenuation are fixed with AP placement, not configuration. An AP positioned to serve Everest restores usable RSSI." }
    ],
    summary:"A -82 dBm reading behind concrete and an elevator shaft is a coverage gap from attenuation; a site-survey heat map guides adding or relocating an AP to cover the room."
  },
  {
    id:"PBQ-204", format:7, domain:5,
    title:"The Laptop That Refuses to Roam",
    brief:"A user's video calls drop every time she walks from her desk to the lab. The controller shows her laptop still glued to the <span class='hl'>desk-area AP</span> long after she has left it behind.",
    exhibitTitle:"wlc://client detail",
    exhibit:"Client 9C:B6:D0:41:22:8A   SSID <span class='cy'>CORP-WIFI</span>\nAssociated AP:  AP-2 (desk area)    Session: 00:41:12\nRSSI at client: <span class='warnc'>-79 dBm</span>     Retry rate: <span class='warnc'>38%</span>\nAP-5 (lab) heard by client at: <span class='ok'>-54 dBm</span>\n\nAP-2 TX power: <span class='warnc'>20 dBm (max)</span>   AP-5 TX power: <span class='warnc'>20 dBm (max)</span>\n802.11k/v roaming assistance: <span class='dim'>disabled</span>",
    fields:[
      { label:"Most likely cause", hint:"Roaming decisions belong to the client — but the WLAN can make staying too attractive.", options:["A sticky client clinging to AP-2 because max transmit power creates oversized, heavily overlapping cells","A RADIUS server outage","An IP address conflict on the laptop","DFS radar forcing AP-5 offline"], answer:0, explain:"Clients decide when to roam, and APs blasting at maximum power keep the old signal just strong enough that the client never lets go. AP-5 is clearly audible at -54 dBm, so coverage is not the issue." },
      { label:"Next methodology step after forming this theory", hint:"You have a theory — prove it before changing the WLAN.", options:["Document findings immediately","Test the theory: force the client to reassociate while standing in the lab and watch which AP it joins","Replace AP-2","Establish a plan of action"], answer:1, explain:"The methodology says test the theory before acting. If a forced reassociation in the lab lands the client on AP-5 at a healthy rate, the sticky-client theory is confirmed." },
      { label:"Best WLAN-side fix", hint:"Shrink the cells and nudge weak clients off.", options:["Raise AP-2 transmit power even higher","Disable the 5 GHz radio on AP-5","Rename the SSID in the lab area","Reduce AP transmit power for proper cell overlap and enable 802.11k/v roaming assistance"], answer:3, explain:"Right-sized cells make the old AP's signal degrade sooner, and 802.11k/v gives the client neighbor information and a nudge so it hands off at a sensible point." },
      { label:"How to verify the fix", hint:"Recreate the original failure path.", options:["Ping the WLC from the wired LAN","Check DHCP scope utilization","Walk the same desk-to-lab path on a live call and confirm the client hands off to AP-5 without a drop","Run a cable certifier on AP-2's uplink drop"], answer:2, explain:"Verification means reproducing the original failure scenario and confirming it no longer occurs: the same walk should now show a clean handoff to AP-5 mid-call." }
    ],
    summary:"Max-power APs with no roaming assistance breed sticky clients; shrinking the cells and enabling 802.11k/v makes the laptop hand off to the lab AP at the right moment."
  },
  {
    id:"PBQ-205", format:7, domain:5,
    title:"Dual-Band Clients Piled onto 2.4 GHz",
    brief:"New Wi-Fi 6 laptops are complaining about slow wireless even at short range. The controller's <span class='hl'>radio load table</span> tells the story.",
    exhibitTitle:"wlc://radio load",
    exhibit:"AP-31  2.4 GHz (ch 6):    <span class='warnc'>38 clients   airtime 91%</span>\nAP-31  5 GHz  (ch 44):    <span class='ok'>3 clients    airtime 7%</span>\nAP-32  2.4 GHz (ch 1):    <span class='warnc'>41 clients   airtime 94%</span>\nAP-32  5 GHz  (ch 149):   <span class='ok'>2 clients    airtime 5%</span>\n\nSSID <span class='cy'>CORP-WIFI</span> broadcast on both bands    Band steering: <span class='warnc'>OFF</span>\nClient capability sample: <span class='hl'>87% are 5 GHz / Wi-Fi 6 capable</span>",
    fields:[
      { label:"Most likely cause of the slow speeds", hint:"Compare the per-radio load against what the clients are capable of.", options:["Not enough DHCP leases for the wireless VLAN","Capable clients defaulting to the congested 2.4 GHz band because nothing steers them to 5 GHz","WPA3 incompatibility with the new laptops","A spanning tree loop between the two APs"], answer:1, explain:"Nearly every client sits on 2.4 GHz radios running above 90% airtime while the 5 GHz radios idle, even though 87% of clients support 5 GHz. With band steering off, many clients simply latch onto the longer-range 2.4 GHz band." },
      { label:"Best configuration change", hint:"Let the infrastructure nudge dual-band clients toward the cleaner band.", options:["Disable the 5 GHz radios","Lower the 2.4 GHz channel width","Enable band steering so dual-band clients prefer 5 GHz","Set all radios to channel 6"], answer:2, explain:"Band steering encourages dual-band-capable clients to associate on 5 GHz, draining load off the three crowded 2.4 GHz channels and onto the many cleaner 5 GHz channels." },
      { label:"What about the 13% of clients that are 2.4 GHz-only?", hint:"Steering must not strand legacy devices.", options:["They continue to use 2.4 GHz; band steering only steers clients that support 5 GHz","They will be permanently disconnected","They must all be replaced before steering can be enabled","They automatically move to 6 GHz"], answer:0, explain:"Band steering never blocks single-band clients; devices that only speak 2.4 GHz still associate there. It simply relocates the dual-band majority." },
      { label:"How to verify the change worked", hint:"Same table, new numbers.", options:["Run a cable test on the AP uplinks","Reboot the DHCP server","Check the RADIUS accounting log","Re-check the radio load table and confirm dual-band clients now sit on 5 GHz with airtime rebalanced"], answer:3, explain:"The proof is the same load table after the change: 5 GHz radios carrying most clients and 2.4 GHz airtime dropping well below saturation." }
    ],
    summary:"With band steering off, dual-band clients crowd the saturated 2.4 GHz radios; enabling steering shifts the capable majority to 5 GHz while legacy devices stay served."
  },
  {
    id:"PBQ-206", format:7, domain:5,
    title:"Secure SSID Down: 802.1X Failures",
    brief:"Since last night nobody can join the <span class='hl'>CORP-SECURE</span> (802.1X) SSID, yet the WPA2-PSK guest network works perfectly. The controller's auth log is filling fast.",
    exhibitTitle:"wlc://auth log",
    exhibit:"22:14:03 <span class='warnc'>%DOT1X-5-FAIL</span> Client a4:83:e7:5d:10:22 failed EAP on SSID CORP-SECURE\n22:14:03 <span class='warnc'>%RADIUS-4-TIMEOUT</span> No response from RADIUS <span class='cy'>10.0.5.20:1812</span> (5 retries)\n22:14:09 <span class='warnc'>%RADIUS-4-TIMEOUT</span> No response from RADIUS <span class='cy'>10.0.5.20:1812</span> (5 retries)\n22:14:09 <span class='warnc'>%DOT1X-5-FAIL</span> Client 30:59:b7:81:c4:07 failed EAP on SSID CORP-SECURE\n\nGUEST-WIFI (WPA2-PSK): <span class='ok'>clients joining normally</span>\n<span class='dim'>Change log: firewall policy update deployed 21:50</span>",
    fields:[
      { label:"What does the working guest SSID tell you?", hint:"Scope the problem: what do the failing and working paths NOT share?", options:["The RF environment is the problem","Every client supplicant is misconfigured","APs and RF are healthy — the failure is specific to the 802.1X/RADIUS authentication path","DNS resolution is down"], answer:2, explain:"Guests associate and pass traffic fine, so radios, APs, and DHCP all work. The only piece unique to CORP-SECURE is the 802.1X exchange with the RADIUS server." },
      { label:"Most likely cause", hint:"Correlate the failure start time with the change log.", options:["The 21:50 firewall change now blocks UDP 1812 to the RADIUS server","The guest pre-shared key was rotated","The APs lost PoE power","Channel overlap on 2.4 GHz"], answer:0, explain:"RADIUS timeouts (not rejects) mean the server never answers, and the failures began right after a firewall policy push. A rule blocking UDP 1812/1813 to 10.0.5.20 fits every symptom." },
      { label:"Best step to test the theory", hint:"Confirm reachability of the auth server on its port.", options:["Rebuild the WLC configuration from scratch","Change CORP-SECURE to WPA2-PSK","Reboot every access point","From the WLC, run a test authentication against 10.0.5.20 and inspect the new firewall rules for UDP 1812/1813"], answer:3, explain:"A controller-sourced test authentication proves whether RADIUS traffic reaches the server, and reviewing the 21:50 policy confirms or clears the suspected rule without disruptive changes." },
      { label:"After restoring the firewall rule, the final methodology steps", hint:"Two steps always close the loop.", options:["Escalate, then reboot the controller","Verify clients authenticate to CORP-SECURE again, then document the cause and the fix","Establish a theory, then test the theory","Duplicate the problem, then question users"], answer:1, explain:"Once the fix is in, the methodology finishes with verification of full functionality and documentation so the next firewall change does not repeat the outage." }
    ],
    summary:"RADIUS timeouts that started right after a firewall push point to blocked UDP 1812; restoring the rule, verifying 802.1X logons, and documenting closes the incident."
  },
  {
    id:"PBQ-207", format:7, domain:5,
    title:"The Captive Portal That Never Loads",
    brief:"Visitors join <span class='hl'>GUEST-WIFI</span> and receive an address, but the sign-in page never appears — browsers just spin. You run checks from a borrowed guest laptop.",
    exhibitTitle:"guest laptop / onboarding checks",
    exhibit:"&gt; ipconfig\n  IPv4 Address: <span class='ok'>172.31.40.87</span>   Mask: 255.255.255.0   GW: 172.31.40.1\n&gt; ping 172.31.40.1\n  <span class='ok'>Reply from 172.31.40.1: time=2ms (x4)</span>\n&gt; nslookup portal.guest.corp\n  <span class='warnc'>DNS request timed out. Server: 9.9.9.9</span>\n\nClient DNS: <span class='warnc'>manually set to 9.9.9.9</span>\n<span class='dim'>Portal design: pre-auth walled garden permits only the portal and DNS via 172.31.40.1</span>",
    fields:[
      { label:"Most likely cause", hint:"Compare the DNS server the client is using with what the walled garden permits.", options:["APIPA address — DHCP failed","Wrong default gateway on the client","The RADIUS server is offline","The client's hard-coded external DNS is blocked by the walled garden, so the lookup that triggers the portal redirect never completes"], answer:3, explain:"DHCP, addressing, and the gateway all check out. Pre-auth, the network only allows DNS through 172.31.40.1, so queries sent to 9.9.9.9 die and the redirect never fires." },
      { label:"Why did the client get a valid IP but no portal?", hint:"DHCP and the redirect are separate stages of captive-portal onboarding.", options:["The DHCP scope is exhausted","Before authentication the walled garden permits only DNS and the portal itself; the redirect depends on a DNS lookup this client sends to a blocked resolver","802.11 association failed silently","The SSID is hidden from probe requests"], answer:1, explain:"Association and DHCP happen before portal authentication, which is why the client has a working IP. The portal appears only after a permitted DNS lookup lets the gateway intercept and redirect the browser." },
      { label:"Fastest way to confirm the theory on the spot", hint:"Put the client back on the resolver the garden allows.", options:["Factory-reset the access point","Swap the AP's patch cable","Set the client back to DHCP-assigned DNS and retry the portal","Disable the walled garden entirely"], answer:2, explain:"Reverting to the DHCP-issued resolver takes seconds and isolates the variable: if the portal now loads, the blocked-DNS theory is proven without touching infrastructure." },
      { label:"Durable fix for all future guests", hint:"Guests will arrive with every DNS setting imaginable — design for it.", options:["Have the gateway intercept and answer DNS for unauthenticated clients regardless of which resolver they request","Print the portal URL on lobby posters","Move guests to WPA3-Enterprise","Increase the DHCP lease time"], answer:0, explain:"DNS interception for pre-auth clients makes the redirect work no matter what resolver a visitor has hard-coded, which is exactly how resilient captive portals are built." }
    ],
    summary:"A guest with hard-coded public DNS never completes the lookup the portal redirect depends on; intercepting pre-auth DNS at the gateway fixes onboarding for every client."
  },
  {
    id:"PBQ-208", format:7, domain:5,
    title:"Choppy VoIP on an Uncongested Link",
    brief:"Users describe calls to the branch as <span class='hl'>robotic and choppy</span>, yet the bandwidth graphs look healthy. You quantify the path with a 100-packet sample.",
    exhibitTitle:"ping session / wan graphs",
    exhibit:"&gt; ping -n 100 voip-gw.corp.local\n  Packets: Sent = 100, Received = 100, Lost = 0 <span class='ok'>(0% loss)</span>\n  Approximate round trip times:\n  Minimum = <span class='cy'>8ms</span>, Maximum = <span class='warnc'>187ms</span>, Average = <span class='cy'>24ms</span>\n\nWAN link (100 Mbps): peak utilization <span class='ok'>34%</span>\n<span class='dim'>Voice: G.711 over RTP, no QoS policy applied</span>",
    fields:[
      { label:"Which metric is wrecking the calls?", hint:"Look at the spread between min and max, not the average.", options:["Jitter — the RTT swings from 8 ms to 187 ms between packets","Packet loss","Insufficient bandwidth","High average latency"], answer:0, explain:"Zero loss and a 24 ms average are fine, but the huge min-max spread means wildly variable delay between consecutive packets. That variation is jitter, which turns voice choppy and robotic." },
      { label:"Why would a bandwidth upgrade NOT help?", hint:"Match the remediation to the metric.", options:["Because packet loss is the real issue","Because G.711 is the wrong codec","Because the latency is caused by geographic distance","More pipe does nothing for delay variation when the link peaks at 34% — variable queuing is the problem"], answer:3, explain:"Adding bandwidth is useless against jitter, especially on a link that never gets close to saturation. The voice packets are being queued unpredictably, not starved." },
      { label:"The fix", hint:"Prioritize the real-time stream.", options:["Replace the WAN router","Apply QoS to prioritize the RTP voice traffic and shorten queue depth","Move the phones to Wi-Fi","Increase the DHCP lease time on the voice VLAN"], answer:1, explain:"QoS puts RTP in a priority queue so voice packets stop waiting behind bursty data, which flattens the delay variation that causes the choppiness." },
      { label:"How to verify", hint:"Re-measure the same numbers that proved the problem.", options:["Check the switch MAC address tables","Reboot the voice gateway","Repeat the 100-packet sample, confirm the min-max spread has tightened, and place a test call","Run a port scan of the voice VLAN"], answer:2, explain:"Verification repeats the measurement that quantified the fault: a tight RTT spread after QoS, plus a clean live call, proves the jitter is gone." }
    ],
    summary:"Zero loss with an 8-187 ms RTT swing is jitter, not a bandwidth problem; a QoS policy prioritizing RTP flattens the variation and restores call quality."
  },
  {
    id:"PBQ-209", format:7, domain:5,
    title:"Broadcast Storm Takes Down a Floor",
    brief:"Every device on floor 3 is suddenly slow or unreachable and the access switch is barely responding. You grab console output before it locks up.",
    exhibitTitle:"sw-f3# console",
    exhibit:"SW-F3# show processes cpu | include CPU\n  CPU utilization: <span class='warnc'>98%/91%</span>\nSW-F3# show interfaces gi0/7 | include broadcast\n  Received <span class='warnc'>48,229,114 broadcasts</span> <span class='dim'>(counter climbing by millions/min)</span>\n\n<span class='warnc'>%SW_MATM-4-MACFLAP_NOTIF</span>: Host 60:45:cb:12:9f:03 flapping between <span class='cy'>Gi0/7</span> and <span class='cy'>Gi0/12</span>\n<span class='warnc'>%SW_MATM-4-MACFLAP_NOTIF</span>: Host a0:36:9f:77:c2:1e flapping between <span class='cy'>Gi0/7</span> and <span class='cy'>Gi0/12</span>\n\n<span class='dim'>Note: an intern tidied patch cables in the floor-3 IDF this morning</span>",
    fields:[
      { label:"Most likely cause", hint:"The same hosts flapping between two ports is the classic signature.", options:["A failing NIC broadcasting corrupt frames","A Layer 2 loop — the same frames arriving on both Gi0/7 and Gi0/12 with spanning tree not blocking either path","A DHCP starvation attack","A duplex mismatch on the uplink"], answer:1, explain:"MAC addresses flapping between two ports mean identical frames are circling back in on both, and broadcasts multiplying forever is what a loop does. The morning cable work is the likely trigger." },
      { label:"Immediate containment step", hint:"Stop the storm first; root-cause second.", options:["Reboot every access switch on the floor","Clear the MAC address table","Upgrade the switch firmware","Shut down one of the two looped ports (Gi0/7 or Gi0/12)"], answer:3, explain:"Administratively shutting either looped port breaks the forwarding cycle instantly and lets CPU and airtime recover. Clearing the MAC table or rebooting leaves the loop in place." },
      { label:"Root-cause fix so it cannot recur", hint:"The protocol whose whole job is blocking redundant Layer 2 paths.", options:["Ensure spanning tree is running on all access switches and add BPDU guard on user-facing ports","Assign static MAC addresses on every port","Replace the floor's switches with hubs","Disable broadcast traffic on the VLAN"], answer:0, explain:"STP exists to block redundant paths before they loop, and BPDU guard shuts down any access port where a rogue patch or switch creates one. Together they make the next miscabling harmless." },
      { label:"Final methodology step after service is restored", hint:"The step everyone skips.", options:["Establish a theory of probable cause","Test the theory","Document the loop, the patch-cable trigger, and the preventive controls that were added","Escalate to the ISP"], answer:2, explain:"Documenting the findings, the root cause, and the new safeguards completes the methodology and gives the next engineer a runbook when a storm signature reappears." }
    ],
    summary:"MAC flapping between two ports plus an exploding broadcast counter is a Layer 2 loop; shut one looped port to stop the storm, then enforce STP with BPDU guard and document it."
  },
  {
    id:"PBQ-210", format:7, domain:5,
    title:"Gigabit Port, 94 Mbps iperf",
    brief:"An engineer's file transfers to the build server crawl while neighboring desks fly. You quantify the path with <span class='hl'>iperf3</span> and check the access port.",
    exhibitTitle:"iperf3 + switch status",
    exhibit:"C:\\&gt; iperf3 -c 10.10.8.20\n[ ID] Interval          Transfer      Bitrate\n[  5] 0.00-10.00 sec    112 MBytes    <span class='warnc'>94.1 Mbits/sec</span>   sender\n[  5] 0.00-10.00 sec    112 MBytes    <span class='warnc'>93.8 Mbits/sec</span>   receiver\n\nSW-ACC# show interfaces status | include Gi0/14\nGi0/14  PC-ENG-22   connected   20   a-full   <span class='warnc'>a-100</span>   10/100/1000BaseTX\n\n<span class='dim'>Cable run: patched through an old wall jack, approx. 72 m</span>",
    fields:[
      { label:"What does the iperf result indicate?", hint:"94 Mbps is suspiciously close to a familiar wire speed.", options:["Normal gigabit performance","A disk bottleneck on the build server","The path is capped at Fast Ethernet — throughput sits at the ~94 Mbps ceiling of a 100 Mbps link","Wireless interference on the desk"], answer:2, explain:"iperf measures achievable throughput, and ~94 Mbps is exactly what a 100 Mbps link delivers after overhead. The switch confirms it: the port autonegotiated to a-100, not gigabit." },
      { label:"Most likely cause of the a-100 negotiation", hint:"Gigabit needs all four pairs intact end to end.", options:["A marginal cable or termination with a failed wire pair, forcing autonegotiation to fall back to 100 Mbps","The switch does not support gigabit on that port","An iperf3 software limitation","The server NIC is set to half duplex"], answer:0, explain:"1000BASE-T requires all four pairs; when a pair is open or miswired, autonegotiation quietly falls back to 100 Mbps, which only needs two. The aging wall-jack run is the prime suspect." },
      { label:"Best tool to test the theory", hint:"Check the physical run, not the configuration.", options:["nslookup against the server","A spectrum analyzer","tracert to the build server","A cable tester/certifier on the wall-jack run"], answer:3, explain:"A cable tester or certifier maps every pair and reveals the open, short, or split pair that is knocking the link down to Fast Ethernet." },
      { label:"The fix, and how to verify it", hint:"Repair the physical layer, then re-check the negotiated speed and re-measure.", options:["Hard-code 100/full on both ends and close the ticket","Re-terminate or replace the run, confirm the port renegotiates to a-1000, then re-run iperf3 near gigabit rates","Enable jumbo frames on the access VLAN","Move the PC to Wi-Fi"], answer:1, explain:"Fixing the bad pair lets autonegotiation reach 1000 Mbps again; the port status and a fresh iperf3 run in the 900+ Mbps range prove full functionality before documenting." }
    ],
    summary:"An iperf ceiling of ~94 Mbps with a-100 on a gigabit port means a damaged pair forced Fast Ethernet fallback; repairing the run restores a-1000, verified by re-running iperf3."
  }
);
/* ============================================================================
   network+  ::  quizEngine.js  —  ENGINE  (assessment + PBQ runtime)
   This block is appended after the question bank and PBQ database above.
   It powers three assessment modes (domain quiz, quick quiz, timed mock) plus
   the performance-based-question simulator, rendering each into the shared
   #view container via window.APP.
   ========================================================================== */
(function () {
  "use strict";

  var S = window.NETPLUS;
  /* app.js loads AFTER this file, so window.APP isn't ready at load time.
     Resolve it lazily: every public entry point calls ready() first, which
     binds A and el before any rendering helper runs. */
  var A, el;
  function ready() { A = window.APP; el = A.el; }

  /* ----- sampling helpers (Fisher–Yates) ----- */
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function sample(arr, n) { return shuffle(arr).slice(0, n); }
  function byDomain(d) { return S.questions.filter(function (q) { return q.domain === d; }); }
  var LETTERS = ["A", "B", "C", "D", "E", "F"];

  /* per-question option order is randomized so the answer index isn't a tell. */
  function prepare(q) {
    var order = shuffle(q.options.map(function (o, i) { return i; }));
    return {
      ref: q,
      opts: order.map(function (i) { return q.options[i]; }),
      answer: order.indexOf(q.answer)
    };
  }

  /* domain stats accumulator used by results + analytics */
  function blankStats() { var o = {}; (S.domainMeta || []).forEach(function (d) { o[d.id] = { correct: 0, total: 0 }; }); return o; }

  /* ===========================================================================
     ADAPTIVE / MISSED-QUESTION TRACKING
     Persists two things across every quiz/mock session (localStorage via APP):
       netplus.objstats.v1 = { "1.2": {c, n}, ... }   per-objective accuracy
       netplus.missed.v1   = { "D4-071": 1, ... }      questions answered wrong
     The adaptive set weights selection toward weak/unseen objectives (and prior
     misses); the missed queue re-serves only wrong questions until you get them
     right. Helpers read window.APP directly so the dashboard can call them
     before any quiz entry point binds A.
     =========================================================================== */
  var QS = {
    getObj: function () { return window.APP.store.get("objstats.v1", {}) || {}; },
    getMissed: function () { return window.APP.store.get("missed.v1", {}) || {}; },
    /* fold a graded set into the persistent stores. items = prepared array
       (each has .ref and .answer); picks = chosen indices into shuffled opts. */
    record: function (items, picks) {
      var obj = this.getObj(), missed = this.getMissed();
      items.forEach(function (it, i) {
        var q = it.ref, ok = picks[i] === it.answer;
        var o = obj[q.obj] || { c: 0, n: 0 }; o.n++; if (ok) o.c++; obj[q.obj] = o;
        if (ok) delete missed[q.id]; else missed[q.id] = 1;
      });
      window.APP.store.set("objstats.v1", obj);
      window.APP.store.set("missed.v1", missed);
    },
    missedCount: function () { return Object.keys(this.getMissed()).length; },
    /* weakest domain by accumulated objective accuracy (>= 3 attempts) */
    weakestDomain: function () {
      var obj = this.getObj(), dom = {};
      for (var k in obj) { var d = k[0]; dom[d] = dom[d] || { c: 0, n: 0 }; dom[d].c += obj[k].c; dom[d].n += obj[k].n; }
      var worst = null, worstAcc = 2;
      for (var dd in dom) { if (dom[dd].n >= 3) { var a = dom[dd].c / dom[dd].n; if (a < worstAcc) { worstAcc = a; worst = dd; } } }
      return worst ? ("Domain " + worst) : null;
    }
  };

  /* per-question weight: weak/unseen objectives and prior misses score higher */
  function adaptiveWeight(q, obj, missed) {
    var o = obj[q.obj], w;
    if (!o || !o.n) w = 2.2;                 // unseen objective → encourage coverage
    else w = 1 + 2 * (1 - o.c / o.n);        // weak objective weighted up to 3x
    if (missed[q.id]) w += 1.5;              // a prior miss gets an extra boost
    return w;
  }
  /* weighted sampling without replacement */
  function weightedSample(pool, n, wf) {
    var items = pool.map(function (q) { return { q: q, w: Math.max(0.01, wf(q)) }; });
    var out = [];
    n = Math.min(n, items.length);
    for (var k = 0; k < n; k++) {
      var total = items.reduce(function (a, x) { return a + x.w; }, 0);
      var r = Math.random() * total, acc = 0, idx = 0;
      for (var i = 0; i < items.length; i++) { acc += items[i].w; if (r <= acc) { idx = i; break; } }
      out.push(items[idx].q); items.splice(idx, 1);
    }
    return out;
  }
  function adaptiveSet(n) {
    var obj = QS.getObj(), missed = QS.getMissed();
    return weightedSample(S.questions, n, function (q) { return adaptiveWeight(q, obj, missed); });
  }

  /* ===========================================================================
     LINEAR QUIZ  (domain quiz + quick quiz): immediate feedback per question
     =========================================================================== */
  function runLinearQuiz(opts) {
    ready();
    var items = opts.items.map(prepare);
    var idx = 0, picks = new Array(items.length).fill(null);

    A.open({
      tag: opts.tag,
      render: function (host) {
        var pane = el("div");
        host.appendChild(A.crumb(opts.title, { onBack: function () {
          A.confirm("Leave quiz?", "Your progress on this quiz will not be saved.", "Leave", function () { A.dashboard(); A.renderDashboard(); });
        } }));
        host.appendChild(el("div.phead", null, [el("h1", { text: opts.title }), el("span.sub", { text: opts.sub })]));
        host.appendChild(pane);
        draw(pane);
      }
    });

    function draw(pane) {
      pane.innerHTML = "";
      var wrap = el("div.quizwrap");
      var bar = el("div.qmeta", null, [
        el("div.progressbar", null, el("i", { style: "width:" + (idx / items.length * 100) + "%" })),
        el("div.qcount", { text: "Question " + (idx + 1) + " of " + items.length })
      ]);
      wrap.appendChild(bar);

      var it = items[idx], q = it.ref, answered = picks[idx] != null;
      var dc = "d" + q.domain;
      var qc = el("div.qcard-full");
      qc.appendChild(el("div.qhead", null, [
        el("span.qdombadge." + dc, { text: "DOMAIN " + q.domain }),
        el("span.qobj", { text: "Objective " + q.obj }),
        el("span.qobj", { text: "· " + (q.diff || "medium") })
      ]));
      qc.appendChild(el("div.qtext", { html: q.q }));

      it.opts.forEach(function (text, i) {
        var cls = "opt";
        if (answered) {
          if (i === it.answer) cls += " correct";
          else if (i === picks[idx]) cls += " wrong";
        }
        var b = el("button." + cls.replace(/ /g, "."), { type: "button", disabled: answered ? "disabled" : null });
        b.appendChild(el("span.key", { text: LETTERS[i] }));
        b.appendChild(el("span", { html: text }));
        if (answered && i === it.answer) b.appendChild(el("span.tick", { text: "✓" }));
        if (answered && i === picks[idx] && i !== it.answer) b.appendChild(el("span.tick", { text: "✗" }));
        if (!answered) b.addEventListener("click", function () { picks[idx] = i; draw(pane); });
        qc.appendChild(b);
      });

      if (answered) {
        var correct = picks[idx] === it.answer;
        qc.appendChild(el("div.rationale" + (correct ? "" : ".bad"), null, [
          el("span.lbl", { text: correct ? "Correct" : "Not quite" }),
          el("span", { html: q.explain })
        ]));
      }

      var nav = el("div.qnav", null, [
        el("button.btn.ghost", { text: "← Previous", disabled: idx === 0 ? "disabled" : null, onclick: function () { if (idx > 0) { idx--; draw(pane); } } }),
        answered
          ? el("button.btn.primary", { text: idx === items.length - 1 ? "See results →" : "Next question →", onclick: function () { if (idx === items.length - 1) finish(); else { idx++; draw(pane); } } })
          : el("span.note", { text: "Select an answer to continue." })
      ]);
      qc.appendChild(nav);
      wrap.appendChild(qc);
      pane.appendChild(wrap);
    }

    function finish() {
      var stats = blankStats(), correct = 0, wrongList = [];
      items.forEach(function (it, i) {
        var ok = picks[i] === it.answer;
        stats[it.ref.domain].total++; if (ok) { stats[it.ref.domain].correct++; correct++; }
        if (!ok) wrongList.push({ it: it, pick: picks[i] });
      });
      var pct = Math.round(correct / items.length * 100);
      QS.record(items, picks); // feed adaptive engine + missed-question queue
      A.store.record({ mode: opts.mode, modeLabel: opts.modeLabel, detail: opts.detail, pct: pct, correct: correct, total: items.length, domainStats: stats });
      showResults({
        tag: opts.tag, title: opts.title, mode: opts.mode,
        correct: correct, total: items.length, pct: pct, stats: stats, wrongList: wrongList,
        retry: function () { opts.retry(); }
      });
    }
  }

  /* ===========================================================================
     RESULTS DASHBOARD (shared by quizzes + mock)
     =========================================================================== */
  function showResults(r) {
    A.open({
      tag: "Results", render: function (host) {
        host.appendChild(A.crumb("Results", { onBack: function () { A.dashboard(); A.renderDashboard(); } }));
        host.appendChild(el("div.phead", null, [el("h1", { text: r.title + " — Results" })]));
        var box = el("div.results");

        var isMock = r.mode === "mock";
        var pass = isMock ? r.scaled >= ((S.exam && S.exam.passing) || 750) : r.pct >= 70;
        var ringcol = pass ? "var(--low)" : (r.pct >= 50 ? "var(--amber)" : "var(--crit)");
        var hero = el("div.scorehero");
        var ring = el("div.scorering", { style: "--pct:" + r.pct + ";--ringcol:" + ringcol });
        ring.appendChild(el("div.inner", null, [el("div.pct", { text: r.pct + "%" }), el("div.lab", { text: r.correct + "/" + r.total })]));
        hero.appendChild(ring);
        hero.appendChild(el("div.verdict." + (pass ? "pass" : "fail"), { text: pass ? (isMock ? "Likely Pass" : "Strong") : (isMock ? "Not Yet Passing" : "Keep Studying") }));
        if (isMock) hero.appendChild(el("div.scaled", { html: "Scaled score <b style='color:var(--ink)'>" + r.scaled + "</b> / 900 &nbsp;·&nbsp; passing is <b style='color:var(--ink)'>" + ((S.exam && S.exam.passing) || 750) + "</b>" }));
        else hero.appendChild(el("div.scaled", { text: r.correct + " of " + r.total + " correct" }));
        box.appendChild(hero);

        /* per-domain bars */
        box.appendChild(el("div.secthead", { text: "By domain" }));
        var bars = el("div.dombars");
        (S.domainMeta || []).forEach(function (d) {
          var st = r.stats[d.id]; if (!st || !st.total) return;
          var p = Math.round(st.correct / st.total * 100);
          bars.appendChild(el("div.dombar", null, [
            el("div.name", { text: "D" + d.id + " · " + d.title }),
            el("div.track", null, el("i", { style: "width:" + p + "%;background:var(--d" + d.id + ")" })),
            el("div.pct", { text: st.correct + "/" + st.total })
          ]));
        });
        box.appendChild(bars);

        /* review of missed items, mapped to objectives */
        box.appendChild(el("div.secthead", { text: r.wrongList.length ? "Review missed questions (" + r.wrongList.length + ")" : "Review" }));
        if (!r.wrongList.length) box.appendChild(el("div.empty", { text: "Perfect run — nothing to review. 🎯" }));
        var rl = el("div.reviewlist");
        r.wrongList.forEach(function (w) {
          var q = w.it.ref;
          var yourText = w.pick == null ? "(left blank)" : w.it.opts[w.pick];
          var corrText = w.it.opts[w.it.answer];
          rl.appendChild(el("div.ritem", null, [
            el("p.rq", { html: q.q }),
            el("div.ra", null, [el("span.you.bad", { html: "Your answer: " + A.esc(yourText) })]),
            el("div.ra", null, [el("span.corr", { html: "Correct: " + A.esc(corrText) })]),
            el("div.rationale", null, [el("span.lbl", { text: "Why" }), el("span", { html: q.explain })]),
            el("div.robj", { text: ((S.exam && S.exam.code) || "") + " Domain " + q.domain + " · Objective " + q.obj })
          ]));
        });
        box.appendChild(rl);

        box.appendChild(el("div.btnrow", { style: "margin-top:22px;justify-content:center" }, [
          el("button.btn.primary", { text: "Try another set", onclick: function () { r.retry(); } }),
          el("button.btn", { text: "View analytics", onclick: function () { A.openAnalytics(); } }),
          el("button.btn.ghost", { text: "Back to dashboard", onclick: function () { A.dashboard(); A.renderDashboard(); } })
        ]));
        host.appendChild(box);
      }
    });
  }

  /* ===========================================================================
     TIMED MOCK EXAM  (90 weighted questions, timer, flagging, palette)
     =========================================================================== */
  function buildMockSet() {
    var total = S.exam.maxQuestions, picks = [];
    var meta = S.domainMeta.slice();
    var alloc = meta.map(function (d) { return { d: d.id, n: Math.round(total * d.weight / 100) }; });
    var sum = alloc.reduce(function (a, x) { return a + x.n; }, 0);
    var biggest = 0; alloc.forEach(function (x, i) { if (S.domainMeta[i].weight > S.domainMeta[biggest].weight) biggest = i; }); alloc[biggest].n += (total - sum); // fold rounding drift into the highest-weight domain
    alloc.forEach(function (x) {
      var pool = byDomain(x.d);
      picks = picks.concat(sample(pool, Math.min(x.n, pool.length)));
    });
    return shuffle(picks).map(prepare);
  }

  function startMock() {
    ready();
    if (S.questions.length < S.exam.maxQuestions) { A.toast("Question bank still loading…"); return; }
    var items = buildMockSet();
    var picks = new Array(items.length).fill(null);
    var flags = new Array(items.length).fill(false);
    var idx = 0;
    var DURATION = S.exam.minutes * 60; // seconds
    var remaining = DURATION;
    var ticker = null, paneRef = null, ended = false;

    A.open({
      tag: "Mock exam", render: function (host) {
        host.appendChild(A.crumb("Mock exam in progress", { onBack: function () {
          A.confirm("Abandon the mock exam?", "You are mid-exam. Leaving discards this attempt and it will not be scored.", "Abandon exam", function () { stop(); A.dashboard(); A.renderDashboard(); });
        } }));
        host.appendChild(el("div.phead", null, [el("h1", { text: "Full-Length Mock Exam" }), el("span.sub", { text: S.exam.maxQuestions + " questions · weighted to " + ((S.exam && S.exam.code) || "") + " domains" })]));
        paneRef = el("div"); host.appendChild(paneRef);
        draw();
        ticker = setInterval(tick, 1000);
      }
    });

    function tick() {
      remaining--; updateTimer();
      if (remaining <= 0) { stop(); A.toast("Time! Submitting your exam."); submit(); }
    }
    function stop() { if (ticker) clearInterval(ticker); ticker = null; }
    function fmt(s) { var m = Math.floor(s / 60), ss = s % 60; return (m < 10 ? "0" : "") + m + ":" + (ss < 10 ? "0" : "") + ss; }
    function updateTimer() {
      var t = paneRef && paneRef.querySelector("#mockTimer"); if (!t) return;
      t.textContent = "⏱ " + fmt(remaining);
      t.className = "timer" + (remaining <= 60 ? " crit" : remaining <= 300 ? " warn" : "");
    }

    function draw() {
      if (ended) return;
      paneRef.innerHTML = "";
      var wrap = el("div.quizwrap");
      var answeredCount = picks.filter(function (p) { return p != null; }).length;

      var meta = el("div.qmeta", null, [
        el("div.timer#mockTimer", { text: "⏱ " + fmt(remaining) }),
        el("div.progressbar", null, el("i", { style: "width:" + (answeredCount / items.length * 100) + "%" })),
        el("div.qcount", { text: answeredCount + " / " + items.length + " answered" })
      ]);
      wrap.appendChild(meta);
      updateTimer();

      /* palette */
      var pal = el("div.palette");
      items.forEach(function (_, i) {
        var c = "palette";
        var b = el("button", { text: String(i + 1), onclick: function () { idx = i; draw(); } });
        if (picks[i] != null) b.classList.add("answered");
        if (flags[i]) b.classList.add("flagged");
        if (i === idx) b.classList.add("current");
        pal.appendChild(b);
      });
      wrap.appendChild(pal);

      var it = items[idx], q = it.ref;
      var qc = el("div.qcard-full");
      qc.appendChild(el("div.qhead", null, [
        el("span.qdombadge.d" + q.domain, { text: "DOMAIN " + q.domain }),
        el("span.qobj", { text: "Question " + (idx + 1) + " of " + items.length }),
        el("button.qflag" + (flags[idx] ? ".on" : ""), { text: flags[idx] ? "Flagged" : "Flag for review", onclick: function () { flags[idx] = !flags[idx]; draw(); } })
      ]));
      qc.appendChild(el("div.qtext", { html: q.q }));
      it.opts.forEach(function (text, i) {
        var b = el("button.opt" + (picks[idx] === i ? ".sel" : ""), { type: "button" });
        b.appendChild(el("span.key", { text: LETTERS[i] }));
        b.appendChild(el("span", { html: text }));
        b.addEventListener("click", function () { picks[idx] = (picks[idx] === i ? null : i); draw(); });
        qc.appendChild(b);
      });

      var nav = el("div.qnav", null, [
        el("button.btn.ghost", { text: "← Previous", disabled: idx === 0 ? "disabled" : null, onclick: function () { if (idx > 0) { idx--; draw(); } } }),
        el("div.btnrow", null, [
          idx === items.length - 1
            ? el("button.btn.primary", { text: "Review & submit", onclick: reviewSubmit })
            : el("button.btn.primary", { text: "Next →", onclick: function () { idx++; draw(); } })
        ])
      ]);
      qc.appendChild(nav);
      wrap.appendChild(qc);
      paneRef.appendChild(wrap);
    }

    function reviewSubmit() {
      var unanswered = picks.filter(function (p) { return p == null; }).length;
      var flagged = flags.filter(Boolean).length;
      A.confirm("Submit exam?",
        (unanswered ? unanswered + " question(s) are unanswered and will be marked wrong. " : "All questions answered. ") +
        (flagged ? flagged + " are flagged for review. " : "") + "Submit for scoring?",
        "Submit exam", function () { stop(); submit(); });
    }

    function submit() {
      if (ended) return; ended = true; stop();
      var stats = blankStats(), correct = 0, wrongList = [];
      items.forEach(function (it, i) {
        var ok = picks[i] === it.answer;
        stats[it.ref.domain].total++; if (ok) { stats[it.ref.domain].correct++; correct++; }
        if (!ok) wrongList.push({ it: it, pick: picks[i] });
      });
      var pct = Math.round(correct / items.length * 100);
      var scaled = Math.max(100, Math.min(900, Math.round(100 + pct / 100 * 800)));
      QS.record(items, picks); // feed adaptive engine + missed-question queue
      A.store.record({ mode: "mock", modeLabel: "Mock exam", detail: correct + "/" + items.length + " · used " + Math.round((DURATION - remaining) / 60) + " min", pct: pct, scaled: scaled, correct: correct, total: items.length, domainStats: stats });
      showResults({ tag: "Results", title: "Mock Exam", mode: "mock", correct: correct, total: items.length, pct: pct, scaled: scaled, stats: stats, wrongList: wrongList, retry: startMock });
    }
  }

  /* ===========================================================================
     PBQ SIMULATOR  (exhibit + dropdown fields, graded with rationale)
     =========================================================================== */
  function openPBQFormat(fid) {
    ready();
    var fmt = (S.pbqFormats || []).filter(function (f) { return f.id === fid; })[0] || {};
    var list = S.pbqs.filter(function (p) { return p.format === fid; });
    var done = A.store.get("pbqDone", []) || [];

    A.open({
      tag: "PBQ · " + (fmt.badge || ("Format " + fid)), render: function (host) {
        host.appendChild(A.crumb(fmt.title));
        host.appendChild(el("div.phead", null, [el("h1", { text: fmt.title }), el("span.sub", { text: (fmt.badge || ("Format " + fid)) + " · " + list.length + " simulations · objective " + fmt.obj })]));
        host.appendChild(el("p.sectsub", { html: fmt.long || fmt.desc }));
        var grid = el("div.grid");
        list.forEach(function (p, i) {
          var isDone = done.indexOf(p.id) >= 0;
          grid.appendChild((function () {
            var c = el("button.card" + (isDone ? ".domain.d" + p.domain : ""), { type: "button", onclick: function () { runPBQ(list, i, fid); } });
            c.appendChild(el("div.kome", null, [
              el("span.ico", { text: fmt.icon }),
              el("span.tag.d" + p.domain, { text: isDone ? "✓ DONE" : "PBQ " + (i + 1) })
            ]));
            c.appendChild(el("h3", { text: p.title }));
            c.appendChild(el("div.desc", { html: (p.brief || "").slice(0, 120) + ((p.brief || "").length > 120 ? "…" : "") }));
            c.appendChild(el("div.foot", null, [el("span", { text: p.fields.length + " decisions · D" + p.domain }), el("span.go", { text: "Open →" })]));
            return c;
          })());
        });
        host.appendChild(grid);
        if (A.backBar) host.appendChild(A.backBar());
      }
    });
  }

  function runPBQ(list, i, fid) {
    var p = list[i];
    var fmt = (S.pbqFormats || []).filter(function (f) { return f.id === fid; })[0] || {};
    var graded = false;
    var selects = [];

    A.open({
      tag: "PBQ " + p.id, render: function (host) {
        host.appendChild(A.crumb(p.id, { onBack: function () { openPBQFormat(fid); } }));
        host.appendChild(el("div.phead", null, [el("h1", { text: p.title }), el("span.sub", { text: "Domain " + p.domain + " · " + fmt.title })]));
        var wrap = el("div.pbqwrap");
        wrap.appendChild(el("p.pbq-brief", { html: p.brief }));

        if (p.exhibit) {
          wrap.appendChild(el("div.terminal", null, [
            el("div.tbar", null, [el("span.dots", null, [el("i"), el("i"), el("i")]), el("span.ttl", { text: p.exhibitTitle || "exhibit" })]),
            el("pre", { html: p.exhibit })
          ]));
        }

        var fieldsHost = el("div.pbq-fields");
        p.fields.forEach(function (f, fi) {
          var fld = el("div.field");
          fld.appendChild(el("div.flabel", { text: (fi + 1) + ". " + f.label }));
          if (f.hint) fld.appendChild(el("div.fhint", { html: f.hint }));
          var sel = el("select");
          sel.appendChild(el("option", { value: "", text: "— choose —" }));
          f.options.forEach(function (o, oi) { sel.appendChild(el("option", { value: String(oi), text: o })); });
          fld.appendChild(sel);
          fld.appendChild(el("div.fexplain", { html: "<span class='ans'>Correct: " + A.esc(f.options[f.answer]) + ".</span> " + f.explain }));
          fieldsHost.appendChild(fld);
          selects.push({ sel: sel, fld: fld, f: f });
        });
        wrap.appendChild(fieldsHost);

        var summary = el("div", { style: "margin-top:8px" });
        var actions = el("div.qnav", null, [
          el("button.btn.ghost", { text: "← All " + fmt.title.split(" ")[0] + " PBQs", onclick: function () { openPBQFormat(fid); } }),
          el("div.btnrow", null, [
            el("button.btn.primary#pbqGrade", { text: "Submit & grade", onclick: grade }),
            i < list.length - 1 ? el("button.btn", { text: "Next PBQ →", onclick: function () { runPBQ(list, i + 1, fid); } }) : null
          ])
        ]);
        wrap.appendChild(summary);
        wrap.appendChild(actions);
        host.appendChild(wrap);

        function grade() {
          if (graded) { // already graded → act as reset
            selects.forEach(function (s) { s.sel.value = ""; s.sel.disabled = false; s.fld.classList.remove("graded", "correct", "wrong"); });
            graded = false; summary.innerHTML = ""; $set("Submit & grade"); return;
          }
          var miss = selects.some(function (s) { return s.sel.value === ""; });
          if (miss && !confirmProceed()) return;
          var correct = 0;
          selects.forEach(function (s) {
            var val = s.sel.value === "" ? -1 : parseInt(s.sel.value, 10);
            var ok = val === s.f.answer;
            if (ok) correct++;
            s.fld.classList.add("graded"); s.fld.classList.toggle("correct", ok); s.fld.classList.toggle("wrong", !ok);
            s.sel.disabled = true;
          });
          graded = true; $set("Reset");
          var pct = Math.round(correct / selects.length * 100);
          var pass = pct >= 70;
          summary.innerHTML = "";
          summary.appendChild(el("div.rationale" + (pass ? "" : ".bad"), null, [
            el("span.lbl", { text: pass ? "Well configured" : "Needs work" }),
            el("span", { html: "<b>" + correct + " of " + selects.length + "</b> decisions correct (" + pct + "%). " + (p.summary || "") })
          ]));
          /* mark complete */
          var done = A.store.get("pbqDone", []) || [];
          if (done.indexOf(p.id) < 0) { done.push(p.id); A.store.set("pbqDone", done); }
          A.store.record({ mode: "pbq", modeLabel: "PBQ", detail: p.id + " · " + fmt.title.split(" ")[0], pct: pct, correct: correct, total: selects.length, domainStats: (function () { var st = blankStats(); st[p.domain] = { correct: correct, total: selects.length }; return st; })() });
          summary.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
        function $set(t) { var b = host.querySelector("#pbqGrade"); if (b) b.textContent = t; }
        var proceeded = false;
        function confirmProceed() { return window.confirm("Some fields are unset and will be marked incorrect. Grade anyway?"); }
      }
    });
  }

  /* ===========================================================================
     PUBLIC ENGINE SURFACE
     =========================================================================== */
  window.QUIZ = {
    startDomainQuiz: function (d) {
      ready();
      var meta = A.domainMeta(d);
      var pool = byDomain(d);
      if (pool.length < 1) { A.toast("No questions for this domain yet."); return; }
      runLinearQuiz({
        tag: "D" + d + " Quiz", mode: "domain", modeLabel: "Domain quiz",
        title: "Domain " + d + " Quiz", sub: meta.title + " · 10 questions",
        detail: "Domain " + d, items: sample(pool, Math.min(10, pool.length)),
        retry: function () { window.QUIZ.startDomainQuiz(d); }
      });
    },
    startQuickQuiz: function () {
      runLinearQuiz({
        tag: "Quick Quiz", mode: "quick", modeLabel: "Quick quiz",
        title: "Randomized Quick Quiz", sub: "10 questions · all five domains",
        detail: "Mixed", items: sample(S.questions, 10),
        retry: function () { window.QUIZ.startQuickQuiz(); }
      });
    },
    /* Adaptive: 10 questions weighted toward your weakest objectives + prior misses. */
    startAdaptive: function () {
      ready();
      var items = adaptiveSet(10);
      if (!items.length) { A.toast("No questions available."); return; }
      var weak = QS.weakestDomain();
      runLinearQuiz({
        tag: "Adaptive", mode: "adaptive", modeLabel: "Adaptive practice",
        title: "Adaptive Practice",
        sub: "10 questions weighted to your weak areas" + (weak ? " · focus: " + weak : ""),
        detail: weak ? "Weighted · " + weak : "Adaptive", items: items,
        retry: function () { window.QUIZ.startAdaptive(); }
      });
    },
    /* Missed queue: re-serve only previously-wrong questions (answering one
       correctly removes it from the queue via QS.record). */
    startMissed: function () {
      ready();
      var missed = QS.getMissed();
      var pool = S.questions.filter(function (q) { return missed[q.id]; });
      if (!pool.length) { A.toast("No missed questions yet — take a quiz first."); return; }
      runLinearQuiz({
        tag: "Missed", mode: "missed", modeLabel: "Missed questions",
        title: "Missed Questions", sub: pool.length + " in your retry queue",
        detail: "Retry", items: sample(pool, Math.min(15, pool.length)),
        retry: function () { window.QUIZ.startMissed(); }
      });
    },
    missedCount: function () { return QS.missedCount(); },
    weakestDomain: function () { return QS.weakestDomain(); },
    startMock: startMock,
    openPBQFormat: openPBQFormat
  };
})();
