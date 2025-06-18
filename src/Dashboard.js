export default function Dashboard() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif", backgroundImage: "url('/background-construction.jpg')", backgroundSize: "cover" }}>
      {/* Zijmenu */}
      <nav style={{ width: "240px", backgroundColor: "#121212d9", color: "#fff", padding: "2rem 1rem", boxShadow: "2px 0 5px rgba(0,0,0,0.2)" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <img src="/logo.svg" alt="Logo" style={{ maxWidth: "120px" }} />
        </div>
        <h2 style={{ color: "#F39200", fontSize: "1.25rem", marginBottom: "1.5rem", borderBottom: "1px solid #333", paddingBottom: "0.5rem" }}>Menu</h2>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "2", fontSize: "1rem" }}>
          <li><a href="#" style={{ color: "#fff", textDecoration: "none", display: "block", padding: "0.5rem 0" }}>🏠 Dashboard</a></li>
          <li><a href="#" style={{ color: "#fff", textDecoration: "none", display: "block", padding: "0.5rem 0" }}>📝 Blogs</a></li>
          <li><a href="#" style={{ color: "#fff", textDecoration: "none", display: "block", padding: "0.5rem 0" }}>📁 Projecten</a></li>
          <li><a href="#" style={{ color: "#fff", textDecoration: "none", display: "block", padding: "0.5rem 0" }}>👤 Profiel</a></li>
          <li><a href="#" style={{ color: "#fff", textDecoration: "none", display: "block", padding: "0.5rem 0" }}>🚪 Uitloggen</a></li>
        </ul>
      </nav>

      {/* Inhoud */}
      <main style={{ flex: 1, padding: "3rem 4rem", backgroundColor: "#ffffffcc", backdropFilter: "blur(4px)" }}>
        <h1 style={{ color: "#000000", fontSize: "2rem", marginBottom: "2rem" }}>📰 Nieuws & Blogs</h1>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          <article style={{ backgroundColor: "#fff", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
            <h2 style={{ color: "#5E2E91" }}>🔨 5 tips voor veilig werken op de bouwplaats</h2>
            <p style={{ marginTop: "0.5rem" }}>
              Veiligheid staat voorop. Lees hoe jij en je team veilig en efficiënt blijven werken tijdens alle seizoenen...
            </p>
            <a href="#" style={{ color: "#F39200", marginTop: "0.5rem", display: "inline-block" }}>Lees verder →</a>
          </article>

          <article style={{ backgroundColor: "#fff", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
            <h2 style={{ color: "#5E2E91" }}>🏗️ Project in beeld: Transformatie Ede</h2>
            <p style={{ marginTop: "0.5rem" }}>
              In Ede is een oud schoolgebouw omgebouwd tot duurzame appartementen. Bekijk hier de technieken die zijn toegepast...
            </p>
            <a href="#" style={{ color: "#F39200", marginTop: "0.5rem", display: "inline-block" }}>Bekijk project →</a>
          </article>

          <article style={{ backgroundColor: "#fff", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
            <h2 style={{ color: "#5E2E91" }}>🧰 Innovatie: Spuitrobot bij renovaties</h2>
            <p style={{ marginTop: "0.5rem" }}>
              Bouw Technokracht test momenteel geautomatiseerde spuittechnologie voor grootschalig onderhoud. Een kijkje in de toekomst...
            </p>
            <a href="#" style={{ color: "#F39200", marginTop: "0.5rem", display: "inline-block" }}>Lees meer →</a>
          </article>
        </div>
      </main>
    </div>
  );
}