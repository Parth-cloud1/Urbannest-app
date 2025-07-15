import fixtures from '../seed/fixtures.json';
import devices from '../seed/devices.json';
import { createClient } from '@supabase/supabase-js';



  const supabaseUrl = 'https://xyzcompany.supabase.cohttps://wmyflwebdgqvzhdkcaal.supabase.co';
  const supabaseKey = 'your-service-role-keyeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndteWZsd2ViZGdxdnpoZGtjYWFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNDk5MzAsImV4cCI6MjA2NjkyNTkzMH0.RQs7b9iWKLxcaEcKFAc-G-cYCrUNZfOHHscMnwZwdCU';

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
  console.log('🌱 Seeding fixtures...');
  for (const fixture of fixtures) {
    const { error } = await supabase.from('fixtures').insert(fixture);
    if (error) console.error('Fixture insert error:', error);
  }

  console.log('🌱 Seeding devices...');
  for (const device of devices) {
    const { error } = await supabase.from('devices').insert(device);
    if (error) console.error('Device insert error:', error);
  }

  console.log('✅ Done seeding!');
}

seed();
