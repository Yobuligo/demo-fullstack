export interface IProp<T> {
    index: number;
    name: string;
    value: T[keyof T];
}
