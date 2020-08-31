import history from '../services/history';

export function navigate(path: string, avoidScrollToTop: boolean = false): void {
    history.push(path);

    if (!avoidScrollToTop) {
        window.scrollTo(0, 0);
    }
}