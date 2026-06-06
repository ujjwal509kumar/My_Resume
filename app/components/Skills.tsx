"use client";

import { motion, useReducedMotion } from "motion/react";
import { skills } from "../data/profile";

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <div className="skills">
      <h3 className="skills-title">My skills</h3>
      <ul className="skills-list">
        {skills.map((skill, i) => (
          <li key={skill.label} className="skill-item">
            <div className="skill-row">
              <span className="skill-label">{skill.label}</span>
              <span className="skill-value">{skill.value}%</span>
            </div>
            <div className="skill-track">
              <motion.div
                className="skill-fill"
                initial={reduce ? false : { width: 0 }}
                whileInView={{ width: `${skill.value}%` }}
                viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                transition={{
                  duration: 1,
                  delay: 0.1 + i * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
