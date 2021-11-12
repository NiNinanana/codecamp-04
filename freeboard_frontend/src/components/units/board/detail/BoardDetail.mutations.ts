import { gql } from "@apollo/client"

export const DELETE_BOARD = gql`
    mutation deleteBoard($boardId: ID!){
        deleteBoard(boardId: $boardId)
    }

`

export const LIKEBOARD = gql`
    mutation likeBoard($boardId: ID!){
        likeBoard(boardId: $boardId)
    }
`

export const DISLIKEBOARD = gql`
    mutation dislikeBoard($boardId: ID!){
        dislikeBoard(boardId: $boardId)
    }
`