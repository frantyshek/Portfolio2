-- Create RLS policy to restrict SELECT access to contact messages
-- Only authenticated users with admin role should be able to read contact messages
CREATE POLICY "Only admins can read contact messages" 
ON public.contact_messages 
FOR SELECT 
TO authenticated
USING (false);  -- For now, no one can read until admin system is implemented

-- Add a comment to the table explaining the security restriction
COMMENT ON TABLE public.contact_messages IS 'Contact form submissions - SELECT access restricted to prevent data theft. Only INSERT allowed for anonymous users.';