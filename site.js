"use strict";
const translations = {
  "en": {
    "nav": [
      "Overview",
      "Privacy",
      "Support",
      "Language",
      "Skip to content",
      "Main navigation"
    ],
    "references": ["GitHub Pages — Data collection", "GitHub Privacy Statement"],
    "home": [
      "Read the shape of your code.",
      "A local, read-only architecture explorer for macOS. Understand your project without running it.",
      "macOS 26+ · Apple Silicon",
      "Explore with confidence.",
      "Start with a folder.",
      "Choose the project you want to inspect. MajorDex reads a snapshot; it does not build, install, or execute your code.",
      "See the connections.",
      "Move between functional and code structure, search the graph, and keep your own notes and saved views.",
      "Keep the context local.",
      "Analysis, derived data, and your edits stay on your Mac. No account, remote AI, or analytics is required.",
      "Built for understanding, not guesswork.",
      "Static analysis covers supported syntax and heuristics. It is not a compiler, a runtime trace, or a guarantee of complete behavior.",
      "Product information and support by Facta-Leopard."
    ],
    "privacy": [
      "Privacy policy",
      "Effective: 2026-09-06 · Operator: Facta-Leopard",
      "Your project stays on your Mac. Visiting this website or contacting support is a separate interaction.",
      [
        [
          "The MajorDex app",
          "MajorDex performs local static analysis of folders you explicitly select. Project files are read-only inputs: the app does not build, install, or execute them. It has no app networking, accounts, analytics, tracking, automatic uploads, or remote AI."
        ],
        [
          "What is stored locally",
          "Derived graphs, search indexes, analysis caches, your notes and saved views, folder-access bookmarks, and appearance preferences are stored in the app’s private macOS storage. Source snapshots are processed locally. The publisher does not receive your project or these app records."
        ],
        [
          "Your controls and deletion",
          "“Close Current Project” stops the live session but retains saved access and stored data. In “Manage Stored Data…”, delete a project’s stored data and access, or choose “Delete All…” to remove all project caches, user edits, and saved bookmarks. Original project files are not changed. Appearance preferences may remain. Reopening a project whose saved access was deleted requires selecting its folder again."
        ],
        [
          "Exports and external links",
          "Diagnostic and graph exports are created only when you choose to save them; inspect them before sharing. Exported files remain in the location you chose and must be deleted separately. Optional App Store, developer, privacy, and support links open externally; MajorDex does not attach project data to those links. Destination services have their own policies."
        ],
        [
          "This website",
          "This static site adds no analytics, tracking scripts, cookies, local storage, remote fonts, or embedded third-party services. The language choice is kept only in the page URL. GitHub Pages hosts the site and logs visitors’ IP addresses for security, including visits without a GitHub login. See the linked GitHub documentation and privacy statement below."
        ],
        [
          "Support records",
          "GitHub Issues is public. If you post, your GitHub identity and the content you choose to share are visible to others and processed by GitHub. Facta-Leopard uses support submissions to respond and investigate problems; records may remain to document the discussion. Do not post project source, secrets, personal information, or unredacted diagnostics. App deletion does not delete GitHub records. For removal questions, contact us through support without adding sensitive details; GitHub-controlled records and retention are governed by GitHub."
        ],
        [
          "Questions and updates",
          "For privacy questions, use the support page. Changes to this policy will be published here with an updated effective date. This policy covers MajorDex and this site, not third-party sites you choose to visit."
        ]
      ]
    ],
    "support": [
      "Support",
      "A useful report. No private project required.",
      "Questions and bug reports are handled through the public MajorDex GitHub issue tracker.",
      [
        [
          "Before you post",
          "All issues and attachments are public. Never include source code from private projects, passwords, API keys, personal information, or unredacted diagnostics. Describe the problem using a minimal, non-sensitive example. Posting an issue requires a GitHub account; using MajorDex does not."
        ],
        [
          "Help us reproduce it",
          "Include your MajorDex version, macOS version, the action you took, what you expected, and what happened. Mention whether the issue occurs with a bundled sample. Check screenshots and any optional diagnostic export carefully before attaching them. There is no guaranteed response time."
        ],
        [
          "Folder access and stored data",
          "If access is unavailable, select the project folder again. “Close Current Project” stops the active session without deleting saved access. Use “Manage Stored Data…” for project data and bookmark deletion. Exported files are separate and remain where you saved them."
        ]
      ],
      "Open public issue tracker",
      "Read the privacy policy"
    ]
  },
  "ko": {
    "nav": [
      "소개",
      "개인정보",
      "지원",
      "언어",
      "본문으로 건너뛰기",
      "주요 탐색"
    ],
    "references": ["GitHub Pages — 데이터 수집", "GitHub 개인정보처리방침"],
    "home": [
      "코드의 구조를 읽다.",
      "프로젝트를 실행하지 않고 이해하는 macOS용 로컬 읽기 전용 아키텍처 탐색 도구.",
      "macOS 26 이상 · Apple Silicon",
      "안심하고 탐색하세요.",
      "폴더에서 시작합니다.",
      "살펴볼 프로젝트를 선택하세요. MajorDex는 스냅샷을 읽으며 코드를 빌드·설치·실행하지 않습니다.",
      "연결을 살펴봅니다.",
      "기능 구조와 코드 구조를 오가며 그래프를 검색하고 메모와 저장 뷰를 남기세요.",
      "맥 안에 보관합니다.",
      "분석, 파생 데이터와 사용자 편집은 Mac에 남습니다. 계정, 원격 AI, 분석 추적이 필요하지 않습니다.",
      "추측이 아닌 이해를 위한 도구.",
      "정적 분석은 지원 문법과 휴리스틱 범위에 한정됩니다. 컴파일러나 런타임 추적이 아니며 모든 동작을 완전히 파악한다고 보장하지 않습니다.",
      "Facta-Leopard의 제품 안내 및 지원."
    ],
    "privacy": [
      "개인정보처리방침",
      "시행일: 2026-09-06 · 운영자: Facta-Leopard",
      "프로젝트는 Mac에 남습니다. 웹사이트 방문과 지원 문의는 별도의 데이터 처리입니다.",
      [
        [
          "MajorDex 앱",
          "MajorDex는 사용자가 명시적으로 선택한 폴더를 로컬에서 정적으로 분석합니다. 프로젝트 파일은 읽기 전용 입력이며 빌드·설치·실행하지 않습니다. 앱 네트워크 통신, 계정, 분석 추적, 트래킹, 자동 업로드, 원격 AI가 없습니다."
        ],
        [
          "로컬에 저장되는 정보",
          "파생 그래프, 검색 인덱스, 분석 캐시, 메모와 저장 뷰, 폴더 접근 북마크, 화면 스타일 설정은 macOS의 앱 전용 저장소에 보관됩니다. 소스 스냅샷도 로컬에서 처리합니다. 게시자는 프로젝트나 이러한 앱 데이터를 전달받지 않습니다."
        ],
        [
          "접근 제어와 삭제",
          "‘현재 프로젝트 닫기’는 실행 중인 세션을 종료하지만 저장된 접근 권한과 데이터는 유지합니다. ‘저장 데이터 관리…’에서 프로젝트별 저장 데이터와 접근 권한을 삭제하거나 ‘모두 삭제…’로 모든 프로젝트 캐시, 사용자 편집과 저장 북마크를 삭제할 수 있습니다. 원본 파일은 변경되지 않으며 화면 스타일 설정은 남을 수 있습니다. 접근 권한을 삭제한 프로젝트를 다시 열려면 폴더를 다시 선택해야 합니다."
        ],
        [
          "내보내기와 외부 링크",
          "진단·그래프 파일은 사용자가 저장을 선택할 때만 내보냅니다. 공유 전에 내용을 확인하세요. 내보낸 파일은 선택한 위치에 남으므로 별도로 삭제해야 합니다. 선택적 App Store·개발자·개인정보·지원 링크는 외부에서 열리며 MajorDex는 프로젝트 데이터를 링크에 첨부하지 않습니다. 방문한 서비스에는 해당 서비스의 정책이 적용됩니다."
        ],
        [
          "이 웹사이트",
          "이 정적 사이트는 분석 도구, 추적 스크립트, 쿠키, 로컬 저장소, 원격 폰트, 제3자 임베드를 추가하지 않습니다. 언어 선택은 페이지 URL에만 남습니다. 호스팅 서비스인 GitHub Pages는 로그인 여부와 관계없이 보안을 위해 방문자의 IP 주소를 기록합니다. 아래 GitHub 공식 문서와 개인정보처리방침을 확인하세요."
        ],
        [
          "지원 문의 기록",
          "GitHub Issues는 공개 공간입니다. 게시하면 GitHub 계정 정보와 직접 공유한 내용이 다른 사람에게 보이고 GitHub에서 처리됩니다. Facta-Leopard는 문의 응대와 문제 조사에 해당 내용을 사용하며 논의 기록으로 남을 수 있습니다. 프로젝트 소스, 비밀정보, 개인정보, 검토하지 않은 진단 파일을 게시하지 마세요. 앱 데이터 삭제는 GitHub 기록을 삭제하지 않습니다. 삭제 문의는 민감한 내용을 추가하지 않고 지원으로 전달하세요. GitHub가 관리하는 기록과 보관에는 GitHub 정책이 적용됩니다."
        ],
        [
          "문의 및 변경",
          "개인정보 관련 문의는 지원 페이지를 이용하세요. 방침 변경 시 이 페이지에 갱신된 시행일과 함께 게시합니다. 이 방침은 MajorDex와 이 사이트에 적용되며 사용자가 방문한 제3자 사이트에는 적용되지 않습니다."
        ]
      ]
    ],
    "support": [
      "지원",
      "비공개 프로젝트 없이도 유용한 제보.",
      "질문과 오류 제보는 MajorDex 공개 GitHub 이슈 게시판에서 받습니다.",
      [
        [
          "게시하기 전에",
          "모든 이슈와 첨부파일은 공개됩니다. 비공개 소스 코드, 비밀번호, API 키, 개인정보, 검토하지 않은 진단 파일을 넣지 마세요. 민감하지 않은 최소 예제로 설명하세요. 이슈 작성에는 GitHub 계정이 필요하지만 MajorDex 사용에는 필요하지 않습니다."
        ],
        [
          "재현에 필요한 정보",
          "MajorDex 버전, macOS 버전, 수행한 동작, 기대한 결과와 실제 결과를 알려주세요. 내장 샘플에서도 발생하는지 확인하고, 스크린샷과 선택적 진단 내보내기 파일을 첨부하기 전에 검토하세요. 응답 시간을 보장하지 않습니다."
        ],
        [
          "폴더 접근과 저장 데이터",
          "접근할 수 없으면 프로젝트 폴더를 다시 선택하세요. ‘현재 프로젝트 닫기’는 활성 세션만 종료하고 저장된 접근 권한은 삭제하지 않습니다. 데이터와 북마크 삭제는 ‘저장 데이터 관리…’를 이용하세요. 내보낸 파일은 저장한 위치에 별도로 남습니다."
        ]
      ],
      "공개 이슈 게시판 열기",
      "개인정보처리방침 읽기"
    ]
  },
  "fr": {
    "nav": [
      "Présentation",
      "Confidentialité",
      "Assistance",
      "Langue",
      "Aller au contenu",
      "Navigation principale"
    ],
    "references": ["GitHub Pages — Collecte de données", "Déclaration de confidentialité de GitHub"],
    "home": [
      "Lisez la structure de votre code.",
      "Un explorateur d’architecture local et en lecture seule pour macOS. Comprenez votre projet sans l’exécuter.",
      "macOS 26+ · Apple Silicon",
      "Explorez en confiance.",
      "Commencez par un dossier.",
      "Choisissez votre projet. MajorDex lit un instantané sans compiler, installer ni exécuter votre code.",
      "Découvrez les liens.",
      "Passez de la structure fonctionnelle à celle du code, recherchez dans le graphe et conservez vos notes et vues.",
      "Gardez tout sur votre Mac.",
      "Analyses, données dérivées et modifications restent sur votre Mac. Aucun compte, IA distante ou outil d’analyse d’usage requis.",
      "Pour comprendre, sans fausses certitudes.",
      "L’analyse statique couvre les syntaxes et heuristiques prises en charge. Ce n’est ni un compilateur ni une trace d’exécution, et elle ne garantit pas une description exhaustive.",
      "Informations produit et assistance par Facta-Leopard."
    ],
    "privacy": [
      "Politique de confidentialité",
      "Prise d’effet : 2026-09-06 · Responsable : Facta-Leopard",
      "Votre projet reste sur votre Mac. La visite du site et les demandes d’assistance sont des interactions distinctes.",
      [
        [
          "L’application MajorDex",
          "MajorDex analyse localement les dossiers que vous sélectionnez explicitement. Les fichiers sont des entrées en lecture seule : aucune compilation, installation ou exécution. L’app n’utilise ni réseau, comptes, mesure d’audience, suivi, envoi automatique ni IA distante."
        ],
        [
          "Stockage local",
          "Graphes dérivés, index de recherche, caches, notes, vues enregistrées, signets d’accès aux dossiers et préférences d’apparence restent dans le stockage privé de l’app sur macOS. Les instantanés du code sont traités localement. L’éditeur ne reçoit ni votre projet ni ces données."
        ],
        [
          "Contrôle et suppression",
          "« Fermer le projet actuel » termine la session mais conserve l’accès et les données enregistrés. Dans « Gérer les données stockées... », supprimez les données et l’accès d’un projet, ou choisissez « Tout supprimer... » pour effacer caches, modifications et signets de tous les projets. Les fichiers originaux restent inchangés ; les préférences d’apparence peuvent subsister. Après suppression de l’accès, sélectionnez à nouveau le dossier pour le rouvrir."
        ],
        [
          "Exports et liens externes",
          "Les exports de graphes et diagnostics sont créés uniquement lorsque vous choisissez de les enregistrer. Vérifiez-les avant partage. Ils restent à l’emplacement choisi et doivent être supprimés séparément. Les liens facultatifs vers l’App Store, le développeur, la confidentialité et l’assistance s’ouvrent à l’extérieur, sans données du projet jointes par MajorDex. Les politiques des services visités s’appliquent."
        ],
        [
          "Ce site",
          "Ce site statique n’ajoute ni mesure d’audience, scripts de suivi, cookies, stockage local, polices distantes ni services tiers intégrés. La langue figure uniquement dans l’URL. L’hébergeur GitHub Pages consigne les adresses IP à des fins de sécurité, même sans connexion GitHub. Consultez les documents GitHub ci-dessous."
        ],
        [
          "Demandes d’assistance",
          "GitHub Issues est public. Votre identité GitHub et le contenu envoyé sont visibles et traités par GitHub. Facta-Leopard utilise les demandes pour répondre et enquêter ; elles peuvent rester comme historique de discussion. Ne publiez aucun code privé, secret, renseignement personnel ou diagnostic non vérifié. Effacer l’app n’efface pas GitHub. Posez vos questions de suppression via l’assistance sans détails sensibles. Les données et durées de conservation contrôlées par GitHub relèvent de ses politiques."
        ],
        [
          "Questions et modifications",
          "Contactez l’assistance pour toute question de confidentialité. Les modifications sont publiées ici avec une nouvelle date d’effet. Cette politique couvre MajorDex et ce site, pas les sites tiers."
        ]
      ]
    ],
    "support": [
      "Assistance",
      "Un rapport utile, sans projet privé.",
      "Questions et signalements passent par le suivi public GitHub de MajorDex.",
      [
        [
          "Avant de publier",
          "Les issues et pièces jointes sont publiques. N’envoyez ni code privé, mots de passe, clés API, données personnelles ni diagnostics non vérifiés. Utilisez un exemple minimal non sensible. GitHub exige un compte pour publier une issue, pas MajorDex pour fonctionner."
        ],
        [
          "Pour reproduire le problème",
          "Indiquez les versions de MajorDex et macOS, les étapes, le résultat attendu et le résultat obtenu. Précisez si un exemple intégré est concerné. Vérifiez captures et diagnostics facultatifs avant de les joindre. Aucun délai de réponse n’est garanti."
        ],
        [
          "Accès et données",
          "Si l’accès est indisponible, sélectionnez à nouveau le dossier. « Fermer le projet actuel » termine la session sans supprimer l’accès enregistré. Utilisez « Gérer les données stockées... » pour effacer les données et signets. Les exports restent séparément là où vous les avez enregistrés."
        ]
      ],
      "Ouvrir les issues publiques",
      "Lire la politique de confidentialité"
    ]
  },
  "es": {
    "nav": [
      "Información",
      "Privacidad",
      "Soporte",
      "Idioma",
      "Saltar al contenido",
      "Navegación principal"
    ],
    "references": ["GitHub Pages — Recopilación de datos", "Declaración de privacidad de GitHub"],
    "home": [
      "Lee la estructura de tu código.",
      "Un explorador de arquitectura local y de solo lectura para macOS. Comprende tu proyecto sin ejecutarlo.",
      "macOS 26+ · Apple Silicon",
      "Explora con confianza.",
      "Empieza con una carpeta.",
      "Elige tu proyecto. MajorDex lee una instantánea sin compilar, instalar ni ejecutar el código.",
      "Descubre las conexiones.",
      "Alterna entre estructura funcional y del código, busca en el grafo y guarda notas y vistas.",
      "Todo en tu Mac.",
      "El análisis, los datos derivados y tus cambios permanecen en el Mac. Sin cuentas, IA remota ni analítica de uso.",
      "Para comprender, sin falsas certezas.",
      "El análisis estático abarca sintaxis y heurísticas compatibles. No es un compilador ni una traza de ejecución, y no garantiza una descripción completa del comportamiento.",
      "Información y soporte de Facta-Leopard."
    ],
    "privacy": [
      "Política de privacidad",
      "Vigente desde: 2026-09-06 · Responsable: Facta-Leopard",
      "Tu proyecto permanece en el Mac. Visitar esta web o contactar con soporte son interacciones distintas.",
      [
        [
          "La aplicación MajorDex",
          "MajorDex analiza localmente las carpetas que seleccionas expresamente. Los archivos son entradas de solo lectura: no se compilan, instalan ni ejecutan. La app no utiliza red, cuentas, analítica, seguimiento, envíos automáticos ni IA remota."
        ],
        [
          "Almacenamiento local",
          "Grafos derivados, índices de búsqueda, cachés, notas, vistas guardadas, marcadores de acceso a carpetas y preferencias de apariencia se guardan en el almacenamiento privado de la app en macOS. Las instantáneas del código se procesan localmente. El editor no recibe tu proyecto ni estos datos."
        ],
        [
          "Control y eliminación",
          "«Cerrar proyecto actual» termina la sesión, pero conserva el acceso y los datos guardados. En «Gestionar datos guardados…», elimina los datos y el acceso de un proyecto o elige «Eliminar todo…» para borrar cachés, cambios y marcadores de todos los proyectos. Los archivos originales no cambian; las preferencias de apariencia pueden permanecer. Tras eliminar el acceso, debes seleccionar otra vez la carpeta para abrirla."
        ],
        [
          "Exportaciones y enlaces",
          "Los grafos y diagnósticos solo se exportan cuando eliges guardarlos. Revísalos antes de compartirlos. Permanecen en el destino elegido y debes eliminarlos por separado. Los enlaces opcionales a App Store, desarrollador, privacidad y soporte se abren externamente; MajorDex no adjunta datos del proyecto. Se aplican las políticas del destino."
        ],
        [
          "Esta web",
          "Este sitio estático no añade analítica, scripts de seguimiento, cookies, almacenamiento local, fuentes remotas ni servicios externos incrustados. El idioma solo figura en la URL. GitHub Pages aloja el sitio y registra las IP de visitantes por seguridad, incluso sin iniciar sesión. Consulta la documentación y política de GitHub enlazadas abajo."
        ],
        [
          "Registros de soporte",
          "GitHub Issues es público. Tu identidad GitHub y lo que publiques son visibles y tratados por GitHub. Facta-Leopard usa las consultas para responder e investigar; pueden conservarse como historial. No publiques código privado, secretos, información personal ni diagnósticos sin revisar. Eliminar datos de la app no elimina registros de GitHub. Consulta sobre eliminación mediante soporte sin incluir detalles sensibles; GitHub controla sus propios registros y plazos de conservación."
        ],
        [
          "Consultas y cambios",
          "Para preguntas de privacidad, visita soporte. Los cambios se publican aquí con la nueva fecha de vigencia. Esta política cubre MajorDex y esta web, no los sitios externos."
        ]
      ]
    ],
    "support": [
      "Soporte",
      "Un informe útil, sin tu proyecto privado.",
      "Recibimos preguntas y errores en el gestor público de incidencias de MajorDex en GitHub.",
      [
        [
          "Antes de publicar",
          "Las incidencias y adjuntos son públicos. No incluyas código privado, contraseñas, claves API, datos personales ni diagnósticos sin revisar. Usa un ejemplo mínimo no sensible. Para publicar necesitas una cuenta GitHub; para usar MajorDex, no."
        ],
        [
          "Ayúdanos a reproducirlo",
          "Indica versiones de MajorDex y macOS, pasos, resultado esperado y real. Menciona si ocurre con un ejemplo integrado. Revisa capturas y exportaciones diagnósticas opcionales antes de adjuntarlas. No se garantiza un plazo de respuesta."
        ],
        [
          "Acceso y datos",
          "Si el acceso falla, selecciona de nuevo la carpeta. «Cerrar proyecto actual» termina la sesión sin borrar el acceso guardado. Usa «Gestionar datos guardados…» para borrar datos y marcadores. Las exportaciones permanecen por separado donde las guardaste."
        ]
      ],
      "Abrir incidencias públicas",
      "Leer la política de privacidad"
    ]
  },
  "de": {
    "nav": [
      "Überblick",
      "Datenschutz",
      "Support",
      "Sprache",
      "Zum Inhalt",
      "Hauptnavigation"
    ],
    "references": ["GitHub Pages — Datenerhebung", "GitHub-Datenschutzerklärung"],
    "home": [
      "Erkenne die Struktur deines Codes.",
      "Ein lokaler Architektur-Explorer mit reinem Lesezugriff für macOS. Verstehe dein Projekt, ohne es auszuführen.",
      "macOS 26+ · Apple Silicon",
      "Mit Vertrauen erkunden.",
      "Mit einem Ordner beginnen.",
      "Wähle dein Projekt. MajorDex liest eine Momentaufnahme, ohne Code zu bauen, zu installieren oder auszuführen.",
      "Verbindungen erkennen.",
      "Wechsle zwischen Funktions- und Codestruktur, durchsuche den Graphen und speichere Notizen und Ansichten.",
      "Alles bleibt auf deinem Mac.",
      "Analyse, abgeleitete Daten und Bearbeitungen bleiben lokal. Kein Konto, keine externe KI und keine Nutzungsanalyse nötig.",
      "Verstehen statt spekulieren.",
      "Die statische Analyse umfasst unterstützte Syntax und Heuristiken. Sie ist weder Compiler noch Laufzeit-Trace und garantiert keine vollständige Verhaltensbeschreibung.",
      "Produktinformationen und Support von Facta-Leopard."
    ],
    "privacy": [
      "Datenschutzerklärung",
      "Gültig ab: 2026-09-06 · Betreiber: Facta-Leopard",
      "Dein Projekt bleibt auf deinem Mac. Websitebesuche und Supportanfragen sind getrennte Vorgänge.",
      [
        [
          "Die MajorDex-App",
          "MajorDex analysiert ausdrücklich ausgewählte Ordner lokal und statisch. Projektdateien dienen nur als Leseeingabe: kein Bauen, Installieren oder Ausführen. Die App hat keine Netzwerkkommunikation, Konten, Nutzungsanalyse, Tracking, automatischen Uploads oder externe KI."
        ],
        [
          "Lokale Speicherung",
          "Abgeleitete Graphen, Suchindizes, Caches, Notizen, gespeicherte Ansichten, Ordner-Zugriffslesezeichen und Darstellungseinstellungen liegen im privaten App-Speicher unter macOS. Code-Momentaufnahmen werden lokal verarbeitet. Der Herausgeber erhält weder dein Projekt noch diese App-Daten."
        ],
        [
          "Kontrolle und Löschung",
          "„Aktuelles Projekt schließen“ beendet die Sitzung, behält aber gespeicherte Zugriffe und Daten. In „Gesicherte Daten verwalten …“ kannst du Daten und Zugriff eines Projekts löschen oder „Alle löschen …“ wählen, um alle Projekt-Caches, Bearbeitungen und Lesezeichen zu entfernen. Originaldateien bleiben unverändert; Darstellungseinstellungen können erhalten bleiben. Nach dem Löschen des Zugriffs musst du den Ordner erneut auswählen."
        ],
        [
          "Exporte und externe Links",
          "Graphen und Diagnosen werden nur auf deinen Speicherbefehl exportiert. Prüfe sie vor dem Teilen. Exporte bleiben am gewählten Ort und müssen separat gelöscht werden. Optionale Links zu App Store, Entwickler, Datenschutz und Support öffnen extern; MajorDex hängt keine Projektdaten an. Es gelten die Regeln der Zielanbieter."
        ],
        [
          "Diese Website",
          "Diese statische Website ergänzt keine Nutzungsanalyse, Tracking-Skripte, Cookies, lokalen Speicher, externen Schriften oder eingebetteten Drittanbieterdienste. Die Sprache steht nur in der URL. GitHub Pages hostet die Seite und protokolliert IP-Adressen aus Sicherheitsgründen, auch ohne GitHub-Anmeldung. Siehe die unten verlinkten GitHub-Dokumente."
        ],
        [
          "Supportdaten",
          "GitHub Issues ist öffentlich. Dein GitHub-Profil und deine Beiträge sind sichtbar und werden von GitHub verarbeitet. Facta-Leopard verwendet Anfragen zur Beantwortung und Fehlersuche; sie können als Diskussionsverlauf bestehen bleiben. Veröffentliche keinen privaten Code, Geheimnisse, personenbezogenen Daten oder ungeprüften Diagnosen. App-Löschung löscht keine GitHub-Daten. Löschfragen bitte ohne sensible Details an den Support richten. GitHub kontrolliert seine eigenen Datensätze und Aufbewahrungsfristen."
        ],
        [
          "Fragen und Änderungen",
          "Datenschutzfragen kannst du über die Supportseite stellen. Änderungen erscheinen hier mit aktualisiertem Gültigkeitsdatum. Diese Erklärung gilt für MajorDex und diese Website, nicht für besuchte Drittseiten."
        ]
      ]
    ],
    "support": [
      "Support",
      "Ein hilfreicher Bericht. Kein privates Projekt nötig.",
      "Fragen und Fehlerberichte gehen an den öffentlichen GitHub-Issue-Tracker von MajorDex.",
      [
        [
          "Vor dem Veröffentlichen",
          "Issues und Anhänge sind öffentlich. Kein privater Quellcode, Passwörter, API-Schlüssel, personenbezogene Daten oder ungeprüfte Diagnosen. Beschreibe das Problem mit einem kleinen, unkritischen Beispiel. GitHub verlangt ein Konto zum Veröffentlichen; MajorDex nicht zur Nutzung."
        ],
        [
          "Reproduzierbare Angaben",
          "Nenne MajorDex- und macOS-Version, Schritte, erwartetes und tatsächliches Ergebnis sowie das Verhalten mit einem integrierten Beispiel. Prüfe Screenshots und optionale Diagnoseexporte vor dem Anhängen. Eine Antwortfrist wird nicht garantiert."
        ],
        [
          "Ordnerzugriff und Daten",
          "Wähle den Ordner erneut, falls der Zugriff fehlt. „Aktuelles Projekt schließen“ beendet die Sitzung, nicht den gespeicherten Zugriff. Lösche Daten und Lesezeichen über „Gesicherte Daten verwalten …“. Exportdateien bleiben separat an ihrem Speicherort."
        ]
      ],
      "Öffentlichen Issue-Tracker öffnen",
      "Datenschutzerklärung lesen"
    ]
  },
  "ja": {
    "nav": [
      "概要",
      "プライバシー",
      "サポート",
      "言語",
      "本文へスキップ",
      "メインナビゲーション"
    ],
    "references": ["GitHub Pages — データ収集", "GitHub プライバシーステートメント"],
    "home": [
      "コードの構造を読み解く。",
      "プロジェクトを実行せずに理解する、macOS向けのローカル・読み取り専用アーキテクチャ探索ツール。",
      "macOS 26以降 · Apple Silicon",
      "安心して探索。",
      "フォルダから始める。",
      "調べるプロジェクトを選択。MajorDexはスナップショットを読み取り、コードをビルド・インストール・実行しません。",
      "つながりを見つける。",
      "機能構造とコード構造を切り替え、グラフを検索し、メモやビューを保存できます。",
      "情報はMacの中に。",
      "解析、派生データ、編集内容はMacに保存されます。アカウント、リモートAI、利用状況分析は不要です。",
      "推測ではなく理解のために。",
      "静的解析は対応する構文とヒューリスティックの範囲に限られます。コンパイラや実行トレースではなく、動作の完全な把握を保証するものではありません。",
      "Facta-Leopardによる製品情報とサポート。"
    ],
    "privacy": [
      "プライバシーポリシー",
      "施行日：2026-09-06 · 運営者：Facta-Leopard",
      "プロジェクトはMacに残ります。ウェブサイトの閲覧とサポートへの連絡は別のデータ処理です。",
      [
        [
          "MajorDexアプリ",
          "明示的に選択したフォルダをローカルで静的解析します。プロジェクトファイルは読み取り専用の入力で、ビルド・インストール・実行しません。アプリのネットワーク通信、アカウント、利用状況分析、追跡、自動アップロード、リモートAIはありません。"
        ],
        [
          "ローカルに保存する情報",
          "派生グラフ、検索インデックス、キャッシュ、メモ、保存ビュー、フォルダアクセスのブックマーク、外観設定をmacOSのアプリ専用領域に保存します。ソースのスナップショットもローカル処理です。公開者がプロジェクトやこれらのアプリデータを受信することはありません。"
        ],
        [
          "アクセス管理と削除",
          "「現在のプロジェクトを閉じる」はセッションを終了しますが、保存済みのアクセスとデータは残ります。「保存データの管理…」でプロジェクトのデータとアクセスを削除するか、「すべて削除…」を選ぶと、全プロジェクトのキャッシュ、編集内容、保存ブックマークを削除できます。元のファイルは変わりません。外観設定は残る場合があります。アクセスを削除したプロジェクトを開くにはフォルダを再選択します。"
        ],
        [
          "書き出しと外部リンク",
          "診断やグラフは保存を選んだ場合のみ書き出されます。共有前に内容を確認してください。書き出したファイルは選択した場所に残り、別途削除が必要です。任意のApp Store、開発者、プライバシー、サポートのリンクは外部で開かれ、MajorDexはプロジェクトデータを添付しません。移動先のポリシーが適用されます。"
        ],
        [
          "このウェブサイト",
          "この静的サイトは利用状況分析、追跡スクリプト、Cookie、ローカルストレージ、外部フォント、第三者サービスの埋め込みを追加しません。言語選択はURLにのみ保持します。ホスティングのGitHub Pagesはログインの有無にかかわらず、安全のため訪問者のIPアドレスを記録します。以下のGitHub公式文書をご確認ください。"
        ],
        [
          "サポート記録",
          "GitHub Issuesは公開です。投稿したGitHubの識別情報と内容は他の人にも見え、GitHubが処理します。Facta-Leopardは回答と調査に利用し、議論の記録として残る場合があります。非公開コード、秘密情報、個人情報、未確認の診断を投稿しないでください。アプリのデータ削除でGitHub記録は削除されません。削除に関する質問は機密情報を加えずサポートへお寄せください。GitHub管理下の記録と保存期間はGitHubのポリシーに従います。"
        ],
        [
          "お問い合わせと変更",
          "プライバシーの質問はサポートページへ。この方針の変更は施行日を更新して掲載します。対象はMajorDexとこのサイトであり、外部サイトには適用されません。"
        ]
      ]
    ],
    "support": [
      "サポート",
      "非公開プロジェクトなしで、役立つ報告を。",
      "質問と不具合報告はMajorDexの公開GitHubイシュートラッカーで受け付けます。",
      [
        [
          "投稿前の確認",
          "すべてのイシューと添付は公開です。非公開コード、パスワード、APIキー、個人情報、未確認の診断を含めないでください。機密性のない最小限の例で説明してください。投稿にはGitHubアカウントが必要ですが、MajorDexの利用には不要です。"
        ],
        [
          "再現のための情報",
          "MajorDexとmacOSのバージョン、操作手順、期待した結果と実際の結果を記載してください。内蔵サンプルでも発生するかを確認し、画像や任意の診断書き出しは添付前に見直してください。回答までの時間は保証しません。"
        ],
        [
          "フォルダアクセスとデータ",
          "アクセスできない場合はフォルダを再選択してください。「現在のプロジェクトを閉じる」は保存アクセスを削除せずにセッションを終了します。データとブックマークの削除は「保存データの管理…」で行います。書き出したファイルは保存先に別途残ります。"
        ]
      ],
      "公開イシュートラッカーを開く",
      "プライバシーポリシーを読む"
    ]
  },
  "zh-Hans": {
    "nav": [
      "概览",
      "隐私",
      "支持",
      "语言",
      "跳至正文",
      "主导航"
    ],
    "references": ["GitHub Pages — 数据收集", "GitHub 隐私声明"],
    "home": [
      "读懂代码的结构。",
      "适用于 macOS 的本地只读架构探索工具。无需运行项目，即可了解其结构。",
      "macOS 26 及以上 · Apple Silicon",
      "安心探索。",
      "从文件夹开始。",
      "选择要查看的项目。MajorDex 读取快照，不会构建、安装或执行代码。",
      "发现联系。",
      "在功能结构和代码结构之间切换，搜索图谱，保存笔记和视图。",
      "信息留在 Mac 上。",
      "分析、派生数据和编辑内容保留在你的 Mac 上。无需账户、远程 AI 或使用情况分析。",
      "为理解而设计，而非猜测。",
      "静态分析仅涵盖支持的语法和启发式规则。它不是编译器或运行时跟踪，也不保证完整描述所有行为。",
      "Facta-Leopard 提供产品信息与支持。"
    ],
    "privacy": [
      "隐私政策",
      "生效日期：2026-09-06 · 运营者：Facta-Leopard",
      "项目保留在你的 Mac 上。访问本网站或联系支持属于独立的数据处理。",
      [
        [
          "MajorDex 应用",
          "MajorDex 在本地静态分析你明确选择的文件夹。项目文件仅作为只读输入，不会被构建、安装或执行。应用不使用网络通信、账户、使用分析、跟踪、自动上传或远程 AI。"
        ],
        [
          "本地保存的信息",
          "派生图谱、搜索索引、分析缓存、笔记、已保存视图、文件夹访问书签和外观设置保存在 macOS 的应用专用存储空间。源码快照也在本地处理。发布者不会收到你的项目或这些应用数据。"
        ],
        [
          "控制与删除",
          "“关闭当前项目”会结束活动会话，但保留已保存的访问权限和数据。在“管理存储的数据…”中，可删除某项目的数据和访问权限，或选择“全部删除…”移除所有项目的缓存、用户编辑和书签。原始文件不会改变，外观设置可能保留。删除访问权限后，重新打开项目需要再次选择文件夹。"
        ],
        [
          "导出与外部链接",
          "只有在你选择保存时，应用才会导出诊断或图谱。分享前请检查内容。导出文件保留在所选位置，需要单独删除。可选的 App Store、开发者、隐私和支持链接在外部打开；MajorDex 不会向链接附加项目数据。目标服务适用其自身政策。"
        ],
        [
          "本网站",
          "此静态网站不添加分析工具、跟踪脚本、Cookie、本地存储、远程字体或第三方嵌入服务。语言选择仅保存在页面 URL 中。GitHub Pages 托管网站，并出于安全目的记录访问者 IP，无论是否登录 GitHub。请参阅下方 GitHub 官方文档和隐私声明。"
        ],
        [
          "支持记录",
          "GitHub Issues 是公开的。发帖后，你的 GitHub 身份和分享的内容对他人可见，并由 GitHub 处理。Facta-Leopard 用于回复和排查问题，记录可能作为讨论历史保留。请勿发布私有源码、秘密、个人信息或未经检查的诊断。删除应用数据不会删除 GitHub 记录。删除相关问题请通过支持提出，不要添加敏感细节；GitHub 管理的记录及保存期限遵循 GitHub 政策。"
        ],
        [
          "问题与更新",
          "隐私问题请访问支持页面。政策变更会在此发布并更新生效日期。本政策适用于 MajorDex 和此网站，不适用于你访问的第三方网站。"
        ]
      ]
    ],
    "support": [
      "支持",
      "有用的报告，无需私有项目。",
      "请通过 MajorDex 的公开 GitHub 问题跟踪器提出问题或报告错误。",
      [
        [
          "发布之前",
          "所有问题及附件均公开。不要包含私有源码、密码、API 密钥、个人信息或未经检查的诊断。请使用不含敏感信息的最小示例。发帖需要 GitHub 账户，使用 MajorDex 不需要。"
        ],
        [
          "帮助复现",
          "请提供 MajorDex 和 macOS 版本、操作步骤、预期结果和实际结果，以及内置示例是否也出现问题。附加截图或可选诊断导出前请仔细检查。不保证回复时间。"
        ],
        [
          "文件夹访问与数据",
          "无法访问时，请重新选择项目文件夹。“关闭当前项目”只结束会话，不删除已保存的访问权限。使用“管理存储的数据…”删除数据和书签。导出文件单独保留在保存位置。"
        ]
      ],
      "打开公开问题跟踪器",
      "阅读隐私政策"
    ]
  },
  "zh-Hant": {
    "nav": [
      "概覽",
      "隱私權",
      "支援",
      "語言",
      "跳至正文",
      "主要導覽"
    ],
    "references": ["GitHub Pages — 資料蒐集", "GitHub 隱私權聲明"],
    "home": [
      "讀懂程式碼的結構。",
      "適用於 macOS 的本機唯讀架構探索工具。不必執行專案，即可了解其結構。",
      "macOS 26 以上 · Apple Silicon",
      "安心探索。",
      "從資料夾開始。",
      "選擇要查看的專案。MajorDex 讀取快照，不會建置、安裝或執行程式碼。",
      "發現連結。",
      "在功能結構和程式碼結構間切換、搜尋圖譜，並儲存筆記和檢視。",
      "資訊留在 Mac 上。",
      "分析、衍生資料和編輯內容保留在你的 Mac 上。不需帳號、遠端 AI 或使用情況分析。",
      "為理解而設計，而非猜測。",
      "靜態分析僅涵蓋支援的語法與啟發式規則。它不是編譯器或執行階段追蹤，也不保證完整描述所有行為。",
      "Facta-Leopard 提供產品資訊與支援。"
    ],
    "privacy": [
      "隱私權政策",
      "生效日期：2026-09-06 · 營運者：Facta-Leopard",
      "專案保留在你的 Mac 上。造訪本網站或聯絡支援屬於獨立的資料處理。",
      [
        [
          "MajorDex 應用程式",
          "MajorDex 在本機靜態分析你明確選取的資料夾。專案檔案僅作為唯讀輸入，不會被建置、安裝或執行。應用程式不使用網路通訊、帳號、使用分析、追蹤、自動上傳或遠端 AI。"
        ],
        [
          "本機儲存的資訊",
          "衍生圖譜、搜尋索引、分析快取、筆記、已存檢視、資料夾存取書籤及外觀設定，儲存在 macOS 的應用程式專用空間。原始碼快照也在本機處理。發行者不會收到你的專案或這些應用程式資料。"
        ],
        [
          "控制與刪除",
          "「關閉目前專案」會結束活動工作階段，但保留已儲存的存取權和資料。在「管理儲存的資料…」中，可刪除某專案的資料和存取權，或選擇「全部刪除…」移除所有專案的快取、使用者編輯和書籤。原始檔案不會改變，外觀設定可能保留。刪除存取權後，再次開啟專案需要重新選取資料夾。"
        ],
        [
          "匯出與外部連結",
          "只有你選擇儲存時，才會匯出診斷或圖譜。分享前請檢查內容。匯出檔案保留在所選位置，必須另外刪除。選用的 App Store、開發者、隱私權及支援連結會在外部開啟；MajorDex 不會在連結附加專案資料。目的地服務適用其自身政策。"
        ],
        [
          "本網站",
          "此靜態網站不加入分析工具、追蹤指令碼、Cookie、本機儲存、遠端字型或第三方嵌入服務。語言選擇僅保留在頁面 URL。GitHub Pages 託管網站，並基於安全目的記錄訪客 IP，不論是否登入 GitHub。請參閱下方 GitHub 官方文件及隱私權聲明。"
        ],
        [
          "支援紀錄",
          "GitHub Issues 是公開的。發文後，你的 GitHub 身分和分享的內容對他人可見，並由 GitHub 處理。Facta-Leopard 用於回覆與調查問題，紀錄可能作為討論歷史保留。請勿張貼私人原始碼、秘密、個人資料或未經檢查的診斷。刪除應用程式資料不會刪除 GitHub 紀錄。刪除相關問題請透過支援提出，不要添加敏感細節；GitHub 管理的紀錄與保存期限依其政策處理。"
        ],
        [
          "問題與更新",
          "隱私權問題請造訪支援頁面。政策變更會在此公布，並更新生效日期。本政策適用於 MajorDex 和此網站，不適用於你造訪的第三方網站。"
        ]
      ]
    ],
    "support": [
      "支援",
      "實用的報告，不需私人專案。",
      "請透過 MajorDex 公開 GitHub 問題追蹤器提問或回報錯誤。",
      [
        [
          "發布之前",
          "所有問題與附件皆公開。不要包含私人原始碼、密碼、API 金鑰、個人資料或未經檢查的診斷。請使用不含敏感資訊的最小範例。發文需要 GitHub 帳號，使用 MajorDex 不需要。"
        ],
        [
          "協助重現",
          "請提供 MajorDex 與 macOS 版本、操作步驟、預期及實際結果，以及內建範例是否也出現問題。附加截圖或選用的診斷匯出前請仔細檢查。不保證回覆時間。"
        ],
        [
          "資料夾存取與資料",
          "無法存取時，請重新選取專案資料夾。「關閉目前專案」只結束工作階段，不刪除已存存取權。使用「管理儲存的資料…」刪除資料與書籤。匯出檔案另外保留在儲存位置。"
        ]
      ],
      "開啟公開問題追蹤器",
      "閱讀隱私權政策"
    ]
  }
};

