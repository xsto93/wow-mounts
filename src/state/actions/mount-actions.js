export const SAVE_MOUNTS = "SAVE_MOUNTS";

export function saveMounts(data) {
    return { type: SAVE_MOUNTS, payload: data?.results }
}