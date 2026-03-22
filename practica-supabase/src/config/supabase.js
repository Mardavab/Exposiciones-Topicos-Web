const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://jvjooaocnclpxyoeywlw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2am9vYW9jbmNscHh5b2V5d2x3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5NjY4NzgsImV4cCI6MjA4OTU0Mjg3OH0.GK_n61E3bTq5uDE9Y5_nkIC48Cp9-gch3vK9ZWLflPo';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;