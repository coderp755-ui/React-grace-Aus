import { FadeIn } from "./FadeIn";
import Trobe from "../assets/La Trobe University.webp"
import Tas from "../assets/University of Tasmania.svg"
import Charles from "../assets/Charles Sturt University.svg"
import Torrens from "../assets/Torrens University.webp"
import Southern from "../assets/Southern Cross University (1).webp"
import Murdoch from "../assets/Murdoch University.webp"
import Sunshine from "../assets/University of the Sunshine Coast.webp"
import CQUN from "../assets/CQUniversity.svg"
import ECU from "../assets/Edith Cowan University.webp"
import JCU from "../assets/James Cook University.webp"
import USQ from "../assets/University of Southern Queensland.svg"
import VU from "../assets/Victoria University.svg"
import UN from "../assets/University of Newcastle.webp"
import UW from "../assets/University of Wollongong.webp"
import EUC from "../assets/Excelsia College.webp"
import ACAP from "../assets/ACAP University College.webp"
import SAE from "../assets/SAE University College.webp"
import THS from "../assets/The Hotel School.svg"
import BMIHMS from "../assets/Blue Mountains International Hotel Management School.svg"
import MP from "../assets/Melbourne Polytechnic.webp"
import HI from  "../assets/Holmes Institute.webp"
import CI from "../assets/Chisholm Institute.avif"
import BHI from "../assets/Box Hill Institute.webp"
import MIT from "../assets/Melbourne Institute of Technology.webp"
import KBS from "../assets/Kaplan Business School.svg"
import APIC from "../assets/APIC.webp"
import VIT from "../assets/VIT.webp"
import ICHM from "../assets/ICHM.webp"
import SC from "../assets/Stotts College.avif"
import NV from "../assets/Navitas University.svg"
import HOI from  "../assets/Holmes Institute.webp"
import ECA from "../assets/ECA.webp"
import AIH from "../assets/AIH.svg"
import EIT from "../assets/EIT.webp"
import KOI from "../assets/KOI.webp"
import SCEL from "../assets/Southern Cross University (1).webp"
import CHE from "../assets/CIC.webp"
import KI from "../assets/Kent Institute.webp"
import WI from "../assets/Wentworth Institute.webp"
import IIBIT from "../assets/IIBIT.webp"
import TEI from "../assets/Top Education Institute.webp"
import EI from "../assets/Equal International.webp"
import CIM from "../assets/Canterbury Institute.webp"
import TN from "../assets/TAFE NSW.webp"
import IIA from "../assets/IKON Institute.svg"
import IHM from "../assets/IHM.svg"
import GHE from "../assets/Global Higher Education.webp"
import CIBT from "../assets/Crown Institute of Business and Technology.gif"
import ICMS from "../assets/ICMS.webp"


