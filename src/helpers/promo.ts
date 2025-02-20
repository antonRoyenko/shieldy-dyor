import { DocumentType } from '@typegoose/typegoose'
import { Chat, Language } from '@models/Chat'

export function languageForPromo(chat: DocumentType<Chat>) {
  if (chat.language === Language.RUSSIAN) {
    return 'ru'
  }
  return 'en' // All other languagess are not supported yet
}

function promoFromStruct (promo) {
  return promo.links.reduce(
      (s, item) => s + item.prefix + '<a href="' + item.link + '">' + item.text + '</a>' + item.postfix,
      promo.prelinks,
    ) + promo.postlinks;
}

function promoFromStructWithoutHtml (promo) {
  const text = promo.links.reduce(
    (s, item) => s + item.prefix + item.text + item.postfix,
    promo.prelinks,
  ) + promo.postlinks;

  let s = promo.prelinks.length;
  return {
    text,
    links: promo.links.map(item => {
      s += (item.prefix.length + item.text.length + item.postfix.length);
      return {
        offset: s - (item.text.length + item.postfix.length),
        length: item.text.length,
        link: item.link,
      };
    }),
  }
}

export const promoExceptions = [
  -1001007166727,

  -1001295782139,
  -1001233073874,
  -1001060565714,
  -1001070350591,
  -1001098630768,
  -1001145658234,
  -1001271442507,
  -1001286547060,
  -1001093535082,

  -1001214141592,

  -1001372515447,

  -1001078017687,
  -1001224633906,
  -1001267580592,

  -1001217329168,
  -1001424820550,

  -1001061479007,

  -1001166354679,
  -1001456580426,
  -1001207646926,
  -1001396223082,

  -1001576849880,
]
