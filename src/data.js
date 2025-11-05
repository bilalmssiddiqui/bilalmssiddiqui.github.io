// src/data.js
import p_profile from "./assets/profile.jpeg";
import FrejaReflection from "./assets/projects/FrejaReflection.jpg";
import DF_LIC_Z01 from "./assets/projects/DF_LIC_Z01.png";
import DF_CFRP from "./assets/projects/DF_CFRP.jpg";
import DF_Mold from "./assets/projects/DF_Mold.jpg";
import EMill from "./assets/projects/EMill.jpg";
import FW_MasterCAM from "./assets/projects/FW_MasterCAM.jpg";
import MotorCover_MasterCAM from "./assets/projects/MotorCover_MasterCAM.png";
import DF_VV_x34 from "./assets/projects/DF_VV_x34.png";
import VolMeshRef from "./assets/projects/VolMeshRef.png";
import DFBag from "./assets/projects/DFBag.jpg";
import DF_Strake from "./assets/projects/DF_Strake.jpg";
import SS_TotPress from "./assets/projects/SS_TotPress.png";
import ISO from "./assets/projects/ISO.png";
import SR_71 from "./assets/projects/SR-71.png";
import Inlet_shock_waves_at_Mach_2 from "./assets/projects/Inlet_shock_waves_at_Mach_2.jpg";
import engine_mesh from "./assets/projects/engine_mesh.png";
import BusinessJet from "./assets/projects/BusinessJet.png";
import CoughSneeze from "./assets/projects/CoughSneeze.PNG";
import SneezeSide from "./assets/projects/SneezeSide.PNG";
import FSI from "./assets/projects/FSI.PNG";
import CFP_Case1_SP from "./assets/projects/CFP_Case1_SP.png";
import Vel_RW from "./assets/projects/Vel_RW.PNG";
import pres from "./assets/projects/pres.jpeg";
import meshfem from "./assets/projects/meshfem.png";
import FineRW_Mesh from "./assets/projects/FineRW_Mesh.PNG";
import Coupling from "./assets/projects/Coupling.PNG";
import DF_Drag_RW from "./assets/projects/DF_Drag_RW.PNG";
import acp from "./assets/projects/acp.jpeg";
import Deformation from "./assets/projects/Deformation.jpeg";
import StatPress_RW from "./assets/projects/StatPress_RW.PNG";
import fos from "./assets/projects/fos.jpeg";
import ms from "./assets/projects/ms.png";
import HotHumidSneezeTopView from "./assets/projects/HotHumidSneezeTopView.png";
import Mesh_ZoomedIn from "./assets/projects/Mesh_ZoomedIn.PNG";
import MeshMF from "./assets/projects/MeshMF.PNG";
import ColdDrySneezeTopView from "./assets/projects/ColdDrySneezeTopView.png";
import coughside from "./assets/projects/coughside.PNG";
import CoverPicture_V2 from "./assets/projects/CoverPicture_V2.png";
import ANSA_FrontMesh from "./assets/projects/ANSA_FrontMesh.png";
import ElementPatches from "./assets/projects/ElementPatches.png";
import EmissT100 from "./assets/projects/EmissT100.png";
import Solar410 from "./assets/projects/Solar410.png";
import TAITherm_Sim1 from "./assets/projects/TAITherm_Sim1.png";
import Wind_FluidDomain from "./assets/projects/Wind_FluidDomain.png";
import MinMax_V2 from "./assets/projects/MinMax_V2.png";
import Recirculation from "./assets/projects/Recirculation.png";
import p_project3 from "./assets/projects/project3.png";
import heroImg from "./assets/hero.jpg";
import FSG from "./assets/projects/FSG.jpg";
import FSEast from "./assets/projects/FSEast.jpg";

// Dummy .glb model (fallback cube if missing)
const dummyModel = "/models/dummy.glb";

// ---------------- SITE & ABOUT ----------------
export const SITE = {
  name: "Bilal Mohammed Sajjad Siddiqui",
  role: "Mechanical Engineer •  CFD • HVAC & Thermal Systems • Aerodynamics",
  email: "bilalmssiddiqui@gmail.com",
  location: "Göteborg, Sweden",
  resume: "/resume.pdf",
  heroImage: heroImg
};

export const ABOUT = {
  profileImage: p_profile,
  summary: `Performance-driven mechanical engineer with hands-on experience in CFD and thermal simulation, aerodynamic concept design, and validation. I design and validate systems that balance efficiency with innovation. Adept in automating analysis and optimization workflows using Python and MATLAB.`,
  bullets: [
    "M.Sc. Applied Mechanics – Chalmers University of Technology (2023 – 2025).",
    "Previously: Thermal CAE roles at Volvo Cars; ERP Analyst at Schneider Electric.",
    "Core competencies: STAR-CCM+, ANSYS, Siemens NX, CATIA, TAITherm, Python, MATLAB,"
  ]
};

