import {createClient} from '@supabase/supabase-js';

export const supabaseUrl = 'https://wxvrhybgvzeysvlsncik.supabase.co';

//This API key is safe to use in a browser if you have enabled Row Level Security for your tables and configured policies.
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4dnJoeWJndnpleXN2bHNuY2lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQyMTU4NTcsImV4cCI6MjAxOTc5MTg1N30.tclhTLDiuG7z2VwusqO7zh8sPSX7NTgKdfRGa2ljmmk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
