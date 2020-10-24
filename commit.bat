

echo off &
timeout /t 5 &
git status & 
git add . --ignore-removal & git commit -m m & git push 

& git status & timeout /t 5 


