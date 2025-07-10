// 🖼️ CENTRALNA KONFIGURACJA ZDJĘĆ
// Tutaj możesz łatwo zmienić wszystkie zdjęcia na stronie
// Wystarczy podmienić URL-e na własne

export const images = {
  // 🎭 ZDJĘCIE GŁÓWNE - Hero Section
  hero: {
    background: "https://i.imgur.com/YGmytj7.jpeg",
    description: "Twoje zdjęcie z Wieży Eiffla - tło strony głównej"
  },

  // 📖 SEKCJA HISTORIA
  story: {
    couple: "https://images.unsplash.com/photo-1629943163055-d8c9c9fd8a88",
    // Przykład z Wieży Eiffla:
    // couple: "https://images.unsplash.com/photo-1502602898536-47ad22581b52",
    description: "Zdjęcie pary w sekcji 'Nasza Historia'"
  },

  // 🎨 GALERIA ZDJĘĆ - WSZYSTKIE TWOJE ZDJĘCIA Z IMGUR
  gallery: [
    {
      id: 1,
      src: "https://i.imgur.com/YGmytj7.jpeg",
      alt: "Romantyczne zdjęcie pary przy Wieży Eiffla",
      description: "Główne zdjęcie z Wieży Eiffla"
    },
    {
      id: 2,
      src: "https://i.imgur.com/f6PVZVn.jpeg",
      alt: "Drugie zdjęcie z albumu",
      description: "Piękne zdjęcie z sesji"
    },
    {
      id: 3,
      src: "https://i.imgur.com/aH374JJ.jpeg",
      alt: "Trzecie zdjęcie z albumu",
      description: "Kolejne romantyczne zdjęcie"
    },
    {
      id: 4,
      src: "https://i.imgur.com/QP9XToz.jpeg",
      alt: "Czwarte zdjęcie z albumu",
      description: "Piękne ujęcie pary"
    },
    {
      id: 5,
      src: "https://i.imgur.com/0zexuSD.jpeg",
      alt: "Piąte zdjęcie z albumu",
      description: "Romantyczna fotografia"
    },
    {
      id: 6,
      src: "https://i.imgur.com/FmqfCZb.jpeg",
      alt: "Szóste zdjęcie z albumu",
      description: "Kolejne piękne zdjęcie"
    },
    {
      id: 7,
      src: "https://i.imgur.com/vQLRyyF.jpeg",
      alt: "Siódme zdjęcie z albumu",
      description: "Romantyczne ujęcie"
    },
    {
      id: 8,
      src: "https://i.imgur.com/8ai8LzR.jpeg",
      alt: "Ósme zdjęcie z albumu",
      description: "Piękna fotografia pary"
    },
    {
      id: 9,
      src: "https://i.imgur.com/XUPEWNJ.jpeg",
      alt: "Dziewiąte zdjęcie z albumu",
      description: "Kolejne romantyczne zdjęcie"
    },
    {
      id: 10,
      src: "https://i.imgur.com/FroN0cw.jpeg",
      alt: "Dziesiąte zdjęcie z albumu",
      description: "Ostatnie piękne zdjęcie z sesji"
    }
  ],

  // 🎯 INSTRUKCJA ZMIANY ZDJĘĆ:
  // 1. Znajdź zdjęcie, które chcesz zmienić
  // 2. Zamień URL w odpowiednim miejscu
  // 3. Zapisz plik
  // 4. Strona automatycznie się odświeży

  // 💡 WSKAZÓWKI:
  // - Używaj wysokiej jakości zdjęć (min. 1920x1080 dla hero)
  // - Galeria: zdjęcia 800x600 lub większe
  // - Sprawdź, czy zdjęcia ładują się szybko
  // - Możesz używać zdjęć z Unsplash, Pexels lub własnych
};

// 🔧 POMOCNICZE FUNKCJE
export const getImageUrl = (section, id = null) => {
  if (section === 'gallery' && id) {
    return images.gallery.find(img => img.id === id)?.src || images.gallery[0].src;
  }
  return images[section] || images.hero.background;
};

export const getAllGalleryImages = () => images.gallery;