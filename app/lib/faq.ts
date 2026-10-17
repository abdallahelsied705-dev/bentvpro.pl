// Single source for the homepage FAQ: rendered by the FAQ section and mirrored in the FAQPage schema.
export type Faq = { q: string; a: string };

export const homeFaqs: Faq[] = [
  {
    q: "Co to jest IPTV Polska?",
    a: "IPTV Polska to telewizja dostarczana przez internet — polskie kanały na żywo, filmy i seriale płyną do aplikacji na Twoim sprzęcie, bez anteny, kabla i talerza satelitarnego. W pakiecie masz 50 000+ kanałów na żywo z kompletem polskich stacji ogólnopolskich i sportowych, 200 000+ pozycji VOD oraz catch-up do 7 dni wstecz — na Smart TV, Firesticku, telefonie i komputerze.",
  },
  {
    q: "Ile kosztuje IPTV Polska?",
    a: "Cennik jest prosty i bez abonamentu: €15 za miesiąc, €35 za 3 miesiące, €45 za 6 miesięcy, €60 za rok i €110 za 2 lata — to ostatnie wychodzi €4,58 miesięcznie. Płacisz jednorazowo, nic nie odnawia się automatycznie. W cenie jest 1 urządzenie; dokupując kolejne, oglądasz nawet na 4 ekranach naraz.",
  },
  {
    q: "Czy jest darmowy test IPTV?",
    a: "Tak — zanim zapłacisz, dostajesz 3-godzinny test bez karty i bez zobowiązań. Napisz do nas na WhatsApp, a dane do testu wyślemy w ciągu kilku minut, żebyś sam sprawdził jakość na swoim sprzęcie.",
  },
  {
    q: "Na jakich urządzeniach działa IPTV Polska?",
    a: "Na praktycznie każdym: Smart TV Samsung, LG i Sony, Amazon Firestick, dekodery Android TV, telefony z Androidem, iPhone i iPad, dekodery MAG oraz komputery z Windows i macOS. Działa w popularnych odtwarzaczach, takich jak TiviMate, IPTV Smarters czy GSE Smart IPTV.",
  },
  {
    q: "Czy mogę oglądać polską telewizję za granicą?",
    a: "Tak i nie potrzebujesz do tego VPN. Gdziekolwiek jesteś — w Wielkiej Brytanii, Niemczech, Irlandii, Holandii czy USA — polskie kanały działają tak samo jak w kraju, wystarczy stabilny internet.",
  },
  {
    q: "Jakiej prędkości internetu potrzebuję do IPTV?",
    a: "Do HD wystarcza stabilne 10 Mb/s, do 4K zalecamy 25 Mb/s. Jeśli możesz, podłącz odbiornik kablem (ethernet) zamiast Wi-Fi — obraz jest wtedy najbardziej stabilny.",
  },
  {
    q: "Ile urządzeń mogę używać jednocześnie?",
    a: "Każdy plan w cenie podstawowej obejmuje 1 połączenie. W cenniku możesz dobrać do 4 jednoczesnych połączeń — cena przeliczy się sama. Każde połączenie może działać na innym urządzeniu, więc cała rodzina ogląda swoje.",
  },
  {
    q: "Czy występują zacięcia lub zamrażanie obrazu?",
    a: "Stawiamy na wydajne serwery i sieć CDN, żeby obraz był płynny nawet wieczorem w godzinach szczytu. Przy stabilnym łączu (10 Mb/s dla HD, 25 Mb/s dla 4K) nie powinno być buforowania, a gdyby coś się działo — wsparcie 24/7 pomoże to rozwiązać.",
  },
  {
    q: "Jak skonfigurować IPTV?",
    a: "Po potwierdzeniu zamówienia dostajesz link M3U lub dane Xtream Codes — zwykle w kilka minut. Wklejasz je w aplikacji (np. TiviMate albo IPTV Smarters) i oglądasz. Mamy instrukcje krok po kroku na każde urządzenie, a jeśli wolisz, skonfigurujemy wszystko za Ciebie.",
  },
  {
    q: "Jakie metody płatności akceptujecie?",
    a: "Zamówienia obsługujemy przez WhatsApp. Gdy wybierzesz plan, podamy dostępne metody płatności i aktywujemy subskrypcję zaraz po jej zaksięgowaniu.",
  },
  {
    q: "Czy mogę otrzymać zwrot pieniędzy?",
    a: "Tak. Jeśli usługa nie działa zgodnie z opisem, zwrot zgłosisz w ciągu 48 godzin od zakupu. Zasady opisaliśmy w Polityce zwrotów.",
  },
];
