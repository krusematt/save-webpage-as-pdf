# Save WebPage as PDF

Created to be part of a CI/CD pipeline for my personal resume website.  The goal is to automatically generate a PDF copy.

## Usage

### Build a local docker image
`docker build -t pdfbuilder:latest .`

### Example saving PDF to the pdf_files directory in this repo
```bash
docker run  \
  -e URL='https://matthewkruse.com' \
  -e FILENAME='/pdf_files/matthew-kruse-resume.pdf' \
  -v "$(pwd)"/pdf_files:/pdf_files \
  pdfbuilder
```
The result:

`ls pdf_files`
```bash
total 1144
drwxr-xr-x   4 mattkruse  staff   128B Jul 10 23:57 .
drwxr-xr-x  17 mattkruse  staff   544B Jul 10 23:58 ..
-rw-r--r--   1 mattkruse  staff     0B Jul 10 23:42 .gitkeep
-rw-r--r--   1 mattkruse  staff   569K Jul 10 23:57 matthew-kruse-resume.pdf
```


## Run locally

If you do not wish to run the docker file, feel free to install nodejs and `npm -i`

Be sure to export your env vars:
```bash
export URL='https://some.website/'
export FILENAME='./pdf_files/some_filename.pdf'
node build_pdf.js
```