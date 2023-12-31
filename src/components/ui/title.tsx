import { useTranslation } from "react-i18next";

export default function Title({ text}) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center h-64">
      <h1 className="text-5xl font-bold text-gray-800">{t(text)}</h1>
    </div>
  );
}
