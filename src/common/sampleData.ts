import {IPlant} from "./interfaces";

export const examplePlants: IPlant[] = [
    {
        id: 1,
        name: 'Monstrea',
        description: 'Nagyon szep, levelei hasitottak',
        image: './images/monstrea.jpg',
        lastWatered: new Date('12/26/2020'),
        wateringCycle: 3,
        wateringDeadline: new Date('12/29/2020'),
    }, {
        id: 2,
        name: 'Futoka',
        description: 'Ez is szep, levelei futnak',
        image: './images/futoka.jpg',
        lastWatered: new Date('12/27/2020'),
        wateringCycle: 4,
        wateringDeadline: new Date('12/31/2020'),
    }, {
        id: 3,
        name: 'Zoldike',
        description: 'Megintcsak szep, leveleinek szele vilagos',
        image: './images/zoldike.jpg',
        lastWatered: new Date('12/27/2020'),
        wateringCycle: 3,
        wateringDeadline: new Date('12/30/2020'),
    }
]
