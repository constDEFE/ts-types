import type { GetEvents, GetHandlers } from "./__utils__";

/**
 * ```ts
 * type Props = {
 *   onClick: EventHandlerFor<"button", "click">
 *   onMouseLeave: EventHandlerFor<"button", "mouseLeave">
 * }
 * ```
 * @inspired https://habr.com/ru/articles/783858/
 */
export type EventHandlerFor<
	Element extends keyof JSX.IntrinsicElements,
	Event extends GetEvents<Element>
> = JSX.IntrinsicElements[Element][`on${Capitalize<Event>}` extends GetHandlers<Element>
	? `on${Capitalize<Event>}`
	: never];
