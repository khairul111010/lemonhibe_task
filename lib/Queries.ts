import { gql } from "@apollo/client";

export const GET_CONFERENCE = gql`
query Query{
    conferences {
      id
      name
      startDate
      slogan
    }
}`;