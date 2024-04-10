import type { GetEvents, GetHandlers } from "./__utils__";

/**
 * ```ts
 * const handleButtonClick = (event: EventFor<"button", "click">) => {}
 * const handleMouseLeave = (event: EventFor<"button", "mouseLeave">) => {}
 * ```
 * @inspired https://habr.com/ru/articles/783858/
 */
export type EventFor<
	Element extends keyof JSX.IntrinsicElements,
	Event extends GetEvents<Element>
> = JSX.IntrinsicElements[Element][`on${Capitalize<Event>}` extends GetHandlers<Element>
	? `on${Capitalize<Event>}`
	: never] extends ((e: infer HandlerEvent) => unknown) | undefined
	? HandlerEvent
	: never;
