export type ExperienceEntry = {
  id: string;
  role: string;
  org: string;
  location: string;
  dateRange: string;
  bullets: string[];
};

// Sorted oldest -> newest so "Forward" reads as career progression over time.
export const experience: ExperienceEntry[] = [
  {
    id: "eye-level",
    role: "Instructor",
    org: "Eye Level",
    location: "Alpharetta, GA",
    dateRange: "May 2022 – Nov 2024",
    bullets: [
      "Tutored students from grades K-8 in numerical fluency, Algebra, Pre-Calculus, and English conventions and comprehension",
      "Organized students' personalized curriculum and timetable and maintained a clean, efficient work space",
    ],
  },
  {
    id: "uav-drone",
    role: "UAV Drone — Design & Build",
    org: "TSA (Technology Student Association)",
    location: "Alpharetta, GA",
    dateRange: "Aug 2022 – Jul 2025",
    bullets: [
      "Designed, tested, and documented the process of building a drone from scratch to complete an obstacle course",
      "Awarded 7th place at Nationals (2023, 2025) and 1st place at States (2024) at the TSA Leadership Conference",
    ],
  },
  {
    id: "midway-robotics",
    role: "Mentor",
    org: "Midway Elementary School Robotics Club",
    location: "Alpharetta, GA",
    dateRange: "Aug 2024 – May 2026",
    bullets: [
      "Advised students on designing, building, coding, and documenting robots for the VEX IQ competition",
    ],
  },
  {
    id: "mathematical-modeling",
    role: "Mathematical Modeling",
    org: "SCUDEM / M3 Challenge",
    location: "Athens, GA",
    dateRange: "Aug 2025 – May 2026",
    bullets: [
      "Developed mathematical models simulating space dust trajectories in atmospheres and sports gambling consequences",
      "Used C++ to simulate Brownian motion and build Black-Scholes pricing models",
      "Awarded the SCUDEM Outstanding Award and an M3 Honorable Mention Scholarship",
    ],
  },
  {
    id: "chess-club",
    role: "Founder & Co-President",
    org: "Chess Club",
    location: "Alpharetta, GA",
    dateRange: "Aug 2025 – May 2026",
    bullets: [
      "Hosted weekly sessions for chess enthusiasts to play and learn from one another",
      "Organized a local chess tournament with over 16 attendants",
    ],
  },
  {
    id: "schoolhouse-tutoring",
    role: "Senior Tutor",
    org: "Schoolhouse Tutoring",
    location: "Remote",
    dateRange: "Aug 2025 – May 2026",
    bullets: ["Led remote tutoring sessions supporting students across a range of subjects"],
  },
  {
    id: "georgia-tech",
    role: "Instructional Designer",
    org: "Georgia Tech",
    location: "Atlanta, GA",
    dateRange: "Nov 2025 – May 2026",
    bullets: [
      "Created videos for the Georgia Tech Distance Math Program covering Linear Algebra and Multivariable Calculus",
      "Used Manim, a mathematical visualization library, as a Python add-on for animated instructional content",
      "Communicated with current students and professors to create engaging, informative content",
    ],
  },
];
