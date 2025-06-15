// src/data/projects.js

// image imports
import oncoalert from "../images/oncoalert.png"
import stepcode from "../images/stepcode.png"
import supermario from "../images/supermario.png"
import handipark from "../images/handipark.png"
import brailleconverter from "../images/brailleconverter.png"
import styleit from "../images/styleit.png"

export const projects = [
    {
        "id": 1,
        "title": "GhostNet Worm",
        "description": "GhostNet demonstrates a self-replicating network-based worm leveraging SSH and SFTP via the libssh library. Designed strictly for educational use within sandboxed environments.",
        "highlightedDescription": [
          { "text": "GhostNet", "highlight": true },
          { "text": " is a network-propagating worm built using ", "highlight": false },
          { "text": "libssh", "highlight": true },
          { "text": " to exploit SSH/SFTP access on vulnerable machines. It is intended strictly for ", "highlight": false },
          { "text": "educational and research purposes", "highlight": true },
          { "text": " and must be executed in isolated virtual environments only.", "highlight": false }
        ],
        "image": styleit,
        "link": "https://github.com/apocalypse9949/GhostNet", 
        "color": "#8A2BE2",
        "tags": ["libssh", "SFTP", "Network Worm", "C/C++", "Security Research"],
        "date": "2025-06-15"
      },
      {
        "id": 2,
        "title": "UAV Anomaly Detection System",
        "description": "An AI-powered anomaly detection system designed to enhance UAV safety by analyzing real-time telemetry for motor, sensor, or software failures. Triggers autonomous failsafe actions like Return-to-Home (RTH) or Emergency Landing.",
        "highlightedDescription": [
          { "text": "UAV Anomaly Detection System", "highlight": true },
          { "text": " is an AI-powered system that analyzes ", "highlight": false },
          { "text": "real-time UAV telemetry", "highlight": true },
          { "text": " to detect potential ", "highlight": false },
          { "text": "motor, sensor, or software failures", "highlight": true },
          { "text": ". When triggered, it initiates failsafe actions such as ", "highlight": false },
          { "text": "Return-to-Home (RTH)", "highlight": true },
          { "text": " or ", "highlight": false },
          { "text": "Emergency Landing", "highlight": true },
          { "text": ". Optimized for edge devices, the model significantly reduces in-flight failures.", "highlight": false }
        ],
        "image": handipark,
        "link": "https://github.com/apocalypse9949/Ardupilot_google_summer_of_code_2025",
        "color": "#4B9CD3",
        "tags": ["AI Safety", "Edge ML", "Telemetry Analysis", "Autonomous Drones", "Failsafe Systems"],
        "date": "2025-06-15"
      }
      ,
      {
        "id": 4,
        "title": "Havoc",
        "description": "An open-source personal assistant designed to automate tasks, manage schedules, and interact with the user through natural language commands. Built for extensibility and offline usage.",
        "highlightedDescription": [
          { "text": "An open-source ", "highlight": false },
          { "text": "personal assistant", "highlight": true },
          { "text": " named ", "highlight": false },
          { "text": "Havoc", "highlight": true },
          { "text": " that helps automate tasks, manage schedules, and handle user interactions offline.", "highlight": false }
        ],
        "image": brailleconverter,
        "link": "https://github.com/apocalypse9949/Havoc",
        "color": "#DFD080",
        "tags": ["Python", "NLP", "Automation", "Offline Assistant"],
        "date": "2025-06-15"
      }
      ,
      {
        "id": 5,
        "title": "DeadLock-V2",
        "description": "An OS-level cybersecurity tool that blocks or disrupts target system processes using advanced process control techniques. Built for red team operations with optional stealth modes to bypass basic EDR.",
        "highlightedDescription": [
          { "text": "DeadLock-V2", "highlight": true },
          { "text": " is a cybersecurity tool that utilizes ", "highlight": false },
          { "text": "OS-level process blocking", "highlight": true },
          { "text": " to halt or disrupt critical target operations. Equipped with ", "highlight": false },
          { "text": "stealth techniques", "highlight": true },
          { "text": " to evade basic EDR and enable ethical red team simulations.", "highlight": false }
        ],
        "image": supermario,
        "link": "https://github.com/apocalypse9949/DeadLock-V2",
        "color": "#FF7F50",
        "tags": ["Cybersecurity", "Red Team", "Process Injection", "EDR Evasion", "OS Internals"],
        "date": "2025-06-15"
      },
      {
        "id": 6,
        "title": "Kotatsu",
        "description": "Kotatsu is a free and open-source Android manga reader with over 1100+ online content sources. It features offline reading, incognito mode, tracking integration, and a modern Material You UI. Contributed to key features and stability improvements.",
        "highlightedDescription": [
          { "text": "Kotatsu", "highlight": true },
          { "text": " is a free and open-source ", "highlight": false },
          { "text": "manga reader for Android", "highlight": true },
          { "text": " supporting 1100+ sources, offline reading, and tracking integration. ", "highlight": false },
          { "text": "Contributed as an active developer", "highlight": true },
          { "text": " to enhance features and improve system stability.", "highlight": false }
        ],
        "image": stepcode,
        "link": "https://github.com/apocalypse9949/Kotatsu",
        "color": "#97EB96",
        "tags": ["Android", "Open Source", "Manga Reader", "Material You", "Offline Support", "Contributor"],
        "date": "2025-06-15"
      }
      
];

export default projects;