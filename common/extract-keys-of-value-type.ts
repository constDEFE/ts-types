/** */
/**
 * A real-world example to get only keys of values of type number
 * ```ts
 * type Props = {
 *   data: ChartData<T>[];
 *   field: ExtractKeysOfValueType<Props["data"][number], number>;
 * }
 * ```
 * @source https://stackoverflow.com/a/61476921
 */
export type ExtractKeysOfValueType<T, K> = { [I in keyof T]: T[I] extends K ? I : never }[keyof T];
