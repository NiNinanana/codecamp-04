import { gql } from "@apollo/client";

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        amount
      }
    }
  }
`;

export const FETCH_USED_ITEMS_I_BOUGHT = gql`
  query fetchUseditemsIBought {
    fetchUseditemsIBought {
      _id
      name
      price
      images
      soldAt
    }
  }
`;

export const FETCH_USED_ITEMS_I_SOLD = gql`
  query fetchUseditmesISold {
    fetchUseditemsISold {
      _id
      name
      price
      images
      createdAt
      buyer {
        name
      }
    }
  }
`;
