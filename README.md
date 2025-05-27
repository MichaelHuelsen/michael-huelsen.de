# michael-huelsen.de

This README is work in progress...

## init / update submodules

```sh
git submodule update --init
``` 

## hugo

See documentation at [gohugo.io](https://gohugo.io/).

### Windows

```ps1
winget install Hugo.Hugo.Extended
```

### helpful hugo commands

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

create a minified version of the website:

```sh
hugo --gc --minify
```

configuration of rclone

```sh
rclone config
```

deployment with rclone

```sh
rclone sync --interactive public/ <name_of_remote>:<folder_on_remote_server>
```

## hugo themes

1. Create or install a theme:
   - Create a new theme with the command "hugo new theme THEMENAME"
   - Or, install a theme from [themes.gohugo.io](https://themes.gohugo.io/)
2. Edit hugo.toml, setting the "theme" property to the theme name.
3. Create new content with the command "hugo new content SECTION/FILENAME.FORMAT".
4. Start the embedded web server with the command "hugo server --buildDrafts".
