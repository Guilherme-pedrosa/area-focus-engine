import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  cover_image_url: string | null;
  category: string | null;
  tags: string[] | null;
  author: string | null;
  status: string;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export function usePublishedPosts() {
  return useQuery({
    queryKey: ["blog-posts-published"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts" as any)
        .select("*")
        .eq("status", "publicado")
        .order("published_at", { ascending: false });
      if (error) throw error;
      return data as unknown as BlogPost[];
    },
  });
}

export function usePostBySlug(slug: string) {
  return useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts" as any)
        .select("*")
        .eq("slug", slug)
        .eq("status", "publicado")
        .single();
      if (error) throw error;
      return data as unknown as BlogPost;
    },
    enabled: !!slug,
  });
}

export function useAllPosts() {
  return useQuery({
    queryKey: ["blog-posts-all"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts" as any)
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as unknown as BlogPost[];
    },
  });
}

export function useSaveBlogPost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (post: Partial<BlogPost> & { title: string; slug: string }) => {
      if (post.id) {
        const { id, ...rest } = post;
        const { data, error } = await supabase
          .from("blog_posts" as any)
          .update({ ...rest, updated_at: new Date().toISOString() } as any)
          .eq("id", id)
          .select()
          .single();
        if (error) throw error;
        return data;
      } else {
        const { data, error } = await supabase
          .from("blog_posts" as any)
          .insert(post as any)
          .select()
          .single();
        if (error) throw error;
        return data;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog-posts-all"] });
      queryClient.invalidateQueries({ queryKey: ["blog-posts-published"] });
    },
  });
}

export function useDeleteBlogPost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("blog_posts" as any)
        .delete()
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog-posts-all"] });
      queryClient.invalidateQueries({ queryKey: ["blog-posts-published"] });
    },
  });
}
