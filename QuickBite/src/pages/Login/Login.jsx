import React from 'react'
import './Login.css'
import { useState } from 'react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (

        <>
            <div className="main-container">
                <div className="bg-pattern"></div>

                {/* Left Section: Illustration */}
                <aside className="left-section">
                    <div className="blob-yellow"></div>
                    <div className="blob-red"></div>

                    <div className="illustration-content">
                        <div className="mascot-container">
                            <div className="mascot-bg"></div>
                            <div className="mascot-frame">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHwRCel4ARJA9iGw9uOAu_tcb5UcNOfu6UnaQeptjwrwF0t4a5GPZdz4beYeLzPjoo69Sg_ZqsWIUeMb1d3L2z_4BuNlAWjYmcyizgX1JMz7Opzs7QSOuZPOMxut1kAlVqC8t2Bsaq5It0xfnXSjdHXt_xUfkKOUUfMpD3RXrkjWW-ZW-vc5eYYh9Q-VnUK8hMogEVualj-cmrOSealh-O-EU_c2gkCxDAshzWg1b7yJWFVyffvtWLxPVn8cNd_fws2C285QQ_Xqht"
                                    alt="Mascot"
                                    className="mascot-img"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="sticker-yum">YUM!</div>
                            <div className="sticker-fast">FAST</div>
                        </div>

                        <h2 className="headline">
                            Hungry?<br />
                            <span>Skip the line.</span>
                        </h2>
                        <p className="subheadline">
                            Order your lunch from the library, dorm, or anywhere on campus. We'll have it ready before you arrive.
                        </p>
                    </div>
                </aside>

                {/* Right Section: Login Form */}
                <main className="right-section">
                    <div className="login-card">
                        <div className="header-badge">Student Login</div>

                        <div className="card-header">
                            <div className="icon-container">
                                <span className="material-symbols-outlined brand-icon">lunch_dining</span>
                            </div>
                            <h1 className="brand-title">Campus Canteen</h1>
                            <p className="brand-subtitle">Enter your credentials to get fed.</p>
                        </div>

                        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="input-group">
                                <label className="input-label" htmlFor="student-id">Student Email ID</label>
                                <div className="input-wrapper">
                                    <input
                                        type="text"
                                        id="student-id"
                                        className="input-field"
                                        placeholder="2024XXXXX@sigce.edu.in"
                                        // value={ }
                                    />
                                    <span className="material-symbols-outlined input-icon">badge</span>
                                </div>
                            </div>

                            <div className="input-group">
                                <div className="label-row">
                                    <label className="input-label" htmlFor="password">Password</label>
                                    <a href="#" className="lost-key">Lost key?</a>
                                </div>
                                <div className="input-wrapper">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        className="input-field"
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        className="visibility-btn"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <span className="material-symbols-outlined">
                                            {showPassword ? 'visibility_off' : 'visibility'}
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <button type="submit" className="submit-btn">
                                <span>Unlock Lunch</span>
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </form>

                        <div className="divider">
                            <p className="new-here">
                                New here? <a href="#" className="create-profile">Create a profile</a>
                            </p>
                        </div>
                    </div>

                    <footer className="footer-info">
                        <span>© 2023 Campus Canteen</span>
                        <span>•</span>
                        <a href="#">Help</a>
                        <span>•</span>
                        <a href="#">Privacy</a>
                    </footer>
                </main>
            </div>

        </>
    )
}

export default Login