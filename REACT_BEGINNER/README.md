# AIPlaylistPal (Pre-Alpha)
A full-stack application utilizing the open YouTube API and GPT3 api's to generate and upload AI generated playlists to a user's YouTube Account.

### Full Stack Diagram
![stack](https://github.com/TarikVu/imgs/blob/main/AIPlayListPal/Stack.PNG)

## Table of Contents
1. [Features](#feats)
9. [Appendix](#apdx)

## <a name="feats"></a> Features
### Core Functionalites
Utilize these open api's to create and upload a generated playlist onto the user's Youtube account:
- [YouTube](https://developers.google.com/youtube/v3/docs) 
- [OpenAPI (GPT3)](https://platform.openai.com/)

### JSON server
Under the "data" directory we are utilizing a db.json file to set up a lightweight mock database for testing purposes.
upon further development, it may be beneficial to set up an actual database depending if this application requires 
one or not for its purposes.


*JSON server will automatically make a unique ID upon a post request.*

### Planned Functionality
- Integrate the [Spotify Open API](https://developer.spotify.com/documentation/web-api) to lift playlists from spoitfy and upload the playlist to YouTube.


## <a name="apdx"></a> Appendix 

- [React Developer Tools for Chrome](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en-US&utm_source=ext_sidebar)

- [JSON server tutorial](https://www.youtube.com/watch?v=mAqYJF-yxO8&list=PL4cUxeGkcC9i2v2ZqJgydXIcRq_ZizIdD&index=2)


Development Notes
---
>[!Note]
>This section includes development notes for commands and bugs (to be turned into issues) during development.

### npm & npx Commands for the console
- *npm run start* | starts app in local browser.
- *ctrl c* (in terminal) | stops the local insance
- *npm install* | checks package.json to download the dependencies from node_modules
- *npm install react-router-dom@5* | installs react router v5.
- *npx json-server --watch data/db.json -- port 8000* | spins up the json server using db.json contents on port 8000

### node_modules
Holds the dependencies for the project, including react itself. This folder is part of gitignore by default due to it's large size.
When downloading react projects from git, we will need to reinstall the dependencies.

### React Router Version 5 is being used.
*Update from 5 to 6 later on.  5 is being utilized for tutorial purposes.*

What is the React Router?  Traditional websites constantly send requests to the server to navigate the pages.  In react the js bundle is sent with the homepage 
on startup and requests to navigate pages are handled with the router locally.  This speeds up performance, lightens server load and makes the website feel more snappy. 

// video tutorial that wraps up node and express:
https://www.youtube.com/watch?v=bdHE2wHT-gQ&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=5