async function distro(decoder) {
  var osrelease_pre = await Deno.readFile('/etc/os-release')
  // Decode the osrelease file
  var osrelease = decoder.decode(osrelease_pre);
  // Split it into an array using newlines as the delimiter
  var osrelease_array = osrelease.split("\n");
  // Grab the third element (which should be the PRETTY_NAME field)
  var prettyname_string = osrelease_array[2];
  // Split it into an array using "=" as the delimiter
  var prettyname_array = prettyname_string.split("=");
  // Remove all double quotation marks
  var prettyname = prettyname_array[1].replace(/"/g, "");
  return console.log("Distro: " + prettyname);
}

// Read a file, for use with any one line files
// (such as `/etc/hostname` or `/proc/sys/kernel/osrelease`)
async function readfile(decoder, file, title) {
  var thefile = await Deno.readFile(file);
  var output = decoder.decode(thefile);
  return console.log(title + output.trim());
}

function main() {
  if (Deno.args[0] == "a" || Deno.args[0] == "about") {
    console.log(  "jsfetch -- a neofetch-esque tool powered by JS and Deno\n"
                + "-------------------------------------------------------\n"
                + "Version: 0.0.1 (if-statements-suck)\n\n"
                + "License:\n"
                + "--------\n"
                + "EVERYTHING UNDER THIS LICENSE IS PLACED INTO THE PUBLIC DOMAIN\n"
                + "ALL COPYRIGHTS (AND BY EXTENSION THEIR RESTRICTIONS) ARE HEREBY REVOKED\n\n"
                + "IN JURISDICTIONS THAT DO NOT ALLOW YOU TO REVOKE COPYRIGHT, USE THESE AS THE CONDITIONS:\n"
                + "- THERE ARE NO RESTRICTIONS\n"
                + "- YOU CAN LITERALLY DO WHATEVER YOU WANT");
    Deno.exit(0);
  } else if (Deno.args[0] == "h" || Deno.args[0] == "help") {
    console.log(  "`a` or `about` -- display version and license\n"
                + "`h` or `help` -- display the help message");
    Deno.exit(0);
  } else {
    var decoder = new TextDecoder('utf-8');
    // Distro
    distro(decoder);
    // Hostname
    readfile(decoder, "/etc/hostname", "Hostname: ");
    // Kernel version
    readfile(decoder, "/proc/sys/kernel/osrelease", "Kernel: ");
  }
}

main();