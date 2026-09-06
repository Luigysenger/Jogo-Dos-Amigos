export function shuffle(array) {
    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

export function randomCode(size = 6) {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";

    for (let i = 0; i < size; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
    }

    return code;
}

export function uid() {
    return crypto.randomUUID();
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function copy(text) {
    navigator.clipboard.writeText(text);
}

export function capitalize(text) {
    return text
        .toLowerCase()
        .replace(/\b\w/g, l => l.toUpperCase());
}

export function secondsToText(value) {
    return value + "s";
}
