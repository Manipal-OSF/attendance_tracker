'use client'
import TeamMember from "@/components/ui/profileCard";
import {TEAM} from "@/utils/utils";

export default function Team() {
  return (
    <main>
      <div className="relative h-screen flex items-end pl-[5vw] pb-[10vh]">
        <h1 className="m-0 text-[15vw] font-light bg-gradient-to-r from-[#FF6B4A] to-[#EE441C] bg-[length:250%_100%] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,107,74,0.5)] animate-[shimmer_5s_ease-in-out_infinite]">Team</h1>
      </div>
      <div className="h-screen text-white">
        <div className="flex flex-wrap gap-3 justify-center p-5">
          
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
