export const BODY_FIELDS = `
  json
  links {
    entries {
      block {
        sys {
          id
        }
        __typename

      }
    }
    assets {
      block {

      }
      hyperlink{
        sys {
          id
        }
        title
        contentType
        description
        url
      }
    }
  }

`;

export default BODY_FIELDS;