// ---------------- EXPERIENCE ----------------
const rawExperience = [
  {
    title: "Thermal CAE Engineer - Battery Systems",
    org: "Volvo Cars",
    location: "Gothenburg, Sweden",
    period: "June 2024 – August 2024",
    points: [
      "Enhanced efficiency by 35% by reducing pressure drop through iterative cooling plate design changes using ANSYS Discovery.",
      "Benchmarked battery packs from competitor vehicles across key metrics, including NVH study and thermal management, conducting detailed teardown analyses to identify design strengths and innovation opportunities.",
      "Accelerated cross-team design iterations by more than 50 % by completing advanced Teamcenter PLM and CATIA V5 training, streamlining CAD data management and cutting design-change turnaround time in collaborative projects."
    ],
    media: [
      { type: "image", src: "/src/assets/experience/AD_CP.png", caption: "Cooling plate design evaluation using ANSYS Discovery." },
      { type: "image", src: "/src/assets/experience/HT.png", caption: "Heat transfer simulation between battery cells and cooling plate using ANSYS Discovery." }
    ],
    links: [
      { url: "https://www.example.com/thermal-paper", caption: "View related publication" }
    ]
  },
  {
    title: "ERP Business Analyst",
    org: "Schneider Electric",
    location: "Bangalore, India",
    period: "October 2022 - August 2023",
    points: [
      "Delivered USD 12,000+ in cost savings by implementing the Mobile Supply Chain Application, driving alignment and efficiency across cross-functional teams, acting as the single point of contact.",
      "Established 100% end-to-end product traceability at the BEF plant in Bangalore by designing and deploying the Pallet Tracking System, enabling real-time product monitoring from the shop floor to the customer.",
      "Reduced month-end system downtime by 65% by developing remediation scripts with the help of root cause analysis for recurring Supply Chain and Warehousing issues, preventing disruptions and boosting efficiency. "
    ],
    //media: [
    //  { type: "image", src: "/src/assets/experience/lab_photo.jpg", caption: "Lab experiment setup" }
    //],
    //links: [
    //  { url: "https://github.com/energytechlabs/thermal", caption: "GitHub repository" }
    //]
  },

  {
    title: "Graduate Engineer Trainee",
    org: "Schneider Electric",
    location: "Bangalore, India",
    period: "August 2021 - October 2022",
    points: [
      "Eliminated frequent system and process errors by proactive resolution and monitoring alerts, cutting monthly support tickets by 10%, and ensuring smoother operations.",
      "Developed strong leadership and interpersonal skills by driving automation and innovation initiatives in a team of 40+ colleagues.",
      "Validated system reliability during platform upgrade by testing 100+ programs and helping fix subsequent issues, ensuring seamless operation and minimising post-upgrade issues."
    ],
    //media: [
    //  { type: "image", src: "/src/assets/experience/lab_photo.jpg", caption: "Lab experiment setup" }
    //],
    //links: [
    //  { url: "https://github.com/energytechlabs/thermal", caption: "GitHub repository" }
    //]
  }
];

export const EXPERIENCE = rawExperience.map((item, index) => ({ ...item, id: index + 1 }));

// ---------------- EDUCATION ----------------
const rawEducation = [
  {
    title: "MSc. in Applied Mechanics",
    org: "Chalmers University of Technology, CGPA 4.5/5",
    location: "Göteborg, Sweden",
    period: "August 2023 – September 2025",
    points: [
      "Project Engineer in Aerodynamics at Chalmers Formula Student.",
      "Master’s thesis focused on heat transfer optimization using CFD."
    ],
    media: [
      { type: "image", src: "/src/assets/education/Freja.jpg", caption: "Formula Student" },
      { type: "image", src: "/src/assets/education/TP.jpg", caption: "Chalmers Formula Student 2024" },
      { type: "link", url: "https://odr.chalmers.se/items/00ba9309-9c38-4be2-b0ce-b5aa47fbc814", caption: "Master Thesis" }
    ],

  },
  {
    title: "B.Tech Mechanical Engineering",
    org: "PES University, CGPA 8.3/10",
    location: "Bangalore, India",
    period: "August 2017 – November 2021",
    points: [
      "Specialization in Thermo-Fluids engineering.",
      "Aerodynamics and Analysis Engineer at Team Aeolus, the university's aero-modeling club.",
      "Bachelor Thesis on FEM of a two-fluid heat exchanger with supercritical CO₂ as the working fluid.",
    ],

    media: [
      { type: "link", url: "https://drive.google.com/file/d/1P7z1SIAspAInNF2fyV6n0BI1v7aPFc3J/view?usp=drive_link", caption: "Bachelor Thesis" },
      { type: "link", url: "https://aeolus.pes.edu/index.html", caption: "Team Aeolus" }
    ],
  }
];

