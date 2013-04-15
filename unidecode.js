/**
 * Unidecode takes UTF-8 data and tries to represent it in US-ASCII characters (i.e., the universally displayable characters between 0x00 and 0x7F).
 * The representation is almost always an attempt at transliteration -- i.e., conveying, in Roman letters, the pronunciation expressed by the text in
 * some other writing system.
 *
 * The tables used (in data) are converted from the tables provided in the perl library Text::Unidecode (http://search.cpan.org/dist/Text-Unidecode/lib/Text/Unidecode.pm)
 * and are distributed under the perl license
 *
 * @author Francois-Guillaume Ribreau
 *
 * Based on the port of unidecode for php
 */

var tr = {};
var utf8_rx = /(?![\x00-\x7F]|[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3})./g;

module.exports = function(str) {
  return str.replace(utf8_rx, unidecode_internal_replace);
};

function unidecode_internal_replace(match) {
  var utf16 = utf8_to_utf16(match);

  if (utf16 > 0xFFFF) {
    return '_';
  } else {

    var h = utf16 >> 8;
    var l = utf16 & 0xFF;

    // (18) 18 > h < 1e (30)
    if (h > 24 && h < 30) return '';

    //(d7) 215 > h < 249 (f9) no supported
    if (h > 215 && h < 249) return '';

    if (!tr[h]) {
      try {
        tr[h] = require("./data/x" + dec2hex(h) + ".js");
      } catch (e) {
        // console.error("Unidecode file not found for h=", h);
        return '';
      }
    }

    return tr[h][l];
  }
};

function dec2hex(i) {
  return (i + 0x100).toString(16).substr(-2);
}

function utf8_to_utf16(raw) {
  while (Array.isArray(raw)) raw = raw[0];

  switch (raw.length) {
  case 1:
    return ord(raw);

    // http://en.wikipedia.org/wiki/UTF-8
  case 2:
    var b1 = ord(raw.substr(0, 1));
    var b2 = ord(raw.substr(1, 1));

    x = ((b1 & 0x03) << 6) | (b2 & 0x3F);
    y = (b1 & 0x1C) >> 2;

    return (y << 8) | x;

  case 3:
    var b1 = ord(raw.substr(0, 1));
    var b2 = ord(raw.substr(1, 1));
    var b3 = ord(raw.substr(2, 1));

    x = ((b2 & 0x03) << 6) | (b3 & 0x3F);
    y = ((b1 & 0x0F) << 4) | ((b2 & 0x3C) >> 2);

    return (y << 8) | x;

  default:
    var b1 = ord(raw.substr(0, 1));
    var b2 = ord(raw.substr(1, 1));
    var b3 = ord(raw.substr(2, 1));
    var b4 = ord(raw.substr(3, 1));

    x = ((b3 & 0x03) << 6) | (b4 & 0x3F);
    y = ((b2 & 0x0F) << 4) | ((b3 & 0x3C) >> 2);
    z = ((b1 & 0x07) << 5) | ((b2 & 0x30) >> 4);

    return (z << 16) | (y << 8) | x;
  }
}

/* From php.js */

function ord(string) {
  // Returns the codepoint value of a character
  //
  // version: 1109.2015
  // discuss at: http://phpjs.org/functions/ord
  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   bugfixed by: Onno Marsman
  // +   improved by: Brett Zamir (http://brett-zamir.me)
  // +   input by: incidence
  // *     example 1: ord('K');
  // *     returns 1: 75
  // *     example 2: ord('\uD800\uDC00'); // surrogate pair to create a single Unicode character
  // *     returns 2: 65536
  var str = string + '',
    code = str.charCodeAt(0);
  if (0xD800 <= code && code <= 0xDBFF) { // High surrogate (could change last hex to 0xDB7F to treat high private surrogates as single characters)
    var hi = code;
    if (str.length === 1) {
      return code; // This is just a high surrogate with no following low surrogate, so we return its value;
      // we could also throw an error as it is not a complete character, but someone may want to know
    }
    var low = str.charCodeAt(1);
    return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
  }
  if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
    return code; // This is just a low surrogate with no preceding high surrogate, so we return its value;
    // we could also throw an error as it is not a complete character, but someone may want to know
  }
  return code;
}