const universities = [
  {
    id: 1,
    name: "La Trobe University",
    code: "(CRICOS 00115M)",
    logo: Trobe ,
  },
  {
    id: 2,
    name: "University of Tasmania",
    code: "(CRICOS 00586B)",
    logo: Tas,
  },
  {
    id: 3,
    name: "Charles Sturt University",
    code: "(CRICOS 00005F)",
    logo: Charles, 
   },
  {
    id: 4,
    name: "Torrens University",
    code: "(CRICOS 03389E)",
    logo: Torrens,
  },
  {
    id: 5,
    name: "Southern Cross University",
    code: "(CRICOS 01241G)",
    logo: Southern,
  },
  {
    id: 6,
    name: "Murdoch University",
    code: "(CRICOS 00125J)",
    logo: Murdoch,
  },
  {
    id: 7,
    name: "University of the Sunshine Coast",
    code: "(CRICOS 01595D)",
    logo: Sunshine,
  },
  {
    id: 8,
    name: "CQUniversity",
    code: "(CRICOS 00219C)",
    logo: CQUN,
  },
  {
    id: 9,
    name: "Edith Cowan University (ECU)",
    code: "(CRICOS 00279B)",
    logo: ECU,
  },
  {
    id: 10,
    name: "James Cook University",
    code: "(CRICOS 00117J)",
    logo: JCU,
  },
  {
    id: 11,
    name: "University of Southern Queensland",
    code: "(CRICOS 00244B)",
    logo: USQ,
  },
  {
    id: 12,
    name: "Victoria University",
    code: "(CRICOS 00124K)",
    logo: VU,
  },
  {
    id: 13,
    name: "University of Newcastle",
    code: "(CRICOS 00109J)",
    logo: UN,
  },
  {
    id: 14,
    name: "University of Wollongong",
    code: "(CRICOS 00102E)",
    logo: UW,
  },
  {
    id: 15,
    name: "Excelsia University College",
    code: "(CRICOS 02664K)",
    logo: EUC,
  },
  {
    id: 16,
    name: "ACAP University College",
    code: "(CRICOS 01328A)",
    logo: ACAP,
  },
  {
    id: 17,
    name: "SAE University College",
    code: "(CRICOS 00312F)",
    logo: SAE,
  },
  {
    id: 18,
    name: "The Hotel School",
    code: "(CRICOS 01241G)",
    logo: THS,
  },
  {
    id: 19,
    name: "Blue Mountains International Hotel Management School",
    code: "(CRICOS 00911E)",
    logo: BMIHMS,
  },
  {
    id: 20,
    name: "Melbourne Polytechnic",
    code: "(CRICOS 00724G)",
    logo: MP,
  },
  {
    id: 21,
    name: "Holmesglen Institute",
    code: "(CRICOS 00012G)",
    logo: HI,
  },
  {
    id: 22,
    name: "Chilsholm Institute",
    code: "(CRICOS 00881F)",
    logo: CI,
  },
  {
    id: 23,
    name: "Box Hill Institute",
    code: "(CRICOS 02411J)",
    logo: BHI,
  },
  
  {
    id: 25,
    name: "Melbourne Institute of Technology",
    code: "(CRICOS 01545C)",
    logo: MIT,
  },
 
  {
    id: 27,
    name: "Kaplan Business School",
    code: "(CRICOS 02426B)",
    logo: KBS,
  },
  {
    id: 28,
    name: "Asia Pacific International College (APIC)",
    code: "(CRICOS 03048D)",
    logo: APIC,
  },
  {
    id: 29,
    name: "Victorian Institute of Technology (VIT)",
    code: "(CRICOS 02044E)",
    logo: VIT,
  },
  {
    id: 30,
    name: " International College of Hotel Management (ICHM)",
    code: "(CRICOS 02914G)",
    logo: ICHM,
  },
  {
    id: 31,
    name: "Stott's College",
    code: "(CRICOS 01439E)",
    logo: SC,
  },
  {
    id: 32,
    name: "Navitas University",
    code: "(CRICOS 00231G)",
    logo: NV,
  },
  {
    id: 33,
    name: "Holmes Institute",
    code: "(CRICOS 02767C)",
    logo: HOI,
  },
  {
    id: 34,
    name: "Education Centre of Australia (ECA)",
    code: "(CRICOS 02997M)",
    logo: ECA,
  },
  {
    id: 35,
    name: "Australian Institute of Higher Education (AIH)",
    code: "(CRICOS 03147A)",
    logo: AIH,
  },
  {
    id: 36,
    name: "Engineering Institute of Technology (EIT)",
    code: "(CRICOS 03567C)",
    logo: EIT,
  },
  {
    id: 37,
    name: "King's Own Institute (KOI)",
    code: "(CRICOS 03171A)",
    logo: KOI,
  },
  {
    id: 38,
    name: "Southern Cross Education Institute (SCEI)",
    code: "(CRICOS 02934D)",
    logo: SCEL,
  },
  {
    id: 39,
    name: "CIC Higher Education",
    code: "(CRICOS 01718J)",
    logo: CHE,
  },
  {
    id: 40,
    name: "Kent Institute",
    code: "(CRICOS 00161E)",
    logo: KI,
  },
  {
    id: 41,
    name: "Wentworth Institute",
    code: "(CRICOS 03246B)",
    logo: WI,
  },
  {
    id: 42,
    name: "IIBIT",
    code: "(CRICOS 01917B)",
    logo: IIBIT,
  },
  {
    id: 43,
    name: "Top Education Institute",
    code: "(CRICOS 02491D)",
    logo: TEI,
  },
   {
    id: 44,
    name: "Equal International",
    code: "(CRICOS 02491D)",
    logo: EI,
  },
  {
    id: 45,
    name: "Canterbury Institute of Management",
    code: "(CRICOS 03809A)",
    logo: CIM,
  },
  {
    id: 46,
    name: "TAFE NSW",
    code: "(CRICOS 00591E)",
    logo: TN,
  },
  {
    id: 47,
    name: "IKON Institute of Australia",
    code: "(CRICOS 03581E)",
    logo: IIA,
  },
  {
    id: 47,
    name: "IKON Institute of Australia",
    code: "(CRICOS 03581E)",
    logo: IIA,
  },
   {
    id: 47,
    name: "Institute of Health & Management (IHM)",
    code: "(CRICOS 03407G)",
    logo: IHM,
  },
  {
    id: 48,
    name: "Global Higher Education",
    code: "(CRICOS 03386G)",
    logo: GHE,
  },
   {
    id: 49,
    name: "Crown Institute of Business and Technology",
    code: "(CRICOS 02971G)",
    logo: CIBT,
  },
  {
    id: 50,
    name: "International College of Management Sydney (ICMS)",
    code: "(CRICOS 01484M)",
    logo: ICMS,
  },
];


