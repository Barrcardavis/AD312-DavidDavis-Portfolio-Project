import NavBar from "../components/NavBar";

export default function ExperiencePage() {
  return (
    <section className="section">
      <h2>Experience</h2>

      <div className="experience-list">

        {/* Amazon LEO */}
        <div className="experience-item">
          <h3>2025 – Present | Amazon LEO (OTAC/OISL) — Technician III</h3>
          <p className="location">Redmond, WA</p>
          <ul className="details">
            <li>Build, troubleshoot, and recover OISL optical communication hardware</li>
            <li>Precision optical alignment, micro assembly, and fiber optic wire splicing</li>
            <li>Interpret electro optical drawings, schematics, and work instructions</li>
            <li>Conduct structured root cause analysis and support failure investigations</li>
            <li>Collaborate with engineers to validate fixes and document findings</li>
          </ul>
        </div>

        {/* Amazon Kuiper */}
        <div className="experience-item">
          <h3>2023 – 2025 | Amazon Kuiper (Flatsat Team) — Project Technician</h3>
          <p className="location">Redmond, WA</p>
          <ul className="details">
            <li>Integrated and tested satellite hardware and ground system components</li>
            <li>Troubleshot subsystem issues and supported engineering design improvements</li>
            <li>Documented test results and maintained quality records using JIRA</li>
            <li>Ensured compliance with industry standards and project specifications</li>
          </ul>
        </div>

        {/* Kymeta */}
        <div className="experience-item">
          <h3>2023 | Kymeta Corporation — Test Technician</h3>
          <p className="location">Woodinville, WA</p>
          <ul className="details">
            <li>Tested and debugged flat panel satellite terminals</li>
            <li>Performed assembly repairs and contributed to process improvements</li>
            <li>Adapted quickly to emerging satellite communication technologies</li>
          </ul>
        </div>

        {/* Relion / Navico */}
        <div className="experience-item">
          <h3>2019 – 2023 | Relion Battery / Navico Group — Engineering Test Technician</h3>
          <p className="location">Snohomish, WA</p>
          <ul className="details">
            <li>Conducted first article testing for prototype lithium battery packs</li>
            <li>Diagnosed faults in field returns and produced detailed engineering reports</li>
            <li>Developed test plans for R&D initiatives</li>
            <li>Performed board level repairs and BMS modifications</li>
          </ul>
        </div>

        {/* Concordia */}
        <div className="experience-item">
          <h3>2002 – 2019 | Concordia Beverage Systems</h3>
          <p className="location">Redmond, WA</p>

          <h4>Senior Tech Support (3 years)</h4>
          <ul className="details">
            <li>Supported field technicians and authorized service agents</li>
            <li>Repaired and tested PCBs and assemblies</li>
            <li>Provided technical guidance and early product feedback</li>
          </ul>

          <h4>Technical Supervisor (8 years)</h4>
          <ul className="details">
            <li>Led technical operations and diagnostic workflows</li>
            <li>Authored test procedures and managed MRB activities</li>
            <li>Integral contributor to prototype design of:</li>
            <li>• Concordia Single Cup Brewer (initial version)</li>
            <li>• Concordia Integra Espresso Machine</li>
            <li>Supported engineering teams with product improvement cycles</li>
          </ul>

          <h4>Parts Manager (6 years)</h4>
          <ul className="details">
            <li>Rebuilt parts department strategy and improved profitability</li>
            <li>Implemented tracking systems for returned parts</li>
            <li>Streamlined operations and improved service turnaround</li>
          </ul>
        </div>

        {/* AT&T Wireless */}
        <div className="experience-item">
          <h3>1999 – 2001 | AT&T Wireless (ACD) — Senior Engineering Lead Lab Technician</h3>
          <p className="location">Seattle, WA</p>
          <ul className="details">
            <li>Maintained and calibrated lab test equipment</li>
            <li>Tested, repaired, and documented in cabin communication systems</li>
            <li>Assisted engineers with prototype designs</li>
            <li>Designed and fabricated a ground station breakout box</li>
          </ul>
        </div>

        {/* Boeing */}
        <div className="experience-item">
          <h3>1996 – 1999 | The Boeing Company — Technical Designer</h3>
          <p className="location">Kent, WA</p>
          <ul className="details">
            <li>Designed and assembled wire bundle packages for aircraft installations</li>
            <li>Managed database configurations for wire bundles</li>
            <li>Selected cable and wire specifications for custom assemblies</li>
            <li>Contributed to major aerospace programs including:</li>
            <li>• NATO AWACS Mod Block</li>
            <li>• B‑2 Stealth Bomber</li>
          </ul>
        </div>

        {/* Quinton Instruments */}
        <div className="experience-item">
          <h3>1991 – 1996 | Quinton Instruments — Senior Electronic Technician</h3>
          <p className="location">Bothell, WA</p>
          <ul className="details">
            <li>Tested and repaired PCBs for cardiac monitoring systems</li>
            <li>Performed MRB activities and ensured quality control</li>
            <li>Conducted functional and Hi Pot tests</li>
            <li>Supported production engineering teams</li>
          </ul>
        </div>

        {/* Army */}
        <div className="experience-item">
          <h3>1985 – 1986 | U.S. Army Signal School — Wire Systems Installation Certification</h3>
          <p className="location">Fort Gordon, GA</p>
          <ul className="details">
            <li>Formal training in wire systems installation</li>
            <li>Foundation for a 41‑year engineering career</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
