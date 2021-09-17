export interface IPlant {
    id: number | undefined;
    image: string;
    name: string;
    description: string;
    lastWatered: Date;
    wateringDeadline: Date;
    wateringCycle: number;
}

export interface ISeed {
    name: string;
    description: string;
    wateringCycle: number;
}
