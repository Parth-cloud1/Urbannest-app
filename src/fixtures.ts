import { toggleDeviceStatus } from '../seed/updateDeviceStatus';


export async function bookDevice(deviceId: string) {
    await toggleDeviceStatus(deviceId, 'unavailable');
    console.log(`Device ${deviceId} booked.`);
}

export async function returnDevice(deviceId: string) {
    await toggleDeviceStatus(deviceId, 'available');
    console.log(`Device ${deviceId} returned.`);
}
