import type { Locale } from '@/i18n/config';

// Cyber Hustle oyununun sayfaları (tanıtım, gizlilik politikası, destek).
// Gizlilik metni oyun reposundaki docs/reklam-ve-izinler.md ile aynı tutulmalı.

export const supportEmail = 'hunvisk.studio@gmail.com';
export const privacyUpdated = '2026-11-02';

export type LegalSection = { heading: string; body: string[] };

type GameCopy = {
  title: string;
  tagline: string;
  description: string;
  status: string;
  links: { privacy: string; support: string };
  privacy: { title: string; intro: string; updatedLabel: string; sections: LegalSection[] };
  support: { title: string; intro: string; emailLabel: string; faq: LegalSection[] };
};

const en: GameCopy = {
  title: 'Cyber Hustle',
  tagline: 'From a bedroom coder to a tech empire.',
  description:
    'Cyber Hustle is an idle clicker game for iOS. Tap to write code, hire teams, grow from a bedroom setup into a tech giant, exit and start again stronger.',
  status: 'Coming soon to the App Store.',
  links: { privacy: 'Privacy Policy', support: 'Support' },
  privacy: {
    title: 'Cyber Hustle Privacy Policy',
    intro:
      'This policy explains what data the Cyber Hustle game ("the game") and the advertising partners inside it use. The game is developed by Hunvisk (an individual developer).',
    updatedLabel: 'Last updated',
    sections: [
      {
        heading: 'Data the game itself collects',
        body: [
          'The game does not ask for or collect your name, email address, account, contacts, photos or precise location.',
          'Your progress (in-game currency, stages, purchases) and settings are stored only on your device. They are not sent to our servers; we do not run any servers for the game.',
        ],
      },
      {
        heading: 'Advertising',
        body: [
          'The game shows rewarded video ads only when you choose to watch one for a bonus. Ads are served through Unity LevelPlay, which runs an auction between ad networks: Unity Ads, ironSource Ads and Google AdMob.',
          'These partners may collect: your device advertising identifier (on iOS only if you allow tracking), IP address and approximate location derived from it, device model, operating system and language, and ad interactions (whether an ad was shown, completed or tapped). They use this data to show ads, measure them and prevent fraud.',
          'Their own privacy policies apply: Unity (Unity Ads, LevelPlay, ironSource Ads): https://unity.com/legal/game-player-and-app-user-privacy-policy — Google: https://policies.google.com/technologies/partner-sites',
        ],
      },
      {
        heading: 'Your choices',
        body: [
          'iOS asks for your permission before your advertising identifier can be used ("Allow tracking"). You still get the reward if you decline; ads will simply be less personalized. You can change this anytime in Settings → Privacy & Security → Tracking.',
          'If you are in the European Economic Area, the UK or Switzerland, the game asks for your consent before personalized ads are shown. Without consent you see non-personalized ads.',
          'You can reset or limit your advertising identifier in your device settings at any time.',
        ],
      },
      {
        heading: 'Notifications',
        body: [
          'If you allow it, the game sends local reminders (for example when a new in-game event starts or results are ready). They are scheduled on your device; no data is sent.',
        ],
      },
      {
        heading: 'Children',
        body: [
          'The game is intended for a general audience and is not directed at children under 13. We do not knowingly collect data from children.',
        ],
      },
      {
        heading: 'Deleting your data',
        body: [
          'Deleting the game removes all of its data from your device. For data held by the advertising partners, use the links above or reset your advertising identifier.',
        ],
      },
      {
        heading: 'Changes and contact',
        body: [
          'If this policy changes, the new version will be published on this page with a new date.',
          'Questions: hunvisk.studio@gmail.com',
        ],
      },
    ],
  },
  support: {
    title: 'Cyber Hustle Support',
    intro: 'Found a bug or have a question? Send an email and include your device model and iOS version.',
    emailLabel: 'Email',
    faq: [
      {
        heading: 'An ad did not give me a reward',
        body: ['Rewards are granted only after the ad is watched to the end. If no ad is available, try again in a minute.'],
      },
      {
        heading: 'Ads have no sound',
        body: ['Ad videos follow your silent switch. Turn off silent mode to hear them.'],
      },
      {
        heading: 'Will I lose my progress?',
        body: ['Progress is saved on your device. Deleting the game deletes your progress.'],
      },
    ],
  },
};

