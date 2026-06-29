window.LABS = [
  {
    "id": "Lab 01",
    "num": 1,
    "group": "NETWORK CONCEPTS",
    "title": "OSI Model and Encapsulation",
    "desc": "Walk a packet down the seven-layer OSI stack and observe how each layer adds its own header during encapsulation. The student maps protocol data units to layers and confirms the wrapping order from application data to a physical bit stream.",
    "objectives": [
      "Identify the seven OSI layers and their order.",
      "Match each PDU name to the correct layer.",
      "Trace header encapsulation from Layer 7 down to Layer 1."
    ],
    "console": {
      "host": "core-sw01",
      "boot": [
        "[SYS] Lab environment online.",
        "[SYS] OSI reference topology loaded."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the layer where segmentation occurs"
        },
        {
          "id": "t2",
          "label": "Inject an application payload and watch encapsulation"
        },
        {
          "id": "t3",
          "label": "Display the encapsulation stack"
        },
        {
          "id": "t4",
          "label": "Verify the frame on the wire"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "PDU at the layer that adds port numbers",
          "options": [
            "Bits",
            "Frame",
            "Segment",
            "Packet"
          ],
          "correct": "Segment",
          "task": "t1"
        }
      ],
      "payload": {
        "label": "PAYLOAD INJECTION",
        "placeholder": "GET /index.html HTTP/1.1",
        "button": "Encapsulate",
        "response": "[L7] Data created.\n[L4] TCP header added, segment formed.\n[L3] IP header added, packet formed.",
        "task": "t2"
      },
      "commands": [
        {
          "cmd": "show encapsulation stack",
          "out": "[OSI] L7 Data > L4 Segment > L3 Packet\n[OSI] L2 Frame > L1 Bits",
          "task": "t3"
        },
        {
          "cmd": "show frame wire0",
          "out": "[L2] dst aa:bb:cc:00:00:01 src aa:bb:cc:00:00:02\n[L2] type 0x0800 FCS valid",
          "task": "t4"
        },
        {
          "cmd": "show osi layers",
          "out": "[OSI] 7 App 6 Pres 5 Sess 4 Trans\n[OSI] 3 Net 2 Data 1 Phys"
        }
      ]
    }
  },
  {
    "id": "Lab 02",
    "num": 2,
    "group": "NETWORK CONCEPTS",
    "title": "IPv4 Subnetting and VLSM",
    "desc": "Carve a single class C block into variable-length subnets sized to each department using VLSM. The student chooses masks, applies an address plan, and validates that subnets do not overlap.",
    "objectives": [
      "Calculate host counts for a given prefix length.",
      "Apply VLSM to allocate right-sized subnets.",
      "Verify subnet boundaries and broadcast addresses."
    ],
    "console": {
      "host": "rtr-edge01",
      "boot": [
        "[SYS] Lab environment online.",
        "[SYS] Block 192.168.10.0/24 assigned."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Choose the mask for a 60-host subnet"
        },
        {
          "id": "t2",
          "label": "Apply the VLSM allocation plan"
        },
        {
          "id": "t3",
          "label": "Display the resulting subnet table"
        },
        {
          "id": "t4",
          "label": "Confirm no overlap between subnets"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Mask that yields at least 60 usable hosts",
          "options": [
            "/24",
            "/25",
            "/26",
            "/27"
          ],
          "correct": "/26",
          "task": "t1"
        }
      ],
      "payload": {
        "label": "ADDRESS PLAN",
        "placeholder": "192.168.10.0/26, 192.168.10.64/27, 192.168.10.96/28",
        "button": "Apply",
        "response": "[PLAN] Subnet A /26 62 hosts applied.\n[PLAN] Subnet B /27 30 hosts applied.\n[PLAN] Subnet C /28 14 hosts applied.",
        "task": "t2"
      },
      "commands": [
        {
          "cmd": "show ip subnets",
          "out": "[NET] 192.168.10.0/26 bcast .63\n[NET] 192.168.10.64/27 bcast .95",
          "task": "t3"
        },
        {
          "cmd": "verify overlap",
          "out": "[CHK] No overlapping ranges detected.\n[CHK] Allocation valid.",
          "task": "t4"
        },
        {
          "cmd": "show ip interface brief",
          "out": "[IOS] Gi0/0 192.168.10.1 up\n[IOS] Gi0/1 192.168.10.65 up"
        }
      ]
    }
  },
  {
    "id": "Lab 03",
    "num": 3,
    "group": "NETWORK CONCEPTS",
    "title": "Ports Protocols and Traffic Types",
    "desc": "Map common application protocols to their well-known ports and classify traffic as unicast, multicast, or broadcast. The student scans a host, identifies open services, and labels traffic delivery types.",
    "objectives": [
      "Recall well-known ports for core protocols.",
      "Distinguish TCP from UDP transport behavior.",
      "Classify unicast, multicast, and broadcast traffic."
    ],
    "console": {
      "host": "mgmt-host01",
      "boot": [
        "[SYS] Lab environment online.",
        "[SYS] Target 10.0.0.50 reachable."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the port used by HTTPS"
        },
        {
          "id": "t2",
          "label": "Select the traffic type for an ARP request"
        },
        {
          "id": "t3",
          "label": "Scan the host for open ports"
        },
        {
          "id": "t4",
          "label": "Capture and identify a DNS query"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Port for HTTPS",
          "options": [
            "22",
            "53",
            "443",
            "3389"
          ],
          "correct": "443",
          "task": "t1"
        },
        {
          "id": "c2",
          "label": "Delivery type for an ARP request",
          "options": [
            "Unicast",
            "Multicast",
            "Broadcast",
            "Anycast"
          ],
          "correct": "Broadcast",
          "task": "t2"
        }
      ],
      "commands": [
        {
          "cmd": "nmap 10.0.0.50",
          "out": "[SCAN] 22/tcp open ssh\n[SCAN] 443/tcp open https",
          "task": "t3"
        },
        {
          "cmd": "tcpdump port 53",
          "out": "[CAP] 10.0.0.50.51002 > 8.8.8.8.53 A example.com\n[CAP] UDP query captured",
          "task": "t4"
        },
        {
          "cmd": "show protocols",
          "out": "[PROTO] TCP reliable connection oriented\n[PROTO] UDP best effort connectionless"
        }
      ]
    }
  },
  {
    "id": "Lab 04",
    "num": 4,
    "group": "NETWORK CONCEPTS",
    "title": "IPv6 Addressing",
    "desc": "Configure IPv6 on an interface and observe link-local, global unicast, and SLAAC-derived addresses. The student selects the correct address scope and verifies neighbor discovery in place of ARP.",
    "objectives": [
      "Differentiate link-local, global, and unique local addresses.",
      "Apply SLAAC and an EUI-64 derived interface ID.",
      "Verify reachability using neighbor discovery."
    ],
    "console": {
      "host": "rtr-v6lab",
      "boot": [
        "[SYS] Lab environment online.",
        "[SYS] IPv6 unicast routing enabled."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the prefix used for link-local addresses"
        },
        {
          "id": "t2",
          "label": "Inject the global prefix for SLAAC"
        },
        {
          "id": "t3",
          "label": "Display assigned IPv6 addresses"
        },
        {
          "id": "t4",
          "label": "Test reachability over IPv6"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Link-local prefix",
          "options": [
            "2000::/3",
            "fe80::/10",
            "fc00::/7",
            "ff00::/8"
          ],
          "correct": "fe80::/10",
          "task": "t1"
        }
      ],
      "payload": {
        "label": "PREFIX ADVERTISE",
        "placeholder": "2001:db8:acad:1::/64",
        "button": "Advertise",
        "response": "[ND] Prefix 2001:db8:acad:1::/64 advertised.\n[SLAAC] Host formed 2001:db8:acad:1:: with EUI-64.\n[ND] Router advertisement sent.",
        "task": "t2"
      },
      "commands": [
        {
          "cmd": "show ipv6 interface brief",
          "out": "[IOS] Gi0/0 fe80::1 link-local\n[IOS] Gi0/0 2001:db8:acad:1::1 global",
          "task": "t3"
        },
        {
          "cmd": "ping6 2001:db8:acad:1::2",
          "out": "[V6] 5 packets transmitted, 5 received\n[V6] round-trip 1.2ms",
          "task": "t4"
        },
        {
          "cmd": "show ipv6 neighbors",
          "out": "[ND] 2001:db8:acad:1::2 reachable\n[ND] mac aa:bb:cc:00:00:09"
        }
      ]
    }
  },
  {
    "id": "Lab 05",
    "num": 5,
    "group": "NETWORK CONCEPTS",
    "title": "Cloud and Datacenter Architectures",
    "desc": "Explore cloud service and deployment models alongside a spine-and-leaf datacenter fabric. The student selects the appropriate service model for a scenario and validates east-west connectivity across the fabric.",
    "objectives": [
      "Compare IaaS, PaaS, and SaaS responsibilities.",
      "Describe spine-and-leaf versus three-tier designs.",
      "Identify NFV and elasticity concepts in cloud networking."
    ],
    "console": {
      "host": "fabric-ctl01",
      "boot": [
        "[SYS] Lab environment online.",
        "[SYS] Spine-leaf fabric discovered."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the model where the provider manages the OS and runtime"
        },
        {
          "id": "t2",
          "label": "Provision an elastic compute tier"
        },
        {
          "id": "t3",
          "label": "Display the fabric topology"
        },
        {
          "id": "t4",
          "label": "Verify east-west leaf connectivity"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Model where you deploy code without managing the OS",
          "options": [
            "IaaS",
            "PaaS",
            "SaaS",
            "On-prem"
          ],
          "correct": "PaaS",
          "task": "t1"
        }
      ],
      "payload": {
        "label": "PROVISION REQUEST",
        "placeholder": "scale web-tier replicas=6 autoscale=on",
        "button": "Provision",
        "response": "[CLOUD] Web tier scaled to 6 replicas.\n[CLOUD] Autoscale policy attached.\n[CLOUD] Load balancer health checks passing.",
        "task": "t2"
      },
      "commands": [
        {
          "cmd": "show fabric topology",
          "out": "[FAB] 2 spines 4 leaves\n[FAB] all uplinks active",
          "task": "t3"
        },
        {
          "cmd": "ping leaf3 from leaf1",
          "out": "[FAB] 5 packets transmitted, 5 received\n[FAB] east-west path via spine1",
          "task": "t4"
        },
        {
          "cmd": "show cloud models",
          "out": "[CLOUD] IaaS PaaS SaaS available\n[CLOUD] deployment public private hybrid"
        }
      ]
    }
  },
  {
    "id": "Lab 06",
    "num": 6,
    "group": "IMPLEMENTATION",
    "title": "VLAN and Trunk Configuration",
    "desc": "Create VLANs, assign access ports, and build an 802.1Q trunk between two switches. The student selects the trunk encapsulation, applies the VLAN plan, and verifies tagged traffic crosses the link.",
    "objectives": [
      "Create VLANs and assign access ports.",
      "Configure an 802.1Q trunk and native VLAN.",
      "Verify VLAN membership and trunk status."
    ],
    "console": {
      "host": "access-sw02",
      "boot": [
        "[SYS] Lab environment online.",
        "[SYS] Two-switch topology loaded."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the standard trunk encapsulation"
        },
        {
          "id": "t2",
          "label": "Apply the VLAN and port assignment plan"
        },
        {
          "id": "t3",
          "label": "Display the VLAN database"
        },
        {
          "id": "t4",
          "label": "Verify trunk operational status"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Trunk encapsulation standard",
          "options": [
            "ISL",
            "802.1Q",
            "802.1X",
            "802.3ad"
          ],
          "correct": "802.1Q",
          "task": "t1"
        }
      ],
      "payload": {
        "label": "VLAN CONFIG",
        "placeholder": "vlan 10 name SALES; int gi0/1 switchport access vlan 10",
        "button": "Apply",
        "response": "[SW] VLAN 10 SALES created.\n[SW] Gi0/1 assigned access VLAN 10.\n[SW] Running config updated.",
        "task": "t2"
      },
      "commands": [
        {
          "cmd": "show vlan brief",
          "out": "[SW] 10 SALES Gi0/1\n[SW] 20 ENG Gi0/2",
          "task": "t3"
        },
        {
          "cmd": "show interfaces trunk",
          "out": "[SW] Gi0/24 trunking 802.1Q\n[SW] native VLAN 1 allowed 10,20",
          "task": "t4"
        },
        {
          "cmd": "show running-config",
          "out": "[SW] interface Gi0/24 switchport mode trunk\n[SW] switchport trunk allowed vlan 10,20"
        }
      ]
    }
  },
  {
    "id": "Lab 07",
    "num": 7,
    "group": "IMPLEMENTATION",
    "title": "Routing Protocol Setup",
    "desc": "Bring up dynamic routing by configuring OSPF areas and forming neighbor adjacencies between routers. The student selects the routing protocol for the scenario, advertises networks, and confirms routes populate the table.",
    "objectives": [
      "Differentiate OSPF, EIGRP, and BGP use cases.",
      "Configure OSPF areas and advertise networks.",
      "Verify adjacencies and installed routes."
    ],
    "console": {
      "host": "rtr-core02",
      "boot": [
        "[SYS] Lab environment online.",
        "[SYS] Three-router backbone loaded."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the protocol for interior link-state routing"
        },
        {
          "id": "t2",
          "label": "Advertise networks into the routing process"
        },
        {
          "id": "t3",
          "label": "Display OSPF neighbor adjacencies"
        },
        {
          "id": "t4",
          "label": "Verify routes in the routing table"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Interior link-state routing protocol",
          "options": [
            "RIP",
            "OSPF",
            "BGP",
            "EIGRP"
          ],
          "correct": "OSPF",
          "task": "t1"
        }
      ],
      "payload": {
        "label": "ROUTER CONFIG",
        "placeholder": "router ospf 1; network 10.0.0.0 0.0.0.255 area 0",
        "button": "Apply",
        "response": "[RTR] OSPF process 1 started.\n[RTR] Network 10.0.0.0/24 advertised in area 0.\n[RTR] Adjacency forming on Gi0/0.",
        "task": "t2"
      },
      "commands": [
        {
          "cmd": "show ip ospf neighbor",
          "out": "[OSPF] 10.0.0.2 FULL Gi0/0\n[OSPF] 10.0.0.3 FULL Gi0/1",
          "task": "t3"
        },
        {
          "cmd": "show ip route ospf",
          "out": "[RTR] O 10.0.1.0/24 via 10.0.0.2\n[RTR] O 10.0.2.0/24 via 10.0.0.3",
          "task": "t4"
        },
        {
          "cmd": "show ip protocols",
          "out": "[RTR] Routing Protocol is ospf 1\n[RTR] Router ID 10.0.0.1"
        }
      ]
    }
  },
  {
    "id": "Lab 08",
    "num": 8,
    "group": "IMPLEMENTATION",
    "title": "Wireless LAN Deployment",
    "desc": "Deploy a wireless LAN by selecting a frequency band, channel plan, and SSID configuration on a controller-managed access point. The student tunes for minimal co-channel interference and verifies client association.",
    "objectives": [
      "Compare 2.4 GHz and 5 GHz band tradeoffs.",
      "Apply a non-overlapping channel plan.",
      "Verify SSID broadcast and client association."
    ],
    "console": {
      "host": "wlc-01",
      "boot": [
        "[SYS] Lab environment online.",
        "[SYS] Access point AP-12 joined controller."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select a non-overlapping 2.4 GHz channel"
        },
        {
          "id": "t2",
          "label": "Push the SSID and band configuration"
        },
        {
          "id": "t3",
          "label": "Display the radio and channel status"
        },
        {
          "id": "t4",
          "label": "Verify an associated client"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Non-overlapping 2.4 GHz channel",
          "options": [
            "Channel 1",
            "Channel 3",
            "Channel 5",
            "Channel 9"
          ],
          "correct": "Channel 1",
          "task": "t1"
        }
      ],
      "payload": {
        "label": "WLAN CONFIG",
        "placeholder": "ssid CORP-WIFI band 5GHz channel 36 width 40",
        "button": "Deploy",
        "response": "[WLC] SSID CORP-WIFI created.\n[WLC] AP-12 radio set to channel 36 width 40.\n[WLC] Beacon broadcasting.",
        "task": "t2"
      },
      "commands": [
        {
          "cmd": "show ap radio AP-12",
          "out": "[WLC] 2.4GHz channel 1 power 8dBm\n[WLC] 5GHz channel 36 power 11dBm",
          "task": "t3"
        },
        {
          "cmd": "show wireless client summary",
          "out": "[WLC] client a4:c3 associated CORP-WIFI\n[WLC] rssi -58 dBm rate 433Mbps",
          "task": "t4"
        },
        {
          "cmd": "show wlan summary",
          "out": "[WLC] CORP-WIFI enabled\n[WLC] GUEST enabled"
        }
      ]
    }
  },
  {
    "id": "Lab 09",
    "num": 9,
    "group": "IMPLEMENTATION",
    "title": "Switch Hardening and Spanning Tree",
    "desc": "Stabilize a switched network with Spanning Tree Protocol and protect edge ports using PortFast and BPDU Guard. The student selects the rapid STP variant, applies edge protections, and confirms a loop-free topology.",
    "objectives": [
      "Explain STP root bridge election and port roles.",
      "Apply PortFast and BPDU Guard on edge ports.",
      "Verify a loop-free converged topology."
    ],
    "console": {
      "host": "dist-sw01",
      "boot": [
        "[SYS] Lab environment online.",
        "[SYS] Redundant switch loop detected."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the rapid spanning tree mode"
        },
        {
          "id": "t2",
          "label": "Apply edge port protection commands"
        },
        {
          "id": "t3",
          "label": "Display spanning tree port roles"
        },
        {
          "id": "t4",
          "label": "Verify BPDU Guard is active"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Rapid convergence STP mode",
          "options": [
            "PVST",
            "Rapid-PVST",
            "MST legacy",
            "Common STP"
          ],
          "correct": "Rapid-PVST",
          "task": "t1"
        }
      ],
      "payload": {
        "label": "HARDENING CONFIG",
        "placeholder": "int gi0/5 spanning-tree portfast; spanning-tree bpduguard enable",
        "button": "Apply",
        "response": "[SW] PortFast enabled on Gi0/5.\n[SW] BPDU Guard enabled on Gi0/5.\n[SW] Edge port protected.",
        "task": "t2"
      },
      "commands": [
        {
          "cmd": "show spanning-tree",
          "out": "[STP] Root bridge this switch\n[STP] Gi0/24 root Gi0/23 blocking",
          "task": "t3"
        },
        {
          "cmd": "show spanning-tree summary",
          "out": "[STP] BPDU Guard enabled by default\n[STP] PortFast edge ports 1",
          "task": "t4"
        },
        {
          "cmd": "show spanning-tree root",
          "out": "[STP] Root ID priority 24576\n[STP] hello 2 max-age 20"
        }
      ]
    }
  },
  {
    "id": "Lab 10",
    "num": 10,
    "group": "OPERATIONS",
    "title": "Network Telemetry and SNMP Monitoring",
    "desc": "Instrument devices for monitoring by configuring SNMP and exporting flow and syslog telemetry to a collector. The student selects the secure SNMP version, applies the polling configuration, and verifies traps arrive.",
    "objectives": [
      "Compare SNMP versions and their security models.",
      "Configure SNMP communities and trap destinations.",
      "Verify telemetry reaches the collector."
    ],
    "console": {
      "host": "nms-poller",
      "boot": [
        "[SYS] Lab environment online.",
        "[SYS] Collector 10.0.5.10 listening."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the SNMP version with authentication and encryption"
        },
        {
          "id": "t2",
          "label": "Apply the SNMP and trap configuration"
        },
        {
          "id": "t3",
          "label": "Poll a device for interface counters"
        },
        {
          "id": "t4",
          "label": "Verify traps received at the collector"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "SNMP version with auth and privacy",
          "options": [
            "SNMPv1",
            "SNMPv2c",
            "SNMPv3",
            "SNMPv0"
          ],
          "correct": "SNMPv3",
          "task": "t1"
        }
      ],
      "payload": {
        "label": "SNMP CONFIG",
        "placeholder": "snmp-server host 10.0.5.10 version 3 priv; snmp-server enable traps",
        "button": "Apply",
        "response": "[NMS] SNMPv3 user configured with auth and priv.\n[NMS] Trap host 10.0.5.10 added.\n[NMS] Trap notifications enabled.",
        "task": "t2"
      },
      "commands": [
        {
          "cmd": "snmpwalk 10.0.0.1 ifTable",
          "out": "[NMS] ifIndex 1 Gi0/0 up\n[NMS] ifInOctets 184320",
          "task": "t3"
        },
        {
          "cmd": "show logging collector",
          "out": "[NMS] trap linkDown received from 10.0.0.1\n[NMS] collector queue healthy",
          "task": "t4"
        },
        {
          "cmd": "show snmp",
          "out": "[NMS] SNMP agent enabled\n[NMS] contact netops location DC1"
        }
      ]
    }
  },
  {
    "id": "Lab 11",
    "num": 11,
    "group": "OPERATIONS",
    "title": "High Availability and Redundancy",
    "desc": "Build resilience with a first-hop redundancy protocol for gateway failover and LACP for link aggregation. The student selects the FHRP, bundles uplinks, and verifies failover keeps traffic flowing.",
    "objectives": [
      "Compare HSRP, VRRP, and GLBP behavior.",
      "Configure LACP link aggregation across uplinks.",
      "Verify gateway failover and bundle status."
    ],
    "console": {
      "host": "dist-sw02",
      "boot": [
        "[SYS] Lab environment online.",
        "[SYS] Dual-uplink redundant pair loaded."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the open-standard first-hop redundancy protocol"
        },
        {
          "id": "t2",
          "label": "Apply the LACP aggregation configuration"
        },
        {
          "id": "t3",
          "label": "Display the FHRP group state"
        },
        {
          "id": "t4",
          "label": "Verify the port-channel is bundled"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Open-standard FHRP",
          "options": [
            "HSRP",
            "VRRP",
            "GLBP",
            "STP"
          ],
          "correct": "VRRP",
          "task": "t1"
        }
      ],
      "payload": {
        "label": "ETHERCHANNEL CONFIG",
        "placeholder": "int range gi0/1-2 channel-group 1 mode active",
        "button": "Apply",
        "response": "[SW] LACP mode active on Gi0/1 and Gi0/2.\n[SW] Port-channel 1 created.\n[SW] Negotiation in progress.",
        "task": "t2"
      },
      "commands": [
        {
          "cmd": "show vrrp brief",
          "out": "[FHRP] VRRP group 10 state Master\n[FHRP] virtual IP 10.0.0.1 active",
          "task": "t3"
        },
        {
          "cmd": "show etherchannel summary",
          "out": "[SW] Po1 SU LACP\n[SW] Gi0/1 P Gi0/2 P",
          "task": "t4"
        },
        {
          "cmd": "show interfaces port-channel 1",
          "out": "[SW] Po1 up line protocol up\n[SW] members 2 bandwidth 2Gbps"
        }
      ]
    }
  },
  {
    "id": "Lab 12",
    "num": 12,
    "group": "OPERATIONS",
    "title": "Disaster Recovery and Backup",
    "desc": "Protect configurations and plan recovery by backing up device configs and reviewing recovery objectives. The student selects the correct recovery metric, triggers a config backup, and validates restore readiness.",
    "objectives": [
      "Differentiate RPO and RTO recovery objectives.",
      "Automate configuration backup to a remote server.",
      "Compare cold, warm, and hot recovery sites."
    ],
    "console": {
      "host": "backup-mgr",
      "boot": [
        "[SYS] Lab environment online.",
        "[SYS] TFTP server 10.0.6.5 reachable."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the metric for maximum tolerable data loss"
        },
        {
          "id": "t2",
          "label": "Back up the running configuration"
        },
        {
          "id": "t3",
          "label": "List stored configuration backups"
        },
        {
          "id": "t4",
          "label": "Verify a restore point is valid"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Metric for maximum acceptable data loss",
          "options": [
            "RTO",
            "RPO",
            "MTBF",
            "MTTR"
          ],
          "correct": "RPO",
          "task": "t1"
        }
      ],
      "payload": {
        "label": "BACKUP JOB",
        "placeholder": "copy running-config tftp://10.0.6.5/core-sw01.cfg",
        "button": "Run",
        "response": "[BKP] Running-config copied to 10.0.6.5.\n[BKP] File core-sw01.cfg written 18KB.\n[BKP] Checksum verified.",
        "task": "t2"
      },
      "commands": [
        {
          "cmd": "show backup list",
          "out": "[BKP] core-sw01.cfg 2026-06-27\n[BKP] rtr-edge01.cfg 2026-06-26",
          "task": "t3"
        },
        {
          "cmd": "verify restore-point",
          "out": "[BKP] Restore point integrity OK\n[BKP] Last good backup 2 hours ago",
          "task": "t4"
        },
        {
          "cmd": "show recovery sites",
          "out": "[DR] hot-site active\n[DR] cold-site standby"
        }
      ]
    }
  },
  {
    "id": "Lab 13",
    "num": 13,
    "group": "OPERATIONS",
    "title": "Documentation and Change Management",
    "desc": "Maintain operational hygiene by updating network diagrams, IP address management records, and a change ticket. The student selects the correct documentation artifact, submits a change request, and verifies the audit log.",
    "objectives": [
      "Identify key network documentation artifacts.",
      "Follow a change management approval workflow.",
      "Maintain accurate IPAM and diagram records."
    ],
    "console": {
      "host": "docs-portal",
      "boot": [
        "[SYS] Lab environment online.",
        "[SYS] CMDB and IPAM synced."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the document showing physical rack and cabling"
        },
        {
          "id": "t2",
          "label": "Submit a formal change request"
        },
        {
          "id": "t3",
          "label": "Display the IPAM allocation record"
        },
        {
          "id": "t4",
          "label": "Verify the change audit log entry"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Document showing physical layout and cabling",
          "options": [
            "Logical diagram",
            "Physical diagram",
            "Baseline report",
            "SLA sheet"
          ],
          "correct": "Physical diagram",
          "task": "t1"
        }
      ],
      "payload": {
        "label": "CHANGE REQUEST",
        "placeholder": "CR-2041 add VLAN 30 window Sat 2200 rollback documented",
        "button": "Submit",
        "response": "[CMS] Change CR-2041 submitted for approval.\n[CMS] Maintenance window scheduled.\n[CMS] Rollback plan attached.",
        "task": "t2"
      },
      "commands": [
        {
          "cmd": "show ipam allocations",
          "out": "[IPAM] 10.0.10.0/24 SALES in use\n[IPAM] 10.0.20.0/24 ENG in use",
          "task": "t3"
        },
        {
          "cmd": "show change log",
          "out": "[CMS] CR-2041 status approved\n[CMS] approver netops-lead",
          "task": "t4"
        },
        {
          "cmd": "show documents",
          "out": "[DOC] physical-diagram v4\n[DOC] logical-diagram v7"
        }
      ]
    }
  },
  {
    "id": "Lab 14",
    "num": 14,
    "group": "SECURITY",
    "title": "Network Segmentation and Zero Trust",
    "desc": "Reduce attack surface by segmenting the network with VLANs and access control lists under a zero trust model. The student selects the least-privilege policy, applies an ACL, and verifies inter-segment traffic is filtered.",
    "objectives": [
      "Apply segmentation to isolate trust zones.",
      "Build an ACL enforcing least privilege.",
      "Verify denied and permitted inter-segment flows."
    ],
    "console": {
      "host": "fw-edge01",
      "boot": [
        "[SYS] Lab environment online.",
        "[SYS] Segments USERS, SERVERS, IOT defined."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the default policy for zero trust"
        },
        {
          "id": "t2",
          "label": "Apply the inter-segment access control list"
        },
        {
          "id": "t3",
          "label": "Display the active ACL hit counters"
        },
        {
          "id": "t4",
          "label": "Verify blocked traffic from IOT to SERVERS"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Zero trust default policy",
          "options": [
            "Permit any any",
            "Implicit permit",
            "Default deny",
            "Trust internal"
          ],
          "correct": "Default deny",
          "task": "t1"
        }
      ],
      "payload": {
        "label": "ACL CONFIG",
        "placeholder": "permit tcp USERS host 10.0.20.5 eq 443; deny ip IOT SERVERS",
        "button": "Apply",
        "response": "[FW] Rule permit USERS to 10.0.20.5:443 added.\n[FW] Rule deny IOT to SERVERS added.\n[FW] Implicit deny remains last.",
        "task": "t2"
      },
      "commands": [
        {
          "cmd": "show access-lists",
          "out": "[FW] permit tcp USERS 10.0.20.5 eq 443 (42 hits)\n[FW] deny ip IOT SERVERS (17 hits)",
          "task": "t3"
        },
        {
          "cmd": "test flow iot to servers",
          "out": "[FW] Source IOT dst SERVERS\n[FW] Result DENIED by rule 2",
          "task": "t4"
        },
        {
          "cmd": "show zones",
          "out": "[FW] USERS SERVERS IOT defined\n[FW] inspection stateful"
        }
      ]
    }
  },
  {
    "id": "Lab 15",
    "num": 15,
    "group": "SECURITY",
    "title": "VPN and Remote Access",
    "desc": "Establish secure remote connectivity with a site-to-site IPsec tunnel and a client SSL VPN. The student selects the IPsec phase parameters, applies the tunnel configuration, and verifies the security association is up.",
    "objectives": [
      "Compare IPsec site-to-site and SSL client VPNs.",
      "Configure IKE and IPsec tunnel parameters.",
      "Verify the established security association."
    ],
    "console": {
      "host": "vpn-gw01",
      "boot": [
        "[SYS] Lab environment online.",
        "[SYS] Peer 203.0.113.7 reachable."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the protocol providing IPsec encryption"
        },
        {
          "id": "t2",
          "label": "Apply the IPsec tunnel configuration"
        },
        {
          "id": "t3",
          "label": "Display IKE phase 1 status"
        },
        {
          "id": "t4",
          "label": "Verify the IPsec security association"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "IPsec protocol providing encryption",
          "options": [
            "AH",
            "ESP",
            "GRE",
            "L2TP"
          ],
          "correct": "ESP",
          "task": "t1"
        }
      ],
      "payload": {
        "label": "TUNNEL CONFIG",
        "placeholder": "crypto map VPN peer 203.0.113.7 esp-aes-256 sha256 pfs group14",
        "button": "Apply",
        "response": "[VPN] IKE policy AES-256 SHA-256 set.\n[VPN] Transform set ESP applied.\n[VPN] Tunnel to 203.0.113.7 initiating.",
        "task": "t2"
      },
      "commands": [
        {
          "cmd": "show crypto isakmp sa",
          "out": "[VPN] 203.0.113.7 QM_IDLE\n[VPN] IKE phase 1 established",
          "task": "t3"
        },
        {
          "cmd": "show crypto ipsec sa",
          "out": "[VPN] pkts encaps 240 decaps 238\n[VPN] SA active ESP AES-256",
          "task": "t4"
        },
        {
          "cmd": "show vpn-sessiondb",
          "out": "[VPN] SSL clients 3 connected\n[VPN] IPsec tunnels 1 up"
        }
      ]
    }
  },
  {
    "id": "Lab 16",
    "num": 16,
    "group": "SECURITY",
    "title": "Network Hardening and Port Security",
    "desc": "Harden switch access by enabling port security, DHCP snooping, and dynamic ARP inspection. The student selects the violation action, applies port security, and verifies a rogue MAC triggers enforcement.",
    "objectives": [
      "Configure port security with MAC limits.",
      "Enable DHCP snooping and dynamic ARP inspection.",
      "Verify violation handling on edge ports."
    ],
    "console": {
      "host": "access-sw03",
      "boot": [
        "[SYS] Lab environment online.",
        "[SYS] Edge ports active with hosts."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the violation mode that drops traffic and logs"
        },
        {
          "id": "t2",
          "label": "Apply the port security configuration"
        },
        {
          "id": "t3",
          "label": "Display port security status"
        },
        {
          "id": "t4",
          "label": "Verify a violation was recorded"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Violation mode that drops and logs without disabling the port",
          "options": [
            "Protect",
            "Restrict",
            "Shutdown",
            "Permit"
          ],
          "correct": "Restrict",
          "task": "t1"
        }
      ],
      "payload": {
        "label": "PORT SECURITY",
        "placeholder": "int gi0/4 switchport port-security maximum 2 violation restrict",
        "button": "Apply",
        "response": "[SW] Port security enabled on Gi0/4.\n[SW] Max MAC 2 violation restrict.\n[SW] Sticky learning active.",
        "task": "t2"
      },
      "commands": [
        {
          "cmd": "show port-security interface gi0/4",
          "out": "[SW] Port security enabled\n[SW] max 2 current 2 violations 0",
          "task": "t3"
        },
        {
          "cmd": "show port-security address",
          "out": "[SW] violation rogue MAC aa:bb:99 dropped\n[SW] violation count 1",
          "task": "t4"
        },
        {
          "cmd": "show ip dhcp snooping",
          "out": "[SW] snooping enabled VLAN 10\n[SW] trusted uplink Gi0/24"
        }
      ]
    }
  },
  {
    "id": "Lab 17",
    "num": 17,
    "group": "SECURITY",
    "title": "Wireless Security and Authentication",
    "desc": "Secure the wireless LAN with modern encryption and enterprise authentication via 802.1X and RADIUS. The student selects the strongest security mode, applies the WPA enterprise config, and verifies a client authenticates.",
    "objectives": [
      "Compare WPA2 and WPA3 security modes.",
      "Configure 802.1X with a RADIUS server.",
      "Verify enterprise client authentication."
    ],
    "console": {
      "host": "wlc-02",
      "boot": [
        "[SYS] Lab environment online.",
        "[SYS] RADIUS 10.0.7.20 reachable."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the strongest available wireless security mode"
        },
        {
          "id": "t2",
          "label": "Apply the WPA enterprise and RADIUS config"
        },
        {
          "id": "t3",
          "label": "Display the RADIUS server status"
        },
        {
          "id": "t4",
          "label": "Verify a client passed 802.1X authentication"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Strongest wireless security mode",
          "options": [
            "WEP",
            "WPA-PSK",
            "WPA2-Personal",
            "WPA3-Enterprise"
          ],
          "correct": "WPA3-Enterprise",
          "task": "t1"
        }
      ],
      "payload": {
        "label": "WLAN SECURITY",
        "placeholder": "wlan CORP wpa3 enterprise radius 10.0.7.20 key secret",
        "button": "Apply",
        "response": "[WLC] WPA3-Enterprise enabled on CORP.\n[WLC] RADIUS 10.0.7.20 added for 802.1X.\n[WLC] Dot1x key management active.",
        "task": "t2"
      },
      "commands": [
        {
          "cmd": "show radius statistics",
          "out": "[WLC] 10.0.7.20 reachable\n[WLC] access-accept 14 reject 1",
          "task": "t3"
        },
        {
          "cmd": "show wireless client detail",
          "out": "[WLC] client 9c:fc auth 802.1X passed\n[WLC] EAP method PEAP encrypted",
          "task": "t4"
        },
        {
          "cmd": "show wlan security CORP",
          "out": "[WLC] WPA3 SAE and 802.1X\n[WLC] management frame protection required"
        }
      ]
    }
  },
  {
    "id": "Lab 18",
    "num": 18,
    "group": "TROUBLESHOOTING",
    "title": "Copper and Fiber Media Faults",
    "desc": "Diagnose physical layer faults across copper and fiber links using cable tests and optical readings. The student identifies the cable type for a run, runs a TDR test, and verifies a fiber transceiver light level.",
    "objectives": [
      "Recognize symptoms of copper and fiber faults.",
      "Select correct cable types and connectors.",
      "Interpret cable test and optical power readings."
    ],
    "console": {
      "host": "field-tester",
      "boot": [
        "[SYS] Lab environment online.",
        "[SYS] Suspect link Gi0/12 flapping."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the cable type for a 40km single-mode run"
        },
        {
          "id": "t2",
          "label": "Run a time-domain reflectometer cable test"
        },
        {
          "id": "t3",
          "label": "Display interface error counters"
        },
        {
          "id": "t4",
          "label": "Verify the optical transceiver power level"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Cable for a long 40km link",
          "options": [
            "Cat5e UTP",
            "Cat6a UTP",
            "Multimode fiber",
            "Single-mode fiber"
          ],
          "correct": "Single-mode fiber",
          "task": "t1"
        }
      ],
      "payload": {
        "label": "CABLE TEST",
        "placeholder": "test tdr interface gi0/12",
        "button": "Run",
        "response": "[TDR] Pair A open at 38 meters.\n[TDR] Pairs B C D normal.\n[TDR] Fault suggests broken copper pair.",
        "task": "t2"
      },
      "commands": [
        {
          "cmd": "show interface gi0/12 counters errors",
          "out": "[IOS] CRC 1842 input errors rising\n[IOS] runts 12 giants 0",
          "task": "t3"
        },
        {
          "cmd": "show interface transceiver",
          "out": "[OPT] Rx power -3.1 dBm normal\n[OPT] Tx power -2.0 dBm normal",
          "task": "t4"
        },
        {
          "cmd": "show interface gi0/12 status",
          "out": "[IOS] Gi0/12 err-disabled\n[IOS] flapping detected"
        }
      ]
    }
  },
  {
    "id": "Lab 19",
    "num": 19,
    "group": "TROUBLESHOOTING",
    "title": "Command-Line Diagnostics",
    "desc": "Isolate a reachability problem using core CLI diagnostic tools across the host and network path. The student selects the right tool for path tracing, inspects sockets, and verifies name resolution.",
    "objectives": [
      "Choose the correct CLI tool for each symptom.",
      "Trace a path and interpret hop latency.",
      "Inspect sockets and validate DNS resolution."
    ],
    "console": {
      "host": "diag-host01",
      "boot": [
        "[SYS] Lab environment online.",
        "[SYS] Target app.example.com unreachable."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the tool that maps the hop-by-hop path"
        },
        {
          "id": "t2",
          "label": "Trace the route to the target host"
        },
        {
          "id": "t3",
          "label": "Inspect active listening sockets"
        },
        {
          "id": "t4",
          "label": "Verify DNS resolution for the host"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "Tool that reveals each Layer 3 hop",
          "options": [
            "ping",
            "traceroute",
            "netstat",
            "arp"
          ],
          "correct": "traceroute",
          "task": "t1"
        }
      ],
      "commands": [
        {
          "cmd": "traceroute app.example.com",
          "out": "[NET] 1 10.0.0.1 1ms\n[NET] 3 * * * timeout beyond hop 2",
          "task": "t2"
        },
        {
          "cmd": "netstat -an",
          "out": "[HOST] tcp 0.0.0.0:443 LISTEN\n[HOST] tcp 10.0.0.50:51020 ESTABLISHED",
          "task": "t3"
        },
        {
          "cmd": "dig app.example.com",
          "out": "[DNS] app.example.com A 203.0.113.40\n[DNS] status NOERROR ttl 300",
          "task": "t4"
        },
        {
          "cmd": "ping 10.0.0.1",
          "out": "[NET] 5 packets transmitted, 5 received\n[NET] gateway reachable"
        }
      ]
    }
  },
  {
    "id": "Lab 20",
    "num": 20,
    "group": "CAPSTONE",
    "title": "End-to-End Connectivity Triage",
    "desc": "Apply the structured troubleshooting methodology to restore end-to-end connectivity across multiple layers. The student selects the first methodology step, corrects a misconfigured gateway, and verifies full path connectivity from client to server.",
    "objectives": [
      "Follow the seven-step troubleshooting methodology.",
      "Correlate symptoms across OSI layers to a root cause.",
      "Verify restored end-to-end connectivity."
    ],
    "console": {
      "host": "noc-jump01",
      "boot": [
        "[SYS] Lab environment online.",
        "[SYS] Ticket client cannot reach server farm.",
        "[SYS] Multi-layer fault staged."
      ],
      "tasks": [
        {
          "id": "t1",
          "label": "Select the first step of the troubleshooting methodology"
        },
        {
          "id": "t2",
          "label": "Apply the corrected default gateway"
        },
        {
          "id": "t3",
          "label": "Display the active route to the server"
        },
        {
          "id": "t4",
          "label": "Verify end-to-end client to server reachability"
        }
      ],
      "configs": [
        {
          "id": "c1",
          "label": "First troubleshooting methodology step",
          "options": [
            "Establish a theory",
            "Identify the problem",
            "Implement a fix",
            "Document findings"
          ],
          "correct": "Identify the problem",
          "task": "t1"
        }
      ],
      "payload": {
        "label": "REMEDIATION",
        "placeholder": "ip default-gateway 10.0.30.1",
        "button": "Apply",
        "response": "[FIX] Default gateway corrected to 10.0.30.1.\n[FIX] ARP for gateway resolved.\n[FIX] Layer 3 path restored.",
        "task": "t2"
      },
      "commands": [
        {
          "cmd": "show ip route 10.0.40.0",
          "out": "[RTR] S 10.0.40.0/24 via 10.0.30.1\n[RTR] route installed",
          "task": "t3"
        },
        {
          "cmd": "ping 10.0.40.10 source client",
          "out": "[NET] 5 packets transmitted, 5 received\n[NET] client to server farm reachable",
          "task": "t4"
        },
        {
          "cmd": "show cdp neighbors",
          "out": "[CDP] rtr-core02 Gi0/0\n[CDP] dist-sw01 Gi0/1"
        }
      ]
    }
  }
];
