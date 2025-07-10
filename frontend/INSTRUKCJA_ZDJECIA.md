# 🖼️ INSTRUKCJA ZMIANY ZDJĘĆ

## Szybka Wymiana Zdjęć

### 📁 Plik Główny: `/src/config/images.js`

Wszystkie zdjęcia strony zarządzane są z jednego pliku! 

### 🎯 Jak Zmienić Zdjęcia:

1. **Otwórz plik:** `frontend/src/config/images.js`
2. **Znajdź sekcję**, którą chcesz zmienić
3. **Zamień URL** na własny
4. **Zapisz plik** - strona automatycznie się odświeży

### 📋 Kategorie Zdjęć:

#### 🌟 **HERO (Zdjęcie Główne)**
```javascript
hero: {
  background: "TU_WSTAW_SWOJE_ZDJĘCIE_URL",
  description: "Romantyczne zdjęcie pary - tło strony głównej"
}
```

#### 📖 **HISTORIA (Sekcja "Nasza Historia")**
```javascript
story: {
  couple: "TU_WSTAW_SWOJE_ZDJĘCIE_URL",
  description: "Zdjęcie pary w sekcji 'Nasza Historia'"
}
```

#### 🎨 **GALERIA (6 zdjęć)**
```javascript
gallery: [
  {
    id: 1,
    src: "TU_WSTAW_SWOJE_ZDJĘCIE_URL",
    alt: "Opis zdjęcia",
    description: "Główne zdjęcie pary"
  },
  // ... więcej zdjęć
]
```

### 🔥 **PRZYKŁAD UŻYCIA TWOJEGO ZDJĘCIA:**

Masz piękne zdjęcie z Wieży Eiffla! Aby je użyć:

```javascript
hero: {
  background: "https://images.unsplash.com/photo-1502602898536-47ad22581b52",
  description: "Romantyczne zdjęcie z Paryża"
}
```

### 💡 **WSKAZÓWKI:**

- **Jakość:** Używaj zdjęć o wysokiej rozdzielczości
- **Hero:** Min. 1920x1080px dla najlepszego efektu
- **Galeria:** 800x600px lub większe
- **Format:** JPG, PNG, WebP
- **Hosting:** Możesz używać Unsplash, Pexels lub własnych zdjęć

### 🚀 **GDZIE ZNALEŹĆ DARMOWE ZDJĘCIA:**

- **Unsplash:** https://unsplash.com/
- **Pexels:** https://pexels.com/
- **Pixabay:** https://pixabay.com/

### 📝 **ZMIANA TEKSTU:**

Aby zmienić nazwy, daty, opisy - edytuj plik:
`frontend/src/components/mockData.js`

---

## 🎯 Przykład Kompletnej Zmiany:

```javascript
// Twoje zdjęcie z Wieży Eiffla jako główne
hero: {
  background: "https://images.unsplash.com/photo-1502602898536-47ad22581b52"
},

// Dodanie go też do galerii
gallery: [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1502602898536-47ad22581b52",
    alt: "Romantyczne zdjęcie z Paryża",
    description: "Nasze zdjęcie z Wieży Eiffla"
  },
  // ... reszta zdjęć
]
```

**Gotowe! Strona automatycznie użyje nowych zdjęć! 🎉**