# clean-greader

clean-greader is a tiny tiny rss (1.8+) theme based on the latest Google Reader and inspired by other Google Services.  
**As of 2017/02/14 the theme does not contain tt-rss version information. Please see the [FAQ](https://github.com/naeramarth7/clean-greader#themes-not-displayed-in-the-settings) to properly add the version of tt-rss**  
As of 2013/08/29 the theme is build from scratch to be independent from changes to the tt-rss default.css.  


## Preview
![](img/preview.png)

## Installation
### Using Git
```sh
$ # Assuming, that your tt-rss instance is located at /usr/share/tt-rss
$ cd /usr/share/tt-rss/themes
$ git clone https://github.com/naeramarth7/clean-greader
$ cp clean-greader/wrapper.css clean-greader.css
```

### Manual
1. Download the package using the "Download ZIP" button on the right
2. Copy the clean-greader-master folder into you tt-rss/themes folder (e. g. `/usr/share/tt-rss/themes`) and rename it to clean-greader
3. In `/usr/share/tt-rss/themes` run
```sh
$ cp clean-greader/wrapper.css clean-greader.css
```

## Update
### Using git
```sh
$ # Assuming, that your tt-rss instance is located at /usr/share/tt-rss:
$ cd /usr/share/tt-rss/themes/clean-greader
$ git pull
```

### Manual
Same as Installation - just overwrite the files.

## Custom settings

There is a sample file called `_config.scss.sample` in the themes `css/` folder.
Before running gulp.js tasks, make sure to create this file, since you'll get an error otherwise.

```sh
$ cd /usr/share/tt-rss/themes/clean-greader/css
$ # Either work with a copy...
$ cp _config.scss{.sample,}
$ # ... or link it, if you're fine with the default settings.
$ ln -s _config.scss{.sample,}
```

### Thumbnail for main feed image ( `$small-main-feed-image` )

- type: `boolean`
- default: `true`

Display the first image as a thumbnail to save some space.
If you're using image feeds, this might not be what you want.

### Use fullscreen ( `$use-fullscreen` )

- type: `boolean`
- default: `false`

This enables the theme to use the full page width instead of a limited container width.
Initially, the clean-greader theme was supposed to be used in combined mode and therefore was always fixed to a specific container max-width. In 16.3.0, support for non-combined mode, and therefore also widescreen mode, was added - which might need a bit more space then the regular container's max-width.

### Rebuild the main.css file

After making changes to the settings file (or basically any .scss file), you need to rebuild the css file.

```sh
$ cd /usr/share/tt-rss/themes/clean-greader
$ # Install / update the dev dependencies
$ npm install
$ # Rebuild the .css file
$ gulp styles
```

## Maintenance
As of the "build from scratch" update, the theme is completely written using [SASS/SCSS](http://sass-lang.com/). A tutorial on [Devloping With Sass and Chrome DevTools](http://net.tutsplus.com/tutorials/html-css-techniques/developing-with-sass-and-chrome-devtools/) can be found on net.tutsplus.com.

### Working with sass and gulp.js

```sh
$ cd /usr/share/tt-rss/themes/clean-greader
$ # Install / update the dev dependencies
$ npm install
$ # Run gulp as background task ...
$ gulp watch
$ # ... or let it build the .css file once
$ gulp styles
```

### Building

To prepare the .css file for a pull request, please use the `build` task. This will replace your custom configuration with the default configuration, build the .css file and put your configuration back in place.

```sh
$ gulp build
```

## Support
The clean-greader theme is build on Google Chrome (33) using Arch Linux and tested on Google Chrome (33) as well as Mozilla Firefox (23). These are the only official support browsers, so there will be no guarantee for the usability on other browsers except of those.

## FAQ

### Theme's not displayed in the Settings

As of tiny tiny rss 1.15.3, themes require to provide a version they support. Sadly, tiny tiny rss supports only providing a single specific version number. If this number provided by the theme does not match your tiny tiny rss version, the theme won't be available.  
The version, however, can be changed in the clean-greader.css file created in the `/usr/share/tt-rss/themes/` directory. This file should have the format  
```css
/* supports-version:17.1 */

@import "clean-greader/clean-greader.css";
```
To support a newer version of tt-rss, simply change the version number in the top line.

## Tiny Tiny RSS Settings
| Setting                                          | Value      |
|:------------------------------------------------ |:----------:|
| `Combined feed display`                          | `enabled`  |
| `Automatically expand articles in combined mode` | `disabled` |
| `Show content preview in headlines list`         | `disabled` |

## Screenshots
### Main Page
![](img/preview_02.png)

### Main Settings
![](img/preview_03.png)

### Feed Settings
![](img/preview_04.png)

### Main Page (disabled combined mode, enabled widescreen mode, set `$use-fullscreen: true`)
![](img/preview_full_01.png)
