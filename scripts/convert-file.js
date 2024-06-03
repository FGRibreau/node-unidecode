const fs = require('fs');
const source_file = process.argv[2];

if(!source_file){
    process.exit(1);
}

const content = fs.readFileSync(source_file, 'utf8');

const serializer = (matched, found) => JSON.stringify(found);

console.log(content
    // transform Perl line comments to JS one
    .replaceAll(/^\s{0,2}?#(.*)\n/mg, "// $1\n")

    // transform Perl inlinecomments to JS one
    .replaceAll(/\s{1}?#(.*)\n/mg, "// $1\n")

    .trim()

    // export array in JS-land
    .replaceAll(/(\$Text::Unidecode::Char\[\s?0x[0-9A-Za-z]*\s?\])/g, "module.exports")
    // replace qq{xxx} escaping with simple js string
    .replaceAll(/qq\{([^}]*\}?\s?)}/g, serializer)
    // replace q{xxx} escaping with simple js string
    .replaceAll(/q\{([^}]*\}?)}/g, serializer)

    // replace end of file
    .replaceAll(/^(1;)/gm, "")
    .trim()
);