export const EDUCATION = rawEducation.map((item, index) => ({ ...item, id: index + 1 }));

// ---------------- VOLUNTEERING ----------------
const rawVolunteering = [
  {
    title: "Academic Mentor",
    org: "Chalmers Pluggstöd",
    location: "Göteborg, Sweden",
    period: "October 2023 – June 2025",
    points: [
      "Visited different schools in and around Göteborg to help children with their homework and exams.",
      "The goal was to increase motivation among students from relatively less exposed academic environments to pursue fulfilling and ambitious careers."
    ],
    media: [
      { type: "image", src: "/src/assets/volunteering/Tea.jpg", caption: "Mentoring session" },
      { type: "link", url: "https://www.svt.se/nyheter/inrikes/barn-fran-bergsjon-bygger-raketer-pa-chalmers", caption: "Program Overview" }
    ]
  },
  {
    title: "Volunteer & Leader",
    org: "U&I Trust",
    location: "Bangalore, India",
    period: "July 2019 – February 2021",
    points: [
      "Volunteered to engage with men over the age of 18 who are mentally and physically differently-abled, and conducted various activities with them, such as arts and crafts, sports, etc, among many others. The goal was to improve the men's motor skills and also give them their required social interaction."
    ],
    media: [
      { type: "link", url: "https://uandi.org.in/", caption: "Program Overview" }
    ]
  }
];

export const VOLUNTEERING = rawVolunteering.map((item, index) => ({ ...item, id: index + 1 }));

// ---------------- HOBBIES ----------------
const rawHobbies = [
  {
    name: "Cricket",
  },
  {
    name: "Reading",
  },
  {
    name: "Football",
  }
];

export const HOBBIES_EXTENDED = rawHobbies.map((item, index) => ({ ...item, id: index + 1 }));

// ---------------- PROJECTS ----------------
// import dummyModel from "./assets/models/dummy.glb";

