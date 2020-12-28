import {IPlant} from "./interfaces";

export const examplePlants: IPlant[] = [
    {
        id: 1,
        name: 'Monstrea',
        description: 'Nagyon szep, levelei hasitottak',
        image: './images/monstrea.jpg',
        isWatered: false,
        lastWatered: new Date('12/26/2020'),
    }, {
        id: 2,
        name: 'Futoka',
        description: 'Ez is szep, levelei futnak',
        image: './images/futoka.jpg',
        isWatered: false,
        lastWatered: new Date('12/24/2020'),
    }, {
        id: 3,
        name: 'Zoldike',
        description: 'Megintcsak szep, leveleinek szele vilagos',
        image: './images/zoldike.jpg',
        isWatered: false,
        lastWatered: new Date('12/25/2020'),
    }
]
