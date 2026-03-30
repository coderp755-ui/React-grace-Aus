const TEAM_MEMBERS = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "https://via.placeholder.com/300x300",
    bio: "15+ years of experience in international education consulting"
  },
  {
    name: "Sarah Johnson",
    role: "Head of Admissions",
    image: "https://via.placeholder.com/300x300",
    bio: "Expert in university placements across UK, USA, and Canada"
  },
  {
    name: "Michael Chen",
    role: "Visa Consultant",
    image: "https://via.placeholder.com/300x300",
    bio: "Specialized in student visa processing with 98% success rate"
  },
  {
    name: "Emily Davis",
    role: "Career Counselor",
    image: "https://via.placeholder.com/300x300",
    bio: "Helping students choose the right career path for 10+ years"
  },
];

export function Team() {
  return (
    <section style={{
      padding: "80px 24px",
      background: "#F7F9FC",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            color: "#0A1F44",
            marginBottom: 16,
          }}>
            Meet Our Expert Team
          </h2>
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 17,
            color: "#6B7280",
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            Our dedicated professionals are here to guide you through every step of your study abroad journey
          </p>
        </div>

        {/* Team Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 32,
        }}>
          {TEAM_MEMBERS.map((member, i) => (
            <div key={i} style={{
              background: "#fff",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              transition: "all 0.3s",
              cursor: "pointer",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(21,101,192,0.15)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
              }}>
              {/* Image */}
              <div style={{
                width: "100%",
                height: 280,
                background: `url(${member.image}) center/cover`,
                position: "relative",
              }}>
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "50%",
                  background: "linear-gradient(to top, rgba(10,31,68,0.8), transparent)",
                }} />
              </div>

              {/* Content */}
              <div style={{ padding: "24px" }}>
                <h3 style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 20,
                  fontWeight: 600,
                  color: "#0A1F44",
                  marginBottom: 6,
                }}>
                  {member.name}
                </h3>
                <p style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 14,
                  color: "#1565C0",
                  fontWeight: 600,
                  marginBottom: 12,
                }}>
                  {member.role}
                </p>
                <p style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 14,
                  color: "#6B7280",
                  lineHeight: 1.6,
                }}>
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
