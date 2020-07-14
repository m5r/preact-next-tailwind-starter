import { ReactChild, createContext, useContext, useEffect, useRef } from "react";
import { CSSTransition as ReactCSSTransition } from "react-transition-group";

type Context = {
	parent: {
		show?: boolean;
		isInitialRender?: boolean;
		appear?: boolean;
	};
}

const TransitionContext = createContext<Context>({
	parent: {},
});

function useIsInitialRender() {
	const isInitialRender = useRef(true);
	useEffect(() => {
		isInitialRender.current = false;
	}, []);
	return isInitialRender.current;
}

type CSSTransitionParams = {
	show?: boolean;
	appear?: boolean;
	enter?: string;
	enterFrom?: string;
	enterTo?: string;
	leave?: string;
	leaveFrom?: string;
	leaveTo?: string;
	children?: ReactChild;
}

function CSSTransition({
	show,
	enter = "",
	enterFrom = "",
	enterTo = "",
	leave = "",
	leaveFrom = "",
	leaveTo = "",
	appear,
	children,
}: CSSTransitionParams) {
	const enterClasses = enter.split(" ").filter((s) => s.length);
	const enterFromClasses = enterFrom.split(" ").filter((s) => s.length);
	const enterToClasses = enterTo.split(" ").filter((s) => s.length);
	const leaveClasses = leave.split(" ").filter((s) => s.length);
	const leaveFromClasses = leaveFrom.split(" ").filter((s) => s.length);
	const leaveToClasses = leaveTo.split(" ").filter((s) => s.length);

	function addClasses(node: HTMLElement, classes: string[]) {
		classes.length && node.classList.add(...classes);
	}

	function removeClasses(node: HTMLElement, classes: string[]) {
		classes.length && node.classList.remove(...classes);
	}

	return (
		<ReactCSSTransition
			appear={appear}
			unmountOnExit
			in={show}
			addEndListener={(node, done) => {
				node.addEventListener("transitionend", done, false);
			}}
			onEnter={(node: HTMLElement) => {
				addClasses(node, [...enterClasses, ...enterFromClasses]);
			}}
			onEntering={(node: HTMLElement) => {
				removeClasses(node, enterFromClasses);
				addClasses(node, enterToClasses);
			}}
			onEntered={(node: HTMLElement) => {
				removeClasses(node, [...enterToClasses, ...enterClasses]);
			}}
			onExit={(node: HTMLElement) => {
				addClasses(node, [...leaveClasses, ...leaveFromClasses]);
			}}
			onExiting={(node: HTMLElement) => {
				removeClasses(node, leaveFromClasses);
				addClasses(node, leaveToClasses);
			}}
			onExited={(node: HTMLElement) => {
				removeClasses(node, [...leaveToClasses, ...leaveClasses]);
			}}
		>
			{children}
		</ReactCSSTransition>
	);
}

function Transition({ show, appear, ...rest }: CSSTransitionParams) {
	const { parent } = useContext(TransitionContext);
	const isInitialRender = useIsInitialRender();
	const isChild = show === undefined;

	if (isChild) {
		return (
			<CSSTransition
				appear={parent.appear || !parent.isInitialRender}
				show={parent.show!}
				{...rest}
			/>
		);
	}

	return (
		<TransitionContext.Provider
			value={{
				parent: {
					show,
					isInitialRender,
					appear,
				},
			}}
		>
			<CSSTransition appear={appear} show={show} {...rest} />
		</TransitionContext.Provider>
	);
}

export default Transition;
