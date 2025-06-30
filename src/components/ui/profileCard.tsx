'use client'
import "../../app/globals.css";

interface CardProps{
    image:string;
    name:string;
    role:string;
    GitHublink:string;
}

const TeamMember = (props: CardProps)=>{
    return (
        <>
            <div className="cardbase">
                <div className="shine"></div>
                <img src={props.image} alt='Profile Image' onContextMenu={(e)=>{e.preventDefault()}} draggable={false}  className="w-290 rounded-2xl"></img>
                <div className="flex items-center text-center mt-5 ml-4">
                    <div>
                        <strong>
                            <p className="text-xl text-[#FF6B4A]">{props.name}</p>
                        </strong>
                        <p className="text-[#EE441C]">{props.role}</p>
                    </div>
                    <button onClick={()=>window.open(props.GitHublink, '_blank')} className="flex mr-2 justify-center items-center cursor-pointer ml-auto w-18 bg-[#111111] rounded-lg h-11">
                        <img src="/githublogo.png" alt="GitHub logo" onContextMenu={(e) => { e.preventDefault(); }} draggable={false} className="w-8 rounded-xl" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default TeamMember;