/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface MenuItem {
  name: string;
  icon: string;
  url: string;
}

declare module "@configs/menu.yml" {
  const value: {
    items: MenuItems[];
  };
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

declare module "@configs/selections.yml" {
  const value: {
    selections: Selection[];
  };
  export default value;
}

interface Project {
  name: string;
  desc: string;
  url: string;
}

declare module "@configs/projects.yml" {
  const value: {
    projects: Project[];
  };
  export default value;
}

interface Service {
  name: string;
  app: string;
  url: string;
  method: string;
  status?: string;
}

interface ServicesGroup {
  name: string;
  services: Service[];
}

declare module "@configs/services.yml" {
  const value: {
    groups: ServicesGroup[];
  };
  export default value;
}

interface Friend {
  name: string;
  section?: boolean;
  desc?: string;
  slogan?: string;
  url: string;
  avatar: string;
}

interface FriendsGroup {
  name: string;
  desc: string;
  friends: [Friend];
}

declare module "@configs/friends.yml" {
  const value: {
    groups: FriendsGroup[];
  };
  export default value;
}

declare module "remarkable";
declare module "remarkable-katex";
declare module "markdown-toc";
