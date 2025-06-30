import TeamMember from "@/components/ui/profileCard";

export default function Team() {
  return (
    <main>
      <div className="relative h-screen flex items-end pl-[5vw] pb-[10vh]">
        <h1 className="m-0 text-[15vw] font-light bg-gradient-to-r from-[#FF6B4A] to-[#EE441C] bg-[length:250%_100%] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,107,74,0.5)] animate-[shimmer_5s_ease-in-out_infinite]">Team</h1>
      </div>
      <div className="h-screen text-white">
        <div className="flex flex-wrap gap-3 justify-center p-5">

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
