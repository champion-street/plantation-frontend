export interface IPlant {
    id: number | undefined;
    image: string;
    name: string;
    description: string;
    lastWatered: Date;
    wateringDeadline: Date;
    wateringCycle: number;
}
