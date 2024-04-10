export type GetHandlers<
	Tag extends keyof JSX.IntrinsicElements,
	Attributes = keyof JSX.IntrinsicElements[Tag]
> = Extract<Attributes, `on${string}`>;

export type GetEvents<
	Element extends keyof JSX.IntrinsicElements,
	Attributes = keyof JSX.IntrinsicElements[Element],
	Handlers = Extract<Attributes, `on${string}`>
> = Handlers extends `on${infer Event}` ? Uncapitalize<Event> : never;
