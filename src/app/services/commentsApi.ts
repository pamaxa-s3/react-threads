import { Comment } from "../types"
import { api } from "./api"

const commentsApi = api.injectEndpoints({
  endpoints: builder => ({
    createComment: builder.mutation<Comment, Partial<Comment>>({
      query: newComment => ({
        url: "/comments",
        method: "POST",
        content: newComment,
      }),
    }),
    updateComment: builder.mutation<
      Comment,
      { content: string; commentId: string }
    >({
      query: ({ content, commentId }) => ({
        url: `/comments${commentId}`,
        method: "PUT",
        body: content,
      }),
    }),
    deleteComment: builder.mutation<void, string>({
      query: commentId => ({
        url: `/comments/${commentId}`,
        method: "DELETE",
      }),
    }),
  }),
})

export const {
  useCreateCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
} = commentsApi

export const {
  endpoints: { createComment, updateComment, deleteComment },
} = commentsApi
