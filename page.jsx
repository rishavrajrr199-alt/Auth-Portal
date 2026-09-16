"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const [name, setName] = useState("User");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");

    if (loggedIn !== "true") {
      router.push("/login");
      return;
    }

    setName(localStorage.getItem("userName") || "User");
    setEmail(localStorage.getItem("userEmail") || "");
  }, [router]);

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  }

  return (
    <main className="dashboard-page">

      <nav className="navbar">

        <h2 className="logo">
          🔐 AUTH PORTAL
        </h2>

        <button
          className="logout-button"
          onClick={handleLogout}
        >
          LOGOUT
        </button>

      </nav>

      <div className="dashboard-container">

        <h1>Dashboard</h1>

        <div className="dashboard-card">

          <h2>
            Welcome, {name}! 👋
          </h2>

          <div className="user-info">

            <p>
              <strong>👤 Name:</strong> {name}
            </p>

            <p>
              <strong>📧 Email:</strong> {email}
            </p>

            <p>
              <strong>Authentication:</strong>{" "}
              <span className="success">
                ✓ Logged In
              </span>
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}