import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/content/category-page";
const slug="esports" as const;
export const Route=createFileRoute("/esports/")({head:()=>({meta:[{title:"Esports — GAMEPULSE"},{name:"description",content:"Explore the latest esports stories, analysis and guides from GAMEPULSE."},{property:"og:title",content:"Esports — GAMEPULSE"},{property:"og:description",content:"Explore the latest esports stories, analysis and guides from GAMEPULSE."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"canonical",href:"/esports"}]}),component:()=> <CategoryPage slug={slug}/>});