const rawProjects = [
  {
    id: 1,
    title: "Formula Student – Chalmers Formula Student",
    summary:
      "Design and development of a formula-style racecar for the international Formula Student competition, focusing on aerodynamics and composite manufacturing.",
    tools:
      "Aerodynamics | Computational Fluid Dynamics (CFD) | STAR-CCM+ | Siemens NX | Teamcenter PLM | MasterCAM | Composite Manufacturing | Design for Manufacture (DfM)",

    media: [
      { src: FrejaReflection, caption: "CFS24 Freja – Formula Student Germany 2024" },
    ],

    overview: [
      {
        title: "Project Background:",
        text: `Formula Student is an international engineering design competition where students design and build a formula-style racecar from scratch. 
At Chalmers Formula Student, I was part of the Aerodynamics subgroup, responsible for the design, analysis, and manufacturing of aerodynamic components for the 2024 racecar, Freja.`,
        media: [
          { src: FrejaReflection, caption: "CFS24 Freja during an event." },
        ],
      },
      {
        title: "Phase I: Design & Development",
        text: `I led the development of the rear diffuser using Siemens NX for geometry creation and STAR-CCM+ for CFD analysis. 
Each iteration was driven by a problem-focused approach—understanding limitations such as wheel wake or boundary layer detachment—and creating optimized geometries within competition rule constraints.`,
        media: [
          { src: ISO, caption: "Isometric Pressure Coefficient contour." },
        ],
      },
      {
        title: "Phase II: Manufacturing & Validation",
        text: `Following simulation validation, I collaborated with the manufacturing subgroup to produce the diffuser using CFRP wet layups. 
I also assisted in mold design and milling using MasterCAM, ensuring dimensional accuracy and surface finish. 
Trackside flow visualization confirmed CFD-predicted performance improvements.`,
        media: [{ src: DF_Mold, caption: "Milled rear diffuser mold" }],
      },
    ],

    responsibilities: [
      {
        title: "Rear Diffuser Design and CFD Validation",
        description:
          "Design-Simulate-Evaluate-Repeat. This was the foundation of my work. Each design iteration was made with Siemens NX, keeping the rules of the competition and manufacturing constraints in mind. This was the highest priority because if the part was not rules compliant and/or it was not possible to manufacture, it would not make it on the car irrespective of the gain in performance. Once a potential design was identified, only then would I proceed to simulate the part using STAR-CCM+ with the whole car assembly to visualize its impact on the performance by studying important characteristics such as velocity or total pressure fields.",
        media: [
          { src: VolMeshRef, caption: "Volumetric mesh refinement of Freja on STAR-CCM+." },
          { src: SS_TotPress, caption: "Section of total pressure contour." },
          { src: DF_VV_x34, caption: "Section of vorticity vectors." },
        ],
      },
      {
        title: "Composite Manufacturing and Process Development",
        description:
          "Oversaw the layup and curing of CFRP aerodynamic components, collaborating with the composites team to refine tooling and resin infusion processes. Ensured precision fitment and surface quality during final assembly.",
        media: [
          { src: DFBag, caption: "Vacuum bagging process of the rear diffuser." },
          { src: DF_Strake, caption: "Finished carbon fibre strake." },
        ],
      },
      {
        title: "E-Milling and Toolpath Simulation",
        description:
          "I was co-responsible for creating mold designs using Siemens NX and manufacturing them in-house with an E-mill. The process started with identifying potential parts that could be produced by an E-mill, which included all the aerodynamic components and some other parts such as the steering wheel, motor cover, etc. where the surface finish was extremely important or if the shape was too complex/large to produce a printed mold. Once the mold for the part was designed, I created toolpaths using MasterCAM and performed virtual milling simulations to avoid collisions, optimize tool engagement, and maintain surface fidelity. Once satisfied with the results, I could then extract the G-code and proceed with the process on the E-mill to produce the final mold.",
        media: [
          { src: EMill, caption: "Side diffuser being milled in-house." },
          { src: FW_MasterCAM, caption: "Toolpath simulation in MasterCAM" },
          { src: MotorCover_MasterCAM, caption: "Tool and chuck geometry to check for clashing errors." },
        ],
      },
      {
        title: "Documentation and Technical Reporting",
        description:
          "The engineering document is the backbone of the system that describes all the necessary theory and concepts that were utilized in designing, simulating, manufacturing, and testing the aerodynamic package..",
      },
      {
        title: "Event Representation",
        description:
          "The cost and manufacturing event at the Formula Student competition is where each subgroup is questioned on the manufacturing techniques employed to produce each part, the cost and their justification. The Bill Of Materials (BOM) for the whole car, which includes everything that was used to make the car (and their manufacturing process), is presented to the judges. I detailed this for the aerodynamic subgroup. I also represented the team at the 'Real Case' event, where I presented three in-house manufactured parts that could be sold to make up for a hypothetical 10% monetory loss in the team's budget.",
      },
    ],

    learnings: [
      "Enhanced my ability to translate theoretical fluid mechanics into practical aerodynamic design and validation workflows.",
      "Developed a structured design process balancing performance, manufacturability, and regulatory constraints.",
      "Refined hands-on composite manufacturing and toolpath programming skills using Siemens NX and MasterCAM.",
      "Improved interdisciplinary communication and project management across multiple subteams.",
      "Strengthened technical documentation and presentation skills through international competition exposure.",
    ],

    features: [
      "Rear diffuser increased downforce by 18% and reduced drag by 8% compared to the previous season’s model.",
      "Validated CFD results correlated within 5% of on-track pressure measurements.",
      "Achieved 2nd overall in the Driverless category at Formula Student Germany 2024.",
      "Placed 3rd overall in the Driverless category at Formula Student East 2024.",
    ],

    //docs: [
    //  { name: "Engineering Design Report", url: "#" },
    //  { name: "Aerodynamics Validation Summary", url: "#" },
    //],

    external: [
      { name: "Chalmers Formula Student", url: "https://www.chalmersformulastudent.se/" },
      { name: "Formula Student Germany", url: "https://www.formulastudent.de/" },
    ],

    cad: dummyModel,
  },

  //{
    //id: 2,
    //title: "Inviscid Flow Through The Engine Intake of an SR-71 Blackbird",
    //summary: "An analytical study on the conditions required to prevent engine unstart.",
    //tools:
    //  "Compressible Flow | STAR-CCM+",
    //media: [{src: SR_71, caption: "The SR-71 Blackbird"}],
    //overview: [
    //  {
    //    title: "Project Background",
    //    text: "The objective of this project is to solve the flow field inside the a supersonic engine intake both numerically using STAR-CCM+ and analytically. The flow is assumed to be stationary, inviscid, compressible and two-dimensional.",
    //    media: [{ src: SR_71, caption: "FSG 2024, Hockenheim, Germany" }],
    //  },
    //  {
    //   title: "Task Overview",
    //    text: "Analytically, the Mach number was calculated such that the first oblique shock exactly touches the outer edge. This inlet Mach number now obtained was then altered (+30% and -2%) to study the shock characteristics.",
    //    media: [{ src: engine_mesh, caption: "FS East 2024, Zalaegerszeg, Hungary" }],
    //  },
    //  {
    //    title: "Phase II: Manufacturing & Assembly",
    //    text: "In addition to concept development work, I carried out composite layups, milling, and assembly processes. The diffuser was successfully manufactured using CFRP and validated through track-side testing and flow visualization.",
    //    media: [{ src: Inlet_shock_waves_at_Mach_2, caption: "Composite assembly validation" }],
    //  },
    //],
    //responsibilities: [
    //  "Design and development of the rear diffuser.",
    //  "Plastics and composites manufacturing.",
    //  "E-milling co-responsible.",
    //  "Engineering design document co-author.",
    //  "Aerodynamics cost and manufacturing event representative.",
    //],
    //learnings: [
    //  "There is a need for a variable geometry with backpressure bleed doors was identified to optimize the shock positioning. This reinstates the fact that these soluions exist on the SR-71.",
    //  "Improved collaboration across multiple subgroups.",
    //  "Learned design-for-manufacture principles and cost-performance trade-offs.",
    //  "Wood working.",
    //],
    //features: [
    //  "The intake suffers from unstart when the inlet Mach number reduces by as little as 2%.",
    //  "After the onset of unstart, a total pressure loss of over 50% occurs, as compared to the -19% in cruise conditions.",
    //  "The intake is also prone to performance losses at higher velocities, as the total pressure loss increases to 40%, when the inlet Mach number is increased by 30%.",
    //],
    //docs: [{ name: "Design Report", url: "#" }],
    //external: [{ name: "GitHub Repo", url: "#" }],
    //cad: dummyModel,
  //},


  //{
  //  title: "Conceptual Design and Analysis of a Business Jet Using Hydrogen Fuel",
  //  summary: "Complete blueprint developement for a fully functional and realistic aircraft.",
  //  tools: "Aircraft Design  |  OpenVSP",
  //  description: "This project explored fluid flow and component optimization using CFD methods. I conducted parametric studies to assess geometric impact on performance and implemented automation scripts to accelerate simulation workflows. The resulting design achieved improved heat transfer efficiency and lower pressure losses.",

  //  media: [
  //    { src: BusinessJet, caption: "The SR-71 Blackbird" }
  //  ],
  //  features: [
  //    "Responsive design",
  //    "Interactive 3D model",
  //    "Framer Motion animations"
  //  ],
  //  docs: [{ name: "Spec Sheet", url: "#" }],
  //  external: [{ name: "GitHub Repo", url: "#" }],
  //  cad: dummyModel
  //},
  {
  id: 4,
  title: "Airborne Transmission of Respiratory Pathogens – Multiphase Flow Simulation",
  summary:
    "Simulated the dispersion of respiratory droplets from sneezing and coughing events in enclosed environments to analyze infection risk and particle transport mechanisms using STAR-CCM+.",
  tools:
    "STAR-CCM+ | Lagrangian Multiphase | RANS (k-ω SST) | Implicit Unsteady | Rossin–Rammler Distribution | CFD Post-Processing",

  media: [
    { src: CoughSneeze, caption: "Cough particle dispersion at room temperature." },
    { src: FSEast, caption: "Top-view particle field showing plume extension after a sneeze." },
  ],

  overview: [
    {
      title: "Project Background:",
      text: `This project investigated the airborne transmission of respiratory droplets following a cough or sneeze, motivated by the need to understand particle-borne pathogen spread in indoor environments. The study modeled droplet trajectories and evaporation behavior under varying temperature and humidity conditions to determine exposure risk and spatial concentration distribution.`,
      media: [
        { src: CoughSneeze, caption: "Air-borne respiratory pathogens spread through coughing and sneezing." },
      ],
    },
    {
      title: "Phase I: Numerical Setup and Model Configuration",
      text: `The simulation was performed in STAR-CCM+ using a Lagrangian multiphase framework. The continuous phase was modeled as air using RANS with a k-ω SST turbulence model and implicit unsteady formulation. Rossin–Rammler particle size distribution was used to capture droplet size variability typical of human sneezing and coughing.

Relative humidity effects were incorporated to study how it would affect particle footprint.`,
      media: [
        { src: MeshMF, caption: "Mesh refinement near the mouth inlet for accurate jet resolution." },
      ],
    },
    {
      title: "Phase II: Results and Flow Analysis",
      text: `Simulations revealed clear physical trends between particle size, initial velocity, and environmental conditions. Heavier droplets (>100 µm) rapidly settled within 1–2 m of the source, while lighter droplets (<20 µm) remained suspended, forming a distinct mushroom-shaped plume. This revealed that it is actually the smaller particles that are more dangerous as by remaining suspended for longer periods, they pose an increased likelihood of infection. The sneeze case produced a longer, more energetic jet due to higher injection velocity, confirming its greater infection potential.

Comparative cases across varying temperature and humidity showed that droplets in cold, dry air (15 °C, 20% RH) traveled significantly farther than those in hot, humid air (30 °C, 75% RH), showcasing increased lifetime under dry conditions.`,
      media: [
        { src: HotHumidSneezeTopView, caption: "Sneeze plume in hot, humid air (30 °C, 75% RH)." },
        { src: ColdDrySneezeTopView, caption: "Sneeze plume in cold, dry air (15 °C, 20% RH)." },
      ],
    },,
  ],

  //responsibilities: [
  //  {
  //    title: "CFD Model Setup and Boundary Definition",
  //    description:
  //      "Developed a multiphase CFD model using STAR-CCM+ with unsteady RANS (k-ω SST) turbulence modeling. Defined a dynamic particle injection boundary to simulate both coughing and sneezing profiles under controlled initial conditions. Generated a structured hexahedral mesh with refined zones near the injection source and validated mesh quality using skewness and volume change criteria. Ensured solver convergence and numerical stability across all humidity and temperature cases.",
  //  },
  //  {
  //    title: "Parametric Simulation and Case Studies",
  //    description:
  //      "Executed transient simulations across multiple environmental conditions, systematically analyzing droplet trajectory, plume extension, and settling behavior. Established correlations between ambient humidity, air viscosity, and droplet transport length.",
  //    media: [
  //      { src: HotHumidSneezeTopView, caption: "Simulation snapshots comparing sneeze vs cough dispersion." },
  //    ],
  //  },
  //],

  learnings: [
    "Developed a strong understanding of Lagrangian multiphase modeling.",
  ],

  docs: [
    { name: "Project Report", url: "https://drive.google.com/file/d/1jdiDkr-knZcI9eJVubt1G0CGLBDWznGE/view?usp=drive_link" },
  ],

  external: [
    { name: "Chalmers University of Technology", url: "https://www.chalmers.se/" },
  ],

  cad: dummyModel,
}
,

  {
    id: 5,
    title: "Fluid-Structure Interaction Analysis on the Rear Wing of a Formula Student Car",
    summary: "An FSI study coupling computational structural mechanics (CSM) and CFD.",
    tools: "Fluid-Structure Interaction  |  Siemens NX  |  STAR-CCM+  |  ANSYS ACP  |  ANSYS Fluent",
    
    media: [
      { src: FSI, caption: "The SR-71 Blackbird" }
    ],

    overview: [
      {
        title: "Project Background:",
        text: `This project investigated the coupled aerodynamic and structural behavior of a Formula Student rear wing using Fluid–Structure Interaction (FSI) techniques. The primary aim was to evaluate deformation under aerodynamic loading and validate compliance with Formula Student Germany regulations. 
The work combined Computational Fluid Dynamics (CFD) with composite Finite Element Method (FEM) analysis to ensure aerodynamic efficiency, stiffness, and safety under competitive racing conditions.`,
        media: [
          { src: FSI, caption: "Pressure contour from CFD simulation on rear wing." },
        ],
      },
      {
        title: "Phase I: Aerodynamic Simulation (CFD)",
        text: `Initial flow simulations were conducted in STAR-CCM+ and ANSYS Fluent to characterize aerodynamic performance at 100 km/h. The k–ω SST turbulence model with wake modeling was used to capture boundary-layer behavior and flow separation around the wing elements. 
The simulations revealed a downforce of approximately 954 N with well-defined pressure gradients across the flaps and endplates.`,
        media: [
          { src: Vel_RW, caption: "Velocity field visualization around the wing assembly." },
          { src: DF_Drag_RW, caption: "Downforce convergence plot during CFD simulation." },
        ],
      },
      {
        title: "Phase II: Structural and Composite Analysis (FEM)",
        text: `The aerodynamic pressure distribution was imported into ANSYS ACP and Static Structural for finite element analysis. A sandwich composite layup with CFRP skins and a PVC foam core was modeled, incorporating realistic ply orientations (0°, ±45°, 90°). 
The FEM simulation identified maximum deformation of ~2 mm under peak loading and a safety factor between 1.5–2 across the structure, confirming structural adequacy under racing conditions.`,
        media: [
          { src: acp, caption: "Composite layup and oriented selection sets in ANSYS." },
          { src: Deformation, caption: "Rear Wing maximum deformation." },
        ],
      },
      {
        title: "Phase III: Coupled FSI Validation",
        text: `The coupled analysis successfully integrated CFD pressure data with structural FEM response, establishing a full FSI workflow. The approach improved prediction fidelity for aerodynamic-induced deformation and validated the rear wing’s performance envelope. 
This study provided valuable insights into coupling methodologies between ANSYS Fluent and ACP for future aeroelastic design optimization.`,
        media: [
          { src: Coupling, caption: "Coupling workflow between ANSYS Fluent, ACP, and Static Structural modules." },
        ],
      },
    ],

    responsibilities: [
      {
        title: "CFD Model Development and Validation",
        description:
          "Set up and validated steady-state aerodynamic simulations using ANSYS Fluent and STAR-CCM+. Utilized the k–ω SST model and refined meshing strategy near suction and pressure surfaces to capture flow behaviour accurately. Ensured solution convergence and accuracy of aerodynamic load distribution.",
        media: [
          { src: FineRW_Mesh, caption: "Refinement box and detailed mesh topology around rear wing." },
          { src: StatPress_RW, caption: "Static pressure contour illustrating suction and pressure zones." },
        ],
      },
      //{
      //  title: "Composite Structural Modeling in ANSYS ACP",
      //  description:
      //    "Created a layered composite model with CFRP prepreg skins and PVC core. Defined ply orientations, stacking sequences, and thicknesses to match real-world layup. Conducted structural analysis to quantify deformation, stress, and safety factor distribution.",
      //  media: [
      //    { src: ms, caption: "Ply stacking and thickness direction validation in ACP." },
      //    { src: fos, caption: "Safety factor map highlighting high-stress regions near mounts." },
      //  ],
      //},
      {
        title: "Software Coupling and Data Exchange",
        description:
          "Established a coupled workflow integrating Fluent pressure loads with ACP-based structural model. Ensured accurate mapping of aerodynamic loads to structural mesh, minimizing data interpolation errors. Verified consistency across boundary conditions and coordinate systems.",
        media: [
          { src: pres, caption: "Imported pressure points from ANSYS Fluent to ANSYS Static Structural." },
        ],
      },
    ],

     learnings: [
      "Gained comprehensive understanding of coupling CFD and FEM workflows for accurate aeroelastic simulation.",
      "Developed working knowledge of ANSYS ACP for layered composite modeling and failure evaluation.",
      "Enhanced skills in interpreting stress–strain behavior of anisotropic materials under aerodynamic loading.",
    ],

    features: [
      "Generated ~954 N of downforce at 100 km/h with under 2 mm structural deflection.",
      "Validated composite layup achieving factor of safety >1.5 across all elements.",
      "Established a reusable CFD–FEM coupling workflow between ANSYS Fluent and ACP.",
      "Provided key design validation for the 2024 Formula Student rear wing under FSG regulations.",
    ],
    docs: [
      { name: "Final FSI Report", url: "https://drive.google.com/file/d/1ZVwNrix_9qo8wg_EUSxD6ymSqUqPzqIs/view?usp=drive_link" },
    ],
    external: [
      { name: "Chalmers University of Technology", url: "https://www.chalmers.se/" },
    ],
    cad: dummyModel
  },
  {
  id: 6,
  title: "Temperature Prediction in Car Lamps Using Sun Load Data – Volvo EX90",
  summary:
    "Development of a validated simulation model for predicting temperature distribution in automotive rear lamps under sun load conditions using TAITherm. The study integrates experimental data, optical property measurements, and CFD-based convection models to enable early-phase thermal design validation.",
  tools:
    "TAITherm | ANSA | RapidFlow CFD | MATLAB | META Post | Thermal Modeling | Heat Transfer Analysis",

  media: [
    { src: CoverPicture_V2, caption: "Volvo EX90 rear lamp – baseline geometry" },
  ],

  overview: [
    {
      title: "Project Background:",
      text: `The objective of my Master Thesis was to develop a simulation model to estimate component-level temperatures in the Volvo EX90’s rear lamps using Sun Load Data (SLD). Such models are critical for evaluating material durability and performance under high solar irradiance without relying solely on late-stage physical testing.`,
      media: [
        { src: CoverPicture_V2, caption: "Rear lamp setup with thermocouples at Volvo Safety Center" },
      ],
    },
    {
      title: "Phase I: Experimental Characterization and Model Setup",
      text: `A detailed disassembly and material characterization of the rear lamp were performed to obtain emissivity, absorptance, transmittance, and reflectivity of each component.

The measured material data were integrated into a detailed 3D model in TAITherm, along with a simplified representative mesh constructed on ANSA, with the aim to balance accuracy and computational cost.`,
      media: [
        { src: ANSA_FrontMesh, caption: "Shell mesh of the simplified rear lamp." },
      ],
    },
    {
      title: "Phase II: Solver Configuration and Thermal Simulation",
      text: `The TAITherm solver setup included all major heat transfer modes — conduction, convection, and radiation — along with solar and weather data from an Arizona proving ground. Transient simulations were run between 03:00 and 20:00 to capture full-day thermal behavior.

Multiple convection models were compared: a 0-D lumped capacitance approach and a 3-D RapidFlow CFD domain-based approach, revealing significant accuracy improvement with RapidFlow (reducing peak over-prediction by ~30%).`,
      media: [
        { src: ElementPatches, caption: "TAITherm solver setup showing element patches." },
      ],
    },
    {
      title: "Phase III: Validation and Correlation",
      text: `Simulated temperatures were validated against thermocouple measurements at five locations within both left and right rear lamps. Excellent agreement was achieved for non-transparent surfaces, with deviations under 5%. Transparent IR-reflective components showed larger variances due to spectral transmission effects, which were analyzed in detail.

Case studies were performed across three conditions — baseline, hottest ambient day, and highest part temperature — confirming the model’s predictive robustness. Additional RapidFlow wind-domain simulations captured recirculation zones behind the vehicle, correlating well with wind tunnel velocity field data.`,
      media: [
        { src: Recirculation, caption: "Recirculation observed when including wind in the 3D simulation." },
        { src: MinMax_V2, caption: "RapidFlow fluid mesh." },
      ],
    },
  ],

  //responsibilities: [
  //  {
  //    title: "Thermal Model Development and Solver Setup",
  //    description:
  //      "Developed a high-fidelity thermal model for the Volvo EX90 rear lamps using TAITherm, incorporating realistic material, environmental, and radiation boundary conditions. Established a systematic procedure for defining weather-based solar load, relaxation factor optimization, and mesh simplification for computational efficiency.",
  //    media: [{ src: FSEast, caption: "Solver setup workflow in TAITherm" }],
  //  },
  //  {
  //    title: "Experimental Characterization and Data Integration",
  //    description:
  //      "Measured and validated optical material properties using laboratory instrumentation. Corrected transparent surface data through comparative black-surface calibration. Integrated measurements directly into the simulation environment to replace default library values.",
  //    media: [
  //      { src: FSEast, caption: "Optical property measurement and calibration" },
  //    ],
  //  },
  //  {
  //    title: "CFD-Based Convection Modeling and Validation",
  //    description:
  //      "Implemented the RapidFlow 3D CFD module to capture natural and forced convection effects. Compared performance against lumped-node approximations, achieving improved spatial and temporal temperature correlation with experimental data.",
  //    media: [
  //      { src: MinMax_V2, caption: "RapidFlow fluid mesh showing internal convection cells" },
  //    ],
  //  },
  //],

  learnings: [
    "Developed deep understanding of coupled heat transfer mechanisms in automotive assemblies.",
    "Acquired advanced proficiency in TAITherm solver setup, parameter tuning, and convergence optimization.",
    "Learned to measure and interpret optical material properties with precision instruments.",
    "Enhanced skills in experimental validation, post-processing, and result interpretation for high-fidelity simulations.",
  ],

  features: [
    "Validated simulation model predicted lamp surface temperatures within ±5% of physical measurements.",
    "Reduced simulation runtime by 35% through mesh simplification and optimized solver configuration.",
    "Achieved consistent correlation across multiple test days and weather conditions.",
    "Established a repeatable framework for numerous systems at Volvo Cars, such as cabin flow, HVAC, etc.",
  ],

  docs: [
    { name: "Master Thesis Report", url: "https://odr.chalmers.se/items/00ba9309-9c38-4be2-b0ce-b5aa47fbc814" },
  ],

  external: [
    { name: "Chalmers University of Technology", url: "https://www.chalmers.se/" },
    { name: "Volvo Cars", url: "https://www.volvocars.com/" },
  ],

  cad: dummyModel,
}

];

export const PROJECTS = rawProjects.map((item, index) => ({
  ...item,
  id: index + 1
}));

