import { getStorage } from "../../storage/storage";


export const saveActivities = async (activities) => {
    let storage = await getStorage();
    try {
        await storage.setItem('activities', activities);
    } catch (error) {
        console.error('Error saving activities:', error);
    }
};

export const loadActivities = async () => {
    let storage = await getStorage();
    try {
        const activities = await storage.getItem('activities');
        return activities || [];
    } catch (error) {
        console.error('Error loading activities:', error);
        return [];
    }
};
