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
      [INLINES.HYPERLINK]: (node, children) => {
        var newTab: boolean = true;

        if (
          node.data.uri.includes("mqwebster.com") ||
          node.data.uri.startsWith("/")
        ) {
          newTab = false;
        }

        return (
          <LinkPreview
            url={node.data.uri}
            quality={70}
            className="font-medium text-blue-base dark:text-blue-400 underline decoration-1 decoration-black dark:decoration-white underline-offset-4"
            newTab={newTab}
          >
            {children}
          </LinkPreview>
        );
      },
    },
  };

  return <>{documentToReactComponents(body.json, options)}</>;
}

export default RichBodyContent;
