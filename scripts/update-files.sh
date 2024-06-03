set -e

CPAN_VERSION="1.30"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DIR_TMP="${SCRIPT_DIR}/tmp"
mkdir -p $DIR_TMP
FILE="Text-Unidecode-${CPAN_VERSION}"

SOURCE_URL="https://cpan.metacpan.org/authors/id/S/SB/SBURKE/${FILE}.tar.gz"

curl "https://cpan.metacpan.org/authors/id/S/SB/SBURKE/${FILE}.tar.gz" > "${DIR_TMP}/${FILE}.tar.gz"

cd $DIR_TMP && tar -xvf "${FILE}.tar.gz"

for SOURCE_FILE in $DIR_TMP/${FILE}/lib/Text/Unidecode/*.pm
do
  BASE_NAME=$(basename -s .pm $SOURCE_FILE)
  DESTINATION_FILE="${SCRIPT_DIR}/../data/${BASE_NAME}.js"

  # Check if the source file is empty "Text::Unidecode::make_placeholder_map()"
  if grep -q "Text::Unidecode::make_placeholder_map()" "$SOURCE_FILE"; then
    echo "${SOURCE_FILE} -> (skipped, it's empty)"
    continue
  fi

  echo "${SOURCE_FILE} -> ${DESTINATION_FILE}"
  echo "// File automatically generated from ${SOURCE_URL} using ./scripts/update-data.sh\n" > $DESTINATION_FILE
  node $SCRIPT_DIR/convert-file.js ${SOURCE_FILE} > $DESTINATION_FILE

  # check that it's a valid file
  node $DESTINATION_FILE
done

npm run test

rm -rf $DIR_TMP
