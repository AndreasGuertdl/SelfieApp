import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function openDb() {
    return open ({
        filename: '../database.db', //onde irá criar o arquivo e o seu nome
        driver: sqlite3.Database
    })
};