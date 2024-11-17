import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { LinkPreview } from "../ui/link-preview";

function RichBodyContent({ body }) {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <span className="font-bold">{text}</span>,
      [MARKS.ITALIC]: (text) => <span className="italic">{text}</span>,
      [MARKS.UNDERLINE]: (text) => (
        <span className="underline decoration-1 underline-offset-4">
          {text}
        </span>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) =>
        children !== "" && (
          <p className="type-preset-lg font-body py-4">{children}</p>
        ),
      [INLINES.HYPERLINK]: (node, children) => (
        <LinkPreview
          url={node.data.uri}
          quality={70}
          className="font-bold underline decoration-2 underline-offset-4"
        >
          {children}
        </LinkPreview>
      ),
    },
  };

  return <>{documentToReactComponents(body.json, options)}</>;
}

export default RichBodyContent;
