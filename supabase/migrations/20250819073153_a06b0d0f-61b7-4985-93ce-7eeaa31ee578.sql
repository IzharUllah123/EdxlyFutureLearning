-- Fix the security vulnerability: Restrict profile access so users can only view their own profile and teachers can view their students' profiles

-- Drop the current overly permissive policy
DROP POLICY IF EXISTS "Users can view all profiles" ON public.profiles;

-- Create restricted policies
CREATE POLICY "Users can view own profile" 
ON public.profiles 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- Teachers and admins can view student profiles in their grade
CREATE POLICY "Teachers can view student profiles" 
ON public.profiles 
FOR SELECT 
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.profiles teacher
    WHERE teacher.user_id = auth.uid() 
    AND teacher.role IN ('teacher', 'admin')
  )
);