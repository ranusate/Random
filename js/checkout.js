const pupeeter = require("pupeeter");
const rand_url =
  "https://shopee.co.id/WBS-JAM-TANGAN-PRIA-CHRONO-MURAH-QS-QUICKSILVER-KULIT-SPORT-IMPORT-PREMIUM-GROSIR-MURAH-QS006-i.3720074.1005094410";

async function initBrowser() {
  const browser = await pupeeter.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(rand_url);
  return page;
}

async function addToCart(page){
    await page.$eval("button[class='btn btn-solid-primary btn--l _3Kiuzg']")
}
