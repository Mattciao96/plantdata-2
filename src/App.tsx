import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();

  const lngs: Record<string, { nativeName: string }> = {
    en: { nativeName: "English" },
    it: { nativeName: "Italiano" },
  };

  return (
    <div>
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          style={{
            fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
          }}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
