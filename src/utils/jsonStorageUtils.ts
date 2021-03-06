import JsonStorageUtils from "fs";
import { Session } from "../types";
import { fileLocation } from "./fileUtils";

function getSessionsFromDB(filename: string) {
    const data = JsonStorageUtils.readFileSync(fileLocation(filename));
    return JSON.parse(data.toString()) as Session[];
}

export async function createStorageFile(filename: string) {
    JsonStorageUtils.writeFileSync(fileLocation(filename), JSON.stringify([]));
}

/** Saves new session to db, ingores if new is already exists */
export async function saveSession(session: { keyword: string; id: string }, filename: string) {
    let sessions = getSessionsFromDB(filename);

    if (sessions.find((s) => s.keyword == session.keyword)) {
        sessions = sessions.filter((s) => s.keyword != session.keyword);
    }

    sessions.push(session);

    JsonStorageUtils.writeFileSync(fileLocation(filename), JSON.stringify(sessions), {
        flag: "w+",
    });
}

export function deleteSession(keyword: string, filename: string) {
    let sessions = getSessionsFromDB(filename);

    sessions = sessions.filter((s) => s.keyword != keyword);

    JsonStorageUtils.writeFileSync(fileLocation(filename), JSON.stringify(sessions), {
        flag: "w+",
    });
}

export function getSession(keyword: string, filename: string): Session | null {
    let sessions = getSessionsFromDB(filename);

    const s = sessions.find((s) => s.keyword == keyword);
    if (s) return s;
    else return null;
}
