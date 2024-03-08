import { Article } from "@/constants/Models";
import * as FileSystem from "expo-file-system";
import * as SQLite from "expo-sqlite";

// saveArticle saves a full SCP article already retrieved by fetchArticle into the device's local
// database.
export async function saveArticle(data: Article) {}

export async function openDatabase() {
    const dbPath = `${FileSystem.documentDirectory}/SQLite/db.sqlite`;
    const shouldInitialize = !(await FileSystem.getInfoAsync(dbPath)).exists;

    const db = SQLite.openDatabase("db.sqlite");
    if (shouldInitialize) initDatabase();

    return db;
}

export async function initDatabase() {
    const migrations = [require("./migrations/initial.sql")];
    console.log(migrations);
}
