# Unidecode for NodeJS
-----------------



[![Version](https://img.shields.io/npm/v/unidecode.svg)](http://badge.fury.io/js/unidecode) [![Downloads](http://img.shields.io/npm/dm/unidecode.svg)](https://www.npmjs.com/package/mailchecker) ![extra](https://img.shields.io/badge/actively%20maintained-yes-ff69b4.svg) 

[![Twitter Follow](https://img.shields.io/twitter/follow/fgribreau.svg?style=flat)](https://twitter.com/FGRibreau)  [![available-for-advisory](https://img.shields.io/badge/available%20for%20consulting%20advisory-yes-ff69b4.svg?)](http://bit.ly/2c7uFJq) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/francois-guillaume-ribreau?utm_source=github&utm_medium=button&utm_term=francois-guillaume-ribreau&utm_campaign=github)  [![Slack](https://img.shields.io/badge/Slack-Join%20our%20tech%20community-17202A?logo=slack)](https://join.slack.com/t/fgribreau/shared_invite/zt-edpjwt2t-Zh39mDUMNQ0QOr9qOj~jrg)

__Unidecode__ is __JavaScript port__ of the __perl module [Text::Unidecode](http://search.cpan.org/~sburke/Text-Unidecode-0.04/lib/Text/Unidecode.pm)__. It takes UTF-8 data and tries to represent it in US-ASCII characters
(i.e., the universally displayable characters between 0x00 and 0x7F). The representation is almost always an attempt at transliteration
-- i.e., conveying, in Roman letters, the pronunciation expressed by the text in some other writing system.

See [Text::Unidecode](http://search.cpan.org/~sburke/Text-Unidecode-0.04/lib/Text/Unidecode.pm) for the original README file, including methodology and limitations.

Note that all the files named 'x??.js' in data are derived directly from the equivalent perl file, and both sets of files are distributed under the perl license not the BSD license.


## Sponsors

<table>
  <tr>
    <td align="center" width="175">
      <a href="https://france-nuage.fr/?mtm_source=github&mtm_medium=sponsor&mtm_campaign=france-nuage&mtm_content=node-unidecode">
        <img src="assets/sponsors/france-nuage.svg" height="60" alt="France-Nuage"/><br/>
        <b>France-Nuage</b>
      </a><br/>
      <sub>Sovereign French cloud for your i18n indexing pipelines. EU-hosted.</sub>
    </td>
    <td align="center" width="175">
      <a href="https://www.hook0.com/?mtm_source=github&mtm_medium=sponsor&mtm_campaign=hook0&mtm_content=node-unidecode">
        <img src="assets/sponsors/hook0.png" height="60" alt="Hook0"/><br/>
        <b>Hook0</b>
      </a><br/>
      <sub>Send i18n indexing events as signed webhooks. Self-hosted option.</sub>
    </td>
    <td align="center" width="175">
      <a href="https://getnatalia.com/?mtm_source=github&mtm_medium=sponsor&mtm_campaign=natalia&mtm_content=node-unidecode">
        <img src="assets/sponsors/natalia.svg" height="60" alt="Natalia"/><br/>
        <b>Natalia</b>
      </a><br/>
      <sub>AI voice agent answers your international callers in their language.</sub>
    </td>
    <td align="center" width="175">
      <a href="https://netir.fr/?mtm_source=github&mtm_medium=sponsor&mtm_campaign=netir&mtm_content=node-unidecode">
        <img src="assets/sponsors/netir.svg" height="60" alt="NetIR"/><br/>
        <b>NetIR</b>
      </a><br/>
      <sub>Hire vetted French freelance i18n &amp; search engineers via marketplace.</sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="233">
      <a href="https://nobullshitconseil.com/?mtm_source=github&mtm_medium=sponsor&mtm_campaign=nbc&mtm_content=node-unidecode">
        <img src="assets/sponsors/nobullshitconseil.svg" height="60" alt="NoBullshitConseil"/><br/>
        <b>NoBullshitConseil</b>
      </a><br/>
      <sub>Tech advisory without the bullshit. International platform strategy.</sub>
    </td>
    <td align="center" width="233">
      <a href="https://qualneo.fr/?mtm_source=github&mtm_medium=sponsor&mtm_campaign=qualneo&mtm_content=node-unidecode">
        <img src="assets/sponsors/qualneo.svg" height="60" alt="Qualneo"/><br/>
        <b>Qualneo</b>
      </a><br/>
      <sub>Qualiopi LMS for French training orgs going international. 32 indicators.</sub>
    </td>
    <td align="center" width="233">
      <a href="https://recapro.ai/?mtm_source=github&mtm_medium=sponsor&mtm_campaign=recapro&mtm_content=node-unidecode">
        <img src="assets/sponsors/recapro.png" height="60" alt="Recapro"/><br/>
        <b>Recapro</b>
      </a><br/>
      <sub>Sovereign AI transcribes multilingual meetings &amp; drafts the report.</sub>
    </td>
  </tr>
</table>

> **Interested in sponsoring?** [Get in touch](mailto:rust@fgribreau.com)

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
