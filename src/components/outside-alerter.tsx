import { FunctionComponent, RefObject, useEffect, useRef } from "react";

type Handler = (event: MouseEvent) => void;

function useOutsideAlerter(ref: RefObject<HTMLElement>, handler: Handler) {
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				handler(event);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
}

type Props = {
	handler: Handler;
}

const OutsideAlerter: FunctionComponent<Props> = ({ children, handler }) => {
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef, handler);

	return (
		<div ref={wrapperRef}>{children}</div>
	);
};

export default OutsideAlerter;
