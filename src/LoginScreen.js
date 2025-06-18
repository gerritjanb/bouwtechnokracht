import { useState } from "react";
import Dashboard from "./Dashboard"; // zonder /dash map!

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (email === "1234" && password === "1234") {
      setLoggedIn(true);
    } else {
      alert("Onjuiste inloggegevens");
    }
  };

  if (loggedIn) {
    return <Dashboard />;
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#5E2E91" }}>
      <div style={{ background: "#FFFFFF", padding: "2rem", borderRadius: "8px", width: "100%", maxWidth: "400px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
        <img src="/logo.svg" alt="Bedrijfslogo" style={{ width: "100px", display: "block", margin: "0 auto 1.5rem" }} />
        <h2 style={{ color: "#000000", textAlign: "center", marginBottom: "1rem" }}>Inloggen</h2>

        <input
          type="text"
          placeholder="Gebruikersnaam"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: "block", width: "100%", marginBottom: "1rem", padding: "0.75rem", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <input
          type="password"
          placeholder="Wachtwoord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: "block", width: "100%", marginBottom: "1rem", padding: "0.75rem", borderRadius: "4px", border: "1px solid #ccc" }}
        />

        <button
          onClick={handleLogin}
          style={{ width: "100%", padding: "0.75rem", backgroundColor: "#F39200", color: "#FFFFFF", border: "none", borderRadius: "4px", fontWeight: "bold", cursor: "pointer" }}
        >
          Inloggen
        </button>
      </div>
    </div>
  );
}