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
    "title": "Drift Shift",
    "description": "Built an open-world driving simulator with realistic vehicle dynamics, physics-based drifting, and stunt gameplay. Engineered vehicle control systems incorporating suspension, tire friction, acceleration, braking, and collision physics.",
    "highlightedDescription": [
      { "text": "Built an open-world driving simulator with ", "highlight": false },
      { "text": "realistic vehicle dynamics", "highlight": true },
      { "text": " and ", "highlight": false },
      { "text": "physics-based drifting", "highlight": true },
      { "text": ". Engineered vehicle control systems incorporating ", "highlight": false },
      { "text": "suspension, tire friction, acceleration, braking, and collision physics", "highlight": true },
      { "text": ". Developed interactive gameplay mechanics including ", "highlight": false },
      { "text": "collectible power-ups, stunt zones, and dynamic environment interactions", "highlight": true },
      { "text": ". Enhanced gameplay responsiveness by tuning physics parameters and optimizing ", "highlight": false },
      { "text": "real-time rendering", "highlight": true },
      { "text": ".", "highlight": false }
    ],
    "image": styleit,
    "link": "https://github.com/apocalypse9949/Drift-Shift",
    "color": "#8A2BE2",
    "tags": ["Unity", "C#", "PhysX", "Game Physics"],
    "date": "2025-06-15"
  },
  {
    "id": 2,
    "title": "Rewind Runner",
    "description": "Developed a fast-paced 2D pixel-art platformer featuring innovative time-loop mechanics and precision-based gameplay. Built a cross-platform application using Capacitor, enabling deployment on both Android and modern web browsers. Optimized rendering and game performance using Canvas and Vite for smooth gameplay across devices.",
    "highlightedDescription": [
      { "text": "Developed a fast-paced ", "highlight": false },
      { "text": "2D pixel-art platformer", "highlight": true },
      { "text": " featuring innovative ", "highlight": false },
      { "text": "time-loop mechanics", "highlight": true },
      { "text": " and precision-based gameplay. Built a ", "highlight": false },
      { "text": "cross-platform application", "highlight": true },
      { "text": " using ", "highlight": false },
      { "text": "Capacitor", "highlight": true },
      { "text": ", enabling deployment on both ", "highlight": false },
      { "text": "Android and modern web browsers", "highlight": true },
      { "text": ". Optimized rendering and game performance using ", "highlight": false },
      { "text": "Canvas and Vite", "highlight": true },
      { "text": " for smooth gameplay across devices.", "highlight": false }
    ],
    "image": handipark,
    "link": "https://github.com/Santh0sh007/Gravit",
    "color": "#4B9CD3",
    "tags": ["JavaScript", "Canvas", "Vite", "Capacitor", "CSS"],
    "date": "2025-06-15"
  }
  ,
  {
    "id": 4,
    "title": "Fare On",
    "description": "Built a real-time multiplayer first-person shooter using Unity with server-authoritative networking powered by Mirror. Developed dedicated server architecture with support for offline play and cross-platform multiplayer on Windows and Linux. Integrated configurable settings, in-game console commands, and automated build workflows to streamline development.",
    "highlightedDescription": [
      { "text": "Built a ", "highlight": false },
      { "text": "real-time multiplayer first-person shooter", "highlight": true },
      { "text": " using Unity with ", "highlight": false },
      { "text": "server-authoritative networking", "highlight": true },
      { "text": " powered by ", "highlight": false },
      { "text": "Mirror", "highlight": true },
      { "text": ". Developed ", "highlight": false },
      { "text": "dedicated server architecture", "highlight": true },
      { "text": " with support for offline play and cross-platform multiplayer on Windows and Linux. Integrated configurable settings, in-game console commands, and ", "highlight": false },
      { "text": "automated build workflows", "highlight": true },
      { "text": " to streamline development.", "highlight": false }
    ],
    "image": brailleconverter,
    "link": "https://github.com/apocalypse9949/Fare-On",
    "color": "#DFD080",
    "tags": ["Unity", "C#", "Mirror Networking", ".NET 6"],
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