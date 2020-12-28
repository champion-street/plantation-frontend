import history from '../services/history';

export function navigate(path: string, avoidScrollToTop: boolean = false): void {
    history.push(path);

    if (!avoidScrollToTop) {
        window.scrollTo(0, 0);
    }
}

export function colorCalculator(wateringDeadLine: Date, lastWatered: Date): string {
    const nowTime = Math.floor((new Date(Date.now())).getTime() / 10000);
    const wateredTime = Math.floor(lastWatered.getTime() / 10000);
    const deadlineTime = Math.floor(wateringDeadLine.getTime() / 10000);
    const hundredPercent = deadlineTime - wateredTime;

    const onePercent = Math.floor(hundredPercent / 100);
    const actualPercent =  Math.floor((nowTime - wateredTime) / onePercent);
    console.group('Percentages: ')
        console.log('hundredPercent: ', hundredPercent);
        console.log('onePercent: ', onePercent);
        console.log('actual: ', Math.floor(nowTime - wateredTime) );
        console.log('actualPercent: ', actualPercent);
    console.groupEnd();
    if (actualPercent > 100) {
        return 'hundred';
    } else if (actualPercent >= 0 && actualPercent <= 10) {
        return 'zero';
    } else if (actualPercent > 10 && actualPercent <= 20) {
        return 'ten';
    } else if (actualPercent > 20 && actualPercent <= 30) {
        return 'twenty';
    } else if (actualPercent > 30 && actualPercent <= 40) {
        return 'thirty'
    } else if (actualPercent > 40 && actualPercent <= 50) {
        return 'forty'
    } else if (actualPercent > 50 && actualPercent <= 60) {
        return 'fifty'
    } else if (actualPercent > 60 && actualPercent <= 70) {
        return 'sixty'
    } else if (actualPercent > 70 && actualPercent <= 80) {
        return 'seventy'
    } else if (actualPercent > 80 && actualPercent <= 90) {
        return 'eighty'
    } else if (actualPercent > 90 && actualPercent <= 100) {
        return 'ninety';
    }
    return 'fail';
}
