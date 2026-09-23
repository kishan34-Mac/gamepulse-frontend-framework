import { articles, authors, categories, games, products, reviews } from "@/data/content";
import type { CategorySlug } from "@/data/types";
export const contentService = {
 getArticles: () => articles,
 getArticleBySlug: (slug:string) => articles.find((item)=>item.slug===slug),
 getArticlesByCategory: (category:CategorySlug) => articles.filter((item)=>item.category===category),
 getFeaturedArticles: () => articles.filter((item)=>item.featured),
 getTrendingArticles: () => articles.filter((item)=>item.trending),
 getAuthors: () => authors,
 getAuthorById: (id:string) => authors.find((item)=>item.id===id),
 getCategories: () => categories,
 getCategory: (slug:string) => categories.find((item)=>item.slug===slug),
 getGames: () => games,
 getGameBySlug: (slug:string) => games.find((item)=>item.slug===slug),
 getReviews: () => reviews,
 getReviewBySlug: (slug:string) => reviews.find((item)=>item.articleSlug===slug),
 getProducts: () => products,
 searchArticles: (query:string) => { const q=query.trim().toLowerCase(); return q ? articles.filter((a)=>[a.title,a.excerpt,a.category,...a.tags].join(" ").toLowerCase().includes(q)) : []; },
};
