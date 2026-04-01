import { Contact } from "../components/Contact";
import OurBranch from "../components/OurBranch";

export default function ContactPage() {
  return (
    <>
      <div
        style={{
          height: "80px",
          background: "linear-gradient(135deg, #0A1F44 0%, #1565C0 100%)",
        }}
      />
      <Contact />
      <OurBranch />
    </>
  );
}
