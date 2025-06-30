'use client'
import TeamMember from "@/components/ui/profileCard";
import {TEAM} from "@/utils/utils";

export default function Team() {
  return (
    <main>
      <div className="hero">
        <h1>Team</h1>
      </div>
      <div className="content">
        <div style={{display: 'flex', flexWrap: 'wrap', gap:'12px', justifyContent:'center', padding:'40px'}}>
          
          {TEAM.map((member) => (
              <TeamMember
                key={member.name}
                image={member.image}
                name={member.name}
                role={member.role}
                githubLink={member.githubLink}
              />
          ))}

      </div>
      </div>
    </main>
  );
}
