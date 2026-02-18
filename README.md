# Client-Side Fetching (App Router)

Client-side fetching is done in browser using "use client".
We use useEffect and useState to fetch data after component loads.
Data is fetched after page render, so user may see loading first.
Used for dashboards, search and interactive UI.

# Server Components (App Router)

Server components run on the server by default in App Router.
Data can be fetched directly inside async component using fetch().
HTML is generated with data before sending to browser, improving SEO and performance.
No need of useEffect or "use client".

# ISR using generateStaticParams

ISR (Incremental Static Regeneration) allows static pages to update automatically.
generateStaticParams() pre-generates dynamic routes at build time.
revalidate property regenerates page after given time in background.
Used for blog, product and content websites where data changes occasionally.# feb-18-part2-
