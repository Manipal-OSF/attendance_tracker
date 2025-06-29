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
                <img src={props.image} alt='Profile Image' onContextMenu={(e)=>{e.preventDefault()}} draggable={false} style={{
                    margin: '10px', 
                    width: '290px', 
                    borderRadius: '15px'
                }}></img>
                <div style={{
                    display: "flex", 
                    alignItems: "center", 
                    margin: '10px', 
                    marginTop: '15px'
                }}>
                    <div>
                        <strong>
                            <p style={{
                                color: '#FF6B4A', 
                                fontSize: '20px',
                            }}>{props.name}</p>
                        </strong>
                        <p style={{color: '#EE441C'}}>{props.role}</p>
                    </div>
                    <button onClick={()=>window.open(props.GitHublink, '_blank')} style={{
                        backgroundColor: "#111111",
                        width: "70px",
                        height: "45px",
                        borderRadius: "7px",
                        border: 'none', 
                        boxShadow: '0',
                        marginLeft: 'auto',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems:'center',
                        justifyContent: 'center'
                    }}>
                        <img src="/githublogo.png" alt='GitHub logo' onContextMenu={(e)=>{e.preventDefault()}} draggable={false} style={{
                            width: "35px", 
                            borderRadius: "40px", 
                        }} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default TeamMember;