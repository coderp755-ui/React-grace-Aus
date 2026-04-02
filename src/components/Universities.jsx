import { FadeIn } from "./FadeIn";

const universities = [
  {
    id: 1,
    name: "La Trobe University",
    code: "(CRICOS 00115M)",
    logo: "",
  },
  {
    id: 2,
    name: "University of Tasmania",
    code: "(CRICOS 00586B)",
    logo: "",
  },
  {
    id: 3,
    name: "Charles Sturt University",
    code: "(CRICOS 00005F)",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Crect fill='%232ECC71' width='200' height='100'/%3E%3Ctext x='50%25' y='50%25' font-size='18' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3ECSU%3C/text%3E%3C/svg%3E",
  },
  {
    id: 4,
    name: "Torrens University",
    code: "(CRICOS 03389E)",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Crect fill='%23F39C12' width='200' height='100'/%3E%3Ctext x='50%25' y='50%25' font-size='18' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3ETorrens%3C/text%3E%3C/svg%3E",
  },
  {
    id: 5,
    name: "RMIT University",
    code: "(CRICOS 00122F)",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Crect fill='%239B59B6' width='200' height='100'/%3E%3Ctext x='50%25' y='50%25' font-size='24' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3ERMIT%3C/text%3E%3C/svg%3E",
  },
  {
    id: 6,
    name: "Macquarie University",
    code: "(CRICOS 00002J)",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Crect fill='%231ABC9C' width='200' height='100'/%3E%3Ctext x='50%25' y='50%25' font-size='18' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3EMacquarie%3C/text%3E%3C/svg%3E",
  },
];

export function Universities() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #F7F9FC 0%, #E3F2FD 50%, #BBDEFB 100%)',
      padding: 'clamp(60px, 8vw, 100px) clamp(16px, 4vw, 24px)',
      width: '100%'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        width: '100%'
      }}>
        <FadeIn>
          <div style={{ 
            textAlign: 'center', 
            marginBottom: 'clamp(40px, 6vw, 70px)' 
          }}>
            <div style={{
              display: 'inline-block',
              padding: '8px 20px',
              borderRadius: '30px',
              marginBottom: '20px',
              background: 'rgba(21, 101, 192, 0.1)',
              border: '1px solid rgba(21, 101, 192, 0.2)'
            }}>
              <span style={{
                color: '#1565C0',
                fontSize: '13px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontFamily: 'Poppins, sans-serif'
              }}>
                Our Partners
              </span>
            </div>
            <h1 style={{
              fontSize: 'clamp(32px, 4vw, 50px)',
              fontWeight: '800',
              color: '#0A1F44',
              marginBottom: '20px',
              fontFamily: 'Poppins, sans-serif',
              lineHeight: '1.2'
            }}>
              Educational Partners
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 2vw, 19px)',
              color: '#64748B',
              maxWidth: '650px',
              margin: '0 auto',
              lineHeight: '1.7',
              fontFamily: 'Poppins, sans-serif'
            }}>
              Partner with world-leading universities and unlock your global
              education journey
            </p>
          </div>
        </FadeIn>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(20px, 3vw, 28px)',
          width: '100%'
        }}>
          {universities.map((uni, idx) => (
            <div
              key={uni.id}
              style={{
                background: 'white',
                borderRadius: '24px',
                padding: '36px 32px',
                textAlign: 'center',
                boxShadow: '0 10px 40px rgba(10, 31, 68, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                minHeight: '360px',
                border: '1px solid rgba(226, 232, 240, 0.8)',
                position: 'relative',
                overflow: 'visible'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(21, 101, 192, 0.18)';
                e.currentTarget.style.transform = 'translateY(-12px)';
                e.currentTarget.style.borderColor = 'rgba(21, 101, 192, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(10, 31, 68, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.8)';
              }}
            >
              {/* Top decorative line */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                background: 'linear-gradient(90deg, #1565C0 0%, #42A5F5 100%)',
                borderRadius: '0 0 4px 4px'
              }} />

              {/* Logo container */}
              <div style={{
                width: '100%',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '28px',
                marginTop: '8px'
              }}>
                <div 
                  style={{
                    width: '160px',
                    height: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)',
                    borderRadius: '16px',
                    padding: '20px',
                    transition: 'all 0.3s ease-in-out'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.08)';
                    e.target.style.background = 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.background = 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)';
                  }}
                >
                  <img
                    src={uni.logo}
                    alt={uni.name}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </div>

              {/* University name */}
              <div style={{
                marginBottom: '32px',
                flex: '1',
                width: '100%'
              }}>
                <h3 style={{
                  fontSize: 'clamp(18px, 2.5vw, 22px)',
                  fontWeight: 'bold',
                  color: '#0A1F44',
                  marginBottom: '12px',
                  lineHeight: '1.3',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  {uni.name}
                </h3>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: '#EFF6FF',
                  padding: '8px 16px',
                  borderRadius: '24px',
                  border: '1px solid #BFDBFE'
                }}>
                  <span style={{
                    fontSize: '13px',
                    color: '#1565C0',
                    fontWeight: '600',
                    letterSpacing: '0.3px',
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    {uni.code}
                  </span>
                </div>
              </div>

              {/* Button */}
              <button 
                style={{
                  background: 'linear-gradient(135deg, #1565C0 0%, #42A5F5 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '16px 36px',
                  borderRadius: '12px',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  width: '100%',
                  boxShadow: '0 8px 24px rgba(21, 101, 192, 0.25)',
                  letterSpacing: '0.3px',
                  fontFamily: 'Poppins, sans-serif'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #0D47A1 0%, #1976D2 100%)';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 12px 32px rgba(21, 101, 192, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #1565C0 0%, #42A5F5 100%)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 24px rgba(21, 101, 192, 0.25)';
                }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
