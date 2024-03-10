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

interface Comment {
  coid: number;
  parent: number;
  cid: number;
  created: number;
  author: string;
  url: string;
  text: string;
  status: string;
  mailHash: string;
  children: Comment[];
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
