To clone project:
https://github.com/rungta08/byjus-test.git

After cloning project get into project directory on terminal and run command:
npm install

Run server:
npm start

Run tests:
npm run test

Assumptions:

-Experince:
    1. Jobs with experinec as null as considered Entry Level Jobs

-Search based on Experience:
    1. If User selects All Levels all the jobs are shown
    2. If User selects Entry Level jobs with 0 to <1 year of Experience as well as jobs with Fresher and null as experience are shown
    3. If User selects Associate jobs with 1 to <4 years of Experience are shown
    4. If User selects Mid-Senior jobs with 4 to <8 years of Experience are shown
    5. If User selects Executive jobs with 8 && above years of Experience are shown

-Search based on Location:
    1. If User selects Anywhere in India all the jobs are shown
    2. Else selected location wise are shown

-Display Jobs:
    1. Expiring jobs are shown with tag at botton of each jobs
    2. Null Fields are removed while displaying each job