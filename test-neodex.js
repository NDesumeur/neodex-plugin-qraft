// lancé par le test « local » de NeoDex : un lien, le niveau H, un Wi-Fi, un texte trop long, l'avertissement de contraste
module.exports = async ({ pj, sleep }) => {
  const info = () => pj(`document.getElementById('qr_info').textContent`);
  const setField = (k, v) => pj(`(() => { const i = document.querySelector('[data-field=${k}]'); i.value = ${JSON.stringify(v)}; i.dispatchEvent(new Event('input')); })(), 0`);
  await sleep(500);
  await pj(`document.querySelector('[data-type=url]').click(), 0`); await setField('url', 'neodex.app'); await sleep(100);
  if (!/Version : 2 \(25×25\)/.test(await info())) throw new Error('lien : ' + await info());
  await pj(`document.querySelector('[data-ecl=H]').click(), 0`); await sleep(100);
  if (!/Correction : H/.test(await info()) || !/Version : 3/.test(await info())) throw new Error('niveau H : ' + await info());
  await pj(`document.querySelector('[data-type=wifi]').click(), 0`); await setField('ssid', 'Maison'); await setField('pass', 'secret;42'); await sleep(100);
  if (!/Contenu : 34 \//.test(await info())) throw new Error('wifi : ' + await info());
  await pj(`document.querySelector('[data-type=text]').click(), 0`); await setField('text', 'a'.repeat(3000)); await sleep(100);
  if (!/Trop long/.test(await info())) throw new Error('trop long : ' + await info());
  await setField('text', 'Bonjour de Qraft !'); await sleep(100);
  await pj(`[...document.querySelectorAll('.qrSw')].find(b => b.title === '#ffffff').click(), 0`); await sleep(100);
  if (!/contraste|plus claire/.test(await pj(`document.querySelector('.qrWarn').textContent`))) throw new Error('pas d\'avertissement');
  await pj(`[...document.querySelectorAll('.qrSw')].find(b => b.title === '#1a1430').click(), 0`);
  await pj(`document.querySelector('[data-type=url]').click(), 0`); await sleep(200);
  return 'lien, niveau H, Wi-Fi, texte trop long et contraste ok';
};
