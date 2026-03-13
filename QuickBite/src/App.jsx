import './App.css'

const mascotImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCHwRCel4ARJA9iGw9uOAu_tcb5UcNOfu6UnaQeptjwrwF0t4a5GPZdz4beYeLzPjoo69Sg_ZqsWIUeMb1d3L2z_4BuNlAWjYmcyizgX1JMz7Opzs7QSOuZPOMxut1kAlVqC8t2Bsaq5It0xfnXSjdHXt_xUfkKOUUfMpD3RXrkjWW-ZW-vc5eYYh9Q-VnUK8hMogEVualj-cmrOSealh-O-EU_c2gkCxDAshzWg1b7yJWFVyffvtWLxPVn8cNd_fws2C285QQ_Xqht'

function App() {
  return (
    <div className="login-page">
      <div className="bg-pattern" aria-hidden="true" />

      <main className="layout">
        <section className="illustration-panel" aria-label="Promo illustration">
          <div className="blob blob-top" />
          <div className="blob blob-bottom" />

          <div className="hero-content">
            <div className="mascot-wrap" role="img" aria-label="Abstract colorful food illustration">
              <div className="mascot-ring" />
              <div className="mascot-inner">
                <img src={mascotImage} alt="Mascot" className="mascot-image" />
              </div>
              <div className="sticker yum">YUM!</div>
              <div className="sticker fast">FAST</div>
            </div>

            <h2 className="hero-title">
              Hungry?<br />
              <span>Skip the line.</span>
            </h2>

            <p className="hero-subtitle">
              Order your lunch from the library, dorm, or anywhere on campus. We&apos;ll have it
              ready before you arrive.
            </p>
          </div>
        </section>

        <section className="form-panel">
          <div className="mobile-gradient" aria-hidden="true" />

          <div className="login-card">
            <div className="header-badge">Student Login</div>

            <div className="header-copy">
              <div className="icon-holder">
                <span className="material-symbols-outlined">lunch_dining</span>
              </div>
              <h1>Campus Canteen</h1>
              <p>Enter your credentials to get fed.</p>
            </div>

            <form className="login-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-field">
                <label htmlFor="student-id">Student ID</label>
                <div className="input-wrap">
                  <input id="student-id" type="text" placeholder="e.g. ST-4092" />
                  <span className="material-symbols-outlined trailing-icon">badge</span>
                </div>
              </div>

              <div className="form-field">
                <div className="label-row">
                  <label htmlFor="password">Password</label>
                  <a href="#">Lost key?</a>
                </div>
                <div className="input-wrap">
                  <input id="password" type="password" placeholder="••••••••" />
                  <button type="button" className="password-toggle" aria-label="Toggle password visibility">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </div>
              </div>

              <button type="submit" className="submit-btn">
                <span>Unlock Lunch</span>
                <span className="material-symbols-outlined arrow">arrow_forward</span>
              </button>
            </form>

            <div className="signup-row">
              <p>
                New here? <a href="#">Create a profile</a>
              </p>
            </div>
          </div>

          <footer className="footer-links">
            <span>© 2023 Campus Canteen</span>
            <span>•</span>
            <a href="#">Help</a>
            <span>•</span>
            <a href="#">Privacy</a>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default App
