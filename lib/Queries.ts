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

export const GET_SINGLE_CONFERENCE = gql`
query Query($id: ID!) {
    conference(id: $id){
      id
      name
      slogan
      organizer {
        name
        aboutShort
        image {
          url
        }
      }
      speakers{
            name
        about
        social {
          twitter
          linkedin
          dribble
          github
        }
      }
      schedules{
        day
        description
        intervals {
          sessions {
            description
            day
            begin
            end
          }
          
        }
        
      }
      sponsors{
        name
        aboutShort
        image{
          url
        }
      }
    }
}`;