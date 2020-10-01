generateRandomNumber = (min, max) => {
    if (min > max) {
        throw new Error("max cannot be superior to min!");
    }
    return Math.floor(Math.random() * (max - min)) + min;
}