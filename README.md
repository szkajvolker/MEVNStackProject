# MEVN Stack Project

Ez egy modern, teljes stack alkalmazás Vue 3 + Vite frontenddel és Node.js/Express + MongoDB backenden.  
A projekt célja egy egyszerű webáruház, ahol regisztráció, bejelentkezés, termékek böngészése, kosárba helyezés és rendelés leadása is lehetséges.

## Főbb technológiák

- **Frontend:** Vue 3, Vite, Pinia, TailwindCSS
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Autentikáció:** JWT token alapú
- **Stílus:** TailwindCSS

## Fő funkciók

- Felhasználói regisztráció és bejelentkezés
- Termékek listázása, részletek megtekintése
- Kosár funkció (termékek hozzáadása, törlése, mennyiség módosítása)
- Rendelés leadása, rendelési státuszok
- Admin jogosultság: termékek törlése

## Fejlesztői indítás

### Frontend

```sh
cd frontend
npm install
npm run dev
```

### Backend

```sh
cd backend
npm install
npm run dev
```

### Adatbázis seedelés

```sh
cd backend
node seed/seedProduct.js
```

## Mappastruktúra

```
frontend/
  src/
    components/
    views/
    stores/
backend/
  models/
  controllers/
  routes/
  seed/
```

## Képernyőképek

## További információk

- [Vue 3 dokumentáció](https://vuejs.org/)
- [Vite dokumentáció](https://vitejs.dev/)
- [Express dokumentáció](https://expressjs.com/)
- [MongoDB dokumentáció](https://www.mongodb.com/docs/)

---

**Készítette:**  
Szabo Istvan
