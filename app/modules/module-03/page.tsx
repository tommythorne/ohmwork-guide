"use client";

import { AlertTriangle, BookOpen, Cable, CircuitBoard, ShieldCheck, Wrench, Zap, Building, Plug } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Quiz from "../../components/Quiz";
import FooterNav from "../../components/FooterNav";

// Helper Components
const HL = ({ children }: { children: React.ReactNode }) => (
  <span className="font-extrabold underline decoration-yellow-400 underline-offset-4">{children}</span>
);

const WarningBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 my-4 animate-fade-in">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-red-400 text-xl">⚠️</span>
      <span className="font-bold text-red-400">EXAM TRAP</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

const RuleBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-yellow-500/40 bg-yellow-500/10 p-4 my-4 animate-fade-in">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-yellow-400 text-xl"></span>
      <span className="font-bold text-yellow-400">RULE OF THUMB</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

const HorrorStory = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-orange-500/40 bg-orange-500/10 p-4 my-4 animate-fade-in">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-orange-400 text-xl"></span>
      <span className="font-bold text-orange-400">JOBSITE HORROR STORY</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

const CodeBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-blue-500/40 bg-blue-500/10 p-4 my-4 animate-fade-in">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-blue-400 text-xl"></span>
      <span className="font-bold text-blue-400">NEC REFERENCE</span>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

const DataTable = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6 overflow-x-auto">
    {children}
  </div>
);

const ChartBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-white/20 bg-white/[0.03] p-6 my-6">
    {children}
  </div>
);

type Article = {
  id: string;
  title: string;
  icon: JSX.Element;
  content: React.ReactNode;
  images: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
};

