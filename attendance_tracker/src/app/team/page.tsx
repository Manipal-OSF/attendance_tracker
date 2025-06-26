'use client'

export default function Team() {
  return (
    <main>
      {/* Same nav structure */}
      <div className="nav">
        <div className="logo">
          <img src="/logo.png" alt="OSF Logo" />
        </div>
        <div className="navbutt">
          <a href="/">home</a>
          <a href="/tracker">track attendance</a>
          <a href="/team">team</a>
        </div>
        <div className="user-profile">
          <img 
            src="/user_icon.png" 
            alt="User Profile" 
            onClick={() => window.location.href = '/profile'}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
      
      {/* Same navblur structure */}
      <div className="navblur">
        <div className="b" id="b0"></div>
        <div className="b" id="b1"></div>
        <div className="b" id="b2"></div>
        <div className="b" id="b3"></div>
        <div className="b" id="b4"></div>
        <div className="b" id="b5"></div>
        <div className="b" id="b6"></div>
        <div className="b" id="b7"></div>
        <div className="b" id="b8"></div>
        <div className="b" id="b9"></div>
      </div>

      <div className="hero">
        <h1>Team</h1>
      </div>

      <div className="content">
      </div>
    </main>
  );
}
