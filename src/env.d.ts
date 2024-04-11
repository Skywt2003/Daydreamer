/// <reference types="astro/client" />

declare module "*.yml" {
  const value: any;
  export default value;
}

// 显示文章列表使用的文章概要
interface Post {
  cid: number;
  title: string;
  created: number;
  modified: number;
  slug: string;
  commentsNum: number;
  type: string;
  digest: string;
  permalink: string;
  fields: {
    headPic: {
      value: string;
    };
  };
}

// 显示文章使用的文章细节
interface PostDetail {
  title: string;
  cid: number;
  created: number;
  type: string;
  slug: string;
  commentsNum: number;
  text: string;
  permalink: string;
  date: {
    timeStamp: number;
    year: number;
    month: number;
    day: number;
  };
  fields: {
    headPic: {
      value: string;
    };
    pubPlace: {
      value: string;
    };
    linkTo: {
      value: string;
    };
  };
}

// 此 interface 本应该叫做 Comment
// 但是和 Comment 组件重名，故改此名
interface PostComment {
  coid: number;
  parent: number;
  cid: number;
  created: number;
  author: string;
  url: string;
  text: string;
  status: "wating" | "approved";
  mailHash: string;
  children: PostComment[];
}

interface PathItem {
  title: string;
  url: string;
}

interface ServiceType {
  name: string;
  services: Service[];
}

interface Service {
  name: string;
  app: string;
  url: string;
  method: string;
  status?: string;
}

interface Selection {
  name: string;
  slugs: [string];
}
