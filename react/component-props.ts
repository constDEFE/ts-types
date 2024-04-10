/**
 * IMO a nicer alternative to react's
 * ```ts
 * type Props = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
 * ```
 * and it also comes with 'ref' and 'key' props
 *
 * @default
 */
type Props = ComponentProps<"a">;
