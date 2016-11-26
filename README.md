# Unidecode for NodeJS
-----------------



[![Circle CI](https://img.shields.io/circleci/project/FGRibreau/node-unidecode/master.svg)](https://circleci.com/gh/FGRibreau/node-unidecode) [![Deps](https://img.shields.io/david/FGRibreau/node-unidecode.svg)](https://david-dm.org/FGRibreau/node-unidecode) [![Version](https://img.shields.io/npm/v/unidecode.svg)](http://badge.fury.io/js/unidecode) [![Downloads](http://img.shields.io/npm/dm/unidecode.svg)](https://www.npmjs.com/package/mailchecker) ![extra](https://img.shields.io/badge/actively%20maintained-yes-ff69b4.svg) 

[![Twitter Follow](https://img.shields.io/twitter/follow/fgribreau.svg?style=flat)](https://twitter.com/FGRibreau)  [![available-for-advisory](https://img.shields.io/badge/available%20for%20consulting%20advisory-yes-ff69b4.svg?)](http://bit.ly/2c7uFJq) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/francois-guillaume-ribreau?utm_source=github&utm_medium=button&utm_term=francois-guillaume-ribreau&utm_campaign=github) 

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
