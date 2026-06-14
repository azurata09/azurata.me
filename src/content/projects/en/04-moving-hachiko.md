---
title: "Moving Hachiko: A Meetup App Showing Relative Position"
description: "A new meetup experience that shows only the other person's direction and distance instead of a map. I served as technical lead for P2HACKS 2022."
techStack:
  - JavaScript
  - Socket.IO
  - Vue.js
  - Materialize
  - Microsoft Azure
order: 4
---

Moving Hachiko is an application built around the theme of future meetups. Instead of deciding an exact place and time, users move by relying only on the other person's direction and distance, creating a meetup experience with an element of chance.

Moving Hachiko is a web application built around the theme of future meetups.
It was developed by a five-person team over nine days for P2HACKS 2022, where it received the Cybozu Award.

Instead of the conventional approach of deciding a detailed place and time, the product aimed to create an experience where users move by relying only on the other person's direction and distance.
By not showing the exact position on a map, we aimed to create a meetup experience with an element of chance.

I served as the technical lead and mainly worked on the backend.
Location information obtained through the browser Geolocation API was synchronized with Socket.IO, and the backend calculated direction and distance.
Each device received only the other person's direction and distance from itself, rather than the other person's coordinates.

I also created shared documentation about the communication method and related technologies to support short-term team development.
