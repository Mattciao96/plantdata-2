import { useTranslation } from "react-i18next";

export default function Title({ text}) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center h-48">
      <h1 className="text-title font-medium">{t(text)}</h1>
    </div>
  );
}
