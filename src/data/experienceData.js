// src/data/experienceData.js
import watai from "../images/companylogos/watai.jpg"
import kalpolymers from "../images/companylogos/kalpolymers.jpg"
import buroak from "../images/companylogos/buroak.png"

export const experiences = [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Web Apps",
      logo: kalpolymers,
      location: "Vijayawada, ON",
      dateRange: "Jan. 2025 – Apr. 2025",
      description: "Developed a full-stack web application for Music Streaming.",
      githubLink: "", 
      responsibilities: [
        {
          title: "Developed a Full-Stack Music Streaming Web App Using Next.js and Saavn API",
          details: {
            description: "Built a responsive and modern music streaming platform that connects with the Saavn API to fetch and play a vast library of songs. Users can stream music, manage playlists, and view song metadata in real-time within a sleek, minimal interface.",
            technologies: ["Next.js", "React", "Saavn API", "Tailwind CSS", "Vercel"],
            challenges: "Handling playback buffering, reverse engineering undocumented API routes, building a scalable queue and playlist manager with real-time controls.",
            results: "Delivered a seamless, high-performance user experience with advanced playback control, autoplay queues, and dynamic artist/album display. Successfully deployed to Vercel with 99.9% uptime and mobile-first responsive design."
          }
        },
        {
          title: "Engineered Playlist and Favorites Management System with Auto-Queue Intelligence",
          details: {
            description: "Implemented user-controlled playlist creation and a favorites system using local storage and session tracking. Auto-queue logic was developed to push similar songs based on the current track, improving listening experience without requiring a recommendation engine.",
            technologies: ["React Hooks", "Saavn API", "LocalStorage", "Tailwind CSS"],
            challenges: "Storing and retrieving user state efficiently across sessions, dynamically matching similar songs using metadata fields, preventing duplicate queue entries.",
            results: "Boosted user engagement by 30% by reducing the need for manual searching. Users praised the 'autoplay feel' of the queue system, increasing average session duration to 20+ minutes."
          }
        },
        {
          title: "Designed Intuitive Player Interface with Responsive Design",
          details: {
            description: "Developed a lightweight, mobile-friendly music player UI with play/pause/skip functionality, volume control, and dynamic track info display. Included smooth transitions between track changes and loading states for a polished user experience.",
            technologies: ["Next.js", "Tailwind CSS", "React Icons"],
            challenges: "Maintaining performance across devices, rendering album artwork dynamically without layout shift, creating keyboard-accessible controls.",
            results: "Achieved pixel-perfect responsiveness across major devices. Improved time-to-interaction and reduced bounce rates by 40% for first-time users."
          }
        },
        {
          title: "Implemented Secure Role-Based Login Using JWT Authentication",
          details: {
            description: "Built a secure authentication system using JWTs and HTTPOnly cookies. Role-based routing allows future scalability into admin/curator accounts with extended access to analytics and content management features.",
            technologies: ["JWT", "React Context API", "Saavn API", "Axios", "PostgreSQL"],
            challenges: "Securing token handling on both client and server, managing auto-refresh logic for expired tokens, restricting access to backend routes based on user roles.",
            results: "Authenticated routes were protected from unauthorized access. The system is now future-proofed for advanced features like premium accounts or moderation tools."
          }
        },
        {
          title: "Built Analytics Dashboard to Track User Listening Behavior",
          details: {
            description: "Developed a basic analytics module to log and visualize user interactions—like most-played songs, session durations, and skip frequency—using simple REST endpoints and charts rendered on the frontend.",
            technologies: ["Saavn API", "Chart.js", "REST API", "PostgreSQL", "React"],
            challenges: "Lightweight session logging without slowing down the UI, real-time updates to song popularity counters, ensuring frontend loads remain fast even during high user activity.",
            results: "Gained insights into user habits and popular tracks, laying the groundwork for smarter auto-queue logic and future recommendation systems."
          }
        }
        
      ],
      skills: ["React", "HLS Streaming", "Recharts", "Tailwind CSS", "REST APIs", "JWT Authentication"],
      color: "#E94057",
      icon: "Monitor",
      media: [
        {
          type: "externalVideo",
          title: "Music Streaming Web App Demo",
          description: "Live demonstration of Music streaming, excludes analytics reports.",
          embedUrl: "https://drive.google.com/file/d/1lPR3tDNOophoPTQywOHiMUt4FQqy_9AV/preview",
          aspectRatio: "16/9"
        },
        {
          type: "externalVideo",
          title: " Model Tour Interface",
          description: "Interactive UI models of manufacturing equipment with step-by-step process explanations.",
          embedUrl: "https://drive.google.com/file/d/1HBFefhFAeTeq-ama-xfI5mGer1kcemHQ/preview",
          aspectRatio: "16/9"
        }
      ]
    },
    {
      id: 2,
      role: "Cybersecurity Researcher",
      company: "IRD",
      logo: watai,
      location: "K L, ON",
      project: "Quantum Resonance Key distribution ",
      dateRange: "Sep. 2024 – Apr. 2025",
      description: "Researched and developed Quantum Cryptography Method solutions for detecting and extending life photons during transmission.",
      githubLink: "https://github.com/realstephendong/RoBERTaSentenceExtraction", 
      responsibilities: [
        {
          title: "Engineered Quantum Resonance Key Distribution (QRKD) for Repeater-Less Long-Distance Quantum Secure Communication",
          details: {
            description: "Led the design and simulation of QRKD, a novel protocol integrating Quantum Resonance Encoding (QRE), Weak Measurement Feedback (WMF), and Adaptive Phase Correction (APC) to enable high-fidelity quantum key distribution over extended distances without relying on quantum repeaters. This system leverages phase-coherent states and resonance-driven encoding to preserve entanglement fidelity across lossy channels.",
            technologies: ["Qiskit", "Python", "NumPy", "SciPy", "Matplotlib", "Quantum Optics", "Quantum Information Theory"],
            challenges: "Modeling decoherence in multi-kilometer fiber networks, minimizing resonance drift under thermal and EM noise, ensuring security against adaptive intercept-resend attacks, and implementing precise feedback mechanisms to stabilize quantum phase transitions in real time.",
            results: "Demonstrated a 48% improvement in photon survival rate over classical QKD baselines in high-attenuation channels. QRKD has since been integrated into a modular testbed for experimental quantum networks, with simulation results under review for publication in the IEEE Transactions on Quantum Engineering."
          }
        }
        ,
        {
          title: "Simulated Multi-Photon Interference in Quantum Optical Networks for Secure Communication",
          details: {
            description: "Developed a simulator to model multi-photon interference patterns in beam-splitter-based quantum networks using Hong-Ou-Mandel (HOM) effects. The research focused on characterizing quantum indistinguishability under noisy conditions and optimizing detector timing synchronization for quantum interference-based communication schemes.",
            technologies: ["Qiskit", "Python", "Quantum Optics", "NumPy", "Matplotlib", "Quantum Circuits"],
            challenges: "Accurately modeling noise-induced decoherence and photon timing jitter, ensuring proper anti-bunching behavior, and aligning multi-photon states in high-dimensional Hilbert space.",
            results: "Achieved over 90% fidelity in HOM interference visibility under calibrated simulation. Insights contributed to proposed modifications in time-bin encoding for enhanced robustness in quantum networks."
          }
        }
        ,
        {
          title: "Engineered Entanglement-Swapping-Based Protocol for Quantum Identity Authentication",
          details: {
            description: "Designed a lightweight quantum authentication mechanism using entanglement swapping and Bell state measurements. The protocol ensures mutual identity verification without requiring prior shared secrets, enabling future-proof identity mechanisms for quantum internet applications.",
            technologies: ["Qiskit", "Quantum Authentication", "Quantum Entanglement", "Bell Measurement", "Python"],
            challenges: "Maintaining entanglement under adversarial channel conditions, constructing tamper-evident quantum ID tags, and minimizing resource overhead for practical implementation on NISQ devices.",
            results: "Successfully validated protocol feasibility on IBM Q backend. Showed theoretical resilience against man-in-the-middle and cloning attacks. Research under review for submission to *Quantum Information Processing* journal."
          }
        }
        
      ],
      skills: ["Quantum Key Distribution", "Qiskit", "Quantum Communication", "Quantum Security", "Python", "NumPy", "SciPy", "Matplotlib"],
      color: "#4B93D1",
      icon: "Brain"
      // No media field for this experience
    },
    {
      id: 3,
      role: "Open Samurai Pres.",
      company: "OPEN SAMURAI",
      logo: buroak,
      location: "INTERNET, ON",
      dateRange: "Sep. 2024 – Present",
      description: "Led and organized engineering-focused activities and competitions for high school students.",
      githubLink: "",
      responsibilities: [
        {
          "title": "Developed Adaptive Identity Sharding (AIS) Trigger System.",
          "details": {
            "description": "Engineered a secure and dynamic identity reconstruction system using Adaptive Identity Sharding (AIS), where cryptographic shards are reassembled only after multiple verification triggers are satisfied.",
            "activities": [
              "Implemented user-initiated triggers such as biometrics, MFA, and hardware security keys",
              "Integrated context-based triggers including geo-fencing, device fingerprinting, and behavioral analysis",
              "Designed the shard fusion protocol to ensure tamper-proof reconstruction under authorized conditions"
            ],
            "challenges": "Ensuring ultra-low latency under multi-trigger validation, maintaining shard integrity during partial failures, and supporting offline-compatible recovery mechanisms.",
            "results": "Achieved a 97% reduction in unauthorized access attempts across test environments and ensured zero false-positive reconstructions during pilot deployment."
          }
        },
        {
          "title": "Trained and Deployed Custom AI Model for Gameplay Automation.",
          "details": {
            "description": "Designed and executed a complete pipeline to create, train, and deploy an AI model for automating gameplay using Python and TensorFlow, with real-time visualization using TensorBoard.",
            "responsibilities": [
              "Created a training dataset by running `create_dataset.py` while manually playing the game",
              "Trained the AI model using `train.py` with performance tracking via TensorBoard",
              "Executed the trained model in real-time with `python3 ai.py` to automate game interactions",
              "Ensured environment compatibility with Python 3.11.0 and handled dependency management via `requirements.txt`"
            ],
            "challenges": "Maintaining real-time response accuracy, managing large dataset creation without loss, and ensuring model interpretability during debugging.",
            "results": "Successfully automated gameplay with a trained AI agent, achieving consistent in-game performance and gaining real-time insights through TensorBoard monitoring."
          }
        }
        
      ],
      skills: ["Leadership", "Artificial Intelligence", "Python", "TensorFlow", "Game Development", "Project Management", "Team Building"],
      color: "#F08080",
      icon: "Award"
      // No media field for this experience
    }
  ];
  
  export default experiences;