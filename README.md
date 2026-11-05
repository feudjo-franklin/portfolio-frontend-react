# Portfolio Frontend (React & TypeScript)

Dies ist das Frontend für meine persönliche Portfolio-Webanwendung. Es demonstriert meine Fähigkeiten in der modernen Frontend-Entwicklung mit React und TypeScript sowie im Cloud-Deployment.

## Tech Stack
*   **Framework:** React 18
*   **Sprache:** TypeScript
*   **Styling:** Bootstrap 5
*   **State Management:** React Hooks
*   **API-Kommunikation:** Fetch API
*   **Deployment & Infrastruktur:** Docker, Docker Compose, Nginx (Reverse Proxy), AWS EC2

## Features
*   Responsive Design für mobile und Desktop-Geräte.
*   Dynamisches Laden von Inhalten über eine REST-API (Spring Boot).
*   Typsichere Komponenten durch TypeScript-Interfaces.
*   Interaktives UI (z.B. Hamburger-Menü für mobile Ansichten).
*   *In Planung:* Erweiterung zu einer Plattform, auf der Nutzer eigene Accounts erstellen und Portfolios verwalten können.

## Architektur & Deployment
Das Frontend ist als Docker-Container verpackt. Ein **Nginx Reverse Proxy** übernimmt die Auslieferung der statischen React-Dateien und leitet die API-Anfragen sicher an das Spring Boot Backend weiter. Das gesamte Setup wird auf einem **AWS EC2 Server** betrieben.

## Lokale Ausführung
Da das Backend (Spring Boot) aus Sicherheitsgründen nicht öffentlich ist, ist die Anwendung ohne dieses Backend nicht voll funktionsfähig. Das Frontend kann lokal mit `npm install` und `npm start` gestartet werden, um die UI-Struktur zu betrachten.

## Backend-Repository
Das dazugehörige Backend (Spring Boot, Java, Spring Security) ist aus Sicherheitsgründen (API-Keys, Datenbank-Zugänge) **nicht öffentlich**. Auf Anfrage stelle ich den Code gerne im Rahmen eines Vorstellungsgesprächs zur Verfügung.

---
*Hinweis: Dieses Projekt dient ausschließlich zu Demonstrationszwecken als Teil meines Portfolios.*