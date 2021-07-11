FROM buildkite/puppeteer as base

RUN mkdir /code
WORKDIR /code
COPY . /code/
RUN npm i
CMD node build_pdf.js