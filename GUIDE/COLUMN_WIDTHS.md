# System Szerokości oparty na Kolumnach

## Przegląd

Zamiast używać stałych szerokości w pikselach (jak `max-w-xl`, `max-w-2xl`, `max-w-3xl`), możesz teraz używać szerokości opartych na systemie 12 kolumn.

## ⚠️ Ważne: Obliczenia uwzględniają gap'y

System automatycznie uwzględnia gap'y między kolumnami (`gap-5` = 20px), więc szerokości są dokładnie dopasowane do rzeczywistego gridu.

## Dostępne Klasy

### Podstawowe klasy kolumn
- `max-w-col-1` do `max-w-col-12` - odpowiadają 1-12 kolumnom z systemu 12-kolumnowego

### Odpowiedniki dla popularnych szerokości
- `max-w-col-l` = 2 kolumny (~17% szerokości)
- `max-w-col-xl` = 4 kolumny (~33% szerokości)
- `max-w-col-2xl` = 6 kolumn (~50% szerokości)  
- `max-w-col-3xl` = 8 kolumn (~67% szerokości)
- `max-w-col-4xl` = 10 kolumn (~83% szerokości)

## Responsywność

System automatycznie dostosowuje szerokości na różnych urządzeniach:

### Mobile (≤768px)
- `max-w-col-l` = 8 kolumn (~67%)
- `max-w-col-xl` = 10 kolumn (~83%)
- `max-w-col-2xl` = 11 kolumn (~92%)
- `max-w-col-3xl` = 12 kolumn (100%)
- `max-w-col-4xl` = 12 kolumn (100%)

### Tablet (769px-1024px)
- `max-w-col-l` = 4 kolumny (~33%)
- `max-w-col-xl` = 6 kolumn (~50%)
- `max-w-col-2xl` = 8 kolumn (~67%)
- `max-w-col-3xl` = 10 kolumn (~83%)
- `max-w-col-4xl` = 12 kolumn (100%)

### Desktop (>1024px)
- `max-w-col-l` = 2 kolumny (~17%)
- `max-w-col-xl` = 4 kolumny (~33%)
- `max-w-col-2xl` = 6 kolumn (~50%)
- `max-w-col-3xl` = 8 kolumn (~67%)
- `max-w-col-4xl` = 10 kolumn (~83%)

## Przykłady Użycia

```tsx
// Zamiast:
<p className="max-w-xl">Tekst</p>
<h2 className="max-w-2xl">Nagłówek</h2>
<div className="max-w-3xl">Kontener</div>

// Używaj:
<p className="max-w-col-l">Mały tekst</p>
<p className="max-w-col-xl">Tekst</p>
<h2 className="max-w-col-2xl">Nagłówek</h2>
<div className="max-w-col-3xl">Kontener</div>
<div className="max-w-col-4xl">Duży kontener</div>
```

## Korzyści

1. **Spójność z systemem grid** - szerokości są powiązane z systemem 12 kolumn
2. **Dokładne dopasowanie** - uwzględnia gap'y między kolumnami (20px)
3. **Responsywność** - automatyczne dostosowanie na różnych urządzeniach
4. **Elastyczność** - łatwe dostosowanie szerokości do potrzeb projektu
5. **Przewidywalność** - szerokości są zawsze proporcjonalne do kontenera
6. **Brak wystawania** - tekst nie wystaje poza siatkę gridu

## Migracja

Aby zmigrować z `max-w-xl`, `max-w-2xl`, `max-w-3xl`:

1. Zamień `max-w-xl` na `max-w-col-xl`
2. Zamień `max-w-2xl` na `max-w-col-2xl`
3. Zamień `max-w-3xl` na `max-w-col-3xl`
4. Dodaj `max-w-col-l` dla małych elementów
5. Dodaj `max-w-col-4xl` dla dużych kontenerów

Wszystkie inne klasy `max-w-*` pozostają bez zmian.

## 🔧 Jak działają obliczenia

### Formuła
```
max-width = (100% - (11 * gap)) / 12 * kolumny + ((kolumny - 1) * gap)
```

### Przykłady obliczeń
```
max-w-col-l (2 kolumny): calc((100% - 220px) / 12 * 2 + 20px)   // 1 gap
max-w-col-xl (4 kolumny): calc((100% - 220px) / 12 * 4 + 60px)  // 3 gapy
max-w-col-2xl (6 kolumn): calc((100% - 220px) / 12 * 6 + 100px) // 5 gapów
max-w-col-3xl (8 kolumn): calc((100% - 220px) / 12 * 8 + 140px) // 7 gapów
max-w-col-4xl (10 kolumn): calc((100% - 220px) / 12 * 10 + 180px) // 9 gapów
```

### Dlaczego to działa
- **220px**: Odejmujemy wszystkie gap'y między 12 kolumnami (11 * 20px = 220px)
- **/ 12**: Dzielimy przez liczbę kolumn
- *** kolumny**: Mnożymy przez liczbę kolumn, które chcemy zająć
- **+ (kolumny-1) * 20px**: Dodajemy gap'y między naszymi kolumnami

**Przykład dla 2 kolumn:**
- Szerokość kolumn: `(100% - 220px) / 12 * 2`
- Gap'y: `(2-1) * 20px = 20px`
- Razem: `calc((100% - 220px) / 12 * 2 + 20px)`

To zapewnia, że szerokość jest dokładnie taka sama jak w systemie grid CSS.
