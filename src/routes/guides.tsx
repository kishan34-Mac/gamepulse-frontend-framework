import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/content/category-page";
const slug="guides" as const;
export const Route=createFileRoute("/guides")({head:()=>({meta:[{title:"Gaming Guides — GAMEPULSE"},{name:"description",content:"Explore the latest gaming guides stories, analysis and guides from GAMEPULSE."},{property:"og:title",content:"Gaming Guides — GAMEPULSE"},{property:"og:description",content:"Explore the latest gaming guides stories, analysis and guides from GAMEPULSE."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"canonical",href:"/guides"}]}),component:()=> <CategoryPage slug={slug}/>});
