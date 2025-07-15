
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://wmyflwebdgqvzhdkcaal.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndteWZsd2ViZGdxdnpoZGtjYWFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNDk5MzAsImV4cCI6MjA2NjkyNTkzMH0.RQs7b9iWKLxcaEcKFAc-G-cYCrUNZfOHHscMnwZwdCU');

export async function toggleDeviceStatus(deviceId: string, status: 'available' | 'unavailable') {
    const { data, error } = await supabase
        .from('devices')
        .update({ status })
        .eq('id', deviceId);

    if (error) console.error('Status update failed:', error);
    else console.log('Device status updated:', data);
}
