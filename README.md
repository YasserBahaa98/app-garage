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

These are saved **on your phone only**, not on GitHub, so they're private and work offline.
That also means: if you delete the home-screen icon, clear browser data, or change phones, they're gone.
Tap **Back up notes** now and then and keep the file somewhere safe. **Restore from backup** brings them back.
App Garage shows a reminder bar when your notes have changed and the last backup is 14 days old or more.

## iPhone Shortcuts (optional, iPhone and iPad only)

A **Save with Shortcut** button appears at the bottom of the page on iPhone and iPad.
It sends your notes to a shortcut named **Save Garage**, which writes them to one file in iCloud Drive
(`app-garage-backup.json`, overwritten each time). A second shortcut, **Restore Garage**, reads that file and
opens App Garage with the notes, which asks before replacing anything.

The step-by-step setup is in the page itself, under "Set up the iPhone shortcuts".
(To see those buttons on another device, add `?shortcuts=1` to the page address.)

Things that depend on your phone and weren't tested here: whether iOS asks you to confirm each time a
shortcut starts, and whether the restore opens in the home-screen app or in Safari. The home-screen app and
Safari keep separate notes, so check the notes appear where you expect.
