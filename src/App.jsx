import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";

const resumeUrl = "/Aditya_Resume%20(1).pdf";

const projectCards = [
  {
    title: "Hospital Management System",
    meta: "DBMS + SQL | April 2025",
    description:
      "Designed a normalized hospital database in 3NF with patient, doctor, schedule, appointment, diagnosis, allergy, and prescription workflows.",
  },
  {
    title: "Wanderlust Website",
    meta: "Full Stack Web App | February 2025",
    description:
      "Built a travel listing platform with MongoDB, Express.js, and Node.js, including authentication, CRUD operations, reviews, and schema validation.",
  },
  {
    title: "Problem Solving",
    meta: "DSA + Competitive Practice",
    description:
      "Solved 500+ LeetCode problems and 100+ GeeksforGeeks problems across core algorithmic and data-structure topics.",
  },
];

const skills = [
  "Python",
  "Java",
  "C/C++",
  "JavaScript",
  "SQL",
  "HTML/CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Git",
  "GitHub",
];

const coursework = [
  "Data Structures and Algorithms",
  "Database Management Systems",
  "Operating Systems",
  "Artificial Intelligence",
  "Object-Oriented Programming",
];

const achievements = [
  "500+ problems solved on LeetCode",
  "100+ problems solved on GeeksforGeeks",
  "SQL (Intermediate) Certificate - HackerRank",
  "Problem Solving (Intermediate) Certificate - HackerRank",
];

function Planet({
  orbitRadius,
  size,
  color,
  speed,
  y = 0,
  emissive = color,
  ring = false,
  offset = 0,
}) {
  const orbitRef = useRef(null);

  useFrame((state) => {
    if (!orbitRef.current) {
      return;
    }

    orbitRef.current.rotation.y = state.clock.elapsedTime * speed + offset;
  });

  return (
    <group ref={orbitRef}>
      <group position={[orbitRadius, y, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[size, 48, 48]} />
          <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={0.25} />
        </mesh>
        {ring ? (
          <mesh rotation={[Math.PI / 2.6, 0.3, 0]}>
            <torusGeometry args={[size * 1.8, size * 0.18, 16, 100]} />
            <meshStandardMaterial color="#c9b08c" emissive="#8a6d46" emissiveIntensity={0.18} />
          </mesh>
        ) : null}
      </group>
    </group>
  );
}

function OrbitPath({ radius }) {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.015, radius + 0.015, 128]} />
      <meshBasicMaterial color="#5f6f96" transparent opacity={0.28} side={2} />
    </mesh>
  );
}

function SolarSystem() {
  const systemRef = useRef(null);

  useFrame((state) => {
    if (!systemRef.current) {
      return;
    }

    systemRef.current.rotation.y = state.clock.elapsedTime * 0.08;
  });

  return (
    <group ref={systemRef} scale={1.15}>
      <mesh>
        <sphereGeometry args={[0.62, 64, 64]} />
        <meshStandardMaterial color="#ffb347" emissive="#ff7a18" emissiveIntensity={1.8} />
      </mesh>

      <pointLight intensity={28} distance={24} color="#ffb347" />

      <OrbitPath radius={1.4} />
      <OrbitPath radius={2.2} />
      <OrbitPath radius={3.1} />
      <OrbitPath radius={4.2} />
      <OrbitPath radius={5.4} />

      <Planet orbitRadius={1.4} size={0.11} color="#a4b3c8" speed={1.1} />
      <Planet orbitRadius={2.2} size={0.15} color="#d6b38b" speed={0.78} offset={1.2} />
      <Planet orbitRadius={3.1} size={0.19} color="#4f9cff" speed={0.58} offset={2.4} />
      <Planet orbitRadius={4.2} size={0.14} color="#c95c3d" speed={0.44} y={0.04} offset={0.7} />
      <Planet orbitRadius={5.4} size={0.34} color="#d4b189" speed={0.23} ring offset={1.8} />
    </group>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#09111f"]} />
      <ambientLight intensity={0.45} />
      <directionalLight position={[6, 5, 3]} intensity={0.75} color="#9dc0ff" />
      <Stars radius={100} depth={50} count={2600} factor={4} saturation={0} fade speed={0.4} />
      <SolarSystem />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} />
    </>
  );
}

