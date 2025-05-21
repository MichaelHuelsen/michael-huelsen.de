# michael-huelsen.de

This README is work in progress...

## hugo

See documentation at [gohugo.io](https://gohugo.io/).

## helpful hugo commands

run a server showing drafts as well.

```sh
hugo server --buildDrafts
```

run a server showing the production site:

```sh
hugo server
```

create deployment version of the website:

```sh
hugo
```

## hugo themes

1. Create or install a theme:
   - Create a new theme with the command "hugo new theme THEMENAME"
   - Or, install a theme from [themes.gohugo.io](https://themes.gohugo.io/)
2. Edit hugo.toml, setting the "theme" property to the theme name.
3. Create new content with the command "hugo new content SECTION/FILENAME.FORMAT".
4. Start the embedded web server with the command "hugo server --buildDrafts".
