---
title: "FUNverse: An App for Casually Reaching Out to Other Students"
description: "A location-sharing mobile app that helps Future University Hakodate students reach out to one another through location-based awareness."
techStack:
  - Flutter
  - Express.js
  - BLE Beacon
order: 1
---

FUNverse is a location-sharing service that supports communication between students at Future University Hakodate.
I have been involved both as the person who proposed the idea and as the technical lead.

The team has a mission to provide an online platform that enriches student life at Future University Hakodate.
Based on that mission, I proposed the concept of turning university life into an MMORPG-like experience by visualizing the state of people, places, and activities on campus and creating opportunities for spontaneous interaction.

Through team discussions, we focused on the issue that students often do not know where their friends are on campus and need to contact them just to check.
To address this, I planned a location-sharing service that helps students become aware of one another's presence.

On the development side, I worked on a BLE beacon-based proximity detection PoC and backend implementation.
For the BLE beacon PoC, I built a simple verification that detects whether a smartphone is near a specific beacon, and demonstrated it at a presentation event.
For the backend, I implemented an API server using Express.js and SQLite.
I also implemented user authentication integrated with Firebase Authentication, saving and retrieving user profiles, and storing self-location information recognized by the mobile app.
