import { ReactNode } from "react";

type HighlightProps = {
	children: ReactNode;
};

export const Highlight = (props: HighlightProps) => {
	return <span className="text-pastel-green">{props.children}</span>;
};

export default Highlight;
