import React from 'react';



export default function CreateProfile() {
  return (
    <>
      <div className="bg-grid"></div>
      <div className="container">
        {/* Decoration Sticker 1 */}
        <div className="sticker sticker-top neo-border neo-shadow-sm">
          <span className="sticker-text">Eat Together!</span>
        </div>

        {/* Main Card */}
        <div className="card neo-border neo-shadow">
          {/* Header Section */}
          <div className="header-section">
            <div className="icon-box neo-border">
              <span className="material-symbols-outlined">restaurant</span>
            </div>
            <h1 className="title">Join the Canteen</h1>
            <p className="subtitle">Grab your seat at the campus table!</p>
          </div>

          {/* Registration Form */}
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            {/* Full Name */}
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                className="form-input neo-border neo-shadow-sm"
                placeholder="Enter your name"
                type="text"
              />
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                className="form-input neo-border neo-shadow-sm"
                placeholder="+91 00000 00000"
                type="tel"
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label className="form-label">College Email ID</label>
              <input
                className="form-input neo-border neo-shadow-sm"
                placeholder="yourname@college.edu"
                type="email"
              />
            </div>

            {/* Password Row */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Create Password</label>
                <input
                  className="form-input neo-border neo-shadow-sm"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Confirm Password</label>
                <input
                  className="form-input neo-border neo-shadow-sm"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="submit-btn-container">
              <button className="submit-btn neo-border neo-shadow" type="submit">
                <span className="submit-btn-text">Join the Table</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </form>

          {/* Footer Link */}
          <div className="footer-link">
            <p className="footer-text">
              Already have an account?
              <a href="#">LOG IN</a>
            </p>
          </div>
        </div>

        {/* Decoration Sticker 2 */}
        <div className="sticker sticker-bottom neo-border neo-shadow-sm">
          <span className="material-symbols-outlined" style={{ fontSize: '1rem', color: 'var(--bg-dark)' }}>
            local_fire_department
          </span>
          <span className="sticker-text">Hot & Fresh</span>
        </div>
      </div>
      
      {/* Background Blobs */}
      <div className="blob blob-top-right"></div>
      <div className="blob blob-bottom-left"></div>
    </>
  );
}