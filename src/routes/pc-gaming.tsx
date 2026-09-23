import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/content/category-page";
import { contentService } from "@/services/content-service";
const slug="pc-gaming" as const; const category=contentService.getCategory(slug);
export const Route=createFileRoute("/pc-gaming")({head:()=>({meta:[{title:`4{category?.name} — GAMEPULSE`},{name:"description",content:category?.description},{property:"og:title",content:`4{category?.name} — GAMEPULSE`},{property:"og:description",content:category?.description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"canonical",href:"/pc-gaming"}]}),component:()=> <CategoryPage slug={slug}/>});
