/*  ============================================================
    RESUME DATA — Edit this file to update your resume.
    After editing, commit & push to GitHub to publish changes.
    ============================================================ */

const RESUME = {

  /* ── Personal ── */
  name: "Vivin Joghee",
  title: "Swift Messaging | Data Analysis | Automation",
  contact: [
    // Add your contact details below. Types: "email", "phone", "linkedin", "github", "location"
    { type: "email",    value: "vivinjoghee@gmail.com" },
    { type: "phone",    value: "+65 98857422" },
    { type: "linkedin", value: "linkedin.com/in/vivin-joghee/", url: "https://www.linkedin.com/in/vivin-joghee/" },
    { type: "github",   value: "github.com/vivin-joghee", url: "https://github.com/vivin-joghee" },
    { type: "location", value: "Singapore" },
  ],

  /* ── Objective ── */
  objective:
    "Swift Messaging, Data Analysis and Automation Expert with 13 years of banking experience in developing, deploying, configuring, and maintaining Swift and Java applications on-premises and Azure infrastructure. Serving as a Continuous Integration lead for Global Professional Services.",

  /* ── Experience ── */
  experience: [
    {
      role: "Senior Financial Services Industry Consultant",
      company: "Swift Terminal Services",
      date: "April 2022 \u2013 Present",
      bullets: [
        "Developed data visualization dashboards and analytical charts using Python and machine-learning techniques to derive insights from customer and operational data.",
        "Led ISO 20022 migration initiatives for global payment systems, including MEPS L4L, TH Bahtnet, HK CHATS, UK CHAPS, ZA SAMOS, CBPR+, AU HVPS, PH PhilPaSS, JO RTGS, BN RTGS, for various Banks.",
        "Designed and implemented a Copilot AI agent to optimize and streamline Professional Services workflows, leveraging JIRA REST APIs to extract ticket data and automatically consolidate project documentation.",
        "Managed AMH migrations for clients, delivering custom transformations to support back-office integrations and evolving workflow requirements.",
        "Served as Development Lead for Continuous Integration, managing AMH Docker image maintenance, server provisioning via Ansible, and CI/CD pipeline configuration using CloudBees/Jenkins.",
        "Managed regulatory and governance requirements, including secure password policies, identity usage controls, and monitoring tool compliance across environments.",
      ],
    },
    {
      role: "Technical Lead \u2013 Enterprise Financial Messaging",
      company: "BNY Mellon Technology",
      date: "December 2019 \u2013 December 2021",
      bullets: [
        "Automated installation and configuration of SWIFT applications using Ansible.",
        "Developed Python scripts to streamline deployment of configurations.",
        "Swift Go \u2013 Microgateway installation and API configuration for SLVP, GPI, G4C, and GCase APIs.",
        "Integrated SWIFT APIs with Banking Analytics platforms using REST APIs.",
        "Deployed and configured SWIFT applications in Azure cloud environments (SAA, AWP, SAG, SNL, IPLA).",
        "Swift Customer Security Framework 2020 Implementation.",
      ],
    },
    {
      role: "Lead Business Analyst \u2013 Global Swift Messaging",
      company: "Standard Chartered GBS",
      date: "January 2015 \u2013 December 2019",
      bullets: [
        "Developed Python scripts to automate deployment of configurations.",
        "Led migration from IBM TDE to Axway, enabling Cross File Transfer integration with SWIFT for SCB FileAct traffic.",
        "Executed migration from SAG FTI/FTA module to AMH for SCB FileAct traffic.",
        "Swift Customer Security Framework 2018/2019 Implementation.",
        "Swift Standard Release 2017\u20132019 Implementation.",
        "Managed SWIFTNet 7.2 and 7.3 migrations (SAA, AWP, SAG, SNL, IPLA).",
        "HSM migration from 6.0 to 6.1.",
      ],
    },
    {
      role: "Software Engineer \u2013 Belk Application Maintenance",
      company: "Syntel Inc",
      date: "December 2012 \u2013 December 2014",
      bullets: [
        "Belk.com website maintenance and support.",
        "Configured critical alerts in CA Wily and Splunk across application servers to ensure proactive monitoring.",
        "Queried and generated business intelligence reports using IBM Cognos.",
        "Performed patch installations for the critical Blue Martini Java application.",
        "Developed and implemented Shell scripts to automate BAU (Business-as-Usual) tasks.",
      ],
    },
  ],

  /* ── Skills ── */
  skills: [
    "Ansible",
    "Docker",
    "Cloudbees/Jenkins",
    "Python",
    "ISO20022",
    "Hardware Security Module",
    "Swift CSP",
    "Swift API",
    "SAA/AMH",
    "RHEL/ShellScript",
  ],

  /* ── Education ── */
  education: [
    { name: "MSc / FinTech",           detail: "NTU, Singapore \u2022 2025 \u2013 pursuing" },
    { name: "BE / Computer Science",   detail: "Anna University, Chennai \u2022 2008 \u2013 2012" },
  ],

  /* ── Certifications ── */
  certifications: [
    { name: "Blockchain Security by Infosec",             detail: "LinkedIn, Singapore \u2022 2025" },
    { name: "Flexi Masters / FinTech",                    detail: "NTU, Singapore \u2022 2024 \u2013 2025" },
    { name: "Python For Data Analysis",                   detail: "NTU, Singapore \u2022 2024 \u2013 2025" },
    { name: "Machine Learning in Finance",                detail: "NTU, Singapore \u2022 2024" },
    { name: "Blockchain Systems Concepts and Principles", detail: "NTU, Singapore \u2022 2024" },
    { name: "Python, PCEP-30-02",                         detail: "Singapore \u2022 2024" },
    { name: "AWS CLF-C01",                                detail: "Singapore \u2022 2023" },
    { name: "ICAgile Certified Professional",             detail: "Singapore \u2022 2023" },
    { name: "LPI 010-160",                                detail: "Singapore \u2022 2023" },
    { name: "Microsoft Azure AZ900",                      detail: "Chennai \u2022 2021" },
  ],

  /* ── Awards ── */
  awards: [
    { name: "Kudos",                   detail: "SWIFT \u2022 2024" },
    { name: "Passion For Excellence",  detail: "BNY Mellon \u2022 2021" },
    { name: "Value Champion",          detail: "Standard Chartered \u2022 2019" },
    { name: "Winning Streak",          detail: "Syntel Inc. \u2022 2014" },
  ],

  /* ── Volunteer ── */
  volunteer: [
    { name: "Volunteer Lead",                        detail: "NEA, Singapore" },
    { name: "Singapore Coach Excellence Level 1",    detail: "SG Sport, Singapore" },
    { name: "Football Association of Singapore, ICC", detail: "FAS, Singapore" },
  ],

  /* ── Books ── */
  books: [
    { title: "Rework",             author: "Founders of 37signals" },
    { title: "Inventing Bitcoin",  author: "Yan Pritzker" },
    { title: "Read, Write, Own",   author: "Chris Dixon" },
    { title: "Rinsed",            author: "Geoff White" },
    { title: "Mastering Ethereum", author: "Various authors" },
    { title: "Empire of AI",      author: "Karen Hao" },
  ],
};