const articles: Article[] = [
  {
    id: "300",
    title: "Article 300 — General Requirements for Wiring Methods",
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    content: (
      <>
        <div className="space-y-4 text-gray-300">
          <p><HL>300.3</HL>: All conductors of the same circuit must be contained within the same raceway, cable, or enclosure.</p>
          <p><HL>300.4</HL>: Protection against physical damage required where wiring methods are subject to damage.</p>
          <p><HL>300.5</HL>: Minimum cover requirements for underground installations vary by location and circuit type.</p>
          <p><HL>300.11</HL>: Wiring methods shall be securely fastened in place and supported independently of other systems.</p>
          <p><HL>300.15</HL>: Boxes or conduit bodies required at all splice, tap, and termination points.</p>
        </div>
        <WarningBox>
          Common violation: Splitting circuit conductors between different raceways or cables. All circuit conductors must stay together!
        </WarningBox>
      </>
    ),
    images: [
      {
        src: "/images/module-03/m03-02.jpg",
        alt: "Proper conductor grouping in raceway",
        caption: "All circuit conductors grouped together"
      },
      {
        src: "/images/module-03/m03-03.jpg",
        alt: "Underground installation with proper depth markings",
        caption: "Underground installation requirements"
      }
    ]
  },
  {
    id: "310",
    title: "Article 310 — Conductors for General Wiring",
    icon: <Cable className="w-6 h-6 text-blue-400" />,
    content: (
      <>
        <div className="space-y-4 text-gray-300">
          <p><HL>310.10</HL>: Conductor construction and applications must be suitable for installation conditions.</p>
          <p><HL>310.15</HL>: Ampacities based on ambient temperature, number of conductors, and installation method.</p>
          <p><HL>310.104</HL>: Conductor insulation types and requirements for various applications.</p>
        </div>
        <DataTable>
          <h4 className="font-bold text-white mb-4">Common Conductor Types</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left p-3 text-yellow-400">Type</th>
                <th className="text-left p-3 text-yellow-400">Max Temp</th>
                <th className="text-left p-3 text-yellow-400">Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr><td className="p-3">THHN</td><td className="p-3">90°C</td><td className="p-3">Dry/Damp</td></tr>
              <tr><td className="p-3">XHHW</td><td className="p-3">90°C</td><td className="p-3">Dry/Wet</td></tr>
              <tr><td className="p-3">THW</td><td className="p-3">75°C</td><td className="p-3">Dry/Wet</td></tr>
            </tbody>
          </table>
        </DataTable>
        <RuleBox>
          Always consider ambient temperature and adjustment factors when determining conductor ampacity.
        </RuleBox>
      </>
    ),
    images: [
      {
        src: "/images/module-03/m03-04.jpg",
        alt: "Various conductor insulation types",
        caption: "Common conductor insulation types"
      },
      {
        src: "/images/module-03/m03-05.jpg",
        alt: "Conductor ampacity calculation example",
        caption: "Ampacity calculation factors"
      }
    ]
  },
  {
    id: "314",
    title: "Article 314 — Outlet, Device, Pull, and Junction Boxes",
    icon: <Building className="w-6 h-6 text-green-400" />,
    content: (
      <>
        <div className="space-y-4 text-gray-300">
          <p><HL>314.16</HL>: Box fill calculations required based on conductor count, clamps, and devices.</p>
          <p><HL>314.23</HL>: Boxes must be securely fastened and supported independently.</p>
          <p><HL>314.25</HL>: Covers required to protect wiring and connections.</p>
          <p><HL>314.29</HL>: Boxes must remain accessible after installation.</p>
        </div>
        <ChartBox>
          <h4 className="font-bold text-white mb-4">Box Fill Calculations</h4>
          <ul className="space-y-2 text-gray-300">
            <li>• Each conductor counts as one volume unit</li>
            <li>• Device counts as two volume units</li>
            <li>• All ground wires together count as one unit</li>
            <li>• Each internal cable clamp counts as one unit</li>
          </ul>
        </ChartBox>
        <CodeBox>
          Example: A box with four 12 AWG conductors, one device, and one clamp needs 16.5 cubic inches minimum volume.
        </CodeBox>
      </>
    ),
    images: [
      {
        src: "/images/module-03/m03-06.jpg",
        alt: "Box fill calculation diagram",
        caption: "Box fill requirements"
      },
      {
        src: "/images/module-03/m03-07.jpg",
        alt: "Proper box support and accessibility",
        caption: "Box support and access"
      }
    ]
  }  {
    id: "320",
    title: "Article 320 — Armored Cable (Type AC)",
    icon: <Cable className="w-6 h-6 text-purple-400" />,
    content: (
      <>
        <div className="space-y-4 text-gray-300">
          <p><HL>320.10</HL>: Type AC cable permitted for feeders and branch circuits in both exposed and concealed work.</p>
          <p><HL>320.12</HL>: Not permitted in damp/wet locations, where subject to physical damage, or in hazardous locations.</p>
          <p><HL>320.17</HL>: Through or parallel to framing members, must be protected where needed.</p>
          <p><HL>320.30</HL>: Secured and supported at intervals not exceeding 4.5 feet.</p>
        </div>
        <HorrorStory>
          Found AC cable installed in a wet location without proper fittings. Cable became water-damaged and created a short circuit. Always check installation environment!
        </HorrorStory>
      </>
    ),
    images: [
      {
        src: "/images/module-03/m03-08.jpg",
        alt: "Proper AC cable installation",
        caption: "Armored cable support and protection"
      },
      {
        src: "/images/module-03/m03-09.jpg",
        alt: "AC cable fittings and connections",
        caption: "Proper termination methods"
      }
    ]
  },
  {
    id: "330",
    title: "Article 330 — Metal-Clad Cable (Type MC)",
    icon: <Cable className="w-6 h-6 text-yellow-400" />,
    content: (
      <>
        <div className="space-y-4 text-gray-300">
          <p><HL>330.10</HL>: Permitted in most locations, including hazardous areas when approved.</p>
          <p><HL>330.12</HL>: Not permitted where subject to physical damage unless protected.</p>
          <p><HL>330.24</HL>: Bending radius not less than 7 times the cable diameter.</p>
          <p><HL>330.30</HL>: Secured within 12 inches of boxes and at intervals not exceeding 6 feet.</p>
        </div>
        <RuleBox>
          MC cable offers better protection than AC cable and can be used in more locations. Great for industrial applications.
        </RuleBox>
      </>
    ),
    images: [
      {
        src: "/images/module-03/m03-10.jpg",
        alt: "MC cable installation methods",
        caption: "Proper MC cable installation"
      },
      {
        src: "/images/module-03/m03-11.jpg",
        alt: "MC cable bending and support",
        caption: "Bending radius requirements"
      }
    ]
  },
  {
    id: "334",
    title: "Article 334 — Nonmetallic-Sheathed Cable (Types NM, NMC, and NMS)",
    icon: <Cable className="w-6 h-6 text-blue-400" />,
    content: (
      <>
        <div className="space-y-4 text-gray-300">
          <p><HL>334.10</HL>: Permitted in one- and two-family dwellings and other structures.</p>
          <p><HL>334.12</HL>: Not permitted in commercial or multi-family structures over three floors.</p>
          <p><HL>334.15</HL>: Must be protected from physical damage and installed properly through framing.</p>
          <p><HL>334.30</HL>: Secured every 4.5 feet and within 12 inches of each box.</p>
        </div>
        <WarningBox>
          Common exam trap: NM cable is NOT permitted in wet locations or exposed commercial applications!
        </WarningBox>
      </>
    ),
    images: [
      {
        src: "/images/module-03/m03-12.jpg",
        alt: "NM cable residential installation",
        caption: "Residential NM cable installation"
      },
      {
        src: "/images/module-03/m03-13.jpg",
        alt: "NM cable protection methods",
        caption: "Protection requirements"
      }
    ]
  },
  {
    id: "342",
    title: "Article 342 — Intermediate Metal Conduit (IMC)",
    icon: <Plug className="w-6 h-6 text-green-400" />,
    content: (
      <>
        <div className="space-y-4 text-gray-300">
          <p><HL>342.10</HL>: Permitted for all atmospheric conditions and occupancies.</p>
          <p><HL>342.14</HL>: Must be listed and labeled.</p>
          <p><HL>342.20</HL>: Size range from metric designator 16 (trade size ½) through 103 (trade size 4).</p>
          <p><HL>342.30</HL>: Secured within 3 feet of each outlet box, junction box, cabinet, or fitting.</p>
        </div>
        <CodeBox>
          IMC can be used anywhere RMC is permitted and provides excellent physical protection at a lighter weight.
        </CodeBox>
      </>
    ),
    images: [
      {
        src: "/images/module-03/m03-14.jpg",
        alt: "IMC installation examples",
        caption: "IMC installation methods"
      },
      {
        src: "/images/module-03/m03-15.jpg",
        alt: "IMC fittings and connections",
        caption: "Proper IMC connections"
      }
    ]// ...existing code...

export default function Ch3WiringMethods() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-yellow-900 to-gray-900 text-white">
      {/* Top Bar */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/intro" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
            <span>←</span>
            <span>Back to TOC</span>
          </Link>
          <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">NEC 2017</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/module-03/m03-01.jpg"
          alt="Wiring methods and materials overview"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Chapter 3 — Wiring Methods and Materials</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Master the requirements for wiring methods, raceways, cables, and boxes</p>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 mb-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="text-2xl font-bold text-white">20+</div>
            <div className="text-gray-400">Major Articles</div>
          </div>
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Cable className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-white">12+</div>
            <div className="text-gray-400">Wiring Methods</div>
          </div>
          <div className="bg-white/[0.03] border border-white/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Building className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white">15+</div>
            <div className="text-gray-400">Common Rules</div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <div className="max-w-5xl mx-auto px-4">
        {articles.map((article, index) => (
          <section 
            key={article.id}
            className={`mb-12 transition-all duration-1000 delay-${300 + index * 200} ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-white/[0.03] rounded-lg">
                    {article.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{article.title}</h2>
                </div>
                {article.content}
              </div>
              <div className="space-y-4">
                {article.images.map((image, i) => (
                  <div key={i} className="relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="rounded-xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
                      <p className="text-sm">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Quiz Section */}
      <section className={`mx-auto max-w-5xl mb-12 px-4 transition-all duration-1000 delay-900 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Knowledge Check</h2>
          <p className="text-gray-400 text-lg">Test your understanding of Chapter 3</p>
        </div>
        <Quiz questions={quiz} />
      </section>

      {/* Footer Navigation */}
      <FooterNav 
        prev={{href: "/modules/module-02", label: "Chapter 2"}}
        next={{href: "/modules/module-04", label: "Chapter 4"}}
      />
    </main>
  );