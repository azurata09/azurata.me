export const languages = {
    ja: '日本語',
    en: 'English',
};

export const defaultLang = 'ja';

export const ui = {
    ja: {
        'nav.home': 'ホーム',
        'section.about': '自己紹介',
        'section.education': '学歴',
        'section.experience': '職歴',
        'section.projects': '成果物',
        'section.achievements': '資格・受賞・発表',
        'section.certifications': '資格',
        'section.awards': '受賞',
        'section.presentations': '発表',
        'project.viewDetails': '詳細を見る',
        'modal.liveDemo': 'Live Demo',
        'modal.relatedLinks': '関連リンク',
        'footer.builtWith': 'Built with Astro & Tailwind CSS.',
    },
    en: {
        'nav.home': 'Home',
        'section.about': 'About Me',
        'section.education': 'Education',
        'section.experience': 'Experience',
        'section.projects': 'Projects',
        'section.achievements': 'Achievements',
        'section.certifications': 'Certifications',
        'section.awards': 'Awards',
        'section.presentations': 'Presentations',
        'project.viewDetails': 'View Details',
        'modal.liveDemo': 'Live Demo',
        'modal.relatedLinks': 'Related Links',
        'footer.builtWith': 'Built with Astro & Tailwind CSS.',
    },
} as const;

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    };
}
