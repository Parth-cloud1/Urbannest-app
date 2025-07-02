import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://wmyflwebdgqvzhdkcaal.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndteWZsd2ViZGdxdnpoZGtjYWFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNDk5MzAsImV4cCI6MjA2NjkyNTkzMH0.RQs7b9iWKLxcaEcKFAc-G-cYCrUNZfOHHscMnwZwdCU'
)
