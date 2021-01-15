# jsfetch

A neofetch-esque tool powered by JS and Deno.

## Using

First you install [deno](https://github.com/denoland/deno).

Then simply run it with `deno run --allow-read jsfetch.js`.

`--allow-read` is required to allow the script to read files.

Optional arguments:
- `a` or `about` -- display description, version, and license
- `h` or `help` -- display the help message

## Output

Due to async, output lines will be jumbled until I can figure<br>
out how to either get rid of async or make the output wait.

`$ deno run --allow-read jsfetch.js a`:
```
jsfetch -- a neofetch-esque tool powered by JS and Deno
-------------------------------------------------------
Version: 0.0.1 (if-statements-suck)

License:
--------
EVERYTHING UNDER THIS LICENSE IS PLACED INTO THE PUBLIC DOMAIN
ALL COPYRIGHTS (AND BY EXTENSION THEIR RESTRICTIONS) ARE HEREBY REVOKED

IN JURISDICTIONS THAT DO NOT ALLOW YOU TO REVOKE COPYRIGHT, USE THESE AS THE CONDITIONS:
- THERE ARE NO RESTRICTIONS
- YOU CAN LITERALLY DO WHATEVER YOU WANT
```

`$ deno run --allow-read jsfetch.js h`
```
`a` or `about` -- display version and license
`h` or `help` -- display the help message
```

`$ deno run --allow-read jsfetch.js`
```
Distro: Gentoo/Linux
Kernel: 5.4.80
Hostname: gentoo
```
