import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/content/category-page";
const slug="mobile-gaming" as const;
export const Route=createFileRoute("/mobile-gaming")({head:()=>({meta:[{title:"Mobile Gaming — GAMEPULSE"},{name:"description",content:"Explore the latest mobile gaming stories, analysis and guides from GAMEPULSE."},{property:"og:title",content:"Mobile Gaming — GAMEPULSE"},{property:"og:description",content:"Explore the latest mobile gaming stories, analysis and guides from GAMEPULSE."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"canonical",href:"/mobile-gaming"}]}),component:()=> <CategoryPage slug={slug}/>});
