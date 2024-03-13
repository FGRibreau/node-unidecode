# Unidecode for NodeJS
-----------------



[![Version](https://img.shields.io/npm/v/unidecode.svg)](http://badge.fury.io/js/unidecode) [![Downloads](http://img.shields.io/npm/dm/unidecode.svg)](https://www.npmjs.com/package/mailchecker) ![extra](https://img.shields.io/badge/actively%20maintained-yes-ff69b4.svg) 

[![Twitter Follow](https://img.shields.io/twitter/follow/fgribreau.svg?style=flat)](https://twitter.com/FGRibreau)  [![available-for-advisory](https://img.shields.io/badge/available%20for%20consulting%20advisory-yes-ff69b4.svg?)](http://bit.ly/2c7uFJq) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/francois-guillaume-ribreau?utm_source=github&utm_medium=button&utm_term=francois-guillaume-ribreau&utm_campaign=github)  [![Slack](https://img.shields.io/badge/Slack-Join%20our%20tech%20community-17202A?logo=slack)](https://join.slack.com/t/fgribreau/shared_invite/zt-edpjwt2t-Zh39mDUMNQ0QOr9qOj~jrg)

__Unidecode__ is __JavaScript port__ of the __perl module [Text::Unicode](http://search.cpan.org/~sburke/Text-Unidecode-0.04/lib/Text/Unidecode.pm)__. It takes UTF-8 data and tries to represent it in US-ASCII characters
(i.e., the universally displayable characters between 0x00 and 0x7F). The representation is almost always an attempt at transliteration
-- i.e., conveying, in Roman letters, the pronunciation expressed by the text in some other writing system.

See [Text::Unicode](http://search.cpan.org/~sburke/Text-Unidecode-0.04/lib/Text/Unidecode.pm) for the original README file, including methodology and limitations.

Note that all the files named 'x??.js' in data are derived directly from the equivalent perl file, and both sets of files are distributed under the perl license not the BSD license.


## ❤️ Shameless plug

- [Open-Source self-hostable or fully-managed **webhook as a service**](https://www.hook0.com/)
- [Looking for a managed Keycloak IAM ?](https://www.cloud-iam.com/)
- [**Charts, simple as a URL**. No more server-side rendering pain, 1 url = 1 chart](https://image-charts.com)

## Installation

    $ npm install unidecode

## Usage

    $ node
    > var unidecode = require('unidecode');
    > unidecode("aéà)àçé");
    'aea)ace'
    > unidecode("に間違いがないか、再度確認してください。再読み込みしてください。");
    'niJian Wei iganaika, Zai Du Que Ren sitekudasai. Zai Du miIp misitekudasai. '

## Advanced Usage

### Custom Substitution Values

For values that cannot be translated, empty strings are returned. You can override this behavior by passing a custom substitution value as the second argument to `unidecode`:

    $ node
    > var unidecode = require('unidecode');
    > unidecode("ab\uFFFFc", "X");
    'abXc'
    > unidecode("ab\uFFFFc");
    'abc'

## [Changelog](/CHANGELOG.md)

## Donate

I maintain this project in my free time, if it helped you please support my work via [paypal](https://paypal.me/fgribreau) or [bitcoins](https://www.coinbase.com/fgribreau), thanks a lot!


__I accept pull-request !__
