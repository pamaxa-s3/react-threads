import { Post } from "../types"
import { api } from "./api"

export const postApi = api.injectEndpoints({
  endpoints: builder => ({
    createPost: builder.mutation<Post, { content: string }>({
      query: postData => ({
        url: "/posts",
        method: "POST",
        body: postData,
      }),
    }),
    getAllPosts: builder.query<Post[], void>({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
    }),
    getPostById: builder.query<Post, string>({
      query: id => ({
        url: `/posts/${id}`,
        method: "GET",
      }),
    }),
    updatePost: builder.mutation<Post, { content: string; id: string }>({
      query: ({ content, id }) => ({
        url: `/post${id}`,
        method: "PUT",
        body: content,
      }),
    }),
    deletePost: builder.mutation<void, string>({
      query: id => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
})

export const {
  useCreatePostMutation,
  useLazyGetAllPostsQuery,
  useGetAllPostsQuery,
  useLazyGetPostByIdQuery,
  useGetPostByIdQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi

export const {
  endpoints: { createPost, getAllPosts, getPostById, updatePost, deletePost },
} = postApi
