# App Garage

My apps, my app ideas, and a to-do list for each app, in one page on my phone.

**Open it:** https://yasserbahaa98.github.io/app-garage/

## Save it on your phone

- **iPhone (Safari):** open the page, tap Share, then **Add to Home Screen**.
- **Android (Chrome):** open the page, tap the ⋮ menu, then **Add to Home screen** or **Install app**.

Always open it from the home-screen icon. That keeps your notes in one place.

## How new apps get added

Nothing to do. Any of your repos with **GitHub Pages turned on** shows up automatically:
- the name comes from the repo name (`night-line` becomes "Night Line"),
- the description comes from the repo's **About** text on GitHub.

To give an app a better description, edit the repo's About box on GitHub (the ⚙ next to "About").

### apps.txt (optional)

Only for apps GitHub can't see (a private repo, or an app hosted elsewhere such as Cloudflare),
or to give an app a nicer name. Three lines per app, with an empty line between apps:

```
Name: My New App
Link: https://example.com/my-new-app/
About: One short sentence about what it does.
```

## Ideas and to-dos

- **Ideas tab:** write down new app ideas. Tick one when it's built or dropped.
- **To-dos button on each app:** enhancements for that app.

Notes are always saved on the device first, so they work offline. With **sync** turned on (below) they are
also saved to the repo and shared between your devices.

### Sync between devices (optional)

> **Privacy:** synced notes are stored in a **public** file, `notes.json` on the `notes` branch of this repo.
> Anyone can read them. Don't put anything private in your notes.

How it works:
- Notes go in `notes.json` on a separate branch called `notes`, so saving a note never rebuilds the page.
- Each device keeps its own copy and merges with the repo's copy. The most recently changed version of each note wins.
- Adding, ticking and deleting notes saves by itself a moment later. If you're offline, it syncs when you're back.
- A deleted note leaves an empty marker (no text) for 30 days so other devices learn it was deleted.
- Restoring a backup makes the repo match the backup.

To turn it on, open **Turn on sync** at the bottom of the page and follow the steps. In short, make a fine-grained
GitHub token for **only** this repo with **Contents: Read and write**, and paste it into the page on each device.
The token stays in that browser. Anyone who gets into it could use the token to change this repo, so pick a short expiry.
Tokens expire. When GitHub rejects it, the page says so. Make a new one and connect again.

To clear old note history from the repo, replace the `notes` branch with a single fresh commit.

### Backup file (always available)

Tap **Back up notes** now and then and keep the file somewhere safe. **Restore from backup** brings it back.
App Garage shows a reminder bar when your notes have changed and the last backup is 14 days old or more.
With sync on, a successful sync counts as a backup.
If you don't use sync, notes live only in that browser: deleting the home-screen icon, clearing browser data or
changing phones loses them.
