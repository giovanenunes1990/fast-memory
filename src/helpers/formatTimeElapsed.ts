export const formatTimeElapsed = (secounds: number) => {

    let minutes = Math.floor(secounds / 60);
    secounds -= (minutes * 60);

    let secString = `${secounds < 10 ? '0' + secounds : secounds}`;
    let minString = `${minutes < 10 ? '0' + minutes : minutes}`;

    return `${minString}: ${secString}`;

}