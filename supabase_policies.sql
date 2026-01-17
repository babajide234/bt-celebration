-- Run these commands in your Supabase SQL Editor to fix schema errors.

-- 0. Add missing relationship column if it doesn't exist
ALTER TABLE guestbook ADD COLUMN IF NOT EXISTS relationship text;

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
