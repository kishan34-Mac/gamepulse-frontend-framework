import hero from "@/assets/gamepulse-hero.jpg";
import esports from "@/assets/gamepulse-esports.jpg";
import hardware from "@/assets/gamepulse-hardware.jpg";
import adventure from "@/assets/gamepulse-adventure.jpg";
import type { Article, Author, Category, Game, Product, Review } from "./types";

export const authors: Author[] = [
 { id:"maya", name:"Maya Sen", role:"Senior Editor", avatar:adventure, bio:"Maya covers open worlds, narrative design and the people shaping modern games." },
 { id:"arjun", name:"Arjun Rao", role:"Hardware Editor", avatar:hardware, bio:"Arjun tests gaming hardware and translates performance data into practical advice." },
 { id:"nia", name:"Nia Cross", role:"Esports Reporter", avatar:esports, bio:"Nia follows competitive scenes, tournament strategy and the culture around the arena." },
];
export const categories: Category[] = [
 {slug:"news",name:"Gaming News",description:"Breaking stories, considered updates and everything moving across the games industry."},
 {slug:"reviews",name:"Game Reviews",description:"Independent verdicts built on careful play, clear context and honest criticism."},
 {slug:"guides",name:"Gaming Guides",description:"Practical walkthroughs, builds and settings that help you play smarter."},
 {slug:"pc-gaming",name:"PC Gaming",description:"Hardware, performance, builds and the games that push the platform forward."},
 {slug:"mobile-gaming",name:"Mobile Gaming",description:"Standout Android and iOS games, competitive scenes and smart device tips."},
 {slug:"esports",name:"Esports",description:"Tournament stories, tactical analysis and the players defining competitive gaming."},
];
const articleBody = (subject:string) => [
 {type:"paragraph" as const,text:`${subject} has become one of the most discussed stories in gaming. We separate confirmed details from speculation and focus on what matters for players.`},
 {type:"heading" as const,id:"why-it-matters",text:"Why it matters"},
 {type:"paragraph" as const,text:"Great games are shaped by more than launch-day spectacle. Systems, performance, accessibility and long-term support all determine whether an experience earns a place in your library."},
 {type:"quote" as const,text:"The strongest signal is not hype — it is a clear creative direction backed by thoughtful design."},
 {type:"heading" as const,id:"what-to-watch",text:"What to watch next"},
 {type:"highlight" as const,text:"Keep an eye on official showcases, developer notes and independent performance testing. Dates and features can change before release."},
 {type:"paragraph" as const,text:"We will update this guide as verified information arrives. Until then, treat unsourced claims cautiously and build expectations around what has actually been shown."},
];
export const articles: Article[] = [
 {id:"a1",slug:"everything-we-know-about-project-velocity",title:"Everything We Know About Project Velocity So Far",excerpt:"The world, the cars and the design choices shaping gaming’s most anticipated open-city racer.",content:articleBody("Project Velocity"),category:"news",image:hero,authorId:"maya",publishedAt:"2026-09-20",updatedAt:"2026-09-22",readingTime:8,tags:["Open World","Racing"],featured:true,trending:true,status:"published"},
 {id:"a2",slug:"steam-releases-worth-watching",title:"Steam Releases Worth Watching This Month",excerpt:"Seven promising games, from tactical indies to ambitious new worlds.",content:articleBody("This month’s PC releases"),category:"news",image:adventure,authorId:"maya",publishedAt:"2026-09-19",readingTime:6,tags:["Steam","Releases"],trending:true,status:"published"},
 {id:"a3",slug:"best-co-op-games-with-friends",title:"The Best Co-Op Games to Play With Friends",excerpt:"Brilliant shared adventures for two players, a full squad or everyone on the sofa.",content:articleBody("Co-op gaming"),category:"guides",image:adventure,authorId:"maya",publishedAt:"2026-09-17",readingTime:10,tags:["Co-op","Multiplayer"],featured:true,status:"published"},
 {id:"a4",slug:"ten-pc-settings-improve-fps",title:"10 PC Settings That Can Improve Your FPS",excerpt:"A measured guide to smoother play without turning every game into a blurry mess.",content:articleBody("PC performance settings"),category:"pc-gaming",image:hardware,authorId:"arjun",publishedAt:"2026-09-16",readingTime:9,tags:["Performance","PC"],featured:true,trending:true,status:"published"},
 {id:"a5",slug:"best-gaming-laptops-competitive-players",title:"Best Gaming Laptops for Competitive Players",excerpt:"What matters most when speed, portability and consistent frame times share a desk.",content:articleBody("Competitive gaming laptops"),category:"pc-gaming",image:hardware,authorId:"arjun",publishedAt:"2026-09-14",readingTime:11,tags:["Laptops","Hardware"],status:"published"},
 {id:"a6",slug:"valorant-champions-field-guide",title:"Everything to Watch at the Global Tactical Championship",excerpt:"Teams, maps and strategic shifts set to define this year’s biggest arena.",content:articleBody("The global tactical championship"),category:"esports",image:esports,authorId:"nia",publishedAt:"2026-09-13",readingTime:7,tags:["Valorant","Tournament"],featured:true,trending:true,status:"published"},
 {id:"a7",slug:"best-mobile-games-2026",title:"The Best Mobile Games to Play in 2026",excerpt:"Excellent competitive and casual games that respect your time and your device.",content:articleBody("Mobile games in 2026"),category:"mobile-gaming",image:hero,authorId:"maya",publishedAt:"2026-09-11",readingTime:12,tags:["Android","iOS"],featured:true,status:"published"},
 {id:"a8",slug:"low-end-phone-performance-guide",title:"Make Great Games Run Better on a Modest Phone",excerpt:"Battery, heat and graphics settings explained for smoother mobile sessions.",content:articleBody("Mobile performance"),category:"mobile-gaming",image:hardware,authorId:"arjun",publishedAt:"2026-09-10",readingTime:8,tags:["Performance","Mobile"],status:"published"},
 {id:"a9",slug:"tournament-meta-shifts",title:"Five Tactical Shifts Reshaping Team Play",excerpt:"Why faster rotations and flexible roles are changing high-level competition.",content:articleBody("The competitive meta"),category:"esports",image:esports,authorId:"nia",publishedAt:"2026-09-09",readingTime:6,tags:["Analysis","Esports"],status:"published"},
 {id:"a10",slug:"starter-builds-for-new-adventurers",title:"Five Starter Builds for New Adventurers",excerpt:"Reliable early-game setups that leave room to experiment.",content:articleBody("Starter builds"),category:"guides",image:adventure,authorId:"maya",publishedAt:"2026-09-08",readingTime:7,tags:["Builds","Beginner"],status:"published"},
 {id:"a11",slug:"echoes-of-aether-review",title:"Echoes of Aether Review — A World Worth Getting Lost In",excerpt:"A confident action RPG with spectacular exploration and a few familiar rough edges.",content:articleBody("Echoes of Aether"),category:"reviews",image:adventure,authorId:"maya",publishedAt:"2026-09-18",readingTime:13,tags:["RPG","Review"],featured:true,trending:true,status:"published"},
 {id:"a12",slug:"neon-circuit-review",title:"Neon Circuit Review — Speed With Substance",excerpt:"Tight handling and bold city design make this racer more than a visual showcase.",content:articleBody("Neon Circuit"),category:"reviews",image:hero,authorId:"arjun",publishedAt:"2026-09-12",readingTime:9,tags:["Racing","Review"],status:"published"},
];
export const games: Game[] = [
 {id:"g1",slug:"echoes-of-aether",title:"Echoes of Aether",cover:adventure,hero:adventure,genre:["Action RPG","Adventure"],platforms:["PC","PlayStation","Xbox"],developer:"Northstar Assembly",publisher:"Signal House",releaseDate:"2026-09-18"},
 {id:"g2",slug:"neon-circuit",title:"Neon Circuit",cover:hero,hero,genre:["Racing","Open World"],platforms:["PC","PlayStation","Xbox"],developer:"Apex Meridian",publisher:"Voltage Works",releaseDate:"2026-09-12"},
];
export const reviews: Review[] = [
 {gameId:"g1",articleSlug:"echoes-of-aether-review",score:9.0,verdict:"A spectacular world, rewarding combat and a sense of discovery that rarely fades.",pros:["Exceptional world design","Flexible combat builds","Memorable score"],cons:["Uneven side quests","Minor traversal friction"],gameplay:9.1,graphics:9.4,performance:8.2,audio:9.3,replayability:8.8},
 {gameId:"g2",articleSlug:"neon-circuit-review",score:8.4,verdict:"A stylish, technically accomplished racer with handling worth mastering.",pros:["Responsive driving","Striking city circuits","Excellent sound"],cons:["Thin story","Limited event variety"],gameplay:8.8,graphics:9.2,performance:8.5,audio:8.7,replayability:7.6},
];
export const products: Product[] = [
 {id:"p1",name:"Pulse Pro Wireless Mouse",image:hardware,price:"₹2,499",description:"A lightweight, low-latency shape for competitive play.",rating:4.8},
 {id:"p2",name:"Arc TKL Mechanical Keyboard",image:hardware,price:"₹5,999",description:"Compact board with smooth switches and sturdy acoustics.",rating:4.7},
 {id:"p3",name:"Halo Spatial Headset",image:hardware,price:"₹7,499",description:"Comfortable closed-back audio with a clear detachable mic.",rating:4.6},
];
