
const availableBackups = ["2025-02-09", "2025-02-19", "2025-02-27"];

export function listOfAvailableBackup() {
    return availableBackups;
} 


export function addBackupDate(date) {
    console.log("Adding backup for date: ", date);
    availableBackups.push(date);
}


export function restoreBackup(date) {
    console.log("Restoring backup for date: ", date);
    return availableBackups.includes(date);
}