const tr: GameCopy = {
  title: 'Cyber Hustle',
  tagline: 'Yatak odasındaki kodcudan teknoloji imparatorluğuna.',
  description:
    'Cyber Hustle, iOS için bir idle clicker oyunu. Dokunarak kod yaz, ekip kur, yatak odasından teknoloji devine büyü, Exit yapıp daha güçlü başla.',
  status: "Yakında App Store'da.",
  links: { privacy: 'Gizlilik Politikası', support: 'Destek' },
  privacy: {
    title: 'Cyber Hustle Gizlilik Politikası',
    intro:
      'Bu politika, Cyber Hustle oyununun ("oyun") ve içindeki reklam ortaklarının hangi verileri kullandığını açıklar. Oyun Hunvisk (bireysel geliştirici) tarafından geliştirilmektedir.',
    updatedLabel: 'Son güncelleme',
    sections: [
      {
        heading: 'Oyunun kendisinin topladığı veriler',
        body: [
          'Oyun adınızı, e-posta adresinizi, hesabınızı, kişilerinizi, fotoğraflarınızı veya kesin konumunuzu istemez ve toplamaz.',
          'İlerlemeniz (oyun içi para, aşamalar, satın alımlar) ve ayarlarınız yalnızca cihazınızda saklanır. Sunucularımıza gönderilmez; oyun için bir sunucumuz yoktur.',
        ],
      },
      {
        heading: 'Reklamlar',
        body: [
          'Oyun yalnızca bir bonus için izlemeyi seçtiğinizde ödüllü video reklam gösterir. Reklamlar Unity LevelPlay üzerinden, reklam ağları arasında yapılan açık artırmayla sunulur: Unity Ads, ironSource Ads ve Google AdMob.',
          'Bu ortaklar şunları toplayabilir: cihaz reklam kimliğiniz (iOS\'ta yalnızca takibe izin verirseniz), IP adresi ve buradan çıkarılan yaklaşık konum, cihaz modeli, işletim sistemi ve dil, reklam etkileşimleri (reklamın gösterilmesi, tamamlanması, dokunulması). Bu verileri reklam göstermek, ölçmek ve dolandırıcılığı önlemek için kullanırlar.',
          'Kendi gizlilik politikaları geçerlidir: Unity (Unity Ads, LevelPlay, ironSource Ads): https://unity.com/legal/game-player-and-app-user-privacy-policy — Google: https://policies.google.com/technologies/partner-sites',
        ],
      },
      {
        heading: 'Tercihleriniz',
        body: [
          'iOS, reklam kimliğinizin kullanılmasından önce izninizi ister ("Takibe izin ver"). Reddetseniz de ödülü alırsınız; reklamlar yalnızca daha az kişiselleşir. Bunu istediğiniz zaman Ayarlar → Gizlilik ve Güvenlik → Takip bölümünden değiştirebilirsiniz.',
          'Avrupa Ekonomik Alanı, Birleşik Krallık veya İsviçre\'deyseniz oyun, kişiselleştirilmiş reklam göstermeden önce onayınızı ister. Onay vermezseniz kişiselleştirilmemiş reklam görürsünüz.',
          'Reklam kimliğinizi cihaz ayarlarından istediğiniz zaman sıfırlayabilir veya sınırlayabilirsiniz.',
        ],
      },
      {
        heading: 'Bildirimler',
        body: [
          'İzin verirseniz oyun yerel hatırlatmalar gönderir (örneğin yeni bir oyun içi etkinlik başladığında veya sonuçlar hazır olduğunda). Bunlar cihazınızda kurulur; veri gönderilmez.',
        ],
      },
      {
        heading: 'Çocuklar',
        body: ['Oyun genel kitleye yöneliktir, 13 yaşından küçük çocuklara yönelik değildir. Çocuklardan bilerek veri toplamayız.'],
      },
      {
        heading: 'Verilerinizi silme',
        body: [
          'Oyunu silmek tüm verilerini cihazınızdan kaldırır. Reklam ortaklarının tuttuğu veriler için yukarıdaki bağlantıları kullanabilir veya reklam kimliğinizi sıfırlayabilirsiniz. Türkiye\'deki kullanıcılar KVKK kapsamındaki haklarını aşağıdaki adrese yazarak kullanabilir.',
        ],
      },
      {
        heading: 'Değişiklikler ve iletişim',
        body: [
          'Bu politika değişirse yeni sürümü yeni tarihiyle bu sayfada yayınlanır.',
          'Sorularınız için: hunvisk.studio@gmail.com',
        ],
      },
    ],
  },
  support: {
    title: 'Cyber Hustle Destek',
    intro: 'Bir hata mı buldunuz ya da sorunuz mu var? Cihaz modelinizi ve iOS sürümünüzü ekleyerek e-posta gönderin.',
    emailLabel: 'E-posta',
    faq: [
      {
        heading: 'Reklam izledim ama ödül gelmedi',
        body: ['Ödül yalnızca reklam sonuna kadar izlenince verilir. Reklam yoksa bir dakika sonra tekrar deneyin.'],
      },
      {
        heading: 'Reklamlarda ses yok',
        body: ['Reklam videoları telefonun sessiz düğmesine uyar. Duymak için sessiz modu kapatın.'],
      },
      {
        heading: 'İlerlemem kaybolur mu?',
        body: ['İlerleme cihazınızda saklanır. Oyunu silmek ilerlemeyi de siler.'],
      },
    ],
  },
};

const copies: Record<Locale, GameCopy> = { en, tr };

export function cyberHustle(locale: Locale): GameCopy {
  return copies[locale];
}
