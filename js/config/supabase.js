const SUPABASE_URL = 'https://yjrpsqttsoawrbrpwifl.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqcnBzcXR0c29hd3JicnB3aWZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwNDE1MzYsImV4cCI6MjA0OTYxNzUzNn0.WD4gWT90GvvIKJRHsK9cIpdtbui4zT6cXDcQjlC_RhI';

// Inicialização do cliente Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
