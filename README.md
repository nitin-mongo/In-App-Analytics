# In-App-Analytics

The demonstration shows how MongoDB Atlas can be used to manage and perform analytics on the data generated during a rocket launch. A typical rocket launch spans an eight hour period from the time the initial countdown begins until the rocket payload is in orbit. During this eight hour window, approximately 1 million metrics are generated per second by sensors capturing the rocket performance.
**Sources of Data :**
launchData - Rocket launch data ( Can be stored in Time-Series collection)
notes collection - Notes created by rocket engineers manually when they want to mark a time period or situation that they want to remember to revisit after the launch has been completed, or automated notes via Atlas triggers when metric goes out of range(bound).
weather Data - stored in a S3 bucket and analyzed in combination with the launch data post launch.

<img width="1062" alt="image" src="https://github.com/nitin-mongo/In-App-Analytics/assets/72134161/8a4beb9b-731b-4d86-86d0-b2f12a4fd531">

**The demonstrate consists of 4 parts (or acts):**

**Atlas Cluster and Data Demonstration of Atlas**, the Atlas cluster deployed for the demonstration, and overview of the document model for two main Atlas collections used to store the launch data: launchData and notes.

**Real-time analytics** Demonstration of how MongoDB can be used to perform real-time analytics on the data during launch.

Compass is used to review a number of aggregation queries on the launch data and notes collections.
A charts dashboard is displayed to show how Charts visualizations can be created to analyze the same data
Search analytics This section of the demonstration focuses on two areas:

How **Atlas Search** can be used for analytics (facet counts associated with search queries)
How various DDP platform can be used in combination. This is shown by showing a simple react app that supports Atlas search with faceted navigation in combination with Charts. Entering a search phrase, selecting facets, and clicking on search results (notes) updates the time range for the charts shown in the previous step to the time context of the selected note.

**Post launch analytics** over a variety of MongoDB and non-MongoDB data sources. This section shows how Atlas Data Lake, Data Federation, and Atlas SQL can be used to analyze data post launch. Data is pulled from three data sources: Atlas cluster, Atlas Data Lake, and Data Federation. Data Lake is configured to take daily snapshots of the Atlas cluster so it has a historical record of previous launches. Data Federation is used to create a federated endpoint that allows for the combined analysis of the current launch, historical launches along with the weather data stored in S3. During the demo, this data is analyzed using Compass (MQL), DBeaver (SQL), and Tableau.

**DEMO SETUP
Atlas Configuration**

The Atlas configuration components consist of:

M30 replica set plus a M50 analytics node

There are two main collections used in the demo under aerospace database:

launchData
notes

This data can be found in the file ~/data/atlas/aerospace.archive.gz and restored to a database using the command below:

mongorestore --uri $CONNECTION_STR --username $DBUSER --password $DBUSER_PASS --gzip --archive=./data/atlas/aerospace.archive.gz

Data Lake pipeline to archive the aerospace database, launchData collection

Data Federation configuration combining three data sources:
Atlas cluster
Data Lake
S3 bucket with weather data

Charts Dashboard to review launch data

Triggers to generate notes for out of bound parameters (the code for this is fake, e.g., doesn't really work)

Atlas Search indexes to facilitate the note search and corresponding facets.

Tableau connected to the Data Federation Endpoint using Tableau connector

DBeaver to execute SQL queries against the Data Federation Endpoint (Atlas SQL).

**Start of DEMO**

**Step 1 Showcase Atlas cluster Architecture with Analytics node & Showcase collections data in MongoDB compass**

<img width="552" alt="image" src="https://github.com/nitin-mongo/In-App-Analytics/assets/72134161/d982671c-6b6a-465f-a330-ac00c601a643">

<img width="652" alt="image" src="https://github.com/nitin-mongo/In-App-Analytics/assets/72134161/bb4d866d-2b42-449e-9f6a-ce293592b4af">

<img width="649" alt="image" src="https://github.com/nitin-mongo/In-App-Analytics/assets/72134161/09009dee-2aa6-46dc-a48b-cf44bf9ba6a8">

<img width="800" alt="image" src="https://github.com/nitin-mongo/In-App-Analytics/assets/72134161/c0de03c8-ff1f-4c17-a60f-b652211f5105">

<img width="785" alt="image" src="https://github.com/nitin-mongo/In-App-Analytics/assets/72134161/c96e2065-feb8-4c41-99d4-ea41d573038c">

Here we can talk about **MongoDB flexibility** to handle data from different types of rocket launches, In relational world we would have to create different tables for all types of rocket and would then need to do join to see combined view But in MongoDB we can have everything in single collection and makes easy for querying.

We can also talk about **Time-series collection** here as launchData is suited for timeseries collection and showcase compression provided and benefits of time-series collection.

**Step 2 - Real Time Analytics**

Components Used:
* Compass
* Aggregation pipeline
* Charts
* Atlas Triggers ( Change Streams )





