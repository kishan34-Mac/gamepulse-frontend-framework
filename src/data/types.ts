export type CategorySlug = "news" | "reviews" | "guides" | "pc-gaming" | "mobile-gaming" | "esports";
export type ContentBlock = { type: "paragraph" | "heading" | "quote" | "highlight" | "info" | "warning"; text: string; id?: string };
export interface Article { id:string; slug:string; title:string; excerpt:string; content:ContentBlock[]; category:CategorySlug; image:string; authorId:string; publishedAt:string; updatedAt?:string; readingTime:number; tags:string[]; featured?:boolean; trending?:boolean; isSponsored?:boolean; sponsorName?:string; sponsorDisclosure?:string; seoTitle?:string; seoDescription?:string; canonicalUrl?:string; status:"published"|"draft"|"scheduled"; }
export interface Author { id:string; name:string; avatar:string; bio:string; role:string; }
export interface Game { id:string; slug:string; title:string; cover:string; hero:string; genre:string[]; platforms:string[]; developer:string; publisher:string; releaseDate?:string; }
export interface Review { gameId:string; articleSlug:string; score:number; verdict:string; pros:string[]; cons:string[]; gameplay:number; graphics:number; performance:number; audio:number; replayability:number; }
export interface Product { id:string; name:string; image:string; price:string; description:string; url?:string; affiliateUrl?:string; rating:number; }
export interface Category { slug:CategorySlug; name:string; description:string; }
