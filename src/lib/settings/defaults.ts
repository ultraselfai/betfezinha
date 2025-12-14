export const defaultExperience = {
  identity: {
    siteName: "Fezinha do Dia",
    tagline: "Sua Sorte Todo Dia",
    footerText: "© 2025 Fezinha do Dia. Todos os direitos reservados.",
    footerDescription: "Fezinha do Dia é uma plataforma de entretenimento online, oferecendo os melhores jogos de slots, crash e cassino ao vivo. Jogue com responsabilidade e divirta-se!",
    supportEmail: "suporte@fezinhadodia.online",
    whatsapp: "5511999999999",
    telegramButtonLink: "", // @deprecated
    socialLinks: {
      instagram: "https://instagram.com/fezinhadodia",
      telegram: "https://t.me/fezinhadodia",
      youtube: "",
    },
    helpCenter: {
      whatsappLink: "",
      whatsappImageUrl: "",
      telegramLink: "",
      telegramImageUrl: "",
      emailSupport: "suporte@fezinhadodia.online",
    },
    floatingButtons: {
      telegram: {
        enabled: false,
        link: "",
        imageUrl: "",
      },
      whatsapp: {
        enabled: false,
        link: "",
        imageUrl: "",
      },
    },
  },
  seo: {
    title: "Fezinha do Dia - Sua Sorte Todo Dia",
    description: "A melhor plataforma de apostas do Brasil. Slots, Crash, Cassino ao Vivo e muito mais!",
    keywords: "apostas, jogos, cassino, slots, crash, fezinha",
  },
  theme: {
    primaryColor: "#00faff",
    secondaryColor: "#0a1628",
    accentColor: "#00ff88",
    highlightIconColor: "#f97316",
    favoriteIconColor: "#facc15",
    loaderBackgroundColor: "#050f1f",
    loaderSpinnerColor: "#00faff",
    navLabelColor: "#9ca3af",
    navActiveLabelColor: "#00E0FF",
    preset: "cyan",
  },
  media: {
    logo: {
      url: "/logo-horizontal.png",
      alt: "Logotipo Fezinha do Dia",
    },
    favicon: {
      url: "/favicon.ico",
    },
    loaderGifUrl: "",
    banners: [
      {
        id: "hero",
        title: "Banner Principal",
        subtitle: "Aposte no futuro",
        ctaLabel: "Depositar agora",
        ctaLink: "/depositar",
        imageUrl: "/banners/banner-default.jpg",
        active: true,
      },
    ],
    icons: {
      trophyIconUrl: "",
      highlightIconUrl: "",
      favoriteIconUrl: "",
      balanceCoinIconUrl: "",
      categoryAllIconUrl: "",
      categoryHotIconUrl: "",
      categorySlotsIconUrl: "",
      categoryCrashIconUrl: "",
      categoryLiveIconUrl: "",
      categoryFavoritesIconUrl: "",
    },
  },
  navigation: {
    bottomNav: [
      {
        id: "home",
        label: "Games",
        icon: "gamepad",
        href: "/",
        enabled: true,
        isMandatory: true,
      },
      {
        id: "associate",
        label: "Associado",
        icon: "users",
        href: "/associado",
        enabled: false,
        isMandatory: false,
      },
      {
        id: "wallet",
        label: "Carteira",
        icon: "wallet",
        href: "/carteira",
        enabled: true,
        isMandatory: true,
        requiresAuth: true,
      },
      {
        id: "promotions",
        label: "Promoções",
        icon: "sparkles",
        href: "/promocoes",
        enabled: false,
        isMandatory: false,
      },
      {
        id: "profile",
        label: "Perfil",
        icon: "user",
        href: "/perfil",
        enabled: true,
        isMandatory: true,
        requiresAuth: true,
      },
    ],
  },
};

export const defaultSettings = {
  general: {
    siteName: "Fezinha do Dia",
    timezone: "America/Sao_Paulo",
    currency: "BRL",
    language: "pt-BR",
    maintenanceMode: false,
    allowRegistration: true,
    requireEmailVerification: true,
    requireKYC: false,
    minAge: 18,
    gameColumns: 3,
  },
  // Configurações Financeiras
  financial: {
    minDeposit: 10,
    maxDeposit: 100000,
    minWithdrawal: 20,
    maxWithdrawal: 50000,
    depositFee: 0,
    withdrawalFee: 0,
    // Se true, cobra taxa da transação do usuário (netPayout=true na PodPay)
    // Se false, a plataforma absorve a taxa (netPayout=false - padrão para bets)
    chargeTransactionFee: false,
    // Limite para aprovação automática de saques (em reais)
    // Saques até esse valor são processados automaticamente
    // Saques acima desse valor precisam de aprovação manual do admin
    autoApprovalLimit: 100,
  },
  branding: {
    logoUrl: "/logo-horizontal.png",
    mobileBannerUrl: "",
  },
  experience: defaultExperience,
};
