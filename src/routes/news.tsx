import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/content/category-page";
const slug="news" as const;
export const Route=createFileRoute("/news")({head:()=>({meta:[{title:"Gaming News — GAMEPULSE"},{name:"description",content:"Explore the latest gaming news stories, analysis and guides from GAMEPULSE."},{property:"og:title",content:"Gaming News — GAMEPULSE"},{property:"og:description",content:"Explore the latest gaming news stories, analysis and guides from GAMEPULSE."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"canonical",href:"/news"}]}),component:()=> <CategoryPage slug={slug}/>});
