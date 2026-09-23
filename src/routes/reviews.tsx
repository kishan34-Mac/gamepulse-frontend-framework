import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/content/category-page";
const slug="reviews" as const;
export const Route=createFileRoute("/reviews")({head:()=>({meta:[{title:"Game Reviews — GAMEPULSE"},{name:"description",content:"Explore the latest game reviews stories, analysis and guides from GAMEPULSE."},{property:"og:title",content:"Game Reviews — GAMEPULSE"},{property:"og:description",content:"Explore the latest game reviews stories, analysis and guides from GAMEPULSE."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"canonical",href:"/reviews"}]}),component:()=> <CategoryPage slug={slug}/>});
