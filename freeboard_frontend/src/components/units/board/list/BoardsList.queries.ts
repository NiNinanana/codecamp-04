import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      likeCount
      dislikeCount
      createdAt
    }
  }
`;

export const FETCH_BOARDS_OF_THE_BEST = gql`
  query {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      contents
      likeCount
      dislikeCount
      createdAt
    }
  }
`;

export const FETCH_BOARDS_SEARCH = gql`
  query fetchBoards($search: String, $endDate: DateTime, $startDate: DateTime) {
    fetchBoards(search: $search, endDate: $endDate, startDate: $startDate) {
      _id
      writer
      title
      likeCount
      dislikeCount
      createdAt
    }
  }
`;
