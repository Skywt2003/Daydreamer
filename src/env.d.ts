/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface GotArticle {
  id: number;
  slug: string;
  title: string;
  created: Date;
  modified: Date;
  digest: string;
  text?: string;
  description: string | null;
  keywords: string[] | null;
  headPic: string | null;
  inTimeline: boolean;
  allowComment: boolean;
  commentsNum: number;
  comments?: GotComment[];
}

interface GotComment {
  id: number;
  created: Date;
  author: string;
  avatar: string;
  url: string;
  text: string;
  isOwner: boolean;
  status: "pending" | "approved";
  articleId: number;
  parentId: number | null;
  children: GotComment[];
}

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
