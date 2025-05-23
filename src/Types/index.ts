export interface UpdateItem{
    commentContent:string,
    likes?:number,
    dislikes?:number,
 
}

export type Props = {
    time: string;
    source: string;
    logo?: string;
    content: string;
    tags?: string[];
    videoUrl?: string;
    status?: "verified" | "unverified";
    likes?: number;
    dislikes?: number; // 👈 add this
    comments?: number;
}

