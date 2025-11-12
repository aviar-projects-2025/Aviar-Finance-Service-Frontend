import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "Buy a home",
  });
  const [status, setStatus] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("✅ Thanks! We’ll reach out.");
        setForm({ name: "", email: "", phone: "", goal: "Buy a home" });
      } else {
        setStatus("⚠️ Something went wrong.");
      }
    } catch (err) {
      setStatus("❌ Server not reachable.");
    }
  };

  const styles = {
    section: {
      padding: isMobile ? "50px 15px" : "80px 20px",
      backgroundColor: "#f9fafb",
      textAlign: "center",
    },
    title: {
      fontSize: isMobile ? "1.6rem" : "2rem",
      fontWeight: "700",
      color: "#0a2e5c",
      marginBottom: "30px",
    },
    card: {
      backgroundColor: "#fff",
      maxWidth: "600px",
      margin: "0 auto",
      padding: isMobile ? "20px 18px" : "30px 25px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      textAlign: "left",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "16px",
    },
    label: {
      fontWeight: "600",
      color: "#111827",
      marginBottom: "6px",
      fontSize: isMobile ? "0.9rem" : "1rem",
    },
    input: {
      padding: isMobile ? "9px 10px" : "10px 12px",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      fontSize: "1rem",
      outline: "none",
      width: "100%",
    },
    select: {
      padding: isMobile ? "9px 10px" : "10px 12px",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      fontSize: "1rem",
      outline: "none",
      width: "100%",
    },
    flexRow: {
      display: "flex",
      gap: "12px",
      flexDirection: isMobile ? "column" : "row",
    },
    button: {
      backgroundColor: "#0a2e5c",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      padding: isMobile ? "12px" : "14px 20px",
      fontWeight: "600",
      fontSize: "1rem",
      cursor: "pointer",
      width: "100%",
      marginTop: "5px",
      transition: "background-color 0.25s ease",
    },
    smallText: {
      fontSize: "0.9rem",
      color: "#4b5563",
      textAlign: "center",
      lineHeight: "1.4",
    },
  };

  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.title}>Contact AVIAR</h2>
      <div style={styles.card}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter your name"
          />
        </div>

        <div style={styles.flexRow}>
          <div style={{ ...styles.formGroup, flex: 1 }}>
            <label style={styles.label}>Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter your email"
            />
          </div>
          <div style={{ ...styles.formGroup, flex: 1 }}>
            <label style={styles.label}>Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter your phone"
            />
          </div>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>What are you looking to do?</label>
          <select
            name="goal"
            value={form.goal}
            onChange={handleChange}
            style={styles.select}
          >
            <option>Buy a home</option>
            <option>Refinance</option>
            <option>Cash-out refinance</option>
            <option>Investment loan</option>
          </select>
        </div>

        <button
          style={styles.button}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#1d4ed8")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#0a2e5c")
          }
          onClick={handleSubmit}
        >
          Submit
        </button>

        {status && (
          <p style={{ ...styles.smallText, marginTop: "0.8rem" }}>{status}</p>
        )}

        <p style={{ ...styles.smallText, marginTop: "0.8rem" }}>
          Or call Vijay Govindarajan — <strong>309 750 1082</strong> —{" "}
          <a
            href="mailto:avirbuildersllc@gmail.com"
            style={{ color: "#0a2e5c", textDecoration: "none" }}
          >
            avirbuildersllc@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
