'use client';

import React from 'react';
import Link from 'next/link';

export default function ExaminerDashboard() {
  return (
    <div className="home-container">
      <div className="content">
        <h1 className="title">Examiner Dashboard</h1>
        <p className="subtitle">Manage exams and student activities</p>
        
        <div className="dashboard-grid">
          <button className="metallic-button examiner-button" onClick={() => console.log("Upload exam clicked")}>
            Upload Exam
          </button>
          
          <button className="metallic-button examiner-button" onClick={() => console.log("Revoke exam clicked")}>
            Revoke Exam
          </button>
          
          <button className="metallic-button examiner-button" onClick={() => console.log("Approve student clicked")}>
            Approve Student
          </button>
          
          <button className="metallic-button examiner-button" onClick={() => console.log("Release results clicked")}>
            Release Results
          </button>
        </div>
        
        <Link href="/" className="back-link">
          <span className="metallic-text">Return to Home</span>
        </Link>
      </div>
    </div>
  );
}