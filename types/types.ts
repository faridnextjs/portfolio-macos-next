export interface NavLink {
  id: number;
  name: string;
  type: string;
}

export interface NavIcon {
  id: number;
  img: string;
}

export interface DockApp {
  id: string;
  name: string;
  icon: string;
  canOpen: boolean;
}

export interface BlogPost {
  id: number;
  date: string;
  title: string;
  image: string;
  link: string;
}

export interface TechStackItem {
  category: string;
  items: string[];
}

export interface SocialItem {
  id: number;
  text: string;
  icon: string;
  bg: string;
  link: string;
}

export interface PhotoLink {
  id: number;
  icon: string;
  title: string;
}

export interface GalleryItem {
  id: number;
  img: string;
}

export type FileKind = "file" | "folder";

export interface FileItem {
  id: number;
  name: string;
  icon: string;
  kind: FileKind;
  position?: string;
  windowPosition?: string;
  fileType?: string;
  href?: string;
  imageUrl?: string;
  description?: string[];
  subtitle?: string;
  image?: string;
  children?: FileItem[];
}

export interface Location {
  id: number;
  type: string;
  name: string;
  icon: string;
  kind: "folder";
  children: FileItem[];
}

export interface WindowConfigItem {
  isOpen: boolean;
  zIndex: number;
  data: any;
}

export interface WindowConfig {
  finder: WindowConfigItem;
  contact: WindowConfigItem;
  resume: WindowConfigItem;
  safari: WindowConfigItem;
  photos: WindowConfigItem;
  terminal: WindowConfigItem;
  txtfile: WindowConfigItem;
  imgfile: WindowConfigItem;
}
