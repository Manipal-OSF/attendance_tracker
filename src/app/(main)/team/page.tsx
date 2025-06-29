'use client'
import TeamMember from "@/components/ui/profileCard";

export default function Team() {
  return (
    <main>
      <div className="hero">
        <h1>Team</h1>
      </div>
      <div className="content">
        <div style={{display: 'flex', flexWrap: 'wrap', gap:'12px', justifyContent:'center', padding:'40px'}}>
          
          <TeamMember 
            image="/pu.png" 
            name = "Pranav Unni" 
            role="Gang Leader" 
            GitHublink="https://github.com/PranavU-Coder"
          />

          <TeamMember 
            image="/pain.jpg" 
            name="Honored One" 
            role="Gang Co-Leader" 
            GitHublink="https://github.com/FirezTheGreat"
          />

          <TeamMember 
            image="/cv.webp" 
            name="Chatur Vasireddy" 
            role="Gang Co-Leader" 
            GitHublink="https://github.com/ChaturVasireddy"
          />

          <TeamMember 
            image="/pk.png" 
            name="Pranav Kumar" 
            role="Gang Member" 
            GitHublink="https://github.com/Pranav-Kumar14"
          />

          <TeamMember 
            image="/ph.png" 
            name="PixelHalide" 
            role="Gang Member" 
            GitHublink="https://github.com/PixelHalide"
          />

          <TeamMember 
            image="/bac.webp" 
            name="bang-a-cat" 
            role="Gang Member" 
            GitHublink="https://github.com/bongacat"
          />

          <TeamMember 
            image="/ad.png" 
            name = "Orca" 
            role="Gang Member" 
            GitHublink="https://github.com/ObnoxiousOrca"
          />

      </div>
      </div>
    </main>
  );
}