export function Universities() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#F8FAFC] to-[#EFF6FF]">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="text-center mb-[70px]">
            <div className="inline-block py-2 px-5 rounded-[30px] mb-5">
              <span className="text-[#0025faff] text-[13px] font-bold tracking-[1px] uppercase">
                Our Partners
              </span>
            </div>
            <h1 className="text-[50px] font-extrabold text-heading mb-5 font-poppins">
              Educational Partners
            </h1>
            <p className="text-[19px] text-body max-w-[650px] mx-auto leading-[1.7]">
              Partner with world-leading universities and unlock your global
              education journey
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-7 w-full">
          {universities.map((uni) => (
            <div
              key={uni.id}
              className="bg-white rounded-3xl py-9 px-8 text-center shadow-[0_10px_40px_rgba(10,25,60,0.08)] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] cursor-pointer flex flex-col items-center justify-between min-h-[360px] border border-[rgba(226,232,240,0.8)] relative overflow-visible hover:shadow-[0_20px_60px_rgba(21,101,192,0.18)] hover:-translate-y-3 hover:border-[rgba(21,101,192,0.2)]"
            >
              {/* Top decorative line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-1 bg-gradient-to-r from-brand to-[#22C55E] rounded-b" />

              {/* Logo container */}
              <div className="w-full h-[100px] flex items-center justify-center mb-7 mt-2">
                <div className="w-[160px] h-[100px] flex items-center justify-center bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] rounded-2xl p-5 transition-all duration-300 ease-in-out hover:scale-[1.08] hover:bg-gradient-to-br hover:from-[#EFF6FF] hover:to-[#DBEAFE]">
                  <img
                    src={uni.logo}
                    alt={uni.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              {/* University name */}
              <div className="mb-8 flex-1 w-full">
                <h3 className="text-[22px] font-bold text-heading mb-3 leading-[1.3] font-poppins">
                  {uni.name}
                </h3>
                <div className="inline-flex items-center bg-[#EFF6FF] py-2 px-4 rounded-3xl border border-[#BFDBFE]">
                  <span className="text-[13px] text-brand font-semibold tracking-[0.3px]">
                    {uni.code}
                  </span>
                </div>
              </div>

              {/* Button */}
              <button className="bg-gradient-to-br from-[#22C55E] to-[#16A34A] text-white border-none py-4 px-9 rounded-xl text-[15px] font-bold cursor-pointer transition-all duration-300 ease-in-out w-full shadow-[0_8px_24px_rgba(34,197,94,0.25)] tracking-[0.3px] font-poppins hover:bg-gradient-to-br hover:from-[#16A34A] hover:to-[#15803D] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(34,197,94,0.35)]">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
