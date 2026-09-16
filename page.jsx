"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(event) {
    event.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("isLoggedIn", "true");

    router.push("/dashboard");
  }

  return (
    <main className="auth-page">

      <nav className="navbar">
        <h2 className="logo">🔐 AUTH PORTAL</h2>
      </nav>

      <div className="auth-container">

        <div className="auth-card">

          <h1>Create Account</h1>

          <p className="subtitle">
            Register to get started
          </p>

          <form onSubmit={handleRegister}>

            <label>Name</label>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <label>Email</label>

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <button
              type="submit"
              className="primary-button"
            >
              REGISTER
            </button>

          </form>

          <p className="bottom-text">
            Already registered?{" "}
            <Link href="/login">
              Login
            </Link>
          </p>

        </div>

      </div>

    </main>
  );
}