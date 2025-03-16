'use client'; // Use this if you're using the App Router

import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="home-container">
      <div className="content">
      <h1 className="title">
  <span className="proctor">Proctor</span> <span className="x">X</span>
</h1>

        <p className="subtitle">Intelligent exam monitoring, reimagined.</p>
        
        <div className="buttons-container">
          <Link href="/examiner">
            <button className="metallic-button examiner-button">
              Examiner Login
            </button>
          </Link>
          <Link href="/student">
            <button className="metallic-button student-button">
              Student Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}