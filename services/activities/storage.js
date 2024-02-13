import { getStorage } from "../../storage/storage";


export const saveActivities = async (batch_key, activities) => {
    let storage = await getStorage();
    try {
        await storage.setItem(batch_key, activities);
    } catch (error) {
        console.error('Error saving activities:', error);
    }
};

export const loadActivities = async (batch_key) => {
    let storage = await getStorage();
    try {
        const activities = await storage.getItem(batch_key);
        return activities || [];
    } catch (error) {
        console.error('Error loading activities:', error);
        return [];
    }
};

export const getDayKey = (date) => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are 0-indexed
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}_${month}_${day}`;
    return formattedDate;
}

export const getCurrentDayKey = () => {
    return getDayKey(new Date());
}
