"use client";
import { AlertTriangle, Zap, Shield, Plug, Cable, Building, CloudLightning, Flame, Target, Waypoints, GitBranch, Ruler, BookOpen, Brain } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Quiz from "../../components/Quiz";
import FooterNav from "../../components/FooterNav";
// Quiz type definition
type Q = {
id: number;
stem: string;
choices: { key: "A" | "B" | "C" | "D"; text: string }[];
answer: "A" | "B" | "C" | "D";
why: string;
};
// Enhanced highlight helpers with electrician grit
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
<Ruler className="w-5 h-5 text-yellow-400" aria-hidden="true" />
<span className="font-bold text-yellow-400">RULE OF THUMB</span>
</div>
<div className="text-white/90">{children}</div>
</div>
);
const HorrorStory = ({ children }: { children: React.ReactNode }) => (
<div className="rounded-xl border border-orange-500/40 bg-orange-500/10 p-4 my-4 animate-fade-in">
<div className="flex items-center gap-2 mb-2">
<Flame className="w-5 h-5 text-orange-400" aria-hidden="true" />
<span className="font-bold text-orange-400">JOBSITE HORROR STORY</span>
</div>
<div className="text-white/90">{children}</div>
</div>
);
const CodeBox = ({ children }: { children: React.ReactNode }) => (
<div className="rounded-xl border border-blue-500/40 bg-blue-500/10 p-4 my-4 animate-fade-in">
<div className="flex items-center gap-2 mb-2">
<BookOpen className="w-5 h-5 text-blue-400" aria-hidden="true" />
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
export default function Ch2Page() {
const [isVisible, setIsVisible] = useState(false);
useEffect(() => {
setIsVisible(true);
}, []);
return (
<main className="min-h-screen bg-black text-white">
{/* Top Bar /}
<div className="bg-white/[0.02] border-b border-white/10">
<div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
<Link href="/intro" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
← Back to TOC
</Link>
<span className="text-sm text-yellow-400 font-semibold bg-yellow-400/10 px-3 py-1 rounded-full">
NEC 2017
</span>
</div>
</div>
{/* Hero Section /}
<section className="relative h-96 flex items-center justify-center overflow-hidden">
<Image
src="/images/module-02/m02-01.jpg"
alt="Electrical wiring and protection systems showing circuit breakers, panels, and safety equipment"
fill
className="object-cover"
priority
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
<div className="relative z-10 text-center">
<h1 className="text-5xl font-bold text-white mb-4">Chapter 2 — Wiring and Protection</h1>
<p className="text-xl text-white/90 max-w-2xl mx-auto">
Master the fundamentals of electrical wiring methods, circuit protection, and grounding systems that form the backbone of every electrical installation.
</p>
</div>
</section>
{/* Stats Bar /}
<section className="bg-white/[0.02] border-b border-white/10">
<div className="mx-auto max-w-5xl px-6 py-8">
<div className="grid grid-cols-3 gap-8 text-center">
<div>
<div className="text-3xl font-bold text-yellow-400 mb-2">8</div>
<div className="text-white/70">Major Articles</div>
</div>
<div>
<div className="text-3xl font-bold text-blue-400 mb-2">15</div>
<div className="text-white/70">Quiz Questions</div>
</div>
<div>
<div className="text-3xl font-bold text-green-400 mb-2">27</div>
<div className="text-white/70">Visual Examples</div>
</div>
</div>
</div>
</section>
{/* Visual Divider /}
<div className={mx-auto max-w-5xl my-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}}>
<div className="flex items-center gap-4">
<div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
<div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
</div>
</div>
{/* Article 200 — Use & Identification of Grounded Conductors /}
<section className={mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}}>
<div className="grid lg:grid-cols-2 gap-8 items-start">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-yellow-400/20 rounded-lg">
<Shield className="w-6 h-6 text-yellow-400" />
</div>
<h2 className="text-2xl font-bold text-white">Article 200 — Use & Identification of Grounded Conductors</h2>
</div>
<div className="space-y-4 text-gray-300">
<p><HL>200.6</HL>: Grounded conductors must be identified by continuous white or gray insulation, or by three continuous white stripes on other than green insulation.</p>
<ul className="space-y-2 ml-4">
<li>• <HL>200.2</HL>: Grounded conductors must be used for the return path of the circuit</li>
<li>• <HL>200.7</HL>: White or gray insulation cannot be used for ungrounded conductors</li>
<li>• <HL>200.9</HL>: Polarity must be maintained throughout the system</li>
<li>• <HL>200.10</HL>: Identification must be maintained at all termination points</li>
<li>• <HL>200.11</HL>: Reidentification required when using white/gray for other purposes</li>
</ul>
</div>
<CodeBox>
<strong>NEC 2017 References:</strong> 200.2, 200.6, 200.7, 200.9, 200.10, 200.11
</CodeBox>
</div>
<div className="space-y-4">
<div className="relative">
<Image
src="/images/module-02/m02-02.jpg"
alt="Properly identified grounded conductors with white insulation and correct termination methods"
width={400}
height={300}
className="rounded-xl"
/>
<div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
<p className="text-sm">White insulation identifies grounded conductors</p>
</div>
</div>
<div className="relative">
<Image
src="/images/module-02/m02-03.jpg"
alt="Grounded conductor identification at panel terminations showing proper white insulation"
width={400}
height={300}
className="rounded-xl"
/>
<div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
<p className="text-sm">Maintain identification at all terminations</p>
</div>
</div>
</div>
</div>
</section>
// ========= Module 2 — Chapter 2 — page.tsx — PART 2/3 =========
{/* Article 210 — Branch Circuits /}
<section className={mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}}>
<div className="grid lg:grid-cols-2 gap-8 items-start">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-blue-400/20 rounded-lg">
<CircuitBoard className="w-6 h-6 text-blue-400" />
</div>
<h2 className="text-2xl font-bold text-white">Article 210 — Branch Circuits</h2>
</div>
<div className="space-y-4 text-gray-300">
<p><HL>210.8(A)</HL>: GFCI protection required for all 125V, 15A and 20A receptacles in bathrooms, garages, outdoors, crawl spaces, unfinished basements, and within 6 feet of sinks.</p>
<ul className="space-y-2 ml-4">
<li>• <HL>210.12(A)</HL>: AFCI protection required for all 120V branch circuits supplying outlets in dwelling unit family rooms, dining rooms, living rooms, parlors, libraries, dens, bedrooms, sunrooms, recreation rooms, closets, and hallways</li>
<li>• <HL>210.11(C)</HL>: Required circuits: 2 small appliance circuits (20A), 1 laundry circuit (20A), 1 bathroom circuit (20A)</li>
<li>• <HL>210.52(A)</HL>: Receptacles required so no point along wall is more than 6 feet from a receptacle</li>
<li>• <HL>210.52(B)</HL>: Spacing: maximum 12 feet between receptacles along wall</li>
<li>• <HL>210.4</HL>: Multiwire branch circuits require handle ties or common trip breakers</li>
</ul>
</div>
<WarningBox>
<strong>EXAM TRAP:</strong> The exam loves to test GFCI vs AFCI requirements. Remember: <strong>GFCI protects people</strong> (wet locations, outdoors), <strong>AFCI protects property</strong> (arc faults in wiring). Don't confuse the two!
</WarningBox>
</div>
<div className="space-y-4">
<div className="relative">
<Image
src="/images/module-02/m02-04.jpg"
alt="GFCI receptacle installation in bathroom showing proper protection for wet location"
width={400}
height={300}
className="rounded-xl"
/>
<div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
<p className="text-sm">GFCI protection required in bathrooms</p>
</div>
</div>
<div className="relative">
<Image
src="/images/module-02/m02-05.jpg"
alt="AFCI circuit breaker installation showing arc fault protection for bedroom circuits"
width={400}
height={300}
className="rounded-xl"
/>
<div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
<p className="text-sm">AFCI protection for bedroom circuits</p>
</div>
</div>
<div className="relative">
<Image
src="/images/module-02/m02-06.jpg"
alt="Small appliance circuit layout showing 20A circuits for kitchen and laundry areas"
width={400}
height={300}
className="rounded-xl"
/>
<div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
<p className="text-sm">Required 20A small appliance circuits</p>
</div>
</div>
</div>
</div>
</section>
{/* Visual Divider /}
<div className={mx-auto max-w-5xl my-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}}>
<div className="flex items-center gap-4">
<div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
<div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
</div>
</div>
{/* Article 215 — Feeders /}
<section className={mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}}>
<div className="grid lg:grid-cols-2 gap-8 items-start">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-green-400/20 rounded-lg">
<Cable className="w-6 h-6 text-green-400" />
</div>
<h2 className="text-2xl font-bold text-white">Article 215 — Feeders</h2>
</div>
<div className="space-y-4 text-gray-300">
<p><HL>215.2</HL>: Feeder conductors must have an ampacity not less than required to supply the load as calculated in accordance with Article 220.</p>
<ul className="space-y-2 ml-4">
<li>• <HL>215.3</HL>: Overcurrent protection must not exceed the conductor ampacity after applying correction factors</li>
<li>• <HL>215.5</HL>: Feeders must have a disconnecting means that can be operated from a readily accessible location</li>
<li>• <HL>215.9</HL>: Grounded conductors must be sized to carry the unbalanced load</li>
<li>• <HL>215.10</HL>: Equipment grounding conductors must be sized per Table 250.122</li>
<li>• <HL>215.12</HL>: Identification must be maintained throughout the feeder run</li>
</ul>
</div>
<RuleBox>
<strong>RULE OF THUMB:</strong> When sizing feeders, always start with the calculated load from Article 220, then apply correction factors for temperature and number of conductors. The feeder must be able to carry the load plus any future expansion.
</RuleBox>
</div>
<div className="space-y-4">
<div className="relative">
<Image
src="/images/module-02/m02-07.jpg"
alt="Feeder panel installation showing proper conductor sizing and overcurrent protection"
width={400}
height={300}
className="rounded-xl"
/>
<div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
<p className="text-sm">Proper feeder conductor sizing</p>
</div>
</div>
<div className="relative">
<Image
src="/images/module-02/m02-08.jpg"
alt="Feeder disconnect means showing accessible location and proper overcurrent protection"
width={400}
height={300}
className="rounded-xl"
/>
<div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
<p className="text-sm">Accessible feeder disconnect required</p>
</div>
</div>
</div>
</div>
</section>
{/* Article 220 — Branch-Circuit, Feeder & Service Calculations /}
<section className={mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}}>
<div className="grid lg:grid-cols-2 gap-8 items-start">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-purple-400/20 rounded-lg">
<Calculator className="w-6 h-6 text-purple-400" />
</div>
<h2 className="text-2xl font-bold text-white">Article 220 — Branch-Circuit, Feeder & Service Calculations</h2>
</div>
<div className="space-y-4 text-gray-300">
<p><HL>220.42</HL>: General lighting load: 3 VA per square foot for dwelling units, 3.5 VA per square foot for other occupancies.</p>
<ul className="space-y-2 ml-4">
<li>• <HL>220.55</HL>: Electric ranges: 8 kW for 1 range, 6 kW for 2 ranges, 5 kW for 3+ ranges</li>
<li>• <HL>220.52(A)</HL>: Small appliance circuits: 1500 VA per circuit</li>
<li>• <HL>220.52(B)</HL>: Laundry circuit: 1500 VA minimum</li>
<li>• <HL>220.53</HL>: Heating and air conditioning: 100% of nameplate rating</li>
<li>• <HL>220.60</HL>: Fixed appliances: nameplate rating</li>
</ul>
</div>
<ChartBox>
<h4 className="font-bold text-white mb-4 text-center">Sample Load Calculation</h4>
<div className="space-y-2 text-sm">
<div className="flex justify-between">
<span>General Lighting (1500 sq ft × 3 VA):</span>
<span className="text-yellow-400">4,500 VA</span>
</div>
<div className="flex justify-between">
<span>Small Appliance (2 circuits × 1500 VA):</span>
<span className="text-yellow-400">3,000 VA</span>
</div>
<div className="flex justify-between">
<span>Laundry Circuit:</span>
<span className="text-yellow-400">1,500 VA</span>
</div>
<div className="flex justify-between">
<span>Range (8 kW):</span>
<span className="text-yellow-400">8,000 VA</span>
</div>
<div className="border-t border-white/20 pt-2">
<div className="flex justify-between font-bold">
<span>Total:</span>
<span className="text-green-400">17,000 VA</span>
</div>
</div>
</div>
</ChartBox>
</div>
<div className="space-y-4">
<div className="relative">
<Image
src="/images/module-02/m02-09.jpg"
alt="Load calculation worksheet showing general lighting and appliance calculations"
width={400}
height={300}
className="rounded-xl"
/>
<div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
<p className="text-sm">Load calculation worksheet</p>
</div>
</div>
<div className="relative">
<Image
src="/images/module-02/m02-10.jpg"
alt="Electric range installation showing proper circuit sizing and load calculations"
width={400}
height={300}
className="rounded-xl"
/>
<div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
<p className="text-sm">Range circuit: 8 kW minimum</p>
</div>
</div>
<div className="relative">
<Image
src="/images/module-02/m02-11.jpg"
alt="Service panel showing calculated loads and proper conductor sizing"
width={400}
height={300}
className="rounded-xl"
/>
<div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
<p className="text-sm">Service sized for calculated load</p>
</div>
</div>
</div>
</div>
</section>
{/* Article 225 — Outside Branch Circuits & Feeders /}
<section className={mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}}>
<div className="grid lg:grid-cols-2 gap-8 items-start">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-orange-400/20 rounded-lg">
<CloudLightning className="w-6 h-6 text-orange-400" />
</div>
<h2 className="text-2xl font-bold text-white">Article 225 — Outside Branch Circuits & Feeders</h2>
</div>
<div className="space-y-4 text-gray-300">
<p><HL>225.18</HL>: Clearances from buildings: 10 feet for 0-150V, 12 feet for 151-600V, 15 feet for 601-7500V.</p>
<ul className="space-y-2 ml-4">
<li>• <HL>225.19</HL>: Clearances from roofs: 8 feet for 0-300V, 10 feet for 301-600V, 12 feet for 601-7500V</li>
<li>• <HL>225.31</HL>: Disconnecting means required at each building or structure</li>
<li>• <HL>225.32</HL>: Disconnect location: nearest point of entrance of conductors</li>
<li>• <HL>225.35</HL>: Disconnect must be suitable for use as service equipment</li>
<li>• <HL>225.36</HL>: Disconnect must be readily accessible</li>
</ul>
</div>
<DataTable>
<h4 className="font-bold text-white mb-4">Clearance Requirements</h4>
<div className="overflow-x-auto">
<table className="w-full text-sm">
<thead>
<tr className="border-b border-white/20">
<th className="text-left p-3 text-yellow-400 font-bold">Voltage</th>
<th className="text-left p-3 text-yellow-400 font-bold">From Buildings</th>
<th className="text-left p-3 text-yellow-400 font-bold">From Roofs</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10">
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="p-3 font-semibold">0-150V</td>
<td className="p-3">10 feet</td>
<td className="p-3">8 feet</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="p-3 font-semibold">151-600V</td>
<td className="p-3">12 feet</td>
<td className="p-3">10 feet</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="p-3 font-semibold">601-7500V</td>
<td className="p-3">15 feet</td>
<td className="p-3">12 feet</td>
</tr>
</tbody>
</table>
</div>
</DataTable>
</div>
<div className="space-y-4">
<div className="relative">
<Image
src="/images/module-02/m02-12.jpg"
alt="Overhead service conductors showing proper clearance from building and roof"
width={400}
height={300}
className="rounded-xl"
/>
<div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
<p className="text-sm">Proper clearance from buildings</p>
</div>
</div>
<div className="relative">
<Image
src="/images/module-02/m02-13.jpg"
alt="Outside disconnect means showing accessible location and proper installation"
width={400}
height={300}
className="rounded-xl"
/>
<div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
<p className="text-sm">Accessible outside disconnect</p>
</div>
</div>
</div>
</div>
</section>
// ========= Module 2 — Chapter 2 — page.tsx — PART 3/3 =========
{/* Article 230 — Services /}
<section className={mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}}>
<div className="grid lg:grid-cols-2 gap-8 items-start">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-red-400/20 rounded-lg">
<Zap className="w-6 h-6 text-red-400" />
</div>
<h2 className="text-2xl font-bold text-white">Article 230 — Services</h2>
</div>
<div className="space-y-4 text-gray-300">
<p><HL>230.70</HL>: Service disconnect must be located either outside at a readily accessible location or inside nearest the point of entrance.</p>
<ul className="space-y-2 ml-4">
<li>• <HL>230.71</HL>: Up to six service disconnects permitted in a single enclosure or group of enclosures</li>
<li>• <HL>230.72</HL>: Service disconnect must be suitable for use as service equipment</li>
<li>• <HL>230.74</HL>: Service disconnect must be capable of being operated by a person</li>
<li>• <HL>230.75</HL>: Service disconnect must be marked to indicate it is a service disconnect</li>
<li>• <HL>230.76</HL>: Service disconnect must be capable of being locked in the open position</li>
</ul>
</div>
<HorrorStory>
<strong>JOBSITE HORROR STORY:</strong> A crew installed a service disconnect 50 feet from the meter base, thinking it met the "nearest point" requirement. The inspector failed them because the disconnect wasn't readily accessible. <strong>230.70</strong> requires the disconnect to be at the nearest point of entrance, not just somewhere convenient.
</HorrorStory>
</div>
<div className="space-y-4">
<div className="relative">
<Image
src="/images/module-02/m02-14.jpg"
alt="Service disconnect location showing proper placement near point of entrance"
width={400}
height={300}
className="rounded-xl"
/>
<div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
<p className="text-sm">Service disconnect at entrance</p>
</div>
</div>
<div className="relative">
<Image
src="/images/module-02/m02-15.jpg"
alt="Multiple service disconnects showing up to six permitted in single enclosure"
width={400}
height={300}
className="rounded-xl"
/>
<div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
<p className="text-sm">Up to six service disconnects</p>
</div>
</div>
<div className="relative">
<Image
src="/images/module-02/m02-16.jpg"
alt="Service equipment showing proper marking and lockable disconnect means"
width={400}
height={300}
className="rounded-xl"
/>
<div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
<p className="text-sm">Properly marked service equipment</p>
</div>
</div>
</div>
</div>
</section>
{/* Article 240 — Overcurrent Protection /}
<section className={mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}}>
<div className="grid lg:grid-cols-2 gap-8 items-start">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-yellow-400/20 rounded-lg">
<Shield className="w-6 h-6 text-yellow-400" />
</div>
<h2 className="text-2xl font-bold text-white">Article 240 — Overcurrent Protection</h2>
</div>
<div className="space-y-4 text-gray-300">
<p><HL>240.4(D)</HL>: Small conductor rule: 14 AWG limited to 15A, 12 AWG limited to 20A, 10 AWG limited to 30A.</p>
<ul className="space-y-2 ml-4">
<li>• <HL>240.21</HL>: Taps not over 10 feet long may be protected by the overcurrent device ahead of the tap</li>
<li>• <HL>240.6</HL>: Standard ampere ratings: 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 125, 150, 175, 200, 225, 250, 300, 350, 400, 450, 500, 600, 700, 800, 1000, 1200, 1600, 2000, 2500, 3000, 4000, 5000, 6000</li>
<li>• <HL>240.4</HL>: Conductors must be protected against overcurrent in accordance with their ampacity</li>
<li>• <HL>240.15</HL>: Circuit breakers must be of the trip-free type</li>
<li>• <HL>240.24</HL>: Overcurrent devices must be readily accessible</li>
</ul>
</div>
<DataTable>
<h4 className="font-bold text-white mb-4">Small Conductor Protection Limits</h4>
<div className="overflow-x-auto">
<table className="w-full text-sm">
<thead>
<tr className="border-b border-white/20">
<th className="text-left p-3 text-yellow-400 font-bold">Conductor Size</th>
<th className="text-left p-3 text-yellow-400 font-bold">Maximum OCPD</th>
<th className="text-left p-3 text-yellow-400 font-bold">Typical Use</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10">
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="p-3 font-semibold">14 AWG</td>
<td className="p-3 text-red-400">15A maximum</td>
<td className="p-3">Lighting circuits</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="p-3 font-semibold">12 AWG</td>
<td className="p-3 text-red-400">20A maximum</td>
<td className="p-3">General purpose</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="p-3 font-semibold">10 AWG</td>
<td className="p-3 text-red-400">30A maximum</td>
<td className="p-3">Heavy duty</td>
</tr>
</tbody>
</table>
</div>
</DataTable>
</div>
<div className="space-y-4">
<div className="relative">
<Image
src="/images/module-02/m02-17.jpg"
alt="Circuit breaker panel showing proper overcurrent protection for different conductor sizes"
width={400}
height={300}
className="rounded-xl"
/>
<div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
<p className="text-sm">Proper OCPD sizing</p>
</div>
</div>
<div className="relative">
<Image
src="/images/module-02/m02-18.jpg"
alt="Conductor tap installation showing proper length and protection requirements"
width={400}
height={300}
className="rounded-xl"
/>
<div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
<p className="text-sm">Taps limited to 10 feet</p>
</div>
</div>
<div className="relative">
<Image
src="/images/module-02/m02-19.jpg"
alt="Standard ampere ratings chart showing available circuit breaker sizes"
width={400}
height={300}
className="rounded-xl"
/>
<div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 rounded-b-xl">
<p className="text-sm">Standard ampere ratings</p>
</div>
</div>
</div>
</div>
</section>
{/* Article 250 — Grounding & Bonding /}
<section className={mx-auto max-w-5xl mb-12 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}}>
<div className="grid lg:grid-cols-2 gap-8 items-start">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-green-400/20 rounded-lg">
<Shield className="w-6 h-6 text-green-400" />
</div>
<h2 className="text-2xl font-bold text-white">Article 250 — Grounding & Bonding</h2>
</div>
<div className="space-y-4 text-gray-300">
<p><HL>250.50</HL>: Grounding electrode system must include: metal underground water pipe, metal frame of building, concrete-encased electrode, ground ring, rod and pipe electrodes, plate electrodes.</p>
<ul className="space-y-2 ml-4">
<li>• <HL>250.66</HL>: GEC sizing based on largest ungrounded service conductor: 2/0 copper or 4/0 aluminum minimum</li>
<li>• <HL>250.122</HL>: EGC sizing based on OCPD rating, not conductor size</li>
<li>• <HL>250.24</HL>: Main bonding jumper must be sized per Table 250.66</li>
<li>• <HL>250.53</HL>: Concrete-encased electrode: minimum 20 feet of 1/2 inch rebar or 4 AWG copper</li>
<li>• <HL>250.104</HL>: Metal water piping system must be bonded to service equipment</li>
</ul>
</div>
<DataTable>
<h4 className="font-bold text-white mb-4">GEC Sizing per 250.66</h4>
<div className="overflow-x-auto">
<table className="w-full text-sm">
<thead>
<tr className="border-b border-white/20">
<th className="text-left p-3 text-yellow-400 font-bold">Largest Service Conductor</th>
<th className="text-left p-3 text-yellow-400 font-bold">GEC Size (Copper)</th>
<th className="text-left p-3 text-yellow-400 font-bold">GEC Size (Aluminum)</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10">
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="p-3 font-semibold">2/0 or smaller</td>
<td className="p-3">8 AWG</td>
<td className="p-3">6 AWG</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="p-3 font-semibold">1/0 to 3/0</td>
<td className="p-3">6 AWG</td>
<td className="p-3">4 AWG</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="p-3 font-semibold">Over 3/0 to 350 kcmil</td>
<td className="p-3">4 AWG</td>
<td className="p-3">2 AWG</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="p-3 font-semibold">Over 350 to 600 kcmil</td>
<td className="p-3">2 AWG</td>
<td className="p-3">1/0 AWG</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="p-3 font-semibold">Over 600 to 1100 kcmil</td>
<td className="p-3">1/0 AWG</td>
<td className="p-3">2/0 AWG</td>
</tr>
</tbody>
</table>
</div>
</DataTable>
<DataTable>
<h4 className="font-bold text-white mb-4">EGC Sizing per 250.122</h4>
<div className="overflow-x-auto">
<table className="w-full text-sm">
<thead>
<tr className="border-b border-white/20">
<th className="text-left p-3 text-yellow-400 font-bold">OCPD Rating</th>
<th className="text-left p-3 text-yellow-400 font-bold">EGC Size (Copper)</th>
<th className="text-left p-3 text-yellow-400 font-bold">EGC Size (Aluminum)</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10">
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="p-3 font-semibold">15A</td>
<td className="p-3">14 AWG</td>
<td className="p-3">12 AWG</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="p-3 font-semibold">20A</td>
<td className="p-3">12 AWG</td>
<td className="p-3">10 AWG</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="p-3 font-semibold">30A</td>
<td className="p-3">10 AWG</td>
<td className="p-3">8 AWG</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="p-3 font-semibold">40A</td>
<td className="p-3">10 AWG</td>
<td className="p-3">8 AWG</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="p-3 font-semibold">50A</td>
<td className="p-3">8 AWG</td>
<td className="p-3">6 AWG</td>
</tr>
</tbody>
</table>
</div>
</DataTable>
</div>
<div className="space-y-4">
<div className="relative">
<Image
src="/images/module-02/m02-20.jpg"
alt="Grounding electrode system showing water pipe, building frame, and concrete-encased electrodes"
width={400}
height={300}
className="rounded-xl"
/>
<div className="abs

// Quiz data - 15 questions about Chapter 2 topics
const quiz: Q[] = [
  {
    id: 1,
    stem: "What color insulation is required for grounded conductors per NEC 2017?",
    choices: [
      { key: "A", text: "Green only" },
      { key: "B", text: "White or gray" },
      { key: "C", text: "Blue or red" },
      { key: "D", text: "Any color except green" }
    ],
    answer: "B",
    why: "NEC 2017 200.6 requires grounded conductors to be identified by continuous white or gray insulation, or by three continuous white stripes on other than green insulation."
  },
  {
    id: 2,
    stem: "Which locations require GFCI protection for 125V, 15A and 20A receptacles?",
    choices: [
      { key: "A", text: "Bedrooms and living rooms only" },
      { key: "B", text: "Kitchens and dining rooms only" },
      { key: "C", text: "Bathrooms, garages, outdoors, crawl spaces, unfinished basements, and within 6 feet of sinks" },
      { key: "D", text: "All indoor locations" }
    ],
    answer: "C",
    why: "NEC 2017 210.8(A) requires GFCI protection for all 125V, 15A and 20A receptacles in bathrooms, garages, outdoors, crawl spaces, unfinished basements, and within 6 feet of sinks."
  },
  {
    id: 3,
    stem: "What is the general lighting load calculation for dwelling units per square foot?",
    choices: [
      { key: "A", text: "2 VA per square foot" },
      { key: "B", text: "3 VA per square foot" },
      { key: "C", text: "3.5 VA per square foot" },
      { key: "D", text: "4 VA per square foot" }
    ],
    answer: "B",
    why: "NEC 2017 220.42 requires 3 VA per square foot for general lighting load calculations in dwelling units."
  },
  {
    id: 4,
    stem: "What is the maximum clearance required for 151-600V conductors from buildings?",
    choices: [
      { key: "A", text: "8 feet" },
      { key: "B", text: "10 feet" },
      { key: "C", text: "12 feet" },
      { key: "D", text: "15 feet" }
    ],
    answer: "C",
    why: "NEC 2017 225.18 requires 12 feet clearance from buildings for conductors operating at 151-600V."
  },
  {
    id: 5,
    stem: "How many service disconnects are permitted in a single enclosure per NEC 2017?",
    choices: [
      { key: "A", text: "Up to 4" },
      { key: "B", text: "Up to 6" },
      { key: "C", text: "Up to 8" },
      { key: "D", text: "Unlimited" }
    ],
    answer: "B",
    why: "NEC 2017 230.71 permits up to six service disconnects in a single enclosure or group of enclosures."
  },
  {
    id: 6,
    stem: "What is the maximum overcurrent protection for 12 AWG conductors?",
    choices: [
      { key: "A", text: "15A" },
      { key: "B", text: "20A" },
      { key: "C", text: "25A" },
      { key: "D", text: "30A" }
    ],
    answer: "B",
    why: "NEC 2017 240.4(D) limits 12 AWG conductors to a maximum of 20A overcurrent protection."
  },
  {
    id: 7,
    stem: "What is the minimum size GEC required for a 200A service with 4/0 copper conductors?",
    choices: [
      { key: "A", text: "6 AWG copper" },
      { key: "B", text: "4 AWG copper" },
      { key: "C", text: "2 AWG copper" },
      { key: "D", text: "1/0 AWG copper" }
    ],
    answer: "B",
    why: "NEC 2017 250.66 requires a minimum 4 AWG copper GEC for service conductors 1/0 to 3/0."
  },
  {
    id: 8,
    stem: "What is the required EGC size for a 30A circuit?",
    choices: [
      { key: "A", text: "12 AWG copper" },
      { key: "B", text: "10 AWG copper" },
      { key: "C", text: "8 AWG copper" },
      { key: "D", text: "6 AWG copper" }
    ],
    answer: "B",
    why: "NEC 2017 250.122 requires a 10 AWG copper EGC for circuits protected by 30A overcurrent devices."
  },
  {
    id: 9,
    stem: "What is the minimum length required for a concrete-encased electrode?",
    choices: [
      { key: "A", text: "10 feet" },
      { key: "B", text: "15 feet" },
      { key: "C", text: "20 feet" },
      { key: "D", text: "25 feet" }
    ],
    answer: "C",
    why: "NEC 2017 250.53 requires concrete-encased electrodes to be a minimum of 20 feet in length."
  },
  {
    id: 10,
    stem: "What is the maximum spacing between receptacles along a wall in dwelling units?",
    choices: [
      { key: "A", text: "6 feet" },
      { key: "B", text: "8 feet" },
      { key: "C", text: "10 feet" },
      { key: "D", text: "12 feet" }
    ],
    answer: "D",
    why: "NEC 2017 210.52(B) requires receptacles to be spaced so no point along the wall is more than 6 feet from a receptacle, resulting in maximum 12 feet spacing."
  },
  {
    id: 11,
    stem: "What is the electric range load calculation for a single range?",
    choices: [
      { key: "A", text: "6 kW" },
      { key: "B", text: "8 kW" },
      { key: "C", text: "10 kW" },
      { key: "D", text: "12 kW" }
    ],
    answer: "B",
    why: "NEC 2017 220.55 requires 8 kW for a single electric range load calculation."
  },
  {
    id: 12,
    stem: "What is the maximum tap length permitted without additional overcurrent protection?",
    choices: [
      { key: "A", text: "5 feet" },
      { key: "B", text: "10 feet" },
      { key: "C", text: "15 feet" },
      { key: "D", text: "20 feet" }
    ],
    answer: "B",
    why: "NEC 2017 240.21 permits taps not over 10 feet long to be protected by the overcurrent device ahead of the tap."
  },
  {
    id: 13,
    stem: "What is the minimum clearance from roofs for 0-300V conductors?",
    choices: [
      { key: "A", text: "6 feet" },
      { key: "B", text: "8 feet" },
      { key: "C", text: "10 feet" },
      { key: "D", text: "12 feet" }
    ],
    answer: "B",
    why: "NEC 2017 225.19 requires 8 feet clearance from roofs for conductors operating at 0-300V."
  },
  {
    id: 14,
    stem: "What is the required small appliance circuit load per circuit?",
    choices: [
      { key: "A", text: "1200 VA" },
      { key: "B", text: "1500 VA" },
      { key: "C", text: "1800 VA" },
      { key: "D", text: "2000 VA" }
    ],
    answer: "B",
    why: "NEC 2017 220.52(A) requires 1500 VA per small appliance circuit."
  },
  {
    id: 15,
    stem: "What is the maximum temperature rating for standard PVC conduit?",
    choices: [
      { key: "A", text: "60°C" },
      { key: "B", text: "75°C" },
      { key: "C", text: "90°C" },
      { key: "D", text: "105°C" }
    ],
    answer: "B",
    why: "NEC 2017 352.12 limits standard PVC conduit to a maximum temperature of 75°C."
  }
];