export default function App() {
  return (
    <div className="page-shell">
      {/* ── LinkedIn-style Profile Card ── */}
      <section className="li-profile-card">
        {/* Cover Photo */}
        <div className="li-cover">
          <img src="/cover_photo_top.png" alt="Cover" />
        </div>

        {/* Avatar + Action Row */}
        <div className="li-avatar-row">
          <div className="li-avatar-wrap">
            <img src="/profile_photo.jpeg" alt="Aditya Gupta" className="li-avatar" />
            <span className="li-avatar-badge">🎓</span>
          </div>
          <div className="li-top-actions">
            <a href={resumeUrl} className="li-btn-outline" target="_blank" rel="noreferrer">
              📄 Resume
            </a>
            <a href="#contact" className="li-btn-primary">
              ✉️ Connect
            </a>
          </div>
        </div>

        {/* Identity */}
        <div className="li-identity">
          <h1 className="li-name">Aditya Gupta</h1>
          <p className="li-headline">
            B.Tech CSE @ IIIT Guwahati&nbsp;·&nbsp;Full-Stack Developer&nbsp;·&nbsp;DSA Enthusiast
          </p>
          <p className="li-location">📍 Guwahati, Assam, India&nbsp;·&nbsp;Open to Opportunities</p>

          {/* Stats Row */}
          <div className="li-stats">
            <div className="li-stat">
              <span className="li-stat-num">500+</span>
              <span className="li-stat-label">LeetCode Problems</span>
            </div>
            <div className="li-stat-divider" />
            <div className="li-stat">
              <span className="li-stat-num">8.51</span>
              <span className="li-stat-label">CGPA / 10.0</span>
            </div>
            <div className="li-stat-divider" />
            <div className="li-stat">
              <span className="li-stat-num">3+</span>
              <span className="li-stat-label">Projects Built</span>
            </div>
            <div className="li-stat-divider" />
            <div className="li-stat">
              <span className="li-stat-num">2027</span>
              <span className="li-stat-label">Graduating</span>
            </div>
          </div>

          {/* Skills Chips */}
          <div className="li-chips">
            {["Python","Java","C/C++","JavaScript","Node.js","MongoDB","SQL","React","Express"].map(s => (
              <span className="li-chip" key={s}>{s}</span>
            ))}
          </div>

          {/* Social Links */}
          <div className="li-socials">
            <a href="https://www.linkedin.com/in/aditya-gupta-a3855b293/" target="_blank" rel="noreferrer" className="li-social-btn linkedin-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="https://github.com/AdiQuantum" target="_blank" rel="noreferrer" className="li-social-btn github-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              GitHub
            </a>
            <a href="mailto:adityagupta6143@gmail.com" className="li-social-btn email-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              Email
            </a>
          </div>
        </div>
      </section>

      <section className="panel about-panel" id="about">
        <p className="section-label">About</p>
        <div className="panel-grid">
          <div>
            <h2>Engineering-focused portfolio with depth, code discipline, and a strong CS base.</h2>
          </div>
          <p>
            My work is centered on backend logic, database design, and full-stack web development.
            I have built production-style academic projects, practiced problem solving consistently,
            and worked across Java, Python, JavaScript, SQL, MongoDB, and MySQL.
          </p>
        </div>
      </section>

      <section className="panel" id="education">
        <p className="section-label">Education</p>
        <div className="timeline">
          <article className="timeline-item">
            <h3>Indian Institute of Information Technology, Guwahati</h3>
            <p>B.Tech in Computer Science and Engineering | 2023 - 2027</p>
            <span>CGPA: 8.51 / 10.0</span>
          </article>
          <article className="timeline-item">
            <h3>Maa Bharti Senior Secondary Vidya Bhawan, Bharatpur</h3>
            <p>Class 12 | 2022</p>
            <span>92.6%</span>
          </article>
          <article className="timeline-item">
            <h3>Sony Academy Public Senior Secondary School, Bharatpur</h3>
            <p>Class 10 | 2020</p>
            <span>96.67%</span>
          </article>
        </div>
      </section>

      <section className="panel" id="projects">
        <p className="section-label">Selected Work</p>
        <div className="cards">
          {projectCards.map((project) => (
            <article className="card" key={project.title}>
              <h3>{project.title}</h3>
              <span className="card-meta">{project.meta}</span>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel skills-panel">
        <p className="section-label">Technical Skills</p>
        <div className="skill-list">
          {skills.map((skill) => (
            <span className="skill-pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="panel">
        <p className="section-label">Coursework</p>
        <div className="skill-list">
          {coursework.map((item) => (
            <span className="skill-pill alt-pill" key={item}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="panel">
        <p className="section-label">Achievements</p>
        <div className="achievement-list">
          {achievements.map((item) => (
            <article className="achievement-card" key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <p className="section-label">Leadership</p>
        <div className="cards leadership-grid">
          <article className="card">
            <h3>Quiz Club Coordinator</h3>
            <span className="card-meta">IIIT Guwahati | Aug 2024 - May 2025</span>
            <p>Served as club coordinator for two semesters and helped organize student activity.</p>
          </article>
          <article className="card">
            <h3>PR Team Member</h3>
            <span className="card-meta">IIITG Yuvaan Cultural Fest</span>
            <p>Managed publicity and outreach efforts to improve event reach and participation.</p>
          </article>
        </div>
      </section>

      <section className="panel contact-panel" id="contact">
        <p className="section-label">Contact</p>
        <div className="contact-grid">
          <h2>Open to internships, collaborations, and software engineering opportunities.</h2>
          <div>
            <p>Email: adityagupta6143@gmail.com</p>
            <p>Phone: +91 78780-34627</p>
            <p>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/aditya-gupta-a3855b293/" target="_blank" rel="noreferrer">
                aditya-gupta-a3855b293
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a href="https://github.com/AdiQuantum" target="_blank" rel="noreferrer">
                AdiQuantum
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