(() => {
  const parameters = new URLSearchParams(window.location.search);
  const requested = parameters.get("lang");
  const language = Object.hasOwn(translations, requested) ? requested : "en";
  const strings = translations[language];
  document.documentElement.lang = language;
  for (const element of document.querySelectorAll("[data-copy]")) {
    const value = element.dataset.copy.split(".").reduce((item, key) => item?.[key], strings);
    if (typeof value === "string") element.textContent = value;
  }
  for (const element of document.querySelectorAll("nav[aria-label=\"Main\"]")) {
    element.setAttribute("aria-label", strings.nav[5]);
  }
  for (const [index, element] of [...document.querySelectorAll(".references a")].entries()) {
    if (typeof strings.references[index] === "string") element.textContent = strings.references[index];
  }
  const page = document.body.dataset.page;
  document.title = "MajorDex — " + (page === "index" ? strings.nav[0] : strings[page][0]);
  for (const link of document.querySelectorAll("a[data-local]")) {
    const url = new URL(link.getAttribute("href"), window.location.href);
    url.searchParams.set("lang", language);
    link.href = url.href;
    const target = url.pathname.split("/").pop() || "index.html";
    if (target === page + ".html") link.setAttribute("aria-current", "page");
  }
  const picker = document.getElementById("language");
  picker.value = language;
  picker.parentElement.hidden = false;
  picker.addEventListener("change", () => {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", picker.value);
    window.location.assign(url.href);
  });
})();
