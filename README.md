# Unidecode for NodeJS
-----------------

[![Circle CI](https://circleci.com/gh/FGRibreau/node-unidecode.svg?style=svg)](https://circleci.com/gh/FGRibreau/node-unidecode) [![Deps](https://david-dm.org/FGRibreau/node-unidecode.png)](https://david-dm.org/FGRibreau/node-unidecode) [![Version](http://badge.fury.io/js/unidecode.png)](http://badge.fury.io/js/unidecode) [![Downloads](http://img.shields.io/npm/dm/unidecode.svg)](https://www.npmjs.com/package/mailchecker) ![extra](https://img.shields.io/badge/actively%20maintained-yes-ff69b4.svg)

![NPM](https://nodei.co/npm/unidecode.png?downloadRank=true) ![NPM](https://nodei.co/npm-dl/unidecode.png?months=3&height=2)

__Unidecode__ is __JavaScript port__ of the __perl module [Text::Unicode](http://search.cpan.org/~sburke/Text-Unidecode-0.04/lib/Text/Unidecode.pm)__. It takes UTF-8 data and tries to represent it in US-ASCII characters
(i.e., the universally displayable characters between 0x00 and 0x7F). The representation is almost always an attempt at transliteration
-- i.e., conveying, in Roman letters, the pronunciation expressed by the text in some other writing system.

See [Text::Unicode](http://search.cpan.org/~sburke/Text-Unidecode-0.04/lib/Text/Unidecode.pm) for the original README file, including methodology and limitations.

Note that all the files named 'x??.js' in data are derived directly from the equivalent perl file, and both sets of files are distributed under the perl license not the BSD license.

## Installation

    $ npm install unidecode

## Usage

    $ node
    > var unidecode = require('unidecode');
    > unidecode("aéà)àçé");
    'aea)ace'
    > unidecode("に間違いがないか、再度確認してください。再読み込みしてください。");
    'niJian Wei iganaika, Zai Du Que Ren sitekudasai. Zai Du miIp misitekudasai. '

## [Changelog](/CHANGELOG.md)

## Donate

I maintain this project in my free time, if it helped you please support my work via [paypal](https://paypal.me/fgribreau) or [bitcoins](https://www.coinbase.com/fgribreau), thanks a lot!


__I accept pull-request !__
