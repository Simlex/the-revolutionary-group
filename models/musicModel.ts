import { StaticImageData } from "next/image";

export interface MusicModel {
  name: string;
  shortDescription: string;
  description: string;
  image: StaticImageData;
  socialLinks: {
    youtube: string;
    spotify: string;
  }[];
  year: string;
  genre: string;
  path: string;
  music: string;
}
