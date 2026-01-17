-- Run these commands in your Supabase SQL Editor to fix the 401 Unauthorized error.

-- 1. Enable Row Level Security (good practice to keep it enabled, but define policies)
ALTER TABLE guestbook ENABLE ROW LEVEL SECURITY;

-- 2. Allow anyone (anon) to VIEW messages
CREATE POLICY "Enable read access for all users" 
ON "public"."guestbook"
AS PERMISSIVE
FOR SELECT 
TO public 
USING ( true );

-- 3. Allow anyone (anon) to POST messages
CREATE POLICY "Enable insert for all users" 
ON "public"."guestbook"
AS PERMISSIVE
FOR INSERT 
TO public 
WITH CHECK ( true );
