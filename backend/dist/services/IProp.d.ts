export interface IProp<T> {
    count: number;
    name: string;
    value: T[keyof T];
}
