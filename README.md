# Qraft

Fabrique des QR codes en pixels nets, prêts à imprimer ou à partager.

*English version: [README.en.md](README.en.md)*

![Qraft](screenshots/1.jpg)

## Lire un QR code (nouveau en 1.1.0)

Lire un QR code sur l'écran ou dans une image (même abîmé ou tourné), logo au centre vérifié, points ronds ou arrondis.

## Contenus

- **Texte** libre et **Lien** (le `https://` est ajouté s'il manque).
- **Wi-Fi** : nom du réseau, mot de passe, sécurité (WPA, WEP, aucune), réseau caché. Un téléphone qui lit le code se connecte tout seul. **Le mot de passe n'est jamais enregistré** : ni dans le dossier du plugin, ni dans les récents.
- **Contact** (carte vCard : nom, téléphone, e-mail, entreprise, site), **E-mail** (destinataire, objet, message), **SMS**, **Position** (latitude, longitude).

## Réglages

- **Correction** L, M, Q ou H : la part du code qui peut être abîmée (ou cachée par un logo) sans gêner la lecture, de 7 à 30 %. Plus elle est forte, plus le code est grand.
- **Encre** et **fond** : une palette pixel art ou n'importe quelle couleur. Un avertissement apparaît si l'encre est plus claire que le fond ou si le contraste est trop faible.
- **Marge** (4 modules conseillés) et **taille d'un module** en pixels.
- La version (taille du code), le masque choisi et la place utilisée sont affichés.

## Exporter

**PNG**, **SVG** (net à toutes les tailles) ou **Copier l'image**. **★ Garder** range le code dans les **récents** (10 au plus) pour le retrouver d'un clic.

## Fiabilité

L'encodeur suit la norme ISO 18004 (mode octets, versions 1 à 40, Reed-Solomon, 8 masques, le meilleur choisi automatiquement). À chaque ouverture, des codes de test sont fabriqués puis relus par un petit décodeur intégré, qui vérifie qu'ils redonnent bien le texte de départ.

## Lire un QR code, logo, points (1.1.0)

- **LIRE À L’ÉCRAN** : NeoDex se cache un instant, prend une capture et y cherche un QR code (autorisation « Ton écran », la capture ne sort pas de ton PC). **LIRE UNE IMAGE…** fait pareil avec une image, et tu peux aussi coller une image (Ctrl+V). Le texte lu s’affiche avec **COPIER**, **OUVRIR LE LIEN** pour une adresse web et **MODIFIER ICI** pour le reprendre dans le formulaire. Le lecteur corrige les points abîmés (logo, rayure) et lit les codes droits ou tournés, pas ceux photographiés en biais.
- **Logo au centre** : une image posée au milieu du code ; la correction passe alors au niveau H, et Qraft relit le code dessiné pour te dire s’il reste lisible.
- **Points** : carrés, ronds ou arrondis ; les trois grands carrés des coins restent carrés pour que les lecteurs s’y repèrent. Le PNG et le SVG gardent les points et le logo.

## Données

Le contenu (sans mot de passe Wi-Fi), les réglages et les récents sont gardés dans le dossier du plugin. Autorisation : `storage` seulement.
