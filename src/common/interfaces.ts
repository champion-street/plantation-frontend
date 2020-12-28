export interface IPlant {
    id: number | undefined;
    image: string;
    name: string;
    description: string;
    isWatered: boolean;
    lastWatered: string | number | Date;
}
