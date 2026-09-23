import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/content/category-page";
const slug="pc-gaming" as const;
export const Route=createFileRoute("/pc-gaming")({head:()=>({meta:[{title:"PC Gaming — GAMEPULSE"},{name:"description",content:"Explore the latest pc gaming stories, analysis and guides from GAMEPULSE."},{property:"og:title",content:"PC Gaming — GAMEPULSE"},{property:"og:description",content:"Explore the latest pc gaming stories, analysis and guides from GAMEPULSE."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"canonical",href:"/pc-gaming"}]}),component:()=> <CategoryPage slug={slug}/>});
