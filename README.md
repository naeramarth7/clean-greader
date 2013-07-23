# clean-greader

clean-greader is a tiny tiny rss (1.9) theme based on the latest Google Reader and inspired by other Google Services.

## Screenshot
![](https://raw.github.com/naeramarth7/clean-greader/master/clean-greader-img/preview.png)

## Installation
### Using Git
Assuming, that your tt-rss instance is located at /usr/share/tt-rss:
```bash
cd /usr/share/tt-rss/themes
git clone https://github.com/naeramarth7/clean-greader
ln -s ./clean-greader/clean-greader.css ./clean-greader.css
ln -s ./clean-greader/clean-greader-css ./clean-greader-css
ln -s ./clean-greader/clean-greader-img ./clean-greader-img
```

### Manual
1. Download the package using the "Download ZIP" button on the right
2. Copy the content of the clean-greader-master folder into you tt-rss/themes folder (e. g. /usr/share/tt-rss/themes)

## Update
### Using git
Assuming, that your tt-rss instance is located at /usr/share/tt-rss:
```bash
cd /usr/share/tt-rss/themes/clean-greader
git pull
```

### Manual
Same as Installation - just overwrite the files.

## Tiny Tiny RSS Settings
| Setting                                          | Value      |
|:------------------------------------------------ |:----------:|
| `Combined feed display`                          | `enabled`  |
| `Automatically expand articles in combined mode` | `disabled` |
| `Show content preview in headlines list`         | `disabled` |
