const puppeteer = require('puppeteer');

class Webpage {
    static async generatePDF(url) {
        const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox','--disable-setuid-sandbox'] }); // Puppeteer can only generate pdf in headless mode.
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle0' }); // Adjust network idle as required.
        const pdfConfig = {
            path: process.env.FILENAME, // Saves pdf to disk.
            format: 'letter',
            printBackground: true,
            margin: {
                top: '2.5cm',
                bottom: '2.5cm',
                left: '0cm',
                right: '0cm'
            }
        };
        const pdf = await page.pdf(pdfConfig); // Return the pdf buffer. Useful for saving the file not to disk.
        await browser.close();
        return pdf;
    }
}

(async() => {
    if (!process.env.URL || !process.env.FILENAME) {
        console.error('Please provide a url and filename to export file as');
        return;
    }
    const buffer = await Webpage.generatePDF(process.env.URL);
})();
