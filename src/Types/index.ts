export interface UpdateItem{
    commentContent:string,
    likes?:number,
    dislikes?:number,
 
}

export type Props = {
    id: string;
  time: string;
  source: string;
  logo?: string;
  content: string;
  tags?: string[]; // optional tags array
  videoUrl?: string;
  status?: "verified" | "unverified";
  likes?: number;
  dislikes?: number;   // add dislikes here for the update card too
  comments?: number;
   newsId: string; // ✅ Add this line
}


export interface CommentCardProps {
  commentContent: string;
  likes: number;
  dislikes: number;
}