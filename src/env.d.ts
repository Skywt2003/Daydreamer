/// <reference types="astro/client" />

declare module "*.yml" {
  const value: any;
  export default value;
}

interface ArticleInTimeline {
  slug: string;
  title: string;
  created: number;
  modified: number;
  digest: string;
  headPic: string;
}

interface Article {
  cid: number;
  slug: string;
  title: string;
  created: number;
  modified: number;
  text: string;
  inTimeline: boolean;
  headPic: string;
  allowComment: boolean;
}

// 此 interface 本应该叫做 Comment
// 但是和 Comment 组件重名，故改此名
interface ArticleComment {
  coid: number;
  cid: number;
  created: number;
  author: string;
  url: string;
  avatar: string;
  status: "pending" | "approved";
  text: string;
  isOwner: boolean;
  parent: number;
  children: ArticleComment[];
}

interface PathItem {
  title: string;
  url: string;
}

interface Selection {
  name: string;
  slugs: string[];
}

interface Service {
  name: string;
  app: string;
  url: string;
  method: string;
  status?: string;
}

interface ServiceType {
  name: string;
  services: Service[];
}

declare module 'remarkable';
declare module 'remarkable-katex';
declare module 'markdown-toc';