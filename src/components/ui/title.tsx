import { useTranslation } from "react-i18next";

export default function Title({ text }: { text: string }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center h-48">
      <h1 className="text-subtitle font-medium">{t(text)}</h1>
    </div>
  );
}
