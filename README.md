This is a Next.Js 16 Project that uses atomic structure principle in order to create a sales dashboard.

To use the project, open the project hosted by vercel and then navigate through the dashboard using the labeled buttons.

Styles were created using Tailwind CSS & DaisyUI.
Atomic components were bundled together to create molecules, and molecules were bundled together to create organisms.

Sales Dataset was obtained from Kaggle in the form of CSV and then converted into JSON. The JSON elements were then copied and pasted into sales.ts where data was cleanly sorted into an array of objects. The sorted array was exported and used by Bar Charts & Line Charts.
In total there are 4 Charts that can be displayed using the dasboard:

-A Bar Chart that displays total sales across 2016,2017 & 2018 (Kaggle data for 2022, 2023, 2024 was not available).

-A Bar Chart that displays comparison of products that were sold across the three years.

-A Line Chart that displays total sales across 2016,2017 & 2018.

-A Line Chart that displays comparison of products that were sold across the three years.

External Libraries used include:
-DaisyUI
-FontSource
-motion
-Recharts

Agents used include:
-Windurf Free Tier: Inline Code Suggestions.
-Github Copilot: Code revisions and bug fixing.
