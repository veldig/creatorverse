import { createClient } from '@supabase/supabase-js';

const URL = 'https://hqdnzbdkrczgtwdfhhhh.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxZG56YmRrcmN6Z3R3ZGZoaGhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1NDAwMTgsImV4cCI6MjA5NDExNjAxOH0.V1S4e4A8YRs0KBV-FHlSLOeP2R_ErWo7i4mpV0f1dYQ';

export const supabase = createClient(URL, API_KEY);
