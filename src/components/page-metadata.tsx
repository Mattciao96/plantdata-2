import { Helmet } from "react-helmet";


type PageMetadataProps = {
  title: string;
  description: string;
  image: string;
  url: string;
};

export default function PageMetadata(data: PageMetadataProps) {

  const { title, description, image, url } = data;
  return (
    <Helmet>
      <title>{ title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />


    </Helmet>
  );
}