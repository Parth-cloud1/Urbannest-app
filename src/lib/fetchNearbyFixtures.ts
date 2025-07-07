import { supabase } from '../supabaseClient';
import { getDistanceFromLatLng } from './getDistance';



export async function fetchNearbyFixtures(userLat: number, userLng: number) {
  const { data: fixtures, error } = await supabase.from('fixtures').select('*');

  if (error) {
    console.error('Error fetching fixtures:', error);
    return [];
  }

  const nearestFixtures = fixtures
    .map((f: any) => ({
      ...f,
      distance: getDistanceFromLatLng(userLat, userLng, f.lat, f.lng)
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 10); // return top 10

  return nearestFixtures;
}
