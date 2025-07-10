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

  // 🎨 GALERIA ZDJĘĆ
  gallery: [
    {
      id: 1,
      src: "https://i.imgur.com/YGmytj7.jpeg",
      alt: "Twoje romantyczne zdjęcie z Wieży Eiffla",
      description: "Główne zdjęcie pary przy Wieży Eiffla"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1682261878943-d2c1382ca9a1",
      alt: "Para przy Wieży Eiffla",
      description: "Romantyczne zdjęcie z Paryża"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1699726252091-8b1f0d621d00",
      alt: "Sylwetka pary przy Wieży Eiffla",
      description: "Romantyczna sylwetka z ptakami"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1699726258869-36dff6247fd3",
      alt: "Para przy Wieży Eiffla z fontannami",
      description: "Sylwetka przy Trocadéro"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1606490194859-07c18c9f0968",
      alt: "Elegancka ceremonia ślubna",
      description: "Ceremonia ślubna"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/3082764/pexels-photo-3082764.jpeg",
      alt: "Pierwszy taniec",
      description: "Taniec pary młodej"
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