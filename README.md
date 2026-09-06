<div align="center">
  <img src="assets/icon.png" width="120" height="120" alt="MajorDex">
  <h1>MajorDex</h1>
  <p>Read the shape of your code.<br>코드의 구조를 읽다.</p>
  <p>macOS 26+ · Apple Silicon · Local, read-only analysis</p>
</div>

**[Visit the website · 공식 홈페이지](https://facta-leopard.github.io/MajorDex/)**

[한국어](https://facta-leopard.github.io/MajorDex/?lang=ko) ·
[English](https://facta-leopard.github.io/MajorDex/?lang=en) ·
[Français](https://facta-leopard.github.io/MajorDex/?lang=fr) ·
[Español](https://facta-leopard.github.io/MajorDex/?lang=es) ·
[Deutsch](https://facta-leopard.github.io/MajorDex/?lang=de) ·
[日本語](https://facta-leopard.github.io/MajorDex/?lang=ja) ·
[简体中文](https://facta-leopard.github.io/MajorDex/?lang=zh-Hans) ·
[繁體中文](https://facta-leopard.github.io/MajorDex/?lang=zh-Hant)

MajorDex turns a project's code into navigable functional and structural maps.
Explore connections, inspect source, and keep the context on your Mac—without running the project.
Analysis is limited to supported syntax and heuristics; it does not guarantee complete runtime behavior.

프로젝트의 기능과 형태를 시각적으로 탐색하고, 관계와 실제 코드를 함께 살펴보세요.
프로젝트는 실행하지 않으며, 분석은 지원 문법과 정적 추론 범위에 한정됩니다.

- [Privacy policy · 개인정보처리방침](https://facta-leopard.github.io/MajorDex/privacy.html)
- [Support · 지원 안내](https://facta-leopard.github.io/MajorDex/support.html)
- [Public issue tracker · 공개 문의](https://github.com/Facta-Leopard/MajorDex/issues)

Please do not post private source code, credentials, or personal information in public issues.
공개 문의에는 비공개 소스 코드, 인증 정보, 개인정보를 올리지 마세요.

This repository contains the public website and support materials, not the application source.

<details>
<summary>Website maintenance</summary>

## Pages

- `index.html`: product overview; no release date, price, or unverified App Store URL.
- `privacy.html`: app, website, and public-support data handling.
- `support.html`: public GitHub Issues support, with sensitive-data warnings.
- All pages support `?lang=en`, `ko`, `fr`, `es`, `de`, `ja`, `zh-Hans`, and `zh-Hant`.

English is complete static HTML and remains readable without JavaScript. `site.js` changes text
for the selected language, preserves the current path and fragment on language changes, and
carries the language across local navigation. It does not use cookies or persistent browser storage.
There are no external fonts, dependencies, analytics, trackers, forms, or embedded services.
GitHub Pages hosting and GitHub Issues have their own privacy practices, linked in the policy.

## Preview and deployment

Serve this directory with any static HTTP server, or open `index.html` directly. There is no build step.
Publish only this directory’s intended public files to the public `Facta-Leopard/MajorDex` repository.
Never copy the application repository, its Git history, local logs, signing files, or private project data.
For GitHub Pages, publish these files at the chosen branch’s root and select that branch/root in Pages
settings. `.nojekyll` keeps the plain static files unchanged. Repository publication and Pages activation
must be verified separately; the presence of this README is not evidence of deployment.

## Maintenance

Update English HTML and the matching English entries in `site.js` together. Keep all eight translations
semantically equivalent, including retention limits and public-support warnings. Review app behavior
before changing policy claims or its effective date. Test all pages at narrow widths, keyboard navigation,
language switching with an existing hash, and JavaScript disabled. The support destination is
https://github.com/Facta-Leopard/MajorDex/issues; no private email or response-time commitment is provided.

## Artwork and design

`assets/icon.png` is copied unchanged from MajorDex’s first-party `MajorDexAppIcon-512.png`.
`assets/constellation.jpg` is copied unchanged from its first-party `MajorDexLaunchArtwork-1x.jpg`.
These product assets remain proprietary; publishing this website does not grant reuse rights.
The design baseline and its upstream MIT notice are in `DESIGN.md` and `DESIGN-NOTICE.txt`.
The implementation uses locally installed system fonts and does not redistribute font files.

</details>
