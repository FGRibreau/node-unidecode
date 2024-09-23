# Contributing to Node-unidecode <!-- omit in toc -->

## Getting started<!-- omit in toc -->

Before you begin:
- Node-unidecode is powered by Node.js. Check to see if you're on the right [version of node in `engines.node`](package.json).
- Node-unidecode main source is [Perl Text-Unicode](https://metacpan.org/release/SBURKE/Text-Unidecode-1.30) changes are pulled with the [update-files.sh](./scripts/update-files.sh) script.

### How to fix some transliteration?

These changes must be done upstream on [Perl Text-Unicode](https://metacpan.org/release/SBURKE/Text-Unidecode-1.30) lib, please push your change there and then :

- use [update-files.sh](./scripts/update-files.sh) to update node-unidecode files
- add new tests if needed
- test locally everything with `npm test`
- open an MR here

## Reviewing
I review every single PR. Please update the test suite along with your PR and check that tests pass.
