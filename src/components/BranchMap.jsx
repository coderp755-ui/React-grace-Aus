// src/sections/BranchMap.jsx
// "Our Offices Around the World" section with interactive Leaflet map + branch cards

import { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ── Fix default marker icons (Vite/Webpack asset issue) ───────────────────
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// ── Custom SVG pin marker ─────────────────────────────────────────────────
function createPin(isActive = false) {
  const bg = isActive ? "#0A1F44" : "#1565C0";
  const border = isActive ? "#64B5F6" : "#fff";
  return L.divIcon({
    className: "",
    html: `
      <div style="
        position: relative;
        width: 32px; height: 40px;
      ">
        <div style="
          width: 32px; height: 32px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          background: ${bg};
          border: 2.5px solid ${border};
          box-shadow: 0 4px 14px rgba(21,101,192,0.45);
        "></div>
        <div style="
          position: absolute;
          top: 8px; left: 8px;
          width: 12px; height: 12px;
          border-radius: 50%;
          background: ${border};
          transform: rotate(0deg);
        "></div>
      </div>`,
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    popupAnchor: [0, -44],
  });
}

// ── Fly-to helper ─────────────────────────────────────────────────────────
function FlyTo({ target }) {
  const map = useMap();
  if (target) map.flyTo([target.lat, target.lng], 12, { duration: 1.2 });
  return null;
}

// ── Branch data ───────────────────────────────────────────────────────────
const BRANCHES = [
  {
    id: 1,
    name: "Kathmandu Head Office",
    city: "Kathmandu",
    address: "Buddhanagar, Nearby Himalayan Ayurved Medical Science College",
    phone: "01-5913321/20",
    hotline: "+977 9849194949",
    email: "reception.buddhanagar@grace.edu.np",
    lat: 27.6933,
    lng: 85.3497,
    primary: true,
  },
  {
    id: 2,
    name: "Lalitpur Office",
    city: "Lalitpur",
    address: "Kumaripati, Lalitpur (3rd Floor, CG Building)",
    phone: "+977 9766385821 / +977 1-5920013/14",
    hotline: null,
    email: "kumaripati@grace.edu.np",
    lat: 27.6644,
    lng: 85.3188,
    primary: false,
  },
  {
    id: 3,
    name: "Pokhara Office",
    city: "Pokhara",
    address: "Mahendrapool, Pokhara",
    phone: "+977 9846054807 / (061) 551013 / (061) 553013",
    hotline: null,
    email: "pokhara@grace.edu.np",
    lat: 28.2096,
    lng: 83.9856,
    primary: false,
  },
  {
    id: 4,
    name: "New Baneshwor Office",
    city: "New Baneshwor",
    address: "New Baneshwor, PC Complex 2nd Floor, Kathmandu",
    phone: "+977 (01) 4796880 / +977 (01) 4796881",
    hotline: null,
    email: "baneshwor@grace.edu.np",
    lat: 27.6939,
    lng: 85.3417,
    primary: false,
  },
];

const STYLES = `
  /* ── Section layout ── */
  .branch-section {
    width: 100%;
    background: #F7F9FC;
    padding: 100px 24px;
    box-sizing: border-box;
  }

  .branch-inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  /* ── Heading block ── */
  .branch-heading {
    text-align: center;
    margin-bottom: 56px;
  }

  .branch-eyebrow {
    display: inline-block;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 11px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #1565C0;
    margin-bottom: 12px;
  }

  .branch-title {
    font-family: 'Playfair Display', serif;
    font-weight: 800;
    font-size: clamp(28px, 4vw, 46px);
    color: #0A1F44;
    margin: 0 0 14px 0;
    line-height: 1.15;
  }

  .branch-subtitle {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    color: #64748B;
    max-width: 500px;
    margin: 0 auto;
    line-height: 1.7;
  }

  /* ── Split layout ── */
  .branch-body {
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 24px;
    align-items: start;
  }

  @media (max-width: 900px) {
    .branch-body {
      grid-template-columns: 1fr;
    }
    .branch-card-list {
      display: grid !important;
      grid-template-columns: 1fr 1fr;
      gap: 12px !important;
      max-height: none !important;
    }
  }

  @media (max-width: 560px) {
    .branch-section {
      padding: 72px 16px;
    }
    .branch-card-list {
      grid-template-columns: 1fr !important;
    }
  }

  /* ── Card list ── */
  .branch-card-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-height: 480px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #BBDEFB #EBF4FF;
    padding-right: 2px;
  }

  /* ── Single card ── */
  .branch-card {
    border-radius: 14px;
    padding: 16px 18px;
    cursor: pointer;
    transition: all 0.22s ease;
    border: 1.5px solid #EBF0FB;
    background: #fff;
    box-shadow: 0 2px 10px rgba(10,31,68,0.05);
  }

  .branch-card:hover {
    border-color: #BBDEFB;
    transform: translateX(4px);
    box-shadow: 0 4px 18px rgba(21,101,192,0.10);
  }

  .branch-card.active {
    background: linear-gradient(135deg, #0A1F44, #1565C0);
    border-color: transparent;
    box-shadow: 0 8px 28px rgba(21,101,192,0.30);
    transform: translateX(0);
  }

  .branch-card-city {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 6px;
  }

  .branch-dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .branch-card-name {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 14px;
  }

  .branch-hq-badge {
    margin-left: auto;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 9px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 2px 8px;
    border-radius: 100px;
  }

  .branch-card-address {
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    line-height: 1.5;
    padding-left: 17px;
    margin: 0;
  }

  .branch-card-phone {
    font-family: 'Poppins', sans-serif;
    font-size: 11px;
    padding-left: 17px;
    margin: 5px 0 0;
  }

  /* ── Map container ── */
  .branch-map-wrap {
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid #E2ECF8;
    box-shadow: 0 8px 40px rgba(10,31,68,0.10);
    height: 480px;
    position: relative;
  }

  /* ── Leaflet popup overrides ── */
  .leaflet-popup-content-wrapper {
    border-radius: 14px !important;
    box-shadow: 0 8px 32px rgba(10,31,68,0.16) !important;
    border: 1px solid #EBF0FB !important;
    padding: 0 !important;
    overflow: hidden;
  }
  .leaflet-popup-content { margin: 0 !important; }
  .leaflet-popup-tip { background: #fff !important; }
  .leaflet-popup-close-button {
    color: #94A3B8 !important;
    padding: 8px 10px !important;
    font-size: 16px !important;
  }
  .leaflet-popup-close-button:hover { color: #1565C0 !important; background: none !important; }

  /* ── Zoom controls ── */
  .leaflet-control-zoom a {
    border-radius: 8px !important;
    border: 1px solid #E2E8F0 !important;
    color: #0A1F44 !important;
  }
  .leaflet-control-zoom a:hover {
    background: #E3F2FD !important;
    color: #1565C0 !important;
  }
  .leaflet-control-zoom-in  { border-radius: 8px 8px 0 0 !important; }
  .leaflet-control-zoom-out { border-radius: 0 0 8px 8px !important; }
`;

export function BranchMap() {
  const [activeId, setActiveId] = useState(1);
  const markerRefs = useRef({});
  const activeBranch = BRANCHES.find((b) => b.id === activeId);

  const handleCardClick = (branch) => {
    setActiveId(branch.id);
    setTimeout(() => {
      const ref = markerRefs.current[branch.id];
      if (ref) ref.openPopup();
    }, 1300);
  };

  return (
    <section className="branch-section">
      <style>{STYLES}</style>

      <div className="branch-inner">
        {/* ── Heading ──────────────────────────────────────────────────── */}
        <div className="branch-heading">
          <span className="branch-eyebrow">Our Presence</span>
          <h2 className="branch-title">Our Offices Around the World</h2>
          <p className="branch-subtitle">
            With offices across Nepal and a global network of partners, expert
            guidance is never far away. Click a branch to explore.
          </p>
        </div>

        {/* ── Body: cards + map ────────────────────────────────────────── */}
        <div className="branch-body">
          {/* ── Branch card list ─────────────────────────────────────── */}
          <div className="branch-card-list">
            {BRANCHES.map((branch) => {
              const isActive = branch.id === activeId;
              return (
                <div
                  key={branch.id}
                  className={`branch-card${isActive ? " active" : ""}`}
                  onClick={() => handleCardClick(branch)}
                >
                  <div className="branch-card-city">
                    <div
                      className="branch-dot"
                      style={{
                        background: isActive ? "#64B5F6" : "#1565C0",
                        boxShadow: isActive
                          ? "0 0 0 3px rgba(100,181,246,0.3)"
                          : "none",
                      }}
                    />
                    <span
                      className="branch-card-name"
                      style={{ color: isActive ? "#fff" : "#0A1F44" }}
                    >
                      {branch.city}
                    </span>
                    {branch.primary && (
                      <span
                        className="branch-hq-badge"
                        style={{
                          background: isActive
                            ? "rgba(255,255,255,0.15)"
                            : "#E3F2FD",
                          color: isActive ? "#90CAF9" : "#1565C0",
                        }}
                      >
                        HQ
                      </span>
                    )}
                  </div>

                  <p
                    className="branch-card-address"
                    style={{
                      color: isActive ? "rgba(255,255,255,0.62)" : "#64748B",
                    }}
                  >
                    {branch.address}
                  </p>

                  {isActive && (
                    <>
                      <p
                        className="branch-card-phone"
                        style={{ color: "#90CAF9" }}
                      >
                        📞 {branch.phone}
                      </p>
                      {branch.hotline && (
                        <p
                          className="branch-card-phone"
                          style={{ color: "#64B5F6", fontWeight: 600 }}
                        >
                          🔥 Hotline: {branch.hotline}
                        </p>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── Leaflet map ──────────────────────────────────────────── */}
          <div className="branch-map-wrap">
            <MapContainer
              center={[27.9, 84.5]}
              zoom={8}
              style={{ width: "100%", height: "100%" }}
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />

              <FlyTo target={activeBranch} />

              {BRANCHES.map((branch) => (
                <Marker
                  key={branch.id}
                  position={[branch.lat, branch.lng]}
                  icon={createPin(branch.id === activeId)}
                  ref={(r) => {
                    if (r) markerRefs.current[branch.id] = r;
                  }}
                  eventHandlers={{ click: () => setActiveId(branch.id) }}
                >
                  <Popup>
                    <div
                      style={{
                        padding: "16px 18px",
                        minWidth: 230,
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {/* Popup header */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          marginBottom: 12,
                        }}
                      >
                        <div
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: "#1565C0",
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontWeight: 700,
                            fontSize: 15,
                            color: "#0A1F44",
                          }}
                        >
                          {branch.name}
                        </span>
                        {branch.primary && (
                          <span
                            style={{
                              marginLeft: "auto",
                              background: "#E3F2FD",
                              color: "#1565C0",
                              fontWeight: 700,
                              fontSize: 9,
                              letterSpacing: "1px",
                              textTransform: "uppercase",
                              padding: "2px 8px",
                              borderRadius: 100,
                            }}
                          >
                            HQ
                          </span>
                        )}
                      </div>

                      {/* Address */}
                      <p
                        style={{
                          fontSize: 12,
                          color: "#475569",
                          margin: "0 0 6px",
                          lineHeight: 1.5,
                        }}
                      >
                        📍{" "}
                        <span style={{ color: "#334155" }}>
                          {branch.address}
                        </span>
                      </p>

                      {/* Phone */}
                      <p
                        style={{
                          fontSize: 12,
                          color: "#475569",
                          margin: "0 0 6px",
                          lineHeight: 1.5,
                        }}
                      >
                        📞{" "}
                        <span style={{ color: "#334155" }}>{branch.phone}</span>
                      </p>

                      {/* Hotline — only for head office */}
                      {branch.hotline && (
                        <p
                          style={{
                            fontSize: 12,
                            color: "#475569",
                            margin: "0 0 6px",
                            lineHeight: 1.5,
                          }}
                        >
                          🔥{" "}
                          <span style={{ color: "#334155", fontWeight: 600 }}>
                            Hotline: {branch.hotline}
                          </span>
                        </p>
                      )}

                      {/* Email */}
                      <p
                        style={{
                          fontSize: 12,
                          color: "#475569",
                          margin: "0 0 14px",
                          lineHeight: 1.5,
                        }}
                      >
                        ✉️{" "}
                        <a
                          href={`mailto:${branch.email}`}
                          style={{ color: "#1565C0", textDecoration: "none" }}
                        >
                          {branch.email}
                        </a>
                      </p>

                      {/* CTA */}
                      <a
                        href={`mailto:${branch.email}`}
                        style={{
                          display: "block",
                          background:
                            "linear-gradient(135deg, #1565C0, #42A5F5)",
                          color: "#fff",
                          textDecoration: "none",
                          padding: "9px 14px",
                          borderRadius: 8,
                          fontWeight: 600,
                          fontSize: 12,
                          textAlign: "center",
                        }}
                      >
                        Book Consultation →
                      </a>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>

            {/* Hint pill */}
            <div
              style={{
                position: "absolute",
                bottom: 14,
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(10,31,68,0.72)",
                color: "#fff",
                fontSize: 11,
                fontFamily: "'Poppins', sans-serif",
                padding: "5px 14px",
                borderRadius: 100,
                backdropFilter: "blur(8px)",
                zIndex: 500,
                pointerEvents: "none",
                whiteSpace: "nowrap",
              }}
            >
              Click a card or pin to explore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
