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
    "references": [
      "GitHub Pages — Data collection",
      "GitHub Privacy Statement"
    ],
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
      "This policy explains what MajorDex stores on your Mac and how information is handled when you visit this website or contact support.",
      [
        [
          "How the app handles your project",
          "MajorDex uses static analysis to examine the folders you select, on your Mac and in read-only mode. It does not build or run your code, or install anything from the project. The app does not connect to the network, upload project data automatically, collect usage analytics, track users, or use remote AI services. MajorDex has no user account system."
        ],
        [
          "Information stored on your Mac",
          "MajorDex keeps its analysis graphs, search indexes, caches, notes, saved views, and appearance settings in the app’s private storage on your Mac. It also saves folder-access bookmarks so you can reopen folders you have selected. The source-file snapshots used for analysis are processed locally. The app does not send your project or this stored information to the developer."
        ],
        [
          "Deleting stored data and folder access",
          "“Close Current Project” closes the project in MajorDex without deleting its stored data or saved folder access. To remove a project’s data and access, use “Manage Stored Data…”. “Delete All…” removes analysis caches, your edits, and saved folder-access bookmarks for all projects. Your original project files are left unchanged, and appearance settings may remain. After deleting saved access, you will need to select the folder again to reopen the project."
        ],
        [
          "Exported files and external links",
          "Graph and diagnostic files are exported only when you choose to save them. They remain in the location you selected and must be deleted separately, even if you remove the app’s stored data. Please check their contents before sharing them. Links to the App Store, the developer’s other apps, the privacy policy, or support open outside MajorDex. The app does not include project data in these links. Any site or service you visit handles information under its own policy."
        ],
        [
          "When you visit this website",
          "This website does not use analytics or tracking tools, cookies, browser local storage, externally hosted fonts, or embedded third-party services. Your language choice is kept only in the page URL. The site is hosted on GitHub Pages, which logs visitors’ IP addresses for security, whether or not they are signed in to GitHub. The GitHub documentation and privacy statement linked below explain that service’s practices."
        ],
        [
          "Information you share with support",
          "Support is provided through GitHub Issues, a public forum. If you post there, your public GitHub profile, message, and any attachments can be seen by others and are processed by GitHub. Facta-Leopard uses this information to respond to questions and investigate problems. Posts may remain as a record of the discussion and any resolution. Please do not include project source code, passwords, API keys, personal information, or diagnostics that still contain sensitive details. Deleting MajorDex or its stored data does not delete posts on GitHub. For questions about removing a post, contact support without adding sensitive information. Records held by GitHub are subject to GitHub’s own handling and retention policies."
        ],
        [
          "Questions and policy updates",
          "If you have a question about privacy, please use the contact channel on the support page. Any changes to this policy will be published here with an updated effective date. This policy applies to MajorDex and this website, not to other websites you choose to visit."
        ]
      ]
    ],
    "support": [
      "Support",
      "Get help with MajorDex",
      "For questions or bug reports, please use the public MajorDex issue tracker on GitHub.",
      [
        [
          "Before you post",
          "Everyone can read issues and attachments on GitHub. Please do not include private project code, passwords, API keys, personal information, or diagnostic files that contain sensitive details. A small, non-sensitive example is enough; you do not need to share your entire project. You need a GitHub account to post an issue, but not to use MajorDex."
        ],
        [
          "What to include",
          "Please include your MajorDex and macOS versions, the steps that led to the problem, what you expected, and what actually happened. Let us know whether you can reproduce it with one of the app’s built-in samples. Screenshots or exported diagnostics are optional; check their contents before attaching them. Response times can vary, so we cannot promise a reply within a set timeframe."
        ],
        [
          "Folder access and stored data",
          "If MajorDex can no longer access a project folder, select the folder again. “Close Current Project” closes the project without removing its stored data or saved folder access. Use “Manage Stored Data…” to delete project data and saved access. Exported files are separate from the app’s stored data and remain where you saved them."
        ]
      ],
      "Open the public issue tracker",
      "View the privacy policy"
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
    "references": [
      "GitHub Pages — 데이터 수집",
      "GitHub 개인정보처리방침"
    ],
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
      "앱에 저장되는 정보와 삭제 방법, 웹사이트 및 지원 문의의 개인정보 처리 방식을 안내합니다.",
      [
        [
          "프로젝트 분석은 Mac 안에서 처리합니다",
          "MajorDex는 사용자가 선택한 폴더의 코드를 Mac에서 정적 분석합니다. 프로젝트 파일은 읽기만 하며 빌드·설치·실행하지 않습니다. 앱 자체에는 네트워크 통신이나 자동 업로드 기능이 없고, 외부 AI 서비스도 이용하지 않습니다. 계정 기능은 없으며, 사용 통계를 수집하거나 사용자를 추적하지 않습니다."
        ],
        [
          "Mac에 저장되는 정보",
          "MajorDex는 분석 결과인 구조 그래프, 검색 인덱스와 캐시, 메모와 저장한 뷰, 화면 스타일 설정을 Mac의 앱 전용 저장 공간에 보관합니다. 선택한 폴더를 다시 열 수 있도록 접근 권한 정보(북마크)도 저장합니다. 분석에 사용하는 소스 파일의 스냅샷도 Mac 안에서 처리하며, 앱은 이 정보나 프로젝트 파일을 개발자에게 보내지 않습니다."
        ],
        [
          "저장 데이터와 접근 권한을 삭제하는 방법",
          "‘현재 프로젝트 닫기’는 MajorDex에서 열려 있는 프로젝트를 닫는 기능입니다. 저장된 데이터와 폴더 접근 권한은 그대로 유지됩니다. 이를 지우려면 ‘저장 데이터 관리…’를 이용해 주세요. ‘모두 삭제…’를 선택하면 모든 프로젝트의 분석 캐시, 사용자 편집 내용과 저장된 폴더 접근 권한을 삭제할 수 있습니다. 원본 프로젝트 파일에는 영향을 주지 않으며, 화면 스타일 설정은 남을 수 있습니다. 접근 권한을 삭제한 프로젝트를 다시 열려면 해당 폴더를 다시 선택해야 합니다."
        ],
        [
          "내보낸 파일과 외부 링크",
          "진단 정보나 구조 그래프는 사용자가 내보내기를 선택할 때만 파일로 저장됩니다. 내보낸 파일은 지정한 위치에 남으며, 앱의 저장 데이터를 삭제해도 자동으로 지워지지 않으므로 따로 삭제해야 합니다. 다른 사람에게 공유하기 전에는 파일 내용을 확인해 주세요. App Store, 제작자의 다른 앱, 개인정보처리방침, 지원 페이지로 연결되는 링크는 앱 밖에서 열리며, MajorDex는 링크에 프로젝트 데이터를 포함하지 않습니다. 방문한 웹사이트나 서비스에는 해당 서비스의 개인정보처리방침이 적용됩니다."
        ],
        [
          "웹사이트 방문 시 처리되는 정보",
          "이 웹사이트는 방문 통계를 수집하거나 이용자를 추적하는 별도의 도구를 사용하지 않습니다. 쿠키나 브라우저의 로컬 저장소에 정보를 저장하지 않고, 외부 폰트를 불러오거나 다른 서비스의 콘텐츠를 페이지에 삽입하지도 않습니다. 선택한 언어는 페이지 주소(URL)에만 반영됩니다. 다만 웹사이트를 제공하는 GitHub Pages는 GitHub 로그인 여부와 관계없이 보안을 위해 방문자의 IP 주소를 기록합니다. 자세한 내용은 아래 GitHub 공식 안내와 개인정보처리방침을 참고해 주세요."
        ],
        [
          "지원 문의에 남기는 정보",
          "문의 창구인 GitHub Issues는 공개 게시판입니다. 문의를 작성하면 GitHub 사용자명 등 공개 프로필 정보와 작성 내용, 첨부파일이 다른 사람에게 보이며 GitHub에서도 이를 처리합니다. Facta-Leopard는 문의에 답변하고 문제를 확인하는 데 이 정보를 사용하며, 문의 내용은 대화와 해결 과정을 기록하기 위해 남을 수 있습니다. 프로젝트의 소스 코드, 비밀번호나 API 키, 개인정보, 민감한 내용을 지우지 않은 진단 파일은 올리지 말아 주세요. 앱을 제거하거나 앱에 저장된 데이터를 삭제해도 GitHub의 문의 기록은 삭제되지 않습니다. 게시물 삭제에 관해 문의할 때도 민감한 정보는 적지 말아 주세요. GitHub가 관리하는 기록의 처리와 보관 방식은 GitHub 정책에 따릅니다."
        ],
        [
          "문의 및 방침 변경",
          "개인정보 처리에 관한 문의는 지원 페이지에서 안내하는 창구로 보내 주세요. 이 방침을 변경하는 경우에는 시행일을 함께 수정해 이 페이지에 게시합니다. 이 방침은 MajorDex 앱과 이 웹사이트에 적용되며, 링크를 통해 방문하는 다른 웹사이트에는 적용되지 않습니다."
        ]
      ]
    ],
    "support": [
      "지원 안내",
      "도움이 필요하신가요?",
      "MajorDex 사용 중 궁금한 점이나 오류가 있다면 GitHub의 공개 문의 게시판에 남겨 주세요.",
      [
        [
          "문의 전에 확인해 주세요",
          "문의 내용과 첨부파일은 누구나 볼 수 있습니다. 비공개 프로젝트의 소스 코드, 비밀번호, API 키, 개인정보는 올리지 말아 주세요. 진단 파일을 첨부할 때도 민감한 정보가 없는지 먼저 확인해 주세요. 프로젝트 전체를 공개할 필요 없이, 문제가 드러나는 간단한 예시로 설명해 주시면 됩니다. 게시판에 글을 남기려면 GitHub 계정이 필요하지만, MajorDex 앱은 계정 없이 사용할 수 있습니다."
        ],
        [
          "이런 정보를 알려 주세요",
          "사용 중인 MajorDex와 macOS 버전, 문제가 생기기 전의 작업 순서, 기대했던 동작과 실제로 나타난 결과를 적어 주세요. 앱에 포함된 샘플에서도 같은 문제가 발생하는지 알려 주시면 확인에 도움이 됩니다. 스크린샷이나 진단 파일은 내용을 살펴본 뒤 필요한 경우에만 첨부해 주세요. 문의마다 확인에 필요한 시간이 달라, 답변 기한을 미리 약속드리기는 어렵습니다."
        ],
        [
          "폴더 접근과 저장 데이터 관리",
          "폴더에 접근할 수 없다면 해당 프로젝트 폴더를 다시 선택해 주세요. ‘현재 프로젝트 닫기’는 프로젝트를 닫을 뿐, 저장된 데이터나 접근 권한을 지우지는 않습니다. 저장 데이터와 폴더 접근 권한을 삭제하려면 ‘저장 데이터 관리…’를 이용해 주세요. 이미 내보낸 파일은 앱의 저장 데이터와 별개이므로 저장한 위치에서 직접 삭제해야 합니다."
        ]
      ],
      "공개 문의 게시판 열기",
      "개인정보처리방침 보기"
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
    "references": [
      "GitHub Pages — Collecte de données",
      "Déclaration de confidentialité de GitHub"
    ],
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
      "Date d’effet : 2026-09-06 · Responsable : Facta-Leopard",
      "Votre projet reste sur votre Mac. Les informations liées à vos visites sur ce site ou à vos demandes d’assistance sont traitées séparément, comme indiqué ci-dessous.",
      [
        [
          "L’application MajorDex",
          "MajorDex effectue une analyse statique, sur votre Mac, des dossiers que vous sélectionnez. L’application lit les fichiers sans les modifier : elle ne compile pas le projet, ne l’exécute pas et n’installe aucun de ses éléments. Elle ne communique pas avec le réseau, n’envoie pas de fichiers automatiquement et ne fait appel à aucune IA distante. Elle ne propose pas de compte utilisateur et n’intègre aucun outil d’analyse d’usage ou de suivi."
        ],
        [
          "Les données conservées sur votre Mac",
          "Les graphes issus de l’analyse, les index de recherche et les caches d’analyse sont conservés dans l’espace de stockage privé de l’application sur macOS. Vos notes, vos vues enregistrées, les signets permettant de retrouver l’accès aux dossiers et vos préférences d’apparence y sont également enregistrés. Les instantanés du code source sont traités sur votre Mac. L’application ne transmet ni votre projet ni ces données à Facta-Leopard."
        ],
        [
          "Fermer un projet ou supprimer ses données",
          "La commande « Fermer le projet actuel » ferme le projet ouvert, mais conserve ses données et l’accès enregistré à son dossier. Dans « Gérer les données stockées... », vous pouvez supprimer les données d’un projet et son accès enregistré. La commande « Tout supprimer... » efface les caches, vos modifications et les signets d’accès de tous les projets. Ces opérations ne modifient pas les fichiers d’origine. Vos préférences d’apparence peuvent être conservées. Si vous supprimez l’accès enregistré à un projet, vous devrez sélectionner à nouveau son dossier pour le rouvrir."
        ],
        [
          "Fichiers exportés et liens externes",
          "Les fichiers de diagnostic et les graphes ne sont exportés que lorsque vous choisissez de les enregistrer. Vérifiez leur contenu avant de les partager. Ils restent à l’emplacement choisi et doivent être supprimés séparément. Si vous ouvrez un lien vers l’App Store, le site du développeur, la politique de confidentialité ou l’assistance, celui-ci s’ouvre en dehors de MajorDex. L’application ne joint aucune donnée du projet à ces liens. Les services que vous consultez appliquent leurs propres politiques."
        ],
        [
          "Ce site web",
          "Ce site statique n’utilise ni outil de mesure d’audience, ni script de suivi, ni cookie, ni stockage local dans le navigateur. Il ne charge pas de polices distantes et n’intègre pas de services tiers. Votre choix de langue figure uniquement dans l’URL de la page. Le site est hébergé par GitHub Pages, qui enregistre les adresses IP des visiteurs à des fins de sécurité, même sans connexion à un compte GitHub. Vous trouverez ci-dessous les liens vers la documentation et la déclaration de confidentialité de GitHub."
        ],
        [
          "Vos demandes d’assistance",
          "L’espace GitHub Issues est public. Si vous y publiez une demande, votre identité GitHub et les informations que vous partagez sont visibles par les autres visiteurs et traitées par GitHub. Facta-Leopard utilise ces informations pour vous répondre et examiner les problèmes signalés. Les échanges peuvent être conservés pour garder une trace de la discussion. Ne publiez pas le code source de votre projet, d’informations confidentielles ou personnelles, ni de fichiers de diagnostic dont les informations sensibles n’ont pas été retirées. Supprimer l’application ou ses données ne supprime pas les échanges sur GitHub. Pour toute question concernant leur suppression, passez par l’assistance sans ajouter de détails sensibles. Les données gérées par GitHub et leur durée de conservation sont soumises aux règles de GitHub."
        ],
        [
          "Questions et mises à jour",
          "Pour toute question concernant la confidentialité, rendez-vous sur la page d’assistance. Les modifications de cette politique seront publiées ici avec une nouvelle date d’effet. Cette politique s’applique à MajorDex et à ce site, mais pas aux sites tiers que vous choisissez de consulter."
        ]
      ]
    ],
    "support": [
      "Assistance",
      "Comment pouvons-nous vous aider ?",
      "Pour poser une question ou signaler un problème, utilisez l’espace public GitHub Issues de MajorDex.",
      [
        [
          "Avant de publier votre demande",
          "Toutes les demandes et leurs pièces jointes sont publiques. N’y incluez jamais le code source d’un projet privé, des mots de passe, des clés API ou des données personnelles. Retirez toute information sensible des fichiers de diagnostic avant de les joindre. Pour expliquer le problème, utilisez un exemple aussi simple que possible, sans données sensibles. Un compte GitHub est nécessaire pour publier une demande, mais pas pour utiliser MajorDex."
        ],
        [
          "Les informations utiles pour vous aider",
          "Précisez les versions de MajorDex et de macOS, les étapes que vous avez suivies, le résultat attendu et ce qui s’est réellement passé. Indiquez également si le problème se produit avec l’un des exemples fournis dans l’application. Relisez attentivement les captures d’écran et, si vous choisissez d’en joindre, les fichiers de diagnostic avant de les publier. Le temps nécessaire pour examiner une demande peut varier ; nous ne pouvons donc pas garantir un délai de réponse."
        ],
        [
          "Accès aux dossiers et données enregistrées",
          "Si MajorDex ne peut plus accéder à un projet, sélectionnez à nouveau son dossier. « Fermer le projet actuel » ferme le projet sans supprimer ses données ni l’accès enregistré au dossier. Pour supprimer les données d’un projet et ses signets d’accès, utilisez « Gérer les données stockées... ». Les fichiers exportés sont indépendants de ces données : ils restent à l’emplacement où vous les avez enregistrés et doivent être supprimés séparément."
        ]
      ],
      "Accéder à l’assistance publique sur GitHub",
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
    "references": [
      "GitHub Pages — Recopilación de datos",
      "Declaración de privacidad de GitHub"
    ],
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
      "Su proyecto permanece en su Mac. La información relacionada con las visitas a este sitio o las consultas de soporte se trata por separado, como se explica a continuación.",
      [
        [
          "La aplicación MajorDex",
          "MajorDex realiza un análisis estático en su Mac de las carpetas que usted selecciona. La aplicación lee los archivos del proyecto sin modificarlos y no compila, instala ni ejecuta el código. No se comunica a través de la red, no dispone de cuentas ni incorpora herramientas de análisis de uso o seguimiento. Tampoco envía archivos automáticamente ni utiliza IA remota."
        ],
        [
          "Los datos que se guardan en su Mac",
          "Los grafos generados a partir del análisis, los índices de búsqueda y las cachés de análisis se guardan en el espacio de almacenamiento privado de la aplicación en macOS. Allí también se conservan sus notas, las vistas guardadas, los marcadores que permiten recuperar el acceso a las carpetas y las preferencias de apariencia. Las instantáneas del código fuente se procesan en su Mac. La aplicación no envía su proyecto ni estos datos a Facta-Leopard."
        ],
        [
          "Cerrar un proyecto o eliminar sus datos",
          "La opción «Cerrar proyecto actual» cierra el proyecto abierto, pero conserva sus datos y el acceso guardado a la carpeta. En «Gestionar datos guardados…» puede eliminar los datos de un proyecto y su acceso guardado. La opción «Eliminar todo…» borra las cachés, los cambios que haya realizado en la aplicación y los marcadores de acceso de todos los proyectos. Estas operaciones no modifican los archivos originales. Las preferencias de apariencia pueden conservarse. Si elimina el acceso guardado a un proyecto, tendrá que seleccionar de nuevo su carpeta para volver a abrirlo."
        ],
        [
          "Archivos exportados y enlaces externos",
          "Los archivos de diagnóstico y los grafos solo se exportan cuando usted decide guardarlos. Revise su contenido antes de compartirlos. Permanecen en la ubicación elegida y deben eliminarse por separado. Si abre un enlace a App Store, al sitio del desarrollador, a la política de privacidad o al soporte, se abrirá fuera de MajorDex. La aplicación no adjunta datos del proyecto a estos enlaces. Los servicios que visite tienen sus propias políticas."
        ],
        [
          "Este sitio web",
          "Este sitio estático no utiliza herramientas de análisis de visitas, scripts de seguimiento, cookies ni almacenamiento local del navegador. Tampoco carga fuentes remotas ni incorpora servicios de terceros. El idioma seleccionado solo queda reflejado en la URL de la página. El sitio está alojado en GitHub Pages, que registra las direcciones IP de los visitantes por motivos de seguridad, incluso cuando no han iniciado sesión en GitHub. A continuación encontrará los enlaces a la documentación y a la declaración de privacidad de GitHub."
        ],
        [
          "Las consultas de soporte",
          "GitHub Issues es un espacio público. Si publica una consulta, su identidad de GitHub y la información que comparta serán visibles para otras personas y se procesarán en GitHub. Facta-Leopard utiliza esa información para responder a las consultas e investigar los problemas comunicados. Los mensajes pueden conservarse como registro de la conversación. No publique el código fuente de su proyecto, información confidencial o personal, ni archivos de diagnóstico de los que no se hayan retirado los datos sensibles. Eliminar la aplicación o sus datos no elimina los registros de GitHub. Si tiene preguntas sobre su eliminación, utilice el soporte sin añadir detalles sensibles. Los registros que gestiona GitHub y sus plazos de conservación se rigen por las políticas de GitHub."
        ],
        [
          "Consultas y actualizaciones",
          "Si tiene alguna pregunta sobre privacidad, visite la página de soporte. Los cambios en esta política se publicarán aquí con una nueva fecha de entrada en vigor. Esta política se aplica a MajorDex y a este sitio, pero no a los sitios de terceros que decida visitar."
        ]
      ]
    ],
    "support": [
      "Soporte",
      "¿En qué podemos ayudarle?",
      "Para hacer una consulta o comunicar un problema, utilice el espacio público de MajorDex en GitHub Issues.",
      [
        [
          "Antes de publicar su consulta",
          "Todas las consultas y sus archivos adjuntos son públicos. Nunca incluya código fuente de proyectos privados, contraseñas, claves API ni datos personales. Retire cualquier información sensible de los archivos de diagnóstico antes de adjuntarlos. Explique el problema con un ejemplo lo más sencillo posible y sin datos sensibles. Para publicar una consulta se necesita una cuenta de GitHub, pero no para utilizar MajorDex."
        ],
        [
          "Qué información nos ayuda a investigar",
          "Indique las versiones de MajorDex y macOS, los pasos que siguió, el resultado que esperaba y lo que ocurrió. Señale también si el problema se produce con alguno de los ejemplos incluidos en la aplicación. Revise detenidamente las capturas de pantalla y, si decide adjuntarlos, los archivos de diagnóstico antes de publicarlos. El tiempo necesario para revisar cada consulta puede variar, por lo que no podemos garantizar un plazo de respuesta."
        ],
        [
          "Acceso a carpetas y datos guardados",
          "Si MajorDex ya no puede acceder a un proyecto, seleccione de nuevo su carpeta. «Cerrar proyecto actual» cierra el proyecto sin eliminar sus datos ni el acceso guardado a la carpeta. Para eliminar los datos de un proyecto y sus marcadores de acceso, utilice «Gestionar datos guardados…». Los archivos exportados son independientes de esos datos: permanecen donde los guardó y deben eliminarse por separado."
        ]
      ],
      "Abrir el soporte público en GitHub",
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
    "references": [
      "GitHub Pages — Datenerhebung",
      "GitHub-Datenschutzerklärung"
    ],
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
      "Ihre Projektdaten bleiben auf Ihrem Mac. Wie Daten beim Besuch dieser Website oder bei einer Supportanfrage verarbeitet werden, erläutern wir gesondert weiter unten.",
      [
        [
          "Datenverarbeitung in der MajorDex-App",
          "MajorDex führt die statische Analyse der von Ihnen ausgewählten Ordner ausschließlich auf Ihrem Mac durch. Die App liest Ihre Projektdateien, ohne sie zu verändern, und kompiliert, installiert oder führt den Projektcode nicht aus. Sie stellt keine Netzwerkverbindungen her, lädt keine Daten automatisch hoch und nutzt keine externen KI-Dienste. Die App verfügt über keine Benutzerkonten und verwendet keine Werkzeuge zur Nutzungsanalyse oder zum Tracking."
        ],
        [
          "Welche Daten auf Ihrem Mac gespeichert werden",
          "MajorDex speichert die aus der Analyse erzeugten Graphen, Suchindizes und Analyse-Caches sowie Ihre Notizen, gesicherten Ansichten und Darstellungseinstellungen im app-eigenen Speicherbereich unter macOS. Dort liegen auch die Lesezeichen, mit denen die App den von Ihnen erlaubten Ordnerzugriff für später sichert. Momentaufnahmen des Quellcodes werden ebenfalls lokal verarbeitet. Die App übermittelt weder Ihr Projekt noch diese Daten an Facta-Leopard."
        ],
        [
          "Gespeicherte Daten und Zugriffe verwalten",
          "Mit „Aktuelles Projekt schließen“ schließen Sie das geöffnete Projekt in MajorDex. Gesicherte Zugriffe und gespeicherte Daten bleiben dabei erhalten. Unter „Gesicherte Daten verwalten …“ können Sie die gespeicherten Daten und den gesicherten Zugriff eines einzelnen Projekts löschen. Mit „Alle löschen …“ entfernen Sie die Projekt-Caches, Ihre in der App gespeicherten Bearbeitungen und die Zugriffslesezeichen aller Projekte. Die ursprünglichen Projektdateien werden nicht verändert. Darstellungseinstellungen können erhalten bleiben. Wenn Sie einen Projektzugriff gelöscht haben, müssen Sie den betreffenden Ordner erneut auswählen, um das Projekt wieder zu öffnen."
        ],
        [
          "Exportierte Dateien und externe Links",
          "Diagnose- und Graphdateien werden nur exportiert, wenn Sie sie ausdrücklich speichern. Prüfen Sie ihren Inhalt, bevor Sie die Dateien weitergeben. Exporte bleiben am gewählten Speicherort und müssen bei Bedarf separat gelöscht werden. Links zum App Store, zur Entwicklerseite sowie zu Datenschutz und Support werden außerhalb der App geöffnet, wenn Sie sie aufrufen. MajorDex übermittelt dabei keine Projektdaten über diese Links. Für die besuchten Dienste gelten die jeweiligen Datenschutzbestimmungen."
        ],
        [
          "Datenverarbeitung auf dieser Website",
          "Diese statische Website verwendet keine Nutzungsanalyse, Tracking-Skripte, Cookies oder lokalen Browserspeicher. Sie lädt keine externen Schriftarten und bindet keine Dienste Dritter ein. Ihre Sprachauswahl wird ausschließlich in der Seiten-URL festgehalten. Die Website wird auf GitHub Pages gehostet. GitHub Pages protokolliert die IP-Adressen von Besuchern zu Sicherheitszwecken, auch wenn sie nicht bei GitHub angemeldet sind. Weitere Informationen finden Sie in der unten verlinkten GitHub-Dokumentation und der Datenschutzerklärung von GitHub."
        ],
        [
          "Daten aus Supportanfragen",
          "GitHub Issues ist öffentlich: Wenn Sie dort einen Beitrag veröffentlichen, sind Ihr GitHub-Profil und die von Ihnen geteilten Inhalte für andere sichtbar und werden von GitHub verarbeitet. Facta-Leopard nutzt Supportanfragen, um Ihnen zu antworten und Probleme zu untersuchen. Die Beiträge können als Dokumentation des Gesprächsverlaufs erhalten bleiben. Veröffentlichen Sie keinen Projektquellcode, keine vertraulichen Angaben und keine personenbezogenen Daten. Entfernen Sie solche Angaben auch aus Diagnosedateien, bevor Sie diese teilen. Das Löschen der App oder ihrer gespeicherten Daten entfernt keine Beiträge auf GitHub. Wenden Sie sich bei Fragen zur Entfernung von Beiträgen über die Supportseite an uns, ohne weitere sensible Angaben zu veröffentlichen. Für Daten, die GitHub selbst verwaltet, und deren Aufbewahrung gelten die Bestimmungen von GitHub."
        ],
        [
          "Fragen und Änderungen dieser Erklärung",
          "Bei Fragen zum Datenschutz erreichen Sie uns über die Supportseite. Änderungen dieser Datenschutzerklärung veröffentlichen wir auf dieser Seite und aktualisieren dabei das Gültigkeitsdatum. Die Erklärung gilt für MajorDex und diese Website, nicht für externe Websites, die Sie über einen Link besuchen."
        ]
      ]
    ],
    "support": [
      "Support",
      "Hilfe zu MajorDex",
      "Fragen und Fehlermeldungen nehmen wir im öffentlichen GitHub-Issue-Tracker von MajorDex entgegen.",
      [
        [
          "Was Sie vor dem Veröffentlichen wissen sollten",
          "Alle Beiträge und Anhänge sind öffentlich einsehbar. Veröffentlichen Sie weder Quellcode aus privaten Projekten noch Passwörter, API-Schlüssel oder personenbezogene Daten. Entfernen Sie vertrauliche und personenbezogene Angaben auch aus Diagnosedateien, bevor Sie diese anhängen. Beschreiben Sie das Problem anhand eines möglichst kleinen Beispiels ohne sensible Inhalte. Zum Erstellen eines Beitrags benötigen Sie ein GitHub-Konto; für die Nutzung von MajorDex ist kein Konto erforderlich."
        ],
        [
          "So können wir das Problem nachvollziehen",
          "Nennen Sie Ihre MajorDex- und macOS-Version und beschreiben Sie, was Sie getan haben, welches Ergebnis Sie erwartet haben und was tatsächlich passiert ist. Geben Sie auch an, ob das Problem mit einem mitgelieferten Beispiel auftritt. Prüfen Sie Screenshots und gegebenenfalls exportierte Diagnosedateien sorgfältig, bevor Sie sie anhängen. Wir können keine feste Antwortzeit zusagen."
        ],
        [
          "Ordnerzugriff und gespeicherte Daten",
          "Wenn MajorDex nicht auf ein Projekt zugreifen kann, wählen Sie den Projektordner erneut aus. „Aktuelles Projekt schließen“ schließt das Projekt, ohne gespeicherte Daten oder den gesicherten Ordnerzugriff zu löschen. Über „Gesicherte Daten verwalten …“ können Sie Projektdaten und die Lesezeichen für den Ordnerzugriff löschen. Bereits exportierte Dateien bleiben davon unberührt und liegen weiterhin an dem Ort, an dem Sie sie gespeichert haben."
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
    "references": [
      "GitHub Pages — データ収集",
      "GitHub プライバシーステートメント"
    ],
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
      "適用開始日：2026-09-06 · 運営者：Facta-Leopard",
      "プロジェクトのデータは、お使いのMac内で扱います。ウェブサイトの閲覧やサポートへのお問い合わせに伴う情報の取り扱いについては、以下で分けて説明します。",
      [
        [
          "アプリ内でのデータの取り扱い",
          "MajorDexは、選択したフォルダをMac内で静的に解析します。プロジェクトのファイルは読み取り専用で扱い、ビルドやインストール、コードの実行は行いません。アプリ自体はネットワーク通信や自動アップロードを行わず、外部のAIサービスも使用しません。アカウント機能はなく、利用状況の分析やユーザーの追跡も行いません。"
        ],
        [
          "Macに保存されるデータ",
          "解析結果のグラフ、検索インデックス、解析キャッシュ、メモ、保存したビュー、外観の設定は、macOS上のアプリ専用の保存領域に保管します。選択したフォルダへのアクセス権を保持するためのブックマークも、同じ領域に保存します。ソースコードのスナップショットもMac内で処理し、MajorDexがプロジェクトやこれらのデータをFacta-Leopardに送信することはありません。"
        ],
        [
          "保存データとアクセス権の管理・削除",
          "「現在のプロジェクトを閉じる」で作業を終了しても、保存済みのアクセス権とデータは残ります。「保存データの管理…」では、プロジェクトごとに保存データとアクセス権を削除できます。「すべて削除…」を選ぶと、全プロジェクトのキャッシュ、アプリ内での編集内容、保存済みのアクセス用ブックマークが削除されます。元のプロジェクトファイルは変更されません。外観の設定は残る場合があります。アクセス権を削除したプロジェクトを再び開くには、そのフォルダを選び直してください。"
        ],
        [
          "ファイルの書き出しと外部リンク",
          "診断情報やグラフのファイルは、ご自身で保存を選んだときにのみ書き出されます。共有する前に、内容を確認してください。書き出したファイルは指定した保存先に残るため、不要になった場合は別途削除する必要があります。App Store、開発者サイト、プライバシー、サポートへのリンクは、選択するとアプリの外で開きます。MajorDexがこれらのリンクにプロジェクトのデータを付け加えることはありません。リンク先のサービスでは、それぞれのポリシーが適用されます。"
        ],
        [
          "このウェブサイトでの取り扱い",
          "この静的なウェブサイトでは、アクセス解析、追跡スクリプト、Cookie、ブラウザのローカルストレージを使用していません。外部フォントの読み込みや、第三者サービスの埋め込みも行っていません。選択した言語は、ページのURLにのみ反映されます。サイトの配信にはGitHub Pagesを利用しています。GitHub Pagesはセキュリティ上の目的で、GitHubへのログインの有無にかかわらず訪問者のIPアドレスを記録します。詳しくは、下記のGitHub公式ドキュメントとプライバシーステートメントをご確認ください。"
        ],
        [
          "お問い合わせの記録",
          "GitHub Issuesへの投稿は公開されます。GitHub上の公開プロフィール、投稿内容、添付ファイルは他の方からも閲覧でき、GitHubによって処理されます。Facta-Leopardは、お問い合わせへの回答や問題の調査に投稿内容を使用します。投稿は、やり取りの記録として残る場合があります。プロジェクトのソースコード、秘密情報、個人情報を投稿しないでください。診断ファイルを共有する場合も、こうした情報を除いてから投稿してください。アプリやアプリ内のデータを削除しても、GitHub上の記録は削除されません。記録の削除については、機密情報や個人情報を追加せずに、サポート窓口からお問い合わせください。GitHubが管理する記録とその保存期間については、GitHubのポリシーが適用されます。"
        ],
        [
          "お問い合わせとポリシーの変更",
          "プライバシーに関するご質問は、サポートページからお問い合わせください。このポリシーを変更する場合は、適用開始日を更新してこのページに掲載します。対象はMajorDexとこのウェブサイトです。リンク先など、外部のウェブサイトには適用されません。"
        ]
      ]
    ],
    "support": [
      "サポート",
      "MajorDexについてのお問い合わせ",
      "ご質問や不具合の報告は、MajorDexのGitHub Issuesで受け付けています。投稿内容はすべて公開されます。",
      [
        [
          "投稿する前に",
          "投稿と添付ファイルは、どなたでも閲覧できます。非公開プロジェクトのソースコード、パスワード、APIキー、個人情報は含めないでください。診断ファイルを添付する場合も、秘密情報や個人情報を除いてください。問題の説明には、機密情報を含まない、できるだけ小さな例をお使いください。投稿にはGitHubアカウントが必要ですが、MajorDexの利用にはアカウントは不要です。"
        ],
        [
          "調査に役立つ情報",
          "MajorDexとmacOSのバージョン、行った操作、期待した結果、実際に起きたことをお知らせください。アプリに付属するサンプルでも同じ問題が起きるかどうかもご記載ください。スクリーンショットや、ご自身で書き出した診断ファイルを添付する場合は、事前に内容を十分に確認してください。お問い合わせの内容によって確認にかかる時間が異なるため、回答期限のお約束はできません。"
        ],
        [
          "フォルダへのアクセスと保存データ",
          "プロジェクトにアクセスできない場合は、プロジェクトフォルダを選び直してください。「現在のプロジェクトを閉じる」で作業を終了しても、保存済みのアクセス権とデータは削除されません。プロジェクトの保存データやアクセス用ブックマークは、「保存データの管理…」から削除できます。書き出したファイルはその対象に含まれず、指定した保存先に残ります。"
        ]
      ],
      "GitHub Issuesを開く（公開）",
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
    "references": [
      "GitHub Pages — 数据收集",
      "GitHub 隐私声明"
    ],
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
      "本政策说明 MajorDex 会在您的 Mac 上保存哪些信息，以及您访问本网站或联系支持时，相关信息会如何处理。",
      [
        [
          "应用如何处理项目",
          "MajorDex 仅对您主动选择的文件夹进行本地静态分析。应用只读取项目文件，不会修改文件，也不会构建、安装或执行项目代码。应用本身不进行网络通信，不设账户系统，也不进行使用情况统计、跟踪或自动上传，不使用远程 AI。"
        ],
        [
          "哪些数据保存在 Mac 上",
          "分析生成的结构图、搜索索引、分析缓存、您的笔记和已保存视图，以及用于保留文件夹访问权限的书签和外观设置，都保存在 macOS 的应用专用存储空间中。源代码快照也只在本地处理。应用不会将您的项目或上述数据发送给 Facta-Leopard。"
        ],
        [
          "管理和删除已保存的数据",
          "选择“关闭当前项目”会关闭正在查看的项目，但不会删除已保存的访问权限或数据。您可以在“管理存储的数据…”中删除某个项目的存储数据和访问权限，也可以选择“全部删除…”移除所有项目的缓存、您在应用中保存的编辑内容和已保存的文件夹访问书签。这些操作不会更改原始项目文件；外观设置可能仍会保留。删除某个项目的访问权限后，如需再次打开该项目，必须重新选择其文件夹。"
        ],
        [
          "导出文件和外部链接",
          "只有在您选择保存时，MajorDex 才会生成诊断或结构图导出文件。分享前，请先检查文件内容。导出文件会保留在您选择的位置，不随应用内数据一同删除，需要另行删除。您可以自行打开 App Store、开发者、隐私政策和支持链接；这些链接会在应用外打开，MajorDex 不会随链接附加项目数据。您访问的服务适用各自的政策。"
        ],
        [
          "访问本网站时的信息处理",
          "本网站为静态网站，不使用访问分析工具、跟踪脚本、Cookie 或浏览器本地存储，也不加载远程字体或嵌入第三方服务。语言选择仅体现在页面网址中。本网站由 GitHub Pages 托管；即使您未登录 GitHub，GitHub Pages 也会出于安全目的记录您的 IP 地址。详情请参阅下方的 GitHub 官方文档和隐私声明。"
        ],
        [
          "支持咨询及相关记录",
          "GitHub Issues 是公开讨论区。您发布问题后，您的 GitHub 公开个人资料、发布的内容及附件会对其他人公开，并由 GitHub 处理。Facta-Leopard 会使用您提交的内容回复咨询、排查问题，相关记录可能会作为讨论记录保留。请勿发布项目源代码、密码或密钥等机密信息、个人信息，或尚未移除敏感内容的诊断文件。卸载应用或删除应用内数据不会删除 GitHub 上的记录。如需咨询记录删除事宜，请通过支持页面联系我们，不要在咨询中加入敏感信息。由 GitHub 管理的记录及其保存期限，适用 GitHub 的政策。"
        ],
        [
          "隐私咨询和政策更新",
          "如有隐私方面的问题，请通过支持页面联系我们。本政策如有变更，会在此页面公布并更新生效日期。本政策适用于 MajorDex 和本网站，不适用于您自行访问的第三方网站。"
        ]
      ]
    ],
    "support": [
      "支持",
      "需要帮助吗？",
      "如有使用问题或需要报告错误，请前往 MajorDex 的公开 GitHub Issues 讨论区。",
      [
        [
          "提交前，请确认内容可以公开",
          "所有问题和附件都会公开。请勿提交非公开项目的源代码、密码、API 密钥、个人信息，或尚未移除敏感内容的诊断文件。请用尽可能简短、不含敏感信息的示例说明问题。发布问题需要 GitHub 账户，但使用 MajorDex 无需账户。"
        ],
        [
          "提供哪些信息有助于排查",
          "请注明 MajorDex 和 macOS 的版本，并说明操作步骤、预期结果及实际发生的情况。如果测试过内置示例，也请说明是否出现同样的问题。附加截图或您自行导出的诊断文件前，请仔细检查其中的内容。每个问题所需的排查时间不同，因此我们无法承诺固定的回复期限。"
        ],
        [
          "恢复文件夹访问或清理数据",
          "如果无法访问项目，请重新选择项目文件夹。“关闭当前项目”只会关闭正在查看的项目，不会删除已保存的访问权限或数据。如需删除项目数据和文件夹访问书签，请使用“管理存储的数据…”。导出文件不属于这些存储数据，仍会保留在您保存的位置，需要另行删除。"
        ]
      ],
      "前往公开的 GitHub Issues",
      "查看隐私政策"
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
    "references": [
      "GitHub Pages — 資料蒐集",
      "GitHub 隱私權聲明"
    ],
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
      "本政策說明 MajorDex 會在您的 Mac 上儲存哪些資料，以及您造訪本網站或聯絡支援時，相關資訊的處理方式。",
      [
        [
          "MajorDex 如何讀取專案",
          "MajorDex 只會在本機對您自行選取的資料夾進行靜態分析。App 以唯讀方式讀取專案檔案，不會修改檔案，也不會建置、安裝或執行專案程式碼。App 本身不進行網路通訊，沒有帳號系統，也不進行使用情形分析、追蹤或自動上傳，且不使用遠端 AI。"
        ],
        [
          "儲存在裝置上的資料",
          "分析產生的結構圖、搜尋索引、分析快取、您的筆記與已儲存的檢視，以及用來保留資料夾存取權限的書籤和外觀設定，都儲存在 macOS 的 App 專用儲存空間。原始碼快照也在本機處理。App 不會將您的專案或上述資料傳送給 Facta-Leopard。"
        ],
        [
          "關閉專案與刪除資料的差別",
          "「關閉目前專案」會關閉您正在檢視的專案，但會保留已儲存的存取權限和資料。您可以在「管理儲存的資料…」中刪除個別專案的儲存資料及存取權限，或選擇「全部刪除…」，移除所有專案的快取、您在 App 中儲存的編輯內容和已儲存的資料夾存取權限紀錄。這些操作不會變更原始專案檔案，外觀設定則可能保留。刪除專案的存取權限後，若要再次開啟該專案，須重新選取其資料夾。"
        ],
        [
          "匯出檔案與開啟外部連結",
          "只有在您選擇儲存時，MajorDex 才會產生診斷或結構圖匯出檔案。分享前，請先確認檔案內容。匯出的檔案會留在您指定的位置，不會隨 App 內的資料一併刪除，須另外刪除。您可以自行開啟 App Store、開發者、隱私權政策與支援連結；這些連結會在 App 外開啟，MajorDex 不會隨連結附上專案資料。您前往的服務適用各自的政策。"
        ],
        [
          "本網站如何處理瀏覽資料",
          "本網站是靜態網站，不使用流量分析工具、追蹤指令碼、Cookie 或瀏覽器本機儲存空間，也不載入遠端字型或嵌入第三方服務。您選擇的語言只記錄在頁面網址中。網站由 GitHub Pages 代管；即使未登入 GitHub，GitHub Pages 仍會基於安全目的記錄訪客的 IP 位址。詳情請參閱下方的 GitHub 官方文件與隱私權聲明。"
        ],
        [
          "支援需求與討論紀錄",
          "GitHub Issues 是公開討論區。您發文後，其他人都能查看您的 GitHub 公開個人檔案、發文內容及附件，GitHub 也會處理這些資訊。Facta-Leopard 會使用您提交的內容回覆詢問、調查問題，相關資料可能會留存為討論紀錄。請勿張貼專案原始碼、密碼或金鑰等機密資訊、個人資料，或尚未移除敏感內容的診斷檔案。移除 App 或刪除 App 內的資料，不會刪除 GitHub 上的紀錄。如果您想詢問如何刪除紀錄，請透過支援頁面聯絡我們，並避免在詢問內容中加入敏感資訊。GitHub 所管理的紀錄及其保存期限，依 GitHub 的政策辦理。"
        ],
        [
          "隱私權問題與政策異動",
          "若有隱私權相關問題，請透過支援頁面與我們聯絡。本政策如有異動，將在此頁面公布並更新生效日期。本政策適用於 MajorDex 與本網站，不涵蓋您自行造訪的第三方網站。"
        ]
      ]
    ],
    "support": [
      "支援",
      "需要協助嗎？",
      "使用上有疑問，或想回報錯誤？請到 MajorDex 的公開 GitHub Issues 討論區提出。",
      [
        [
          "發文前，請先移除敏感資訊",
          "所有問題與附件都會公開。請勿附上非公開專案的原始碼、密碼、API 金鑰、個人資料，或尚未移除敏感內容的診斷檔案。請以精簡、不含敏感資訊的範例說明問題。發文需要 GitHub 帳號，但使用 MajorDex 不需要帳號。"
        ],
        [
          "如何提供有助於重現問題的資訊",
          "請提供 MajorDex 與 macOS 版本，說明您的操作步驟、預期結果，以及實際發生的情況。如果曾用內建範例測試，也請告知是否遇到相同問題。截圖或自行匯出的診斷檔案，請仔細檢查後再附上。每個問題需要的確認時間不同，因此無法事先承諾確切的回覆期限。"
        ],
        [
          "重新取得資料夾存取權限或清除資料",
          "若無法存取專案，請重新選取專案資料夾。「關閉目前專案」只會關閉您正在檢視的專案，不會刪除已儲存的存取權限或資料。若要刪除專案資料與資料夾存取書籤，請使用「管理儲存的資料…」。匯出檔案會另外留在您儲存的位置，須自行刪除。"
        ]
      ],
      "前往公開的 GitHub Issues",
      "查看隱私權政策"
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
