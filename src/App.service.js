import { listOfAvailableBackup, restoreBackup, addBackupDate } from "./backend/mongo";

export function onClick(date) {
    if (listOfAvailableBackup().includes(formatDate(date))) {
        restoreBackup(date);
        alert("Backup found for the selected date!");
    } else {
        addBackupDate(formatDate(date));
        alert("No backup found for the selected date!");
    }
} 

export function formatDate(date) {
    return date.toLocaleDateString("en-CA"); // Outputs YYYY-MM-DD
}

